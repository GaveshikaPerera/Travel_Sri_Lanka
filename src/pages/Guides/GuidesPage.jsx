import { useState } from "react";
import GuidesHeroSection from "../../components/Guides/GuidesHeroSection";
import GuideCard from "../../components/Guides/GuideCard";
import Footer from "../../components/Footer";
import guides from "../../data/guides";

const GuidesPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    language: "",
    rating: "",
    priceRange: ""
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Filter guides based on selected filters
  const filteredGuides = guides.filter(guide => {
    // Location filter
    if (filters.location && guide.location !== filters.location) {
      return false;
    }
    
    // Language filter
    if (filters.language && !guide.languages?.includes(filters.language)) {
      return false;
    }
    
    // Rating filter
    if (filters.rating) {
      const minRating = parseInt(filters.rating);
      if (guide.rating < minRating) {
        return false;
      }
    }
    
    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        // Range filter (e.g., 5000-10000)
        if (guide.pricePerDay < min || guide.pricePerDay > max) {
          return false;
        }
      } else {
        // Min price filter (e.g., 15000+)
        if (guide.pricePerDay < min) {
          return false;
        }
      }
    }
    
    return true;
  });

  return (
    <div className="bg-[#11212D] flex justify-center">
      <div className="w-full min-h-screen bg-[#11212D]">
        
        <GuidesHeroSection onFilterChange={handleFilterChange} />
        
        {/* Guides Grid Section */}
        <section className="px-8 mt-20 mb-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-[24px] font-semibold">
                Popular Guides
              </h2>
              <p className="text-gray-300">
                Found {filteredGuides.length} guides
              </p>
            </div>
            
            {filteredGuides.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-300 text-lg">No guides found matching your criteria.</p>
                <button 
                  onClick={() => setFilters({ location: "", language: "", rating: "", priceRange: "" })}
                  className="mt-4 bg-[#00C896] hover:bg-[#00b383] text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredGuides.map((guide) => (
                  <GuideCard key={guide.id} guide={guide} />
                ))}
              </div>
            )}
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default GuidesPage;