export default function MasteryJourney() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold mb-6">Mastery Journey</h1>

        <p className="text-lg text-gray-600 max-w-3xl">
          A complete coding pathway designed to take students from their first
          creative coding experience to advanced programming and AI concepts
          through structured competency levels.
        </p>
      </section>

      {/* What Students Learn */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">
          What Students Will Learn
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h3 className="font-semibold mb-3">Creative Coding</h3>
            <p className="text-sm text-gray-600">
              Students begin with creative coding projects using Scratch to
              build games, animations, and interactive stories.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h3 className="font-semibold mb-3">Real Programming</h3>
            <p className="text-sm text-gray-600">
              Gradually transition into real programming using Python and
              structured coding practices.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h3 className="font-semibold mb-3">AI & Innovation</h3>
            <p className="text-sm text-gray-600">
              Older students explore modern technologies including automation,
              APIs, and introductory AI concepts.
            </p>
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Who This Program Is For</h2>

        <ul className="space-y-3 text-gray-600">
          <li>• Students aged 6–16 interested in learning coding</li>
          <li>• Beginners who want a structured learning path</li>
          <li>• Students who enjoy building creative tech projects</li>
          <li>• Learners who want long-term skill development</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Start Your Coding Journey
        </h2>

        <a
          href="/summer-camp"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Book Free Trial
        </a>
      </section>
    </div>
  );
}
