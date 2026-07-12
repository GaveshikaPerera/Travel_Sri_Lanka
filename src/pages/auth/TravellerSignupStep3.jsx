import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCamera, FaTrash } from "react-icons/fa";

import AuthLeftPanel from "../../components/auth/AuthLeftPanel";
import AuthCard from "../../components/auth/AuthCard";
import StepIndicator from "../../components/auth/StepIndicator";

export default function TravellerSignupStep3() {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="min-h-screen bg-[#11212D] flex">

      {/* Left */}
      <AuthLeftPanel />

      {/* Right */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">

        <div className="w-[520px]">

          <StepIndicator currentStep={3} />

          <AuthCard>

            <h2 className="text-3xl font-bold text-center text-white">
              Upload Profile Photo
            </h2>

            <p className="text-center text-gray-400 mt-3">
              Add a profile picture to personalize your account.
            </p>

            {/* Photo Preview */}

            <div className="flex justify-center mt-10">

              <div className="relative">

                <div className="w-44 h-44 rounded-full bg-[#3D4F5F] overflow-hidden flex items-center justify-center border-4 border-[#00C896]">

                  {image ? (
                    <img
                      src={image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaCamera
                      size={55}
                      className="text-[#00C896]"
                    />
                  )}

                </div>

              </div>

            </div>

            {/* Upload */}

            <label
              htmlFor="photo"
              className="mt-8 w-full h-14 rounded-full bg-[#00C896] hover:bg-[#00b383] transition flex justify-center items-center text-white font-semibold cursor-pointer"
            >
              Choose Photo
            </label>

            <input
              id="photo"
              type="file"
              accept="image/*"
              hidden
              onChange={handleImage}
            />

            {image && (
              <button
                onClick={() => setImage(null)}
                className="w-full h-14 rounded-full border border-red-500 text-red-400 mt-4 hover:bg-red-500 hover:text-white transition flex justify-center items-center gap-3"
              >
                <FaTrash />
                Remove Photo
              </button>
            )}

            {/* Buttons */}

            <div className="flex gap-4 mt-8">

              <Link
                to="/signup/traveller/personal"
                className="w-1/2"
              >
                <button className="w-full h-14 rounded-full border border-[#00C896] text-[#00C896] hover:bg-[#00C896] hover:text-white transition">
                  Back
                </button>
              </Link>

              <Link
                to="/"
                className="w-1/2"
              >
                <button className="w-full h-14 rounded-full bg-[#00C896] hover:bg-[#00b383] text-white font-semibold transition">
                  Sign Up
                </button>
              </Link>

            </div>

          </AuthCard>

        </div>

      </div>

    </div>
  );
}