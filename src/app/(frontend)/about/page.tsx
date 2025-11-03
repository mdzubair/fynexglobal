"use client";

import { useState } from "react";
import Image from "next/image";
import { Info, Flag, Eye } from "lucide-react";

export default function AboutPage() {
  const [active, setActive] = useState("about");

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ✅ Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/world-bg.png" // 👈 apni background image yaha daal
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* ✅ Overlay for opacity and readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-white">
        {/* 🔹 Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-12 leading-tight">
          We are a <span className="text-green-400">Multi-National</span> and{" "}
          <span className="text-green-400">Multi-Cultural Company</span>
        </h1>

        {/* 🔹 Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="md:w-1/4 flex md:flex-col justify-center md:justify-start space-y-4">
            {[
              {
                key: "about",
                label: "About Us",
                icon: <Info className="w-5 h-5" />,
              },
              {
                key: "mission",
                label: "Our Mission",
                icon: <Flag className="w-5 h-5" />,
              },
              {
                key: "vision",
                label: "Our Vision",
                icon: <Eye className="w-5 h-5" />,
              },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 w-full text-left ${
                  active === tab.key
                    ? "bg-green-600 text-white font-semibold"
                    : "bg-white/10 hover:bg-white/20 text-gray-200"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Box */}
          <div className="md:w-3/4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-10 border border-white/20 text-gray-100">
            {active === "about" && (
              <div className="transition-opacity duration-500 ease-in-out">
                <h2 className="text-xl font-bold mb-3 text-green-300">
                  About DB Investing
                </h2>
                <p className="mb-6">
                  <strong>DB Investing</strong> is a globally recognized
                  financial brokerage firm committed to empowering traders and
                  investors with cutting-edge tools, expert insights, and a
                  secure trading environment. Since our inception in 2018, we
                  have continuously evolved to meet the dynamic needs of global
                  financial markets.
                </p>

                <h3 className="font-semibold mb-2 text-green-300">
                  A Trusted & Regulated Broker
                </h3>
                <p className="mb-6">
                  We operate under the highest regulatory standards, holding
                  licenses from the <strong>FSA (Seychelles)</strong>,{" "}
                  <strong>FINTRAC (Canada)</strong>, and{" "}
                  <strong>ESCA (Dubai)</strong>. Our transparency and security
                  ensure client confidence worldwide.
                </p>

                <h3 className="font-semibold mb-2 text-green-300">
                  Global Presence, Local Approach
                </h3>
                <p>
                  DB Investing operates offices in{" "}
                  <strong>
                    Dubai, Seychelles, Cyprus, Nigeria, Egypt, Saudi Arabia,
                  </strong>{" "}
                  and <strong>Malta</strong> — expanding into{" "}
                  <strong>Latin America and Asia (2025)</strong>.
                </p>
              </div>
            )}

            {active === "mission" && (
              <div className="transition-opacity duration-500 ease-in-out">
                <h2 className="text-xl font-bold mb-3 text-green-300">
                  Our Mission
                </h2>
                <p>
                  Our mission is to make global trading accessible, transparent,
                  and empowering for everyone. We provide technology, education,
                  and trust to help clients succeed worldwide.
                </p>
              </div>
            )}

            {active === "vision" && (
              <div className="transition-opacity duration-500 ease-in-out">
                <h2 className="text-xl font-bold mb-3 text-green-300">
                  Our Vision
                </h2>
                <p>
                  Our vision is to redefine global trading by combining
                  innovation, reliability, and transparency — building financial
                  freedom for all traders.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
