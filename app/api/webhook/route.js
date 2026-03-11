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
  const slot = new Date(`${date}T${time}`);
  const now = new Date();
  return now >= slot;
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
          text: "🚀 *LogicLeap Coding Academy*\n\nWelcome back!\n\nPlease choose an option:",
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

async function sendBackMenu(to, text) {
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
        body: { text: text },
        action: {
          buttons: [
            { type: "reply", reply: { id: "menu", title: "⬅️ Main Menu" } },
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
    if (!message) return new Response("ok", { status: 200 });

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

    if (text === "menu") {
      await sendMenu(from);
      return new Response("ok", { status: 200 });
    }

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

    if (text === "slots") {
      const today = new Date().toISOString().split("T")[0];

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("status", "available")
        .gte("date", today)
        .order("date");

      const valid = data.filter((s) => !slotStarted(s.date, s.start_time));

      const days = [...new Set(valid.map((s) => s.date))];

      if (!days.length) {
        await sendBackMenu(from, "No upcoming classes available right now.");
        return new Response("ok", { status: 200 });
      }

      let msg =
        "📅 *Choose a Day*\n\nHere are the upcoming class days available:\n\n";

      days.forEach((d, i) => {
        const label = new Date(d).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        });

        msg += `${i + 1}️⃣ ${label}\n`;
      });

      userState[from] = { stage: "select_day", days };

      await sendBackMenu(from, msg);

      return new Response("ok", { status: 200 });
    }

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

      const valid = data.filter((s) => !slotStarted(s.date, s.start_time));

      if (!valid.length) {
        await sendBackMenu(from, "📚 You have no upcoming classes.");
        return new Response("ok", { status: 200 });
      }

      let msg = "📚 *Your Upcoming Classes*\n\n";

      valid.forEach((slot, i) => {
        msg += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
      });

      await sendBackMenu(from, msg);

      return new Response("ok", { status: 200 });
    }

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

      const valid = data.filter((s) => !slotStarted(s.date, s.start_time));

      if (!valid.length) {
        await sendBackMenu(from, "You have no classes available to cancel.");
        return new Response("ok", { status: 200 });
      }

      let msg =
        "❌ *Cancel a Class*\n\nReply with the class number you'd like to cancel.\n\n";

      valid.forEach((slot, i) => {
        msg += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
      });

      msg += "\nExample: cancel 1";

      await sendBackMenu(from, msg);

      return new Response("ok", { status: 200 });
    }

    if (text.startsWith("cancel ")) {
      const index = parseInt(text.split(" ")[1]) - 1;

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked")
        .order("date")
        .order("start_time");

      const valid = data.filter((s) => !slotStarted(s.date, s.start_time));

      const slot = valid[index];

      if (!slot) {
        await sendBackMenu(from, "Invalid class number.");
        return new Response("ok", { status: 200 });
      }

      await supabase
        .from("slots")
        .update({ status: "available", student_phone: null })
        .eq("id", slot.id);

      await sendBackMenu(
        from,
        `✅ *Class Cancelled*\n\nYour booking has been removed.\n\n${formatDateTime(
          slot.date,
          slot.start_time,
        )}`,
      );

      return new Response("ok", { status: 200 });
    }

    if (!isNaN(text)) {
      const state = userState[from];

      if (!state) {
        await sendBackMenu(from, "Please start again from the main menu.");
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

        let msg =
          "⏰ *Available Class Slots*\n\nSelect the number of your preferred time:\n\n";

        valid.forEach((slot, i) => {
          msg += `${i + 1}️⃣ ${formatDateTime(slot.date, slot.start_time)}\n`;
        });

        userState[from] = { stage: "select_slot", slots: valid };

        await sendBackMenu(from, msg);

        return new Response("ok", { status: 200 });
      }

      if (state.stage === "select_slot") {
        const slot = state.slots[parseInt(text) - 1];

        if (slotStarted(slot.date, slot.start_time)) {
          await sendBackMenu(from, "⚠️ This class has already started.");
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
          await sendBackMenu(
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

        await sendBackMenu(
          from,
          `✅ *Class Booked Successfully!*\n\nYour session is scheduled for:\n\n${formatDateTime(
            slot.date,
            slot.start_time,
          )}\n\nWe look forward to seeing you in class 🚀`,
        );

        delete userState[from];

        return new Response("ok", { status: 200 });
      }
    }

    await sendBackMenu(from, "Please choose an option from the menu.");
  } catch (err) {
    console.log(err);
  }

  return new Response("ok", { status: 200 });
}
