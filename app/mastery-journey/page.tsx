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
      {/* Technology Pathway */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Technology Pathway</h2>

        <p className="text-gray-600 mb-10 max-w-3xl">
          As students progress through the Mastery Journey, they work with
          different technologies that gradually build their understanding of
          real programming and modern digital tools.
        </p>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="bg-white rounded-xl p-6 shadow border border-gray-100 text-center">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold mb-2">Scratch</h3>
            <p className="text-sm text-gray-600">
              Build interactive games and animations while learning logic.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100 text-center">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold mb-2">Thunkable</h3>
            <p className="text-sm text-gray-600">
              Create simple mobile apps and understand UI design.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100 text-center">
            <div className="text-3xl mb-3">🧊</div>
            <h3 className="font-semibold mb-2">3D & AR/VR</h3>
            <p className="text-sm text-gray-600">
              Explore 3D environments and interactive immersive experiences.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100 text-center">
            <div className="text-3xl mb-3">🐍</div>
            <h3 className="font-semibold mb-2">Python</h3>
            <p className="text-sm text-gray-600">
              Learn real programming concepts and build applications.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow border border-gray-100 text-center">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold mb-2">AI Projects</h3>
            <p className="text-sm text-gray-600">
              Understand AI basics and build simple intelligent tools.
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
