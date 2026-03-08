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
      {/* Technology Stack */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8">
          Technologies Students Explore
        </h2>

        <p className="text-gray-600 max-w-3xl mb-12">
          The Mastery Journey introduces students to modern technologies used by
          real developers. Each stage builds new skills while keeping learning
          creative, engaging, and age-appropriate.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Scratch */}
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="font-semibold mb-2">Scratch</h3>
            <p className="text-sm text-gray-600">
              Interactive games and animations that build logic and creativity.
            </p>
          </div>

          {/* App Development */}
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold mb-2">App Development</h3>
            <p className="text-sm text-gray-600">
              Students design mobile apps using tools like Thunkable.
            </p>
          </div>

          {/* Web Development */}
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold mb-2">Web Development</h3>
            <p className="text-sm text-gray-600">
              Build real websites using HTML, CSS and JavaScript.
            </p>
          </div>

          {/* Python */}
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <div className="text-3xl mb-3">🐍</div>
            <h3 className="font-semibold mb-2">Python Programming</h3>
            <p className="text-sm text-gray-600">
              Learn real programming logic used by professional developers.
            </p>
          </div>

          {/* Java */}
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <div className="text-3xl mb-3">☕</div>
            <h3 className="font-semibold mb-2">Java Fundamentals</h3>
            <p className="text-sm text-gray-600">
              Understand object-oriented programming concepts.
            </p>
          </div>

          {/* 3D */}
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <div className="text-3xl mb-3">🧊</div>
            <h3 className="font-semibold mb-2">3D Design</h3>
            <p className="text-sm text-gray-600">
              Explore 3D modelling and immersive creative environments.
            </p>
          </div>

          {/* AI */}
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold mb-2">Artificial Intelligence</h3>
            <p className="text-sm text-gray-600">
              Build intelligent applications using AI tools and APIs.
            </p>
          </div>

          {/* Machine Learning */}
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-semibold mb-2">Machine Learning</h3>
            <p className="text-sm text-gray-600">
              Learn how machines learn using real data experiments.
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
