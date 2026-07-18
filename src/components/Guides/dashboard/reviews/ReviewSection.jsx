import {
  FaStar,
  FaUserCircle,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    traveller: "John Smith",
    rating: 5,
    date: "12 July 2026",
    comment:
      "Amazing guide! Very friendly and knowledgeable. Highly recommended.",
  },
  {
    id: 2,
    traveller: "Emma Brown",
    rating: 4,
    date: "08 July 2026",
    comment:
      "Very professional guide. The trip was well organized and enjoyable.",
  },
  {
    id: 3,
    traveller: "David Silva",
    rating: 5,
    date: "02 July 2026",
    comment:
      "Excellent experience! We visited many beautiful places. Thank you!",
  },
];

export default function ReviewSection() {
  const averageRating =
    (
      reviews.reduce((sum, review) => sum + review.rating, 0) /
      reviews.length
    ).toFixed(1);

  return (
    <div className="bg-[#243342] rounded-2xl p-8 shadow-lg">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Traveller Reviews
          </h2>

          <p className="text-gray-400 mt-2">
            Ratings and feedback from travellers.
          </p>

        </div>

        <div className="text-center">

          <div className="text-5xl font-bold text-white">
            {averageRating}
          </div>

          <div className="flex justify-center mt-2">

            {[1,2,3,4,5].map((star)=>(
              <FaStar
                key={star}
                className="text-yellow-400"
              />
            ))}

          </div>

          <p className="text-gray-400 mt-2">
            {reviews.length} Reviews
          </p>

        </div>

      </div>

      {/* Reviews */}

      <div className="space-y-6">

        {reviews.map((review)=>(

          <div
            key={review.id}
            className="bg-[#314158] rounded-xl p-6 hover:bg-[#394d64] transition"
          >

            <div className="flex justify-between">

              <div className="flex gap-4">

                <FaUserCircle
                  className="text-5xl text-[#00C896]"
                />

                <div>

                  <h3 className="text-white text-lg font-semibold">
                    {review.traveller}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {review.date}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-1">

                {[...Array(review.rating)].map((_, index)=>(

                  <FaStar
                    key={index}
                    className="text-yellow-400"
                  />

                ))}

              </div>

            </div>

            <p className="text-gray-300 mt-5 leading-7">
              {review.comment}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}