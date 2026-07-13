import { useNavigate } from "react-router-dom";
import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function VehicleSignupStep2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#11212D] flex">

      <AuthLeftPanel />

      <div className="flex-1 flex flex-col">

        <StepIndicator currentStep={2} totalSteps={4} />

        <div className="flex justify-center items-center flex-1 p-8">

          <AuthCard>

            <h2 className="text-3xl font-bold text-white text-center mb-5">
              Sign up as Vehicle Owner
            </h2>

            {/* Vehicle Type */}

            <select
              className="w-full h-14 rounded-full bg-[#2F4156] text-white px-5 mb-3 outline-none"
            >
              <option>Vehicle Type</option>
              <option>Car</option>
              <option>Van</option>
              <option>SUV</option>
              <option>Bus</option>
              <option>Bike</option>
            </select>

            {/* Brand & Model */}

            <div className="grid grid-cols-2 gap-4 mb-3">

              <input
                type="text"
                placeholder="Vehicle Brand"
                className="h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none"
              />

              <input
                type="text"
                placeholder="Vehicle Model"
                className="h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none"
              />

            </div>

            {/* Description */}

            <textarea
              rows={4}
              placeholder="Short Description"
              className="w-full rounded-2xl bg-[#2F4156] p-4 text-white outline-none mb-3 resize-none"
            />

            {/* Registration */}

            <div className="grid grid-cols-2 gap-4 mb-3">

              <input
                type="text"
                placeholder="Registration Number"
                className="h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none"
              />

              <input
                type="number"
                placeholder="Manufacture Year"
                className="h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none"
              />

            </div>

            {/* Chassis & Color */}

            <div className="grid grid-cols-2 gap-4 mb-8">

              <input
                type="text"
                placeholder="Chassis Number"
                className="h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none"
              />

              <input
                type="text"
                placeholder="Vehicle Color"
                className="h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none"
              />

            </div>

            {/* Buttons */}

            <div className="flex gap-4">

              <button
                onClick={() => navigate("/signup/vehicle")}
                className="flex-1 h-14 rounded-full bg-[#4A5C6A] text-white font-semibold"
              >
                Previous
              </button>

              <button
                onClick={() => navigate("/signup/vehicle/services")}
                className="flex-1 h-14 rounded-full bg-[#00C896] text-white font-semibold hover:bg-[#00b383]"
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