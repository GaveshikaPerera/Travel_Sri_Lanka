import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import AuthLeftPanel from "../../components/auth/AuthLeftPanel";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#11212D] flex">

      {/* Left Side */}
      <AuthLeftPanel />

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">

        <AuthCard>

          <h1 className="text-white text-4xl font-bold text-center">
            Sign in
          </h1>

          <p className="text-gray-300 text-center mt-3 leading-7">
            Welcome back!
            <br />
            Please sign in to continue your journey.
          </p>

          <div className="mt-8 space-y-5">

            <AuthInput
              icon={<FaEnvelope />}
              placeholder="E-Mail"
            />

            <AuthInput
              type={showPassword ? "text" : "password"}
              icon={<FaLock />}
              placeholder="Password"
              rightIcon={
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>
              }
            />

          </div>

          {/* Remember + Forgot */}

          <div className="flex justify-between items-center mt-6 text-sm">

            <label className="flex items-center gap-2 text-gray-300 cursor-pointer">

              <input
                type="checkbox"
                className="accent-[#00C896]"
              />

              Remember me

            </label>

            <Link
              to="/forgot-password"
              className="text-gray-300 hover:text-[#00C896]"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Button */}

          <button className="w-full h-14 rounded-full bg-[#00C896] hover:bg-[#00b383] duration-300 text-white text-xl font-semibold mt-8">
            Sign in
          </button>

          {/* Bottom */}

          <p className="text-center text-gray-300 mt-8">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="text-white font-semibold hover:text-[#00C896]"
            >
              Sign up
            </Link>

          </p>

        </AuthCard>

      </div>

    </div>
  );
}