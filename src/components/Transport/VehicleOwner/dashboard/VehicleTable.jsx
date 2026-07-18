export default function VehicleTable({ vehicles, onStatusChange }) {
  return (
    <section className="mt-7 rounded-2xl bg-[#213847] p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-black text-white">My Vehicles</h2>
        <button className="h-10 rounded-full bg-[#00c99b] px-5 font-black text-white">
          + Add Vehicle
        </button>
      </div>

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
                  <select
                    value={vehicle.status}
                    onChange={(e) => onStatusChange(vehicle.id, e.target.value)}
                    className="rounded-xl bg-[#3c5261] px-3 py-2 outline-none [&_option]:text-black"
                  >
                    <option>Available</option>
                    <option>Booked</option>
                    <option>Maintenance</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}