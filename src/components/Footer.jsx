import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-[#386C93] mt-36">

      <div className="max-w-[1280px] mx-auto grid grid-cols-3 px-10 py-10">

        {/* Left */}
        <div>

          <h2 className="text-[#D9D9D9] text-xl font-semibold mb-4">
            Explore
          </h2>

          <div className="space-y-2 text-[#D9D9D9] text-sm">
            <Link to="/" className="block hover:text-[#00C896] transition-colors duration-300">
              Home
            </Link>
            <Link to="/hotels" className="block hover:text-[#00C896] transition-colors duration-300">
              Hotels
            </Link>
            <Link to="/transport" className="block hover:text-[#00C896] transition-colors duration-300">
              Transport
            </Link>
            <Link to="/tours" className="block hover:text-[#00C896] transition-colors duration-300">
              Tours
            </Link>
            <Link to="/guidespage" className="block hover:text-[#00C896] transition-colors duration-300">
              Guides
            </Link>
            <Link to="/about-us" className="block hover:text-[#00C896] transition-colors duration-300">
              About us
            </Link>
            <Link to="/contact-us" className="block hover:text-[#00C896] transition-colors duration-300">
              Contact us
            </Link>
          </div>

        </div>

        {/* Middle */}
        <div>

          <h2 className="text-[#D9D9D9] text-xl font-semibold mb-4">
            Contact Us
          </h2>

          <div className="space-y-2 text-[#D9D9D9] text-sm">
            <p>travelsrilanka@gmail.com</p>
            <p>tourhelp@gmail.com</p>
            <p>+94 77 123 4567</p>
            <p>+94 71 987 6543</p>
          </div>

        </div>

        {/* Right */}
        <div className="flex flex-col items-center justify-center">

          <Link to="/" className="text-center">
            <h1 className="text-[#D9D9D9] text-6xl font-black">
              SRI
            </h1>
            <p className="text-[#D9D9D9] text-4xl font-black">
              LANKA
            </p>
          </Link>

          <div className="flex gap-4 mt-5">
            {/* Social media icons - you can wrap these in links too */}
            <div className="w-9 h-9 rounded-full bg-[#00C896] hover:bg-[#00a87a] transition-colors duration-300 cursor-pointer"></div>
            <div className="w-9 h-9 rounded-full bg-[#00C896] hover:bg-[#00a87a] transition-colors duration-300 cursor-pointer"></div>
            <div className="w-9 h-9 rounded-full bg-[#00C896] hover:bg-[#00a87a] transition-colors duration-300 cursor-pointer"></div>
            <div className="w-9 h-9 rounded-full bg-[#00C896] hover:bg-[#00a87a] transition-colors duration-300 cursor-pointer"></div>
          </div>

        </div>

      </div>

      <div className="border-t border-[#386C93] py-4 text-center text-[#D9D9D9] text-sm">
        © Copyright 2026 Travel Sri Lanka
      </div>

    </footer>
  );
}

export default Footer;