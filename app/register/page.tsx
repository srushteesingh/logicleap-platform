"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    student_name: "",
    age: "",
    parent_name: "",
    phone: "",
    program: "",
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

    const { error } = await supabase.from("registrations").insert([formData]);

    setLoading(false);

    if (error) {
      alert("Something went wrong.");
      return;
    }

    alert("Registration submitted successfully!");
  };

  return (
    <div className="relative max-w-4xl mx-auto px-6 py-24">
      {/* Glow */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

      <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
        Student Registration
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Complete the form below to register for LogicLeap programs.
      </p>

      <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-100">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Student Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Student Name
            </label>
            <input
              type="text"
              name="student_name"
              required
              value={formData.student_name}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Student Age
            </label>
            <input
              type="number"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3"
            />
          </div>

          {/* Parent Name */}
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

          {/* Phone */}
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

          {/* Program */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">
              Program Interested In
            </label>

            <select
              name="program"
              required
              value={formData.program}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3"
            >
              <option value="">Select Program</option>
              <option>Mastery Journey</option>
              <option>Skill Accelerator</option>
              <option>Coding Club</option>
              <option>Innovation Sprint</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">
              Additional Notes (Optional)
            </label>

            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3"
            />
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition"
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
