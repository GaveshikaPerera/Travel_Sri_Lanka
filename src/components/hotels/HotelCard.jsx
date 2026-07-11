import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  return (
    <Link to={`/hotels/${hotel.id}`}>
      <div className="bg-[#253745] rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer">

        {/* Image */}
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-52 object-cover"
        />

        {/* Content */}
        <div className="p-4">

          {/* Rating */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              <span className="text-sm">{hotel.rating}</span>
            </div>

            <span className="text-[#00C896] font-bold">
              Rs.{hotel.price}
            </span>
          </div>

          {/* Name */}
          <h3 className="text-white text-xl font-semibold">
            {hotel.name}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
            <FaMapMarkerAlt className="text-[#00C896]" />
            {hotel.location}
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mt-3 line-clamp-2">
            {hotel.description}
          </p>

        </div>

      </div>
    </Link>
  );
};

export default HotelCard;