import { MapPin, Users } from "lucide-react";

export default function VehicleCard({ vehicle, onBook }) {
  return (
    <article className="h-[306px] w-56 overflow-hidden rounded-[18px] bg-[#213847]">
      <div className="grid h-[148px] place-items-center bg-white">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-[110px] w-[190px] object-contain"
        />
      </div>

      <div className="flex h-[158px] flex-col px-4 py-2.5">
        <h3 className="text-[13px] font-black text-white">{vehicle.name}</h3>

        <p className="mt-1 flex items-center gap-1 text-[11px] text-[#d9e3e7]">
          <Users size={13} className="text-[#00d1a3]" />
          {vehicle.passengers} Passengers
        </p>

        <p className="mt-1 flex items-center gap-1 text-[11px] text-[#d9e3e7]">
          <MapPin size={13} className="text-[#00d1a3]" />
          {vehicle.location}
        </p>

        <h4 className="mt-2 text-[11px] font-black text-[#00d1a3]">
          LKR {vehicle.price.toLocaleString()}
        </h4>

        <button
          onClick={onBook}
          className="mt-auto h-[31px] rounded-[22px] bg-[#00c99b] font-black text-white hover:bg-[#00b98f]"
        >
          Book Now
        </button>
      </div>
    </article>
  );
}