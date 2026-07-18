import { useNavigate } from "react-router-dom";
import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function VehicleSignupStep4() {
  const navigate = useNavigate();

  const UploadBox = ({ title }) => (
    <div className="bg-[#2F4156] rounded-2xl p-4">
      <h3 className="text-white font-semibold text-sm mb-1">
        {title}
      </h3>

      <p className="text-gray-400 text-xs mb-1">
        Upload PDF / JPG / PNG
      </p>

      <label className="border-2 border-dashed border-[#4A5C6A] rounded-xl h-18 flex flex-col justify-center items-center cursor-pointer hover:border-[#00C896] transition">
        <span className="text-4xl text-[#00C896]">⬆</span>

        <span className="text-gray-300 text-sm mt-2">
          Click to Upload
        </span>

        <input
          type="file"
          className="hidden"
        />
      </label>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#11212D] flex">

      <AuthLeftPanel />

      <div className="flex-1 flex flex-col">

        <StepIndicator
          currentStep={4}
          totalSteps={4}
        />

        <div className="flex justify-center items-center flex-1 p-8">

          <AuthCard>

            <h2 className="text-3xl font-bold text-white text-center mb-5">
              Sign up as Vehicle Owner
            </h2>

            <div className="grid grid-cols-2 gap-3">

              <UploadBox title="Driving License" />

              <UploadBox title="Vehicle Registration Certificate" />

              <UploadBox title="Insurance Certificate" />

              <UploadBox title="Revenue License" />

            </div>

            {/* Profile Photo */}

            <div className="mt-5 flex items-center justify-between bg-[#2F4156] rounded-2xl p-5">

              <div>

                <h3 className="text-white font-semibold">
                  Profile Picture
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Upload a clear photo of yourself.
                </p>

              </div>

              <label className="w-40 h-20 rounded-full border-2 border-dashed border-[#00C896] flex flex-col justify-center items-center cursor-pointer hover:bg-[#00C896]/10">

                <span className="text-5xl text-[#00C896]">
                  📷
                </span>

                <span className="text-gray-300 text-sm mt-2">
                  Browse
                </span>

                <input
                  type="file"
                  className="hidden"
                />

              </label>

            </div>

            {/* Buttons */}

            <div className="flex gap-4 mt-3">

              <button
                onClick={() =>
                  navigate("/signup/vehicle/services")
                }
                className="flex-1 h-14 rounded-full bg-[#4A5C6A] text-white font-semibold"
              >
                Previous
              </button>

              <button
                onClick={() => navigate("/vehicle/dashboard")}
                className="flex-1 h-14 rounded-full bg-[#00C896] hover:bg-[#00b383] text-white font-semibold"
              >
                Save & Continue
              </button>

            </div>

          </AuthCard>

        </div>

      </div>

    </div>
  );
}