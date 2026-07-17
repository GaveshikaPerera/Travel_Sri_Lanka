import { Bell } from "lucide-react";

export default function Topbar({ title, ownerImage }) {
  return (
    <header className="flex items-center justify-between gap-4 max-md:flex-col max-md:items-start">
      <div>
        <h1 className="text-3xl font-black text-white">{title}</h1>
        <p className="mt-1 text-sm text-[#b9c6cc]">
          Manage bookings, vehicles, customer messages, reviews and verification.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-[#213847] px-4 py-2">
        <Bell size={18} className="text-[#00d1a3]" />
        <img
          src={ownerImage}
          alt="Owner"
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <strong className="block text-sm text-white">Shantha Mendis</strong>
          <small className="text-[#b9c6cc]">Vehicle Owner</small>
        </div>
      </div>
    </header>
  );
}