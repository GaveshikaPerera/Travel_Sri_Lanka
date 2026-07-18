import {
  CalendarCheck,
  Car,
  ClipboardCheck,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Settings,
  Star,
  User,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { name: "Bookings", icon: <CalendarCheck size={18} /> },
  { name: "Vehicles", icon: <Car size={18} /> },
  { name: "Messages", icon: <MessageCircle size={18} /> },
  { name: "Reviews", icon: <Star size={18} /> },
  { name: "Profile", icon: <User size={18} /> },
  { name: "Verification", icon: <ClipboardCheck size={18} /> },
  { name: "Settings", icon: <Settings size={18} /> },
];

export default function Sidebar({ active, setActive, onLogout }) {
  return (
    <aside className="min-h-screen bg-[#213847] px-5 py-6 text-white">
      <div className="mb-8 text-2xl font-black leading-none">
        SRI <span className="text-[8px]">Tours for</span> LANKA
      </div>

      <nav className="grid gap-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex h-11 items-center gap-3 rounded-xl px-4 text-left text-sm font-bold transition ${
              active === item.name
                ? "bg-[#00c99b] text-white"
                : "text-[#d7e1e6] hover:bg-[#2d4250]"
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </nav>

      <button
        onClick={onLogout}
        className="mt-10 flex h-11 w-full items-center gap-3 rounded-xl px-4 text-sm font-bold text-[#d7e1e6] hover:bg-[#96313d]"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}