import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const TourDetailsHeroSection = ({ tour }) => {
  return (
    <section className="relative h-[500px]">

      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60 flex items-end">

        <div className="max-w-7xl mx-auto px-8 pb-12 text-white w-full">

          <div className="flex items-center gap-3 mb-4">

            <span className="flex items-center gap-2 bg-[#00C896] px-4 py-2 rounded-full">
              <FaStar />
              {tour.rating}
            </span>

            <span className="flex items-center gap-2 bg-[#253745] px-4 py-2 rounded-full">
              <FaClock />
              {tour.duration}
            </span>

          </div>

          <h1 className="text-5xl font-bold">
            {tour.title}
          </h1>

          <p className="flex items-center gap-3 mt-4 text-xl">

            <FaMapMarkerAlt className="text-[#00C896]" />

            {tour.location}

          </p>

          <p className="text-3xl text-[#00C896] font-bold mt-6">
            From Rs. {tour.price.toLocaleString()}
          </p>

        </div>

      </div>

    </section>
  );
};

export default TourDetailsHeroSection;