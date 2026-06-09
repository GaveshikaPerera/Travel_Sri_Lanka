import guide1 from "../assets/guide1.jpg";
import { Link } from "react-router-dom";

export default function GuideProfile() {
  return (
    <div className="bg-[#314252] rounded-3xl p-6">

      <div className="flex justify-center">
        <img
          src={guide1}
          alt=""
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>

      <h2 className="text-5xl font-bold mt-6">
        Praveen Mendis
      </h2>

      <p className="text-gray-400">
        Professional Tour Guide
      </p>

      <div className="mt-5 space-y-2">
        <p>⭐ 5.0 (128 Reviews)</p>
        <p>📅 Since 2015</p>
        <p>🌎 English, Tamil, French</p>
        <p>📍 Colombo, Kandy, Galle</p>
      </div>

      <h3 className="mt-5 font-bold text-xl">
        About Me
      </h3>

      <p className="text-gray-300 mt-3 leading-7">
        Started in 2004, my company first developed
        on the British and Netherlands.
        Experienced chauffeur guide licensed by
        Sri Lanka Tourism Board.
      </p>

      <Link to="/message">
        <button className="w-full bg-[#00C896] mt-8 py-4 rounded-full font-bold text-xl">
          Message Guide
        </button>
      </Link>

    </div>
  );
}