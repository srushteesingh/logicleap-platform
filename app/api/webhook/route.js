import { createClient } from "@supabase/supabase-js";
function formatDateTime(date, time) {
  const d = new Date(date);

  const formattedDate = d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const [hour, minute] = time.split(":");

  const t = new Date();
  t.setHours(hour);
  t.setMinutes(minute);

  const formattedTime = t.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate}   ${formattedTime}`;
}
const userState = {};
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === "logicleap_verify") {
    return new Response(challenge, { status: 200 });
  }

  return new Response("Verification failed", { status: 403 });
}

export async function POST(req) {
  const body = await req.json();

  try {
    const message = body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

    if (!message) {
      return new Response("ok", { status: 200 });
    }

    const from = message.from;
    const { data: student } = await supabase
      .from("students")
      .select("*")
      .eq("phone", from)
      .single();

    const text =
      message.text?.body?.toLowerCase() ||
      message.interactive?.button_reply?.id ||
      "";

    let reply = "";

    // MENU BUTTONS
    if (text === "hi" || text === "hello") {
      // NEW USER
      if (!student) {
        await fetch(
          `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messaging_product: "whatsapp",
              to: from,
              type: "interactive",
              interactive: {
                type: "button",
                body: {
                  text: "🚀 LogicLeap Coding Academy\n\nWelcome! Are you new here?",
                },
                action: {
                  buttons: [
                    {
                      type: "reply",
                      reply: {
                        id: "register",
                        title: "Register for Class",
                      },
                    },
                  ],
                },
              },
            }),
          },
        );
      }

      // REGISTERED STUDENT
      else {
        await fetch(
          `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messaging_product: "whatsapp",
              to: from,
              type: "interactive",
              interactive: {
                type: "button",
                body: {
                  text: "🚀 LogicLeap Coding Academy\n\nHow can I help you today?",
                },
                action: {
                  buttons: [
                    {
                      type: "reply",
                      reply: {
                        id: "slots",
                        title: "View Classes",
                      },
                    },
                    {
                      type: "reply",
                      reply: {
                        id: "myclass",
                        title: "My Classes",
                      },
                    },
                    {
                      type: "reply",
                      reply: {
                        id: "cancel",
                        title: "Cancel Class",
                      },
                    },
                  ],
                },
              },
            }),
          },
        );
      }

      return new Response("ok", { status: 200 });
    }

    // VIEW AVAILABLE CLASSES
    // show next 7 days
    // show next 7 days
    // show available days with slots
    else if (text === "slots") {
      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .gte("date", today)
        .eq("status", "available")
        .order("date", { ascending: true });

      if (!data || data.length === 0) {
        reply = "No classes available right now.";
      } else {
        const uniqueDays = [...new Set(data.map((slot) => slot.date))].slice(
          0,
          7,
        );

        let message = "📅 Select a day\n\n";

        uniqueDays.forEach((day, i) => {
          const label = new Date(day).toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
          });

          message += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
        });

        userState[from] = {
          stage: "select_day",
          days: uniqueDays,
        };

        reply = message;
      }
    }

    // MY CLASSES
    else if (text === "myclass") {
      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked")
        .gte("date", today)
        .order("date", { ascending: true })
        .order("start_time", { ascending: true });

      if (!data || data.length === 0) {
        reply = "You do not have any booked classes.";
      } else {
        reply = "📚 Your Classes\n\n";

        data.forEach((slot, index) => {
          reply += `${index + 1}️⃣ ${slot.date} ${slot.start_time}\n`;
        });
      }
    }

    // CANCEL MENU
    else if (text === "cancel") {
      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked")
        .gte("date", today)
        .order("date", { ascending: true })
        .order("start_time", { ascending: true });

      if (!data || data.length === 0) {
        reply = "You do not have any booked classes.";
      } else {
        reply = "❌ Which class do you want to cancel?\n\n";

        data.forEach((slot, index) => {
          reply += `${index + 1}️⃣ ${slot.date} ${slot.start_time}\n`;
        });

        reply += "\nReply: cancel 1";
      }
    }

    // CANCEL CLASS
    else if (text.startsWith("cancel ")) {
      const index = parseInt(text.split(" ")[1]) - 1;

      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked")
        .gte("date", today)
        .order("date", { ascending: true })
        .order("start_time", { ascending: true });

      const slot = data?.[index];

      if (!slot) {
        reply = "Invalid class number.";
      } else {
        await supabase
          .from("slots")
          .update({
            status: "available",
            student_phone: null,
          })
          .eq("id", slot.id);

        reply = `✅ Class cancelled.\n\nDate: ${slot.date}\nTime: ${slot.start_time}`;
      }
    }

    // BOOK CLASS
    else if (!isNaN(text)) {
      const state = userState[from];

      if (!state) {
        reply = "Send *Hi* to start.";
      }

      // USER SELECTING DAY
      else if (state.stage === "select_day") {
        const index = parseInt(text) - 1;
        const selectedDate = state.days[index];

        if (!selectedDate) {
          reply = "Invalid day selection.";
        } else {
          const { data } = await supabase
            .from("slots")
            .select("*")
            .eq("date", selectedDate)
            .eq("status", "available")
            .order("start_time");

          if (!data || data.length === 0) {
            reply = "No available slots for that day.";
          } else {
            let message = "Available slots\n\n";

            data.forEach((slot, i) => {
              message += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
            });

            userState[from] = {
              stage: "select_slot",
              slots: data,
            };

            reply = message;
          }
        }
      }

      // USER SELECTING SLOT
      else if (state.stage === "select_slot") {
        const index = parseInt(text) - 1;
        const slot = state.slots[index];

        if (!slot) {
          reply = "Invalid slot selection.";
        } else {
          const today = new Date().toISOString().split("T")[0];

          const { data: bookings } = await supabase
            .from("slots")
            .select("*")
            .eq("student_phone", from)
            .eq("status", "booked")
            .gte("date", today);

          if (bookings && bookings.length >= 3) {
            reply =
              "⚠️ You already have 3 upcoming classes booked.\n\n" +
              "Please cancel one before booking another.";

            delete userState[from];
          } else {
            await supabase
              .from("slots")
              .update({
                status: "booked",
                student_phone: from,
              })
              .eq("id", slot.id);

            reply = `✅ Class booked!

${formatDateTime(slot.date, slot.start_time)}`;

            delete userState[from];
          }
        }
      }
    } else {
      reply = "Send *Hi* to see menu.";
    }

    await fetch(
      `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: from,
          type: "text",
          text: { body: reply },
        }),
      },
    );
  } catch (err) {
    console.error(err);
  }

  return new Response("ok", { status: 200 });
}
