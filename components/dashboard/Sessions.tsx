"use client";

import { useState } from "react";

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

  const timeSlots = generateTimeSlots();

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">My Sessions</h2>

      {/* Upcoming */}
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

      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="w-full mb-4 bg-green-500 text-white py-2 rounded-lg"
      >
        Schedule New Class
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl w-96">

            <h3 className="text-lg font-semibold mb-4">
              Book Your Session
            </h3>

            {/* Date Picker */}
            <input
              type="date"
              className="w-full mb-4 border p-2 rounded-lg"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />

            {/* Slots */}
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-2 rounded-lg border transition
                    ${selectedSlot === slot
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-100"
                    }
                  `}
                >
                  {slot}
                </button>
              ))}
            </div>

            {/* Confirm */}
            <button
              disabled={!selectedSlot || !selectedDate}
              onClick={() => {
                setBooked({
                  date: selectedDate,
                  slot: selectedSlot!,
                });
                setOpen(false);
                setSelectedSlot(null);
                setSelectedDate("");
              }}
              className={`mt-4 w-full py-2 rounded-lg
                ${selectedSlot && selectedDate
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }
              `}
            >
              Confirm Booking
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