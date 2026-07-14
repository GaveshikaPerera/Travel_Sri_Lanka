export default function BookingSuccessCard({ params, vehicle }) {
  return (
    <aside className="grid place-content-center text-center text-white">
      <div className="mx-auto mb-5 grid h-[150px] w-[150px] place-items-center rounded-full bg-[#00b590] text-[92px]">
        ✓
      </div>

      <h2 className="text-2xl font-black">
        Booking
        <br />
        Successfully
      </h2>

      <div className="mt-5 rounded-2xl bg-[#213847] p-4 text-left text-sm text-[#d7e1e5]">
        <p>Pickup: {params.get("pickupLocation") || vehicle.location}</p>
        <p>Pick-Up Date: {params.get("pickupDate") || "Not selected"}</p>
        <p>Return Date: {params.get("returnDate") || "Not selected"}</p>
        <p>Passengers: {params.get("passengers") || vehicle.passengers}</p>
        <p>Bags: {params.get("bags") || vehicle.bags}</p>
        <p>AC: {params.get("ac") || "AC"}</p>
      </div>
    </aside>
  );
}