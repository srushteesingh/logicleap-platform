"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Consultation() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    parent_name: "",
    phone: "",
    student_age: "",
    preferred_time: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("consultations").insert([formData]);

    setLoading(false);

    if (error) {
      alert("Something went wrong.");
      return;
    }

    alert("Consultation request submitted!");
  };

  return (
    <div className="relative max-w-3xl mx-auto px-6 py-24">
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

      <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
        Book Consultation
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Not sure which program is right for your child? Schedule a short
        consultation with us.
      </p>

      <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Parent Name
            </label>

            <input
              type="text"
              name="parent_name"
              required
              value={formData.parent_name}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Contact Number
            </label>

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Student Age
            </label>

            <input
              type="number"
              name="student_age"
              required
              value={formData.student_age}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Preferred Call Time
            </label>

            <select
              name="preferred_time"
              required
              value={formData.preferred_time}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3"
            >
              <option value="">Select Time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Question (Optional)
            </label>

            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            {loading ? "Submitting..." : "Book Consultation"}
          </button>
        </form>
      </div>
    </div>
  );
}
