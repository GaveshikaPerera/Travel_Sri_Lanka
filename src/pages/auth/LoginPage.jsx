import { Link } from "react-router-dom";
import { FaEye, FaGoogle, FaFacebookF } from "react-icons/fa";
//import AuthLayout from "../../components/auth/AuthLayout";

function LoginPage() {
  return (
    // <AuthLayout title="Welcome Back">
      <form className="space-y-5">

        {/* Email */}
        <div>
          <label className="block text-[#11212D] font-medium mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C896]"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-[#11212D] font-medium mb-2">
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-[#00C896]"
            />

            <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex justify-between items-center text-sm">

          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" />
            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="text-[#00C896] hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#00C896] hover:bg-[#00b383] text-white py-3 rounded-xl font-semibold transition"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center">

          <div className="flex-1 border-t border-gray-300"></div>

          <span className="px-3 text-gray-500 text-sm">
            OR
          </span>

          <div className="flex-1 border-t border-gray-300"></div>

        </div>

        {/* Social Login */}

        <div className="grid grid-cols-2 gap-4">

          <button
            type="button"
            className="border rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-gray-100 transition"
          >
            <FaGoogle className="text-red-500" />
            Google
          </button>

          <button
            type="button"
            className="border rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-gray-100 transition"
          >
            <FaFacebookF className="text-blue-600" />
            Facebook
          </button>

        </div>

        {/* Sign Up */}

        <p className="text-center text-gray-600">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-[#00C896] font-semibold hover:underline"
          >
            Sign Up
          </Link>

        </p>

      </form>
    //</AuthLayout>
  );
}

export default LoginPage;