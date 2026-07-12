import {
  FaBed,
  FaCheckCircle,
  FaTools,
  FaTimesCircle,
} from "react-icons/fa";

const statusData = [
  {
    title: "Total Rooms",
    value: 50,
    icon: <FaBed />,
    color: "text-white",
  },
  {
    title: "Available",
    value: 20,
    icon: <FaCheckCircle />,
    color: "text-[#00C896]",
  },
  {
    title: "Occupied",
    value: 25,
    icon: <FaTimesCircle />,
    color: "text-blue-400",
  },
  {
    title: "Maintenance",
    value: 5,
    icon: <FaTools />,
    color: "text-orange-400",
  },
];

export default function RoomStatus() {
  return (
    <div className="bg-[#253745] rounded-2xl border border-[#2F4156] p-6">

      <h2 className="text-xl font-semibold text-white mb-6">
        Room Status
      </h2>

      <div className="space-y-5">

        {statusData.map((item) => (

          <div
            key={item.title}
            className="flex justify-between items-center border-b border-[#2F4156] pb-4"
          >

            <div className="flex items-center gap-3">

              <div className={`text-2xl ${item.color}`}>
                {item.icon}
              </div>

              <span className="text-gray-300">
                {item.title}
              </span>

            </div>

            <span className="text-xl font-bold text-white">
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}