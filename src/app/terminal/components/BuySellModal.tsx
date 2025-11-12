"use client";
import { useEffect, useState } from "react";
import { StretchHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { fetchLiveValue } from "@/app/lib/terminal";
import { createOrder } from "@/app/redux/orderSlice";

interface LiveData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export default function BuySellModal() {
  const dispatch = useDispatch<AppDispatch>();
  const symbol = useSelector((state: RootState) => state.chartData.symbol);
  const [chartSymbol, setChartSymbol] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [volume, setVolume] = useState(0.01);
  const [liveVal, setLiveVal] = useState<LiveData | null>(null);

  const handleVolumeChange = (value: number) => {
    setVolume((prev) => Math.max(0, parseFloat((prev + value).toFixed(2))));
  };

  useEffect(() => {
    const savedSymbol = localStorage.getItem("chartSymbol") || "";
    setChartSymbol(savedSymbol);
  }, [symbol]);

  // ✅ Fetch live data every 1s only when modal is open
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const getLiveValue = async () => {
      if (!chartSymbol) return;
      const data = await fetchLiveValue(chartSymbol);
      if (data) setLiveVal(data);
    };

    if (open && chartSymbol) {
      getLiveValue();
      intervalId = setInterval(getLiveValue, 10000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [open, chartSymbol]);

  return (
    <div>
      {/* ✅ OPEN BUTTON */}
      <StretchHorizontal
        size={24}
        className="text-white bg-[#222] hover:bg-[#383838] p-1 rounded transition cursor-pointer"
        onClick={() => setOpen(true)}
      />

      {/* ✅ MODAL OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex">
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-1 bg-[#1e1e1e] px-3 py-2 rounded-md border border-gray-700 shadow-lg relative">
              <label htmlFor={`${chartSymbol}`}>{chartSymbol}</label>

              {/* SELL PRICE */}
              <div className="px-3 py-2 bg-[#2b2b2b] text-red-400 text-sm font-semibold rounded-l-md border border-gray-700">
                {liveVal?.high?.toFixed(5) ?? "--"}
              </div>

              {/* SELL BUTTON */}
              <button
                className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold border border-gray-700 rounded-md"
                onClick={() => {
                  dispatch(
                    createOrder({
                      orderType: "sale",
                      symbol: chartSymbol,
                      high: liveVal?.high,
                      low: liveVal?.low,
                      volume: volume,
                    })
                  );
                  setOpen(false);
                }}
              >
                SELL
              </button>

              {/* VOLUME CONTROL */}
              <div className="flex items-center border border-gray-700 rounded-md mx-1 bg-[#2b2b2b]">
                <button
                  onClick={() => handleVolumeChange(-0.01)}
                  className="px-2 py-2 text-gray-400 hover:bg-[#333]"
                >
                  ▽
                </button>
                <input
                  type="text"
                  value={volume.toFixed(2)}
                  readOnly
                  className="w-[55px] text-center text-sm bg-transparent text-white outline-none"
                />
                <button
                  onClick={() => handleVolumeChange(0.01)}
                  className="px-2 py-2 text-gray-400 hover:bg-[#333]"
                >
                  △
                </button>
              </div>

              {/* BUY BUTTON */}
              <button
                className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold border border-gray-700 rounded-md"
                onClick={() => {
                  dispatch(
                    createOrder({
                      orderType: "buy",
                      symbol: chartSymbol,
                      high: liveVal?.high,
                      low: liveVal?.low,
                      volume: volume,
                    })
                  );
                  setOpen(false);
                }}
              >
                BUY
              </button>

              {/* BUY PRICE */}
              <div className="px-3 py-2 bg-[#2b2b2b] text-blue-400 text-sm font-semibold rounded-r-md border border-gray-700">
                {liveVal?.low?.toFixed(5) ?? "--"}
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-2 -right-2 bg-gray-700 text-gray-300 hover:text-white w-5 h-5 rounded-full text-xs flex items-center justify-center border border-gray-600"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
