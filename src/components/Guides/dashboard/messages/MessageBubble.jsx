export default function MessageBubble({ message }) {
  const isGuide = message.sender === "guide";

  return (
    <div
      className={`flex mb-4 ${
        isGuide ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-3 shadow-md ${
          isGuide
            ? "bg-[#00C896] text-white rounded-br-md"
            : "bg-[#314158] text-white rounded-bl-md"
        }`}
      >
        <p className="text-sm leading-6">{message.text}</p>

        <p className="text-[11px] text-right mt-2 opacity-70">
          {message.time}
        </p>
      </div>
    </div>
  );
}