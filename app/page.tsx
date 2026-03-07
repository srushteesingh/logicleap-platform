"use client";
import { useState } from "react";

const levels = [
  {
    id: 1,
    title: "Digital Foundations",
    identity: "Building computational thinking through creativity.",
    competencies: [
      "Sequencing & logical flow",
      "Events & interaction design",
      "Creative problem solving",
      "Basic debugging",
    ],
    outcome:
      "Students demonstrate structured logic through mini-project evaluation.",
  },
  {
    id: 2,
    title: "Logic & Game Design",
    identity: "Structured thinking through interactive systems.",
    competencies: [
      "Variables & conditions",
      "Game mechanics design",
      "Flowchart planning",
      "Multi-level logic building",
    ],
    outcome: "Students build complete multi-level games independently.",
  },
  {
    id: 3,
    title: "Real Coding with Python",
    identity: "Transitioning into real-world programming environments.",
    competencies: [
      "Python syntax mastery",
      "Functions & modular thinking",
      "File handling basics",
      "Debugging discipline",
    ],
    outcome: "Students develop structured console-based applications.",
  },
  {
    id: 4,
    title: "Advanced Game & App Development",
    identity: "Engineering mindset and structured architecture.",
    competencies: [
      "Object-Oriented Programming",
      "Game architecture",
      "UI structure basics",
      "Version control introduction",
    ],
    outcome: "Students build structured software projects.",
  },
  {
    id: 5,
    title: "AI & Intelligent Systems",
    identity: "Understanding intelligent systems and automation.",
    competencies: [
      "Data fundamentals",
      "API integration",
      "Intro machine learning concepts",
      "Automation scripting",
    ],
    outcome: "Students build AI-powered mini applications.",
  },
  {
    id: 6,
    title: "Innovation & Capstone Engineering",
    identity: "Independent innovation and real-world readiness.",
    competencies: [
      "Full project lifecycle",
      "Deployment basics",
      "Portfolio development",
      "Independent problem solving",
    ],
    outcome: "Students complete a capstone portfolio project.",
  },
];

export default function Home() {
  const [activeLevel, setActiveLevel] = useState(1);

  return (
    <main className="min-h-screen text-gray-900 px-6 py-20">
      {/* HERO */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100"></div>

        {/* Glow effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 blur-3xl opacity-40 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-indigo-300 blur-3xl opacity-40 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="block">Choose Your Style.</span>
              <span className="block">Set Your Pace.</span>
              <span className="block text-purple-600">
                Master Next-Gen Skills.
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Personalized coding education for kids aged 6–16. From interactive
              games to Python and AI — students build real projects while
              learning the logic behind technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#learning-paths"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Start Your Journey 🚀
              </a>

              <a
                href="#roadmap"
                className="border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Explore Roadmap
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-6 hover:scale-105 transition">
              <img
                src="/hero-illustration.png"
                alt="Kids learning coding"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6">
        {/* Soft background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your Coding Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Flexible learning formats designed for every student — from short
              innovation bootcamps to complete coding mastery pathways.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mastery Journey */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100">
              <span className="absolute -top-3 left-6 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                Most Popular
              </span>

              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xl mb-5">
                🧠
              </div>

              <h3 className="text-xl font-bold mb-3">Mastery Journey</h3>

              <p className="text-gray-600 mb-6">
                A complete coding pathway where students progress from Scratch
                to Python and AI through structured competency levels.
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Small batches (max 5 students)</li>
                <li>• Weekly guided classes</li>
                <li>• Project-based mastery progression</li>
              </ul>

              <a
                href="#"
                className="inline-block font-semibold text-purple-600 hover:text-purple-800"
              >
                Explore Program →
              </a>
            </div>

            {/* Innovation Sprint */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xl mb-5">
                🚀
              </div>

              <h3 className="text-xl font-bold mb-3">Innovation Sprint</h3>

              <p className="text-gray-600 mb-6">
                Short immersive bootcamps where students build exciting coding
                projects in just a few days.
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• 5-day coding bootcamp</li>
                <li>• Project showcase</li>
                <li>• Perfect for beginners</li>
              </ul>

              <a
                href="/summer-camp"
                className="inline-block font-semibold text-indigo-600 hover:text-indigo-800"
              >
                View Bootcamp →
              </a>
            </div>

            {/* Coding Club */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-xl mb-5">
                💡
              </div>

              <h3 className="text-xl font-bold mb-3">Coding Club</h3>

              <p className="text-gray-600 mb-6">
                Flexible monthly membership where students continuously explore
                and build creative coding projects.
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Monthly subscription</li>
                <li>• Guided project sessions</li>
                <li>• Learn at your own pace</li>
              </ul>

              <a
                href="#"
                className="inline-block font-semibold text-pink-600 hover:text-pink-800"
              >
                Join Club →
              </a>
            </div>

            {/* Skill Accelerator */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl mb-5">
                ⚡
              </div>

              <h3 className="text-xl font-bold mb-3">Skill Accelerator</h3>

              <p className="text-gray-600 mb-6">
                Focused programs designed to master a specific coding technology
                in structured learning tracks.
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• 12-week focused program</li>
                <li>• Build advanced projects</li>
                <li>• Ideal for skill mastery</li>
              </ul>

              <a
                href="#"
                className="inline-block font-semibold text-green-600 hover:text-green-800"
              >
                Explore Track →
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* MASTERY ROADMAP */}
      <div className="mt-40 bg-white rounded-3xl shadow-xl px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          The Mastery Roadmap
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Spine */}
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gray-200"></div>

            <div className="space-y-10">
              {levels.map((level) => (
                <div
                  key={level.id}
                  onClick={() => setActiveLevel(level.id)}
                  className="relative cursor-pointer group"
                >
                  <div
                    className={`absolute -left-[18px] top-1 w-4 h-4 rounded-full border-2 transition ${
                      activeLevel === level.id
                        ? "bg-purple-600 border-purple-600"
                        : "bg-white border-gray-300"
                    }`}
                  ></div>

                  <div>
                    <p
                      className={`font-semibold ${
                        activeLevel === level.id
                          ? "text-purple-600 text-lg"
                          : "text-gray-700"
                      }`}
                    >
                      Level {level.id}
                    </p>
                    <p className="text-sm text-gray-500">{level.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="md:col-span-2">
            {levels
              .filter((level) => level.id === activeLevel)
              .map((level) => (
                <div
                  key={level.id}
                  className="p-10 border border-gray-200 rounded-3xl bg-white shadow-xl"
                >
                  <span className="inline-block px-4 py-1 text-xs uppercase tracking-widest bg-purple-600 text-white rounded-full mb-4">
                    Level {level.id}
                  </span>

                  <h3 className="text-4xl font-bold mb-4">{level.title}</h3>

                  <p className="text-gray-600 text-lg mb-8">{level.identity}</p>

                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-4">
                      Core Competencies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {level.competencies.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm bg-purple-50 text-purple-700 rounded-full border border-purple-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 text-gray-600">
                    <strong className="text-gray-900">
                      Mastery Requirement:
                    </strong>{" "}
                    {level.outcome}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* REASSURANCE */}
      <div className="mt-32 max-w-4xl mx-auto text-center border-t border-gray-200 pt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Designed for Every Starting Point
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Whether your child is just beginning their coding journey or already
          exploring advanced concepts, our assessment-based placement ensures
          they start at the right level — and progress only after demonstrating
          true mastery.
        </p>
      </div>

      {/* HOW IT WORKS */}
      <div className="mt-40 bg-purple-50 rounded-3xl px-10 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div>
            <div className="text-5xl font-bold text-purple-600 mb-4">01</div>
            <h3 className="text-xl font-semibold mb-3">Book an Assessment</h3>
            <p className="text-gray-600">
              We understand your child’s current level through a short
              interactive evaluation.
            </p>
          </div>

          <div>
            <div className="text-5xl font-bold text-purple-600 mb-4">02</div>
            <h3 className="text-xl font-semibold mb-3">
              Get Placed in the Right Level
            </h3>
            <p className="text-gray-600">
              Placement is based on competency — not age or grade.
            </p>
          </div>

          <div>
            <div className="text-5xl font-bold text-purple-600 mb-4">03</div>
            <h3 className="text-xl font-semibold mb-3">
              Build & Progress with Mastery
            </h3>
            <p className="text-gray-600">
              Students advance only after demonstrating real project-based
              understanding.
            </p>
          </div>
        </div>
      </div>

      {/* WHY */}
      <div className="mt-40 bg-white rounded-3xl shadow-xl px-10 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Why LogicLeap?</h2>
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Just Coding Classes.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="bg-purple-50 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Project-Based Learning
            </h3>
            <p className="text-gray-600">
              Kids build real games, animations, and apps — not just watch
              tutorials.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Personalized Curriculum
            </h3>
            <p className="text-gray-600">
              Every student gets a learning path tailored to their interest and
              pace.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Future-Ready Skills</h3>
            <p className="text-gray-600">
              We teach logical thinking, creativity, and problem solving — not
              just coding.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
