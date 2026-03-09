export default function WebDevelopmentTrack() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Glow */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          36 Weeks to Web Development Track
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A focused 12-week program where students learn how websites work and
          build real interactive websites using modern web technologies.
        </p>
      </section>

      {/* SKILL PROGRESSION */}
      <section className="mb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-50 to-transparent"></div>
        <h2 className="text-3xl font-bold text-center mb-4">
          Master Web Development
        </h2>
        <div className="flex justify-center items-center gap-3 mb-12 text-sm text-gray-400">
          <span>Level 1</span>
          <span>→</span>
          <span>Level 2</span>
          <span>→</span>
          <span>Level 3</span>
        </div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          The Skill Accelerator track is divided into three levels. Each level
          builds deeper skills and projects, helping students progress from
          beginner to confident developer.
        </p>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* LEVEL 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition">
            <div className="text-purple-600 font-bold mb-3 text-sm tracking-wide">
              LEVEL 1
            </div>

            <h3 className="text-lg font-semibold mb-4">Foundations</h3>

            <p className="text-sm text-gray-600 mb-5">
              Learn how websites are structured and styled.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                HTML
              </span>

              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                CSS
              </span>
            </div>

            <div className="mt-6 text-xs text-gray-400">12 Week Program</div>
          </div>

          {/* LEVEL 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200 text-center hover:shadow-2xl transition scale-105">
            <div className="text-purple-600 font-bold mb-3 text-sm tracking-wide">
              LEVEL 2
            </div>

            <h3 className="text-lg font-semibold mb-4">
              Interactive Development
            </h3>

            <p className="text-sm text-gray-600 mb-5">
              Build dynamic and responsive websites.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                JavaScript
              </span>

              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                Responsive Design
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
              Build complete web applications and portfolio projects.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                Dynamic Apps
              </span>

              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                Portfolio Projects
              </span>
            </div>

            <div className="mt-6 text-xs text-gray-400">12 Week Program</div>
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
