import { Routes, Route } from "react-router-dom";

import TourGuidesPage from "./pages/TourGuidesPage";
import GuideSignup from "./pages/GuideSignup";
import AccountStep from "./components/signup/AccountStep";
import PersonalInfoStep from "./components/signup/PersonalInfoStep";
import ProfessionalInfoStep from "./components/signup/ProfessionalInfoStep";
import PricingStep from "./components/signup/PricingStep";

function App() {
  return (
    <Routes>
      {/* Tour Guides Listing Page */}
      <Route path="/" element={<TourGuidesPage />} />

      {/* Full Multi-Step Signup Page */}
      <Route path="/signup" element={<GuideSignup />} />

      {/* Individual Steps for Testing */}
      <Route
        path="/signup1"
        element={<AccountStep next={() => {}} />}
      />

      <Route
        path="/signup2"
        element={
          <PersonalInfoStep
            next={() => {}}
            prev={() => {}}
          />
        }
      />

      <Route
        path="/signup3"
        element={
          <ProfessionalInfoStep
            next={() => {}}
            prev={() => {}}
          />
        }
      />

      <Route
        path="/signup4"
        element={
          <PricingStep
            prev={() => {}}
          />
        }
      />
    </Routes>
  );
}

export default App;