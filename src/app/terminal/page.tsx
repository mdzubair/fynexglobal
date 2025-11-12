"use client";
import { useState } from "react";
import clsx from "clsx";
import CurrencyList from "./components/CurrencyList";
import CurrencyChart from "./components/CurrencyChart";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function TerminalPage() {
  const [activeSidebar, setActiveSidebar] = useState("home");

  const sidebarTop = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "chart", icon: "📈", label: "Chart" },
    { id: "wallet", icon: "💰", label: "Wallet" },
  ];

  const sidebarBottom = [
    { id: "settings", icon: "⚙️", label: "Settings" },
    { id: "help", icon: "❓", label: "Help" },
    { id: "logout", icon: "🚪", label: "Logout" },
  ];

  return (
    <div className="bg-[#0a0b0d] text-gray-200 min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* HEADER */}
      <div className="mb-3 lg:mb-4">
        <Header />
      </div>

      {/* MAIN BODY */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-visible lg:overflow-hidden gap-3 lg:gap-4 px-3 lg:px-4">
        {/* SIDEBAR */}
        <aside className="bg-[#131416] text-gray-300 w-full lg:w-16 flex flex-row lg:flex-col justify-between items-center p-2 lg:p-4 border border-[#2a2b2d] rounded-lg">
          {/* Top Icons */}
          <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
            {sidebarTop.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSidebar(item.id)}
                className={clsx(
                  "p-2 rounded transition",
                  activeSidebar === item.id
                    ? "text-[#c8b560] bg-[#1b1c1e]"
                    : "hover:text-[#c8b560]"
                )}
                title={item.label}
              >
                {item.icon}
              </button>
            ))}
          </div>

          {/* Bottom Icons */}
          <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
            {sidebarBottom.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSidebar(item.id)}
                className={clsx(
                  "p-2 rounded transition",
                  activeSidebar === item.id
                    ? "text-[#c8b560] bg-[#1b1c1e]"
                    : "hover:text-[#c8b560]"
                )}
                title={item.label}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </aside>

        {/* CONTENT AREA */}
        <main className="flex-1 flex flex-col overflow-y-auto lg:overflow-hidden gap-3 lg:gap-4">
          {/* CHART + LIST */}
          {/* <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 flex-grow">
            <CurrencyChart />
            <CurrencyList />
          </div> */}

          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 flex-grow overflow-y-auto lg:overflow-hidden">
            <div className="flex-1 min-h-[300px] lg:min-h-0 overflow-visible">
              <CurrencyChart />
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <CurrencyList />
            </div>
          </div>

          {/* FOOTER */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
