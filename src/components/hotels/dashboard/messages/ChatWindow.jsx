import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatWindow({ conversation }) {
  const [message, setMessage] = useState("");

  if (!conversation) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Select a conversation.
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-[#4A5C6A] pb-4">
        <h2 className="text-2xl font-bold text-white">
          {conversation.name}
        </h2>

        <p className="text-gray-400">
          Guest Conversation
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-6 space-y-4">
        {conversation.messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[70%] px-4 py-3 rounded-xl ${
              msg.sender === "guest"
                ? "bg-[#2F4156] text-white"
                : "bg-[#00C896] text-white ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <form
        className="flex gap-3 mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          setMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-[#2F4156] border border-[#4A5C6A] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00C896]"
        />

        <button
          className="bg-[#00C896] hover:bg-[#00b383] px-5 rounded-xl text-white transition"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}