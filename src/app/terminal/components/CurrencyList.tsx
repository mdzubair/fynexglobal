"use client";

import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { liveCurrencyPrice } from "@/app/lib/terminal";
import { addNewChartSymbol } from "@/app/redux/chartSlice";

const currencyPairs = [
  "USDJPY",
  "EURUSD",
  "USDMXN",
  "GBPUSD",
  "EURMXN",
  "USDCHF",
  "USDPLN",
  "USDCAD",
  "EURPLN",
  "AUDUSD",
  "USDTRY",
  "NZDUSD",
  "EURTRY",
  "EURGBP",
  "EURJPY",
  "USDCNH",
  "EURCHF",
  "USDHKD",
  "EURAUD",
  "USDSGD",
  "EURCAD",
  "SGDJPY",
  "EURNZD",
  "USDHUF",
  "GBPJPY",
  "EURHUF",
  "GBPCHF",
  "USDZAR",
  "BTCJPY",
  "BTCUSD",
  "GBPCAD",
  "EURZAR",
  "BTCEUR",
  "GBPAUD",
  "GBPNZD",
  "ZARJPY",
  "NZDJPY",
  "USDSEK",
  "XAUUSD",
  "NZDCAD",
  "EURSEK",
  "XAGUSD",
  "NZDCHF",
  "USDNOK",
  "XAUEUR",
  "AUDJPY",
  "EURNOK",
  "XAGEUR",
  "AUDCAD",
  "AUDCHF",
  "EURDKK",
  "AUDNZD",
  "NOKSEK",
  "CADJPY",
  "NOKJPY",
  "CADCHF",
  "USDRUB",
];

const defaultPairs = [
  "BTCUSD",
  "BTCEUR",
  "BTCJPY",
  "ETHUSD",
  "ETHEUR",
  "LTCUSD",
  "XRPUSD",
  "ADAUSD",
  "DOGEUSD",
  "SOLUSD",
];

interface CurrencyData {
  symbol: string;
  bid: number;
  ask: number;
  change: string;
}

export default function CurrencyList() {
  const dispatch = useDispatch<AppDispatch>();
  const [currencies, setCurrencies] = useState<CurrencyData[]>([]);
  const [fetchCurr, setFetchCurr] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Filtered list for search
  const filteredList = useMemo(
    () =>
      currencyPairs.filter((c) =>
        c.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  // Load saved currencies
  useEffect(() => {
    const saved = localStorage.getItem("selectedCurrencies");
    if (saved) {
      setFetchCurr(JSON.parse(saved));
    } else {
      setFetchCurr(defaultPairs);
      localStorage.setItem("selectedCurrencies", JSON.stringify(defaultPairs));
    }
  }, []);

  // Fetch live data
  useEffect(() => {
    if (fetchCurr.length === 0) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await liveCurrencyPrice(fetchCurr);
        setCurrencies(res);
      } catch (error) {
        console.error("Error fetching market data:", error);
      } finally {
        setLoading(false);
      }
    };

    const intervalId = setInterval(fetchData, 500);

    return () => clearInterval(intervalId);
  }, [fetchCurr]);

  // Add new currency
  const addNewCurrency = (symbol: string) => {
    setFetchCurr((prev) => {
      if (prev.includes(symbol)) return prev;
      const updated = [...prev, symbol];
      localStorage.setItem("selectedCurrencies", JSON.stringify(updated));
      return updated;
    });
  };

  // Remove currency
  const removeCurrency = (symbol: string) => {
    setFetchCurr((prev) => {
      const updated = prev.filter((item) => item !== symbol);
      localStorage.setItem("selectedCurrencies", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <section className="bg-[#141516] shadow-inner rounded py-2 flex flex-col lg:flex-[0.35] min-h-0 h-[55vh] lg:h-[65vh] border border-[#2a2b2d] overflow-hidden relative">
      {/* Search Input */}
      <div className="mb-3 px-2 relative">
        <input
          value={query}
          onFocus={() => setSearchOpen(true)}
          onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="🔍 Search currency..."
          className="w-full px-3 py-2 bg-[#0c0c0d] border border-[#2a2b2d] rounded text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#c8b560]"
        />

        {/* Search Dropdown */}
        {searchOpen && (
          <div className="absolute z-20 top-10 left-0 w-full bg-[#1e222d] border border-gray-700 rounded-lg max-h-52 overflow-y-auto shadow-lg">
            {filteredList.length > 0 ? (
              filteredList.map((item: string) => (
                <div
                  key={item}
                  onClick={() => addNewCurrency(item)}
                  className="px-3 py-2 hover:bg-[#2b313f] cursor-pointer text-sm text-white transition-colors duration-150 cursor-pointer"
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

      {/* Table */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <table className="min-w-full text-sm text-gray-300 border border-[#2a2b2d]">
          <thead className="bg-[#1d1f21] text-[#c8b560] uppercase text-xs sticky top-0">
            <tr>
              <th className="px-3 py-2 border border-[#2a2b2d]">Symbol</th>
              <th className="px-3 py-2 border border-[#2a2b2d]">High</th>
              <th className="px-3 py-2 border border-[#2a2b2d]">Low</th>
              <th className="px-3 py-2 border border-[#2a2b2d]">% Val</th>
              <th className="px-3 py-2 border border-[#2a2b2d] text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currencies.length > 0 ? (
              currencies.map((item) => (
                <tr key={item.symbol} className="hover:bg-[#1d1f21]">
                  <td
                    className="px-3 py-2 border border-[#2a2b2d] cursor-pointer"
                    onClick={() => {
                      dispatch(addNewChartSymbol({ symbol: item.symbol }));
                      localStorage.setItem("chartSymbol", item.symbol);
                    }}
                  >
                    {item.symbol}
                  </td>
                  <td className="px-3 py-2 border border-[#2a2b2d]">
                    {item.bid.toFixed(4)}
                  </td>
                  <td className="px-3 py-2 border border-[#2a2b2d]">
                    {item.ask.toFixed(4)}
                  </td>
                  <td
                    className={`px-3 py-2 border border-[#2a2b2d] ${
                      parseFloat(item.change) >= 0
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.change}%
                  </td>
                  <td className="px-3 py-2 border border-[#2a2b2d] text-center">
                    <button
                      onClick={() => removeCurrency(item.symbol)}
                      className="cursor-pointer text-white text-xs px-3 py-1 rounded"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-6 text-gray-400 italic"
                >
                  {loading ? "Loading data..." : "No currencies found"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
