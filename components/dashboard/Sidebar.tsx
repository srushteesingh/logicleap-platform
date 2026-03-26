export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">LogicLeap</h2>

      <nav className="space-y-4">
        <p className="cursor-pointer hover:text-blue-600">Dashboard</p>
        <p className="cursor-pointer hover:text-blue-600">My Journey</p>
        <p className="cursor-pointer hover:text-blue-600">Practice</p>
        <p className="cursor-pointer hover:text-blue-600">Achievements</p>
        <p className="cursor-pointer hover:text-blue-600">Book Session</p>
      </nav>
    </div>
  );
}