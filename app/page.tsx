"use client";
import { useState } from "react";
import Link from "next/link";

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
      <section className="relative w-full min-h-[70vh] flex items-center px-6 bg-gradient-to-br from-purple-200 via-blue-200 to-indigo-300 overflow-hidden">
        {/* Floating Glow Lights */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-400 opacity-30 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400 opacity-30 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto w-full bg-white/30 backdrop-blur-md rounded-3xl px-14 py-12 grid md:grid-cols-2 gap-12 items-center shadow-xl">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              <span className="block whitespace-nowrap text-indigo-900">
                Choose Your Style.
              </span>

              <span className="block whitespace-nowrap text-purple-900">
                Set Your Pace.
              </span>

              <span className="block whitespace-nowrap mt-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_6px_18px_rgba(168,85,247,0.45)]">
                Master Future Skills.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              Personalized coding education for kids aged 6–16. We teach logical
              thinking, creativity, and problem solving — not just coding.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="#learning-paths"
                className="px-8 py-3 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:scale-105 transition"
              >
                Start Your Journey 🚀
              </a>

              <a
                href="#roadmap"
                className="px-8 py-3 rounded-xl font-semibold bg-white text-gray-800 shadow border border-gray-200 hover:bg-gray-50 transition"
              >
                Explore Roadmap
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-5 shadow-2xl w-full max-w-md">
              <img
                src="/hero-illustration.png"
                alt="Kids learning coding"
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="learning-paths" className="relative py-24 px-6">
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
                <li>• Small batches (max 4 students)</li>
                <li>• Weekly guided classes</li>
                <li>• Project-based mastery progression</li>
              </ul>

              <a
                href="/mastery-journey"
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
                href="/coding-club"
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
                href="/skill-accelerator"
                className="inline-block font-semibold text-green-600 hover:text-green-800"
              >
                Explore Track →
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* MASTERY ROADMAP */}
      <section
        id="roadmap"
        className="relative pt-24 pb-10 px-6 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-100 via-purple-100 to-blue-100"></div>

        {/* Glow lights */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400 opacity-20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 opacity-20 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20">
            The Mastery Roadmap
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            {/* Timeline */}
            <div className="space-y-10 relative">
              <div className="absolute left-[6px] top-2 bottom-2 border-l-2 border-dashed border-purple-300"></div>

              {levels.map((level) => (
                <div
                  key={level.id}
                  onClick={() => setActiveLevel(level.id)}
                  className="flex gap-4 cursor-pointer items-start group hover:translate-x-1 transition"
                >
                  <div
                    className={`w-4 h-4 rounded-full transition-all ${
                      activeLevel === level.id
                        ? "bg-purple-600 shadow-[0_0_14px_rgba(168,85,247,0.8)]"
                        : "border-2 border-gray-300 group-hover:border-purple-400"
                    }`}
                  ></div>

                  <div>
                    <p
                      className={`font-semibold ${
                        activeLevel === level.id
                          ? "text-purple-700"
                          : "text-gray-800"
                      }`}
                    >
                      Level {level.id}
                    </p>

                    <p className="text-sm text-gray-600">{level.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Card */}
            <div className="md:col-span-2 relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 blur-3xl opacity-20 rounded-3xl"></div>

              {levels
                .filter((level) => level.id === activeLevel)
                .map((level) => (
                  <div
                    key={level.id}
                    className="relative bg-white rounded-3xl p-10 shadow-2xl border border-purple-100"
                  >
                    <span className="inline-block mb-6 px-4 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full">
                      LEVEL {level.id}
                    </span>

                    <h3 className="text-3xl font-bold mb-3">{level.title}</h3>

                    <p className="text-gray-600 mb-8">{level.identity}</p>

                    <h4 className="font-semibold mb-4">Core Competencies</h4>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {level.competencies.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm rounded-full bg-purple-100 text-purple-700 border border-purple-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="border-t pt-6 text-gray-700">
                      <strong>Mastery Requirement:</strong>
                      <span className="ml-2">{level.outcome}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="max-w-4xl mx-auto text-center py-20">
        <h2 className="text-4xl font-bold mb-6">
          Designed for Every Starting Point
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Whether your child is just beginning their coding journey or already
          exploring advanced concepts, our assessment-based placement ensures
          they start at the right level and progress only after demonstrating
          true mastery.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-100">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold mb-2">No Prior Experience</h3>
            <p className="text-gray-500 text-sm">
              Beginners start with visual creativity and logical thinking.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-100">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold mb-2">Personalized Placement</h3>
            <p className="text-gray-500 text-sm">
              Every child is assessed and placed at the right competency level.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-100">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-semibold mb-2">Mastery Based Progress</h3>
            <p className="text-gray-500 text-sm">
              Students advance only after demonstrating real understanding.
            </p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What Kids Actually Build</h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            Students don't just learn coding concepts. They apply them by
            building real projects that combine creativity, logic, and problem
            solving.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Game Project */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-purple-100">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-3">Game Projects</h3>
              <p className="text-gray-600 text-sm">
                Students design playable games with levels, scoring systems, and
                character mechanics.
              </p>
            </div>

            {/* Apps */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-purple-100">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
              <p className="text-gray-600 text-sm">
                Kids create simple mobile apps like quiz apps, habit trackers,
                and productivity tools.
              </p>
            </div>

            {/* AI */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-purple-100">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI Mini Projects</h3>
              <p className="text-gray-600 text-sm">
                Students explore how AI works by building small intelligent
                tools and experiments.
              </p>
            </div>

            {/* Creativity */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-purple-100">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">Creative Tech</h3>
              <p className="text-gray-600 text-sm">
                Interactive animations, digital stories, and creative
                experiments combining art with logic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
