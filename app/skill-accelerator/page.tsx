import Link from "next/link";

export default function SkillAccelerator() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Glow */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          Skill Accelerator
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Focused 12-week programs designed to help students master a specific
          technology through real projects and guided mentorship.
        </p>
      </section>

      {/* TRACKS */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-14">
          Choose Your Technology Track
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Link href="/skill-accelerator/web-development">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition cursor-pointer">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-sm text-gray-600">
                Learn HTML, CSS and JavaScript while building real websites.
              </p>
            </div>
          </Link>

          <Link href="/skill-accelerator/python">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition cursor-pointer">
              <div className="text-3xl mb-4">🐍</div>
              <h3 className="text-xl font-semibold mb-2">Python Programming</h3>
              <p className="text-sm text-gray-600">
                Build strong programming foundations using Python.
              </p>
            </div>
          </Link>

          <Link href="/skill-accelerator/app-development">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition cursor-pointer">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p className="text-sm text-gray-600">
                Design and build mobile applications.
              </p>
            </div>
          </Link>

          <Link href="/skill-accelerator/game-development">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition cursor-pointer">
              <div className="text-3xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-2">Game Development</h3>
              <p className="text-sm text-gray-600">
                Create exciting games while learning logic and design.
              </p>
            </div>
          </Link>

          <Link href="/skill-accelerator/ai">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition cursor-pointer">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI Foundations</h3>
              <p className="text-sm text-gray-600">
                Explore artificial intelligence and machine learning basics.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-24">
        <h2 className="text-3xl font-bold mb-6">Start Learning a New Skill</h2>

        <p className="text-gray-600 mb-8">
          Choose a technology track and start building real projects.
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
