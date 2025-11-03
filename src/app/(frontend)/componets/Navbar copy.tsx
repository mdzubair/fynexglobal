"use client";
import { motion } from "framer-motion";
import HeroSlider from "./HeroSlider";
import BrandSlider from "./BrandSlider";

export default function Navbar() {
  return (
    <>
      <motion.header
        className="sticky top-0 z-50 bg-white shadow-sm"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <motion.div
            className="text-2xl font-bold text-indigo-600"
            whileHover={{ scale: 1.05 }}
          >
            Brand
          </motion.div>
          <nav className="hidden md:flex gap-6 text-sm">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="hover:text-indigo-600"
                whileHover={{ scale: 1.1 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700"
          >
            Login
          </motion.button>
        </div>
      </motion.header>

      {/* Hero Slider */}
      <HeroSlider />
      <BrandSlider />
    </>
  );
}
