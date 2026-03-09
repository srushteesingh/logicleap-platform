export default function PythonTrack() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Glow Background */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          Python Programming Track
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A structured program where students learn real programming concepts
          using Python and build powerful applications step by step.
        </p>
      </section>

      {/* MASTERY PATH */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold text-center mb-4">Master Python</h2>

        <div className="flex justify-center items-center gap-3 mb-10 text-sm text-gray-400">
          <span>Level 1</span>
          <span>●</span>
          <span>Level 2</span>
          <span>●</span>
          <span>Level 3</span>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          The Python track is divided into three progressive levels that build
          programming logic, problem-solving ability, and real-world coding
          skills.
        </p>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* LEVEL 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition">
            <div className="text-purple-600 font-bold mb-3 text-sm tracking-wide">
              LEVEL 1
            </div>

            <h3 className="text-lg font-semibold mb-4">Python Foundations</h3>

            <p className="text-sm text-gray-600 mb-5">
              Learn programming fundamentals and logical thinking using Python.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                Variables
              </span>

              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                Loops
              </span>

              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                Logic
              </span>
            </div>

            <div className="mt-6 text-xs text-gray-400">12 Week Program</div>
          </div>

          {/* LEVEL 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200 text-center hover:shadow-2xl transition scale-105">
            <div className="text-purple-600 font-bold mb-3 text-sm tracking-wide">
              LEVEL 2
            </div>

            <h3 className="text-lg font-semibold mb-4">Problem Solving</h3>

            <p className="text-sm text-gray-600 mb-5">
              Develop deeper programming skills through structured challenges.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                Functions
              </span>

              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                Data Structures
              </span>

              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                Algorithms
              </span>
            </div>

            <div className="mt-6 text-xs text-gray-400">12 Week Program</div>
          </div>

          {/* LEVEL 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition">
            <div className="text-purple-600 font-bold mb-3 text-sm tracking-wide">
              LEVEL 3
            </div>

            <h3 className="text-lg font-semibold mb-4">Advanced Projects</h3>

            <p className="text-sm text-gray-600 mb-5">
              Build real applications and automation projects using Python.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                Automation
              </span>

              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                Applications
              </span>

              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                AI Basics
              </span>
            </div>

            <div className="mt-6 text-xs text-gray-400">12 Week Program</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects Students Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            🎮 Logic Based Games
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            📊 Data Processing Tools
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            🤖 Python Automation Projects
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Start Learning Python</h2>

        <p className="text-gray-600 mb-8">
          Join the Python Skill Accelerator and start building real programs.
        </p>

        <a
          href="/summer-camp"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl font-semibold transition"
        >
          Book Free Trial
        </a>
      </section>
    </div>
  );
}
