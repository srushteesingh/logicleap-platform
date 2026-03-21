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
  const slotTime = new Date(date + " " + time);
  const now = new Date();

  return slotTime.getTime() <= now.getTime();
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
  const res = await fetch(
    `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`,
    {
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
            text: "🚀 LogicLeap Coding Academy\n\nChoose an option:\n\n💳 Type *credits* to check your remaining classes",
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
    },
  );

  const data = await res.json();
  console.log("WHATSAPP RESPONSE:", data);
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
      .maybeSingle();

    if (text === "menu") {
      await sendMenu(from);
      return new Response("ok", { status: 200 });
    }

    if (text === "hi" || text === "hello") {
      if (!student) {
        await sendText(
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

      if (!valid.length) {
        await sendBackMenu(from, "No upcoming classes available.");
        return new Response("ok", { status: 200 });
      }

      const days = [...new Set(valid.map((s) => s.date))];

      const rows = days.map((d, i) => ({
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

    if (text.startsWith("day_")) {
      const date = text.replace("day_", "");

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("status", "available")
        .eq("date", date)
        .order("start_time");

      // 🔴 Convert current time to IST
      const now = new Date();
      const nowIST = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
      );

      // 🔴 Filter only future slots
      const filtered = data.filter((slot) => {
        const slotDateTime = new Date(`${slot.date}T${slot.start_time}+05:30`);
        return slotDateTime > nowIST;
      });

      // 🔴 Handle no slots case
      if (!filtered.length) {
        await sendBackMenu(from, "No available slots for this day.");
        return new Response("ok", { status: 200 });
      }

      // 🔴 WhatsApp list (max 10)
      const rows = filtered.slice(0, 10).map((slot) => ({
        id: `slot_${slot.id}`,
        title: new Date(`${slot.date}T${slot.start_time}`).toLocaleTimeString(
          "en-IN",
          { hour: "numeric", minute: "2-digit" },
        ),
      }));

      await sendList(from, "Choose Time", "⏰ *Select a class slot*", rows);

      return new Response("ok", { status: 200 });
    }

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
        .update({ status: "booked", student_phone: from })
        .eq("id", id);

      await sendBackMenu(
        from,
        `✅ *Class Booked Successfully!*\n\n${formatDateTime(slot.date, slot.start_time)}\n\nSee you in class 🚀`,
      );

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
        await sendBackMenu(from, "You have no classes to cancel.");
        return new Response("ok", { status: 200 });
      }

      const rows = valid.map((slot) => ({
        id: `cancel_${slot.id}`,
        title: formatDateTime(slot.date, slot.start_time),
      }));

      await sendList(from, "Cancel Class", "❌ Select a class to cancel", rows);

      return new Response("ok", { status: 200 });
    }

    if (text.startsWith("cancel_")) {
      const id = text.replace("cancel_", "");

      await supabase
        .from("slots")
        .update({ status: "available", student_phone: null })
        .eq("id", id);

      await sendBackMenu(from, "✅ Class cancelled successfully.");

      return new Response("ok", { status: 200 });
    }

    if (text === "credits") {
      try {
        const { data } = await supabase
          .from("students")
          .select("credits")
          .eq("phone", from)
          .maybeSingle();

        await sendBackMenu(
          from,
          `💳 *Your Credits*\n\nYou have *${data?.credits ?? 0}* classes remaining.`,
        );
      } catch (err) {
        console.log("Credits error:", err);

        await sendBackMenu(from, "Unable to fetch credits right now.");
      }

      return new Response("ok", { status: 200 });
    }

    await sendBackMenu(from, "Please choose an option from the menu.");
  } catch (err) {
    console.log(err);
  }

  return new Response("ok", { status: 200 });
}
