"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroducingBroker() {
  return (
    <section className="bg-white py-20 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-green-600">Introducing </span>Broker (IB)
          </h2>
          <p className="text-sm text-gray-600 mb-4 font-semibold uppercase tracking-wide">
            Partner with DB Investing and Maximize Your Earnings
          </p>
          <p className="text-gray-600 mb-6">
            Join DB Investing as an Introducing Broker and benefit from one of
            the highest rebates and commissions in the industry. Boost your
            profits with our competitive IB program, tailored for success.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition">
              Become an Introducing Broker
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
              Download PDF File
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image
            src="/man.png"
            alt="Introducing Broker"
            width={400}
            height={400}
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
