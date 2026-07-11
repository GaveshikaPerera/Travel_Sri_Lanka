import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactBg from "../assets/contact_bg.jpg";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactUsPage() {
  const faqs = [
    "How can I book a tour?",
    "Is airport pickup available?",
    "Are your tour guides licensed?",
    "Can I customize my tour package?",
    "What is your cancellation policy?",
    "How do I contact support?",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#02131E] via-[#0D2434] to-[#213847]">
      

      {/* HERO SECTION */}
      <section className="px-5 md:px-10 pt-6">
        <div
          className="h-[430px] rounded-[30px] bg-cover bg-center relative overflow-hidden "
          style={{
            backgroundImage: `url(${contactBg})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute left-8 top-16 text-white max-w-2xl">
            <h1 className="text-3xl md:text-6xl font-bold">
              We are here to help you
            
            </h1>

            <p className="mt-3 text-base sm:text-lg md:text-2xl">
              Plan your perfect journey
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-3 sm:px-5 md:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="xl:col-span-4">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Get In Touch
            </h2>

            <p className="text-gray-400 mt-2 mb-6">
              Reach out to us through any of these channels.
            </p>

            <div className="space-y-4">

              <div className="bg-[#314252]/80 rounded-2xl p-4 flex items-center gap-4">
                <FaPhoneAlt className="text-[#00C896] text-lg" />

                <div>
                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-300 text-sm">
                    +94 77 847 7903
                  </p>
                </div>
              </div>

              <div className="bg-[#314252]/80 rounded-2xl p-4 flex items-center gap-4">
                <FaEnvelope className="text-[#00C896] text-lg" />

                <div>
                  <h4 className="text-white font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-300 text-sm break-all">
                    info@sritoursforlanka.com
                  </p>
                </div>
              </div>

              <div className="bg-[#314252]/80 rounded-2xl p-4 flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#00C896] text-lg" />

                <div>
                  <h4 className="text-white font-semibold">
                    Address
                  </h4>

                  <p className="text-gray-300 text-sm">
                    No 608/1, Nabata Aluthgama,
                    Dambulla Road, Melsiripura
                  </p>
                </div>
              </div>

              <div className="bg-[#314252]/80 rounded-2xl p-4 flex items-center gap-4">
                <FaClock className="text-[#00C896] text-lg" />

                <div>
                  <h4 className="text-white font-semibold">
                    Business Hours
                  </h4>

                  <p className="text-gray-300 text-sm">
                    Mon - Sun : 8.00 AM - 10.00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="xl:col-span-8">
            <div className="bg-[#314252]/80 rounded-3xl p-5 md:p-8">

              <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
                Send Us a Message
              </h2>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#455766] rounded-full p-4 text-white outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#455766] rounded-full p-4 text-white outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-[#455766] rounded-full p-4 text-white outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-[#455766] rounded-full p-4 text-white outline-none"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="md:col-span-2 bg-[#455766] rounded-3xl p-4 text-white outline-none resize-none"
                />

                <button
                  type="submit"
                  className="md:col-span-2 bg-[#00C896] hover:bg-[#00b383] text-white rounded-full py-4 font-bold text-lg transition-all duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* OFFICE + MAP */}
      <section className="px-3 sm:px-5 md:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-[#314252]/80 rounded-3xl p-6 md:p-8">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Visit our Office
            </h2>

            <p className="text-gray-300 mt-4 text-base md:text-lg leading-8">
              You are welcome to visit our office for travel
              consultations, tour bookings and personalized
              assistance.
            </p>

            <div className="flex gap-3 mt-6">
              <FaMapMarkerAlt className="text-[#00C896] mt-1" />

              <p className="text-white">
                No 608/1, Nabata Aluthgama,
                Dambulla Road, Melsiripura,
                Sri Lanka
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <iframe
              title="location"
              className="w-full h-[300px] md:h-[350px]"
              src="https://maps.google.com/maps?q=Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="px-3 sm:px-5 md:px-8 pb-24 lg:pb-10">

        <div className="text-center mb-8">
          <h2 className="text-[#00C896] text-3xl md:text-4xl font-bold">
            FAQ
          </h2>

          <p className="text-gray-300 mt-2">
            Find quick answers to common questions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#314252]/80 rounded-full p-4 text-center text-white hover:bg-[#3b4f60] duration-300 cursor-pointer"
            >
              {faq}
            </div>
          ))}

        </div>

      </section>

      
    </div>
  );
}