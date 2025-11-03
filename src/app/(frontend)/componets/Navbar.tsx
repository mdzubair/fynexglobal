"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, User } from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    title: "Company",
    dropdown: [
      { title: "About Us", link: "/about" },
      { title: "Careers", link: "/careers" },
      { title: "Awards", link: "/awards" },
      { title: "Regulation", link: "/regulation" },
      { title: "Contact Us", link: "/contact" },
    ],
  },
  {
    title: "Investing",
    dropdown: [
      { title: "Forex", link: "/investing/forex" },
      { title: "Commodities", link: "/investing/commodities" },
      { title: "Indices", link: "/investing/indices" },
      { title: "Shares", link: "/investing/shares" },
      { title: "Crypto", link: "/investing/crypto" },
    ],
  },
  {
    title: "Academy",
    dropdown: [
      { title: "Learn Forex", link: "/academy/learn-forex" },
      { title: "Glossary", link: "/academy/glossary" },
      { title: "Education Videos", link: "/academy/videos" },
    ],
  },
  {
    title: "Help Centre",
    dropdown: [
      { title: "FAQ", link: "/help/faq" },
      { title: "Support", link: "/help/support" },
      { title: "Legal Docs", link: "/help/legal" },
    ],
  },
  {
    title: "DB Partnership",
    dropdown: [
      { title: "Introducing Broker", link: "/partnership/ib" },
      { title: "Affiliate Program", link: "/partnership/affiliate" },
    ],
  },
  { title: "DB News", dropdown: [] },
];

export default function Navbar() {
  const [active, setActive] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.img
          src="/logo.svg"
          alt="logo"
          className="w-40"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-semibold text-sm">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="relative group"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <button className="flex items-center gap-1 hover:text-green-600 transition">
                {item.title}
                {item.dropdown.length > 0 && <ChevronDown size={14} />}
              </button>

              <AnimatePresence>
                {active === i && item.dropdown.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 bg-white shadow-lg rounded-md border w-48 text-sm"
                  >
                    {item.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.link}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-gray-700 hover:text-green-600 transition"
          >
            <User size={22} />
          </Link>

          <button className="hidden md:block bg-[#28A745] hover:bg-[#21963d] text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105">
            Trade Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg border-t px-6 py-4 space-y-4 overflow-hidden"
          >
            {menuItems.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="flex justify-between items-center w-full text-left text-gray-700 font-semibold"
                >
                  {item.title}
                  {item.dropdown.length > 0 && <ChevronDown size={14} />}
                </button>

                <AnimatePresence>
                  {active === i && item.dropdown.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 mt-2 space-y-2"
                    >
                      {item.dropdown.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.link}
                          className="block text-gray-600 text-sm hover:text-green-600"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <button className="w-full bg-[#28A745] hover:bg-[#21963d] text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105">
              Trade Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
