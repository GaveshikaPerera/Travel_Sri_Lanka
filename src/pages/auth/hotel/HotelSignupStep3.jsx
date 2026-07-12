import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLeftPanel from "../../../components/auth/AuthLeftPanel";
import AuthCard from "../../../components/auth/AuthCard";
import StepIndicator from "../../../components/auth/StepIndicator";

const facilityList = [
  "Free Wi-Fi",
  "Swimming Pool",
  "Restaurant",
  "Gym",
  "Spa",
  "Bar",
  "Free Parking",
  "Airport Shuttle",
  "Room Service",
  "Laundry",
  "Air Conditioning",
  "24 Hour Reception",
  "Conference Hall",
  "Family Rooms",
  "Pet Friendly",
  "Beach Access",
];

export default function HotelSignupStep3() {
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  const toggleFacility = (facility) => {
    if (selectedFacilities.includes(facility)) {
      setSelectedFacilities(
        selectedFacilities.filter((item) => item !== facility)
      );
    } else {
      setSelectedFacilities([...selectedFacilities, facility]);
    }
  };

  return (
    <div className="min-h-screen bg-[#11212D] flex">

      <AuthLeftPanel />

      <div className="flex-1 flex items-center justify-center px-8 py-10">

        <div className="w-full max-w-3xl">

          <StepIndicator
            currentStep={3}
            steps={[
              "Account",
              "Hotel",
              "Facilities",
              "Verification",
            ]}
          />

          <AuthCard>

            <h2 className="text-3xl font-bold text-center text-[#11212D] mb-3">
              Hotel Facilities
            </h2>

            <p className="text-center text-gray-500 mb-8">
              Select all facilities available at your hotel.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {facilityList.map((facility) => {

                const active = selectedFacilities.includes(facility);

                return (
                  <button
                    key={facility}
                    type="button"
                    onClick={() => toggleFacility(facility)}
                    className={`rounded-full px-5 py-3 border transition font-medium
                      ${
                        active
                          ? "bg-[#00C896] text-white border-[#00C896]"
                          : "bg-white text-gray-700 border-gray-300 hover:border-[#00C896]"
                      }`}
                  >
                    {facility}
                  </button>
                );
              })}

            </div>

            <div className="flex justify-between mt-10">

              <Link
                to="/signup/hotel/details"
                className="px-8 py-3 rounded-full border border-[#00C896] text-[#00C896] font-semibold hover:bg-[#00C896] hover:text-white transition"
              >
                Previous
              </Link>

              <Link
                to="/signup/hotel/facilities"
                className="px-8 py-3 rounded-full bg-[#00C896] text-white font-semibold hover:bg-[#00b383] transition"
              >
                Next
              </Link>

            </div>

          </AuthCard>

        </div>

      </div>

    </div>
  );
}