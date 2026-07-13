import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function GuideSignupStep3() {
  const navigate = useNavigate();

  const [guidePhoto, setGuidePhoto] = useState(null);

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setGuidePhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="min-h-screen bg-[#11212D] flex">
      <AuthLeftPanel />

      <div className="flex-1 flex flex-col">
        <StepIndicator currentStep={3} totalSteps={4} />

        <div className="flex justify-center items-center flex-1 p-8">
          <AuthCard>
            <h2 className="text-3xl font-bold text-white text-center mb-5">
              Sign up as Tour Guide
            </h2>

            {/* Available Area */}

            <input
              type="text"
              placeholder="Available Areas"
              className="w-full h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none mb-4"
            />

            {/* Languages */}

            <input
              type="text"
              placeholder="Languages Spoken"
              className="w-full h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none mb-4"
            />

            {/* Tour Type */}

            <select className="w-full h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none mb-4">
              <option>Tour Type</option>
              <option>Cultural Tours</option>
              <option>Adventure Tours</option>
              <option>Wildlife Tours</option>
              <option>Hiking Tours</option>
              <option>City Tours</option>
            </select>

            {/* Transportation */}

            <select className="w-full h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none mb-4">
              <option>Transportation Available?</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            {/* Upload Guide Photo */}

            <div className="mb-8">
              <label
                htmlFor="guidePhoto"
                className="border-2 border-dashed border-[#4A5C6A] rounded-2xl h-36 flex flex-col justify-center items-center cursor-pointer hover:border-[#00C896] duration-300"
              >
                {guidePhoto ? (
                  <img
                    src={guidePhoto}
                    alt="Guide Preview"
                    className="h-32 w-32 rounded-xl object-cover"
                  />
                ) : (
                  <>
                    <FaCamera className="text-[#00C896] text-4xl mb-3" />

                    <p className="text-white text-lg font-medium">
                      Upload Guide Photo
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      JPG / PNG (Max 5MB)
                    </p>

                    <p className="text-[#00C896] text-sm mt-1">
                      Click to browse
                    </p>
                  </>
                )}
              </label>

              <input
                id="guidePhoto"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </div>

            {/* Buttons */}

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/signup/guide/details")}
                className="flex-1 h-14 rounded-full bg-[#4A5C6A] text-white font-semibold hover:bg-[#3b4a55] duration-300"
              >
                Previous
              </button>

              <button
                onClick={() => navigate("/signup/guide/verification")}
                className="flex-1 h-14 rounded-full bg-[#00C896] hover:bg-[#00b383] text-white font-semibold duration-300"
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