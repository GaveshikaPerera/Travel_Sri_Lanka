import { useState } from "react";

const emptyVehicle = {
  name: "",
  type: "Car",
  passengers: "",
  price: "",
  status: "Pending Approval",
};

export default function VehicleTable({ vehicles, onStatusChange, onAddVehicle }) {
  const [showForm, setShowForm] = useState(false);
  const [vehicle, setVehicle] = useState(emptyVehicle);

  const inputClass =
    "w-full rounded-xl border-0 bg-[#3c5261] px-3.5 py-3 text-white outline-none placeholder:text-[#b9c6cc]";

  const updateField = (field, value) => {
    setVehicle((prev) => ({ ...prev, [field]: value }));
  };

  const submitVehicle = (event) => {
    event.preventDefault();

    if (!vehicle.name.trim() || !vehicle.passengers || !vehicle.price.trim()) {
      return;
    }

    const price = vehicle.price.trim().startsWith("LKR")
      ? vehicle.price.trim()
      : `LKR ${vehicle.price.trim()}`;

    onAddVehicle({
      ...vehicle,
      name: vehicle.name.trim(),
      passengers: Number(vehicle.passengers),
      price,
    });

    setVehicle(emptyVehicle);
    setShowForm(false);
  };

  return (
    <section className="mt-7 rounded-2xl bg-[#213847] p-5">
      <div className="mb-5 flex items-center justify-between gap-3 max-sm:flex-col max-sm:items-start">
        <h2 className="text-2xl font-black text-white">My Vehicles</h2>
        <button
          type="button"
          onClick={() => setShowForm((prev) => !prev)}
          className="h-10 rounded-full bg-[#00c99b] px-5 font-black text-white"
        >
          {showForm ? "Close" : "+ Request Vehicle"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={submitVehicle} className="mb-6 rounded-2xl bg-[#2d4250] p-4">
          <p className="mb-3 text-sm text-[#b9c6cc]">
            New vehicles are added as pending requests. Admin approval is required
            before they become available.
          </p>
          <div className="grid grid-cols-5 gap-3 max-xl:grid-cols-2 max-md:grid-cols-1">
            <input
              value={vehicle.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Vehicle name"
              className={inputClass}
            />
            <select
              value={vehicle.type}
              onChange={(event) => updateField("type", event.target.value)}
              className={`${inputClass} [&_option]:text-black`}
            >
              <option>Car</option>
              <option>Van</option>
              <option>Bus</option>
            </select>
            <input
              type="number"
              min="1"
              value={vehicle.passengers}
              onChange={(event) => updateField("passengers", event.target.value)}
              placeholder="Passengers"
              className={inputClass}
            />
            <input
              value={vehicle.price}
              onChange={(event) => updateField("price", event.target.value)}
              placeholder="Price per day"
              className={inputClass}
            />
            <button className="rounded-xl bg-[#00c99b] px-4 py-3 font-black text-white">
              Submit Request
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm text-white">
          <thead className="text-[#b9c6cc]">
            <tr>
              <th className="py-3 text-left">Vehicle</th>
              <th className="py-3 text-left">Type</th>
              <th className="py-3 text-left">Passengers</th>
              <th className="py-3 text-left">Price per Day</th>
              <th className="py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-t border-white/10">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="h-10 w-16 rounded-md bg-white object-contain"
                    />
                    <strong>{vehicle.name}</strong>
                  </div>
                </td>

                <td>{vehicle.type}</td>
                <td>{vehicle.passengers}</td>
                <td>{vehicle.price}</td>

                <td>
                  {vehicle.status === "Pending Approval" ? (
                    <span className="rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-bold text-yellow-300">
                      Pending Approval
                    </span>
                  ) : (
                    <select
                      value={vehicle.status}
                      onChange={(e) => onStatusChange(vehicle.id, e.target.value)}
                      className="rounded-xl bg-[#3c5261] px-3 py-2 outline-none [&_option]:text-black"
                    >
                      <option>Available</option>
                      <option>Booked</option>
                      <option>Maintenance</option>
                    </select>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
