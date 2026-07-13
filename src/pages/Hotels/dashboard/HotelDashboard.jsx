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
import ReviewsSection from "../../../components/hotels/dashboard/sections/ReviewSection";
import MessagesSection from "../../../components/hotels/dashboard/sections/MessagesSection";


export default function HotelDashboard() {
  return (
    <div className="flex bg-[#11212D] min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
          {/* Dashboard */}
          <section id="dashboard">
            <Topbar />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              ...
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
              <div className="xl:col-span-2">
                <RoomTable />
              </div>

              <RoomStatus />
            </div>
          </section>

          {/* Profile */}
          <section id="profile">
            <ProfileSection />
          </section>

          {/* Hotel Information */}
          <section id="hotel-information">
            <HotelDetailsSection />
          </section>

        <RoomManagementSection />

        <ReviewsSection />

        <MessagesSection />

      </main>

    </div>
  );
}