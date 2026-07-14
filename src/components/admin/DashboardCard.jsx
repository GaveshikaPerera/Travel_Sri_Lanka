export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  iconColor,
}) {
  return (
    <div className="bg-[#253745] rounded-2xl p-6 border border-[#4A5C6A] hover:border-[#00C896] transition-all duration-300 shadow-lg">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {value}
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            {subtitle}
          </p>

        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${iconColor}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}