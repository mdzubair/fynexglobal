"use client";
import { fetchLiveRecord } from "@/app/lib/terminal";
import { useEffect, useState } from "react";

export default function Footer() {
  const [orders, setOrders] = useState<any[]>([]);

  const loadOrdersAndUpdate = async () => {
    try {
      const saved = localStorage.getItem("orders");
      if (!saved) return setOrders([]);

      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return setOrders([]);

      const symbols = parsed.map((o) => o.symbol);
      const response = await fetchLiveRecord(symbols.join(","));
      const liveRecords = response?.quotes || response || [];

      if (!Array.isArray(liveRecords) || liveRecords.length === 0) {
        console.warn("No live data received");
        return;
      }

      const modified = liveRecords
        .map((item: any, index: number) => {
          const currentPrice = item.mid;
          const order = parsed[index];
          if (!order) return null;

          const entryPrice = order.orderType === "buy" ? order.low : order.high;
          let profitLoss = 0;

          if (order.orderType === "buy") {
            profitLoss = (currentPrice - entryPrice) * order.volume;
          } else if (order.orderType === "sale") {
            profitLoss = (entryPrice - currentPrice) * order.volume;
          }

          return {
            symbol: `${item.base_currency}/${item.quote_currency}`,
            timestamp: order.timestamp,
            orderType: order.orderType,
            volume: order.volume,
            price: entryPrice,
            cr_price: currentPrice,
            profit: Number(profitLoss?.toFixed(2) ?? 0),
          };
        })
        .filter(Boolean);

      setOrders(modified);
    } catch (err) {
      console.error("Error loading orders", err);
    }
  };

  const handleRemoveOrder = (index: number) => {
    const saved = localStorage.getItem("orders");
    if (!saved) return;

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return;

    const updated = parsed.filter((_: any, i: number) => i !== index);
    localStorage.setItem("orders", JSON.stringify(updated));
    setOrders((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    loadOrdersAndUpdate();
    const interval = setInterval(loadOrdersAndUpdate, 2000);
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "orders") loadOrdersAndUpdate();
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  // ✅ Calculate total profit
  const totalProfit = orders
    .filter((o) => (o.profit ?? 0) > 0)
    .reduce((sum, o) => sum + (o.profit ?? 0), 0);

  // Total loss (sum of all negative profits)
  const totalLoss = orders
    .filter((o) => (o.profit ?? 0) < 0)
    .reduce((sum, o) => sum + Math.abs(o.profit ?? 0), 0);
  return (
    <footer className="bg-[#141516] text-gray-200 p-3 lg:p-4 rounded-lg border border-[#2a2b2d] h-[35vh] overflow-y-auto custom-scrollbar">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-[#2a2b2d] rounded-lg overflow-hidden">
          <thead className="bg-[#1d1f21] text-[#c8b560] uppercase text-xs sticky top-0 text-left">
            <tr>
              <th className="px-3 py-2 border border-[#2a2b2d]">Symbol</th>
              <th className="px-3 py-2 border border-[#2a2b2d]">Time</th>
              <th className="px-3 py-2 border border-[#2a2b2d]">Type</th>
              <th className="px-3 py-2 border border-[#2a2b2d]">Volume</th>
              <th className="px-3 py-2 border border-[#2a2b2d]">Entry</th>
              <th className="px-3 py-2 border border-[#2a2b2d]">
                Current Price
              </th>
              <th className="px-3 py-2 border border-[#2a2b2d]">Profit/Loss</th>
              <th className="px-3 py-2 border border-[#2a2b2d]  text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            {orders.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="text-gray-500 text-center py-6 text-sm md:text-base"
                >
                  No active orders yet.
                </td>
              </tr>
            ) : (
              <>
                {orders.map((o, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#24272f] transition-colors duration-200"
                  >
                    <td className="px-3 py-2 border border-[#2a2b2d] font-medium text-[#c8b560]">
                      {o.symbol}
                    </td>

                    <td className="px-3 py-2 border border-[#2a2b2d] whitespace-nowrap">
                      {new Date(o.timestamp).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>

                    <td
                      className={`px-3 py-2 border border-[#2a2b2d] capitalize ${
                        o.orderType === "buy"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {o.orderType}
                    </td>

                    <td className="px-3 py-2 border border-[#2a2b2d]">
                      {o.volume}
                    </td>

                    <td className="px-3 py-2 border border-[#2a2b2d]">
                      {o.price}
                    </td>

                    <td className="px-3 py-2 border border-[#2a2b2d] text-emerald-400">
                      {o.cr_price}
                    </td>

                    <td className="px-3 py-2 border border-[#2a2b2d]">
                      <span
                        className={`${
                          (o.profit ?? 0) >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        } font-semibold`}
                      >
                        {(o.profit ?? 0).toFixed(2)}
                      </span>
                    </td>

                    <td className="px-3 py-2 border border-[#2a2b2d] text-center">
                      <button
                        className=" px-3 py-1 rounded text-xs text-white font-medium shadow-sm transition-all duration-200 cursor-pointer"
                        title="Close Order"
                        onClick={() => handleRemoveOrder(index)}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}

                <tr className="bg-[#1d1f21] font-bold">
                  <td className="px-3 py-2  text-[#c8b560] border border-[#2a2b2d]">
                    Total
                  </td>
                  <td
                    colSpan={4}
                    className="px-3 py-2  text-[#c8b560] border border-[#2a2b2d]"
                  ></td>
                  <td
                    className={`px-3 py-2 border border-[#2a2b2d]  text-red-400`}
                  >
                    Loss {totalLoss.toFixed(2)}
                  </td>

                  <td className="px-3 py-2 border border-[#2a2b2d]  text-green-400">
                    Profit {totalProfit.toFixed(2)}
                  </td>
                  <td></td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </footer>
  );
}
