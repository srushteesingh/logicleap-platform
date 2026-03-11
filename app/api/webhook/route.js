import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

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
  return new Date(`${date}T${time}`) <= new Date();
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
          text: "🚀 *LogicLeap Coding Academy*\n\nWelcome back!\n\nChoose an option:",
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

async function sendList(to, title, body, rows) {
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
        type: "list",
        body: { text: body },
        action: {
          button: title,
          sections: [
            {
              title: "Options",
              rows: rows,
            },
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

    /* IMPORTANT FIX */
    let text = "";

    if (message.interactive?.list_reply) {
      text = message.interactive.list_reply.id;
    } else if (message.interactive?.button_reply) {
      text = message.interactive.button_reply.id;
    } else {
      text = message.text?.body?.toLowerCase() || "";
    }

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
        await sendBackMenu(
          from,
          "🚀 LogicLeap Coding Academy\n\nPlease register first:\nhttps://logicleapcoding.com/register",
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
        await sendBackMenu(from, "No upcoming classes available.");
        return new Response("ok", { status: 200 });
      }

      const rows = days.map((d) => ({
        id: `day_${d}`,
        title: new Date(d).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      }));

      await sendList(from, "Choose Day", "📅 *Select a class day*", rows);

      return new Response("ok", { status: 200 });
    }

    /* DAY SELECTED */

    if (text.startsWith("day_")) {
      const date = text.replace("day_", "");

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("date", date)
        .eq("status", "available")
        .order("start_time");

      const valid = data.filter((s) => !slotStarted(s.date, s.start_time));

      if (!valid.length) {
        await sendBackMenu(from, "No slots available for this day.");
        return new Response("ok", { status: 200 });
      }

      const rows = valid.map((slot) => ({
        id: `slot_${slot.id}`,
        title: formatDateTime(slot.date, slot.start_time),
      }));

      await sendList(from, "Choose Slot", "⏰ *Select a class time*", rows);

      return new Response("ok", { status: 200 });
    }

    /* SLOT SELECTED */

    if (text.startsWith("slot_")) {
      const id = text.replace("slot_", "");

      const { data: slot } = await supabase
        .from("slots")
        .select("*")
        .eq("id", id)
        .single();

      if (slotStarted(slot.date, slot.start_time)) {
        await sendBackMenu(from, "⚠️ This class has already started.");
        return new Response("ok", { status: 200 });
      }

      await supabase
        .from("slots")
        .update({ status: "booked", student_phone: from })
        .eq("id", id);

      await sendBackMenu(
        from,
        `✅ *Class Booked Successfully!*\n\n${formatDateTime(slot.date, slot.start_time)}`,
      );

      return new Response("ok", { status: 200 });
    }

    await sendBackMenu(from, "Please choose an option from the menu.");
  } catch (err) {
    console.log(err);
  }

  return new Response("ok", { status: 200 });
}
