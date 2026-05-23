import guide_bg from "../assets/guide_bg.jpg";

const HeroSection = () => {
  return (
    <div className="px-8 mt-5">

      {/* HERO CONTAINER */}
      <div className="relative w-full h-[360px] rounded-[28px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src={guide_bg}
          alt="Guide Background"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* TEXT ON IMAGE */}
        <div className="absolute top-16 left-10 z-10">

          <h1 className="text-white text-[52px] font-bold leading-tight">
            Find your Perfect Tour Guide
          </h1>

          <p className="text-[#D9D9D9] text-[20px] mt-3">
            Explore Sri Lanka with trusted local experts
          </p>

        </div>

        {/* SEARCH BOX */}
        <div className="absolute bottom-[-45px] left-1/2 -translate-x-1/2 z-20">

          <div className="w-[920px] h-[95px] bg-[#4A5C6A]/80 backdrop-blur-md rounded-[24px] flex items-center justify-around border border-[#386C93]">

            {/* ITEM */}
            <div>
              <p className="text-[#00C896] text-[13px]">
                Where to?
              </p>

              <p className="text-white text-[14px]">
                Colombo Sri Lanka
              </p>
            </div>

            {/* ITEM */}
            <div>
              <p className="text-[#00C896] text-[13px]">
                Language?
              </p>

              <p className="text-white text-[14px]">
                English
              </p>
            </div>

            {/* ITEM */}
            <div>
              <p className="text-[#00C896] text-[13px]">
                Ratings
              </p>

              <p className="text-white text-[14px]">
                5 stars
              </p>
            </div>

            {/* ITEM */}
            <div>
              <p className="text-[#00C896] text-[13px]">
                Available Dates
              </p>

              <p className="text-white text-[14px]">
                Monday
              </p>
            </div>

            {/* BUTTON */}
            <button className="bg-[#00C896] hover:bg-[#386C93] duration-300 text-white px-7 py-3 rounded-full text-[14px] font-semibold">
              Search Guides
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HeroSection;