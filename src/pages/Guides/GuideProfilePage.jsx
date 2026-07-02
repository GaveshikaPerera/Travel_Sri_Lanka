import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar.jsx";
import GuideProfile from "../../components/Guides/GuideProfile.jsx";
import Reviews from "../../components/Guides/Reviews.jsx";
import TripRequestForm from "../../components/Guides/TripRequestForm.jsx";

import guides from "../../data/guides.js";

import sigiriya from "../assets/sigiriya.jpg";
import yala from "../assets/yala.jpg";
import ella from "../assets/ella.jpg";

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

  const tours = [
    {
      name: "Sigiriya Heritage Tour",
      image: sigiriya,
      price: 7500,
    },
    {
      name: "Yala Safari Adventure",
      image: yala,
      price: 8500,
    },
    {
      name: "Ella Scenic Journey",
      image: ella,
      price: 7000,
    },
  ];

  return (
    <div className="min-h-screen bg-[#11212D]">

      

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

                {tours.map((tour, index) => (
                  <div
                    key={index}
                    className="bg-[#1A2B38] rounded-xl overflow-hidden hover:scale-105 duration-300"
                  >
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="h-40 w-full object-cover"
                    />

                    <div className="p-3">

                      <h3 className="text-sm font-semibold">
                        {tour.name}
                      </h3>

                      <p className="text-[#00C896] mt-2 font-bold">
                        Rs. {tour.price}
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