export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6 py-20">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
         LogicLeap Coding Academy
      </p>
      {/* Hero Section */}
      <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
        Build. Create. Innovate.
      </h1>

      <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300">
        Personalized coding classes for kids to build games, animations, and real-world projects.
      </p>

      <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
        Book a Free Trial
      </button>

      {/* Why Section */}
      <div className="mt-24 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">
          Why LogicLeap?
        </h2>

        <p className="text-lg text-gray-400">
          We focus on project-based learning where kids build real games, animations, and applications — not just theory.
        </p>
      </div>

    </main>
  );
}