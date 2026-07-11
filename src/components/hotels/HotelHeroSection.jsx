import { useState, useEffect } from "react";
import hotel_bg from "../../assets/hotels/hotel_bg.jpg";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
} from "react-icons/fa";

const HotelHeroSection = ({ onFilterChange }) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        destination,
        checkIn,
        checkOut,
        guests,
      });
    }
  }, [destination, checkIn, checkOut, guests, onFilterChange]);

  const handleSearch = () => {
    console.log({
      destination,
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <section className="px-8 pt-6 pb-24 bg-[#11212D]">
      <div className="relative h-[430px] rounded-[30px] overflow-visible">
        {/* Background */}
        <div className="absolute inset-0 rounded-[30px] overflow-hidden">
          <img
            src={hotel_bg}
            alt="Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        {/* Hero Text */}
        <div className="absolute left-12 top-16 z-10">
          <h1 className="text-white text-6xl font-bold leading-tight">
            Find your Perfect
            <br />
            Hotel Stay
          </h1>

          <p className="text-gray-300 text-lg mt-5">
            Discover and book amazing hotels across Sri Lanka.
          </p>
        </div>

        {/* Search Bar */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full max-w-[1100px] px-5 z-20">
          <div className="bg-[#455766]/80 backdrop-blur-xl rounded-[28px] border border-white/10 shadow-2xl h-[100px] flex items-center px-8">

            {/* Destination */}
            <div className="flex items-center gap-3 flex-1">
              <FaMapMarkerAlt className="text-[#00C896] text-3xl" />

              <div className="w-full">
                <label className="text-sm text-gray-300">
                  Destination
                </label>

                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-white outline-none mt-1"
                >
                  <option className="text-black" value="">
                    All Destinations
                  </option>

                  <option className="text-black">Colombo</option>
                  <option className="text-black">Kandy</option>
                  <option className="text-black">Ella</option>
                  <option className="text-black">Galle</option>
                  <option className="text-black">Sigiriya</option>
                  <option className="text-black">Nuwara Eliya</option>
                </select>
              </div>
            </div>

            <div className="w-px h-12 bg-white/20 mx-4"></div>

            {/* Check In */}
            <div className="flex items-center gap-3 flex-1">
              <FaCalendarAlt className="text-[#00C896] text-2xl" />

              <div className="w-full">
                <label className="text-sm text-gray-300">
                  Check In
                </label>

                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-white outline-none mt-1"
                />
              </div>
            </div>

            <div className="w-px h-12 bg-white/20 mx-4"></div>

            {/* Check Out */}
            <div className="flex items-center gap-3 flex-1">
              <FaCalendarAlt className="text-[#00C896] text-2xl" />

              <div className="w-full">
                <label className="text-sm text-gray-300">
                  Check Out
                </label>

                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-white outline-none mt-1"
                />
              </div>
            </div>

            <div className="w-px h-12 bg-white/20 mx-4"></div>

            {/* Guests */}
            <div className="flex items-center gap-3 flex-1">
              <FaUsers className="text-[#00C896] text-2xl" />

              <div className="w-full">
                <label className="text-sm text-gray-300">
                  Guests
                </label>

                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-white outline-none mt-1"
                />
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

export default HotelHeroSection;