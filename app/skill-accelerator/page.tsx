export default function SkillAccelerator() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">Skill Accelerator</h1>

      <p className="text-lg text-gray-600 mb-10">
        A focused learning program designed to help students master a specific
        coding technology through structured practice and real-world projects.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold mb-3">Focused Learning</h3>
          <p className="text-sm text-gray-600">
            Students concentrate on mastering one technology through guided
            projects and structured practice.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold mb-3">Advanced Projects</h3>
          <p className="text-sm text-gray-600">
            Build real projects that strengthen programming skills and develop
            deeper technical understanding.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold mb-3">Skill Mastery</h3>
          <p className="text-sm text-gray-600">
            Perfect for students who want to go deeper and become confident
            problem solvers in a specific area of coding.
          </p>
        </div>
      </div>
    </div>
  );
}
