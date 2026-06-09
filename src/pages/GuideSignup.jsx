import { useState } from "react";
import Stepper from "../components/signup/Stepper";
import AccountStep from "../components/signup/AccountStep";
import PersonalInfoStep from "../components/signup/PersonalInfoStep";
import ProfessionalInfoStep from "../components/signup/ProfessionalInfoStep";
import PricingStep from "../components/signup/PricingStep";

export default function GuideSignup() {
  const [step, setStep] = useState(1);

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  return (
    <div className="signup-container">

      <div className="left-section">
        <h1>SRI.</h1>

        <div>
          <h2>TOURS FOR</h2>
          <h2>SRI LANKA</h2>
        </div>

        <p>Discover The Wonders of Sri Lanka</p>
      </div>

      <div className="right-section">

        <Stepper currentStep={step} />

        {step === 1 && <AccountStep next={next} />}
        {step === 2 && (
          <PersonalInfoStep
            next={next}
            prev={prev}
          />
        )}

        {step === 3 && (
          <ProfessionalInfoStep
            next={next}
            prev={prev}
          />
        )}

        {step === 4 && (
          <PricingStep
            prev={prev}
          />
        )}

      </div>

    </div>
  );
}