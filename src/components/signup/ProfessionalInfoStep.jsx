export default function ProfessionalInfoStep({
  next,
  prev,
}) {
  return (
    <div className="form-card">

      <h2>Professional Info</h2>

      <input
        placeholder="Guide License Number"
      />
      <select>
        <option>
          Years of Experience
        </option>
      </select>


      <div className="grid-2">

        <select>
          <option>Skills</option>
        </select>

        <select>
          <option>Languages</option>
        </select>

      </div>

      <textarea
        placeholder="Additional Fields"
      />

      <div className="upload-grid">

        <div className="upload-box">
          Upload NIC / Passport
        </div>

        <div className="upload-box">
          Upload Guide License
        </div>

      </div>

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