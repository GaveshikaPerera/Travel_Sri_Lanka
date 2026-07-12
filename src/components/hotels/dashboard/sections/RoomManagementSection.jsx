import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import AddRoomModal from "../rooms/AddRoomModal";
import EditRoomModal from "../rooms/EditRoomModal";

export default function RoomManagementSection() {
  // Room state
  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomNo: "101",
      type: "Deluxe",
      price: "LKR 12,000",
      status: "Available",
    },
    {
      id: 2,
      roomNo: "102",
      type: "Standard",
      price: "LKR 9,500",
      status: "Occupied",
    },
    {
      id: 3,
      roomNo: "201",
      type: "Family",
      price: "LKR 18,000",
      status: "Maintenance",
    },
    {
      id: 4,
      roomNo: "301",
      type: "Suite",
      price: "LKR 25,000",
      status: "Available",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-400";
      case "Occupied":
        return "bg-blue-500/20 text-blue-400";
      case "Maintenance":
        return "bg-orange-500/20 text-orange-400";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <section
      id="rooms"
      className="bg-[#253745] rounded-2xl border border-[#2F4156] p-8 mb-10"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Room Management
          </h2>

          <p className="text-gray-400 mt-1">
            Manage all hotel rooms
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-[#00C896] hover:bg-[#00b383] px-5 py-3 rounded-xl text-white transition"
        >
          <FaPlus />
          Add Room
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#4A5C6A]">
              <th className="text-left py-4 text-gray-300">Room No</th>
              <th className="text-left py-4 text-gray-300">Type</th>
              <th className="text-left py-4 text-gray-300">Price</th>
              <th className="text-left py-4 text-gray-300">Status</th>
              <th className="text-center py-4 text-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => (
              <tr
                key={room.id}
                className="border-b border-[#2F4156] hover:bg-[#2F4156]"
              >
                <td className="py-5 text-white">{room.roomNo}</td>

                <td className="text-gray-300">{room.type}</td>

                <td className="text-gray-300">{room.price}</td>

                <td>
                  <span
                    className={`px-4 py-1 rounded-full text-sm ${getStatusColor(
                      room.status
                    )}`}
                  >
                    {room.status}
                  </span>
                </td>

                <td>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => {
                        setSelectedRoom(room);
                        setShowEditModal(true);
                      }}
                      className="text-[#00C896] hover:scale-110 transition"
                    >
                      <FaEdit />
                    </button>

                    <button className="text-red-400 hover:scale-110 transition">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Room Modal */}
      <AddRoomModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={(newRoom) => {
          const room = {
            id: Date.now(),
            roomNo: newRoom.roomNumber,
            type: newRoom.roomType,
            price: `LKR ${newRoom.price}`,
            status: newRoom.status,
          };

          setRooms((prev) => [...prev, room]);
        }}
      />

      {/* Edit Room Modal */}
      <EditRoomModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        selectedRoom={selectedRoom}
        onUpdate={(updatedRoom) => {
          setRooms((prev) =>
            prev.map((room) =>
              room.id === updatedRoom.id
                ? {
                    ...room,
                    roomNo: updatedRoom.roomNumber,
                    type: updatedRoom.roomType,
                    price: `LKR ${updatedRoom.price}`,
                    status: updatedRoom.status,
                  }
                : room
            )
          );
        }}
      />
    </section>
  );
}