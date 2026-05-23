import Navbar from "../components/Navbar";

function MessagePage() {
  return (
    <div className="bg-[#0f1b2a] min-h-screen">

      <Navbar />

      <div className="max-w-[1200px] mx-auto py-10 px-6">

        <div className="bg-[#243447] rounded-3xl h-[700px] grid grid-cols-3 overflow-hidden border border-[#3a4b5c]">

          {/* LEFT SIDEBAR */}
          <div className="border-r border-[#3a4b5c] p-5">

            <h2 className="text-white text-xl font-bold mb-6">
              Messages
            </h2>

            <div className="bg-[#1a2835] p-4 rounded-2xl flex items-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h3 className="text-white font-semibold">
                  Praveen Mendis
                </h3>

                <p className="text-gray-400 text-sm">
                  Online
                </p>
              </div>

            </div>

          </div>

          {/* CHAT AREA */}
          <div className="col-span-2 flex flex-col">

            <div className="border-b border-[#3a4b5c] p-5">

              <h2 className="text-white text-xl font-bold">
                Praveen Mendis
              </h2>

            </div>

            <div className="flex-1 p-6 space-y-4 overflow-y-auto">

              <div className="bg-[#1a2835] text-white p-4 rounded-2xl w-fit max-w-[400px]">
                Hello! Welcome to Sri Lanka Tours.
              </div>

              <div className="bg-cyan-400 text-black p-4 rounded-2xl w-fit ml-auto max-w-[400px]">
                I want to book a tour guide.
              </div>

            </div>

            <div className="p-5 border-t border-[#3a4b5c] flex gap-4">

              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-[#1a2835] rounded-full px-5 py-3 text-white outline-none"
              />

              <button className="bg-cyan-400 px-6 rounded-full font-semibold">
                Send
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MessagePage;