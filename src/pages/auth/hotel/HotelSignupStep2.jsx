import { Link } from "react-router-dom";
import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function HotelSignupStep2() {
  return (
    <div className="min-h-screen bg-[#11212D] flex">

      {/* Left Panel */}
      <AuthLeftPanel />

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center px-8 py-10">

        <div className="w-full max-w-3xl">

          <StepIndicator
            currentStep={2}
            steps={[
              "Account",
              "Hotel",
              "Facilities",
              "Verification",
            ]}
          />

          <AuthCard>

            <h2 className="text-3xl font-bold text-center text-[#11212D] mb-8">
              Hotel Information
            </h2>

            {/* Hotel Name */}

            <input
              type="text"
              placeholder="Hotel Name"
              className="w-full h-14 rounded-full border border-gray-300 px-6 mb-4 focus:outline-none focus:border-[#00C896]"
            />

            {/* Hotel Type & Star Rating */}

            <div className="grid grid-cols-2 gap-4 mb-4">

              <select className="h-14 rounded-full border border-gray-300 px-5 focus:outline-none focus:border-[#00C896]">
                <option>Select Hotel Type</option>
                <option>Hotel</option>
                <option>Resort</option>
                <option>Villa</option>
                <option>Guest House</option>
                <option>Apartment</option>
              </select>

              <select className="h-14 rounded-full border border-gray-300 px-5 focus:outline-none focus:border-[#00C896]">
                <option>Star Rating</option>
                <option>★★★★★</option>
                <option>★★★★</option>
                <option>★★★</option>
                <option>★★</option>
                <option>★</option>
              </select>

            </div>

            {/* District & City */}

            <div className="grid grid-cols-2 gap-4 mb-4">

              <select className="h-14 rounded-full border border-gray-300 px-5 focus:outline-none focus:border-[#00C896]">
                <option>Select District</option>
                <option>Colombo</option>
                <option>Galle</option>
                <option>Kandy</option>
                <option>Matara</option>
                <option>Hambantota</option>
              </select>

              <input
                type="text"
                placeholder="City"
                className="h-14 rounded-full border border-gray-300 px-6 focus:outline-none focus:border-[#00C896]"
              />

            </div>

            {/* Address */}

            <textarea
              rows="3"
              placeholder="Hotel Address"
              className="w-full rounded-3xl border border-gray-300 px-6 py-4 mb-4 resize-none focus:outline-none focus:border-[#00C896]"
            />

            {/* Description */}

            <textarea
              rows="5"
              placeholder="Hotel Description"
              className="w-full rounded-3xl border border-gray-300 px-6 py-4 resize-none focus:outline-none focus:border-[#00C896]"
            />

            {/* Buttons */}

            <div className="flex justify-between mt-8">

              <Link
                to="/signup/hotel"
                className="px-10 py-3 rounded-full border border-[#00C896] text-[#00C896] font-semibold hover:bg-[#00C896] hover:text-white transition"
              >
                Previous
              </Link>

              <Link
                to="/signup/hotel/facilities"
                className="px-10 py-3 rounded-full bg-[#00C896] text-white font-semibold hover:bg-[#00b383] transition"
              >
                Next
              </Link>

            </div>

          </AuthCard>

        </div>

      </div>

    </div>
  );
}