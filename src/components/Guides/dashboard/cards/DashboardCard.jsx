import React from "react";

export default function DashboardCard({
  title,
  value,
  icon,
  color = "#00C896",
}) {
  return (
    <div className="bg-[#243342] rounded-2xl p-5 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300">

      <div>
        <p className="text-gray-400 text-sm">{title}</p>

        <h2 className="text-white text-2xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

    </div>
  );
}