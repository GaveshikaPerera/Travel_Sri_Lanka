import { useState } from "react";
import {
  Plus,
  Minus,
} from "lucide-react";

export default function TripRequestForm() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="border border-[#00C896] rounded-3xl p-6 text-white">

      <h2 className="text-4xl font-bold text-center mb-8">
        Trip Request
      </h2>

      <div className="space-y-5">

        <select className="w-full bg-[#314252] p-4 rounded-full outline-none">
          <option>Colombo</option>
          <option>Kandy</option>
          <option>Galle</option>
          <option>Ella</option>
          <option>Mirissa</option>
        </select>

        <input
          type="date"
          className="w-full bg-[#314252] p-4 rounded-full outline-none"
        />

        <div className="grid grid-cols-2 gap-3">

          <div>
            <label className="text-sm">
              Arrival
            </label>

            <input
              type="time"
              className="w-full bg-[#314252] p-4 rounded-full mt-2"
            />
          </div>

          <div>
            <label className="text-sm">
              Departure
            </label>

            <input
              type="time"
              className="w-full bg-[#314252] p-4 rounded-full mt-2"
            />
          </div>

        </div>

        {/* Adults */}

        <div className="bg-[#314252] rounded-full p-4 flex justify-between items-center">

          <span>
            Adult (Age 18 - 60)
          </span>

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                setAdults(
                  Math.max(
                    1,
                    adults - 1
                  )
                )
              }
            >
              <Minus size={18} />
            </button>

            <span>{adults}</span>

            <button
              onClick={() =>
                setAdults(
                  adults + 1
                )
              }
            >
              <Plus size={18} />
            </button>

          </div>

        </div>

        {/* Children */}

        <div className="bg-[#314252] rounded-full p-4 flex justify-between items-center">

          <span>
            Child (Age 1 - 15)
          </span>

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                setChildren(
                  Math.max(
                    0,
                    children - 1
                  )
                )
              }
            >
              <Minus size={18} />
            </button>

            <span>{children}</span>

            <button
              onClick={() =>
                setChildren(
                  children + 1
                )
              }
            >
              <Plus size={18} />
            </button>

          </div>

        </div>

        <button className="w-full bg-[#00C896] py-5 rounded-full text-xl font-bold hover:bg-[#00b786] duration-300">
          Request a Trip
        </button>

      </div>

    </div>
  );
}