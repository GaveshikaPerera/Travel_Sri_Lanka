import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function GuideDetailsPage() {

  const navigate = useNavigate();

  return (
    <div className="bg-[#0f1b2a] min-h-screen">

      <Navbar />

      <div className="max-w-[1400px] mx-auto px-6 py-8">

        <div className="grid grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="bg-[#243447] rounded-3xl p-6 border border-[#3a4b5c]">

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt=""
              className="w-40 h-40 rounded-full object-cover mx-auto"
            />

            <h1 className="text-white text-2xl font-bold text-center mt-4">
              Praveen Mendis
            </h1>

            <p className="text-cyan-400 text-center mt-2">
              Professional Tour Guide
            </p>

            <div className="mt-6 space-y-3 text-gray-300 text-sm">

              <p>📍 Colombo, Sri Lanka</p>
              <p>🗣 English / Sinhala</p>
              <p>⭐ 4.9 Ratings</p>
              <p>🚗 5 Years Experience</p>

            </div>

            <button
              onClick={() => navigate("/messages")}
              className="w-full mt-8 bg-cyan-400 text-black py-3 rounded-full font-semibold hover:bg-cyan-300"
            >
              Message Guide
            </button>

          </div>

          {/* MIDDLE */}
          <div className="col-span-2 bg-[#243447] rounded-3xl p-6 border border-[#3a4b5c]">

            <h2 className="text-white text-2xl font-bold">
              Travel Experience Details
            </h2>

            <div className="mt-6 space-y-6">

              <div className="bg-[#1a2835] p-5 rounded-2xl">
                <h3 className="text-cyan-400 text-lg font-semibold">
                  Ella Adventure
                </h3>

                <p className="text-gray-300 mt-3 text-sm leading-7">
                  Experience beautiful mountains, waterfalls,
                  tea plantations and train rides in Ella.
                </p>
              </div>

              <div className="bg-[#1a2835] p-5 rounded-2xl">
                <h3 className="text-cyan-400 text-lg font-semibold">
                  Kandy Cultural Tour
                </h3>

                <p className="text-gray-300 mt-3 text-sm leading-7">
                  Visit Temple of the Tooth, cultural dance
                  shows and beautiful lake views.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default GuideDetailsPage;