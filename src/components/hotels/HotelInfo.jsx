import {
  FaStar,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const HotelInfo = ({ hotel }) => {
  return (
    <div className="bg-[#253745] rounded-2xl p-8 shadow-lg">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

        {/* Left */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            {hotel.name}
          </h1>

          <div className="flex items-center gap-2 mt-3 text-gray-300">
            <FaMapMarkerAlt className="text-[#00C896]" />
            <span>{hotel.address}</span>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <FaStar className="text-yellow-400" />

            <span className="text-white font-semibold">
              {hotel.rating}
            </span>

            <span className="text-gray-400">
              ({hotel.reviews} Reviews)
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="bg-[#11212D] rounded-xl p-6 min-w-[240px] text-center">

          <p className="text-gray-400 text-sm">
            Starting From
          </p>

          <div className="flex justify-center items-center gap-2 mt-2">
            <FaMoneyBillWave className="text-[#00C896]" />

            <h2 className="text-3xl font-bold text-white">
              Rs. {hotel.price.toLocaleString()}
            </h2>
          </div>

          <p className="text-gray-400 mt-1">
            per night
          </p>

          <button
            className="
            mt-5
            w-full
            bg-[#00C896]
            hover:bg-[#00b383]
            duration-300
            text-white
            py-3
            rounded-xl
            font-semibold
          "
          >
            Book Now
          </button>

        </div>

      </div>

      {/* Description */}

      <div className="mt-8">

        <h2 className="text-2xl font-semibold text-white mb-4">
          About this Hotel
        </h2>

        <p className="text-gray-300 leading-8">
          {hotel.description}
        </p>

      </div>

    </div>
  );
};

export default HotelInfo;