export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  iconColor,
}) {
  return (
    <div className="bg-[#253745] rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#2F4156]">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm text-gray-400">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {value}
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            {subtitle}
          </p>

        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${iconColor}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

  <div className="xl:col-span-2">
    <RoomTable />
  </div>

  {/* Room Status component will go here */}

</div>
}
