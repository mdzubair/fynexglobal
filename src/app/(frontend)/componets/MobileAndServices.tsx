"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MobileAndServices() {
  return (
    <section className="bg-white text-center py-20">
      {/* ---------- OUR MOBILE APPS ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-green-600">Our </span>Mobile Apps
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="relative bg-gradient-to-b from-green-500 to-green-600 rounded-xl p-8 text-white shadow-lg">
            <span className="absolute top-4 left-4 bg-red-600 text-xs font-bold px-3 py-1 rounded-full">
              NEW
            </span>
            <h3 className="text-lg font-semibold mb-4">
              DB Investing Mobile App
            </h3>
            <p className="mb-4">
              Control your trades and track markets in real time.
            </p>
            <ul className="text-sm mb-6 space-y-1">
              <li>📈 Track your profits</li>
              <li>⚙️ Manage risk</li>
              <li>💼 Manage your account</li>
            </ul>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow hover:bg-gray-100 transition">
                <span></span> App Store
              </button>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow hover:bg-gray-100 transition">
                ▶ Play Store
              </button>
            </div>
            <div className="mt-6">
              <Image
                src="/mob_app.png"
                alt="Mobile App"
                width={180}
                height={300}
                className="mx-auto"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="relative bg-gradient-to-b from-green-500 to-green-600 rounded-xl p-8 text-white shadow-lg">
            <span className="absolute top-4 left-4 bg-red-600 text-xs font-bold px-3 py-1 rounded-full">
              NEW
            </span>
            <h3 className="text-lg font-semibold mb-4">
              DB Social Trading App
            </h3>
            <p className="mb-4">Trade smarter by copying top traders.</p>
            <ul className="text-sm mb-6 space-y-1">
              <li>👥 Copy top traders</li>
              <li>💰 Track your profits</li>
              <li>📱 All from your phone</li>
            </ul>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow hover:bg-gray-100 transition">
                <span></span> App Store
              </button>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow hover:bg-gray-100 transition">
                ▶ Play Store
              </button>
            </div>
            <div className="mt-6">
              <Image
                src="/mobile2.png"
                alt="Social App"
                width={180}
                height={300}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ---------- OUR SERVICES ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto mt-24 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-green-600">Our </span>Services
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          We offer a wide range of services to help you achieve your financial
          goals. Our platforms are designed to provide you with the tools and
          resources you need to succeed in the world of trading.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3">💹</div>
            <h4 className="font-semibold text-lg mb-2">
              MetaTrader 5 Platform
            </h4>
            <p className="text-sm text-gray-600">
              Trade on the world’s most powerful and versatile platform.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-semibold text-lg mb-2">Signal Centre Tool</h4>
            <p className="text-sm text-gray-600">
              Receive expert trading signals directly on your platform.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3">🤝</div>
            <h4 className="font-semibold text-lg mb-2">
              DB Social App Copy Trading Made Easy
            </h4>
            <p className="text-sm text-gray-600">
              Discover smarter trading by copying top traders anywhere, anytime.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
