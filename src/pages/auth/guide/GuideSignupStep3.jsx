import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import Select from "react-select";

import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

export default function GuideSignupStep3() {
  const navigate = useNavigate();

  const [guidePhoto, setGuidePhoto] = useState(null);

  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedTourTypes, setSelectedTourTypes] = useState([]);

  const areaOptions = [
  { value: "Colombo", label: "Colombo" },
  { value: "Kandy", label: "Kandy" },
  { value: "Galle", label: "Galle" },
  { value: "Matara", label: "Matara" },
  { value: "Anuradhapura", label: "Anuradhapura" },
  { value: "Jaffna", label: "Jaffna" },
  { value: "Trincomalee", label: "Trincomalee" },
  { value: "Negombo", label: "Negombo" },
  { value: "Hikkaduwa", label: "Hikkaduwa" },
  { value: "Mirissa", label: "Mirissa" },
  ];

  const dayOptions = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];

  const languageOptions = [
    { value: "Sinhala", label: "Sinhala" },
    { value: "English", label: "English" },
    { value: "Tamil", label: "Tamil" },
    { value: "French", label: "French" },
    { value: "German", label: "German" },
    { value: "Spanish", label: "Spanish" },
  ];

  const tourTypeOptions = [
    { value: "Cultural Tours", label: "Cultural Tours" },
    { value: "Adventure Tours", label: "Adventure Tours" },
    { value: "Wildlife Tours", label: "Wildlife Tours" },
    { value: "Hiking Tours", label: "Hiking Tours" },
    { value: "City Tours", label: "City Tours" },
  ];

  const customSelectStyles = {
    control: (base) => ({
      ...base,
      minHeight: "56px",
      backgroundColor: "#2F4156",
      border: "none",
      borderRadius: "9999px",
      boxShadow: "none",
      paddingLeft: "8px",
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#2F4156",
      color: "white",
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#00C896" : "#2F4156",
      color: "white",
      cursor: "pointer",
    }),

    multiValue: (base) => ({
      ...base,
      backgroundColor: "#00C896",
      borderRadius: "20px",
    }),

    multiValueLabel: (base) => ({
      ...base,
      color: "white",
    }),

    multiValueRemove: (base) => ({
      ...base,
      color: "white",
      ":hover": {
        backgroundColor: "#008f6d",
        color: "white",
      },
    }),

    placeholder: (base) => ({
      ...base,
      color: "#d1d5db",
    }),

    input: (base) => ({
      ...base,
      color: "white",
    }),
  };

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
            <h2 className="text-3xl font-bold text-white text-center mb-3">
              Sign up as Tour Guide
            </h2>

            {/* Available Area */}

           <Select
              isMulti
              options={areaOptions}
              value={selectedAreas}
              onChange={setSelectedAreas}
              placeholder="Available Areas"
              styles={customSelectStyles}
              className="mb-4"
            />

            {/* Available Days */}

            <Select
                isMulti
                options={dayOptions}
                value={selectedDays}
                onChange={setSelectedDays}
                placeholder="Available Days"
                styles={customSelectStyles}
                className="mb-4"
              />


            {/* Languages */}

              <Select
                isMulti
                options={languageOptions}
                value={selectedLanguages}
                onChange={setSelectedLanguages}
                placeholder="Languages Spoken"
                styles={customSelectStyles}
                className="mb-4"
              />

        
          {/* Tour Type */}

            <Select
                isMulti
                options={tourTypeOptions}
                value={selectedTourTypes}
                onChange={setSelectedTourTypes}
                placeholder="Tour Types"
                styles={customSelectStyles}
                className="mb-4"
              />

            {/* Transportation */}

            <select className="w-full h-14 rounded-full bg-[#2F4156] px-5 text-white outline-none mb-4">
              <option>Transportation Available?</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            {/* Upload Guide Photo */}

            <div className="mb-3">
              <label
                htmlFor="guidePhoto"
                className="border-2 border-dashed border-[#4A5C6A] rounded-2xl h-25 flex flex-col justify-center items-center cursor-pointer hover:border-[#00C896] duration-300"
              >
                {guidePhoto ? (
                  <img
                    src={guidePhoto}
                    alt="Guide Preview"
                    className="h-32 w-32 rounded-xl object-cover"
                  />
                ) : (
                  <>
                    <FaCamera className="text-[#00C896] text-4xl mt-0.5" />

                    <p className="text-white text-md font-medium">
                      Upload Guide Photo
                    </p>

                    <p className="text-gray-400 text-sm mb-2">
                      JPG / PNG (Max 5MB)
                    </p>

                    <p className="text-[#00C896] text-sm mb-1">
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
                className="flex-1 h-13 rounded-full bg-[#4A5C6A] text-white font-semibold hover:bg-[#3b4a55] duration-300"
              >
                Previous
              </button>

              <button
                onClick={() => navigate("/signup/guide/verification")}
                className="flex-1 h-13 rounded-full bg-[#00C896] hover:bg-[#00b383] text-white font-semibold duration-300"
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