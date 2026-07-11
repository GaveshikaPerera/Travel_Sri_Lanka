import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaWifi,
  FaSnowflake,
  FaTv,
  FaBath,
  FaUsers,
  FaBed,
} from "react-icons/fa";


import room1 from "../../assets/hotels/room1.jpg";

const RoomDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#11212D] text-white">

      

      <div className="max-w-7xl mx-auto px-8 py-8">

        <Link
          to="/hotels/1"
          className="inline-flex items-center gap-2 text-[#00C896] hover:underline mb-6"
        >
          <FaArrowLeft />
          Back to Hotel
        </Link>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div>

            <img
              src={room1}
              alt="Room"
              className="w-full h-[420px] object-cover rounded-2xl"
            />

          </div>

          {/* Right */}

          <div>

            <h1 className="text-4xl font-bold">
              Deluxe Double Room
            </h1>

            <p className="text-[#00C896] text-xl mt-2">
              Rs. 18,500 / Night
            </p>

            <div className="flex flex-wrap gap-5 mt-8 text-gray-300">

              <div className="flex items-center gap-2">
                <FaBed />
                King Bed
              </div>

              <div className="flex items-center gap-2">
                <FaUsers />
                2 Guests
              </div>

              <div className="flex items-center gap-2">
                <FaBath />
                Private Bathroom
              </div>

            </div>

            <h2 className="text-2xl font-semibold mt-10">
              Description
            </h2>

            <p className="text-gray-400 mt-3 leading-8">

              Enjoy a relaxing stay in our spacious Deluxe Room with
              modern furniture, beautiful views and all essential
              facilities. Perfect for couples or business travellers.

            </p>

            <h2 className="text-2xl font-semibold mt-10">
              Room Facilities
            </h2>

            <div className="grid grid-cols-2 gap-5 mt-5">

              <div className="flex items-center gap-3">
                <FaWifi className="text-[#00C896]" />
                Free Wi-Fi
              </div>

              <div className="flex items-center gap-3">
                <FaSnowflake className="text-[#00C896]" />
                Air Conditioning
              </div>

              <div className="flex items-center gap-3">
                <FaTv className="text-[#00C896]" />
                Smart TV
              </div>

              <div className="flex items-center gap-3">
                <FaBath className="text-[#00C896]" />
                Hot Water
              </div>

            </div>

            <div className="mt-10 bg-[#253745] rounded-2xl p-6 border border-[#4A5C6A]">
            <h3 className="text-xl font-semibold text-white mb-3">
                Room Summary
            </h3>

            <div className="space-y-3 text-gray-300">

                <div className="flex justify-between">
                <span>Room Type</span>
                <span className="text-white font-medium">
                    Deluxe Double Room
                </span>
                </div>

                <div className="flex justify-between">
                <span>Capacity</span>
                <span className="text-white font-medium">
                    2 Guests
                </span>
                </div>

                <div className="flex justify-between">
                <span>Bed Type</span>
                <span className="text-white font-medium">
                    King Bed
                </span>
                </div>

                <div className="flex justify-between">
                <span>Price</span>
                <span className="text-[#00C896] font-bold">
                    Rs. 18,500 / Night
                </span>
                </div>

  </div>
</div>

          </div>

        </div>

      </div>

      

    </div>
  );
};

export default RoomDetailsPage;