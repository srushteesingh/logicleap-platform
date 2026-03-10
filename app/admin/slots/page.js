"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export default function SlotsPage() {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const createSlots = async () => {
    let current = new Date(`${date}T${start}`);
    const endTime = new Date(`${date}T${end}`);

    const slots = [];

    while (current < endTime) {
      slots.push({
        date: date,
        start_time: current.toTimeString().slice(0, 8),
        status: "available",
      });

      current.setHours(current.getHours() + 1);
    }

    await supabase.from("slots").insert(slots);

    alert("Slots created!");
  };

  return (
    <div style={{ maxWidth: 500, margin: "50px auto" }}>
      <h2>Create Class Slots</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />
      <br />

      <label>Start Time</label>
      <input
        type="time"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />

      <br />
      <br />

      <label>End Time</label>
      <input type="time" value={end} onChange={(e) => setEnd(e.target.value)} />

      <br />
      <br />

      <button onClick={createSlots}>Create Slots</button>
    </div>
  );
}
