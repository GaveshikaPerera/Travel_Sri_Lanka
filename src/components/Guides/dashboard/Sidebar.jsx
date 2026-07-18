import {
  FaTachometerAlt,
  FaCalendarCheck,
  FaRoute,
  FaCalendarAlt,
  FaEnvelope,
  FaUser,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#243342] min-h-screen flex flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-[#314158]">
        <h1 className="text-white text-xl font-bold">
          Tours For Sri Lanka
        </h1>
      </div>

      {/* Menu */}
      <div className="flex-1 p-5">

        <p className="text-gray-400 text-xs uppercase mb-4">
          Main Menu
        </p>

        <SidebarItem icon={<FaTachometerAlt />} text="Dashboard" active />

        <SidebarItem icon={<FaCalendarCheck />} text="Bookings" />

        <SidebarItem icon={<FaRoute />} text="My Tours" />

        <SidebarItem icon={<FaCalendarAlt />} text="Availability" />

        <SidebarItem icon={<FaEnvelope />} text="Messages" />

        <SidebarItem icon={<FaUser />} text="Profile" />

        <SidebarItem icon={<FaStar />} text="Reviews" />
      </div>

      {/* Logout */}
      <div className="p-5 border-t border-[#314158]">
        <button className="flex items-center gap-3 text-red-400 hover:text-red-300">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-3 transition
      ${
        active
          ? "bg-[#00C896] text-white"
          : "text-gray-300 hover:bg-[#314158]"
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}