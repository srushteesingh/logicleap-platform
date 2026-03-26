import Sidebar from "@/components/dashboard/Sidebar";


export default function StudentDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
    
        {/* Content */}
        <main className="p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">
            Welcome back 👋
          </h1>

          {/* Add cards here later */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-2xl shadow">
              Progress Card
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              Today's Tasks
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}