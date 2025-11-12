import { useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { addNewChartInterval, addNewChartType } from "@/app/redux/chartSlice";
import BuySellModal from "./BuySellModal";
export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const [activeChart, setActiveChart] = useState("line");
  const [activeTimeframe, setActiveTimeframe] = useState("1H");

  const chartTypes = [
    { id: "line", icon: "📈", label: "Line Chart" },
    { id: "candlestick", icon: "🕯️", label: "Candlestick" },
    { id: "bar", icon: "📊", label: "Bar Chart" },
    { id: "area", icon: "🌈", label: "Area Chart" },
  ];

  const timeframes = ["1M", "5M", "15M", "30M", "1H", "4H", "1D", "1W", "1MN"];

  return (
    <header className="bg-gradient-to-r from-[#121212] via-[#1a1c1e] to-[#121212] text-white p-3 lg:p-4 flex flex-wrap justify-between items-center shadow-lg border-b border-[#2a2b2d]">
      {/* Left Controls */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Chart Types */}
        <div className="flex space-x-1">
          {chartTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setActiveChart(type.id);
                dispatch(addNewChartType({ type: type.id }));
                localStorage.setItem("chartType", type.id);
              }}
              className={clsx(
                "bg-[#222] hover:bg-[#383838] px-2 py-1 rounded text-sm transition cursor-pointer",
                activeChart === type.id
                  ? "bg-[#c8b560] text-black"
                  : "text-[#c8b560]"
              )}
              title={type.label}
            >
              {type.icon}
            </button>
          ))}
        </div>

        {/* Timeframes */}
        <div className="flex space-x-1 text-sm ml-2">
          {timeframes.map((t) => (
            <button
              key={t}
              onClick={() => {
                setActiveTimeframe(t);
                dispatch(addNewChartInterval({ interval: t }));
                localStorage.setItem("chartInterval", t);
              }}
              className={clsx(
                "bg-[#222] hover:bg-[#383838] px-2 py-1 rounded transition cursor-pointer",
                activeTimeframe === t
                  ? "bg-[#c8b560] text-black"
                  : "text-[#b8b8b8]"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Add Order */}
        <BuySellModal />
        <button
          className="bg-[#1e4d2b] hover:bg-[#268043] p-2 rounded cursor-pointer"
          title="Order Form"
        >
          🧾
        </button>

        {/* Zoom */}
        <button
          className="bg-[#222] hover:bg-[#383838] p-2 rounded cursor-pointer"
          title="Zoom In"
        >
          ➕🔍
        </button>
        <button
          className="bg-[#222] hover:bg-[#383838] p-2 rounded cursor-pointer"
          title="Zoom Out"
        >
          ➖🔍
        </button>
        <button
          className="bg-[#222] hover:bg-[#383838] p-2 rounded cursor-pointer"
          title="Reset Zoom"
        >
          🔄
        </button>
      </div>

      {/* Right Tools */}
      <div className="flex space-x-2 mt-2 lg:mt-0">
        <button
          className="bg-[#222] hover:bg-[#383838] p-2 rounded text-[#c8b560] cursor-pointer"
          title="Screenshot"
        >
          📸
        </button>
        <button
          className="bg-[#222] hover:bg-[#383838] p-2 rounded text-[#c8b560] cursor-pointer"
          title="Full Screen"
        >
          ⛶
        </button>
      </div>
    </header>
  );
}
