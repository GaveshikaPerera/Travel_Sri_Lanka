import TourHeroSection from "../../components/tours/TourHeroSection";
import TourSearch from "../../components/tours/TourSearch";
import TourGrid from "../../components/tours/TourGrid";

const ToursPage = () => {
  return (
    <div className="min-h-screen bg-[#11212D]">

     

      <TourHeroSection />

      <TourSearch />

      <TourGrid />

     

    </div>
  );
};

export default ToursPage;