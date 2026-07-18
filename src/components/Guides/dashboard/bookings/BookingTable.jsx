import React from "react";
import { guideBookings } from "../../../../data/guideBookings";

export default function BookingTable() {
  const statusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-500";
      case "Pending":
        return "bg-yellow-500";
      case "Completed":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-[#243342] rounded-2xl p-6 mt-8 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-xl font-semibold">
          Upcoming Bookings
        </h2>

        <button className="text-[#00C896] hover:underline">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#314158] text-gray-400">
              <th className="py-3">Booking ID</th>
              <th>Traveller</th>
              <th>Tour</th>
              <th>Date</th>
              <th>Guests</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {guideBookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b border-[#314158] hover:bg-[#2F4156] transition duration-200"
              >
                <td className="py-4 text-white">{booking.id}</td>

                <td className="text-white">{booking.traveller}</td>

                <td className="text-white">{booking.tour}</td>

                <td className="text-white">{booking.date}</td>

                <td className="text-white">{booking.guests}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium text-white ${statusColor(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </td>

                <td>
                  <button className="bg-[#00C896] hover:bg-[#00b383] text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}