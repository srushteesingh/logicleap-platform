import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

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

    // menu
    if (text === "hi" || text === "hello") {
      await fetch(`https://graph.facebook.com/v18.0/989684764235868/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer EAAL83hjZBJGwBQ1G8jkuM3aOaBZADUk5HUibZCZA1Mf01wiMjpCAxfVDxJ7nYowAqzShsmMooO9ZBOsQz3IdVtffFAbkhj1rMhd8dkVJeBObfNOMvV4Kle5BJtPLQYUzLVhYJeoMZBKxVWE2VTSAZAHHxtWiAc7O4ZB3ZAtNCniPYAMwk93juG6HSOPWvr6m1ZC9NbGZBICzLBsp6ysECZCZAQjPKEfpuWE7mN6Jc63DehHmhrqJZCRa9ShAO7taj70AsOJrCUpUlkiQdVcRIQZBZCpmAwAKpKRZBdDNzsuDF2AZDZD`,
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
      });
      return new Response("ok", { status: 200 });
      // show slots
    } else if (text === "slots") {
      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("status", "available");

      if (!data || data.length === 0) {
        reply = "No slots available right now.";
      } else {
        reply = "📅 *Available LogicLeap Classes*\n\n";

        data.forEach((slot, index) => {
          reply += `${index + 1}️⃣ ${slot.date} ${slot.start_time}\n`;
        });

        reply += "\nReply with the class number to book your slot.";
      }

      // book slot
    } // show booked class
    else if (text === "myclass") {
      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("student_phone", from)
        .eq("status", "booked");

      if (!data || data.length === 0) {
        reply = "You do not have any booked class.";
      } else {
        reply = "📚 *Your Booked LogicLeap Classes*\n\n";

        data.forEach((slot, index) => {
          reply += `${index + 1}️⃣ ${slot.date} ${slot.start_time}\n`;
        });
        reply += "\nTo cancel a class, reply: cancel <number>";
      }
    } // cancel class
    else if (text.startsWith("cancel")) {
      const parts = text.split(" ");
      const index = parseInt(parts[1]);

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

        reply = "✅ Your class has been successfully cancelled.";
      }
    } else if (!isNaN(text)) {
      const slotNumber = parseInt(text);

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("status", "available");

      const slot = data?.[slotNumber - 1];

      if (!slot) {
        reply = "⚠️ Invalid class number. Please try again.";
      } else {
        await supabase
          .from("slots")
          .update({
            status: "booked",
            student_phone: from,
          })
          .eq("id", slot.id);

        reply =
          "✅ *Class Booked Successfully!* 🎉\n\n" +
          `📅 Date: ${slot.date}\n` +
          `⏰ Time: ${slot.start_time}\n\n` +
          "We look forward to seeing you in class!";
      }
    } else {
      reply = "Send *slots* to see available classes.";
    }

    await fetch(`https://graph.facebook.com/v18.0/989684764235868/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer EAAL83hjZBJGwBQ1G8jkuM3aOaBZADUk5HUibZCZA1Mf01wiMjpCAxfVDxJ7nYowAqzShsmMooO9ZBOsQz3IdVtffFAbkhj1rMhd8dkVJeBObfNOMvV4Kle5BJtPLQYUzLVhYJeoMZBKxVWE2VTSAZAHHxtWiAc7O4ZB3ZAtNCniPYAMwk93juG6HSOPWvr6m1ZC9NbGZBICzLBsp6ysECZCZAQjPKEfpuWE7mN6Jc63DehHmhrqJZCRa9ShAO7taj70AsOJrCUpUlkiQdVcRIQZBZCpmAwAKpKRZBdDNzsuDF2AZDZD`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: from,
        type: "text",
        text: { body: reply },
      }),
    });
  } catch (err) {
    console.error(err);
  }

  return new Response("ok", { status: 200 });
}
