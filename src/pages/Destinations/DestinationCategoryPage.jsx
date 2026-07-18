import { useParams } from "react-router-dom";

import DestinationGrid from "../../components/destination/DestinationGrid";

const titles = {
  beaches: "Relaxing Beaches",
  ancient: "Ancient Cities",
  mountains: "Mountain Escapes",
  cities: "City Life",
  villages: "Village Experience",
  wildlife: "Wildlife Safari",
};

const DestinationCategoryPage = () => {

  const { category } = useParams();

  return (
    <div className="min-h-screen bg-[#11212D]">

    

      <section className="pt-28 text-center">

        <h1 className="text-white text-5xl font-bold">

          {titles[category]}

        </h1>

        <p className="text-gray-400 mt-5 text-lg">

          Explore beautiful destinations across Sri Lanka.

        </p>

      </section>

      <DestinationGrid />

     

    </div>
  );
};

export default DestinationCategoryPage;