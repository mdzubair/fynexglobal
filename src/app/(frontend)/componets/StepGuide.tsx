"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StepGuide() {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6"
      >
        <p className="text-xs uppercase text-gray-500 mb-2">How it works</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          <span className="text-green-600">How to Get Started </span>
          with DB Investing Step by Step Guide
        </h2>
        <p className="text-gray-600 mb-12">
          Create your account with us and launch it with just 4 easy steps
        </p>

        {/* Tablet Frame Image */}
        <div className="relative mx-auto max-w-3xl shadow-2xl rounded-2xl overflow-hidden transform rotate-2">
          <Image
            src="/tablet-video.png"
            alt="Step Guide Video"
            width={900}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
