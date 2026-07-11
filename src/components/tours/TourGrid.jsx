import tours from "../../data/tours";
import TourCard from "./TourCard";

const TourGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <div className="text-center">

        <h2 className="text-4xl font-bold text-white">
          Popular Tour Packages
        </h2>

        <p className="text-gray-400 mt-4">
          Choose one of our carefully planned Sri Lanka tour packages.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
          />
        ))}

      </div>

    </section>
  );
};

export default TourGrid;