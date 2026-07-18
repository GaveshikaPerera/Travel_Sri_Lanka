import { Send } from "lucide-react";
import { useState } from "react";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      side: "left",
      text: "Hello! Thank you for reaching out. How can I assist you today?",
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
          text: "Thank you. I can help with this booking. Please share your travel time.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 800);
  };

  return (
    <section className="rounded-3xl bg-[#2d4250] p-6 text-white">
      <h3 className="text-sm">Message Vehicle Owner</h3>

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
              item.side === "right" ? "ml-auto bg-[#0aa889]" : "bg-[#405564]"
            }`}
          >
            <p>{item.text}</p>
            <small className="block text-right text-[#d8e1e4]">{item.time}</small>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-3xl bg-[#405564] p-5">
        <h4 className="mb-3 font-black">Type Your message</h4>

        <textarea
          value={message}
          maxLength={1000}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
          className="h-[95px] w-full resize-none rounded-[22px] border border-white/10 bg-[#425967] p-4 text-sm outline-none placeholder:text-[#b9c6cc]"
        />

        <div className="mt-2 flex items-center text-[10px]">
          <small>{message.length}/1000</small>

          <button
            onClick={sendMessage}
            className="ml-auto flex h-6 items-center gap-1.5 rounded-full bg-[#00c99b] px-4"
          >
            Send Message <Send size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}