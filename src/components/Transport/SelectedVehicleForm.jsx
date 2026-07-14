import { Briefcase, Calendar, Snowflake, Users } from "lucide-react";

export default function SelectedVehicleForm({ booking, updateBooking, onBook }) {
  return (
    <aside className="self-center rounded-3xl border border-[#00d1a3] bg-[#2d4250] p-6 text-white">
      <h2 className="mb-5 text-center text-2xl font-black">Selected Vehicle</h2>

      <DateField label="Pick-Up Date" value={booking.pickupDate} onChange={(v) => updateBooking("pickupDate", v)} />
      <DateField label="Return Date" value={booking.returnDate} onChange={(v) => updateBooking("returnDate", v)} />

      <SelectField
        label="Passengers"
        value={booking.passengers}
        onChange={(v) => updateBooking("passengers", v)}
        icon={<Users />}
        options={["1 Passenger", "2 Passengers", "4 Passengers", "10 Passengers", "30 Passengers"]}
      />

      <SelectField
        label="Bags"
        value={booking.bags}
        onChange={(v) => updateBooking("bags", v)}
        icon={<Briefcase />}
        options={["1 Bag", "2 Bags", "3 to 5 Bags", "6 to 10 Bags", "10+ Bags"]}
      />

      <SelectField
        label="AC Preferences"
        value={booking.ac}
        onChange={(v) => updateBooking("ac", v)}
        icon={<Snowflake />}
        options={["AC", "Non AC"]}
      />

      <SelectField
        label="Pickup location"
        value={booking.pickupLocation}
        onChange={(v) => updateBooking("pickupLocation", v)}
        options={["Colombo", "Bandaranaike Airport", "Kandy", "Galle", "Ella", "Sigiriya"]}
      />

      <button
        onClick={onBook}
        className="mt-5 h-11 w-full rounded-[22px] bg-[#00c99b] text-lg font-black hover:bg-[#00b98f]"
      >
        Book Now
      </button>
    </aside>
  );
}

function DateField({ label, value, onChange }) {
  return (
    <label className="mb-3 block">
      <small className="mb-1.5 block">{label}</small>

      <div className="flex h-[45px] items-center rounded-3xl bg-[#3d5362] px-4 shadow-md">
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-white outline-none [color-scheme:dark]"
        />
        <Calendar className="text-[#00d1a3]" />
      </div>
    </label>
  );
}

function SelectField({ label, value, onChange, options, icon }) {
  return (
    <label className="mb-3 block">
      <small className="mb-1.5 block">{label}</small>

      <div className="flex h-[45px] items-center rounded-3xl bg-[#3d5362] px-4 shadow-md">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-white outline-none [&_option]:text-black"
        >
          {options.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {icon && <span className="text-[#00d1a3]">{icon}</span>}
      </div>
    </label>
  );
}