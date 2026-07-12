import { Link } from "react-router-dom";
import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function HotelSignupStep1() {
  return (
    <div className="min-h-screen bg-[#11212D] flex">

      {/* Left Side */}
      <AuthLeftPanel />

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">

        <div className="w-[520px]">

          <StepIndicator currentStep={1} />

          <AuthCard>

            <h2 className="text-white text-3xl font-bold text-center mb-8">
              Sign Up as Hotel Owner
            </h2>

            {/* Name */}

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="First Name"
                className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300"
              />

            </div>

            {/* Email */}

            <input
              type="email"
              placeholder="Business Email"
              className="w-full h-14 rounded-full bg-[#3D4F5F] px-6 mt-4 text-white outline-none placeholder-gray-300"
            />

            {/* Password */}

            <input
              type="password"
              placeholder="Password"
              className="w-full h-14 rounded-full bg-[#3D4F5F] px-6 mt-4 text-white outline-none placeholder-gray-300"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-14 rounded-full bg-[#3D4F5F] px-6 mt-4 text-white outline-none placeholder-gray-300"
            />

            {/* Registration */}

            <input
              type="text"
              placeholder="Business Registration Number"
              className="w-full h-14 rounded-full bg-[#3D4F5F] px-6 mt-4 text-white outline-none placeholder-gray-300"
            />

            {/* Phones */}

            <div className="grid grid-cols-2 gap-4 mt-4">

              <input
                type="text"
                placeholder="Mobile Number"
                className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300"
              />

              <input
                type="text"
                placeholder="Office Number"
                className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300"
              />

            </div>

            {/* Next Button */}

            <Link to="/signup/hotel/information">

              <button className="w-full h-14 rounded-full bg-[#00C896] hover:bg-[#00b383] text-white font-semibold text-lg mt-8 transition">
                Next
              </button>

            </Link>

          </AuthCard>

        </div>

      </div>

    </div>
  );
}