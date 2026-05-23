import guide_bg from "../assets/guide_bg.jpg";

const HeroSection = () => {
  return (
    <div className="px-8 mt-5 pb-14"> {/* Added padding-bottom to create space for the search box */}
      {/* HERO CONTAINER */}
      <div className="relative w-full h-[360px] rounded-[28px] overflow-visible"> {/* Changed overflow-hidden to overflow-visible */}
        
        {/* BACKGROUND IMAGE CONTAINER - separate div for clipping the image */}
        <div className="absolute inset-0 rounded-[28px] overflow-hidden">
          <img
            src={guide_bg}
            alt="Guide Background"
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

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
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 z-20 w-full max-w-[920px] px-4">
          <div className="w-full h-[95px] bg-[#4A5C6A]/80 backdrop-blur-md rounded-[24px] flex items-center justify-around border border-[#386C93] px-4">
            <div>
              <p className="text-[#00C896] text-[13px]">📍Where to?</p>
              <p className="text-white text-[14px]">Colombo Sri Lanka</p>
            </div>
            <div>
              <p className="text-[#00C896] text-[13px]">Language?</p>
              <p className="text-white text-[14px]">English</p>
            </div>
            <div>
              <p className="text-[#00C896] text-[13px]">Ratings</p>
              <p className="text-white text-[14px]">5 stars</p>
            </div>
            <div>
              <p className="text-[#00C896] text-[13px]">Available Dates</p>
              <p className="text-white text-[14px]">Monday</p>
            </div>
            <button className="bg-[#00C896] hover:bg-[#386C93] duration-300 text-white px-7 py-3 rounded-full text-[14px] font-semibold whitespace-nowrap">
              Search Guides
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;