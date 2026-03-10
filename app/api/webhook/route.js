import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

const userState = {};

function formatDateTime(date, time) {
  const d = new Date(`${date}T${time}`);

  const formattedDate = d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const formattedTime = d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate}   ${formattedTime}`;
}

function slotStarted(date, time) {
  const slotStart = new Date(`${date}T${time}`);
  const now = new Date();
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
          "🚀 LogicLeap Coding Academy\n\nPlease register:\nhttps://logicleapcoding.com/register",
        );
        return new Response("ok", { status: 200 });
      }

      await sendMenu(from);
      return new Response("ok", { status: 200 });
    }

    if (text === "slots") {
      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("status", "available")
        .gte("date", today)
        .order("date");

      const valid = data.filter((s) => !slotStarted(s.date, s.start_time));

      if (!valid.length) {
        await sendText(from, "No classes available.");
        return new Response("ok", { status: 200 });
      }

      const days = [...new Set(valid.map((s) => s.date))];

      let msg = "📅 Select a day\n\n";

      days.forEach((d, i) => {
        const label = new Date(d).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        });

        msg += `${i + 1}️⃣ ${label}\n`;
      });

      userState[from] = { stage: "select_day", days };

      await sendText(from, msg);

      return new Response("ok", { status: 200 });
    }

    if (text === "myclass") {
      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked")
        .gt("date + start_time", "now()")
        .order("date")
        .order("start_time");
      const valid = data.filter((s) => !slotStarted(s.date, s.start_time));

      if (!valid.length) {
        await sendText(from, "You have no upcoming classes.");
        return new Response("ok", { status: 200 });
      }

      let msg = "📚 Your Upcoming Classes\n\n";

      valid.forEach((slot, i) => {
        msg += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
      });

      await sendText(from, msg);

      return new Response("ok", { status: 200 });
    }

    if (text === "cancel") {
      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked")
        .gt("date + start_time", "now()");

      const valid = data.filter((s) => !slotStarted(s.date, s.start_time));

      if (!valid.length) {
        await sendText(from, "You have no upcoming classes.");
        return new Response("ok", { status: 200 });
      }

      let msg = "❌ Which class do you want to cancel?\n\n";

      valid.forEach((slot, i) => {
        msg += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
      });

      msg += "\nReply: cancel 1";

      await sendText(from, msg);

      return new Response("ok", { status: 200 });
    }

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

      const valid = data.filter((s) => !slotStarted(s.date, s.start_time));

      const slot = valid[index];

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

    if (!isNaN(text)) {
      const state = userState[from];

      if (!state) {
        await sendText(from, "Send Hi to start.");
        return new Response("ok", { status: 200 });
      }

      if (state.stage === "select_day") {
        const date = state.days[parseInt(text) - 1];

        const { data } = await supabase
          .from("slots")
          .select("*")
          .eq("date", date)
          .eq("status", "available")
          .order("start_time");

        const valid = data.filter((s) => !slotStarted(s.date, s.start_time));

        let msg = "Available slots\n\n";

        valid.forEach((slot, i) => {
          msg += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
        });

        userState[from] = { stage: "select_slot", slots: valid };

        await sendText(from, msg);

        return new Response("ok", { status: 200 });
      }

      if (state.stage === "select_slot") {
        const slot = state.slots[parseInt(text) - 1];

        if (slotStarted(slot.date, slot.start_time)) {
          await sendText(from, "⚠️ This class has already started.");
          return new Response("ok", { status: 200 });
        }

        const today = new Date().toISOString().split("T")[0];

        const { data: bookings } = await supabase
          .from("slots")
          .select("*")
          .eq("student_phone", from)
          .eq("status", "booked")
          .gte("date", today);

        if (bookings.length >= 3) {
          await sendText(
            from,
            "⚠️ You already have 3 upcoming classes booked.",
          );
          return new Response("ok", { status: 200 });
        }

        await supabase
          .from("slots")
          .update({
            status: "booked",
            student_phone: from,
          })
          .eq("id", slot.id);

        await sendText(
          from,
          `✅ Class booked\n\n${formatDateTime(slot.date, slot.start_time)}`,
        );

        delete userState[from];

        return new Response("ok", { status: 200 });
      }
    }

    await sendText(from, "Send Hi to start.");
  } catch (err) {
    console.log(err);
  }

  return new Response("ok", { status: 200 });
}
