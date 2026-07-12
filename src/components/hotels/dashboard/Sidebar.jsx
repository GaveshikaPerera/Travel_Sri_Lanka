import {
  FaHome,
  FaUser,
  FaHotel,
  FaBed,
  FaStar,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import logo from "../../../assets/logo.png";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/hotel/dashboard",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      path: "/hotel/profile",
    },
    {
      name: "Hotel Information",
      icon: <FaHotel />,
      path: "/hotel/information",
    },
    {
      name: "Room Management",
      icon: <FaBed />,
      path: "/hotel/rooms",
    },
    {
      name: "Reviews",
      icon: <FaStar />,
      path: "/hotel/reviews",
    },
    {
      name: "Messages",
      icon: <FaEnvelope />,
      path: "/hotel/messages",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/hotel/settings",
    },
  ];

  return (
    <aside className="w-64 bg-[#253745] border-r border-[#4A5C6A] min-h-screen flex flex-col">

      {/* Logo */}

      <div className="py-8 flex justify-center">
        <img
          src={logo}
          alt="logo"
          className="w-36"
        />
      </div>

      {/* Menu */}

      <nav className="flex-1 px-5">

        {menu.map((item) => (

          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl mb-3 transition-all
            ${
              location.pathname === item.path
                ? "bg-[#00C896] text-white"
                : "text-gray-300 hover:bg-[#2F4156]"
            }`}
          >
            {item.icon}

            <span>{item.name}</span>

          </Link>

        ))}

      </nav>

      {/* Logout */}

      <div className="p-5 border-t border-[#4A5C6A]">

        <button className="flex items-center gap-3 text-red-400 hover:text-red-300">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}