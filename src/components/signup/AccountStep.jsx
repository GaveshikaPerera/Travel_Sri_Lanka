export default function AccountStep({ next }) {
  return (
    <div className="form-card">

      <h2>Sign up as Guide</h2>

      <div className="grid-2">
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
      </div>

      <input placeholder="Email" />

      <input
        type="password"
        placeholder="Password"
      />

      <input
        type="password"
        placeholder="Confirm Password"
      />

      <div className="grid-2">
        <input placeholder="Country" />
        <input placeholder="Mobile" />
      </div>

      <label>
        <input type="checkbox" />
        I agree to Terms & Conditions
      </label>

      <button onClick={next}>
        Next
      </button>

    </div>
  );
}