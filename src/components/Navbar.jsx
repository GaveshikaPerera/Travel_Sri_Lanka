const Navbar = () => {
  return (
    <nav className="w-full h-[80px] bg-[#2B3A47] flex items-center justify-between px-10">

      {/* LOGO */}
      <div className="text-white">
        <h1 className="text-[28px] font-bold leading-none">
          SRI
        </h1>

        <p className="text-[11px] tracking-[2px] text-[#D9D9D9]">
          TOURS FOR LANKA
        </p>
      </div>

      {/* MENU ITEMS */}
      <div className="flex items-center gap-10 text-white text-[15px]">

        <a href="#" className="hover:text-[#00C896]" >
          Home
        </a>

        <a href="#" className="hover:text-[#00C896]">
          Hotels
        </a>

        <a href="#" className="hover:text-[#00C896]" >
          Transport
        </a>

        <a href="#" className="hover:text-[#00C896]">
          Tours
        </a>

        <a
          href="#"
          className="text-[#00C896] border-b-2 border-[#00C896] pb-1"
        >
          Guides
        </a>

        <a href="#" className="hover:text-[#00C896]">
          About us
        </a>

        <a href="#" className="hover:text-[#00C896]">
          Contact us
        </a>

      </div>

     

    </nav>
  );
};

export default Navbar;