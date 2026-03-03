export default function SummerCamp() {
  return (
    <main className="min-h-screen text-gray-900 px-6 py-20">
      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          LogicLeap Summer Innovation Camp 2026
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          A structured yet exciting coding experience where kids build real
          projects based on their age and skill level.
        </p>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition duration-300 shadow-lg">
          Reserve Your Seat
        </button>
      </div>

      {/* TRACKS */}
      <div className="mt-32 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Track
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* 6-9 */}
          <div className="bg-purple-50 p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">🌈 Explorers (6–9)</h3>
            <p className="text-gray-600 mb-6">
              Fun, creative coding through games, animations, and storytelling.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Scratch game creation</li>
              <li>• Interactive storytelling</li>
              <li>• Basic logic building</li>
              <li>• Creativity challenges</li>
            </ul>
          </div>

          {/* 9-12 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">🚀 Builders (9–12)</h3>
            <p className="text-gray-600 mb-6">
              Structured skill development through real game systems.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Advanced Scratch projects</li>
              <li>• Intro to Python</li>
              <li>• Game mechanics design</li>
              <li>• Logical architecture</li>
            </ul>
          </div>

          {/* 13-16 */}
          <div className="bg-indigo-50 p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">🧠 Innovators (13–16)</h3>
            <p className="text-gray-600 mb-6">
              Premium engineering track focused on real-world coding.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Python application building</li>
              <li>• Intro AI concepts</li>
              <li>• Project architecture</li>
              <li>• Portfolio-ready capstone</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-32 max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center">Bootcamp Format</h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <div>
            <p>
              <strong>Duration:</strong> 1 Week Intensive
            </p>
            <p>
              <strong>Schedule:</strong> Monday – Friday
            </p>
            <p>
              <strong>Session Length:</strong> 60 Minutes Daily
            </p>
          </div>

          <div>
            <p>
              <strong>Batch Size:</strong> Max 6 Students
            </p>
            <p>
              <strong>Mode:</strong> Live Online Interactive
            </p>
            <p>
              <strong>New Batch:</strong> Every Monday
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-purple-700 font-semibold">
          Limited seats per batch. Early booking recommended.
        </div>
      </div>
    </main>
  );
}
