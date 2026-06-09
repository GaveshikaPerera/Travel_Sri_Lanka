export default function Reviews() {

  const reviews = [1, 2, 3];

  return (
    <div className="bg-[#314252] rounded-3xl p-5 mt-5">

      <h2 className="text-3xl font-bold mb-4">
        Reviews
      </h2>

      {reviews.map((review) => (
        <div
          key={review}
          className="border-b border-gray-600 py-4"
        >
          <h4 className="font-bold">
            Richard ⭐ 5.0
          </h4>

          <p className="text-gray-300">
            We chose our own itinerary and Praveen
            helped us create an amazing trip.
          </p>
        </div>
      ))}
    </div>
  );
}