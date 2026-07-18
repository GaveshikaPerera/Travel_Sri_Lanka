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
import VehicleListPage from "../pages/Transport/VehicleListPage";
import VehicleDetailsPage from "../pages/Transport/VehicleDetailsPage";
import BookingSuccessPage from "../pages/Transport/BookingSuccessPage";

import DestinationCategoryPage from "../pages/Destinations/DestinationCategoryPage";
import DestinationDetailsPage from "../pages/Destinations/DestinationDetailsPage";  

import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";

import AdminPage from "../pages/AdminPage";

import LoginPage from "../pages/auth/LoginPage";
import SignupTypePage from "../pages/auth/SignupTypePage";

import TravellerSignupStep1 from "../pages/auth/traveller/TravellerSignupStep1";
import TravellerSignupStep2 from "../pages/auth/traveller/TravellerSignupStep2";
import TravellerSignupStep3 from "../pages/auth/traveller/TravellerSignupStep3";

import HotelSignupStep1 from "../pages/auth/hotel/HotelSignupStep1";
import HotelSignupStep2 from "../pages/auth/hotel/HotelSignupStep2";
import HotelSignupStep3 from "../pages/auth/hotel/HotelSignupStep3";
import HotelSignupStep4 from "../pages/auth/hotel/HotelSignupStep4";

import VehicleSignupStep1 from "../pages/auth/vehicle/VehicleSignupStep1";  
import VehicleSignupStep2 from "../pages/auth/vehicle/VehicleSignupStep2";
import VehicleSignupStep3 from "../pages/auth/vehicle/VehicleSignupStep3";
import VehicleSignupStep4 from "../pages/auth/vehicle/VehicleSignupStep4";

import GuideSignupStep1 from "../pages/auth/guide/GuideSignupStep1";
import GuideSignupStep2 from "../pages/auth/guide/GuideSignupStep2";  
import GuideSignupStep3 from "../pages/auth/guide/GuideSignupStep3";  
import GuideSignupStep4 from "../pages/auth/guide/GuideSignupStep4";  

import HotelDashboard from "../pages/Hotels/dashboard/HotelDashboard";
import GuideDashboard from "../pages/Guides/GuideDashboard";  

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
        <Route path="/transport/vehicles/:type" element={<VehicleListPage />} />
        <Route path="/transport/booking/:id" element={<VehicleDetailsPage />} />
        <Route path="/transport/booking-success/:id" element={<BookingSuccessPage />} />
        
        <Route path="/destinations/:category" element={<DestinationCategoryPage />} />
        <Route path="/destinations/:category/:id" element={<DestinationDetailsPage />} />

        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Route>

      <Route path="/signin" element={<LoginPage />} />

      <Route path="/signup" element={<SignupTypePage />} />

      <Route path="/signup/traveller" element={<TravellerSignupStep1 />} />
      <Route path="/signup/traveller/personal" element={<TravellerSignupStep2 />} />
      <Route path="/signup/traveller/photo" element={<TravellerSignupStep3 />} />
      
      <Route path="/signup/hotel" element={<HotelSignupStep1 />} />
      <Route path="/signup/hotel/details" element={<HotelSignupStep2 />} /> 
      <Route path="/signup/hotel/facilities" element={<HotelSignupStep3 />} />
      <Route path="/signup/hotel/verification" element={<HotelSignupStep4 />} />

      <Route path="/signup/vehicle" element={<VehicleSignupStep1 />} />
      <Route path="/signup/vehicle/details" element={<VehicleSignupStep2 />} />
      <Route path="/signup/vehicle/services" element={<VehicleSignupStep3 />} />  
      <Route path="/signup/vehicle/verification" element={<VehicleSignupStep4 />} />

      <Route path="/signup/guide" element={<GuideSignupStep1 />} />
      <Route path="/signup/guide/details" element={<GuideSignupStep2 />} />
      <Route path="/signup/guide/services" element={<GuideSignupStep3 />} />
      <Route path="/signup/guide/verification" element={<GuideSignupStep4 />} />  

      <Route path="/admin/*" element={<AdminPage />} />
      
      <Route path="/hotel/dashboard" element={<HotelDashboard />} />
      <Route path="/guide/dashboard" element={<GuideDashboard />} />  

    </Routes>
  );
};

export default AppRoutes;