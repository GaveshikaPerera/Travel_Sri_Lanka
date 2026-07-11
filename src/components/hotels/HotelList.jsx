import HotelCard from "./HotelCard";
import hotels from "../../data/hotels";

const HotelList = () => {
  return (
    <section className="px-8 pb-16 bg-[#11212D]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h2 className="text-3xl font-bold text-white">
              Popular Hotels
            </h2>

            <p className="text-gray-400 mt-2">
              Explore the best hotels in Sri Lanka
            </p>
          </div>

          <button className="border border-[#00C896] text-[#00C896] px-6 py-2 rounded-full hover:bg-[#00C896] hover:text-white duration-300">
            View All
          </button>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default HotelList;