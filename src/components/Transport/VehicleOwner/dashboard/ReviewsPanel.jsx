export default function ReviewsPanel({ reviewerImage }) {
  const reviews = [
    "Excellent vehicle and friendly driver. Highly recommended.",
    "Clean vehicle, smooth ride, and quick communication.",
    "Owner replied quickly and helped us arrange airport pickup.",
    "Very professional service. Vehicle was comfortable.",
  ];

  return (
    <section className="mt-7 rounded-2xl bg-[#213847] p-5">
      <h2 className="mb-4 text-2xl font-black text-white">Reviews</h2>

      <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
        {reviews.map((text, index) => (
          <article key={index} className="rounded-2xl bg-[#2d4250] p-4">
            <div className="flex items-center gap-3">
              <img
                src={reviewerImage}
                alt="Reviewer"
                className="h-9 w-9 rounded-full object-cover"
              />
              <strong className="text-white">Richard</strong>
              <span className="ml-auto text-yellow-300">★★★★★</span>
            </div>
            <p className="mt-3 text-sm text-[#d9e3e7]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}