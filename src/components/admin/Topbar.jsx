import { FaBell, FaSearch } from "react-icons/fa";

export default function Topbar() {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-[#253745] rounded-2xl px-8 py-5 mb-8 flex items-center justify-between">

      {/* Left Side */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Admin Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Welcome back, Admin • {today}
        </p>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 h-12 rounded-full bg-[#2F4156] pl-11 pr-4 text-white placeholder-gray-400 outline-none"
          />

        </div>

        {/* Notification */}

        <button className="relative w-12 h-12 rounded-full bg-[#2F4156] flex items-center justify-center hover:bg-[#3B4D5D] transition">

          <FaBell className="text-white text-lg" />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#00C896]"></span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 bg-[#2F4156] rounded-full px-4 py-2">

          <div className="w-11 h-11 rounded-full bg-[#00C896] flex items-center justify-center text-white font-bold text-lg">
            A
          </div>

          <div>

            <h3 className="text-white font-semibold">
              Administrator
            </h3>

            <p className="text-gray-400 text-sm">
              System Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}