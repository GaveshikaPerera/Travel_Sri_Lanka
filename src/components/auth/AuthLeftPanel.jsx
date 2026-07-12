import logo from "../../assets/logo.png";

export default function AuthLeftPanel() {
  return (
    <div className="hidden lg:flex w-1/2 bg-[#11212D] items-center justify-center">
      <div className="text-center">

        <img
          src={logo}
          alt="logo"
          className="w-[420px] mx-auto"
        />

        <p className="text-white text-4xl mt-8 leading-relaxed font-light">
          Discover The Wonders
          <br />
          of Sri Lanka
        </p>

      </div>
    </div>
  );
}