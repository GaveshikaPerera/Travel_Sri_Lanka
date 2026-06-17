import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const GuideCard = ({ guide }) => {
  // Safety check - if guide is undefined or null, don't render
  if (!guide) {
    return null;
  }

  // Safely access properties with fallback values
  const name = guide.name || "Tour Guide";
  const rating = guide.rating || 0;
  const location = guide.location || "Sri Lanka";
  const pricePerDay = guide.pricePerDay || 0;
  const image = guide.image || "/fallback-image.jpg"; // Add a fallback image
  const id = guide.id;

  return (
    <Link to={`/guides/${id}`} className="block">
      <div className="bg-[#1a2a36] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 h-full">
        {/* Image */}
        <div className="h-56 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-4">
          {/* Name and Rating */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white font-semibold text-lg">{name}</h3>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-white text-sm">{rating}</span>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-center gap-1 text-gray-300 text-sm mb-2">
            <FaMapMarkerAlt className="text-[#00C896] text-xs" />
            <span>{location}</span>
          </div>
          
          {/* Languages - safely handle both array and string */}
          <div className="text-gray-300 text-xs mb-2">
            {guide.languages && (
              Array.isArray(guide.languages) 
                ? guide.languages.join(', ') 
                : guide.languages
            )}
          </div>
          
          {/* Price - with safe toLocaleString */}
          <div className="text-[#00C896] font-semibold mt-2">
            Rs. {pricePerDay.toLocaleString()}
            <span className="text-gray-400 text-xs font-normal"> / day</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GuideCard;