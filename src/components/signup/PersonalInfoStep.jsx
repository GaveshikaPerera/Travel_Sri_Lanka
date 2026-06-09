export default function PersonalInfoStep({
  next,
  prev,
}) {
  return (
    <div className="form-card">

      <h2>Personal Information</h2>

      <input type="date" />

      <input
        placeholder="Home Address"
      />

      <div className="grid-2">
        <select>
          <option>Gender</option>
        </select>

        <select>
          <option>Marital Status</option>
        </select>
      </div>

      <div className="grid-2">
        <input placeholder="Nationality" />
        <input placeholder="Province" />
      </div>

      <div className="grid-2">
        <input placeholder="NIC" />
        <input placeholder="District" />
      </div>

      <textarea
        rows="4"
        placeholder="About Yourself"
      />

      <div className="btn-row">
        <button onClick={prev}>
          Previous
        </button>

        <button onClick={next}>
          Next
        </button>
      </div>

    </div>
  );
}