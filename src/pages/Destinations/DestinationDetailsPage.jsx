import { useParams } from "react-router-dom";

import destinations from "../../data/destinations";

import DestinationGallery from "../../components/destination/DestinationGallery";
import DestinationInfo from "../../components/destination/DestinationInfo";
import ThingsToDo from "../../components/destination/ThingsToDo";
//import NearbyHotels from "../../components/destination/NearbyHotels";
//import NearbyGuides from "../../components/destination/NearbyGuides";

const DestinationDetailsPage = () => {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return (
      <div className="min-h-screen bg-[#11212D] flex items-center justify-center">
        <h1 className="text-white text-4xl">Destination Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#11212D]">

     

      <DestinationGallery destination={destination} />

      <DestinationInfo destination={destination} />

      <ThingsToDo destination={destination} />

      {/* <NearbyHotels destination={destination} /> */}

      {/* <NearbyGuides destination={destination} /> */}

    

    </div>
  );
};

export default DestinationDetailsPage;