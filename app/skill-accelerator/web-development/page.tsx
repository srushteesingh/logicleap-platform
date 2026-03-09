export default function WebDevelopmentTrack() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Glow */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          Web Development Track
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A focused 12-week program where students learn how websites work and
          build real interactive websites using modern web technologies.
        </p>
      </section>

      {/* SKILL PROGRESSION */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-10">
          Web Development Mastery Path
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Each technology track is divided into three levels. Completing all
          three levels helps students become truly proficient.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 text-center">
            <div className="text-purple-600 font-bold mb-3">Level 1</div>

            <h3 className="text-lg font-semibold mb-3">Foundations</h3>

            <p className="text-sm text-gray-600 mb-4">
              Learn how websites are built.
            </p>

            <div className="text-sm text-gray-500">HTML • CSS</div>

            <div className="mt-4 text-xs text-gray-400">Duration: 12 Weeks</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 text-center">
            <div className="text-purple-600 font-bold mb-3">Level 2</div>

            <h3 className="text-lg font-semibold mb-3">
              Interactive Development
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Build dynamic and responsive websites.
            </p>

            <div className="text-sm text-gray-500">
              JavaScript • Responsive Design
            </div>

            <div className="mt-4 text-xs text-gray-400">Duration: 12 Weeks</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 text-center">
            <div className="text-purple-600 font-bold mb-3">Level 3</div>

            <h3 className="text-lg font-semibold mb-3">Advanced Projects</h3>

            <p className="text-sm text-gray-600 mb-4">
              Build real web applications and portfolio projects.
            </p>

            <div className="text-sm text-gray-500">
              Dynamic Websites • Advanced UI
            </div>

            <div className="mt-4 text-xs text-gray-400">Duration: 12 Weeks</div>
          </div>
        </div>
      </section>

      {/* WHAT STUDENTS LEARN */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Students Learn
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            <h3 className="font-semibold mb-3">HTML Foundations</h3>
            <p className="text-sm text-gray-600">
              Understand how websites are structured and build webpages using
              HTML.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            <h3 className="font-semibold mb-3">CSS Styling</h3>
            <p className="text-sm text-gray-600">
              Learn how to design beautiful layouts and responsive pages using
              CSS.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            <h3 className="font-semibold mb-3">JavaScript Basics</h3>
            <p className="text-sm text-gray-600">
              Add interactivity and dynamic behaviour to websites.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technologies Used
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <div className="px-6 py-3 bg-orange-100 text-orange-700 rounded-full">
            HTML
          </div>

          <div className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full">
            CSS
          </div>

          <div className="px-6 py-3 bg-yellow-100 text-yellow-700 rounded-full">
            JavaScript
          </div>

          <div className="px-6 py-3 bg-purple-100 text-purple-700 rounded-full">
            Responsive Design
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
            🌐 Personal Portfolio Website
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            🎮 Interactive Web Game
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            📊 Dynamic Web Application
          </div>
        </div>
      </section>

      {/* PROGRAM STRUCTURE */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Program Structure
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            12 Week Structured Curriculum
          </div>

          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            Small Batches (Max 4 Students)
          </div>

          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            Real Project Portfolio
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Building Your First Website
        </h2>

        <p className="text-gray-600 mb-8">
          Book a trial class and explore the Web Development track.
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
