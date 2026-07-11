import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    if (path === "/guides") {
      return (
        location.pathname === "/guides" ||
        location.pathname.startsWith("/guides/")
      );
    }

    return location.pathname === path;
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full h-[80px] bg-[#2B3A47] hidden lg:flex items-center justify-between px-10 m-0">
        {/* LOGO */}
         <img
            src={logo}
            alt="Tours For Sri Lanka"
            className="h-20 object-contain mb-3"
        />

        {/* MENU ITEMS */}
        <div className="flex items-center gap-10 text-white text-[15px]">
          <Link
            to="/"
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive("/") ? "text-[#00C896] underline" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/hotels"
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive("/hotels") ? "text-[#00C896] underline" : ""
            }`}
          >
            Hotels
          </Link>

          <Link
            to="/transport"
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive("/transport") ? "text-[#00C896] underline" : ""
            }`}
          >
            Transport
          </Link>

          <Link
            to="/tours"
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive("/tours") ? "text-[#00C896] underline" : ""
            }`}
          >
            Tours
          </Link>

          <Link
            to="/guides"
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive("/guides") ? "text-[#00C896] underline" : ""
            }`}
          >
            Guides
          </Link>

          <Link
            to="/about-us"
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive("/about-us") ? "text-[#00C896] underline" : ""
            }`}
          >
            About us
          </Link>

          <Link
            to="/contact-us"
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive("/contact-us") ? "text-[#00C896] underline" : ""
            }`}
          >
            Contact us
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full h-[70px] bg-[#2B3A47] shadow-2xl flex lg:hidden justify-evenly items-center z-50">
        <Link
          to="/"
          className={`flex flex-col justify-center items-center text-xs transition-colors duration-300 ${
            isActive("/") ? "text-[#00C896]" : "text-white hover:text-[#00C896]"
          }`}
        >
          <span>Home</span>
        </Link>

        <Link
          to="/hotels"
          className={`flex flex-col justify-center items-center text-xs transition-colors duration-300 ${
            isActive("/hotels")
              ? "text-[#00C896]"
              : "text-white hover:text-[#00C896]"
          }`}
        >
          <span>Hotels</span>
        </Link>

        <Link
          to="/transport"
          className={`flex flex-col justify-center items-center text-xs transition-colors duration-300 ${
            isActive("/transport")
              ? "text-[#00C896]"
              : "text-white hover:text-[#00C896]"
          }`}
        >
          <span>Transport</span>
        </Link>

        <Link
          to="/tours"
          className={`flex flex-col justify-center items-center text-xs transition-colors duration-300 ${
            isActive("/tours")
              ? "text-[#00C896]"
              : "text-white hover:text-[#00C896]"
          }`}
        >
          <span>Tours</span>
        </Link>

        <Link
          to="/guides"
          className={`flex flex-col justify-center items-center text-xs transition-colors duration-300 ${
            isActive("/guides")
              ? "text-[#00C896]"
              : "text-white hover:text-[#00C896]"
          }`}
        >
          <span>Guides</span>
        </Link>

        <Link
          to="/about-us"
          className={`flex flex-col justify-center items-center text-xs transition-colors duration-300 ${
            isActive("/about-us")
              ? "text-[#00C896]"
              : "text-white hover:text-[#00C896]"
          }`}
        >
          <span>About</span>
        </Link>

        <Link
          to="/contact-us"
          className={`flex flex-col justify-center items-center text-xs transition-colors duration-300 ${
            isActive("/contact-us")
              ? "text-[#00C896]"
              : "text-white hover:text-[#00C896]"
          }`}
        >
          <span>Contact</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;