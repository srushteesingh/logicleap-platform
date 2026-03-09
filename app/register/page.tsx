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
      alert("Something went wrong. Please try again.");
      return;
    }

    alert("Registration submitted successfully!");

    setFormData({
      student_name: "",
      age: "",
      parent_name: "",
      phone: "",
      program: "",
      message: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
        Student Registration
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Register for LogicLeap programs and start your child's coding journey.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Student Name */}
        <input
          type="text"
          name="student_name"
          placeholder="Student Name"
          required
          value={formData.student_name}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3"
        />

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Student Age"
          required
          value={formData.age}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3"
        />

        {/* Parent Name */}
        <input
          type="text"
          name="parent_name"
          placeholder="Parent Name"
          required
          value={formData.parent_name}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Contact Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3"
        />

        {/* Program */}
        <select
          name="program"
          required
          value={formData.program}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3"
        >
          <option value="">Select Program</option>
          <option value="Mastery Journey">Mastery Journey</option>
          <option value="Skill Accelerator">Skill Accelerator</option>
          <option value="Coding Club">Coding Club (Monthly)</option>
          <option value="Innovation Sprint">Innovation Sprint</option>
        </select>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Any message or question (optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-semibold"
        >
          {loading ? "Submitting..." : "Register Now"}
        </button>
      </form>
    </div>
  );
}
