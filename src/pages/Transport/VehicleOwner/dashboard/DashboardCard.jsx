export default function DashboardCard({ icon, value, title, subtitle, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl border border-[#00c99b]/40 bg-[#213847] p-5 text-left text-white transition hover:ring-2 hover:ring-[#00c99b]"
    >
      <div className="mb-2 text-[#00d1a3]">{icon}</div>
      <strong className="block text-3xl">{value}</strong>
      <span className="mt-1 block text-lg">{title}</span>
      <small className="text-[#b9c6cc]">{subtitle}</small>
    </button>
  );
}