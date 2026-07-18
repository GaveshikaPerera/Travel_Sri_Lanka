import { FaBell } from "react-icons/fa";

export default function Topbar() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return (
    <div className="flex justify-between items-center mb-8">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Tour Guide Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Manage your tours, bookings and profile.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="relative w-12 h-12 rounded-full bg-[#243342] flex items-center justify-center hover:bg-[#2F4156] duration-300">

          <FaBell className="text-white text-lg" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#00C896]"></span>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/100?img=15"
            alt="Guide"
            className="w-12 h-12 rounded-full border-2 border-[#00C896]"
          />

          <div className="text-right">
            <h3 className="text-white font-semibold">
              Tour Guide
            </h3>

            <p className="text-gray-400 text-sm">
              {today.toLocaleDateString("en-US", options)}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}