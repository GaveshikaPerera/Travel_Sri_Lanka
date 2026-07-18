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

import { useState, useEffect } from "react";
import logo from "../../../assets/logo.png";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const menu = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      id: "dashboard",
    },
    {
      name: "Bookings",
      icon: <FaCalendarCheck />,
      id: "bookings",
    },
    {
      name: "My Tours",
      icon: <FaRoute />,
      id: "tours",
    },
    {
      name: "Availability",
      icon: <FaCalendarAlt />,
      id: "availability",
    },
    {
      name: "Messages",
      icon: <FaEnvelope />,
      id: "messages",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      id: "profile",
    },
    {
      name: "Reviews",
      icon: <FaStar />,
      id: "reviews",
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="w-64 bg-[#243342] border-r border-[#314158] min-h-screen sticky top-0 flex flex-col">

      {/* Logo */}

      <div className="py-8 flex justify-center border-b border-[#314158]">
        <img
          src={logo}
          alt="Tours For Sri Lanka"
          className="w-36"
        />
      </div>

      {/* Menu */}

      <div className="flex-1 px-5 py-6">

        <p className="text-gray-400 text-xs uppercase mb-5">
          Main Menu
        </p>

        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl mb-3 transition-all duration-300
              ${
                activeSection === item.id
                  ? "bg-[#00C896] text-white shadow-lg"
                  : "text-gray-300 hover:bg-[#314158]"
              }`}
          >
            <span className="text-lg">{item.icon}</span>

            <span className="font-medium">
              {item.name}
            </span>
          </button>
        ))}
      </div>

      {/* Logout */}

      <div className="p-5 border-t border-[#314158]">

        <button className="flex items-center gap-3 text-red-400 hover:text-red-300 transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}