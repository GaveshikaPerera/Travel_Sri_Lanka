import { FaCircle } from "react-icons/fa";

export default function ConversationList({
  conversations,
  selectedConversation,
  setSelectedConversation,
}) {
  return (
    <div className="w-[320px] bg-[#243342] border-r border-[#314158] flex flex-col">

      {/* Header */}
      <div className="p-5 border-b border-[#314158]">

        <h2 className="text-white text-2xl font-bold">
          Messages
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Traveller Conversations
        </p>

      </div>

      {/* Search */}

      <div className="p-4">

        <input
          type="text"
          placeholder="Search traveller..."
          className="w-full bg-[#314158] rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none"
        />

      </div>

      {/* Conversation List */}

      <div className="flex-1 overflow-y-auto">

        {conversations.map((conversation) => (

          <button
            key={conversation.id}
            onClick={() => setSelectedConversation(conversation)}
            className={`w-full p-4 flex items-center gap-4 transition duration-200
            ${
              selectedConversation?.id === conversation.id
                ? "bg-[#00C896]"
                : "hover:bg-[#314158]"
            }`}
          >

            {/* Profile */}

            <div className="relative">

              <img
                src={conversation.profile}
                alt={conversation.traveller}
                className="w-14 h-14 rounded-full object-cover"
              />

              {conversation.online && (
                <FaCircle
                  size={10}
                  className="absolute bottom-0 right-0 text-green-400 bg-[#243342] rounded-full"
                />
              )}

            </div>

            {/* Details */}

            <div className="flex-1 text-left">

              <div className="flex justify-between">

                <h3 className="text-white font-semibold">
                  {conversation.traveller}
                </h3>

                <span className="text-xs text-gray-400">
                  {conversation.time}
                </span>

              </div>

              <p className="text-gray-400 text-sm truncate mt-1">
                {conversation.lastMessage}
              </p>

            </div>

          </button>

        ))}

      </div>

    </div>
  );
}