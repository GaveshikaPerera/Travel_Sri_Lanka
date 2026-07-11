import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaChevronDown,
} from "react-icons/fa";
import AuthLeftPanel from "../../components/auth/AuthLeftPanel";

export default function TravellerSignupStep1() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-[#11212D] flex">

      {/* Left Side */}
      <AuthLeftPanel />

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10">

        <div className="w-[520px]">

          {/* Progress */}
          <div className="flex justify-center items-center mb-10">

            <div className="flex items-center gap-3">

              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#00C896] text-white flex items-center justify-center text-sm font-semibold">
                  1
                </div>

                <p className="text-[#00C896] text-xs mt-2">
                  Account
                </p>
              </div>

              <div className="w-12 h-[2px] bg-[#00C896]" />

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#3B4E5E] text-white flex items-center justify-center text-sm">
                  2
                </div>

                <p className="text-gray-400 text-xs mt-2">
                  Information
                </p>
              </div>

              <div className="w-12 h-[2px] bg-[#3B4E5E]" />

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#3B4E5E] text-white flex items-center justify-center text-sm">
                  3
                </div>

                <p className="text-gray-400 text-xs mt-2">
                  Photo
                </p>
              </div>

            </div>

          </div>

          {/* Card */}

          <div className="bg-[#243746] rounded-[30px] shadow-xl p-8">

            <h2 className="text-white text-3xl font-bold text-center">
              Sign up as a Traveller
            </h2>

            {/* Name */}

            <div className="grid grid-cols-2 gap-4 mt-8">

              <input
                type="text"
                placeholder="First Name"
                className="bg-[#3B4E5E] rounded-full h-12 px-5 text-white placeholder-gray-400 outline-none"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#3B4E5E] rounded-full h-12 px-5 text-white placeholder-gray-400 outline-none"
              />

            </div>

            {/* Email */}

            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-[#3B4E5E] rounded-full h-12 px-5 text-white placeholder-gray-400 outline-none mt-4"
            />

            {/* Password */}

            <div className="relative mt-4">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-[#3B4E5E] rounded-full h-12 px-5 pr-12 text-white placeholder-gray-400 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {/* Confirm */}

            <div className="relative mt-4">

              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full bg-[#3B4E5E] rounded-full h-12 px-5 pr-12 text-white placeholder-gray-400 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300"
              >
                {showConfirm ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {/* Passport */}

            <input
              type="text"
              placeholder="Passport Number / NIC"
              className="w-full bg-[#3B4E5E] rounded-full h-12 px-5 text-white placeholder-gray-400 outline-none mt-4"
            />

            {/* Country + Mobile */}

            <div className="grid grid-cols-2 gap-4 mt-4">

              <div className="relative">

                <select className="w-full appearance-none bg-[#3B4E5E] rounded-full h-12 px-5 text-gray-300 outline-none">

                  <option>Country</option>
                  <option>Sri Lanka</option>
                  <option>India</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>

                </select>

                <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />

              </div>

              <input
                type="text"
                placeholder="Mobile"
                className="bg-[#3B4E5E] rounded-full h-12 px-5 text-white placeholder-gray-400 outline-none"
              />

            </div>

            {/* Next */}

            <Link
              to="/signup/traveller/photo"
              className="mt-8 w-full h-12 rounded-full bg-[#00C896] hover:bg-[#00b383] duration-300 flex justify-center items-center text-white font-semibold text-lg"
            >
              Next
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}