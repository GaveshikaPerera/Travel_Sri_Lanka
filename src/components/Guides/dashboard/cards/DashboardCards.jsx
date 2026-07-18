import {
  FaCalendarCheck,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";

import DashboardCard from "./DashboardCard";

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-4 gap-5">

      <DashboardCard
        title="Upcoming Bookings"
        value="12"
        icon={<FaCalendarCheck className="text-white text-2xl" />}
      />

      <DashboardCard
        title="Total Tours"
        value="30"
        icon={<FaMapMarkedAlt className="text-white text-2xl" />}
      />

      <DashboardCard
        title="Total Earnings"
        value="LKR 50,000"
        icon={<FaMoneyBillWave className="text-white text-2xl" />}
      />

      <DashboardCard
        title="Rating"
        value="4.9 ★"
        icon={<FaStar className="text-white text-2xl" />}
      />

    </div>
  );
}