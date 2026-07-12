import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Bus, Calendar, Car, MapPin, Plane, Users } from "lucide-react";
import TransportNavbar from "../components/TransportNavbar";
import TransportFooter from "../components/TransportFooter";
import { vehicleTypes } from "../data/vehicles";
import heroBg from "../assets/transport-bg.jpg";

export default function TransportPage() {
  const navigate = useNavigate();

  const [service, setService] = useState("airport-pickup");
  const [form, setForm] = useState({
    pickupLocation: "Colombo, Sri Lanka",
    pickupDate: "",
    passengers: "2",
    bags: "1 to 2 bags",
  });

  const updateForm = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const openVehicles = (type) => {
    const params = new URLSearchParams({
      service,
      pickupLocation: form.pickupLocation,
      pickupDate: form.pickupDate,
      passengers: form.passengers,
      bags: form.bags,
    });

    navigate(`/transport/vehicles/${type}?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-[#071923] text-white">
      <TransportNavbar />

      <section
        className="w-[calc(100%-88px)] min-h-[360px] mx-auto mt-[18px] rounded-[22px] bg-cover bg-center overflow-hidden max-lg:w-[calc(100%-28px)]"
        style={{
          backgroundImage: `linear-gradient(rgba(7,25,35,.18), rgba(7,25,35,.45)), url(${heroBg})`,
        }}
      >
        <div className="px-8 pt-[95px] pb-8">
          <h1 className="text-[44px] leading-none font-black text-[#e8eef1] max-lg:text-[34px]">
            Find your perfect ride
          </h1>
          <p className="mt-2 mb-7 text-[17px] font-bold">
            Discover and book the best vehicles with professional drivers
          </p>

          <div className="w-[78%] mx-auto grid grid-cols-4 bg-[rgba(47,70,84,.85)] rounded-[18px] overflow-hidden max-lg:w-full max-lg:grid-cols-1">
            <Tab active={service === "airport-pickup"} onClick={() => setService("airport-pickup")} icon={<Plane size={16} />} text="Airport pickup" />
            <Tab active={service === "airport-drop"} onClick={() => setService("airport-drop")} icon={<Plane size={16} />} text="Airport Drop" />
            <Tab active={service === "ride-now"} onClick={() => setService("ride-now")} icon={<Car size={16} />} text="Ride Now" />
            <Tab active={service === "tours"} onClick={() => setService("tours")} icon={<Car size={16} />} text="Tours" />
          </div>

          <div className="w-[76%] mx-auto mt-[46px] p-4 grid grid-cols-[1.3fr_1fr_1fr_1fr_150px] items-center bg-[rgba(65,91,108,.95)] rounded-b-[22px] max-lg:w-[92%] max-lg:grid-cols-1 max-lg:gap-3.5">
            <Field icon={<MapPin size={24} />} label="Pick Up Location">
              <select value={form.pickupLocation} onChange={(e) => updateForm("pickupLocation", e.target.value)}>
                <option>Colombo, Sri Lanka</option>
                <option>Bandaranaike Airport</option>
                <option>Kandy</option>
                <option>Galle</option>
                <option>Ella</option>
                <option>Sigiriya</option>
              </select>
            </Field>

            <Field icon={<Calendar size={24} />} label="Pick Up Date">
              <input type="date" value={form.pickupDate} onChange={(e) => updateForm("pickupDate", e.target.value)} />
            </Field>

            <Field icon={<Users size={24} />} label="Passengers">
              <select value={form.passengers} onChange={(e) => updateForm("passengers", e.target.value)}>
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="10">10 Passengers</option>
                <option value="30">30 Passengers</option>
              </select>
            </Field>

            <Field icon={<Briefcase size={24} />} label="Bags">
              <select value={form.bags} onChange={(e) => updateForm("bags", e.target.value)}>
                <option>1 to 2 bags</option>
                <option>3 to 5 bags</option>
                <option>6 to 10 bags</option>
                <option>10+ bags</option>
              </select>
            </Field>

            <button
              onClick={() => openVehicles("all")}
              className="h-[34px] rounded-[22px] bg-[#00c99b] hover:bg-[#00b98f] text-white text-[17px] font-black"
            >
              Search Vehicle
            </button>
          </div>
        </div>
      </section>

      <section className="px-14 py-8 max-lg:px-5">
        <h2 className="text-[22px] font-bold">Choose Vehicle Type</h2>
        <p className="mt-1 text-[#d5dde2]">All vehicles are with professional drivers</p>

        <div className="mt-3.5 grid grid-cols-4 gap-[62px] max-lg:grid-cols-1 max-lg:gap-6">
          {vehicleTypes.map((item) => (
            <button
              key={item.type}
              onClick={() => openVehicles(item.type)}
              className="relative overflow-hidden rounded-xl bg-[#243b4a] text-left text-white hover:-translate-y-1 transition"
            >
              <Bus className="absolute top-3 left-3 text-[#00d1a3]" size={16} />
              <img src={item.image} alt={item.title} className="w-full h-[120px] object-contain bg-white" />
              <div className="px-3 py-2.5">
                <h3 className="text-xs font-bold">{item.title}</h3>
                <p className="text-[11px] text-[#c9d2d7]">{item.text}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <TransportFooter />
    </main>
  );
}

function Tab({ active, onClick, icon, text }) {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-4 flex items-center justify-center gap-2 ${
        active ? "bg-[rgba(0,209,163,.25)] text-[#00d1a3]" : "text-white"
      }`}
    >
      {icon} {text}
    </button>
  );
}

function Field({ icon, label, children }) {
  return (
    <label className="relative min-h-16 px-4 pl-[38px] border-r border-white/20 max-lg:border-r-0">
      <span className="absolute left-0 top-5 text-[#00d1a3]">{icon}</span>
      <small className="block text-xs text-[#d5dde2]">{label}</small>
      <div className="[&_select]:w-full [&_input]:w-full [&_select]:bg-transparent [&_input]:bg-transparent [&_select]:text-white [&_input]:text-white [&_select]:font-black [&_input]:font-black [&_select]:outline-none [&_input]:outline-none [&_select]:border-0 [&_input]:border-0 [&_option]:text-black">
        {children}
      </div>
    </label>
  );
}