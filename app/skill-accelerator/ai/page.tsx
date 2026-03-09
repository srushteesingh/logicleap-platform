export default function AITrack() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Glow */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          AI Foundations Track
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the exciting world of Artificial Intelligence and understand
          how intelligent systems work through hands-on projects.
        </p>
      </section>

      {/* MASTERY PATH */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold text-center mb-4">
          36 Weeks to Master AI Foundations
        </h2>

        <div className="flex justify-center items-center gap-3 mb-10 text-sm text-gray-400">
          <span>Level 1</span>
          <span>●</span>
          <span>Level 2</span>
          <span>●</span>
          <span>Level 3</span>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Students learn how intelligent systems work and gradually build
          AI-powered applications through guided projects.
        </p>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* LEVEL 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition">
            <div className="text-purple-600 font-bold mb-3 text-sm tracking-wide">
              LEVEL 1
            </div>

            <h3 className="text-lg font-semibold mb-4">AI Basics</h3>

            <p className="text-sm text-gray-600 mb-5">
              Understand the fundamentals of artificial intelligence and data.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                AI Concepts
              </span>

              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                Data Basics
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
              Intelligent Applications
            </h3>

            <p className="text-sm text-gray-600 mb-5">
              Build applications that use intelligent decision-making.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                Machine Learning
              </span>

              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                AI Tools
              </span>
            </div>

            <div className="mt-6 text-xs text-gray-400">12 Week Program</div>
          </div>

          {/* LEVEL 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition">
            <div className="text-purple-600 font-bold mb-3 text-sm tracking-wide">
              LEVEL 3
            </div>

            <h3 className="text-lg font-semibold mb-4">Advanced AI Projects</h3>

            <p className="text-sm text-gray-600 mb-5">
              Develop intelligent applications using real-world AI concepts.
            </p>

            <div className="flex justify-center gap-3 flex-wrap text-sm">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                AI Projects
              </span>

              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                Automation
              </span>
            </div>

            <div className="mt-6 text-xs text-gray-400">12 Week Program</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          AI Projects Students Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            🤖 AI Chatbot
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            📊 Data Prediction Tool
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            🧠 Smart Recommendation System
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Explore the World of AI</h2>

        <p className="text-gray-600 mb-8">
          Join the AI Foundations track and build intelligent applications.
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
