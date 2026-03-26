"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

function generateTimeSlots() {
  const slots = [];
  for (let hour = 16; hour <= 20; hour++) {
    const displayHour = hour > 12 ? hour - 12 : hour;
    const suffix = hour >= 12 ? "PM" : "AM";
    slots.push(`${displayHour}:00 ${suffix}`);
  }
  return slots;
}

export default function Sessions() {
  const [open, setOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [booked, setBooked] = useState<{
    date: string;
    slot: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const timeSlots = generateTimeSlots();

  // Fetch booked slots for selected date
  async function fetchBookedSlots(date: string) {
    const { data, error } = await supabase
      .from("sessions")
      .select("time")
      .eq("date", date);

    console.log("Fetched slots:", data);
    if (error) {
      console.error(error);
      return;
    }

    const times = data.map((item) => item.time);
    setBookedSlots(times);
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">My Sessions</h2>

      {/* Upcoming Session */}
      {booked ? (
        <div className="mb-6 p-4 bg-blue-50 rounded-xl">
          <p className="font-medium">Next Class</p>
          <p className="text-sm text-gray-600">
            {booked.date} • {booked.slot}
          </p>

          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
            Join Class
          </button>
        </div>
      ) : (
        <p className="mb-6 text-gray-500 text-sm">
          No upcoming session booked
        </p>
      )}

      {/* Schedule Button */}
      <button
        onClick={() => setOpen(true)}
        className="w-full mb-4 bg-green-500 text-white py-2 rounded-lg"
      >
        Schedule New Class
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-96 shadow-lg">

            <h3 className="text-lg font-semibold mb-4">
              Book Your Session
            </h3>

            {/* Date Picker */}
            <input
              type="date"
              className="w-full mb-4 border p-2 rounded-lg"
              value={selectedDate}
              onChange={(e) => {
                const date = e.target.value;
                setSelectedDate(date);
                fetchBookedSlots(date);
              }}
            />

            {/* Time Slots */}
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot) => {
                const isBooked = bookedSlots.includes(slot);

                return (
                  <button
                    key={slot}
                    disabled={isBooked}
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-2 rounded-lg border transition
                      ${isBooked
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : selectedSlot === slot
                          ? "bg-blue-600 text-white"
                          : "hover:bg-blue-100"
                      }
                    `}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>

            {/* Confirm Button */}
            <button
              disabled={!selectedSlot || !selectedDate || loading}
              onClick={async () => {
                console.log("Booking started");

                const { data, error } = await supabase
                  .from("sessions")
                  .insert([
                    {
                      student_id: "test_user",
                      date: selectedDate,
                      time: selectedSlot!,
                    },
                  ])
                  .select();

                console.log("Response:", data, error);

                if (error) {
                  alert(error.message);
                  return;
                }

                alert("Booking success");
              }}
              className={`mt-4 w-full py-2 rounded-lg
                ${selectedSlot && selectedDate
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }
              `}
            >
              {loading ? "Booking..." : "Confirm Booking"}
            </button>

            {/* Cancel */}
            <button
              onClick={() => setOpen(false)}
              className="mt-2 w-full text-gray-500"
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </div>
  );
}