"use client";

import { useEffect, useState } from "react";
import { getMarketData } from "../lib/api";
interface CurrencyData {
  symbol: string;
  bid: number;
  ask: number;
  change: number;
}

// const sampleCurrencies = [
//   { symbol: "BTC/USDT", bid: 67250.35, ask: 67255.12, change: 1.23 },
//   { symbol: "ETH/USDT", bid: 3740.45, ask: 3745.31, change: -0.85 },
//   { symbol: "BNB/USDT", bid: 585.2, ask: 586.1, change: 0.55 },
//   { symbol: "SOL/USDT", bid: 165.12, ask: 165.48, change: 2.14 },
//   { symbol: "XRP/USDT", bid: 0.557, ask: 0.559, change: -0.34 },
// ];

const currencyPairs = [
  "USDJPY","EURUSD","USDMXN","GBPUSD","EURMXN","USDCHF","USDPLN","USDCAD","EURPLN","AUDUSD",
  "USDTRY","NZDUSD","EURTRY","EURGBP","EURJPY","USDCNH","EURCHF","USDHKD","EURAUD","USDSGD",
  "EURCAD","SGDJPY","EURNZD","USDHUF","GBPJPY","EURHUF","GBPCHF","USDZAR","BTCJPY","BTCUSD",
  "GBPCAD","EURZAR","BTCEUR","GBPAUD","GBPNZD","ZARJPY","NZDJPY","USDSEK","XAUUSD","NZDCAD",
  "EURSEK","XAGUSD","NZDCHF","USDNOK","XAUEUR","AUDJPY","EURNOK","XAGEUR","AUDCAD","AUDCHF",
  "EURDKK","AUDNZD","NOKSEK","CADJPY","NOKJPY","CADCHF","USDRUB"
];


interface CurrencyProps{
  handleSelectedPair: (symbol: string) => void
}
export default function CurrencyTable({handleSelectedPair}:CurrencyProps) {
  const [currencies, setCurrencies] = useState<CurrencyData[]>([]);
  const [fetchCurr, setFetchCurr] = useState<string[]>(["EURUSD", "USDMXN"]);

  const [loading, setLoading] = useState(true);


 useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getMarketData(fetchCurr);      
      setCurrencies(res);
    } catch (error) {
      console.error("Error fetching market data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (fetchCurr.length > 0) {
    fetchData();
  }

  // Optional: auto refresh every 10 seconds
  // const interval = setInterval(fetchData, 10000);
  // return () => clearInterval(interval);
}, [fetchCurr]); // ✅ run whenever fetchCurr changes




  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filteredList = currencyPairs.filter((c) =>
    c.toLowerCase().includes(query.toLowerCase())
  );

  const toggleCurrency = (symbol: string) => {
  setFetchCurr((prev) => {
    if (prev.includes(symbol)) {
      return prev.filter((item) => item !== symbol);
    }
    return [...prev, symbol];
  });
};

  return (
    <div className="bg-[#151a21] p-3 flex flex-col overflow-hidden">
      <div className="relative mb-3">
        <input
          type="text"
          value={query}
          onFocus={() => setSearchOpen(true)}
          onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pairs..."
          className="w-full px-3 py-2 text-sm rounded-md bg-[#0e1116] border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {searchOpen && (
          <div className="absolute z-10 top-10 left-0 w-full bg-[#1e222d] border border-gray-700 rounded-md max-h-48 overflow-y-auto">
            {filteredList.length > 0 ? (
              filteredList.map((item, index) => (
                <div
                  key={item}
                  className="px-3 py-2 hover:bg-[#2b313f] cursor-pointer text-sm"
                  onClick={() => toggleCurrency(item)}
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="p-2 text-xs text-gray-400">No results found</div>
            )}
          </div>
        )}
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="pb-2">Symbol</th>
              <th className="pb-2">Bid</th>
              <th className="pb-2">Ask</th>
              <th className="pb-2">Change</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((c) => (
              <tr
                key={c.symbol}
                className="border-b border-gray-800 hover:bg-[#1e222d] cursor-pointer"
              
                onClick={() => handleSelectedPair(c.symbol)}
              >
                <td>{c.symbol}</td>
                <td>{c.bid.toFixed(5)}</td>
                <td>{c.ask.toFixed(5)}</td>
                <td
                  className={c.change >= 0 ? "text-green-400" : "text-red-400"}
                >
                  {c.change > 0 ? "" : "-"}
                  {c.change}%
                </td>
              </tr>
            ))}
            {currencies.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center text-gray-500 py-4 text-xs"
                >
                  No currencies selected
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
