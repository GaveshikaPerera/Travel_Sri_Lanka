import { useNavigate } from "react-router-dom";
import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function GuideSignupStep4() {
  const navigate = useNavigate();

  const UploadBox = ({ title }) => (
    <div className="bg-[#314158] rounded-2xl p-4">
      <h3 className="text-white font-semibold text-sm">{title}</h3>

      <p className="text-gray-400 text-xs mb-3">
        Upload PDF / JPG / PNG
      </p>

      <label className="border-2 border-dashed border-[#4A5C6A] rounded-xl h-30 flex flex-col justify-center items-center cursor-pointer hover:border-[#00C896] duration-300">

        <span className="text-2xl">⬆️</span>

        <span className="text-gray-300 mt-1">
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

            <h1 className="text-3xl font-bold text-white text-center mb-5">
              Sign up as Tour Guide
            </h1>

            <div className="grid grid-cols-2 gap-5">

              <UploadBox title="Guide License" />

              <UploadBox title="NIC / Passport" />

              <UploadBox title="Police Clearance" />

              <UploadBox title="Certificates" />

            </div>

           

            {/* Buttons */}

            <div className="flex gap-4 mt-5">

              <button
                onClick={() =>
                  navigate("/signup/guide/services")
                }
                className="flex-1 h-14 rounded-full bg-[#4A5C6A] text-white font-semibold"
              >
                Previous
              </button>

              <button
                onClick={() => navigate("/guide/dashboard")}
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