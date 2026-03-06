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
    const text = message.text?.body?.toLowerCase() || "";

    let reply = "";

    // menu
    if (text === "hi" || text === "hello") {
      reply =
        "Welcome to LogicLeap Coding Academy 🚀\n\n" +
        "Send *slots* to see available classes\n" +
        "Send *myclass* to see your booked class";

      // show slots
    } else if (text === "slots") {
      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("status", "available");

      if (!data || data.length === 0) {
        reply = "No slots available right now.";
      } else {
        reply = "Available LogicLeap Classes 🚀\n\n";

        data.forEach((slot, index) => {
          reply += `${index + 1}️⃣ ${slot.date} ${slot.start_time}\n`;
        });

        reply += "\nReply with slot number to book.";
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
        reply = "Your LogicLeap classes 🚀\n\n";

        data.forEach((slot, index) => {
          reply += `${index + 1}️⃣ ${slot.date} ${slot.start_time}\n`;
        });
      }
    } else if (!isNaN(text)) {
      const slotNumber = parseInt(text);

      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("status", "available");

      const slot = data?.[slotNumber - 1];

      if (!slot) {
        reply = "Invalid slot number.";
      } else {
        await supabase
          .from("slots")
          .update({
            status: "booked",
            student_phone: from,
          })
          .eq("id", slot.id);

        reply = `✅ Slot booked successfully!\n\nDate: ${slot.date}\nTime: ${slot.start_time}`;
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
