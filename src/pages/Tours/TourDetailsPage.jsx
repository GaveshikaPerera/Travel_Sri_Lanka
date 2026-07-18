import { useParams } from "react-router-dom";

import tours from "../../data/tours";

import TourDetailsHeroSection from "../../components/tours/TourDetailsHeroSection";
import TourItinerary from "../../components/tours/TourItinerary";
import IncludedSection from "../../components/tours/IncludedSection";
import RelatedHotels from "../../components/tours/RelatedHotels";
import RelatedGuides from "../../components/tours/RelatedGuides";

const TourDetailsPage = () => {

  const { id } = useParams();

  const tour = tours.find((t) => t.id === Number(id));

  if (!tour) {

    return (
      <div className="min-h-screen flex justify-center items-center text-3xl">
        Tour Not Found
      </div>
    );

  }

  return (

    <div className="bg-[#11212D] min-h-screen">

     

      <TourDetailsHeroSection tour={tour} />

      <section className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-3xl font-bold text-white mb-5">
          About This Tour
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          {tour.description}
        </p>

      </section>

      <TourItinerary itinerary={tour.itinerary} />

      <IncludedSection includes={tour.includes} />

      <RelatedHotels hotelIds={tour.hotelIds} />

      <RelatedGuides guideIds={tour.guideIds} />

    

    </div>

  );
};

export default TourDetailsPage;