export default function Stepper({ currentStep }) {

  const steps = [
    "Account",
    "Personal Info",
    "Languages & Skills",
    "Pricing"
  ];

  return (
    <div className="stepper">

      {steps.map((item, index) => (
        <div
          key={index}
          className={`step ${
            currentStep >= index + 1
              ? "active"
              : ""
          }`}
        >
          <div className="circle">
            {index + 1}
          </div>

          <span>{item}</span>
        </div>
      ))}

    </div>
  );
}