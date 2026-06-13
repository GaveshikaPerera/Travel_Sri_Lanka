import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GuideCard from "../components/GuideCard";
import Footer from "../components/Footer";
import guides from "../data/guides";

const GuidesPage = () => {
  return (
    <div className="bg-[#11212D] flex justify-center">
      <div className="w-full min-h-screen bg-[#11212D]">
        <Navbar />
        <HeroSection />
        
        {/* Guides */}
        <section className="px-8 mt-20 mb-16">
          <h2 className="text-white text-[24px] font-semibold mb-6">
            Popular Guides
          </h2>
          <div className="grid grid-cols-4 gap-5">
            {guides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default GuidesPage;