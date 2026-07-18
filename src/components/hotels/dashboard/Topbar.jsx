import { FaBell } from "react-icons/fa";

export default function Topbar() {
  return (
    <header className="flex justify-between items-center mb-8">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400">
          Welcome back, Hotel Owner
        </p>

      </div>

      <div className="flex items-center gap-6">

        <button className="relative">

          <FaBell
            className="text-2xl text-white"
          />

          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#00C896] text-xs flex items-center justify-center">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
            className="w-12 h-12 rounded-full"
          />

          <div>

            <h3 className="font-semibold text-white">
              Hotel Owner
            </h3>

            <p className="text-gray-400 text-sm">
              Colombo
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}