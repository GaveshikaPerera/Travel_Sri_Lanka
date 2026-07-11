import { FaUsers, FaBed } from "react-icons/fa";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-[#253745] rounded-2xl overflow-hidden shadow-lg">

      <img
        src={room.image}
        alt={room.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h3 className="text-white text-2xl font-semibold">
          {room.name}
        </h3>

        <div className="flex items-center gap-6 mt-4 text-gray-300">

          <div className="flex items-center gap-2">

            <FaUsers className="text-[#00C896]" />

            {room.guests} Guests

          </div>

          <div className="flex items-center gap-2">

            <FaBed className="text-[#00C896]" />

            {room.bed}

          </div>

        </div>

        <div className="flex justify-between items-center mt-6">

          <h2 className="text-[#00C896] text-2xl font-bold">

            Rs. {room.price}

          </h2>

          <button className="bg-[#00C896] hover:bg-[#00b383] px-6 py-3 rounded-full text-white font-semibold duration-300">

            Book Now

          </button>

        </div>

      </div>

    </div>
  );
};

export default RoomCard;