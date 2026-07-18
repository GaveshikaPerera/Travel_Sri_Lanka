import Sidebar from "../../components/Guides/dashboard/Sidebar";
import Topbar from "../../components/Guides/dashboard/Topbar";

import DashboardCards from "../../components/Guides/dashboard/cards/DashboardCards";
import BookingTable from "../../components/Guides/dashboard/bookings/BookingTable";
import TourManagement from "../../components/Guides/dashboard/tours/TourManagement";
import AvailabilityCalendar from "../../components/Guides/dashboard/availability/AvailabilityCalendar"; 


// import MessageSection from "../../components/Guides/dashboard/messages/MessageSection";
// import ProfileSection from "../../components/Guides/dashboard/profile/ProfileSection";
// import ReviewSection from "../../components/Guides/dashboard/reviews/ReviewSection";

export default function GuideDashboard() {
  return (
    <div className="flex bg-[#11212D] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <Topbar />

        {/* Dashboard */}
        <section id="dashboard" className="mt-6 scroll-mt-24">
          <DashboardCards />
        </section>

        {/* Bookings */}
        <section id="bookings" className="mt-10 scroll-mt-24">
          <BookingTable />
        </section>

        {/* My Tours */}
        <section id="tours" className="mt-10 scroll-mt-24">
          <TourManagement />
        </section>

        {/* Availability */}
        <section id="availability" className="mt-10 scroll-mt-24">
          <AvailabilityCalendar />
        </section>

        {/* Messages */}
        <section id="messages" className="mt-10 scroll-mt-24">
          <div className="bg-[#243342] rounded-2xl p-10 text-center text-gray-400">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Messages
            </h2>
            <p>Guide messages will be displayed here.</p>
          </div>
        </section>

        {/* Profile */}
        <section id="profile" className="mt-10 scroll-mt-24">
          <div className="bg-[#243342] rounded-2xl p-10 text-center text-gray-400">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Guide Profile
            </h2>
            <p>Guide profile details will be displayed here.</p>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="mt-10 mb-10 scroll-mt-24">
          <div className="bg-[#243342] rounded-2xl p-10 text-center text-gray-400">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Reviews
            </h2>
            <p>Traveller reviews will be displayed here.</p>
          </div>
        </section>
      </div>
    </div>
  );
}