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

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full h-[80px] bg-[#2B3A47] hidden lg:flex items-center justify-between px-10 m-0">
        {/* LOGO */}
        <Link to="/" className="text-white no-underline">
          <h1 className="text-[28px] font-bold leading-none">
            SRI
          </h1>
          <p className="text-[11px] tracking-[2px] text-[#D9D9D9]">
            TOURS FOR LANKA
          </p>
        </Link>

        {/* MENU ITEMS */}
        <div className="flex items-center gap-10 text-white text-[15px]">
          <Link 
            to="/" 
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive('/') ? 'text-[#00C896] underline' : ''
            }`}
          >
            Home
          </Link>

          <Link 
            to="/hotels" 
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive('/hotels') ? 'text-[#00C896] underline' : ''
            }`}
          >
            Hotels
          </Link>

          <Link 
            to="/transport" 
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive('/transport') ? 'text-[#00C896] underline' : ''
            }`}
          >
            Transport
          </Link>

          <Link 
            to="/tours" 
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive('/tours') ? 'text-[#00C896] underline' : ''
            }`}
          >
            Tours
          </Link>

          <Link
            to="/guidespage"
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive('/guidespage') ? 'text-[#00C896] underline' : ''
            }`}
          >
            Guides
          </Link>

          <Link 
            to="/about-us" 
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive('/about-us') ? 'text-[#00C896] underline' : ''
            }`}
          >
            About us
          </Link>

          <Link 
            to="/contact-us" 
            className={`hover:text-[#00C896] transition-colors duration-300 hover:underline underline-offset-4 ${
              isActive('/contact-us') ? 'text-[#00C896] underline' : ''
            }`}
          >
            Contact us
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full h-[70px] bg-[#2B3A47] shadow-2xl flex lg:hidden justify-evenly items-center z-50">
        <Link 
          to="/" 
          className={`flex flex-col justify-center items-center text-xl transition-colors duration-300 ${
            isActive('/') ? 'text-[#00C896]' : 'text-white hover:text-[#00C896]'
          }`}
        >
          <span className="text-xs">Home</span>
        </Link>

        <Link 
          to="/hotels" 
          className={`flex flex-col justify-center items-center text-xl transition-colors duration-300 ${
            isActive('/hotels') ? 'text-[#00C896]' : 'text-white hover:text-[#00C896]'
          }`}
        >
          <span className="text-xs">Hotels</span>
        </Link>

        <Link 
          to="/transport" 
          className={`flex flex-col justify-center items-center text-xl transition-colors duration-300 ${
            isActive('/transport') ? 'text-[#00C896]' : 'text-white hover:text-[#00C896]'
          }`}
        >
          <span className="text-xs">Transport</span>
        </Link>

        <Link 
          to="/tours" 
          className={`flex flex-col justify-center items-center text-xl transition-colors duration-300 ${
            isActive('/tours') ? 'text-[#00C896]' : 'text-white hover:text-[#00C896]'
          }`}
        >
          <span className="text-xs">Tours</span>
        </Link>

        <Link 
          to="/guidespage" 
          className={`flex flex-col justify-center items-center text-xl transition-colors duration-300 ${
            isActive('/guidespage') ? 'text-[#00C896]' : 'text-white hover:text-[#00C896]'
          }`}
        >
          <span className="text-xs">Guides</span>
        </Link>

        <Link 
          to="/about-us" 
          className={`flex flex-col justify-center items-center text-xl transition-colors duration-300 ${
            isActive('/about-us') ? 'text-[#00C896]' : 'text-white hover:text-[#00C896]'
          }`}
        >
          <span className="text-xs">About</span>
        </Link>

        <Link 
          to="/contact-us" 
          className={`flex flex-col justify-center items-center text-xl transition-colors duration-300 ${
            isActive('/contact-us') ? 'text-[#00C896]' : 'text-white hover:text-[#00C896]'
          }`}
        >
          <span className="text-xs">Contact</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;