import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  Briefcase,
  Calendar,
  Mail,
  MapPin,
  Phone,
  Snowflake,
  Star,
  Users,
} from "lucide-react";
import TransportNavbar from "../components/TransportNavbar";
import VehicleInfoPanel from "../components/VehicleInfoPanel";
import { review, vehicles } from "../data/vehicles";

export default function VehicleDetailsPage() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const vehicle = vehicles.find((item) => item.id === Number(id)) || vehicles[0];

  const [booking, setBooking] = useState({
    pickupDate: params.get("pickupDate") || "",
    returnDate: "",
    passengers: params.get("passengers") || String(vehicle.passengers),
    bags: params.get("bags") || String(vehicle.bags),
    ac: "AC",
    pickupLocation: params.get("pickupLocation") || vehicle.location,
  });

  const updateBooking = (name, value) => {
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const goSuccess = () => {
    const query = new URLSearchParams(booking);
    navigate(`/transport/booking-success/${vehicle.id}?${query.toString()}`);
  };

  return (
    <main className="min-h-screen bg-[#071923] text-white">
      <TransportNavbar />

      <section className="grid grid-cols-[1.05fr_1.05fr_.92fr] gap-6 bg-gradient-to-r from-[#071923] to-[#183142] px-10 py-6 max-xl:grid-cols-1 max-lg:px-5">
        <VehicleInfoPanel
          vehicle={vehicle}
          buttonText="Message Owner"
          onButtonClick={goSuccess}
        />

        <section className="rounded-3xl bg-[#2d4250] p-6">
          <img
            src={vehicle.owner.image}
            alt={vehicle.owner.name}
            className="mx-auto mb-2 h-[190px] w-[190px] rounded-full object-cover"
          />

          <h2 className="mb-3 text-center text-2xl font-black">
            {vehicle.owner.name}
          </h2>

          <div className="space-y-2">
            <InfoLine icon={<Star size={16} />} text={`${vehicle.rating} (${vehicle.reviews} Reviews)`} />
            <InfoLine icon={<Mail size={16} />} text={vehicle.owner.email} />
            <InfoLine icon={<Phone size={16} />} text={vehicle.owner.phone} />
            <InfoLine icon={<MapPin size={16} />} text={vehicle.owner.areas} />
          </div>

          <h3 className="my-5 text-xl font-black">Reviews</h3>

          <div className="grid grid-cols-[42px_1fr] gap-3 border-b-2 border-white/50 pb-4">
            <img
              src={review.image}
              alt={review.name}
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <div className="flex items-center gap-3 text-xs">
                <strong>{review.name}</strong>
                <span>{review.country}</span>
                <b className="ml-auto text-yellow-300">★ {review.rating}</b>
                <small>{review.time}</small>
              </div>

              <p className="mt-3 text-[13px] leading-relaxed text-[#d9e3e7]">
                {review.text}
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-[42px_1fr] gap-3">
            <img
              src={review.image}
              alt={review.name}
              className="h-10 w-10 rounded-full object-cover"
            />

            <div className="flex items-center gap-3 text-xs">
              <strong>{review.name}</strong>
              <span>{review.country}</span>
              <b className="ml-auto text-yellow-300">★ {review.rating}</b>
              <small>{review.time}</small>
            </div>
          </div>
        </section>

        <aside className="self-center rounded-3xl border border-[#00d1a3] bg-[#2d4250] p-6">
          <h2 className="mb-5 text-center text-2xl font-black">
            Selected Vehicle
          </h2>

          <BookingDate
            label="Pick-Up Date"
            value={booking.pickupDate}
            onChange={(value) => updateBooking("pickupDate", value)}
          />

          <BookingDate
            label="Return Date"
            value={booking.returnDate}
            onChange={(value) => updateBooking("returnDate", value)}
          />

          <BookingSelect
            label="Passengers"
            value={booking.passengers}
            onChange={(value) => updateBooking("passengers", value)}
            icon={<Users />}
            options={[
              ["1", "1 Passenger"],
              ["2", "2 Passengers"],
              ["4", "4 Passengers"],
              ["10", "10 Passengers"],
              ["30", "30 Passengers"],
            ]}
          />

          <BookingSelect
            label="Bags"
            value={booking.bags}
            onChange={(value) => updateBooking("bags", value)}
            icon={<Briefcase />}
            options={[
              ["1", "1 Bag"],
              ["2", "2 Bags"],
              ["3 to 5 bags", "3 to 5 Bags"],
              ["6 to 10 bags", "6 to 10 Bags"],
              ["10+ bags", "10+ Bags"],
            ]}
          />

          <BookingSelect
            label="AC Preferences"
            value={booking.ac}
            onChange={(value) => updateBooking("ac", value)}
            icon={<Snowflake />}
            options={[
              ["AC", "AC"],
              ["Non AC", "Non AC"],
            ]}
          />

          <BookingSelect
            label="Pickup location"
            value={booking.pickupLocation}
            onChange={(value) => updateBooking("pickupLocation", value)}
            options={[
              ["Colombo", "Colombo"],
              ["Colombo, Sri Lanka", "Colombo, Sri Lanka"],
              ["Bandaranaike Airport", "Bandaranaike Airport"],
              ["Kandy", "Kandy"],
              ["Galle", "Galle"],
              ["Ella", "Ella"],
              ["Sigiriya", "Sigiriya"],
            ]}
          />

          <button
            onClick={goSuccess}
            className="mt-5 h-11 w-full rounded-[22px] bg-[#00c99b] text-lg font-black text-white hover:bg-[#00b98f]"
          >
            Book Now
          </button>
        </aside>
      </section>
    </main>
  );
}

function InfoLine({ icon, text }) {
  return (
    <p className="flex items-center gap-2 text-white">
      <span className="text-[#00d1a3]">{icon}</span>
      {text}
    </p>
  );
}

function BookingDate({ label, value, onChange }) {
  return (
    <label className="mb-3 block">
      <small className="mb-1.5 block">{label}</small>

      <div className="flex h-[45px] items-center justify-between rounded-3xl bg-[#3d5362] px-4 shadow-md">
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-white outline-none [color-scheme:dark]"
        />
        <Calendar className="ml-2 shrink-0 text-[#00d1a3]" />
      </div>
    </label>
  );
}

function BookingSelect({ label, value, onChange, options, icon }) {
  return (
    <label className="mb-3 block">
      <small className="mb-1.5 block">{label}</small>

      <div className="flex h-[45px] items-center justify-between rounded-3xl bg-[#3d5362] px-4 shadow-md">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-white outline-none [&_option]:text-black"
        >
          {options.map(([optionValue, text]) => (
            <option key={optionValue} value={optionValue}>
              {text}
            </option>
          ))}
        </select>

        {icon && <span className="ml-2 shrink-0 text-[#00d1a3]">{icon}</span>}
      </div>
    </label>
  );
}