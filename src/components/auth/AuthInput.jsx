import React from "react";

const AuthInput = ({
  type = "text",
  placeholder,
  icon,
  rightIcon,
}) => {
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
        className="
          w-full
          h-14
          rounded-full
          bg-[#3B4E5E]
          text-white
          placeholder:text-gray-400
          pl-14
          pr-14
          outline-none
          border-none
          focus:ring-2
          focus:ring-[#00C896]
          duration-300
        "
      />

      {rightIcon && (
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#00C896] cursor-pointer">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default AuthInput;