import { Link } from "react-router-dom";
import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function TravellerSignupStep1() {
  return (
    <div className="min-h-screen bg-[#11212D] flex">

      <AuthLeftPanel />

      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">

        <div className="w-[520px]">

          <StepIndicator currentStep={1} />

          <AuthCard>

            <h2 className="text-white text-3xl font-bold text-center mb-8">
              Sign up as a Traveller
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <input
                placeholder="First Name"
                className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300"
              />

              <input
                placeholder="Last Name"
                className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300"
              />

            </div>

            <input
              placeholder="E-mail"
              className="w-full h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300 mt-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300 mt-4"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300 mt-4"
            />

            <input
              placeholder="Passport Number / NIC"
              className="w-full h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300 mt-4"
            />

            <div className="grid grid-cols-2 gap-4 mt-4">

              <input
                placeholder="Country"
                className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300"
              />

              <input
                placeholder="Mobile"
                className="h-14 rounded-full bg-[#3D4F5F] px-6 text-white outline-none placeholder-gray-300"
              />

            </div>

           <Link to="/signup/traveller/personal"> 

              <button className="w-full h-14 rounded-full bg-[#00C896] text-white font-semibold text-xl mt-8 hover:bg-[#00b383] duration-300">
                Next
              </button>

            </Link>

          </AuthCard>

        </div>

      </div>

    </div>
  );
}