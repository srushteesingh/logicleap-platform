export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Build. Create. Innovate.
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Personalized coding classes for kids to build games, animations, and real-world projects.
      </p>
      <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
        Book a Free Trial →
      </button>
    </main>
  );
}