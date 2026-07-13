import { useNavigate } from "react-router-dom";
import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function VehicleSignupStep3() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#11212D] flex">
      {/* Left Panel */}
      <AuthLeftPanel />

      {/* Right Panel */}
      <div className="flex-1 flex flex-col">
        <StepIndicator currentStep={3} totalSteps={4} />

        <div className="flex justify-center items-center flex-1 p-8">
          <AuthCard className="w-full max-w-xl">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Sign up as Vehicle Owner
            </h2>

            {/* Available Area */}
            <select className="w-full h-14 rounded-full bg-[#2F4156] text-white px-5 mb-6 outline-none">
              <option>Available Area</option>
              <option>Colombo</option>
              <option>Galle</option>
              <option>Kandy</option>
              <option>Matara</option>
              <option>Ella</option>
              <option>Jaffna</option>
            </select>

            {/* Vehicle Details */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="text-gray-300 text-sm block mb-2">
                  Passenger Capacity
                </label>

                <input
                  type="number"
                  placeholder="4"
                  className="w-full h-12 rounded-full bg-[#2F4156] px-5 text-white outline-none"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2">
                  Luggage Capacity
                </label>

                <input
                  type="number"
                  placeholder="2"
                  className="w-full h-12 rounded-full bg-[#2F4156] px-5 text-white outline-none"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2">
                  Fuel Type
                </label>

                <select className="w-full h-12 rounded-full bg-[#2F4156] text-white px-5 outline-none">
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Hybrid</option>
                  <option>Electric</option>
                </select>
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2">
                  Air Conditioning
                </label>

                <select className="w-full h-12 rounded-full bg-[#2F4156] text-white px-5 outline-none">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            {/* Upload Photos */}
            <div className="bg-[#2F4156] rounded-2xl p-5 mb-8">
              <h3 className="text-white font-semibold mb-1">
                Add Vehicle Photos
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                Upload your vehicle images
              </p>

              <label className="border-2 border-dashed border-[#4A5C6A] rounded-xl h-44 flex flex-col items-center justify-center cursor-pointer hover:border-[#00C896] transition">
                <span className="text-5xl text-[#00C896] mb-2">⬆</span>

                <span className="text-gray-300">
                  Click to upload
                </span>

                <span className="text-gray-500 text-sm">
                  JPG / PNG (Max 5MB)
                </span>

                <input
                  type="file"
                  multiple
                  className="hidden"
                />
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() =>
                  navigate("/signup/vehicle/details")
                }
                className="flex-1 h-14 rounded-full bg-[#4A5C6A] text-white font-semibold"
              >
                Previous
              </button>

              <button
                onClick={() =>
                  navigate("/signup/vehicle/verification")
                }
                className="flex-1 h-14 rounded-full bg-[#00C896] hover:bg-[#00b383] text-white font-semibold"
              >
                Next
              </button>
            </div>
          </AuthCard>
        </div>
      </div>
    </div>
  );
}