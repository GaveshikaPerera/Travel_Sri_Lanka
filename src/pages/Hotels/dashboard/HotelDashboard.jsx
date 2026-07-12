import Sidebar from "../../../components/hotels/dashboard/Sidebar";
import Topbar from "../../../components/hotels/dashboard/Topbar";
import {
  FaBed,
  FaStar,
  FaEnvelope,
  FaTools,
} from "react-icons/fa";

import DashboardCard from "../../../components/hotels/dashboard/DashboardCard";
import RoomTable from "../../../components/hotels/dashboard/RoomTable";
import RoomStatus from "../../../components/hotels/dashboard/RoomStatus";
import ProfileSection from "../../../components/hotels/dashboard/sections/ProfileSection"; 
import HotelDetailsSection from "../../../components/hotels/dashboard/sections/HotelDetailsSection";  
import RoomManagementSection from "../../../components/hotels/dashboard/sections/RoomManagementSection";

export default function HotelDashboard() {
  return (
    <div className="flex bg-[#11212D] min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

          <DashboardCard
            title="Total Rooms"
            value="50"
            subtitle="Available in hotel"
            icon={<FaBed />}
            iconColor="bg-[#00C896]/20 text-[#00C896]"
          />

          <DashboardCard
            title="Reviews"
            value="186"
            subtitle="Guest reviews"
            icon={<FaStar />}
            iconColor="bg-yellow-500/20 text-yellow-400"
          />

          <DashboardCard
            title="Messages"
            value="12"
            subtitle="Unread messages"
            icon={<FaEnvelope />}
            iconColor="bg-blue-500/20 text-blue-400"
          />

          <DashboardCard
            title="Maintenance"
            value="2"
            subtitle="Rooms unavailable"
            icon={<FaTools />}
            iconColor="bg-red-500/20 text-red-400"
          />

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">

          <div className="xl:col-span-2">
            <RoomTable />
          </div>

        <RoomStatus />

        </div>
        <ProfileSection />

        <HotelDetailsSection />

        <RoomManagementSection />

      </main>

    </div>
  );
}