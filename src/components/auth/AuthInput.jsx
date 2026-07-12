export default function AuthInput({
  type = "text",
  placeholder,
  icon,
  rightIcon,
}) {
  return (
    <div className="relative">

      {icon && (
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#00C896]">
          {icon}
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-14 rounded-full bg-[#3D4F5F] text-white placeholder-gray-300 pl-14 pr-14 outline-none"
      />

      {rightIcon && (
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#00C896] cursor-pointer">
          {rightIcon}
        </div>
      )}

    </div>
  );
}