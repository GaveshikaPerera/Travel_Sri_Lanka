export default function GuideTours() {

  const tours = [1, 2, 3];

  return (
    <div className="bg-[#314252] rounded-3xl p-5">

      <h2 className="text-3xl font-bold mb-5">
        Tours by Praveen Mendis
      </h2>

      <div className="grid grid-cols-3 gap-3">

        {tours.map((tour) => (
          <div
            key={tour}
            className="bg-[#223344] rounded-xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5"
              alt=""
              className="h-36 w-full object-cover"
            />

            <div className="p-2">
              <p className="text-sm">
                Sigiriya Cultural Tour
              </p>

              <p className="text-[#00C896]">
                Rs. 5000/day
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}