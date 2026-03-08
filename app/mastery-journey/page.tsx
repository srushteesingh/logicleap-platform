export default function MasteryJourney() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Glow Background */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="mb-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          The Mastery Journey
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          A structured pathway where students progress from creative coding to
          real programming and artificial intelligence through hands-on
          projects.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="/summer-camp"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
          >
            Book a Trial Class
          </a>

          <a
            href="#tech"
            className="px-8 py-4 rounded-xl border border-purple-300 text-purple-600 font-semibold hover:bg-purple-50 transition"
          >
            Explore Curriculum
          </a>
        </div>
      </section>

      {/* WHY PROGRAM */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Parents Choose This Program
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            <h3 className="font-semibold mb-3">Structured Learning Path</h3>
            <p className="text-sm text-gray-600">
              Students move step-by-step from beginner coding to advanced
              programming.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            <h3 className="font-semibold mb-3">Project-Based Learning</h3>
            <p className="text-sm text-gray-600">
              Concepts are learned by building real projects instead of passive
              lessons.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            <h3 className="font-semibold mb-3">Small Personalised Batches</h3>
            <p className="text-sm text-gray-600">
              Small groups ensure each student receives individual guidance.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section id="tech" className="mb-28">
        <h2 className="text-3xl font-bold text-center mb-14">
          Technologies Students Learn
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100 text-center">
            🎮 Scratch
          </div>
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100 text-center">
            📱 Thunkable Apps
          </div>
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100 text-center">
            🌐 HTML CSS JavaScript
          </div>
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100 text-center">
            🐍 Python
          </div>
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100 text-center">
            ☕ Java Fundamentals
          </div>
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100 text-center">
            🧊 3D Modelling
          </div>
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100 text-center">
            🧠 Machine Learning
          </div>
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100 text-center">
            🤖 Artificial Intelligence
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects Students Build
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            🎮 Interactive Games
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            📱 Mobile Apps
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            🌐 Websites
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            🤖 AI Mini Projects
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Your Child's Coding Journey
        </h2>

        <p className="text-gray-600 mb-8">
          Book a trial class and discover the right starting point.
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
