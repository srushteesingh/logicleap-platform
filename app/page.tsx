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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white text-center px-6 py-20">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        LogicLeap Coding Academy
      </p>
      {/* Hero Section */}
      <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
        Build. Create. Innovate.
      </h1>

      <p className="text-lg md:text-2xl mb-10 max-w-3xl text-gray-400">
        Personalized coding classes for kids to build games, animations, and
        real-world projects.
      </p>

      <button className="bg-white text-black px-10 py-5 rounded-full font-semibold text-lg hover:scale-110 transition duration-300 shadow-lg">
        Book a Free Trial
      </button>

      <div className="mt-32 max-w-6xl border-t border-gray-800 pt-16">
        <h2 className="text-4xl font-bold mb-12 text-center">
          The Mastery Roadmap
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Side Levels */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`w-full text-left p-4 rounded-xl border transition ${
                  activeLevel === level
                    ? "border-white bg-gray-900"
                    : "border-gray-800 hover:border-gray-600"
                }`}
              >
                <div>
                  <p className="font-semibold">Level {level}</p>
                  <p className="text-sm text-gray-500">
                    {levels.find((l) => l.id === level)?.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side Content */}
          <div className="md:col-span-2 p-8 border border-gray-800 rounded-2xl">
            {levels
              .filter((level) => level.id === activeLevel)
              .map((level) => (
                <div key={level.id}>
                  <span className="text-sm uppercase tracking-widest text-gray-500">
                    Level {level.id}
                  </span>

                  <h3 className="text-3xl font-bold mt-2 mb-4">
                    {level.title}
                  </h3>

                  <p className="text-gray-400 mb-6">{level.identity}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">
                      Core Competencies
                    </h4>
                    <ul className="space-y-2 text-gray-400">
                      {level.competencies.map((skill, index) => (
                        <li key={index}>• {skill}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-800 pt-4 text-gray-400">
                    <strong className="text-white">Mastery Requirement:</strong>{" "}
                    {level.outcome}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="mt-32 max-w-5xl border-t border-gray-800 pt-16">
        <h2 className="text-4xl font-bold mb-12">Why LogicLeap?</h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Project-Based Learning
            </h3>
            <p className="text-gray-400">
              Kids build real games, animations, and apps — not just watch
              tutorials.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Personalized Curriculum
            </h3>
            <p className="text-gray-400">
              Every student gets a learning path tailored to their interest and
              pace.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Future-Ready Skills</h3>
            <p className="text-gray-400">
              We teach logical thinking, creativity, and problem solving — not
              just coding.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
