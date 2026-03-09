export default function AppDevelopmentTrack() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Glow */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          App Development Track
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn how to design and build real mobile applications while
          understanding the logic behind modern apps.
        </p>
      </section>

      {/* MASTERY PATH */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold text-center mb-4">
          36 Weeks to Master App Development
        </h2>

        <div className="flex justify-center items-center gap-3 mb-10 text-sm text-gray-400">
          <span>Level 1</span>
          <span>●</span>
          <span>Level 2</span>
          <span>●</span>
          <span>Level 3</span>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Students progress from understanding how apps work to designing and
          building their own fully functional mobile applications.
        </p>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* LEVEL 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition">
            <div className="text-purple-600 font-bold mb-3 text-sm tracking-wide">
              LEVEL 1
            </div>

            <h3 className="text-lg font-semibold mb-4">App Foundations</h3>

            <p className="text-sm text-gray-600 mb-5">
              Understand how mobile apps work and design basic applications.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                App Logic
              </span>

              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                UI Basics
              </span>
            </div>

            <div className="mt-6 text-xs text-gray-400">12 Week Program</div>
          </div>

          {/* LEVEL 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200 text-center hover:shadow-2xl transition scale-105">
            <div className="text-purple-600 font-bold mb-3 text-sm tracking-wide">
              LEVEL 2
            </div>

            <h3 className="text-lg font-semibold mb-4">Interactive Apps</h3>

            <p className="text-sm text-gray-600 mb-5">
              Build feature-rich applications with advanced functionality.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                Databases
              </span>

              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                App Logic
              </span>
            </div>

            <div className="mt-6 text-xs text-gray-400">12 Week Program</div>
          </div>

          {/* LEVEL 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition">
            <div className="text-purple-600 font-bold mb-3 text-sm tracking-wide">
              LEVEL 3
            </div>

            <h3 className="text-lg font-semibold mb-4">
              Advanced Applications
            </h3>

            <p className="text-sm text-gray-600 mb-5">
              Create complete apps with real-world features and publish-ready
              design.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                API Integration
              </span>

              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                App Projects
              </span>
            </div>

            <div className="mt-6 text-xs text-gray-400">12 Week Program</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Apps Students Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            📱 Quiz Application
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            🧠 Learning App
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            📊 Utility App
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Start Building Mobile Apps</h2>

        <p className="text-gray-600 mb-8">
          Join the App Development track and create your first mobile app.
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
