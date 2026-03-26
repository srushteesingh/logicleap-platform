import Sessions from "@/components/dashboard/Sessions";

export default function StudentDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Welcome back 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Sessions />
      </div>
    </div>
  );
}