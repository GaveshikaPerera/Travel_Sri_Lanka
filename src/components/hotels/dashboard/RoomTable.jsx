import { FaEdit } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    room: "Deluxe 101",
    type: "Deluxe",
    price: "LKR 12,000",
    status: "Available",
  },
  {
    id: 2,
    room: "Deluxe 102",
    type: "Deluxe",
    price: "LKR 12,000",
    status: "Booked",
  },
  {
    id: 3,
    room: "Family 201",
    type: "Family",
    price: "LKR 18,000",
    status: "Maintenance",
  },
  {
    id: 4,
    room: "Suite 301",
    type: "Suite",
    price: "LKR 25,000",
    status: "Available",
  },
];

export default function RoomTable() {
  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-400";
      case "Booked":
        return "bg-blue-500/20 text-blue-400";
      case "Maintenance":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <div className="bg-[#253745] rounded-2xl p-6 border border-[#2F4156]">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-semibold text-white">
          Room Management
        </h2>

        <button className="bg-[#00C896] hover:bg-[#00b383] text-white px-5 py-2 rounded-lg transition">
          + Add Room
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-[#4A5C6A]">

              <th className="text-left py-3 text-gray-300">Room</th>
              <th className="text-left py-3 text-gray-300">Type</th>
              <th className="text-left py-3 text-gray-300">Price</th>
              <th className="text-left py-3 text-gray-300">Status</th>
              <th className="text-center py-3 text-gray-300">Action</th>

            </tr>

          </thead>

          <tbody>

            {rooms.map((room) => (

              <tr
                key={room.id}
                className="border-b border-[#2F4156] hover:bg-[#2F4156]"
              >

                <td className="py-4 text-white">
                  {room.room}
                </td>

                <td className="text-gray-300">
                  {room.type}
                </td>

                <td className="text-gray-300">
                  {room.price}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      room.status
                    )}`}
                  >
                    {room.status}
                  </span>

                </td>

                <td className="text-center">

                  <button className="text-[#00C896] hover:text-white">

                    <FaEdit />

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