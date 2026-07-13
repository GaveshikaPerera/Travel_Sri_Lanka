import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { MapPin, Users } from "lucide-react";

import { vehicles } from "../../data/vehicles";

export default function VehicleListPage() {
  const { type } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const service = params.get("service") || "airport-pickup";
  const passengerCount = Number(params.get("passengers") || 1);
  const bagCount = getBagCount(params.get("bags") || "1 to 2 bags");

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchType = type === "all" || vehicle.type === type;
    const matchService = vehicle.services?.includes(service);
    const matchPassengers = vehicle.passengers >= passengerCount;
    const matchBags = vehicle.bags >= bagCount;

    return matchType && matchService && matchPassengers && matchBags;
  });

  const openBooking = (vehicleId) => {
    navigate(`/transport/booking/${vehicleId}?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-[#071923] text-white">
      

      <section className="min-h-[calc(100vh-78px)] px-14 py-6 max-lg:px-5">
        {filteredVehicles.length === 0 ? (
          <div className="mx-auto mt-20 max-w-[520px] rounded-[18px] bg-[#213847] p-8 text-center">
            <h2 className="text-2xl font-bold">No suitable vehicles available</h2>

            <p className="mt-2 text-[#cbd6dc]">
              Please reduce passengers/bags or choose another service.
            </p>

            <button
              onClick={() => navigate("/transport")}
              className="mt-5 h-10 rounded-full bg-[#00c99b] px-6 font-black text-white hover:bg-[#00b98f]"
            >
              Search Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-4 justify-between gap-y-9 max-xl:grid-cols-3 max-xl:justify-center max-xl:gap-9 max-lg:grid-cols-1">
            {filteredVehicles.map((vehicle) => (
              <article
                key={vehicle.id}
                className="h-[306px] w-56 overflow-hidden rounded-[18px] bg-[#213847]"
              >
                <div className="grid h-[148px] place-items-center bg-white">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-[110px] w-[190px] object-contain"
                  />
                </div>

                <div className="flex h-[158px] flex-col px-4 py-2.5">
                  <h3 className="text-[13px] font-black text-white">
                    {vehicle.name}
                  </h3>

                  <p className="mt-1 flex items-center gap-1 text-[11px] text-[#d9e3e7]">
                    <Users size={13} className="text-[#00d1a3]" />
                    {vehicle.passengers} Passengers
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-[11px] text-[#d9e3e7]">
                    <MapPin size={13} className="text-[#00d1a3]" />
                    {vehicle.location}
                  </p>

                  <h4 className="mt-2 text-[11px] font-black text-[#00d1a3]">
                    LKR {vehicle.price.toLocaleString()}
                  </h4>

                  <button
                    onClick={() => openBooking(vehicle.id)}
                    className="mt-auto h-[31px] rounded-[22px] bg-[#00c99b] font-black text-white hover:bg-[#00b98f]"
                  >
                    Book Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

function getBagCount(bagsText) {
  if (bagsText.includes("10+")) return 10;
  if (bagsText.includes("6 to 10")) return 10;
  if (bagsText.includes("3 to 5")) return 5;
  if (bagsText.includes("1 to 2")) return 2;

  const number = Number(bagsText);
  return Number.isNaN(number) ? 0 : number;
}