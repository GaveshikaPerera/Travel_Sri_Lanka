function Footer() {
  return (
    <footer className=" border-t border-[#386C93] mt-36">

      <div className="max-w-[1280px] mx-auto grid grid-cols-3 px-10 py-10">

        {/* Left */}
        <div>

          <h2 className="text-[#D9D9D9] text-xl font-semibold mb-4">
            Explore
          </h2>

          <div className="space-y-2 text-[#D9D9D9] text-sm">
            <p>Home</p>
            <p>Hotels</p>
            <p>Transport</p>
            <p>Tours</p>
            <p>Guides</p>
            <p>About us</p>
            <p>Contact us</p>
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

          <h1 className="text-[#D9D9D9] text-6xl font-black">
            SRI
          </h1>

          <p className="text-[#D9D9D9] text-4xl font-black">
            LANKA
          </p>

          <div className="flex gap-4 mt-5">

            <div className="w-9 h-9 rounded-full bg-[#00C896]"></div>
            <div className="w-9 h-9 rounded-full bg-[#00C896]"></div>
            <div className="w-9 h-9 rounded-full bg-[#00C896]"></div>
            <div className="w-9 h-9 rounded-full bg-[#00C896]"></div>

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