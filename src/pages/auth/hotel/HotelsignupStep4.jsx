import { Link } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";

import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function HotelSignupStep4() {
  return (
    <div className="min-h-screen bg-[#11212D] flex">

      {/* Left Panel */}
      <AuthLeftPanel />

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center px-8 py-10">

        <div className="w-full max-w-3xl">

          <StepIndicator
            currentStep={4}
            steps={[
              "Account",
              "Hotel",
              "Facilities",
              "Verification",
            ]}
          />

          <AuthCard>

            <h2 className="text-3xl font-bold text-center text-[#11212D] mb-2">
              Verification
            </h2>

            <p className="text-center text-gray-500 mb-8">
              Upload the required documents to complete your registration.
            </p>

            {/* Hotel Cover */}

            <UploadBox title="Hotel Cover Image" />

            {/* Business Registration */}

            <UploadBox title="Business Registration Certificate" />

            {/* Owner NIC */}

            <UploadBox title="Owner NIC / Passport" />

            {/* SLTDA */}

            <UploadBox title="SLTDA Registration (Optional)" />

            {/* Terms */}

            <div className="flex items-start gap-3 mt-6">

              <input
                type="checkbox"
                className="mt-1 accent-[#00C896]"
              />

              <p className="text-gray-600 text-sm leading-6">
                I agree to the Terms & Conditions and confirm that all
                information provided is accurate.
              </p>

            </div>

            {/* Buttons */}

            <div className="flex justify-between mt-10">

              <Link
                to="/signup/hotel/facilities"
                className="px-8 py-3 rounded-full border border-[#00C896] text-[#00C896] font-semibold hover:bg-[#00C896] hover:text-white transition"
              >
                Previous
              </Link>

              <Link
                to="/hotel/dashboard"
                className="px-8 py-3 rounded-full bg-[#00C896] text-white font-semibold hover:bg-[#00b383] transition"
              >
                Finish Registration
              </Link>

            </div>

          </AuthCard>

        </div>

      </div>

    </div>
  );
}

function UploadBox({ title }) {
  return (
    <label className="block border-2 border-dashed border-gray-300 rounded-2xl p-6 mb-5 cursor-pointer hover:border-[#00C896] transition">

      <input
        type="file"
        className="hidden"
      />

      <div className="flex flex-col items-center">

        <FaCloudUploadAlt
          className="text-5xl text-[#00C896] mb-3"
        />

        <h3 className="font-semibold text-[#11212D]">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Click here to upload
        </p>

      </div>

    </label>
  );
}