import { getNames } from "country-list";

const countries = getNames();

export default function AccountStep({ next }) {
  return (
    <div className="form-card">
      <h2>Sign up as Guide</h2>

      {/* First Name & Last Name */}
      <div className="grid-2">
        <input
          type="text"
          placeholder="First Name"
        />

        <input
          type="text"
          placeholder="Last Name"
        />
      </div>

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
      />

      {/* Confirm Password */}
      <input
        type="password"
        placeholder="Confirm Password"
      />

      {/* Country & Mobile */}
      <div className="grid-2">
        <select defaultValue="">
          <option value="" disabled>
            Select Country
          </option>

          {countries.map((country) => (
            <option
              key={country}
              value={country}
            >
              {country}
            </option>
          ))}
        </select>

        <input
          type="tel"
          placeholder="Mobile Number"
        />
      </div>

      {/* Terms & Conditions */}
      <label className="checkbox-label">
        <input type="checkbox" />
        <span>
          I agree to the Terms & Conditions
        </span>
      </label>

      {/* Next Button */}
      <button
        className="next-btn"
        onClick={next}
      >
        Next
      </button>
    </div>
  );
}