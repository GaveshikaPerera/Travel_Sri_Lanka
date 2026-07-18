import { FaTrash, FaTimes } from "react-icons/fa";

export default function DeleteRoomModal({
  isOpen,
  onClose,
  room,
  onDelete,
}) {
  if (!isOpen || !room) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
      <div className="bg-[#253745] w-full max-w-md rounded-2xl border border-[#2F4156] shadow-2xl">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#2F4156]">
          <h2 className="text-2xl font-bold text-white">
            Delete Room
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 transition"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 text-center">

          <div className="flex justify-center mb-5">
            <div className="bg-red-500/20 p-5 rounded-full">
              <FaTrash className="text-red-400 text-3xl" />
            </div>
          </div>

          <h3 className="text-xl text-white font-semibold mb-3">
            Are you sure?
          </h3>

          <p className="text-gray-400">
            Do you really want to delete
          </p>

          <p className="text-[#00C896] font-semibold text-lg mt-2">
            Room {room.roomNumber}
          </p>

          <p className="text-gray-500 mt-2">
            This action cannot be undone.
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-[#2F4156] text-white hover:bg-[#4A5C6A] transition"
            >
              Cancel
            </button>

            <button
              onClick={() => onDelete(room.id)}
              className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
            >
              Delete
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}