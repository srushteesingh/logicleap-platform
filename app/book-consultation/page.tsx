"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function BookConsultation() {
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
      alert("Something went wrong. Please try again.");
      return;
    }

    alert("Consultation request submitted successfully!");

    setFormData({
      parent_name: "",
      phone: "",
      student_age: "",
      preferred_time: "",
      message: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
        Book Consultation
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Not sure which program is right for your child? Book a short
        consultation and we will guide you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="parent_name"
          placeholder="Parent Name"
          required
          value={formData.parent_name}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Contact Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3"
        />

        <input
          type="number"
          name="student_age"
          placeholder="Student Age"
          required
          value={formData.student_age}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3"
        />

        <select
          name="preferred_time"
          required
          value={formData.preferred_time}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3"
        >
          <option value="">Preferred Call Time</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>

        <textarea
          name="message"
          placeholder="Any specific question?"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-semibold"
        >
          {loading ? "Submitting..." : "Book Consultation"}
        </button>
      </form>
    </div>
  );
}
