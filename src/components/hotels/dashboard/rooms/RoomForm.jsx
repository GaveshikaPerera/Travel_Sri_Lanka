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
        <label className="block text-gray-300 mb-2">
          Room Number
        </label>

        <input
          type="text"
          name="roomNumber"
          value={room.roomNumber}
          onChange={handleChange}
          placeholder="e.g. 101"
          required
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00C896]"
        />
      </div>

      {/* Room Type */}
      <div>
        <label className="block text-gray-300 mb-2">
          Room Type
        </label>

        <select
          name="roomType"
          value={room.roomType}
          onChange={handleChange}
          required
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white focus:outline-none focus:border-[#00C896]"
        >
          <option value="">Select Room Type</option>
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Family">Family</option>
          <option value="Suite">Suite</option>
        </select>
      </div>

      {/* Price */}
      <div>
        <label className="block text-gray-300 mb-2">
          Price Per Night (LKR)
        </label>

        <input
          type="number"
          name="price"
          value={room.price}
          onChange={handleChange}
          placeholder="12000"
          min="0"
          required
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00C896]"
        />
      </div>

      {/* Capacity */}
      <div>
        <label className="block text-gray-300 mb-2">
          Capacity
        </label>

        <input
          type="number"
          name="capacity"
          value={room.capacity}
          onChange={handleChange}
          placeholder="2"
          min="1"
          required
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00C896]"
        />
      </div>

      {/* Bed Type */}
      <div>
        <label className="block text-gray-300 mb-2">
          Bed Type
        </label>

        <select
          name="bedType"
          value={room.bedType}
          onChange={handleChange}
          required
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white focus:outline-none focus:border-[#00C896]"
        >
          <option value="">Select Bed Type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Queen">Queen</option>
          <option value="King">King</option>
        </select>
      </div>

      {/* Status */}
      <div>
        <label className="block text-gray-300 mb-2">
          Status
        </label>

        <select
          name="status"
          value={room.status}
          onChange={handleChange}
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white focus:outline-none focus:border-[#00C896]"
        >
          <option value="Available">Available</option>
          <option value="Occupied">Occupied</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="block text-gray-300 mb-2">
          Description
        </label>

        <textarea
          rows={4}
          name="description"
          value={room.description}
          onChange={handleChange}
          placeholder="Write a short description about the room..."
          className="w-full bg-[#2F4156] border border-[#4A5C6A] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00C896]"
        />
      </div>

      {/* Room Images */}
      <div>
        <label className="block text-gray-300 mb-2">
          Room Images
        </label>

        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={handleChange}
          className="w-full text-gray-300 file:bg-[#00C896] file:text-white file:border-0 file:px-4 file:py-2 file:rounded-lg file:cursor-pointer"
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