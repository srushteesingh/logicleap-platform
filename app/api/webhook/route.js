import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

const PHONE_NUMBER_ID = "989684764235868";
const ACCESS_TOKEN =
  "EAAL83hjZBJGwBQ2QdKXEYk2sgDAkigfpaLbLYUoIytHvjFcj3XGTZBrZC8rArOjTkBIr0WBfmowMkU4ayWS08MZBVeXgL3CaiYTs7hBWcbZAi6ycyIa6TPY4Ub2llYflDtofbVkzBE6XSCBfAZCa75DMYhaUgnJQuany047VXAySVLZCUuWNFTMSXPWxDu7JCJCBnB0pQD6Qwa8nCWYIOrDVcWw4LjlXIW9TnehCjJuVUzEyNZC9Yft6bhiUNZCKX49p45kaPAiFYuHJY7eSZAxaUaAKGQZBh4TU3r1twZDZD";

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

    // MENU BUTTONS
    if (text === "hi" || text === "hello") {
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

      return new Response("ok", { status: 200 });
    }

    // VIEW AVAILABLE CLASSES
    else if (text === "slots") {
      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("status", "available");

      if (!data || data.length === 0) {
        reply = "No classes available right now.";
      } else {
        reply = "📅 Available Classes\n\n";

        data.forEach((slot, index) => {
          reply += `${index + 1}️⃣ ${slot.date} ${slot.start_time}\n`;
        });

        reply += "\nReply with class number to book.";
      }
    }

    // MY CLASSES
    else if (text === "myclass") {
      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked");

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
      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked");

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
      const index = parseInt(text.split(" ")[1]);

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked");

      const slot = data?.[index - 1];

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

        reply = "✅ Class cancelled successfully.";
      }
    }

    // BOOK CLASS
    else if (!isNaN(text)) {
      const slotNumber = parseInt(text);

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("status", "available");

      const slot = data?.[slotNumber - 1];

      if (!slot) {
        reply = "Invalid class number.";
      } else {
        await supabase
          .from("slots")
          .update({
            status: "booked",
            student_phone: from,
          })
          .eq("id", slot.id);

        reply = `✅ Class booked!\n\nDate: ${slot.date}\nTime: ${slot.start_time}`;
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
