import { useState } from "react";

const provinceDistricts = {
  Western: ["Colombo", "Gampaha", "Kalutara"],
  Central: ["Kandy", "Matale", "Nuwara Eliya"],
  Southern: ["Galle", "Matara", "Hambantota"],
  Northern: ["Jaffna", "Kilinochchi", "Mannar", "Mullaitivu", "Vavuniya"],
  Eastern: ["Ampara", "Batticaloa", "Trincomalee"],
  "North Western": ["Kurunegala", "Puttalam"],
  "North Central": ["Anuradhapura", "Polonnaruwa"],
  Uva: ["Badulla", "Monaragala"],
  Sabaragamuwa: ["Kegalle", "Ratnapura"],
};

export default function PersonalInfoStep({ next, prev }) {
  const [province, setProvince] = useState("");

  return (
    <div className="form-card">
      <h2>Personal Information</h2>

      
      <input type="date" />

   
      <input placeholder="Home Address" />

      
      <div className="grid-2">
        <select defaultValue="">
          <option value="" disabled>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Marital Status
          </option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
         
        </select>
      </div>

     
      <div className="grid-2">
        <select defaultValue="">
          <option value="" disabled>
            Ethnicity 
          </option>

          <option value="Sinhala">Sinhala</option>
          <option value="Sri Lankan Tamil">
            Sri Lankan Tamil
          </option>
          <option value="Muslim">Muslim</option>
          <option value="Burgher">Burgher</option>
          <option value="Malay">Malay</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={province}
          onChange={(e) =>
            setProvince(e.target.value)
          }
        >
          <option value="">
            Select Province
          </option>

          {Object.keys(provinceDistricts).map(
            (provinceName) => (
              <option
                key={provinceName}
                value={provinceName}
              >
                {provinceName}
              </option>
            )
          )}
        </select>
      </div>

      <div className="grid-2">
        <input
          type="text"
          placeholder="NIC Number"
        />

        <select
          disabled={!province}
          defaultValue=""
        >
          <option value="">
            Select District
          </option>

          {province &&
            provinceDistricts[
              province
            ].map((district) => (
              <option
                key={district}
                value={district}
              >
                {district}
              </option>
            ))}
        </select>
      </div>

      <textarea
        rows="4"
        placeholder="Type about yourself..."
      />

      <div className="btn-row">
        <button
          type="button"
          onClick={prev}
        >
          Previous
        </button>

        <button
          type="button"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}