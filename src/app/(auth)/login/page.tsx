"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* ✅ Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg-login.jpg" // 🔹 Put your image in /public
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
            Not registered yet?
          </h2>
          <p className="text-xl">It takes less than a minute</p>
          <button
            onClick={() => router.push("/signup")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Register now
          </button>
        </div>

        {/* 🔹 Right Section (Login Box) */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 md:p-10 border border-gray-100">
            <h2 className="text-center text-2xl font-bold text-green-700 mb-6">
              LOGIN
            </h2>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
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
                  placeholder="Password"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between mb-6 text-sm">
              <label className="flex items-center space-x-2 text-gray-600">
                <input type="checkbox" className="accent-green-600" />
                <span>Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-green-600 hover:underline"
              >
                Forgot Password
              </Link>
            </div>

            {/* Login Button */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition">
              Login
            </button>

            {/* Register Link */}
            <p className="text-center text-sm mt-4 text-gray-600">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-green-600 hover:underline">
                Register Now
              </Link>
            </p>
            {/* Social Buttons */}
            <div className="mt-6 space-y-3">
              <button className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition">
                Sign in using Facebook
              </button>
              <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                Sign in using Google
              </button>
              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition">
                Sign in using X
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
