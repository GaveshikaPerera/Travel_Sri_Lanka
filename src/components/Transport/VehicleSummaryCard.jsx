import { ArrowLeft, Briefcase, Snowflake, Star, Users } from "lucide-react";

export default function VehicleSummaryCard({ vehicle, buttonText, onButtonClick }) {
  return (
    <section className="rounded-3xl bg-[#2d4250] p-6 text-white">
      <div className="mx-auto mb-4 grid h-[150px] w-3/4 place-items-center rounded-lg bg-white">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-[115px] w-[86%] object-contain"
        />
      </div>

      <div className="grid grid-cols-[24px_repeat(3,1fr)_24px] items-center gap-3 text-3xl text-[#00d1a3]">
        <span>‹</span>
        <img src={vehicle.image} alt="" className="h-[50px] w-full rounded-md bg-white object-contain" />
        <img src={vehicle.image} alt="" className="h-[50px] w-full rounded-md bg-white object-contain" />
        <img src={vehicle.image} alt="" className="h-[50px] w-full rounded-md bg-white object-contain" />
        <span>›</span>
      </div>

      <h1 className="my-4 text-center text-3xl font-black">{vehicle.name}</h1>

      <div className="space-y-2 text-sm">
        <p className="flex items-center gap-2">
          <Star size={16} className="text-yellow-300" />
          {vehicle.rating} <small>({vehicle.reviews} Reviews)</small>
        </p>

        <p className="flex items-center gap-2">
          <Users size={16} className="text-[#00d1a3]" />
          {vehicle.passengers} Passengers
        </p>

        <p className="flex items-center gap-2">
          <Briefcase size={16} className="text-[#00d1a3]" />
          {vehicle.bags} Bags
        </p>

        <p className="flex items-center gap-2">
          <Snowflake size={16} className="text-[#00d1a3]" />
          {vehicle.ac ? "AC" : "Non AC"}
        </p>
      </div>

      <p className="mt-5 text-[11px] leading-relaxed text-[#eef4f6]">
        Experience comfort and efficiency with the <strong>{vehicle.name}</strong>, a smart
        choice for city travel, airport transfers, and Sri Lanka tours.
      </p>

      <p className="mt-4 text-[11px] leading-relaxed text-[#eef4f6]">
        Perfect for couples, families, and groups. This vehicle ensures a convenient and
        pleasant travel experience.
      </p>

      <button
        onClick={onButtonClick}
        className="mt-7 flex h-11 w-full items-center justify-center gap-2 rounded-[22px] bg-[#00c99b] text-xl font-black hover:bg-[#00b98f]"
      >
        {buttonText === "Back to Profile" && <ArrowLeft size={21} />}
        {buttonText}
      </button>
    </section>
  );
}