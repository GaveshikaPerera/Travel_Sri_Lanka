import { FaUserEdit, FaCamera, FaCheckCircle } from "react-icons/fa";

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="bg-[#253745] rounded-2xl border border-[#2F4156] p-8 mb-10"
    >
      {/* Section Title */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">
            My Profile
          </h2>

          <p className="text-gray-400 mt-1">
            Manage your personal information
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#00C896] hover:bg-[#00b383] px-5 py-3 rounded-xl text-white transition">
          <FaUserEdit />
          Edit Profile
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left Card */}

        <div className="bg-[#2F4156] rounded-2xl p-6 flex flex-col items-center">

          <img
            src="https://i.pravatar.cc/250?img=12"
            alt="Owner"
            className="w-36 h-36 rounded-full border-4 border-[#00C896]"
          />

          <button className="mt-4 flex items-center gap-2 bg-[#253745] hover:bg-[#00C896] px-4 py-2 rounded-lg transition text-white">
            <FaCamera />
            Change Photo
          </button>

          <h3 className="text-2xl text-white font-semibold mt-6">
            John Perera
          </h3>

          <div className="flex items-center gap-2 mt-2">
            <FaCheckCircle className="text-[#00C896]" />

            <span className="text-[#00C896]">
              Verified Hotel Partner
            </span>
          </div>

        </div>

        {/* Right */}

        <div className="lg:col-span-2 bg-[#2F4156] rounded-2xl p-8">

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <label className="text-gray-400 text-sm">
                First Name
              </label>

              <p className="text-white text-lg mt-2">
                John
              </p>

            </div>

            <div>

              <label className="text-gray-400 text-sm">
                Last Name
              </label>

              <p className="text-white text-lg mt-2">
                Perera
              </p>

            </div>

            <div>

              <label className="text-gray-400 text-sm">
                Email
              </label>

              <p className="text-white text-lg mt-2">
                john@gmail.com
              </p>

            </div>

            <div>

              <label className="text-gray-400 text-sm">
                Phone Number
              </label>

              <p className="text-white text-lg mt-2">
                +94 71 234 5678
              </p>

            </div>

            <div>

              <label className="text-gray-400 text-sm">
                NIC
              </label>

              <p className="text-white text-lg mt-2">
                200012345678
              </p>

            </div>

            <div>

              <label className="text-gray-400 text-sm">
                Registration No
              </label>

              <p className="text-white text-lg mt-2">
                BR-2026-001
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}