import { useNavigate } from "react-router-dom";
import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function GuideSignupStep2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#11212D] flex">

      <AuthLeftPanel />

      <div className="flex-1 flex flex-col">

        <StepIndicator currentStep={2} totalSteps={4} />

        <div className="flex justify-center items-center flex-1 p-8">

          <AuthCard>

            <h2 className="text-3xl font-bold text-white text-center mb-3">
              Sign up as Tour Guide
            </h2>

            {/* Guide License */}

            <input
              type="text"
              placeholder="Guide License Number"
              className="w-full h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none mb-3"
            />

            {/* Province & District */}

            <div className="grid grid-cols-2 gap-4 mb-3">

              <select className="h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none">
                <option>Province</option>
              </select>

              <select className="h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none">
                <option>District</option>
              </select>

            </div>

            {/* Experience & Rate */}

            <div className="grid grid-cols-2 gap-4 mb-3">

              <input
                type="number"
                placeholder="Years of Experience"
                className="h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none"
              />

              <input
                type="number"
                placeholder="Daily Rate (LKR)"
                className="h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none"
              />

            </div>

            {/* Languages */}

            <input
              type="text"
              placeholder="Languages (English, Sinhala...)"
              className="w-full h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none mb-5"
            />

            {/* Description */}

            <textarea
              rows={4}
              placeholder="Short Bio"
              className="w-full rounded-2xl bg-[#2F4156] p-4 text-white outline-none resize-none mb-8"
            />

            {/* Buttons */}

            <div className="flex gap-4">

              <button
                onClick={() => navigate("/signup/guide")}
                className="flex-1 h-14 rounded-full bg-[#4A5C6A] text-white font-semibold"
              >
                Previous
              </button>

              <button
                onClick={() => navigate("/signup/guide/services")}
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