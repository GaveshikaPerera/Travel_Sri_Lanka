import ContactHeroSection from "../components/contact/ContactHeroSection";
import ContactInfo from "../components/contact/ContactInfo";
import OfficeLocation from "../components/contact/OfficeLocation";
import FAQSection from "../components/contact/FAQSection";

export default function ContactUsPage() {
  return (
    <div className="bg-[#11212D] min-h-screen">
   

      <ContactHeroSection />

      <ContactInfo />

      <OfficeLocation />

      <FAQSection />

     
    </div>
  );
}