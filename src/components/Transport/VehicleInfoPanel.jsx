import { ArrowLeft, Briefcase, Snowflake, Star, Users } from "lucide-react";

export default function VehicleInfoPanel({ vehicle, buttonText, onButtonClick }) {
  return (
    <section className="bg-[#2d4250] rounded-3xl p-6 text-white">
      <div className="w-3/4 h-[148px] mx-auto mb-3.5 bg-white rounded-lg grid place-items-center">
        <img src={vehicle.image} alt={vehicle.name} className="w-[86%] h-[115px] object-contain" />
      </div>

      <div className="grid grid-cols-[24px_repeat(3,1fr)_24px] gap-2.5 items-center text-[#00d1a3] text-3xl">
        <span>‹</span>
        <img src={vehicle.image} alt="" className="h-[50px] w-full object-contain bg-white rounded-md" />
        <img src={vehicle.image} alt="" className="h-[50px] w-full object-contain bg-white rounded-md" />
        <img src={vehicle.image} alt="" className="h-[50px] w-full object-contain bg-white rounded-md" />
        <span>›</span>
      </div>

      <h1 className="text-center text-3xl font-black my-3">{vehicle.name}</h1>

      <div className="space-y-2 text-sm">
        <p className="flex items-center gap-2"><Star size={16} className="text-yellow-300" /> {vehicle.rating} <small>({vehicle.reviews} Reviews)</small></p>
        <p className="flex items-center gap-2"><Users size={16} className="text-[#00d1a3]" /> {vehicle.passengers} Passengers</p>
        <p className="flex items-center gap-2"><Briefcase size={16} className="text-[#00d1a3]" /> {vehicle.bags} Bags</p>
        <p className="flex items-center gap-2"><Snowflake size={16} className="text-[#00d1a3]" /> AC</p>
      </div>

      <p className="text-[11px] leading-relaxed text-[#eef4f6] mt-5">
        Experience comfort and efficiency with the <strong>{vehicle.name}</strong>, a smart
        choice for city travel and short-distance tours.
      </p>

      <p className="text-[11px] leading-relaxed text-[#eef4f6] mt-4">
        Perfect for couples or small groups. Whether you are heading for airport pickup,
        business trip, or tour, this vehicle ensures a convenient travel experience.
      </p>

      <button
        onClick={onButtonClick}
        className="w-full h-11 mt-7 rounded-[22px] bg-[#00c99b] hover:bg-[#00b98f] text-white font-black text-xl flex items-center justify-center gap-2"
      >
        {buttonText === "Back to Profile" && <ArrowLeft size={21} />}
        {buttonText}
      </button>
    </section>
  );
}