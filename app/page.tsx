export default function Home() {
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

      <div className="mt-32 max-w-6xl border-t border-gray-800 pt-16">
        <h2 className="text-4xl font-bold mb-6 text-center">
          The Mastery Roadmap
        </h2>

        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Students level up only when they demonstrate true competency — not
          based on age, but based on mastery.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-8 border border-gray-800 rounded-2xl hover:border-white transition">
            <h3 className="text-2xl font-semibold mb-3">
              Level 1 — Digital Explorers
            </h3>
            <p className="text-gray-400">
              Foundations of logic through animations, storytelling, and
              mini-games.
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-white transition">
            <h3 className="text-2xl font-semibold mb-3">
              Level 2 — Logic Builders
            </h3>
            <p className="text-gray-400">
              Variables, conditions, structured thinking, and multi-level game
              design.
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-white transition">
            <h3 className="text-2xl font-semibold mb-3">
              Level 3 — Tech Creators
            </h3>
            <p className="text-gray-400">
              Transition to Python and real coding environments.
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-white transition">
            <h3 className="text-2xl font-semibold mb-3">
              Level 4 — Game & App Devs
            </h3>
            <p className="text-gray-400">
              Engineering mindset. Real software projects and advanced logic.
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-white transition">
            <h3 className="text-2xl font-semibold mb-3">
              Level 5 — AI Innovators
            </h3>
            <p className="text-gray-400">
              Machine learning foundations and AI mini-projects.
            </p>
          </div>

          <div className="p-8 border border-gray-800 rounded-2xl hover:border-white transition">
            <h3 className="text-2xl font-semibold mb-3">
              Level 6 — Advanced Builders
            </h3>
            <p className="text-gray-400">
              Capstone portfolio projects for real-world readiness.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
