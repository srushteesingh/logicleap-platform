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

      <p className="text-lg md:text-2xl mb-10 max-w-3xl text-gray-400">
        Personalized coding classes for kids to build games, animations, and real-world projects.
      </p>

      <button className="bg-white text-black px-10 py-5 rounded-full font-semibold text-lg hover:scale-110 transition duration-300 shadow-lg">
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