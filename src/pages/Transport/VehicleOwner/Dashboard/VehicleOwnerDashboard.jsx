import { useRef, useState } from "react";
import {
  CalendarCheck,
  CheckCircle,
  ClipboardCheck,
  MessageCircle,
  Send,
} from "lucide-react";

import Sidebar from "../../../../components/Transport/VehicleOwner/dashboard/Sidebar";
import Topbar from "../../../../components/Transport/VehicleOwner/dashboard/Topbar";
import DashboardCard from "../../../../components/Transport/VehicleOwner/dashboard/DashboardCard";
import VehicleTable from "../../../../components/Transport/VehicleOwner/dashboard/VehicleTable";
import ReviewsPanel from "../../../../components/Transport/VehicleOwner/dashboard/ReviewsPanel";

import carImg from "../../../../assets/transport/car.png";
import vanImg from "../../../../assets/transport/van.png";
import busImg from "../../../../assets/transport/bus.png";
import driverImg from "../../../../assets/transport/driver.jpg";
import reviewerImg from "../../../../assets/transport/reviewer.jpg";

const initialVehicles = [
  {
    id: 1,
    name: "Toyota Aqua",
    type: "Car",
    passengers: 4,
    price: "LKR 8,000",
    status: "Available",
    image: carImg,
  },
  {
    id: 2,
    name: "KDH Van",
    type: "Van",
    passengers: 10,
    price: "LKR 15,000",
    status: "Available",
    image: vanImg,
  },
  {
    id: 3,
    name: "Luxury Bus",
    type: "Bus",
    passengers: 35,
    price: "LKR 45,000",
    status: "Maintenance",
    image: busImg,
  },
];

const bookingRequests = [
  {
    id: 1,
    customer: "Richard",
    trip: "Airport Pickup",
    vehicle: "Toyota Aqua",
    date: "2026-07-20",
    status: "Pending",
  },
  {
    id: 2,
    customer: "Emily",
    trip: "Kandy Tour",
    vehicle: "KDH Van",
    date: "2026-07-22",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Daniel",
    trip: "Airport Drop",
    vehicle: "Toyota Aqua",
    date: "2026-07-25",
    status: "Confirmed",
  },
];

const vehicleImages = {
  Car: carImg,
  Van: vanImg,
  Bus: busImg,
};

export default function VehicleOwnerDashboard() {
  const [active, setActive] = useState("Dashboard");
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [bookings, setBookings] = useState(bookingRequests);
  const [reply, setReply] = useState("");
  const [messages, setMessages] = useState([
    { from: "Customer", text: "Can you pick us from airport tomorrow?" },
    { from: "You", text: "Yes, please send arrival time." },
  ]);
  const sectionRefs = useRef({});

  const pendingBookings = bookings.filter((item) => item.status === "Pending");
  const availableVehicles = vehicles.filter((item) => item.status === "Available");

  const scrollToSection = (sectionName) => {
    setActive(sectionName);
    sectionRefs.current[sectionName]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const updateVehicleStatus = (id, status) => {
    setVehicles((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const addVehicle = (vehicle) => {
    setVehicles((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...vehicle,
        status: "Pending Approval",
        image: vehicleImages[vehicle.type] || carImg,
      },
    ]);
  };

  const updateBookingStatus = (id, status) => {
    setBookings((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const sendReply = () => {
    if (!reply.trim()) return;
    setMessages((prev) => [...prev, { from: "You", text: reply }]);
    setReply("");
  };

  const logout = () => {
    window.location.href = "/vehicle-owner-signup";
  };

  return (
    <main className="min-h-screen bg-[#071923] text-white">
      <div className="grid grid-cols-[260px_1fr] max-lg:grid-cols-1">
        <Sidebar active={active} setActive={scrollToSection} onLogout={logout} />

        <section className="p-7 max-lg:p-4">
          <div
            ref={(node) => (sectionRefs.current.Dashboard = node)}
            className="scroll-mt-7"
          >
            <Topbar title={active} ownerImage={driverImg} />

            <section className="mt-7">
              <h2 className="mb-4 text-2xl font-black">Priority Center</h2>

              <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
                <DashboardCard
                  icon={<CalendarCheck />}
                  value={pendingBookings.length}
                  title="New booking requests"
                  subtitle="Confirm today"
                  onClick={() => scrollToSection("Bookings")}
                />
                <DashboardCard
                  icon={<MessageCircle />}
                  value="2"
                  title="Unread messages"
                  subtitle="Reply customers"
                  onClick={() => scrollToSection("Messages")}
                />
                <DashboardCard
                  icon={<ClipboardCheck />}
                  value="80%"
                  title="Verification status"
                  subtitle="Upload pending files"
                  onClick={() => scrollToSection("Verification")}
                />
                <DashboardCard
                  icon={<CheckCircle />}
                  value={`${availableVehicles.length}/${vehicles.length}`}
                  title="Available vehicles"
                  subtitle="One in maintenance"
                  onClick={() => scrollToSection("Vehicles")}
                />
              </div>
            </section>

            <section className="mt-5 grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
              <Stat value="190" title="Total Bookings" />
              <Stat value="4.8/5" title="Average Rating" />
              <Stat value="144" title="Published Reviews" />
              <Stat value="LKR 328K" title="Monthly Earnings" />
            </section>
          </div>

          <div
            ref={(node) => (sectionRefs.current.Bookings = node)}
            className="scroll-mt-7"
          >
            <BookingsPanel
              bookings={bookings}
              updateBookingStatus={updateBookingStatus}
            />
          </div>

          <BookingOverview />
          <ProfileCompletion />

          <div
            ref={(node) => (sectionRefs.current.Vehicles = node)}
            className="scroll-mt-7"
          >
            <VehicleTable
              vehicles={vehicles}
              onStatusChange={updateVehicleStatus}
              onAddVehicle={addVehicle}
            />
          </div>

          <div
            ref={(node) => (sectionRefs.current.Reviews = node)}
            className="scroll-mt-7"
          >
            <ReviewsPanel reviewerImage={reviewerImg} />
          </div>

          <div
            ref={(node) => (sectionRefs.current.Messages = node)}
            className="scroll-mt-7"
          >
            <MessagesPanel
              messages={messages}
              reply={reply}
              setReply={setReply}
              sendReply={sendReply}
            />
          </div>

          <div
            ref={(node) => (sectionRefs.current.Settings = node)}
            className="scroll-mt-7"
          >
            <BusinessSettings />
          </div>

          <div
            ref={(node) => {
              sectionRefs.current.Profile = node;
              sectionRefs.current.Verification = node;
            }}
            className="scroll-mt-7"
          >
            <ProfileDocuments />
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({ value, title }) {
  return (
    <div className="rounded-2xl border-l-4 border-[#00c99b] bg-[#213847] p-5">
      <strong className="block text-3xl">{value}</strong>
      <p className="mt-1 text-lg">{title}</p>
    </div>
  );
}

function BookingsPanel({ bookings, updateBookingStatus }) {
  return (
    <section className="mt-7 rounded-2xl bg-[#213847] p-5">
      <h2 className="mb-4 text-2xl font-black">Recent Bookings</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="text-[#b9c6cc]">
            <tr>
              <th className="py-3 text-left">Customer</th>
              <th className="py-3 text-left">Trip</th>
              <th className="py-3 text-left">Vehicle</th>
              <th className="py-3 text-left">Date</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((item) => {
              const statusClass =
                item.status === "Confirmed"
                  ? "bg-[#00c99b]/20 text-[#00d1a3]"
                  : item.status === "Rejected"
                  ? "bg-red-500/20 text-red-300"
                  : "bg-yellow-400/20 text-yellow-300";

              return (
                <tr key={item.id} className="border-t border-white/10">
                  <td className="py-3">{item.customer}</td>
                  <td>{item.trip}</td>
                  <td>{item.vehicle}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`rounded-full px-3 py-1 text-xs ${statusClass}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <select
                      value={item.status}
                      onChange={(event) =>
                        updateBookingStatus(item.id, event.target.value)
                      }
                      className="rounded-full bg-[#3c5261] px-3 py-1 font-bold outline-none [&_option]:text-black"
                      aria-label={`Edit ${item.customer} booking status`}
                    >
                      <option>Pending</option>
                      <option>Confirmed</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function BookingOverview() {
  return (
    <section className="mt-7 grid grid-cols-2 gap-5 max-lg:grid-cols-1">
      <div className="rounded-2xl bg-[#213847] p-5">
        <h2 className="mb-3 text-xl font-black">Booking Overview</h2>
        <div className="grid h-48 place-items-center rounded-xl bg-[#2d4250] text-[#b9c6cc]">
          Monthly booking chart area
        </div>
      </div>

      <div className="rounded-2xl bg-[#213847] p-5">
        <h2 className="mb-3 text-xl font-black">Income Summary</h2>
        <p className="text-[#b9c6cc]">Today: LKR 15,000</p>
        <p className="text-[#b9c6cc]">This Week: LKR 86,000</p>
        <p className="text-[#b9c6cc]">This Month: LKR 328,000</p>
      </div>
    </section>
  );
}

function ProfileCompletion() {
  return (
    <section className="mt-7 rounded-2xl bg-[#213847] p-5">
      <h2 className="text-xl font-black">Profile Completion</h2>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#3c5261]">
        <div className="h-full w-[80%] bg-[#00c99b]"></div>
      </div>

      <p className="mt-2 text-[#b9c6cc]">
        80% completed. Insurance certificate is pending admin verification.
      </p>
    </section>
  );
}

function MessagesPanel({ messages, reply, setReply, sendReply }) {
  return (
    <section className="mt-7 rounded-2xl bg-[#213847] p-5">
      <h2 className="mb-4 text-2xl font-black">Trip Communication</h2>

      <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
        <div className="rounded-2xl bg-[#2d4250] p-4">
          {messages.map((message, index) => (
            <p
              key={index}
              className={`mb-2 rounded-xl p-3 ${
                message.from === "You" ? "bg-[#00a989]" : "bg-[#3c5261]"
              }`}
            >
              <strong>{message.from}:</strong> {message.text}
            </p>
          ))}
        </div>

        <div>
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Write reply..."
            className="h-32 w-full resize-none rounded-2xl bg-[#3c5261] p-4 outline-none"
          />
          <button
            onClick={sendReply}
            className="mt-3 flex h-10 items-center gap-2 rounded-full bg-[#00c99b] px-5 font-black"
          >
            Send <Send size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

function BusinessSettings() {
  const inputClass =
    "w-full rounded-xl border-0 bg-[#3c5261] px-3.5 py-3 text-white outline-none";

  return (
    <section className="mt-7 rounded-2xl bg-[#213847] p-5">
      <h2 className="mb-4 text-2xl font-black">Business Settings</h2>

      <div className="grid grid-cols-2 gap-3 max-lg:grid-cols-1">
        <input defaultValue="Shantha Travels" className={inputClass} />
        <input defaultValue="0773254671" className={inputClass} />
        <input defaultValue="shantha@gmail.com" className={inputClass} />
        <input defaultValue="Colombo, Sri Lanka" className={inputClass} />

        <textarea
          defaultValue="Professional vehicle service for tours and airport transfers."
          className="col-span-2 h-28 w-full resize-none rounded-xl border-0 bg-[#3c5261] px-3.5 py-3 text-white outline-none max-lg:col-span-1"
        />
      </div>
    </section>
  );
}

function ProfileDocuments() {
  const docs = [
    ["Driving License", "Verified"],
    ["Vehicle Registration", "Verified"],
    ["Insurance Certificate", "Pending"],
    ["Revenue License", "Verified"],
  ];

  return (
    <section className="mt-7 rounded-2xl bg-[#213847] p-5">
      <h2 className="mb-4 text-2xl font-black">Profile & Documents</h2>

      <div className="mb-5 flex items-center gap-4">
        <img
          src={driverImg}
          alt="Owner"
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-black">Shantha Mendis</h3>
          <p className="text-[#b9c6cc]">Vehicle Owner</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
        {docs.map(([name, status]) => {
          const statusClass =
            status === "Verified"
              ? "bg-[#00c99b]/20 text-[#00d1a3]"
              : "bg-yellow-400/20 text-yellow-300";

          return (
            <article key={name} className="rounded-2xl bg-[#2d4250] p-4">
              <ClipboardCheck className="text-[#00d1a3]" />
              <strong className="mt-2 block">{name}</strong>
              <span
                className={`mt-2 inline-block rounded-full px-3 py-1 text-xs ${statusClass}`}
              >
                {status}
              </span>
              {status === "Pending" && (
                <small className="mt-2 block text-[#b9c6cc]">
                  Admin approval required
                </small>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
