"use client";

import Image from "next/image";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* ✅ Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg-login.jpg" // use same background
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />{" "}
        {/* opacity improved */}
      </div>

      {/* ✅ Main Content */}
      <div className="relative z-10 w-full max-w-md bg-white/95 rounded-xl shadow-2xl p-8 md:p-10 border border-gray-200">
        <h2 className="text-center text-3xl font-bold text-green-700 mb-2">
          Forgot Password
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Enter your registered email and we’ll send you a reset link.
        </p>

        {/* Email Field */}
        <div className="mb-5">
          <label className="block text-gray-600 text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition">
          Send Reset Link
        </button>

        {/* Back to Login */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Remembered your password?{" "}
          <Link href="/login" className="text-green-600 hover:underline">
            Login Now
          </Link>
        </p>
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
