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

      <div className="mt-32 max-w-5xl border-t border-gray-800 pt-16">
        <h2 className="text-4xl font-bold mb-12">Our Programs</h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="p-6 border border-gray-800 rounded-xl hover:border-white transition">
            <h3 className="text-xl font-semibold mb-3">Scratch & Animation</h3>
            <p className="text-gray-400">
              Perfect for beginners to start their coding journey with
              creativity.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl hover:border-white transition">
            <h3 className="text-xl font-semibold mb-3">Game Development</h3>
            <p className="text-gray-400">
              Build interactive games using Python and advanced logic concepts.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl hover:border-white transition">
            <h3 className="text-xl font-semibold mb-3">AI & Advanced Coding</h3>
            <p className="text-gray-400">
              Introduction to AI tools and real-world project development.
            </p>
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
