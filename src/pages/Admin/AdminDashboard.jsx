import { FaUsers, FaHotel, FaUserTie, FaCalendarCheck } from "react-icons/fa";

import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import DashboardCard from "../../components/admin/DashboardCard";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#11212D] flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">

        {/* Topbar */}
        <Topbar />

        {/* Dashboard Cards */}
        <div
          id="dashboard"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10"
        >
          <DashboardCard
            title="Total Travellers"
            value="324"
            subtitle="Registered travellers"
            icon={<FaUsers />}
            iconColor="bg-[#00C896]/20 text-[#00C896]"
          />

          <DashboardCard
            title="Total Hotels"
            value="45"
            subtitle="Verified hotels"
            icon={<FaHotel />}
            iconColor="bg-blue-500/20 text-blue-400"
          />

          <DashboardCard
            title="Total Guides"
            value="28"
            subtitle="Verified guides"
            icon={<FaUserTie />}
            iconColor="bg-yellow-500/20 text-yellow-400"
          />

          <DashboardCard
            title="Total Bookings"
            value="156"
            subtitle="Completed bookings"
            icon={<FaCalendarCheck />}
            iconColor="bg-red-500/20 text-red-400"
          />
        </div>

        {/* Traveller Section */}
        <section
          id="travellers"
          className="bg-[#253745] rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Traveller Management
          </h2>

          <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#4A5C6A] rounded-xl text-gray-400">
            Traveller Table Here
          </div>
        </section>

        {/* Guide Section */}
        <section
          id="guides"
          className="bg-[#253745] rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Guide Management
          </h2>

          <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#4A5C6A] rounded-xl text-gray-400">
            Guide Table Here
          </div>
        </section>

        {/* Hotel Section */}
        <section
          id="hotels"
          className="bg-[#253745] rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Hotel Management
          </h2>

          <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#4A5C6A] rounded-xl text-gray-400">
            Hotel Table Here
          </div>
        </section>

        {/* Vehicle Section */}
        <section
          id="vehicles"
          className="bg-[#253745] rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Vehicle Management
          </h2>

          <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#4A5C6A] rounded-xl text-gray-400">
            Vehicle Table Here
          </div>
        </section>

        {/* Tour Section */}
        <section
          id="tours"
          className="bg-[#253745] rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Tour Management
          </h2>

          <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#4A5C6A] rounded-xl text-gray-400">
            Tour Table Here
          </div>
        </section>

        {/* Booking Section */}
        <section
          id="bookings"
          className="bg-[#253745] rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Booking Management
          </h2>

          <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#4A5C6A] rounded-xl text-gray-400">
            Booking Table Here
          </div>
        </section>

        {/* Review Section */}
        <section
          id="reviews"
          className="bg-[#253745] rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Reviews
          </h2>

          <div className="h-48 flex items-center justify-center border-2 border-dashed border-[#4A5C6A] rounded-xl text-gray-400">
            Reviews Here
          </div>
        </section>

        {/* Message Section */}
        <section
          id="messages"
          className="bg-[#253745] rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Messages
          </h2>

          <div className="h-48 flex items-center justify-center border-2 border-dashed border-[#4A5C6A] rounded-xl text-gray-400">
            Messages Here
          </div>
        </section>

        {/* Settings Section */}
        <section
          id="settings"
          className="bg-[#253745] rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Settings
          </h2>

          <div className="h-48 flex items-center justify-center border-2 border-dashed border-[#4A5C6A] rounded-xl text-gray-400">
            Settings Here
          </div>
        </section>

      </main>
    </div>
  );
}