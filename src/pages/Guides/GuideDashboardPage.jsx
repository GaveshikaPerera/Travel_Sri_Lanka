import Navbar from "../../components/Navbar";

export default function GuideDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#081923] via-[#0f2735] to-[#22384a] text-white">
      
      <Navbar />

      <div className="flex">

        {/* MAIN CONTENT */}
        <div className="flex-1 p-8">

          <h1 className="text-4xl font-bold">
            Tour Guide Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome back, Praveen!
          </p>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-6 mt-8">

            <div className="bg-[#324556] rounded-3xl p-6">
              <h3>Upcoming Tours</h3>
              <p className="text-4xl font-bold mt-3">6</p>
            </div>

            <div className="bg-[#324556] rounded-3xl p-6">
              <h3>Total Bookings</h3>
              <p className="text-4xl font-bold mt-3">20</p>
            </div>

            <div className="bg-[#324556] rounded-3xl p-6">
              <h3>Total Earnings</h3>
              <p className="text-3xl font-bold mt-3">
                LKR 50,000
              </p>
            </div>

            <div className="bg-[#324556] rounded-3xl p-6">
              <h3>Average Rating</h3>
              <p className="text-4xl font-bold mt-3">4.9</p>
            </div>

          </div>

          {/* BOOKINGS + EARNINGS */}
          <div className="grid grid-cols-2 gap-6 mt-8">

            <div className="bg-[#324556] rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-4">
                Upcoming Bookings
              </h2>

              {[1,2,3].map((item)=>(
                <div
                  key={item}
                  className="border border-[#00C896] rounded-2xl p-4 mb-4"
                >
                  <h3 className="font-semibold">
                    Kandy Cultural Tour
                  </h3>

                  <p className="text-gray-400">
                    2 Adults • 1 Day Tour
                  </p>
                </div>
              ))}
            </div>

            <div>

              <div className="bg-[#324556] rounded-3xl p-6">

                <h2 className="text-2xl font-bold mb-4">
                  Earnings Overview
                </h2>

                <div className="h-56 bg-white rounded-xl"></div>

              </div>

              <div className="bg-[#324556] rounded-3xl p-6 mt-6">

                <h2 className="text-2xl font-bold">
                  Profile Completion
                </h2>

                <div className="w-full h-3 bg-gray-600 rounded-full mt-4">
                  <div className="w-[80%] h-full bg-[#00C896] rounded-full"></div>
                </div>

                <p className="mt-3">80% Completed</p>

              </div>

            </div>

          </div>

          {/* TOUR MANAGEMENT */}

          <section className="mt-12">

            <h2 className="text-4xl font-bold mb-6">
              Tour Management
            </h2>

            <div className="grid grid-cols-4 gap-6">

              <div className="bg-[#324556] rounded-3xl p-6 text-center">
                <p>Total Tours</p>
                <h3 className="text-4xl font-bold mt-3">20</h3>
              </div>

              <div className="bg-[#324556] rounded-3xl p-6 text-center">
                <p>Active Tours</p>
                <h3 className="text-4xl font-bold mt-3">10</h3>
              </div>

              <div className="bg-[#324556] rounded-3xl p-6 text-center">
                <p>Completed Tours</p>
                <h3 className="text-4xl font-bold mt-3">30</h3>
              </div>

              <div className="bg-[#324556] rounded-3xl p-6 text-center">
                <p>Cancelled Tours</p>
                <h3 className="text-4xl font-bold mt-3">4</h3>
              </div>

            </div>

            <div className="bg-[#324556] rounded-3xl p-6 mt-8 overflow-x-auto">

              <table className="w-full">

                <thead>
                  <tr className="text-left">
                    <th>Tour</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  {[1,2,3,4].map((item)=>(
                    <tr key={item}>
                      <td className="py-4">Kandy Tour</td>
                      <td>Kandy</td>
                      <td>LKR 8,000</td>
                      <td className="text-[#00C896]">
                        Active
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </section>

          {/* REVIEWS */}

          <section className="mt-12">

            <h2 className="text-4xl font-bold mb-6">
              Reviews
            </h2>

            <div className="grid grid-cols-2 gap-6">

              {[1,2,3,4].map((item)=>(
                <div
                  key={item}
                  className="bg-[#324556] rounded-3xl p-6"
                >
                  <h3 className="font-bold">
                    Richard ⭐ 5.0
                  </h3>

                  <p className="text-gray-300 mt-2">
                    Excellent guide and very helpful.
                  </p>
                </div>
              ))}

            </div>

          </section>

          {/* MESSAGES */}

          <section className="mt-12">

            <h2 className="text-4xl font-bold mb-6">
              Messages
            </h2>

            <div className="grid grid-cols-3 gap-6">

              <div className="bg-[#324556] rounded-3xl p-6">
                Client List
              </div>

              <div className="bg-[#324556] rounded-3xl p-6 col-span-2">
                Chat Window
              </div>

            </div>

          </section>

          {/* CALENDAR */}

          <section className="mt-12 mb-12">

            <h2 className="text-4xl font-bold mb-6">
              Availability Calendar
            </h2>

            <div className="bg-[#324556] rounded-3xl p-8">
              Calendar Section
            </div>

          </section>

        </div>

        {/* SIDEBAR */}

        <div className="w-72 bg-[#223344] p-6">

          <div className="text-center">

            <img
              src="https://i.pravatar.cc/120"
              className="w-20 h-20 rounded-full mx-auto"
            />

            <h3 className="mt-3 font-bold">
              Tour Guide
            </h3>

            <p className="text-gray-400">
              Praveen Mendis
            </p>

          </div>

          <div className="mt-10 space-y-4">

            <div>Dashboard</div>
            <div>Tour Management</div>
            <div>Reviews</div>
            <div>Messages</div>
            <div>Availability Calendar</div>
            <div>Profile</div>
            <div>Settings</div>

          </div>

        </div>

      </div>

    </div>
  );
}