import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import VehicleSummaryCard from "../../components/Transport/VehicleSummaryCard";
import ChatBox from "../../components/Transport/ChatBox";
import BookingSuccessCard from "../../components/Transport/BookingSuccessCard";
import { vehicles } from "../../data/vehicles";

export default function BookingSuccessPage() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const vehicle = vehicles.find((item) => item.id === Number(id)) || vehicles[0];

  return (
    <main className="min-h-screen bg-[#071923] text-white">
      

      <section className="grid grid-cols-[1.05fr_1.05fr_.92fr] gap-6 bg-gradient-to-r from-[#071923] to-[#183142] px-10 py-6 max-xl:grid-cols-1 max-lg:px-5">
        <VehicleSummaryCard
          vehicle={vehicle}
          buttonText="Back to Profile"
          onButtonClick={() => navigate("/transport")}
        />

        <ChatBox />

        <BookingSuccessCard params={params} vehicle={vehicle} />
      </section>
    </main>
  );
}