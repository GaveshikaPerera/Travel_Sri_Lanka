import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { guideTours } from "../../../../data/guideTours";

export default function TourManagement() {
  return (
    <div className="bg-[#243342] rounded-2xl p-6 mt-8 shadow-lg">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-white text-xl font-semibold">
          My Tours
        </h2>

        <button className="bg-[#00C896] hover:bg-[#00b383] text-white px-4 py-2 rounded-lg transition">
          + Add New Tour
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-[#314158] text-gray-400">

              <th className="py-3">Tour ID</th>

              <th>Tour Name</th>

              <th>Location</th>

              <th>Price</th>

              <th>Guests</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {guideTours.map((tour) => (

              <tr
                key={tour.id}
                className="border-b border-[#314158] hover:bg-[#2F4156] transition"
              >

                <td className="py-4 text-white">
                  {tour.id}
                </td>

                <td className="text-white">
                  {tour.name}
                </td>

                <td className="text-white">
                  {tour.location}
                </td>

                <td className="text-white">
                  {tour.price}
                </td>

                <td className="text-white">
                  {tour.guests}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-xs text-white ${
                      tour.status === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {tour.status}
                  </span>

                </td>

                <td>

                  <div className="flex gap-3">

                    <button className="text-[#00C896] hover:text-[#00b383]">
                      <FaEdit />
                    </button>

                    <button className="text-red-400 hover:text-red-500">
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}