import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaCircle } from "react-icons/fa";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({
  selectedConversation,
  setSelectedConversation,
}) {
  const [messageText, setMessageText] = useState("");
  const messagesEndRef = useRef(null);

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [selectedConversation]);

  if (!selectedConversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#1B2836]">
        <p className="text-gray-400 text-lg">
          Select a traveller to start chatting
        </p>
      </div>
    );
  }

  const handleSend = () => {
    if (messageText.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      sender: "guide",
      text: messageText,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setSelectedConversation({
      ...selectedConversation,
      lastMessage: messageText,
      messages: [...selectedConversation.messages, newMessage],
    });

    setMessageText("");
  };

  return (
    <div className="flex-1 flex flex-col bg-[#1B2836]">

      {/* Header */}

      <div className="h-20 px-6 border-b border-[#314158] flex items-center justify-between">

        <div className="flex items-center gap-4">

          <img
            src={selectedConversation.profile}
            alt={selectedConversation.traveller}
            className="w-12 h-12 rounded-full"
          />

          <div>

            <h2 className="text-white text-lg font-semibold">
              {selectedConversation.traveller}
            </h2>

            <div className="flex items-center gap-2">

              <FaCircle
                size={10}
                className={
                  selectedConversation.online
                    ? "text-green-400"
                    : "text-gray-500"
                }
              />

              <span className="text-sm text-gray-400">
                {selectedConversation.online
                  ? "Online"
                  : "Offline"}
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-6">

        {selectedConversation.messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        <div ref={messagesEndRef}></div>

      </div>

      {/* Input */}

      <div className="p-5 border-t border-[#314158] bg-[#243342]">

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Type your message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            className="flex-1 bg-[#314158] rounded-xl px-5 py-3 text-white outline-none placeholder-gray-400"
          />

          <button
            onClick={handleSend}
            className="bg-[#00C896] hover:bg-[#00b383] px-6 rounded-xl text-white transition"
          >
            <FaPaperPlane />
          </button>

        </div>

      </div>

    </div>
  );
}