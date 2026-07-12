// const Navbar = () => {
//   return (
//     <nav className="w-full h-[80px] bg-[#2B3A47] flex items-center justify-between px-10 m-0"> {/* Added m-0 */}
//       {/* LOGO */}
//       <div className="text-white">
//         <h1 className="text-[28px] font-bold leading-none">
//           SRI
//         </h1>

//         <p className="text-[11px] tracking-[2px] text-[#D9D9D9]">
//           TOURS FOR LANKA
//         </p>
//       </div>

//       {/* MENU ITEMS */}
//       <div className="flex items-center gap-10 text-white text-[15px]">
//         <a href="#" className="hover:text-[#00C896]">
//           Home
//         </a>

//         <a href="#" className="hover:text-[#00C896]">
//           Hotels
//         </a>

//         <a href="#" className="hover:text-[#00C896]">
//           Transport
//         </a>

//         <a href="#" className="hover:text-[#00C896]">
//           Tours
//         </a>

//         <a
//           href="#"
//           className="text-[#00C896] border-b-2 border-[#00C896] pb-1"
//         >
//           Guides
//         </a>

//         <a href="#" className="hover:text-[#00C896]">
//           About us
//         </a>

//         <a href="#" className="hover:text-[#00C896]">
//           Contact us
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "Transport", path: "/transport" },
    { name: "Tours", path: "/tours" },
    { name: "Guides", path: "/guides" },
    { name: "About", path: "/about-us" },
    { name: "Contact", path: "/contact-us" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#253745]/95 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-10 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Tours For Sri Lanka"
              className="h-16 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[15px] transition-all duration-300 pb-1
                ${
                  isActive(item.path)
                    ? "text-[#00C896] border-b-2 border-[#00C896] font-semibold"
                    : "text-white hover:text-[#00C896]"
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">

            <Link
              to="/signin"
              className="px-5 py-2 rounded-full border border-[#00C896] text-white font-medium hover:bg-[#00C896] transition duration-300"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 rounded-full bg-[#00C896] text-white font-medium hover:bg-[#00b884] transition duration-300"
            >
              Sign Up
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#253745] border-t border-white/10">

          <div className="flex flex-col px-6 py-4">

            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`py-3 transition
                ${
                  isActive(item.path)
                    ? "text-[#00C896] font-semibold"
                    : "text-white hover:text-[#00C896]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-5">

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-center py-2 border border-[#00C896] rounded-full text-white hover:bg-[#00C896] transition"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="text-center py-2 rounded-full bg-[#00C896] text-white hover:bg-[#00b884] transition"
              >
                Sign Up
              </Link>

            </div>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;