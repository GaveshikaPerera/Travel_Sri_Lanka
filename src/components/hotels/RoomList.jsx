import { Link } from "react-router-dom";
import { FaUsers, FaBed, FaRulerCombined } from "react-icons/fa";

const RoomList = ({ rooms }) => {
  return (
    <div className="bg-[#253745] rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Available Rooms
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-[#11212D] rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Room Image */}
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-56 object-cover"
            />

            {/* Room Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">
                {room.name}
              </h3>

              <div className="flex flex-wrap gap-5 mt-4 text-gray-300">

                <div className="flex items-center gap-2">
                  <FaUsers className="text-[#00C896]" />
                  <span>{room.guests} Guests</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaBed className="text-[#00C896]" />
                  <span>{room.bed}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaRulerCombined className="text-[#00C896]" />
                  <span>{room.size}</span>
                </div>

              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mt-5">
                {room.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-[#253745] text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Bottom */}
              <div className="flex justify-between items-center mt-6">

                <div>
                  <p className="text-gray-400 text-sm">
                    Price Per Night
                  </p>

                  <h3 className="text-2xl font-bold text-[#00C896]">
                    Rs. {room.price.toLocaleString()}
                  </h3>
                </div>

                <Link
                  to={`/rooms/${room.id}`}
                  className="bg-[#00C896] hover:bg-[#00b383] text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  View Details
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;