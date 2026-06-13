import { Link } from "react-router-dom";

const GuideCard = ({ guide }) => {
  return (
    <Link to={`/guide/${guide.id}`}>
      <div className="bg-[#1A2B38] rounded-[18px] overflow-hidden hover:scale-105 duration-300 cursor-pointer">
        <img
          src={guide.image}
          alt={guide.name}
          className="w-full h-[170px] object-cover"
        />
        <div className="p-3">
          <h3 className="text-white text-[15px] font-semibold">
            {guide.name}
          </h3>
          <div className="flex justify-between mt-2">
            <p className="text-[#D9D9D9] text-[13px]">
              {guide.language.split(",")[0]}
            </p>
            <p className="text-[#00C896] text-[13px] font-bold">
              Rs. {guide.price}
            </p>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-white text-xs">{guide.rating}</span>
            <span className="text-gray-400 text-xs">({guide.reviews})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GuideCard;