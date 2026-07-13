import logo from "../../assets/logo.png";

export default function AuthLeftPanel() {
  return (
    <div className="hidden lg:flex w-1/2 bg-[#11212D] items-center justify-center">
      <div className="text-center">

        <img
          src={logo}
          alt="logo"
          className="w-[520px] mx-auto"
        />

        <p className="text-white text-2xl mt-6 leading-relaxed font-light">
          Discover The Wonders of Sri Lanka
        </p>

      </div>
    </div>
  );
}