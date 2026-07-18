import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function GuideSignupStep2() {
  const navigate = useNavigate();

  const districts = {
    Western: [
      "Colombo",
      "Gampaha",
      "Kalutara",
    ],

    Central: [
      "Kandy",
      "Matale",
      "Nuwara Eliya",
    ],

    Southern: [
      "Galle",
      "Matara",
      "Hambantota",
    ],

    Northern: [
      "Jaffna",
      "Kilinochchi",
      "Mannar",
      "Mullaitivu",
      "Vavuniya",
    ],

    Eastern: [
      "Trincomalee",
      "Batticaloa",
      "Ampara",
    ],

    "North Western": [
      "Kurunegala",
      "Puttalam",
    ],

    "North Central": [
      "Anuradhapura",
      "Polonnaruwa",
    ],

    Uva: [
      "Badulla",
      "Monaragala",
    ],

    Sabaragamuwa: [
      "Ratnapura",
      "Kegalle",
    ],
  };

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");

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

            <select
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value);
                  setDistrict("");
                }}
                className="w-full h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none mb-3"
              >
                <option value="">Province</option>

                <option value="Western">Western</option>
                <option value="Central">Central</option>
                <option value="Southern">Southern</option>
                <option value="Northern">Northern</option>
                <option value="Eastern">Eastern</option>
                <option value="North Western">North Western</option>
                <option value="North Central">North Central</option>
                <option value="Uva">Uva</option>
                <option value="Sabaragamuwa">Sabaragamuwa</option>
              </select>

              <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  disabled={!province}
                  className="w-full h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none mb-3"
                >
                  <option value="">
                    {province ? "District" : "Select Province First"}
                  </option>

                  {province &&
                    districts[province].map((districtName) => (
                      <option
                        key={districtName}
                        value={districtName}
                      >
                        {districtName}
                      </option>
                    ))}
                </select>

           

            

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