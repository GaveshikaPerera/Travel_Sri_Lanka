import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import tripadvisor from "../assets/tripadvisor.jpg";
import badge1 from "../assets/badge1.png";
import badge2 from "../assets/badge2.png";
import badge3 from "../assets/badge3.png";

export default function Footer() {
  return (
    <footer className="bg-[#253745] text-white">
      <div className="max-w-7xl mx-auto px-8 py-4">

        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* LEFT SECTION */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Explore */}
            <div>
              <h3 className="text-2xl font-medium mb-3">
                Explore
              </h3>

              <ul className="space-y-1 text-s text-gray-300">
                {[
                  "Home",
                  "Hotels",
                  "Transport",
                  "Tours",
                  "Guides",
                  "About us",
                  "Contact us",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 hover:text-[#00C896] cursor-pointer transition"
                  >
                    <FaChevronRight className="text-[8px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-medium mb-3">
                Contact Us
              </h3>

              <div className="space-y-2 text-s text-gray-300">

                <div className="flex gap-2">
                  <FaEnvelope className="text-[#00C896] mt-1" />
                  <div>
                    <p>info@toursforsrilanka.com</p>
                    <p>toursforsrilanka@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <FaPhoneAlt className="text-[#00C896] mt-1" />
                  <div>
                    <p>+94 70 387 12 10</p>
                    <p>+94 71 93 75 121</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <FaWhatsapp className="text-[#00C896] mt-1" />
                  <p>+94 77 847 7903</p>
                </div>

                <div className="flex gap-2">
                  <FaMapMarkerAlt className="text-[#00C896] mt-1" />

                  <div className="leading-5">
                    Tours for Sri Lanka Travel Agency,
                    <br />
                    No 608/1, Nabata Aluthgama,Dambulla Road,
                    <br />
                    Melsiripura, Sri Lanka.
                    <br />
                    Postal Code : 60540
                    <br />
                    SLTDA Reg No :
                    SLTDA/SQA/TA/2011
                    <br />
                    Civil Aviation License Number :
                    A1478
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* CENTER SECTION */}
          <div className="flex flex-col items-center justify-center  border-r border-gray-500 px-15  ">

            <img
              src={tripadvisor}
              alt="Tripadvisor"
              className="w-60 object-contain mb-3"
            />

            <div className="flex items-center gap-3">

              <img
                src={badge1}
                alt=""
                className="h-20 object-contain"
              />

              <img
                src={badge2}
                alt=""
                className="h-20 object-contain"
              />

              <img
                src={badge3}
                alt=""
                className="h-20 object-contain"
              />

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col items-center justify-center">

            <img
              src={logo}
              alt="Tours For Sri Lanka"
              className="h-20 object-contain mb-3"
            />

            <div className="flex gap-3">

              <a href="#">
                <FaFacebook className="text-[30px] text-[#1877F2] hover:scale-110 duration-300" />
              </a>

              <a href="#">
                <FaInstagram className="text-[30px] text-pink-500 hover:scale-110 duration-300" />
              </a>

              <a href="#">
                <FaWhatsapp className="text-[30px] text-green-500 hover:scale-110 duration-300" />
              </a>

              <a href="#">
                <FaTiktok className="text-[28px] text-white hover:scale-110 duration-300" />
              </a>

              <a href="#">
                <FaYoutube className="text-[30px] text-red-600 hover:scale-110 duration-300" />
              </a>

            </div>

            <p className="text-s text-gray-300 mt-10 text-center">
              © Copyright 2026 Tours For Sri Lanka |
              Designed by University of Ruhuna
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}