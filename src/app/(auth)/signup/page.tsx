"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/bg-login.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-green-900/0" />
      </div>

      {/* ✅ Main Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl items-center justify-between px-6 md:px-10 py-10">
        {/* 🔹 Left Section */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center text-white text-center md:text-left space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Already have an account?
          </h2>
          <p className="text-xl">Login to your dashboard</p>
          <button
            onClick={() => router.push("/login")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Login Now
          </button>
        </div>

        {/* 🔹 Right Section (Signup Box) */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 md:p-10 border border-gray-100">
            <h2 className="text-center text-2xl font-bold text-green-700 mb-6">
              SIGN UP
            </h2>

            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="block text-gray-600 text-sm mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Signup Button */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition">
              Sign Up
            </button>

            {/* Login Link */}
            <p className="text-center text-sm mt-4 text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-green-600 hover:underline">
                Login Now
              </Link>
            </p>

            {/* Social Buttons */}
            <div className="mt-6 space-y-3">
              <button className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition">
                Sign up using Facebook
              </button>
              <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                Sign up using Google
              </button>
              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition">
                Sign up using X
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Footer Risk Warning */}
      <div className="absolute bottom-0 left-0 w-full bg-transparent text-center py-3 px-4">
        <p className="text-xs md:text-[11px] text-gray-200 max-w-4xl mx-auto leading-snug">
          Risk Warning: Trading FX instruments and CFDs can incur a high level
          of risk and may result in a loss of all your invested capital.
        </p>
      </div>
    </div>
  );
}
