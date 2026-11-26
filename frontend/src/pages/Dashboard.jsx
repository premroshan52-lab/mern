
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <h1 className="bg-blue-600 text-white text-3xl font-bold p-6">
        PulseMonitor Dashboard
      </h1>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Welcome to PulseMonitor!
        </h2>

        <p className="text-slate-500 mt-2">
          Monitor your systems and check their performance.
        </p>

        <div className="bg-white p-5 mt-6 rounded-lg border">
          <h3 className="font-bold text-lg">System Overview</h3>
          <p className="text-slate-500 mt-2">
            All your system information in one place.
          </p>
          <p className="text-green-600 mt-3 font-semibold">
            ● Monitoring Dashboard Ready
          </p>
        </div>
      </div>
    </div>
  );
}
