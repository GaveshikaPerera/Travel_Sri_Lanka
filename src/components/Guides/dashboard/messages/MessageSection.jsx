import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";
import MessageBubble from "./MessageBubble";
import { dummyMessages } from "./dummyMessages";

export default function MessageSection() {
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const message = {
      id: Date.now(),
      sender: "guide",
      name: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="bg-[#243342] rounded-2xl shadow-lg overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between px-6 py-5 border-b border-[#314158]">

        <div className="flex items-center gap-4">

          <FaUserCircle className="text-5xl text-[#00C896]" />

          <div>

            <h2 className="text-white text-xl font-semibold">
              John Smith
            </h2>

            <p className="text-green-400 text-sm">
              ● Online
            </p>

          </div>

        </div>

      </div>

      {/* Messages */}

      <div className="h-[500px] overflow-y-auto p-6 bg-[#1C2A38]">

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        <div ref={messagesEndRef} />

      </div>

      {/* Input */}

      <div className="border-t border-[#314158] p-5 bg-[#243342]">

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            className="flex-1 bg-[#314158] rounded-xl px-5 py-4 text-white outline-none placeholder:text-gray-400"
          />

          <button
            onClick={handleSend}
            className="bg-[#00C896] hover:bg-[#00b383] px-6 rounded-xl text-white flex items-center justify-center transition"
          >
            <FaPaperPlane size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}