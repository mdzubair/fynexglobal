"use client";

const ACCENT = "#28b247";

export default function ForexDashboardDark() {
  return (
    <main
      className="flex-1 overflow-y-auto bg-[#0f1115] text-gray-100 transition-all duration-300 scrollbar-thin scrollbar-thumb-[#28b247]/40 scrollbar-track-[#1a1d24] scroll-smooth"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#28b247 #1a1d24",
      }}
    >
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 min-h-screen">
        <div className="bg-[#181a20] p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg min-h-[75vh]">
          {/* Header */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-gray-200">
            Dashboard Overview
          </h1>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6">
            {["Total Balance", "Profit", "Open Trades", "Active Users"].map(
              (label, idx) => (
                <div
                  key={idx}
                  className="bg-[#1f242d] p-4 sm:p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#28b247]/40"
                >
                  <p className="text-gray-400 text-sm sm:text-base">{label}</p>
                  <h2 className="text-xl sm:text-2xl font-bold mt-2 text-[#28b247]">
                    {idx === 0
                      ? "$12,345"
                      : idx === 1
                      ? "+5.6%"
                      : idx === 2
                      ? "38"
                      : "102"}
                  </h2>
                </div>
              )
            )}
          </div>

          {/* Chart Section */}
          <div className="bg-[#1f242d] p-4 sm:p-6 rounded-xl shadow-md mb-6 flex items-center justify-center text-center text-gray-500 text-sm sm:text-base min-h-[180px] sm:min-h-[250px] md:min-h-[300px]">
            📈 Charts and analytics section <br className="hidden sm:block" /> 
            (place your React ApexChart or TradingView widget here)
          </div>

          {/* Recent Activity */}
          <div className="bg-[#1f242d] p-4 sm:p-6 rounded-xl shadow-md text-gray-300">
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-200">
              Recent Activity
            </h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="border-b border-[#2a2f38] pb-2">
                ✅ Trade Executed – <span className="text-[#28b247]">$1,200</span> profit
              </li>
              <li className="border-b border-[#2a2f38] pb-2">
                💰 Deposit – <span className="text-[#28b247]">$500</span>
              </li>
              <li className="border-b border-[#2a2f38] pb-2">
                ⚡ Withdrawal – <span className="text-red-400">$300</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
