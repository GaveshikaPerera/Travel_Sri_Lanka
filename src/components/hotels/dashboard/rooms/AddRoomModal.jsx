import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import RoomForm from "./RoomForm";

const initialRoomState = {
  roomNumber: "",
  roomType: "",
  price: "",
  capacity: "",
  bedType: "",
  status: "Available",
  description: "",
  images: [],
};

export default function AddRoomModal({ isOpen, onClose, onSave }) {
  const [room, setRoom] = useState(initialRoomState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setRoom((prev) => ({
        ...prev,
        images: Array.from(files),
      }));
    } else {
      setRoom((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !room.roomNumber ||
      !room.roomType ||
      !room.price ||
      !room.capacity ||
      !room.bedType
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    onSave(room);

    setRoom(initialRoomState);

    onClose();
  };

  const handleClose = () => {
    setRoom(initialRoomState);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
      <div className="bg-[#253745] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#2F4156]">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#2F4156]">
          <h2 className="text-2xl font-bold text-white">
            Add New Room
          </h2>

          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-red-400 transition"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <RoomForm
            room={room}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitText="Save Room"
          />
        </div>
      </div>
    </div>
  );
}