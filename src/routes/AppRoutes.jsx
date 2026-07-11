import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/Home/HomePage";
import HotelsPage from "../pages/Hotels/HotelsPage";
import HotelDetailsPage from "../pages/Hotels/HotelDetailsPage";
import RoomDetailsPage from "../pages/Hotels/RoomDetailsPage";

import GuidesPage from "../pages/Guides/GuidesPage";
import GuideProfilePage from "../pages/Guides/GuideProfilePage";
import GuideMessagePage from "../pages/Guides/GuideMessagePage";

import ToursPage from "../pages/Tours/ToursPage";
import TourDetailsPage from "../pages/Tours/TourDetailsPage";
import TransportPage from "../pages/Transport/TransportPage";
import DestinationCategoryPage from "../pages/Destinations/DestinationCategoryPage";
import DestinationDetailsPage from "../pages/Destinations/DestinationDetailsPage";  

import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />
        <Route path="/rooms/:id" element={<RoomDetailsPage />} />

        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guides/:id" element={<GuideProfilePage />} />
        <Route path="/guides/:id/message" element={<GuideMessagePage />} />

        <Route path="/tours" element={<ToursPage />} />
        <Route path="/tours/:id" element={<TourDetailsPage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/destinations/:category" element={<DestinationCategoryPage />} />
        <Route path="/destinations/:category/:id" element={<DestinationDetailsPage />} />

        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Route>

      <Route path="/signin" element={<LoginPage />} />
      <Route path="/admin/*" element={<AdminPage />} />
    </Routes>
  );
};

export default AppRoutes;