import { Link } from "react-router-dom";
import {
  FaUser,
  FaHotel,
  FaMapMarkedAlt,
  FaCar,
} from "react-icons/fa";

import AuthLeftPanel from "../../components/auth/AuthLeftPanel";

const cardStyle =
  "bg-[#223544] rounded-3xl p-8 hover:bg-[#294152] transition shadow-xl cursor-pointer flex flex-col items-center justify-center h-48";

export default function SignupTypePage() {
  return (
    <div className="min-h-screen bg-[#12222E] flex">

      <AuthLeftPanel />

      {/* Right */}

      <div className="w-full lg:w-1/2 flex justify-center items-center">

        <div className="w-[520px]">

          <h1 className="text-white text-5xl font-bold text-center">
            Sign up as
          </h1>

          <p className="text-gray-400 text-center mt-3">
            Choose how you want to join with us
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12">

            {/* Traveller */}

            <Link
              to="/signup/traveller"
              className={cardStyle}
            >
              <FaUser
                className="text-[#00C896]"
                size={42}
              />

              <h3 className="text-white text-2xl font-semibold mt-4">
                Traveller
              </h3>

              <p className="text-gray-400 text-center mt-2">
                Plan your trips easily
                <br />
                and explore Sri Lanka
              </p>
            </Link>

            {/* Vehicle */}

            <Link
              to="/signup/vehicle"
              className={cardStyle}
            >
              <FaCar
                className="text-[#00C896]"
                size={42}
              />

              <h3 className="text-white text-2xl font-semibold mt-4">
                Vehicle Owner
              </h3>

              <p className="text-gray-400 text-center mt-2">
                Provide transport
                <br />
                services and earn more
              </p>
            </Link>

            {/* Guide */}

            <Link
              to="/signup/guide"
              className={cardStyle}
            >
              <FaMapMarkedAlt
                className="text-[#00C896]"
                size={42}
              />

              <h3 className="text-white text-2xl font-semibold mt-4">
                Guide
              </h3>

              <p className="text-gray-400 text-center mt-2">
                Guide travellers around
                <br />
                Sri Lanka
              </p>
            </Link>

            {/* Hotel */}

            <Link
              to="/signup/hotel"
              className={cardStyle}
            >
              <FaHotel
                className="text-[#00C896]"
                size={42}
              />

              <h3 className="text-white text-2xl font-semibold mt-4">
                Hotel Owner
              </h3>

              <p className="text-gray-400 text-center mt-2">
                List your hotel
                <br />
                and rooms
              </p>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}