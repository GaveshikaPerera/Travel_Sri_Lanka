import { Link } from "react-router-dom";
import {
  Star,
  Calendar,
  Languages,
  MapPin,
} from "lucide-react";

export default function GuideProfile({ guide }) {
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
          <Star size={18} />
          <span>
            {guide.rating} ({guide.reviews} Reviews)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Calendar size={18} />
          <span>{guide.experience}</span>
        </div>

        <div className="flex items-center gap-3">
          <Languages size={18} />
          <span>{guide.language}</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={18} />
          <span>{guide.location}</span>
        </div>

      </div>

      <h3 className="mt-6 font-bold text-xl">
        About Me
      </h3>

      <p className="text-gray-300 mt-3 leading-7">
        {guide.about}
      </p>

      <Link to={`/guide/${guide.id}/message`}>
        <button className="w-full bg-[#00C896] mt-8 py-4 rounded-full font-bold text-xl hover:bg-[#00b786] duration-300">
          Message Guide
        </button>
      </Link>

    </div>
  );
}