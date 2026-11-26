
import { Activity, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-16 bg-white border-b flex justify-between items-center px-6">
      <h1 className="text-xl font-bold text-blue-600">
        PulseMonitor
      </h1>
      <div className="flex gap-4 items-center">
        <Bell />
        <span className="bg-blue-100 p-2 rounded-full">A</span>
      </div>
    </nav>
  );
}
