"use client";
import { motion } from "framer-motion";

export default function BrandSlider() {
  return (
    <motion.section
      className="py-8 bg-white border-y overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="flex gap-10 animate-scroll-x whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[
            "apple",
            "microsoft",
            "google",
            "amazon",
            "paypal",
            "meta",
            "tesla",
          ].map((b, i) => (
            <img
              key={i}
              src={`https://logo.clearbit.com/${b}.com`}
              alt={b}
              className="h-10 inline-block opacity-80 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
