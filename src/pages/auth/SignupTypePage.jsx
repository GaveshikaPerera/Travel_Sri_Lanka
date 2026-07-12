import { Link } from "react-router-dom";
import {
  FaUser,
  FaHotel,
  FaCar,
} from "react-icons/fa";
import { MdTour } from "react-icons/md";

import AuthLeftPanel from "../../components/auth/AuthLeftPanel";

export default function SignupTypePage() {
  return (
    <div className="min-h-screen bg-[#11212D] flex">
     
      <AuthLeftPanel />

      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">

        <div className="w-[500px]">

          <h1 className="text-white text-4xl font-bold text-center">
            Sign up as
          </h1>

          <p className="text-gray-300 text-center mt-3 mb-10">
            Choose how you want to join with us
          </p>

          <div className="grid grid-cols-2 gap-8">

            {/* Traveller */}
            <Link
              to="/signup/traveller"
              className="bg-[#243746] rounded-[28px] h-[170px] flex flex-col justify-center items-center shadow-xl hover:scale-105 transition duration-300"
            >
              <FaUser
                size={48}
                className="text-[#00C896] mb-4"
              />

              <h2 className="text-white text-xl font-semibold">
                Traveller
              </h2>

              <p className="text-gray-300 text-sm text-center mt-2 px-4">
                Plan your trips easily
                <br />
                and explore Sri Lanka
              </p>
            </Link>

            {/* Vehicle Owner */}
            <Link
              to="/signup/vehicle-owner"
              className="bg-[#243746] rounded-[28px] h-[170px] flex flex-col justify-center items-center shadow-xl hover:scale-105 transition duration-300"
            >
              <FaCar
                size={48}
                className="text-[#00C896] mb-4"
              />

              <h2 className="text-white text-xl font-semibold">
                Vehicle Owner
              </h2>

              <p className="text-gray-300 text-sm text-center mt-2 px-4">
                Provide transport
                <br />
                services and earn more
              </p>
            </Link>

            {/* Guide */}
            <Link
              to="/signup/guide"
              className="bg-[#243746] rounded-[28px] h-[170px] flex flex-col justify-center items-center shadow-xl hover:scale-105 transition duration-300"
            >
              <MdTour
                size={48}
                className="text-[#00C896] mb-4"
              />

              <h2 className="text-white text-xl font-semibold">
                Guide
              </h2>

              <p className="text-gray-300 text-sm text-center mt-2 px-4">
                Guide travellers
                <br />
                around Sri Lanka
              </p>
            </Link>

            {/* Hotel Owner */}
            <Link
              to="/signup/hotel"
              className="bg-[#243746] rounded-[28px] h-[170px] flex flex-col justify-center items-center shadow-xl hover:scale-105 transition duration-300"
            >
              <FaHotel
                size={48}
                className="text-[#00C896] mb-4"
              />

              <h2 className="text-white text-xl font-semibold">
                Hotel Owner
              </h2>

              <p className="text-gray-300 text-sm text-center mt-2 px-4">
                List your hotel
                <br />
                and rooms
              </p>
            </Link>

          </div>

          <p className="text-center text-gray-300 mt-10">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#00C896] font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}