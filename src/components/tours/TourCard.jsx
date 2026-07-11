import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaClock } from "react-icons/fa";

const TourCard = ({ tour }) => {
  return (
    <div className="bg-[#253745] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* Tour Image */}
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        {/* Rating */}
        <div className="flex justify-between items-center mb-3">

          <div className="flex items-center gap-2 text-yellow-400">
            <FaStar />
            <span className="text-white">{tour.rating}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <FaClock />
            <span>{tour.duration}</span>
          </div>

        </div>

        {/* Tour Title */}
        <h3 className="text-2xl font-bold text-white">
          {tour.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-400 mt-3">
          <FaMapMarkerAlt className="text-[#00C896]" />
          <span>{tour.location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 mt-4 line-clamp-3">
          {tour.description}
        </p>

        {/* Price + Button */}
        <div className="flex justify-between items-center mt-6">

          <div>
            <p className="text-sm text-gray-400">
              Starting From
            </p>

            <p className="text-[#00C896] text-2xl font-bold">
              Rs. {tour.price.toLocaleString()}
            </p>
          </div>

          <Link
            to={`/tours/${tour.id}`}
            className="bg-[#00C896] hover:bg-[#00b383] transition px-5 py-3 rounded-xl text-white font-semibold"
          >
            View Tour
          </Link>

        </div>

      </div>
    </div>
  );
};

export default TourCard;