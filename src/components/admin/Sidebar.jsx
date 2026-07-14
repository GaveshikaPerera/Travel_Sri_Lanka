import {
  FaHome,
  FaUsers,
  FaUserTie,
  FaHotel,
  FaCar,
  FaMapMarkedAlt,
  FaCalendarCheck,
  FaStar,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    {
      title: "Dashboard",
      items: [
        {
          name: "Dashboard",
          icon: <FaHome />,
          id: "dashboard",
        },
      ],
    },
    {
      title: "User Management",
      items: [
        {
          name: "Travellers",
          icon: <FaUsers />,
          id: "travellers",
        },
        {
          name: "Guides",
          icon: <FaUserTie />,
          id: "guides",
        },
        {
          name: "Hotels",
          icon: <FaHotel />,
          id: "hotels",
        },
        {
          name: "Vehicles",
          icon: <FaCar />,
          id: "vehicles",
        },
      ],
    },
    {
      title: "Booking Management",
      items: [
        {
          name: "Tours",
          icon: <FaMapMarkedAlt />,
          id: "tours",
        },
        {
          name: "Bookings",
          icon: <FaCalendarCheck />,
          id: "bookings",
        },
      ],
    },
    {
      title: "Communication",
      items: [
        {
          name: "Reviews",
          icon: <FaStar />,
          id: "reviews",
        },
        {
          name: "Messages",
          icon: <FaEnvelope />,
          id: "messages",
        },
      ],
    },
    {
      title: "System",
      items: [
        {
          name: "Settings",
          icon: <FaCog />,
          id: "settings",
        },
      ],
    },
  ];

  const scrollToSection = (id, name) => {
    setActive(name);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <aside className="w-72 bg-[#253745] border-r border-[#4A5C6A] min-h-screen flex flex-col sticky top-0">

      {/* Logo */}

      <div className="py-8 flex justify-center">

        <img
          src={logo}
          alt="Logo"
          className="w-36"
        />

      </div>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto px-5">

        {menu.map((group) => (

          <div
            key={group.title}
            className="mb-7"
          >

            <p className="text-gray-400 uppercase text-xs tracking-widest mb-3 px-3">
              {group.title}
            </p>

            {group.items.map((item) => (

              <button
                key={item.name}
                onClick={() => scrollToSection(item.id, item.name)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl mb-2 transition-all duration-300
                ${
                  active === item.name
                    ? "bg-[#00C896] text-white"
                    : "text-gray-300 hover:bg-[#2F4156]"
                }`}
              >
                <span className="text-lg">{item.icon}</span>

                <span>{item.name}</span>

              </button>

            ))}

          </div>

        ))}

      </div>

      {/* Logout */}

      <div className="border-t border-[#4A5C6A] p-5">

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-400 hover:bg-[#2F4156] transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}