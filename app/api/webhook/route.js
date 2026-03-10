import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

const userState = {};

function formatDateTime(date, time) {
  const d = new Date(date);

  const formattedDate = d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const t = new Date(`${date}T${time}`);

  const formattedTime = t.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate}   ${formattedTime}`;
}

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

    const text =
      message.text?.body?.toLowerCase() ||
      message.interactive?.button_reply?.id ||
      "";

    let reply = "";

    const { data: student } = await supabase
      .from("students")
      .select("*")
      .eq("phone", from)
      .single();

    // MENU
    if (text === "hi" || text === "hello") {
      if (!student) {
        await sendMessage(
          from,
          "🚀 LogicLeap Coding Academy\n\nPlease register here:\nhttps://logicleapcoding.com/register",
        );

        return new Response("ok", { status: 200 });
      }

      reply =
        "🚀 LogicLeap Coding Academy\n\n" +
        "1️⃣ View Classes\n" +
        "2️⃣ My Classes\n" +
        "3️⃣ Cancel Class";
    }

    // VIEW CLASSES
    else if (text === "1" || text === "slots") {
      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .gte("date", today)
        .eq("status", "available")
        .order("date", { ascending: true });

      if (!data || data.length === 0) {
        reply = "No classes available.";
      } else {
        const uniqueDays = [...new Set(data.map((s) => s.date))].slice(0, 7);

        let message = "📅 Select a day\n\n";

        uniqueDays.forEach((day, i) => {
          const d = new Date(day);

          const label = d.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          });

          message += `${i + 1}️⃣ ${label}\n`;
        });

        userState[from] = {
          stage: "select_day",
          days: uniqueDays,
        };

        reply = message;
      }
    }

    // MY CLASSES
    else if (text === "2" || text === "myclass") {
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
        reply = "You have no upcoming classes.";
      } else {
        reply = "📚 Your Upcoming Classes\n\n";

        data.forEach((slot, i) => {
          reply += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
        });
      }
    }

    // CANCEL MENU
    else if (text === "3" || text === "cancel") {
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
        reply = "You have no upcoming classes.";
      } else {
        reply = "❌ Which class do you want to cancel?\n\n";

        data.forEach((slot, i) => {
          reply += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
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

        reply = `✅ Class cancelled\n\n${formatDateTime(slot.date, slot.start_time)}`;
      }
    }

    // NUMBER INPUT (DAY OR SLOT)
    else if (!isNaN(text)) {
      const state = userState[from];

      if (!state) {
        reply = "Send *Hi* to start.";
      } else if (state.stage === "select_day") {
        const index = parseInt(text) - 1;
        const selectedDate = state.days[index];

        const { data } = await supabase
          .from("slots")
          .select("*")
          .eq("date", selectedDate)
          .eq("status", "available")
          .order("start_time");

        if (!data || data.length === 0) {
          reply = "No slots available.";
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
      } else if (state.stage === "select_slot") {
        const index = parseInt(text) - 1;
        const slot = state.slots[index];

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

          reply = `✅ Class booked!\n\n${formatDateTime(slot.date, slot.start_time)}`;

          delete userState[from];
        }
      }
    } else {
      reply = "Send *Hi* to start.";
    }

    await sendMessage(from, reply);
  } catch (err) {
    console.log(err);
  }

  return new Response("ok", { status: 200 });
}

async function sendMessage(to, text) {
  await fetch(`https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: text },
    }),
  });
}
