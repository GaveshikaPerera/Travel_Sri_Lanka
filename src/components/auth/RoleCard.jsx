const RoleCard = ({ icon, title, subtitle, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
      w-40
      h-40
      rounded-3xl
      bg-[#243746]
      hover:bg-[#2d4456]
      shadow-xl
      duration-300
      flex
      flex-col
      justify-center
      items-center
      text-center
      "
    >
      <div className="text-[#00C896] text-5xl mb-4">
        {icon}
      </div>

      <h3 className="text-white font-semibold text-lg">
        {title}
      </h3>

      <p className="text-gray-300 text-sm mt-2 px-3">
        {subtitle}
      </p>
    </button>
  );
};

export default RoleCard;