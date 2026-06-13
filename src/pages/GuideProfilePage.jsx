import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import GuideProfile from "../components/GuideProfile";
import Reviews from "../components/Reviews";
import TripRequestForm from "../components/TripRequestForm";

import guides from "../data/guides";

export default function GuideProfilePage() {
  const { id } = useParams();

  const guide = guides.find(
    (g) => g.id === Number(id)
  );

  if (!guide) {
    return (
      <div className="text-white p-10">
        Guide not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#11212D]">

      <Navbar />

      <div className="px-8 py-8">

        <div className="grid grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="col-span-4">
            <GuideProfile guide={guide} />
          </div>

          {/* CENTER */}
          <div className="col-span-5">

            <div className="bg-[#314252] rounded-3xl p-6 text-white">

              <h2 className="text-3xl font-bold mb-6">
                Tours by {guide.name}
              </h2>

              <div className="grid grid-cols-3 gap-4">

                {[1, 2, 3].map((tour) => (
                  <div
                    key={tour}
                    className="bg-[#1A2B38] rounded-xl overflow-hidden"
                  >
                    <img
                      src={guide.image}
                      alt=""
                      className="h-40 w-full object-cover"
                    />

                    <div className="p-3">

                      <h3 className="text-sm">
                        Cultural Heritage Tour
                      </h3>

                      <p className="text-[#00C896] mt-2">
                        Rs. {guide.price}
                      </p>

                    </div>
                  </div>
                ))}

              </div>

            </div>

            <Reviews />

          </div>

          {/* RIGHT */}
          <div className="col-span-3">
            <TripRequestForm />
          </div>

        </div>

      </div>

    </div>
  );
}