export default function MessageBubble({ message }) {
  const isGuide = message.sender === "guide";

  return (
    <div
      className={`flex mb-5 ${
        isGuide ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-md px-5 py-3 rounded-2xl ${
          isGuide
            ? "bg-[#00C896] text-white"
            : "bg-[#314158] text-white"
        }`}
      >
        <p>{message.text}</p>

        <p className="text-xs opacity-70 mt-2 text-right">
          {message.time}
        </p>
      </div>
    </div>
  );
}