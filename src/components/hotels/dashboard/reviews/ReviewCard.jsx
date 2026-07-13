import { FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
  return (
    <div className="bg-[#2F4156] rounded-xl border border-[#4A5C6A] p-5 hover:border-[#00C896] transition">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-white font-semibold text-lg">
            {review.name}
          </h3>

          <p className="text-gray-400 text-sm">
            {review.date}
          </p>
        </div>

        <div className="flex items-center gap-1 text-yellow-400">
          {[...Array(review.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-300 leading-relaxed">
        {review.comment}
      </p>
    </div>
  );
}