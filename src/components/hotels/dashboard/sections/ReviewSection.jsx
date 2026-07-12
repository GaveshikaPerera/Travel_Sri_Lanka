import ReviewCard from "../reviews/ReviewCard";
import { FaStar } from "react-icons/fa";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      date: "15 July 2026",
      comment:
        "Excellent service and very clean rooms. Staff were extremely friendly.",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      rating: 4,
      date: "18 July 2026",
      comment:
        "Great location with comfortable rooms. Breakfast was delicious.",
    },
    {
      id: 3,
      name: "Michael Brown",
      rating: 5,
      date: "22 July 2026",
      comment:
        "One of the best hotels I stayed in Sri Lanka. Highly recommended.",
    },
  ];

  return (
    <section
      id="reviews"
      className="bg-[#253745] rounded-2xl border border-[#2F4156] p-8 mb-10"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Guest Reviews
        </h2>

        <p className="text-gray-400 mt-1">
          Read feedback from your guests.
        </p>
      </div>

      {/* Rating Summary */}
      <div className="bg-[#2F4156] rounded-xl p-6 border border-[#4A5C6A] flex items-center justify-between mb-8">
        <div>
          <h3 className="text-white text-2xl font-bold">
            4.8 / 5.0
          </h3>

          <p className="text-gray-400">
            Based on 186 guest reviews
          </p>
        </div>

        <div className="flex text-yellow-400 text-2xl gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-5">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))}
      </div>
    </section>
  );
}