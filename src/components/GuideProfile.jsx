import { Link } from "react-router-dom";
import {
  Star,
  Calendar,
  Languages,
  MapPin,
  DollarSign,
} from "lucide-react";

export default function GuideProfile({ guide }) {
  if (!guide) return null;

  // Handle languages (array or string)
  const languages = guide.languages 
    ? (Array.isArray(guide.languages) ? guide.languages.join(', ') : guide.languages)
    : "English";

  return (
    <div className="bg-[#314252] rounded-3xl p-6 text-white">
      <div className="flex justify-center">
        <img
          src={guide.image}
          alt={guide.name}
          className="w-48 h-48 rounded-full object-cover border-4 border-[#00C896]"
        />
      </div>

      <h2 className="text-4xl font-bold mt-6 text-center">
        {guide.name}
      </h2>

      <p className="text-center text-gray-400">
        Professional Tour Guide
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <Star size={18} className="text-yellow-400" />
          <span>
            {guide.rating} ({guide.reviews || 0} Reviews)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Calendar size={18} className="text-[#00C896]" />
          <span>{guide.experience || "Experienced Guide"}</span>
        </div>

        <div className="flex items-center gap-3">
          <Languages size={18} className="text-[#00C896]" />
          <span>{languages}</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-[#00C896]" />
          <span>{guide.location}</span>
        </div>

        <div className="flex items-center gap-3">
          <DollarSign size={18} className="text-[#00C896]" />
          <span>Rs. {guide.pricePerDay?.toLocaleString()} / day</span>
        </div>
      </div>

      <h3 className="mt-6 font-bold text-xl">
        About Me
      </h3>

      <p className="text-gray-300 mt-3 leading-7">
        {guide.about || `Hi! I'm ${guide.name}, your professional tour guide in Sri Lanka. I specialize in ${guide.specialty || "various tours"} and I'm passionate about showing visitors the beauty of my country.`}
      </p>

      <Link to={`/guides/${guide.id}/message`}>
        <button className="w-full bg-[#00C896] mt-8 py-4 rounded-full font-bold text-xl hover:bg-[#00b786] duration-300">
          Message Guide
        </button>
      </Link>
    </div>
  );
}