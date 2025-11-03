"use client";

import { motion } from "framer-motion";
import {
  Download,
  Globe,
  Smartphone,
  Apple,
  Monitor,
  MonitorSmartphone,
} from "lucide-react";

const ACCENT = "#28b247";

const platforms = [
  {
    id: 1,
    name: "WEB Terminal",
    type: "Online Platform",
    image: "https://i.imgur.com/xxw9hGJ.png",
    support: ["Chrome", "Firefox", "Safari"],
    download: "#",
    icon: <Globe size={18} />,
  },
  {
    id: 2,
    name: "APP iOS",
    type: "Mobile App",
    image: "https://i.imgur.com/yxQLrQh.png",
    support: ["iPhone", "iPad"],
    download: "#",
    icon: <Apple size={18} />,
  },
  {
    id: 3,
    name: "APP Android",
    type: "Mobile App",
    image: "https://i.imgur.com/MPVdM1x.png",
    support: ["Android 8+", "Tablet"],
    download: "#",
    icon: <Smartphone size={18} />,
  },
  {
    id: 4,
    name: "Platform MAC",
    type: "Desktop",
    image: "https://i.imgur.com/zjMIu8N.png",
    support: ["macOS Monterey+"],
    download: "#",
    icon: <Monitor size={18} />,
  },
  {
    id: 5,
    name: "Platform Windows",
    type: "Desktop",
    image: "https://i.imgur.com/INaFlHZ.png",
    support: ["Windows 10+", "Windows 11"],
    download: "#",
    icon: <MonitorSmartphone size={18} />,
  },
];

export default function TradingPlatformPage() {
  return (
    <div className="min-h-screen w-full bg-[#0f1115] text-gray-100 py-10 px-4 sm:px-6 lg:px-10 overflow-y-auto">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold mb-10 text-center text-green-400 tracking-wide"
      >
        Downloads
      </motion.h1>

      {/* Card List */}
      <div className="flex flex-col gap-6 max-w-6xl mx-auto w-full">
        {platforms.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#181a20] border border-[#242730] hover:border-green-500/40 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-green-500/10 transition-all duration-300"
          >
            {/* Left Section */}
            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-[35%]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#1f2128] flex items-center justify-center shadow-inner flex-shrink-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="object-contain w-full h-full p-2"
                />
              </div>

              <div className="flex flex-col justify-center text-left">
                <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2 text-green-400">
                  {p.icon} {p.name}
                </h2>
                <p className="text-sm text-gray-400">{p.type}</p>
              </div>
            </div>

            {/* Support Info */}
            <div className="flex flex-wrap justify-start sm:justify-center gap-2 mt-4 sm:mt-0 w-full sm:w-[40%]">
              {p.support.map((s, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-[#1f2128] border border-[#2a2d34] text-gray-300"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Download Button */}
            <div className="mt-4 sm:mt-0 flex justify-center sm:justify-end w-full sm:w-[25%]">
              <a
                href={p.download}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-green-500 rounded-lg text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 text-sm font-medium shadow-sm w-full sm:w-auto justify-center"
              >
                <Download size={18} /> Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
