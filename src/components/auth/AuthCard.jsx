export default function AuthCard({ children, className = "" }) {
  return (
    <div
      className={`
        bg-[#253745]
        rounded-[30px]
        shadow-xl
        p-8
        w-full
        max-w-[560px]
        h-[640px]
        overflow-y-auto
        ${className}
      `}
    >
      {children}
    </div>
  );
}