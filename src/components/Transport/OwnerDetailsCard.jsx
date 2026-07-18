import { Mail, MapPin, Phone, Star } from "lucide-react";
import { review } from "../../data/vehicles";

export default function OwnerDetailsCard({ vehicle }) {
  return (
    <section className="rounded-3xl bg-[#2d4250] p-6 text-white">
      <img
        src={vehicle.owner.image}
        alt={vehicle.owner.name}
        className="mx-auto mb-3 h-[190px] w-[190px] rounded-full object-cover"
      />

      <h2 className="mb-4 text-center text-2xl font-black">
        {vehicle.owner.name}
      </h2>

      <div className="space-y-2">
        <Info icon={<Star size={16} />} text={`${vehicle.rating} (${vehicle.reviews} Reviews)`} />
        <Info icon={<Mail size={16} />} text={vehicle.owner.email} />
        <Info icon={<Phone size={16} />} text={vehicle.owner.phone} />
        <Info icon={<MapPin size={16} />} text={vehicle.owner.areas} />
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
    </section>
  );
}

function Info({ icon, text }) {
  return (
    <p className="flex items-center gap-2">
      <span className="text-[#00d1a3]">{icon}</span>
      {text}
    </p>
  );
}