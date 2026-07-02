import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import GuideDashboardPage from "./pages/GuideDashboardPage";

import { Toaster } from "react-hot-toast";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="w-full h-screen">
      <Toaster position="top-right" />

      {/* Automatically scroll to top whenever the route changes */}
      <ScrollToTop />

      <Routes>
        <Route path="/*" element={<HomePage />} />

        <Route path="/signin" element={<LoginPage />} />

        <Route path="/admin/*" element={<AdminPage />} />

         <Route path="/about-us" element={<AboutUsPage />} />

         <Route path="/contact-us" element={<ContactUsPage />} />

        <Route path="/guide-dashboard" element={<GuideDashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;