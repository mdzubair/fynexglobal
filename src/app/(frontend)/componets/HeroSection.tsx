"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    video:
      "https://cdn.dbinvesting.com/main_website_video/dream_banner_main.mp4",
    title: "Succeed With DB Investing",
    text: "Unlock limitless opportunities in global markets with our secure platform, expert support, and cutting-edge trading solutions. Your gateway to smarter investing starts here.",
  },
  {
    video:
      "https://cdn.dbinvesting.com/main_website_video/dream_banner_main.mp4",
    title: "Trade the Markets You Love",
    text: "Experience low spreads, fast execution, and a powerful platform designed for every trader.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((p) => (p + 1) % slides.length),
      8000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {slides.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <video
            src={s.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
            >
              {s.title}
            </motion.h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-200 max-w-3xl mb-6 text-lg"
            >
              {s.text}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#28A745] hover:bg-[#21963d] text-white px-6 py-3 rounded-full font-semibold"
            >
              Trade Now
            </motion.button>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
