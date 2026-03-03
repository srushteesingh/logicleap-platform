export default function SummerCamp() {
  return (
    <main className="min-h-screen text-gray-900 px-6 py-20">
      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          LogicLeap Summer Innovation Bootcamp 2026
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          A 5-Day intensive coding experience where students build real projects
          based on their age and skill level.
        </p>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition duration-300 shadow-lg">
          Reserve Your Seat
        </button>

        <p className="mt-6 text-sm text-gray-600">
          5 Days • Small Batches • New Batch Every Monday
        </p>
      </div>

      {/* TRACKS */}
      <div className="mt-32 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Track
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Explorers */}
          <div className="bg-purple-50 p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">🌈 Explorers (6–9)</h3>

            <p className="text-gray-600 mb-6">
              Creative coding bootcamp using Scratch to build interactive games
              and animated stories.
            </p>

            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Character animation</li>
              <li>• Interactive storytelling</li>
              <li>• Game with scoring system</li>
              <li>• Add sounds & levels</li>
            </ul>

            <div className="bg-white p-4 rounded-xl text-sm font-semibold text-purple-700">
              Final Outcome: Build & present your own playable game.
            </div>
          </div>

          {/* Builders */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">🚀 Builders (9–12)</h3>

            <p className="text-gray-600 mb-6">
              Structured logic development through advanced Scratch and intro
              app design with Thunkable.
            </p>

            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Advanced game mechanics</li>
              <li>• Variables & conditions</li>
              <li>• Intro to mobile app UI</li>
              <li>• Connect logic to real app features</li>
            </ul>

            <div className="bg-purple-50 p-4 rounded-xl text-sm font-semibold text-purple-700">
              Final Outcome: Create a multi-level game + simple mobile app.
            </div>
          </div>

          {/* Innovators */}
          <div className="bg-indigo-50 p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">🧠 Innovators (13–16)</h3>

            <p className="text-gray-600 mb-6">
              Real coding bootcamp using Python to build structured applications
              with engineering thinking.
            </p>

            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Python fundamentals</li>
              <li>• Functions & modular logic</li>
              <li>• Build CLI mini application</li>
              <li>• File handling basics</li>
            </ul>

            <div className="bg-white p-4 rounded-xl text-sm font-semibold text-indigo-700">
              Final Outcome: Develop a functional Python mini-project.
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-600">
          Each track ends with a live student showcase presentation.
        </div>
      </div>

      {/* BOOTCAMP FORMAT */}
      <div className="mt-32 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-200">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Bootcamp Format
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center text-gray-700">
            <div className="bg-purple-50 p-6 rounded-2xl">
              <h3 className="font-semibold text-lg mb-2">Duration</h3>
              <p>1 Week Intensive</p>
              <p className="text-sm text-gray-500 mt-1">Monday – Friday</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-2xl">
              <h3 className="font-semibold text-lg mb-2">Structure</h3>
              <p>60 Minutes Daily</p>
              <p className="text-sm text-gray-500 mt-1">
                Live Online Interactive
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl">
              <h3 className="font-semibold text-lg mb-2">Batch Size</h3>
              <p>Max 6 Students</p>
              <p className="text-sm text-gray-500 mt-1">
                New Batch Every Monday
              </p>
            </div>
          </div>

          <div className="mt-10 text-center text-purple-700 font-semibold">
            Limited seats per batch. Early booking recommended.
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="mt-32 max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Reserve Your Spot
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Student Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter student's name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Age Group
            </label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>6–9 (Explorers)</option>
              <option>9–12 (Builders)</option>
              <option>13–16 (Innovators)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Parent Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter parent's name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter contact number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Preferred Starting Monday
            </label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => {
                const selected = new Date(e.target.value);
                if (selected.getDay() !== 1) {
                  alert(
                    "Please select a Monday. Bootcamp batches start only on Mondays.",
                  );
                  e.target.value = "";
                }
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-semibold text-lg transition duration-300"
          >
            Submit Booking Request
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Our team will contact you within 24 hours to confirm batch
          availability.
        </p>
      </div>
    </main>
  );
}
