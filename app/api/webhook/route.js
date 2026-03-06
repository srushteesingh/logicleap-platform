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
    const text = message?.text?.body;

    if (!message) {
      return new Response("ok", { status: 200 });
    }

    const from = message.from;
    let reply = "";

    if (text === "slots") {
      const { data } = await supabase
        .from("slots")
        .select("*")
        .eq("status", "available");

      if (data.length === 0) {
        reply = "No slots available right now.";
      } else {
        reply = "Available LogicLeap Classes 🚀\n\n";

        data.slice(0, 5).forEach((slot, index) => {
          reply += `${index + 1}️⃣ ${slot.date} ${slot.start_time}\n`;
        });

        reply += "\nReply with slot number to book.";
      }
    } else if (!isNaN(text)) {
      reply = "Booking your slot...";
    } else {
      reply =
        "Welcome to LogicLeap Coding Academy 🚀\n\n1️⃣ Book a class\n2️⃣ Join class\n3️⃣ View schedule";
    }
    const response = await fetch(
      `https://graph.facebook.com/v18.0/989684764235868/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer EAAL83hjZBJGwBQwPPJ7I0x77BnUVVz5hBo7RGGm1wQAOuAY7nXReXIjY3JD55iJ6TQgDcP8mny3kU6JGm5pVrSIejMUWI7fdEdZCzZCZBRuB5j6R7rfdhZAvFV2bjSIvTsD15Tpw4jZBr0ZACSYQnI2QdT8mDeb4NNm3RfWkh3KRZCcZBVBM5BX16cCyD5IPBsmglGfH89FQx52r2fcMr4vuG8c8G8NlE7ZBfZBjneHwWFHnE2fhMQCemUvfVOfnr6S8JXhu22DrKIqONid3hXZBjU2nT85Y7xKTAiqBrKIZD`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: from,
          type: "text",
          text: {
            body: reply,
          },
        }),
      },
    );

    console.log(await response.text());
  } catch (err) {
    console.error(err);
  }

  return new Response("ok", { status: 200 });
}
