import { useState } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    comment:
      "Amazing hotel with friendly staff. The rooms were clean and the food was excellent.",
  },
  {
    id: 2,
    name: "Emily Johnson",
    rating: 4,
    comment:
      "Very comfortable stay. Great location and beautiful surroundings.",
  },
];

const ReviewSection = () => {
  const [review, setReview] = useState("");

  return (
    <div className="mt-10 grid lg:grid-cols-2 gap-6">
      {/* Write Review */}
      <div className="bg-[#253745] rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">
          Write Your Review
        </h2>

        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} className="text-yellow-400 text-xl" />
          ))}
        </div>

        <textarea
          rows="5"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Share your experience..."
          className="w-full rounded-lg bg-[#11212D] p-3 text-white outline-none"
        />

        <button
          className="mt-4 bg-[#00C896] hover:bg-[#00b383] px-6 py-2 rounded-lg text-white font-semibold"
        >
          Submit Review
        </button>
      </div>

      {/* Reviews */}
      <div className="bg-[#253745] rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">
          Traveler Reviews
        </h2>

        {reviews.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-700 pb-4 mb-4 last:border-none"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">{item.name}</h3>

              <div className="flex">
                {[...Array(item.rating)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-400 text-sm"
                  />
                ))}
              </div>
            </div>

            <p className="text-gray-400 mt-2 text-sm">
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;