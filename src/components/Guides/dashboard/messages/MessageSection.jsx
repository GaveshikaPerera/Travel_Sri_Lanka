import { useState } from "react";

import ConversationList from "./ConversationList";
import ChatWindow from "./ChatWindow";

import { conversations } from "./dummyConversations";

export default function MessageSection() {
  const [conversationList, setConversationList] =
    useState(conversations);

  const [selectedConversation, setSelectedConversation] =
    useState(conversations[0]);

  // Update selected conversation and list together
  const updateSelectedConversation = (updatedConversation) => {
    setSelectedConversation(updatedConversation);

    setConversationList((prev) =>
      prev.map((conversation) =>
        conversation.id === updatedConversation.id
          ? updatedConversation
          : conversation
      )
    );
  };

  return (
    <div className="bg-[#243342] rounded-2xl overflow-hidden shadow-lg h-[700px] flex">

      {/* Left Panel */}

      <ConversationList
        conversations={conversationList}
        selectedConversation={selectedConversation}
        setSelectedConversation={setSelectedConversation}
      />

      {/* Right Panel */}

      <ChatWindow
        selectedConversation={selectedConversation}
        setSelectedConversation={updateSelectedConversation}
      />

    </div>
  );
}