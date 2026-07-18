import { FaCamera, FaStar, FaEdit } from "react-icons/fa";
import guideImg from "../../../../assets/guides/guide1.jpg"; // Change to your image

export default function GuideProfile() {
  return (
    <div className="bg-[#243342] rounded-2xl p-8 shadow-lg">

      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-8">
        Guide Profile
      </h2>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Left Side */}
        <div className="flex items-center gap-6">

          {/* Profile Image */}
          <div className="relative">

            <img
              src={guideImg}
              alt="Guide"
              className="w-32 h-32 rounded-full object-cover border-4 border-[#00C896]"
            />

            <button
              className="absolute bottom-1 right-1 w-10 h-10 rounded-full
              bg-[#00C896] hover:bg-[#00b383]
              flex items-center justify-center text-white shadow-lg"
            >
              <FaCamera />
            </button>

          </div>

          {/* Guide Info */}
          <div>

            <h1 className="text-3xl font-bold text-white">
              Kasun Perera
            </h1>

            <p className="text-[#00C896] mt-2">
              Professional Tour Guide
            </p>

            <div className="flex items-center gap-3 mt-4">

              <div className="flex items-center gap-1 text-yellow-400">

                <FaStar />

                <span className="text-white font-semibold">
                  4.9
                </span>

              </div>

              <span className="text-gray-400">
                (125 Reviews)
              </span>

            </div>

            <div className="mt-4">

              <span
                className="px-4 py-2 rounded-full
                bg-green-500/20
                text-green-400
                text-sm"
              >
                ● Available
              </span>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <button
          className="flex items-center gap-3
          bg-[#00C896]
          hover:bg-[#00b383]
          px-6 py-3
          rounded-xl
          text-white
          font-semibold
          h-fit"
        >
          <FaEdit />

          Edit Profile

        </button>

      </div>

      {/* Divider */}

      <div className="border-b border-[#314158] my-10"></div>

      {/* Next Section */}

      {/* Personal Information */}

        <div>

        <h3 className="text-2xl font-semibold text-white mb-6">
            Personal Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* First Name */}
            <div>
            <label className="block text-gray-300 mb-2">
                First Name
            </label>

            <input
                type="text"
                defaultValue="Kasun"
                className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
            />
            </div>

            {/* Last Name */}
            <div>
            <label className="block text-gray-300 mb-2">
                Last Name
            </label>

            <input
                type="text"
                defaultValue="Perera"
                className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
            />
            </div>

            {/* Email */}
            <div>
            <label className="block text-gray-300 mb-2">
                Email
            </label>

            <input
                type="email"
                defaultValue="kasun@gmail.com"
                className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
            />
            </div>

        {/* Phone */}
        <div>
        <label className="block text-gray-300 mb-2">
            Mobile Number
        </label>

        <input
            type="text"
            defaultValue="+94 71 234 5678"
            className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
        />
        </div>

        {/* Country */}
        <div>
        <label className="block text-gray-300 mb-2">
            Country
        </label>

        <input
            type="text"
            defaultValue="Sri Lanka"
            className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
        />
        </div>

        {/* Gender */}
        <div>
        <label className="block text-gray-300 mb-2">
            Gender
        </label>

        <select
            className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
            defaultValue="Male"
        >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
        </select>
        </div>

    </div>

        </div>

        <div className="border-b border-[#314158] my-10"></div>

        {/* ================= Professional Information ================= */}

        <div>

        <h3 className="text-2xl font-semibold text-white mb-6">
            Professional Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Experience */}
            <div>
            <label className="block text-gray-300 mb-2">
                Years of Experience
            </label>

            <input
                type="number"
                defaultValue="8"
                className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
            />
            </div>

            {/* Price */}
            <div>
            <label className="block text-gray-300 mb-2">
                Price Per Day (LKR)
            </label>

            <input
                type="number"
                defaultValue="15000"
                className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
            />
            </div>

            {/* Languages */}
            <div>
            <label className="block text-gray-300 mb-2">
                Languages
            </label>

            <select className="w-full bg-[#314158] text-white rounded-xl px-4 py-3">
                <option>English, Sinhala</option>
                <option>English</option>
                <option>Sinhala</option>
                <option>Tamil</option>
            </select>
            </div>

            {/* Guide Type */}
            <div>
            <label className="block text-gray-300 mb-2">
                Guide Category
            </label>

            <select className="w-full bg-[#314158] text-white rounded-xl px-4 py-3">
                <option>Adventure Guide</option>
                <option>Cultural Guide</option>
                <option>Wildlife Guide</option>
                <option>Historical Guide</option>
            </select>
            </div>

            {/* Service Areas */}
            <div className="md:col-span-2">
            <label className="block text-gray-300 mb-2">
                Areas Covered
            </label>

            <input
                type="text"
                defaultValue="Ella, Kandy, Galle, Sigiriya"
                className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
            />
            </div>

            {/* License */}
            <div>
            <label className="block text-gray-300 mb-2">
                Guide License Number
            </label>

            <input
                type="text"
                defaultValue="SLTG-2026-001"
                className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
            />
            </div>

            {/* Vehicle */}
            <div>
            <label className="block text-gray-300 mb-2">
                Vehicle Available
            </label>

            <select className="w-full bg-[#314158] text-white rounded-xl px-4 py-3">
                <option>Yes</option>
                <option>No</option>
            </select>
            </div>

        </div>

        </div>

        <div className="border-b border-[#314158] my-10"></div>

        {/* ================= About Me ================= */}

        <div>

        <h3 className="text-2xl font-semibold text-white mb-6">
            About Me
        </h3>

        <textarea
            rows={6}
            defaultValue={`Hello! I'm Kasun Perera, a licensed professional tour guide with over 8 years of experience. I specialize in adventure, cultural, and historical tours across Sri Lanka. I enjoy helping travellers discover beautiful destinations while providing a safe, enjoyable, and memorable experience.`}
            className="w-full bg-[#314158] text-white rounded-xl p-5 outline-none resize-none focus:ring-2 focus:ring-[#00C896]"
            placeholder="Write something about yourself..."
        />

        </div>

        <div className="border-b border-[#314158] my-10"></div>

        {/* ================= Uploaded Documents ================= */}

        <div>

        <h3 className="text-2xl font-semibold text-white mb-6">
            Uploaded Documents
        </h3>

        <div className="space-y-5">

            {/* Guide License */}

            <div className="flex items-center justify-between bg-[#314158] rounded-xl px-5 py-4">

            <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#243342] flex items-center justify-center text-2xl">
                📄
                </div>

                <div>
                <h4 className="text-white font-semibold">
                    Guide License
                </h4>

                <p className="text-green-400 text-sm">
                    ✔ Verified
                </p>
                </div>

            </div>

            <div className="flex gap-3">

                <button className="px-4 py-2 rounded-lg bg-[#00C896] hover:bg-[#00b383] text-white">
                View
                </button>

                <button className="px-4 py-2 rounded-lg bg-[#4A5C6A] hover:bg-[#5a7082] text-white">
                Replace
                </button>

            </div>

            </div>

            {/* NIC */}

            <div className="flex items-center justify-between bg-[#314158] rounded-xl px-5 py-4">

            <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#243342] flex items-center justify-center text-2xl">
                🪪
                </div>

                <div>
                <h4 className="text-white font-semibold">
                    NIC / Passport
                </h4>

                <p className="text-green-400 text-sm">
                    ✔ Verified
                </p>
                </div>

            </div>

            <div className="flex gap-3">

                <button className="px-4 py-2 rounded-lg bg-[#00C896] hover:bg-[#00b383] text-white">
                View
                </button>

                <button className="px-4 py-2 rounded-lg bg-[#4A5C6A] hover:bg-[#5a7082] text-white">
                Replace
                </button>

            </div>

            </div>

            {/* Police Clearance */}

            <div className="flex items-center justify-between bg-[#314158] rounded-xl px-5 py-4">

            <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#243342] flex items-center justify-center text-2xl">
                🛡️
                </div>

                <div>
                <h4 className="text-white font-semibold">
                    Police Clearance
                </h4>

                <p className="text-green-400 text-sm">
                    ✔ Verified
                </p>
                </div>

            </div>

            <div className="flex gap-3">

                <button className="px-4 py-2 rounded-lg bg-[#00C896] hover:bg-[#00b383] text-white">
                View
                </button>

                <button className="px-4 py-2 rounded-lg bg-[#4A5C6A] hover:bg-[#5a7082] text-white">
                Replace
                </button>

            </div>

            </div>

            {/* Certificates */}

            <div className="flex items-center justify-between bg-[#314158] rounded-xl px-5 py-4">

            <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#243342] flex items-center justify-center text-2xl">
                🏆
                </div>

                <div>
                <h4 className="text-white font-semibold">
                    Certificates
                </h4>

                <p className="text-green-400 text-sm">
                    ✔ Uploaded
                </p>
                </div>

            </div>

            <div className="flex gap-3">

                <button className="px-4 py-2 rounded-lg bg-[#00C896] hover:bg-[#00b383] text-white">
                View
                </button>

                <button className="px-4 py-2 rounded-lg bg-[#4A5C6A] hover:bg-[#5a7082] text-white">
                Replace
                </button>

            </div>

            </div>

        </div>

        </div>

        <div className="border-b border-[#314158] my-10"></div>

        {/* ================= Security ================= */}

        <div>

        <h3 className="text-2xl font-semibold text-white mb-6">
            Security
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Current Password */}

            <div className="md:col-span-2">
            <label className="block text-gray-300 mb-2">
                Current Password
            </label>

            <input
                type="password"
                placeholder="Enter current password"
                className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
            />
            </div>

            {/* New Password */}

            <div>
            <label className="block text-gray-300 mb-2">
                New Password
            </label>

            <input
                type="password"
                placeholder="Enter new password"
                className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
            />
            </div>

            {/* Confirm Password */}

            <div>
            <label className="block text-gray-300 mb-2">
                Confirm Password
            </label>

            <input
                type="password"
                placeholder="Confirm new password"
                className="w-full bg-[#314158] text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C896]"
            />
            </div>

        </div>

        </div>

        {/* Save Buttons */}

        <div className="flex justify-end gap-4 mt-10">

        <button
            className="px-6 py-3 rounded-xl bg-[#4A5C6A] hover:bg-[#5b6d7d] text-white transition"
        >
            Cancel
        </button>

        <button
            className="px-8 py-3 rounded-xl bg-[#00C896] hover:bg-[#00b383] text-white font-semibold transition"
        >
            Save Changes
        </button>

        </div>
        </div>
    );
}