import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaIdCard,
  FaCalendarAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import AuthInput from "../../../components/auth/AuthInput";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function GuideSignupStep1() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#11212D] flex">

      {/* Left Panel */}
      <AuthLeftPanel />

      {/* Right Panel */}
      <div className="flex-1 flex flex-col">

        <StepIndicator currentStep={1} totalSteps={4} />

        <div className="flex justify-center items-center flex-1 p-8">

          <AuthCard>

            <h1 className="text-white text-3xl font-bold text-center mb-8">
              Sign up as Tour Guide
            </h1>

            <div className="grid grid-cols-2 gap-4">

              <AuthInput
                icon={<FaUser />}
                placeholder="First Name"
              />

              <AuthInput
                icon={<FaUser />}
                placeholder="Last Name"
              />

            </div>

            <div className="mt-4">

              <AuthInput
                icon={<FaEnvelope />}
                placeholder="E-mail"
              />

            </div>

            <div className="mt-4">

              <AuthInput
                type={showPassword ? "text" : "password"}
                icon={<FaLock />}
                placeholder="Password"
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                }
              />

            </div>

            <div className="mt-4">

              <AuthInput
                type={showConfirmPassword ? "text" : "password"}
                icon={<FaLock />}
                placeholder="Confirm Password"
                rightIcon={
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>
                }
              />

            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">

              <AuthInput
                icon={<FaUser />}
                placeholder="Country"
              />

              <AuthInput
                icon={<FaPhone />}
                placeholder="Mobile"
              />

            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">

              <AuthInput
                type="date"
                icon={<FaCalendarAlt />}
              />

              <AuthInput
                icon={<FaIdCard />}
                placeholder="NIC / Passport"
              />

            </div>

            <button
              onClick={() => navigate("/signup/guide/details")}
              className="w-full h-14 rounded-full bg-[#00C896] hover:bg-[#00b383] duration-300 text-white text-lg font-semibold mt-8"
            >
              Next
            </button>

          </AuthCard>

        </div>

      </div>

    </div>
  );
}