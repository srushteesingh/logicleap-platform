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

function isSlotStarted(date, startTime) {
  const now = new Date();

  const slotStart = new Date(`${date}T${startTime}`);

  return now >= slotStart;
}

async function sendText(to, text) {
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

async function sendMenu(to) {
  await fetch(`https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "interactive",
      interactive: {
        type: "button",
        body: {
          text: "🚀 LogicLeap Coding Academy\n\nHow can I help you today?",
        },
        action: {
          buttons: [
            { type: "reply", reply: { id: "slots", title: "View Classes" } },
            { type: "reply", reply: { id: "myclass", title: "My Classes" } },
            { type: "reply", reply: { id: "cancel", title: "Cancel Class" } },
          ],
        },
      },
    }),
  });
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

    const { data: student } = await supabase
      .from("students")
      .select("*")
      .eq("phone", from)
      .single();

    if (text === "hi" || text === "hello") {
      if (!student) {
        await sendText(
          from,
          "🚀 LogicLeap Coding Academy\n\nPlease register here:\nhttps://logicleapcoding.com/register",
        );

        return new Response("ok", { status: 200 });
      }

      await sendMenu(from);
      return new Response("ok", { status: 200 });
    }

    // VIEW CLASSES BUTTON
    if (text === "slots") {
      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("status", "available")
        .gte("date", today)
        .order("date");

      if (!data || data.length === 0) {
        await sendText(from, "No classes available right now.");
        return new Response("ok", { status: 200 });
      }

      const uniqueDays = [...new Set(data.map((s) => s.date))].slice(0, 7);

      let messageText = "📅 Select a day\n\n";

      uniqueDays.forEach((day, i) => {
        const d = new Date(day);

        const label = d.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        });

        messageText += `${i + 1}️⃣ ${label}\n`;
      });

      userState[from] = { stage: "select_day", days: uniqueDays };

      await sendText(from, messageText);

      return new Response("ok", { status: 200 });
    }

    // MY CLASSES
    if (text === "myclass") {
      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked")
        .gte("date", today)
        .order("date")
        .order("start_time");

      if (!data || data.length === 0) {
        await sendText(from, "You have no upcoming classes.");
        return new Response("ok", { status: 200 });
      }

      let msg = "📚 Your Upcoming Classes\n\n";

      data.forEach((slot, i) => {
        msg += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
      });

      await sendText(from, msg);

      return new Response("ok", { status: 200 });
    }

    // CANCEL MENU
    if (text === "cancel") {
      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked")
        .gte("date", today)
        .order("date")
        .order("start_time");

      if (!data || data.length === 0) {
        await sendText(from, "You have no upcoming classes.");
        return new Response("ok", { status: 200 });
      }

      let msg = "❌ Which class do you want to cancel?\n\n";

      data.forEach((slot, i) => {
        msg += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
      });

      msg += "\nReply: cancel 1";

      await sendText(from, msg);

      return new Response("ok", { status: 200 });
    }

    // CANCEL CLASS
    if (text.startsWith("cancel ")) {
      const index = parseInt(text.split(" ")[1]) - 1;

      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked")
        .gte("date", today)
        .order("date")
        .order("start_time");

      const slot = data?.[index];
      if (isSlotStarted(slot.date, slot.start_time)) {
        await sendText(
          from,
          "⚠️ This class has already started and cannot be cancelled.",
        );

        return new Response("ok", { status: 200 });
      }
      if (!slot) {
        await sendText(from, "Invalid class number.");
        return new Response("ok", { status: 200 });
      }

      await supabase
        .from("slots")
        .update({ status: "available", student_phone: null })
        .eq("id", slot.id);

      await sendText(
        from,
        `✅ Class cancelled\n\n${formatDateTime(slot.date, slot.start_time)}`,
      );

      return new Response("ok", { status: 200 });
    }

    // DAY OR SLOT SELECTION
    if (!isNaN(text)) {
      const state = userState[from];

      if (state && state.stage === "select_day") {
        const index = parseInt(text) - 1;
        const selectedDate = state.days[index];

        const { data } = await supabase
          .from("slots")
          .select("*")
          .eq("date", selectedDate)
          .eq("status", "available")
          .order("start_time");

        if (!data || data.length === 0) {
          await sendText(from, "No slots available.");
        } else {
          let msg = "Available slots\n\n";

          data.forEach((slot, i) => {
            msg += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
          });

          userState[from] = {
            stage: "select_slot",
            slots: data,
          };

          await sendText(from, msg);
        }

        return new Response("ok", { status: 200 });
      }

      if (state && state.stage === "select_slot") {
        const index = parseInt(text) - 1;
        const slot = state.slots[index];
        if (isSlotStarted(slot.date, slot.start_time)) {
          await sendText(
            from,
            "⚠️ This class has already started and cannot be booked.",
          );

          delete userState[from];
          return new Response("ok", { status: 200 });
        }

        const today = new Date().toISOString().split("T")[0];

        const { data: bookings } = await supabase
          .from("slots")
          .select("*")
          .eq("student_phone", from)
          .eq("status", "booked")
          .gte("date", today);

        if (bookings && bookings.length >= 3) {
          await sendText(
            from,
            "⚠️ You already have 3 upcoming classes booked.\n\nPlease cancel one before booking another.",
          );

          delete userState[from];
        } else {
          await supabase
            .from("slots")
            .update({
              status: "booked",
              student_phone: from,
            })
            .eq("id", slot.id);

          await sendText(
            from,
            `✅ Class booked!\n\n${formatDateTime(slot.date, slot.start_time)}`,
          );

          delete userState[from];
        }

        return new Response("ok", { status: 200 });
      }
    }

    await sendText(from, "Send Hi to start.");
  } catch (err) {
    console.log(err);
  }

  return new Response("ok", { status: 200 });
}
