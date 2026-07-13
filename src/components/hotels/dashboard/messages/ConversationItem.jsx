export default function ConversationItem({
  conversation,
  selected,
  onSelect,
}) {
  return (
    <button
      onClick={() => onSelect(conversation)}
      className={`w-full text-left p-4 rounded-xl transition mb-3 border
      ${
        selected
          ? "bg-[#00C896]/20 border-[#00C896]"
          : "bg-[#2F4156] border-[#4A5C6A] hover:border-[#00C896]"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-white font-semibold">
          {conversation.name}
        </h3>

        <span className="text-xs text-gray-400">
          {conversation.time}
        </span>
      </div>

      <p className="text-gray-400 text-sm mt-2 truncate">
        {conversation.lastMessage}
      </p>
    </button>
  );
}