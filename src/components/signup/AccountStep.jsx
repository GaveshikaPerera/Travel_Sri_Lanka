import { getNames } from "country-list";

const countries = getNames();

export default function AccountStep({ next }) {
  return (
    <div className="form-card">
      <h2>Sign up as Guide</h2>

      
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

      
      <input
        type="email"
        placeholder="Email"
      />

     
      <input
        type="password"
        placeholder="Password"
      />

      
      <input
        type="password"
        placeholder="Confirm Password"
      />

    
      <div className="grid-2">
        <select defaultValue="">
          <option value="" disabled>
            Country
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

     
      <label className="checkbox-label">
        <input type="checkbox" />
        <span>
          I agree to the Terms & Conditions
        </span>
      </label>

     
      <button
        className="next-btn"
        onClick={next}
      >
        Next
      </button>
    </div>
  );
}