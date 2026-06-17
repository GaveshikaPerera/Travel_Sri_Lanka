import guide1 from "../../assets/guide1.jpg";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Richard",
      country: "USA",
      rating: 5.0,
      time: "2 Weeks ago",
      image: guide1,
      review:
        "We chose our own itinerary for 4 days of touring in south Sri Lanka but checked some of our route and thinking by email with Praveen. He answered our questions quickly and helpfully.",
    },
    {
      id: 2,
      name: "Richard",
      country: "USA",
      rating: 5.0,
      time: "2 Weeks ago",
      image: guide1,
      review:
        "Excellent guide. Very knowledgeable about history, culture and local attractions. Highly recommended.",
    },
    {
      id: 3,
      name: "Richard",
      country: "USA",
      rating: 5.0,
      time: "2 Weeks ago",
      image: guide1,
      review:
        "Amazing experience. Friendly, punctual and professional throughout the trip.",
    },
  ];

  return (
    <div className="bg-[#314252] rounded-3xl p-6 mt-5 text-white">
      <h2 className="text-3xl font-bold mb-6">
        Reviews
      </h2>

      {reviews.map((review) => (
        <div
          key={review.id}
          className="border-b border-gray-500 py-5"
        >
          <div className="flex gap-4">

            <img
              src={review.image}
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />

            <div className="flex-1">

              <div className="flex justify-between">

                <div>
                  <h4 className="font-bold">
                    {review.name}
                  </h4>

                  <p className="text-sm text-gray-300">
                    🇺🇸 {review.country}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-yellow-400">
                    ⭐ {review.rating}
                  </p>

                  <p className="text-xs text-gray-400">
                    {review.time}
                  </p>
                </div>

              </div>

              <p className="text-gray-300 mt-3 leading-6">
                {review.review}
              </p>

            </div>

          </div>
        </div>
      ))}
    </div>
  );
}