const TourItinerary = ({ itinerary }) => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <h2 className="text-3xl font-bold text-white mb-10">
        Tour Itinerary
      </h2>

      <div className="space-y-6">

        {itinerary.map((day, index) => (

          <div
            key={index}
            className="bg-[#253745] p-6 rounded-xl border-l-4 border-[#00C896]"
          >

            <h3 className="text-xl font-semibold text-[#00C896]">

              Day {index + 1}

            </h3>

            <p className="text-gray-300 mt-3">
              {day}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default TourItinerary;