export default function StepIndicator({
  currentStep = 1,
  steps = [],
}) {
  return (
    <div className="flex justify-center items-start mb-8">

      {steps.map((step, index) => {
        const stepNumber = index + 1;

        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div
            key={step}
            className="flex items-center"
          >
            {/* Step */}

            <div className="flex flex-col items-center">

              <div
                className={`
                  w-10 h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isCompleted
                      ? "bg-[#00C896] text-white"
                      : isCurrent
                      ? "bg-[#00C896] text-white ring-4 ring-[#00C896]/25"
                      : "bg-[#4A5C6A] text-gray-300"
                  }
                `}
              >
                {stepNumber}
              </div>

              <p
                className={`
                  mt-2
                  text-xs
                  text-center
                  w-20

                  ${
                    isCompleted || isCurrent
                      ? "text-[#00C896]"
                      : "text-gray-400"
                  }
                `}
              >
                {step}
              </p>

            </div>

            {/* Line */}

            {index !== steps.length - 1 && (

              <div
                className={`
                  w-16
                  h-[3px]
                  mx-3
                  rounded-full
                  mb-6

                  ${
                    stepNumber < currentStep
                      ? "bg-[#00C896]"
                      : "bg-[#4A5C6A]"
                  }
                `}
              />

            )}

          </div>
        );
      })}
    </div>
  );
}