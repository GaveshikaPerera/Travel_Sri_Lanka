import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaDumbbell,
  FaSpa,
  FaShuttleVan,
  FaConciergeBell,
  FaUtensils,
} from "react-icons/fa";

const iconMap = {
  "Free WiFi": <FaWifi />,
  "Swimming Pool": <FaSwimmingPool />,
  "Restaurant": <FaUtensils />,
  "Fitness Center": <FaDumbbell />,
  "Gym": <FaDumbbell />,
  "Spa": <FaSpa />,
  "Free Parking": <FaParking />,
  "Parking": <FaParking />,
  "Airport Shuttle": <FaShuttleVan />,
  "Room Service": <FaConciergeBell />,
  "Bar": <FaUtensils />,
  "Beach Access": <FaSwimmingPool />,
};

const Facilities = ({ amenities }) => {
  return (
    <div className="bg-[#253745] rounded-2xl p-8 shadow-lg">

      <h2 className="text-2xl font-bold text-white mb-6">
        Hotel Facilities
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {amenities.map((facility, index) => (
          <div
            key={index}
            className="bg-[#11212D] rounded-xl p-4 flex items-center gap-3 hover:bg-[#1d313f] duration-300"
          >
            <div className="text-[#00C896] text-2xl">
              {iconMap[facility]}
            </div>

            <span className="text-white">
              {facility}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Facilities;