import { useParams } from "react-router-dom";
import hotels from "../../data/hotels";

import HotelGallery from "../../components/hotels/HotelGallery";
import HotelInfo from "../../components/hotels/HotelInfo";
import Facilities from "../../components/hotels/Facilities";
import RoomList from "../../components/hotels/RoomList";
import ReviewSection from "../../components/hotels/ReviewSection";

const HotelDetailsPage = () => {
  const { id } = useParams();

  const hotel = hotels.find((h) => h.id === Number(id));

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#11212D] text-white">
        <h1 className="text-3xl font-bold">Hotel Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#11212D] min-h-screen py-8">

      <div className="max-w-7xl mx-auto px-6 space-y-8">

        <HotelGallery gallery={hotel.gallery} />

        <HotelInfo hotel={hotel} />

        <Facilities amenities={hotel.amenities} />

        <RoomList rooms={hotel.rooms} />

        <ReviewSection reviews={hotel.reviewsData} />

      </div>

    </div>
  );
};

export default HotelDetailsPage;