import logo from "../../assets/logo.png";

const AuthLeftPanel = () => {
  return (
    <div className="hidden lg:flex w-1/2 bg-[#0E1D28] items-center justify-center">

      <div className="text-center">

        <img
          src={logo}
          alt="Tours For Sri Lanka"
          className="w-[430px] mx-auto"
        />

        <h2 className="text-white text-5xl font-bold mt-8">
          Discover The Wonders
        </h2>

        <p className="text-gray-300 text-3xl mt-4">
          of Sri Lanka
        </p>

      </div>

    </div>
  );
};

export default AuthLeftPanel;