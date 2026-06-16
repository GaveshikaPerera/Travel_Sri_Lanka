import { useState, useEffect } from "react";
import guide_bg from "../assets/guide_bg.jpg";
import {
  FaMapMarkerAlt,
  FaLanguage,
  FaStar,
  FaMoneyBillWave,
  FaSearch,
} from "react-icons/fa";

const GuidesHeroSection = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Notify parent component when filters change
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        location,
        language,
        rating,
        priceRange,
      });
    }
  }, [location, language, rating, priceRange]);

  const handleSearch = () => {
    // The filters are already applied via useEffect
    // You can add additional search logic here if needed
    console.log("Searching with filters:", {
      location,
      language,
      rating,
      priceRange,
    });
  };

  const handleClearFilters = () => {
    setLocation("");
    setLanguage("");
    setRating("");
    setPriceRange("");
  };

  return (
    <section className="px-8 mt-6 pb-24">
      <div className="relative h-[430px] rounded-[30px] overflow-visible">
        {/* Background */}
        <div className="absolute inset-0 rounded-[30px] overflow-hidden">
          <img
            src={guide_bg}
            alt="Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        {/* Text */}
        <div className="absolute left-12 top-16 z-10">
          <h1 className="text-white text-6xl font-bold leading-tight">
            Find your Perfect
            <br />
            Tour Guide
          </h1>
          <p className="text-gray-300 text-lg mt-5">
            Explore Sri Lanka with trusted local experts
          </p>
        </div>

        {/* Search Box */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full max-w-[1100px] px-5 z-20">
          <div className="bg-[#455766]/80 backdrop-blur-xl rounded-[28px] border border-white/10 shadow-2xl h-[100px] flex items-center px-8">
           
            <div className="flex items-center gap-3 flex-1">
              <FaMapMarkerAlt className="text-[#00C896] text-3xl" />
              <div className="w-full">
                <label className="text-[185x] text-gray-300">Where to?</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-white outline-none mt-1"
                >
                  <option className="text-black" value="">All Locations</option>
                  <option className="text-black" value="Colombo">Colombo</option>
                  <option className="text-black" value="Matara">Matara</option>
                  <option className="text-black" value="Kandy">Kandy</option>
                  <option className="text-black" value="Galle">Galle</option>
                  <option className="text-black" value="Ella">Ella</option>
                  <option className="text-black" value="Sigiriya">Sigiriya</option>
                  <option className="text-black" value="Nuwara Eliya">Nuwara Eliya</option>
                  <option className="text-black" value="Anuradhapura">Anuradhapura</option>
                  <option className="text-black" value="Polonnaruwa">Polonnaruwa</option>
                  <option className="text-black" value="Jaffna">Jaffna</option>
                </select>
              </div>
            </div>

            <div className="w-px h-12 bg-white/20 mx-4"></div>

            
            <div className="flex items-center gap-3 flex-1">
              <FaLanguage className="text-[#00C896] text-4xl" />
              <div className="w-full">
                <label className="text-[15px] text-gray-300">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-transparent text-white outline-none mt-1"
                >
                  <option className="text-black" value="">All Languages</option>
                  <option className="text-black" value="English">English</option>
                  <option className="text-black" value="Sinhala">Sinhala</option>
                  <option className="text-black" value="Tamil">Tamil</option>
                  <option className="text-black" value="French">French</option>
                  <option className="text-black" value="German">German</option>
                  <option className="text-black" value="Japanese">Japanese</option>
                  <option className="text-black" value="Russian">Russian</option>
                  <option className="text-black" value="Hindi">Hindi</option>
                </select>
              </div>
            </div>

            <div className="w-px h-12 bg-white/20 mx-4"></div>

            {/* Rating */}
            <div className="flex items-center gap-3 flex-1">
              <FaStar className="text-[#00C896] text-2xl" />
              <div className="w-full">
                <label className="text=[15px] text-gray-300">Rating</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full bg-transparent text-white outline-none mt-1"
                >
                  <option className="text-black" value="">Any Rating</option>
                  <option className="text-black" value="5">⭐⭐⭐⭐⭐ (5.0)</option>
                  <option className="text-black" value="4">⭐⭐⭐⭐+ (4.0+)</option>
                  <option className="text-black" value="3">⭐⭐⭐+ (3.0+)</option>
                  <option className="text-black" value="2">⭐⭐+ (2.0+)</option>
                </select>
              </div>
            </div>

            <div className="w-px h-12 bg-white/20 mx-4"></div>

            {/* Price Range */}
            <div className="flex items-center gap-3 flex-1">
              <FaMoneyBillWave className="text-[#00C896] text-2xl" />
              <div className="w-full">
                <label className="text=[15px] text-gray-300">Price Range (per day)</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full bg-transparent text-white outline-none mt-1"
                >
                  <option className="text-black" value="">Any Price</option>
                  <option className="text-black" value="0-5000">Under Rs. 5,000</option>
                  <option className="text-black" value="5000-7500">Rs. 5,000 - 7,500</option>
                  <option className="text-black" value="7500-10000">Rs. 7,500 - 10,000</option>
                  <option className="text-black" value="10000-15000">Rs. 10,000 - 15,000</option>
                  <option className="text-black" value="15000">Rs. 15,000+</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="ml-6 bg-[#00C896] hover:bg-[#00b383] duration-300 text-white px-8 py-4 rounded-full flex items-center gap-2 font-semibold"
            >
              <FaSearch />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidesHeroSection;