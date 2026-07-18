import { useState } from "react";
import ConversationItem from "../messages/ConversationItem";
import ChatWindow from "../messages/ChatWindow";

export default function MessagesSection() {
  const conversations = [
    {
      id: 1,
      name: "John Smith",
      time: "10:30 AM",
      lastMessage: "Can I check in early?",
      messages: [
        { id: 1, sender: "guest", text: "Hello!" },
        { id: 2, sender: "guest", text: "Can I check in early?" },
      ],
    },
    {
      id: 2,
      name: "Sarah Wilson",
      time: "Yesterday",
      lastMessage: "Thank you!",
      messages: [
        { id: 1, sender: "guest", text: "Thank you for everything!" },
      ],
    },
  ];

  const [selectedConversation, setSelectedConversation] =
    useState(conversations[0]);

  return (
    <section
      id="messages"
      className="bg-[#253745] rounded-2xl border border-[#2F4156] p-8 mb-10"
    >
      <h2 className="text-3xl font-bold text-white mb-2">
        Messages
      </h2>

      <p className="text-gray-400 mb-8">
        Chat with your guests.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Left */}
        <div className="space-y-3 overflow-y-auto">
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              selected={
                selectedConversation?.id === conversation.id
              }
              onSelect={setSelectedConversation}
            />
          ))}
        </div>

        {/* Right */}
        <div className="lg:col-span-2 bg-[#2F4156] rounded-xl border border-[#4A5C6A] p-6">
          <ChatWindow conversation={selectedConversation} />
        </div>
      </div>
    </section>
  );
}