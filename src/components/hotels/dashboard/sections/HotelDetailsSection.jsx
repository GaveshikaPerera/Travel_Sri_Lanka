import { FaEdit, FaMapMarkerAlt, FaHotel, FaStar } from "react-icons/fa";

export default function HotelDetailsSection() {
  const facilities = [
    "Free Wi-Fi",
    "Swimming Pool",
    "Restaurant",
    "Parking",
    "Air Conditioning",
    "Room Service",
    "24 Hour Reception",
    "Airport Shuttle",
  ];

  return (
    <section
      id="hotel-details"
      className="bg-[#253745] rounded-2xl border border-[#2F4156] p-8 mb-10"
    >
      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Hotel Details
          </h2>

          <p className="text-gray-400 mt-1">
            Manage your hotel information
          </p>

        </div>

        <button className="flex items-center gap-2 bg-[#00C896] hover:bg-[#00b383] px-5 py-3 rounded-xl text-white transition">

          <FaEdit />

          Edit Hotel

        </button>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Hotel Image */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
            alt="Hotel"
            className="rounded-2xl h-72 w-full object-cover"
          />

        </div>

        {/* Hotel Info */}

        <div className="lg:col-span-2">

          <div className="grid md:grid-cols-2 gap-6">

            <Info title="Hotel Name" value="Ocean Paradise Hotel" />

            <Info title="Hotel Type" value="Luxury Hotel" />

            <Info
              title="Location"
              value="Kandy, Sri Lanka"
              icon={<FaMapMarkerAlt />}
            />

            <Info
              title="Star Rating"
              value="★★★★★"
              icon={<FaStar />}
            />

            <Info
              title="Check-In"
              value="2.00 PM"
            />

            <Info
              title="Check-Out"
              value="11.00 AM"
            />

          </div>

          {/* Description */}

          <div className="mt-8">

            <h3 className="text-lg text-white font-semibold mb-3">
              Description
            </h3>

            <p className="text-gray-300 leading-7">
              Ocean Paradise Hotel offers comfortable accommodation
              with modern facilities, spacious rooms, a swimming
              pool, restaurant and breathtaking mountain views.
            </p>

          </div>

          {/* Facilities */}

          <div className="mt-8">

            <h3 className="text-lg font-semibold text-white mb-4">
              Facilities
            </h3>

            <div className="flex flex-wrap gap-3">

              {facilities.map((facility) => (

                <span
                  key={facility}
                  className="bg-[#11212D] border border-[#00C896] text-[#00C896] px-4 py-2 rounded-full text-sm"
                >
                  {facility}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function Info({ title, value, icon }) {
  return (
    <div className="bg-[#2F4156] rounded-xl p-5">

      <div className="flex items-center gap-2 mb-2">

        {icon && <span className="text-[#00C896]">{icon}</span>}

        <h4 className="text-gray-400 text-sm">
          {title}
        </h4>

      </div>

      <p className="text-white text-lg font-semibold">
        {value}
      </p>

    </div>
  );
}