import { useParams, useNavigate } from "react-router-dom";
import GuideProfile from "../components/GuideProfile";
import guides from "../data/guides";
import { useState } from "react";

export default function GuideMessagePage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [requestSuccess, setRequestSuccess] = useState(false);

  const guide = guides.find(
    (g) => g.id === Number(id)
  );

  if (!guide) {
    return (
      <div className="min-h-screen bg-[#11212D] text-white flex items-center justify-center">
        Guide Not Found
      </div>
    );
  }

  const sendMessage = () => {
    if (!message.trim()) return;

    alert("Message Sent Successfully!");

    setMessage("");
  };

  const completeTripRequest = () => {
    setRequestSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#11212D]">
      

      <div className="grid grid-cols-12 gap-6 p-8">

        {/* LEFT SIDE */}
        <div className="col-span-4">
          <GuideProfile guide={guide} />
        </div>

        {/* CENTER CHAT */}
        <div className="col-span-4">

          <div className="bg-[#314252] rounded-3xl p-6 text-white h-full">

            <div className="mb-6">
              <button
                onClick={() => navigate(`/guide/${guide.id}`)}
                className="text-[#00C896] font-semibold text-lg hover:underline"
              >
                ← Back to {guide.name}'s Profile
              </button>
            </div>

            <div className="space-y-6">

              {/* GUIDE MESSAGE */}
              <div className="flex gap-3">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-10 h-10 rounded-full"
                />

                <div className="bg-[#46596B] p-4 rounded-3xl max-w-[300px]">
                  Hello! Thank you for reaching out.
                  I'd be happy to help plan your
                  trip in Sri Lanka. How can I
                  assist you today?
                </div>
              </div>

              {/* USER MESSAGE */}
              <div className="flex justify-end">
                <div className="bg-[#00C896] p-4 rounded-3xl max-w-[300px]">
                  Hi {guide.name}, I would like
                  a 5-day tour around Sri Lanka.
                </div>
              </div>

              {/* GUIDE REPLY */}
              <div className="flex gap-3">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-10 h-10 rounded-full"
                />

                <div className="bg-[#46596B] p-4 rounded-3xl max-w-[300px]">
                  Absolutely! I'd be delighted to
                  create a custom itinerary for
                  you. Please share your travel
                  dates and preferred destinations.
                </div>
              </div>

            </div>

            {/* MESSAGE BOX */}
            <div className="mt-8 bg-[#46596B] rounded-3xl p-4">

              <h3 className="mb-3 font-medium">
                Type Your Message
              </h3>

              <textarea
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-transparent outline-none resize-none"
              />

              <div className="flex justify-end mt-4">

                <button
                  onClick={sendMessage}
                  className="bg-[#00C896] px-6 py-2 rounded-full hover:bg-[#00b786]"
                >
                  Send Message
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-4">

          <div className="h-full flex items-center justify-center">

            {!requestSuccess ? (

              <button
                onClick={completeTripRequest}
                className="bg-[#00C896] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#00b786]"
              >
                Approve Trip Request
              </button>

            ) : (

              <div className="text-center">

                <div className="w-48 h-48 bg-[#00C896] rounded-full flex items-center justify-center mx-auto">

                  <span className="text-[90px] text-[#11212D]">
                    ✓
                  </span>

                </div>

                <h2 className="text-white text-4xl font-bold mt-8">
                  Request Successfully
                </h2>

              </div>

            )}

          </div>

        </div>

      </div>
    </div>
  );
}