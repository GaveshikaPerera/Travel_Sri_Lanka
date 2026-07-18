import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import AddRoomModal from "../rooms/AddRoomModal";
import EditRoomModal from "../rooms/EditRoomModal";
import DeleteRoomModal from "../rooms/DeleteRoomModal"; 

export default function RoomManagementSection() {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomNumber: "101",
      roomType: "Deluxe",
      price: 12000,
      capacity: 2,
      bedType: "Queen",
      status: "Available",
      description: "Luxury room with balcony",
      images: [],
    },
    {
      id: 2,
      roomNumber: "102",
      roomType: "Standard",
      price: 9500,
      capacity: 2,
      bedType: "Double",
      status: "Occupied",
      description: "Comfortable standard room",
      images: [],
    },
    {
      id: 3,
      roomNumber: "201",
      roomType: "Family",
      price: 18000,
      capacity: 4,
      bedType: "King",
      status: "Maintenance",
      description: "Family room",
      images: [],
    },
    {
      id: 4,
      roomNumber: "301",
      roomType: "Suite",
      price: 25000,
      capacity: 4,
      bedType: "King",
      status: "Available",
      description: "Luxury suite",
      images: [],
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);

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

  const handleAddRoom = (newRoom) => {
    setRooms((prev) => [
      ...prev,
      {
        ...newRoom,
        id: Date.now(),
        price: Number(newRoom.price),
        capacity: Number(newRoom.capacity),
      },
    ]);
  };

  const handleUpdateRoom = (updatedRoom) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === updatedRoom.id
          ? {
              ...updatedRoom,
              price: Number(updatedRoom.price),
              capacity: Number(updatedRoom.capacity),
            }
          : room
      )
    );
  };

  const handleDeleteRoom = (id) => {
  setRooms((prev) => prev.filter((room) => room.id !== id));

  setShowDeleteModal(false);
  setRoomToDelete(null);
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

      {/* Room Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#4A5C6A]">
              <th className="text-left py-4 text-gray-300">Room No</th>
              <th className="text-left py-4 text-gray-300">Room Type</th>
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
                <td className="py-5 text-white">
                  {room.roomNumber}
                </td>

                <td className="text-gray-300">
                  {room.roomType}
                </td>

                <td className="text-gray-300">
                  LKR {room.price.toLocaleString()}
                </td>

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

                    <button
                        className="text-red-400 hover:scale-110 transition"
                        onClick={() => {
                            setRoomToDelete(room);
                            setShowDeleteModal(true);
                        }}
                        >
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
        onSave={handleAddRoom}
      />

      {/* Edit Room Modal */}
      <EditRoomModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        selectedRoom={selectedRoom}
        onUpdate={handleUpdateRoom}
      />

        {/* Delete Room Modal */}
        <DeleteRoomModal
            isOpen={showDeleteModal}
            onClose={() => {
                setShowDeleteModal(false);
                setRoomToDelete(null);
            }}
            room={roomToDelete}
            onDelete={handleDeleteRoom}
            />

    </section>
  );
}