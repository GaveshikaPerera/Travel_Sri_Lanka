import { Link } from "react-router-dom";
import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function TravellerSignupStep2() {
  return (
    <div className="min-h-screen bg-[#11212D] flex">

      {/* Left */}
      <AuthLeftPanel />

      {/* Right */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">

        <div className="w-[520px]">

          <StepIndicator currentStep={2} />

          <AuthCard>

            <h2 className="text-white text-3xl font-bold text-center mb-8">
              Personal Information
            </h2>

            {/* Date + Gender */}

            <div className="grid grid-cols-2 gap-4">

              <input
                type="date"
                className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none"
              />

              <select className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

            </div>

            {/* Nationality */}

            <input
              placeholder="Nationality"
              className="w-full h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none mt-4 placeholder-gray-300"
            />

            {/* Address */}

            <textarea
              rows="3"
              placeholder="Address"
              className="w-full rounded-3xl bg-[#3D4F5F] px-6 py-4 text-white outline-none mt-4 placeholder-gray-300 resize-none"
            />

            {/* City + Postal Code */}

            <div className="grid grid-cols-2 gap-4 mt-4">

              <input
                placeholder="City"
                className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300"
              />

              <input
                placeholder="Postal Code"
                className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300"
              />

            </div>

            {/* Buttons */}

            <div className="flex gap-4 mt-8">

              <Link
                to="/signup/traveller"
                className="w-1/2"
              >
                <button className="w-full h-14 rounded-full border border-[#00C896] text-[#00C896] hover:bg-[#00C896] hover:text-white transition">
                  Back
                </button>
              </Link>

              <Link
                to="/signup/traveller/photo"
                className="w-1/2"
              >
                <button className="w-full h-14 rounded-full bg-[#00C896] text-white font-semibold hover:bg-[#00b383] transition">
                  Next
                </button>
              </Link>

            </div>

          </AuthCard>

        </div>

      </div>

    </div>
  );
}