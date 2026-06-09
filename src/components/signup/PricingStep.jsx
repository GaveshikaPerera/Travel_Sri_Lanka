export default function PricingStep({
  prev,
}) {
  return (
    <div className="form-card">

      <h2>Pricing & Availability</h2>

      <div className="grid-2">

        <input placeholder="Price Per Hour" />

        <input placeholder="Price Per Day" />

      </div>

      <div className="grid-2">

        <select>
          <option>Maximum Guests</option>
        </select>

        <select>
          <option>Currency</option>
        </select>

      </div>

      <select>
        <option>
          Available Days
        </option>
      </select>

      <div className="profile-upload">

        <div className="image-circle">
          Upload Photo
        </div>

      </div>

      <div className="btn-row">

        <button onClick={prev}>
          Previous
        </button>

        <button>
          Save & Continue
        </button>

      </div>

    </div>
  );
}