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
          From creative coding to artificial intelligence — a structured pathway
          where students gradually develop real technology skills through
          hands-on projects.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="/summer-camp"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
          >
            Start with a Trial Class
          </a>

          <a
            href="#tech"
            className="px-8 py-4 rounded-xl border border-purple-300 text-purple-600 font-semibold hover:bg-purple-50 transition"
          >
            Explore Curriculum
          </a>
        </div>
      </section>

      {/* PROGRAM PROMISE */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold mb-6 text-center">
          A Complete Coding Pathway
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-14">
          Students follow a structured journey that gradually introduces new
          technologies and deeper programming concepts.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100">
            <h3 className="font-semibold mb-3">Creative Foundations</h3>
            <p className="text-sm text-gray-600">
              Students start with games and animations that build computational
              thinking.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100">
            <h3 className="font-semibold mb-3">Real Programming</h3>
            <p className="text-sm text-gray-600">
              Students transition into real coding using structured programming
              languages.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100">
            <h3 className="font-semibold mb-3">Future Technologies</h3>
            <p className="text-sm text-gray-600">
              Advanced learners explore AI, machine learning, and modern
              technology tools.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section id="tech" className="mb-28">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Technologies Students Explore
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-14">
          Students gradually move from creative coding to modern software
          development technologies used by real developers.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="font-semibold mb-2">Scratch</h3>
            <p className="text-sm text-gray-600">
              Interactive games and animations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold mb-2">App Development</h3>
            <p className="text-sm text-gray-600">
              Build mobile apps using platforms like Thunkable.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold mb-2">Web Development</h3>
            <p className="text-sm text-gray-600">
              Build websites using HTML, CSS and JavaScript.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="text-3xl mb-3">🐍</div>
            <h3 className="font-semibold mb-2">Python</h3>
            <p className="text-sm text-gray-600">
              Learn real programming logic.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="text-3xl mb-3">☕</div>
            <h3 className="font-semibold mb-2">Java</h3>
            <p className="text-sm text-gray-600">
              Object oriented programming fundamentals.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="text-3xl mb-3">🧊</div>
            <h3 className="font-semibold mb-2">3D Design</h3>
            <p className="text-sm text-gray-600">
              Explore 3D modelling and immersive experiences.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-semibold mb-2">Machine Learning</h3>
            <p className="text-sm text-gray-600">
              Learn how machines learn using real data.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold mb-2">Artificial Intelligence</h3>
            <p className="text-sm text-gray-600">
              Build intelligent applications using AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Projects Students Build
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-14">
          Students apply their learning through real projects that combine
          creativity and technology.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            🎮 Game Projects
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            📱 Mobile Apps
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            🌐 Websites
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            🤖 AI Experiments
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Start Your Coding Journey
        </h2>

        <a
          href="/summer-camp"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl font-semibold transition"
        >
          Book a Free Trial Class
        </a>
      </section>
    </div>
  );
}
