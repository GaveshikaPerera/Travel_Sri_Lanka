import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import VehicleSummaryCard from "../../components/Transport/VehicleSummaryCard";
import OwnerDetailsCard from "../../components/Transport/OwnerDetailsCard";
import SelectedVehicleForm from "../../components/Transport/SelectedVehicleForm";
import { vehicles } from "../../data/vehicles";

export default function VehicleDetailsPage() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const vehicle = vehicles.find((item) => item.id === Number(id)) || vehicles[0];

  const [booking, setBooking] = useState({
    pickupDate: params.get("pickupDate") || "",
    returnDate: "",
    passengers: params.get("passengers")
      ? `${params.get("passengers")} Passengers`
      : `${vehicle.passengers} Passengers`,
    bags: params.get("bags") || `${vehicle.bags} Bags`,
    ac: vehicle.ac ? "AC" : "Non AC",
    pickupLocation: params.get("pickupLocation") || vehicle.location,
  });

  const updateBooking = (name, value) => {
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const goSuccess = () => {
    const query = new URLSearchParams(booking);
    navigate(`/transport/booking-success/${vehicle.id}?${query.toString()}`);
  };

  return (
    <main className="min-h-screen bg-[#071923] text-white">
      

      <section className="grid grid-cols-[1.05fr_1.05fr_.92fr] gap-6 bg-gradient-to-r from-[#071923] to-[#183142] px-10 py-6 max-xl:grid-cols-1 max-lg:px-5">
        <VehicleSummaryCard
          vehicle={vehicle}
          buttonText="Message Owner"
          onButtonClick={goSuccess}
        />

        <OwnerDetailsCard vehicle={vehicle} />

        <SelectedVehicleForm
          booking={booking}
          updateBooking={updateBooking}
          onBook={goSuccess}
        />
      </section>
    </main>
  );
}