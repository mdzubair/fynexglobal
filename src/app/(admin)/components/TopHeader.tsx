"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, Wallet, User, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

const ACCENT = "#28b247";

export default function TopHeader({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    { id: 1, text: "EUR/USD order executed", time: "2 min ago" },
    { id: 2, text: "Deposit of $500 successful", time: "10 min ago" },
    { id: 3, text: "USD/JPY stop loss triggered", time: "1 hr ago" },
  ];

  return (
    <header className="flex flex-wrap items-center justify-between px-4 md:px-6 py-3 bg-[#181a20] shadow-lg sticky top-0 z-20">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Sidebar Toggle */}
        <button
          className="p-2 rounded-md hover:bg-[#20232b] focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={22} />
        </button>

        {/* Logo and Title */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-white font-bold shadow-md text-sm md:text-base"
            style={{ background: ACCENT }}
          >
            FX
          </div>
          <h1 className="text-sm md:text-lg font-semibold text-gray-100 hidden sm:block">
            Forex Trading Dashboard
          </h1>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 md:gap-5 relative mt-2 sm:mt-0">
        {/* Wallet */}
        <div className="hidden sm:flex items-center gap-1 font-medium cursor-pointer text-gray-200">
          <Wallet size={20} style={{ color: ACCENT }} />
          <span className="text-sm md:text-base">$12,450.20</span>
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            className="relative p-2 rounded-full hover:bg-[#20232b]"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
          >
            <Bell size={20} style={{ color: ACCENT }} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-[4px]">
              {notifications.length}
            </span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-64 bg-[#1f2128] shadow-xl rounded-xl overflow-hidden border border-[#2a2d34] z-30"
              >
                <div className="p-3 text-sm font-semibold border-b border-[#2a2d34] bg-[#181a20] text-gray-300">
                  Notifications
                </div>
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className="p-3 hover:bg-[#20232b] text-sm border-b border-[#2a2d34] last:border-0"
                  >
                    <div>{n.text}</div>
                    <div className="text-xs text-gray-400">{n.time}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            className="flex items-center gap-2 p-2 rounded-md hover:bg-[#20232b]"
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
          >
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <User size={18} />
            </div>
            <ChevronDown size={16} className="hidden sm:block" />
          </button>

          <AnimatePresence>
            {showProfileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-44 bg-[#1f2128] shadow-xl rounded-lg overflow-hidden border border-[#2a2d34] z-30"
              >
                <div className="text-sm">
                  <div className="px-4 py-2 hover:bg-[#20232b] cursor-pointer">
                    Profile
                  </div>
                  <div className="px-4 py-2 hover:bg-[#20232b] cursor-pointer">
                    Settings
                  </div>
                  <div className="px-4 py-2 hover:bg-[#20232b] cursor-pointer text-red-400 font-medium">
                    Logout
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
