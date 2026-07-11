import tourBg from "../../assets/tours/tour_bg.jpg";

const TourHeroSection = () => {
  return (
    <section className="px-8 mt-6 pb-24">
      <div className="relative h-[430px] rounded-[30px] overflow-visible">

        {/* Background */}
        <div className="absolute inset-0 rounded-[30px] overflow-hidden">
          <img
            src={tourBg}
            alt="Tour Hero"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text */}
        <div className="absolute left-12 top-16 z-10 max-w-2xl">

          <h1 className="text-white text-6xl font-bold leading-tight">
            Plan Your
            <br />
            Sri Lanka Adventure
          </h1>

          <p className="text-gray-300 text-lg mt-6 leading-8">
            Create your own personalized travel plan by selecting
            destinations, dates and preferences. Discover the best
            attractions and enjoy an unforgettable journey.
          </p>

        </div>

      </div>
    </section>
  );
};

export default TourHeroSection;