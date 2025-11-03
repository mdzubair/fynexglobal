"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#28b247";

const bonuses = [
  {
    id: 1,
    image: "https://via.placeholder.com/100",
    title: "Welcome Bonus",
    subtitle: "Get 50% extra on your first deposit",
    details:
      "This bonus applies to your first deposit and is valid for 30 days. Minimum deposit: $100. Bonus funds can be withdrawn after trading 5x the bonus amount.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    title: "Loyalty Bonus",
    subtitle: "Earn rewards for consistent trading",
    details:
      "Available to users trading actively for 3 consecutive months. Bonus value is based on trading volume and consistency.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/100",
    title: "Referral Bonus",
    subtitle: "Invite friends & earn up to $200",
    details:
      "Refer your friends using your referral link and earn 10% of their first deposit up to $200.",
  },
];

export default function AllBonusPage() {
  const [selectedBonus, setSelectedBonus] = useState<any>(null);

  // 🔒 Lock background scroll when modal is open
  useEffect(() => {
    if (selectedBonus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedBonus]);

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100 p-4 sm:p-6 md:p-10">
      <h1 className="text-2xl font-semibold mb-8 text-center text-gray-200">
        All Bonuses
      </h1>

      {/* Bonus Cards */}
      <div className="space-y-6">
        {bonuses.map((bonus) => (
          <motion.div
            key={bonus.id}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col sm:flex-row items-center sm:items-start bg-[#181a20] border border-[#2a2d34] shadow-md rounded-2xl p-4 sm:p-6 hover:border-[#28b247]/40 transition-all duration-300"
          >
            {/* Image */}
            <img
              src={bonus.image}
              alt={bonus.title}
              className="w-24 h-24 rounded-xl object-cover mb-3 sm:mb-0 sm:mr-6"
            />

            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg font-semibold text-gray-100">
                {bonus.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{bonus.subtitle}</p>

              <div className="flex justify-center sm:justify-start gap-3 mt-2 flex-wrap">
                <button
                  onClick={() => (window.location.href = "/deposit")}
                  className="border border-[#28b247] text-[#28b247] hover:bg-[#28b247]/10 px-5 py-2 rounded-md text-sm font-medium shadow-sm transition-all"
                >
                  Deposit
                </button>

                <button
                  onClick={() => setSelectedBonus(bonus)}
                  className="border border-gray-500 text-gray-300 hover:bg-gray-700/20 px-5 py-2 rounded-md text-sm font-medium shadow-sm transition-all"
                >
                  Terms
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🪟 Modal for Terms */}
      <AnimatePresence>
        {selectedBonus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-[#181a20] border border-[#2a2d34] rounded-2xl p-6 max-w-lg w-full shadow-2xl"
            >
              <h2 className="text-xl font-semibold text-gray-100 mb-2">
                {selectedBonus.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                {selectedBonus.subtitle}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {selectedBonus.details}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedBonus(null)}
                  className="border border-[#28b247] text-[#28b247] hover:bg-[#28b247]/10 px-5 py-2 rounded-md text-sm font-medium shadow-sm transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
