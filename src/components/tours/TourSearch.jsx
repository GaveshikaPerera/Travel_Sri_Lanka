import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaWallet } from "react-icons/fa";

const TourPlanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 -mt-16 relative z-20">
      <div className="bg-[#253745] rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-white mb-8">
          Plan Your Tour
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Start Date */}
          <div>
            <label className="text-gray-300 mb-2 block">
              Start Date
            </label>

            <div className="flex items-center bg-[#11212D] rounded-xl px-4 py-3">
              <FaCalendarAlt className="text-[#00C896] mr-3" />

              <input
                type="date"
                className="bg-transparent w-full outline-none text-white"
              />
            </div>
          </div>

          {/* End Date */}
          <div>
            <label className="text-gray-300 mb-2 block">
              End Date
            </label>

            <div className="flex items-center bg-[#11212D] rounded-xl px-4 py-3">
              <FaCalendarAlt className="text-[#00C896] mr-3" />

              <input
                type="date"
                className="bg-transparent w-full outline-none text-white"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="text-gray-300 mb-2 block">
              Number of Guests
            </label>

            <div className="flex items-center bg-[#11212D] rounded-xl px-4 py-3">
              <FaUsers className="text-[#00C896] mr-3" />

              <select className="bg-transparent w-full outline-none text-white">
                <option className="text-black">1</option>
                <option className="text-black">2</option>
                <option className="text-black">3</option>
                <option className="text-black">4</option>
                <option className="text-black">5+</option>
              </select>
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="text-gray-300 mb-2 block">
              Budget
            </label>

            <div className="flex items-center bg-[#11212D] rounded-xl px-4 py-3">
              <FaWallet className="text-[#00C896] mr-3" />

              <select className="bg-transparent w-full outline-none text-white">
                <option className="text-black">Rs. 50,000</option>
                <option className="text-black">Rs. 100,000</option>
                <option className="text-black">Rs. 150,000</option>
                <option className="text-black">Rs. 200,000+</option>
              </select>
            </div>
          </div>

          {/* Starting Location */}
          <div className="lg:col-span-2">
            <label className="text-gray-300 mb-2 block">
              Starting Location
            </label>

            <div className="flex items-center bg-[#11212D] rounded-xl px-4 py-3">
              <FaMapMarkerAlt className="text-[#00C896] mr-3" />

              <input
                type="text"
                placeholder="Colombo"
                className="bg-transparent w-full outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-[#00C896] hover:bg-[#00b383] transition px-10 py-4 rounded-xl font-semibold text-white text-lg">
            Generate My Tour
          </button>
        </div>

      </div>
    </div>
  );
};

export default TourPlanner;