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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 px-6 py-20">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        LogicLeap Coding Academy
      </p>
      {/* Hero Section */}
      <div className="mt-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Build. Create. <span className="text-purple-600">Innovate.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Personalized coding programs where kids build real games,
            intelligent systems, and creative digital projects.
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-full font-semibold text-lg transition duration-300 shadow-xl hover:shadow-purple-400/40">
            Book a Free Trial
          </button>
        </div>

        {/* Right Side Visual */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
          <div className="bg-white p-6 rounded-3xl shadow-2xl relative z-10">
            <img
              src="/projects-preview.png"
              alt="Student Projects"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="mt-32 max-w-6xl border-t border-gray-200 pt-16">
        <h2 className="text-4xl font-bold mb-12 text-center">
          The Mastery Roadmap
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Side Levels */}
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gray-800"></div>

            <div className="space-y-10">
              {levels.map((level) => (
                <div
                  key={level.id}
                  onClick={() => setActiveLevel(level.id)}
                  className="relative cursor-pointer group"
                >
                  {/* Circle */}
                  <div
                    className={`absolute -left-[18px] top-1 w-4 h-4 rounded-full border-2 transition ${
                      activeLevel === level.id
                        ? "bg-purple-600 border-purple-600"
                        : "bg-black border-gray-300 group-hover:border-white"
                    }`}
                  ></div>

                  {/* Text Content */}
                  <div>
                    <p
                      className={`font-semibold transition ${
                        activeLevel === level.id
                          ? "text-white text-lg"
                          : "text-gray-400 group-hover:text-white"
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

          {/* Right Side Content */}
          <div className="md:col-span-2 relative">
            {levels
              .filter((level) => level.id === activeLevel)
              .map((level) => (
                <div
                  key={level.id}
                  className="p-10 border border-gray-200 rounded-3xl bg-white shadow-xl transition-all duration-300"
                >
                  {/* Level Badge */}
                  <span className="inline-block px-4 py-1 text-xs uppercase tracking-widest bg-purple-600 text-white rounded-full mb-4">
                    Level {level.id}
                  </span>

                  {/* Title */}
                  <h3 className="text-4xl font-bold mb-4">{level.title}</h3>

                  {/* Identity */}
                  <p className="text-gray-400 text-lg mb-8">{level.identity}</p>

                  {/* Competencies */}
                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-4">
                      Core Competencies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {level.competencies.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm bg-gray-800 rounded-full border border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mastery Requirement */}
                  <div className="border-t border-gray-200 pt-6 text-gray-400">
                    <strong className="text-white">Mastery Requirement:</strong>{" "}
                    {level.outcome}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-32 max-w-4xl mx-auto text-center border-t border-gray-200 pt-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6">
          Designed for Every Starting Point
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          Whether your child is just beginning their coding journey or already
          exploring advanced concepts, our assessment-based placement ensures
          they start at the right level — and progress only after demonstrating
          true mastery.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-8 text-gray-300">
          <div>No prior experience required</div>
          <div>Personalized placement</div>
          <div>Progress at individual pace</div>
        </div>
      </div>

      <div className="mt-32 max-w-6xl mx-auto border-t border-gray-200 pt-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div>
            <div className="text-5xl font-bold text-gray-700 mb-4">01</div>
            <h3 className="text-xl font-semibold mb-3">Book an Assessment</h3>
            <p className="text-gray-400">
              We understand your child’s current level through a short
              interactive evaluation.
            </p>
          </div>

          <div>
            <div className="text-5xl font-bold text-gray-700 mb-4">02</div>
            <h3 className="text-xl font-semibold mb-3">
              Get Placed in the Right Level
            </h3>
            <p className="text-gray-400">
              Placement is based on competency — not age or grade.
            </p>
          </div>

          <div>
            <div className="text-5xl font-bold text-gray-700 mb-4">03</div>
            <h3 className="text-xl font-semibold mb-3">
              Build & Progress with Mastery
            </h3>
            <p className="text-gray-400">
              Students advance only after demonstrating real project-based
              understanding.
            </p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="mt-32 max-w-5xl border-t border-gray-200 pt-16">
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
