import hotels from "../../data/hotels";
import { Link } from "react-router-dom";

const RelatedHotels = ({ hotelIds }) => {

  const related = hotels.filter((hotel) =>
    hotelIds.includes(hotel.id)
  );

  return (
    <section className="max-w-7xl mx-auto px-8 pb-16">

      <h2 className="text-3xl font-bold text-white mb-8">
        Recommended Hotels
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {related.map((hotel) => (

          <div
            key={hotel.id}
            className="bg-[#253745] rounded-xl overflow-hidden"
          >

            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-white text-xl font-semibold">
                {hotel.name}
              </h3>

              <p className="text-gray-400 mt-2">
                {hotel.location}
              </p>

              <Link
                to={`/hotels/${hotel.id}`}
                className="inline-block mt-5 bg-[#00C896] px-5 py-2 rounded-lg text-white"
              >
                View Hotel
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default RelatedHotels;