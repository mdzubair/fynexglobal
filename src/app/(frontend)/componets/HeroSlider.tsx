"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      title: "Trade Smarter Today",
      text: "Join the global trading revolution with real-time market insights.",
      btn: "Get Started",
      img: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c",
    },
    {
      title: "Invest Confidently",
      text: "Cutting-edge analytics and tools designed for every trader.",
      btn: "Explore Now",
      img: "https://images.unsplash.com/photo-1565372918674-7c1bdfbc5c7b",
    },
    {
      title: "Achieve Financial Freedom",
      text: "Grow your wealth with transparent and efficient trading.",
      btn: "Join Us",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
  ];
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative overflow-hidden h-[80vh] flex items-center justify-center text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center max-w-2xl mx-auto p-4">
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold mb-4"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-lg mb-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {heroSlides[currentSlide].text}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-slate-100"
            >
              {heroSlides[currentSlide].btn}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
