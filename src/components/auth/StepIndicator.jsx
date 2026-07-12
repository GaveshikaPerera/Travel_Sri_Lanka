export default function StepIndicator({ currentStep }) {
  const steps = [
    "Account",
    "Personal Info",
    "Profile",
    "Finish",
  ];

  return (
    <div className="flex justify-center items-center mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">

          <div className="flex flex-col items-center">

            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition
              ${
                index + 1 <= currentStep
                  ? "bg-[#00C896] text-white"
                  : "bg-[#506170] text-gray-300"
              }`}
            >
              ✓
            </div>

            <span
              className={`text-xs mt-2 ${
                index + 1 <= currentStep
                  ? "text-[#00C896]"
                  : "text-gray-400"
              }`}
            >
              {step}
            </span>

          </div>

          {index !== steps.length - 1 && (
            <div
              className={`w-16 h-[2px] mx-3 ${
                index + 1 < currentStep
                  ? "bg-[#00C896]"
                  : "bg-[#506170]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}