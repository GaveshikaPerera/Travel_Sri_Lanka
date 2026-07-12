import React from "react";

export default function RoomForm({
  room,
  handleChange,
  handleSubmit,
  submitText = "Save",
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Room Number */}
      <div>
        <label className="block text-gray-300 mb-2">Room Number</label>

        <input
          type="text"
          name="roomNumber"
          value={room.roomNumber}
          onChange={handleChange}
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white focus:outline-none focus:border-[#00C896]"
          placeholder="101"
        />
      </div>

      {/* Room Type */}

      <div>
        <label className="block text-gray-300 mb-2">Room Type</label>

        <select
          name="roomType"
          value={room.roomType}
          onChange={handleChange}
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white focus:outline-none focus:border-[#00C896]"
        >
          <option value="">Select Type</option>
          <option>Standard</option>
          <option>Deluxe</option>
          <option>Family</option>
          <option>Suite</option>
        </select>
      </div>

      {/* Price */}

      <div>
        <label className="block text-gray-300 mb-2">
          Price Per Night
        </label>

        <input
          type="number"
          name="price"
          value={room.price}
          onChange={handleChange}
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white focus:outline-none focus:border-[#00C896]"
        />
      </div>

      {/* Capacity */}

      <div>
        <label className="block text-gray-300 mb-2">Capacity</label>

        <input
          type="number"
          name="capacity"
          value={room.capacity}
          onChange={handleChange}
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white focus:outline-none focus:border-[#00C896]"
        />
      </div>

      {/* Bed */}

      <div>
        <label className="block text-gray-300 mb-2">Bed Type</label>

        <select
          name="bedType"
          value={room.bedType}
          onChange={handleChange}
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white focus:outline-none focus:border-[#00C896]"
        >
          <option value="">Select Bed</option>
          <option>Single</option>
          <option>Double</option>
          <option>Queen</option>
          <option>King</option>
        </select>
      </div>

      {/* Status */}

      <div>
        <label className="block text-gray-300 mb-2">Status</label>

        <select
          name="status"
          value={room.status}
          onChange={handleChange}
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white focus:outline-none focus:border-[#00C896]"
        >
          <option>Available</option>
          <option>Occupied</option>
          <option>Maintenance</option>
        </select>
      </div>

      {/* Description */}

      <div>
        <label className="block text-gray-300 mb-2">
          Description
        </label>

        <textarea
          rows="4"
          name="description"
          value={room.description}
          onChange={handleChange}
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white focus:outline-none focus:border-[#00C896]"
        />
      </div>

      {/* Images */}

      <div>
        <label className="block text-gray-300 mb-2">
          Room Images
        </label>

        <input
          type="file"
          multiple
          className="w-full text-gray-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#00C896] hover:bg-[#00b383] py-3 rounded-lg text-white font-semibold transition"
      >
        {submitText}
      </button>
    </form>
  );
}