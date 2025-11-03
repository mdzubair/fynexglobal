"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const API_KEY = "09a9AbeLiRNrOmNo6P7V";

interface CurrencyData {
  pair: string;
  open: number;
  high: number;
  low: number;
  close: number;
  percentage: number;
  time: string;
}

const currencyPairs = [
  "USDJPY","EURUSD","USDMXN","GBPUSD","EURMXN","USDCHF","USDPLN","USDCAD","EURPLN","AUDUSD",
  "USDTRY","NZDUSD","EURTRY","EURGBP","EURJPY","USDCNH","EURCHF","USDHKD","EURAUD","USDSGD",
  "EURCAD","SGDJPY","EURNZD","USDHUF","GBPJPY","EURHUF","GBPCHF","USDZAR","BTCJPY","BTCUSD",
  "GBPCAD","EURZAR","BTCEUR","GBPAUD","GBPNZD","ZARJPY","NZDJPY","USDSEK","XAUUSD","NZDCAD",
  "EURSEK","XAGUSD","NZDCHF","USDNOK","XAUEUR","AUDJPY","EURNOK","XAGEUR","AUDCAD","AUDCHF",
  "EURDKK","AUDNZD","NOKSEK","CADJPY","NOKJPY","CADCHF","USDRUB"
];

export default function LiveCurrencyTable() {
  const [selectedPairs, setSelectedPairs] = useState<string[]>(["EURUSD", "USDJPY"]);
  const [data, setData] = useState<CurrencyData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredPairs = currencyPairs.filter(pair =>
    pair.toLowerCase().includes(search.toLowerCase())
  );

  const fetchCurrency = async (pair: string): Promise<CurrencyData | null> => {
    try {
      const res = await axios.get("https://marketdata.tradermade.com/api/v1/timeseries", {
        params: {
          currency: pair,
          api_key: API_KEY,
          start_date: "2025-10-30",
          end_date: "2025-10-31",
          interval: "minute",
        },
      });

      const quotes = res.data?.quotes;
      if (!quotes?.length) return null;

      const last = quotes[quotes.length - 1];
      const percentage = ((last.close - last.open) / last.open) * 100;

      return {
        pair,
        open: Number(last.open),
        high: Number(last.high),
        low: Number(last.low),
        close: Number(last.close),
        percentage: parseFloat(percentage.toFixed(2)),
        time: last.date,
      };
    } catch (error) {
      console.error(`❌ Error fetching ${pair}:`, error);
      return null;
    }
  };

  const fetchAll = async () => {
    setLoading(true);
    const results: CurrencyData[] = [];

    // Fetch all pairs in parallel (faster!)
    const responses = await Promise.all(selectedPairs.map(fetchCurrency));
    responses.forEach(res => res && results.push(res));

    setData(results);
    setLoading(false);
  };

  useEffect(() => {
    fetchAll();
    const interval = setInterval(fetchAll, 300000); // refresh every 5 mins
    return () => clearInterval(interval);
  }, [selectedPairs]);

  const toggleSelect = (pair: string) => {
    setSelectedPairs(prev =>
      prev.includes(pair) ? prev.filter(p => p !== pair) : [...prev, pair]
    );
  };

  return (
    <div className="bg-[#181a20] text-white p-6 space-y-6 rounded-2xl w-full max-w-7xl mx-auto my-8 shadow-2xl border border-[#1e293b]">
      
      {/* Dropdown */}
      <div className="relative mb-6">
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex flex-wrap items-center gap-2 bg-[#1e293b] p-3 rounded-xl border border-[#28b247]/50 cursor-pointer min-h-[56px] transition hover:border-[#28b247]"
        >
          {selectedPairs.length ? (
            selectedPairs.map(pair => (
              <span
                key={pair}
                className="bg-[#28b247]/20 text-[#28b247] px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {pair}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSelect(pair);
                  }}
                  className="text-red-400 hover:text-red-500 font-bold"
                >
                  ✕
                </button>
              </span>
            ))
          ) : (
            <span className="text-gray-400 text-sm">Select currency pairs...</span>
          )}
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute z-20 bg-[#1e293b] border border-[#28b247]/40 rounded-xl mt-2 w-full shadow-xl max-h-72 overflow-y-auto">
            <div className="p-2 border-b border-[#28b247]/40 sticky top-0 bg-[#1e293b]">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 rounded-lg bg-[#0f172a] text-white border border-[#28b247]/30 focus:outline-none focus:ring-2 focus:ring-[#28b247]/70"
              />
            </div>
            {filteredPairs.map(pair => (
              <div
                key={pair}
                onClick={() => toggleSelect(pair)}
                className={`px-4 py-2 cursor-pointer transition ${
                  selectedPairs.includes(pair)
                    ? "bg-[#28b247]/20 text-[#28b247]"
                    : "hover:bg-[#28b247]/10"
                }`}
              >
                {pair}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-[#28b247]/20 rounded-xl">
        {loading ? (
          <p className="text-gray-400 text-center p-6">Loading data...</p>
        ) : data.length ? (
          <table className="w-full border-collapse text-center text-sm sm:text-base">
            <thead>
              <tr className="bg-[#28b247]/10 text-gray-300 uppercase text-xs sm:text-sm">
                <th className="p-3">Pair</th>
                <th className="p-3">Open</th>
                <th className="p-3">High</th>
                <th className="p-3">Low</th>
                <th className="p-3">Close</th>
                <th className="p-3">Change (%)</th>
              </tr>
            </thead>
            <tbody>
              {data.map(d => (
                <tr key={d.pair} className="hover:bg-[#28b247]/5 transition">
                  <td className="p-3 font-semibold text-[#28b247]">
                    <Link
                      href={`/pairs/${d.pair}`}
                      className="hover:underline hover:text-[#28b247]/80 transition"
                    >
                      {d.pair}
                    </Link>
                  </td>
                  <td className="p-3">{d.open.toFixed(5)}</td>
                  <td className="p-3 text-green-400">{d.high.toFixed(5)}</td>
                  <td className="p-3 text-red-400">{d.low.toFixed(5)}</td>
                  <td className="p-3">{d.close.toFixed(5)}</td>
                  <td
                    className={`p-3 font-semibold ${
                      d.percentage >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {d.percentage > 0 ? "+" : ""}
                    {d.percentage}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-400 text-center p-6">No currency data available.</p>
        )}
      </div>
    </div>
  );
}
