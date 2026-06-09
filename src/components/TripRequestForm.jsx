export default function TripRequestForm() {
  return (
    <div className="border border-[#00C896] rounded-3xl p-6">

      <h2 className="text-4xl font-bold text-center mb-8">
        Trip Request
      </h2>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Colombo"
          className="w-full bg-[#314252] p-4 rounded-full"
        />

        <input
          type="date"
          className="w-full bg-[#314252] p-4 rounded-full"
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            type="time"
            className="bg-[#314252] p-4 rounded-full"
          />

          <input
            type="time"
            className="bg-[#314252] p-4 rounded-full"
          />
        </div>

        <input
          type="number"
          placeholder="Adults"
          className="w-full bg-[#314252] p-4 rounded-full"
        />

        <input
          type="number"
          placeholder="Children"
          className="w-full bg-[#314252] p-4 rounded-full"
        />

        <button className="w-full bg-[#00C896] py-5 rounded-full text-xl font-bold">
          Request a Trip
        </button>

      </div>

    </div>
  );
}