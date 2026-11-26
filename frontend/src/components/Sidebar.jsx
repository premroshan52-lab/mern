
import { LayoutDashboard, Server, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-950 text-white p-5 hidden md:block">
      <nav className="space-y-5">
        <p className="text-slate-400">Main Menu</p>
        <p className="bg-blue-600 p-3 rounded-lg"><LayoutDashboard className="inline mr-2" /> Dashboard</p>
        <p><Server className="inline mr-2" /> Servers</p>
        <p><Settings className="inline mr-2" /> Settings</p>
      </nav>
    </aside>
  );
}
