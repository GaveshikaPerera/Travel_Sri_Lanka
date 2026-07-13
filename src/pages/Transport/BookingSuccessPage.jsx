import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";

import Navbar from "../../components/Navbar";
import VehicleInfoPanel from "../../components/Transport/VehicleInfoPanel";

import { vehicles } from "../../data/vehicles";

export default function BookingSuccessPage() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const vehicle = vehicles.find((item) => item.id === Number(id)) || vehicles[0];

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      side: "left",
      text: "Hello! Thank you for reaching out. I will be happy to help plan your trip in Sri Lanka. How can I assist you today?",
      time: "10:30 AM",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        side: "right",
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setMessage("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          side: "left",
          text: "Thank you for your message. I can help with this booking. Please share your travel time and any special requirements.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 900);
  };

  return (
    <main className="min-h-screen bg-[#071923] text-white">
      <Navbar />

      <section className="grid grid-cols-[1.05fr_1.05fr_.92fr] gap-6 bg-gradient-to-r from-[#071923] to-[#183142] px-10 py-6 max-xl:grid-cols-1 max-lg:px-5">
        <VehicleInfoPanel
          vehicle={vehicle}
          buttonText="Back to Profile"
          onButtonClick={() => navigate("/transport")}
        />

        <section className="rounded-3xl bg-[#2d4250] p-6">
          <div className="flex items-center gap-2 text-sm">
            <ArrowLeft size={18} />
            <span>Message Vehicle Owner</span>
          </div>

          <div className="my-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-[#b9c6cc]">
            <span className="h-px bg-[#8ea0aa]"></span>
            <small>Today</small>
            <span className="h-px bg-[#8ea0aa]"></span>
          </div>

          <div className="max-h-[390px] overflow-y-auto pr-1">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`my-4 w-[62%] rounded-[22px] p-3.5 text-[11px] ${
                  item.side === "right"
                    ? "ml-auto bg-[#0aa889]"
                    : "bg-[#405564]"
                }`}
              >
                <p>{item.text}</p>
                <small className="block text-right text-[#d8e1e4]">
                  {item.time}
                </small>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl bg-[#405564] p-5">
            <h4 className="mb-3 font-black">Type Your message</h4>

            <textarea
              placeholder="Write your message here..."
              value={message}
              maxLength={1000}
              onChange={(e) => setMessage(e.target.value)}
              className="h-[95px] w-full resize-none rounded-[22px] border border-white/10 bg-[#425967] p-4 text-sm text-white outline-none placeholder:text-[#b9c6cc]"
            />

            <div className="mt-2 flex items-center gap-3 text-[10px]">
              <small>{message.length}/1000</small>

              <button
                onClick={sendMessage}
                className="ml-auto flex h-6 items-center gap-1.5 rounded-full bg-[#00c99b] px-4 text-white"
              >
                Send Message <Send size={12} />
              </button>
            </div>
          </div>

          <small className="mt-3 block text-[#c8d4da]">
            Vehicle Owner typically replies within the few hours
          </small>
        </section>

        <aside className="grid place-content-center text-center">
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
      </section>
    </main>
  );
}