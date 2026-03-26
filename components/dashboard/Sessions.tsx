export default function Sessions() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      
      <h2 className="text-xl font-semibold mb-4">
        My Sessions
      </h2>

      {/* Upcoming Session */}
      <div className="mb-6 p-4 bg-blue-50 rounded-xl">
        <p className="font-medium">Next Class</p>
        <p className="text-sm text-gray-600">
          28 March • 5:00 PM
        </p>

        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
          Join Class
        </button>
      </div>

      {/* Schedule */}
      <button className="w-full mb-4 bg-green-500 text-white py-2 rounded-lg">
        Schedule New Class
      </button>

      {/* Cancel Section */}
      <div className="p-4 border rounded-xl">
        <p className="text-sm text-gray-600">
          30 March • 6:00 PM
        </p>

        <button className="mt-2 text-red-500 text-sm">
          Cancel Session
        </button>
      </div>

    </div>
  );
}