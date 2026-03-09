export default function CodingClub() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Glow Background */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          Coding Club
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A flexible monthly program where students continuously explore coding,
          build projects, and improve their skills while having fun.
        </p>
      </section>

      {/* WHAT STUDENTS DO */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Happens Inside the Coding Club
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            <h3 className="font-semibold mb-3">Creative Coding Projects</h3>
            <p className="text-sm text-gray-600">
              Students build fun and creative projects like games, animations,
              and mini apps.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            <h3 className="font-semibold mb-3">Explore New Technologies</h3>
            <p className="text-sm text-gray-600">
              Students experiment with different technologies and tools used by
              developers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            <h3 className="font-semibold mb-3">Guided Mentorship</h3>
            <p className="text-sm text-gray-600">
              Each session is guided by an instructor to help students improve
              their problem solving skills.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technologies Students Explore
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <div className="px-6 py-3 bg-purple-100 text-purple-700 rounded-full">
            Scratch
          </div>

          <div className="px-6 py-3 bg-indigo-100 text-indigo-700 rounded-full">
            Game Development
          </div>

          <div className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full">
            Web Development
          </div>

          <div className="px-6 py-3 bg-green-100 text-green-700 rounded-full">
            Python
          </div>

          <div className="px-6 py-3 bg-orange-100 text-orange-700 rounded-full">
            App Development
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
            🎮 Interactive Games
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            🌐 Personal Websites
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            📱 Simple Mobile Apps
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
            Flexible Monthly Membership
          </div>

          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            Weekly Guided Sessions
          </div>

          <div className="bg-white rounded-2xl p-7 shadow border border-gray-100">
            Small Batches for Better Learning
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Coding Club</h2>

        <p className="text-gray-600 mb-8">
          Let your child explore coding and build creative projects every month.
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
