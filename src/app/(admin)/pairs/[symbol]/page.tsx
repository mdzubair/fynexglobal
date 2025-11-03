"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { subDays, subWeeks, subMonths, subYears, format } from "date-fns";

const API_KEY = "09a9AbeLiRNrOmNo6P7V";

interface LatestBidData {
  date: string;
  close: number;
  open: number;
  high: number;
  low: number;
  percentage: number;
}

export default function PairDetailsPage() {
  const params = useParams();
  const symbol = (params?.symbol as string) ?? "USDINR";

  const [currentBid, setCurrentData] = useState<LatestBidData | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const [chartOptions, setChartOptions] = useState<any>({});
  const [activeTimeframe, setActiveTimeframe] = useState<
    "1D" | "1W" | "1M" | "1Y"
  >("1D");
  const [quantity, setQuantity] = useState<number>(1);

  // Chart title setter (moved up before it's used)
  const setChartTitle = (data: any) => {
    const color = data.percentage >= 0 ? "#00C853" : "#FF1744";
    setChartOptions({
      chart: {
        type: "candlestick",
        height: 400,
        background: "#1f2128",
        foreColor: "#fff",
        toolbar: { show: false },
      },
      title: {
        text: `${symbol}  — ${
          data.percentage > 0 ? "+" : ""
        }${data.percentage}%`,
        align: "left",
        style: {
          color,
          fontSize: "16px",
          fontWeight: 600,
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          rotate: -45,
          style: { colors: "#ccc" },
        },
      },
      yaxis: {
        tooltip: { enabled: true },
        labels: { style: { colors: "#ccc" } },
      },
      tooltip: {
        theme: "dark",
        x: { format: "dd MMM yyyy HH:mm" },
      },
      grid: { borderColor: "#333" },
    });
  };

  // Fetch trade (Buy/Sell) data only once onload
  const fetchTradePrice = async () => {
    try {
      const end_date = format(new Date(), "yyyy-MM-dd");
      let start_date = format(subDays(new Date(), 1), "yyyy-MM-dd");
      let interval = "minute";

      // 🔹 First API call (1D - minute)
      let res = await axios.get(
        "https://marketdata.tradermade.com/api/v1/timeseries",
        {
          params: {
            currency: symbol,
            api_key: API_KEY,
            start_date,
            end_date,
            interval,
          },
        }
      );
      setActiveTimeframe("1D");

      // 🔹 If minute data is empty, fallback to 1W hourly
      if (!Array.isArray(res.data?.quotes) || res.data.quotes.length === 0) {
        setActiveTimeframe("1W");
        start_date = format(subWeeks(new Date(), 1), "yyyy-MM-dd");
        interval = "hourly";
        res = await axios.get(
          "https://marketdata.tradermade.com/api/v1/timeseries",
          {
            params: {
              currency: symbol,
              api_key: API_KEY,
              start_date,
              end_date,
              interval,
            },
          }
        );
      }

      // ✅ If we got data
      if (Array.isArray(res.data?.quotes) && res.data.quotes.length > 0) {
        const quotes = res.data.quotes;
        const last = quotes[quotes.length - 1];
        const percentage = ((last.close - last.open) / last.open) * 100;

        // ✅ Set current buy/sell
        setCurrentData({
          date: last.date,
          open: Number(last.open),
          close: Number(last.close),
          high: Number(last.high),
          low: Number(last.low),
          percentage: parseFloat(percentage.toFixed(2)),
        });

        // ✅ Format for chart
        const formatted = quotes.map((q: any) => ({
          x: new Date(q.date),
          y: [Number(q.open), Number(q.high), Number(q.low), Number(q.close)],
        }));

        setChartData(formatted);

        // ✅ Chart title update
        const lastCandle = quotes[quotes.length - 1];
        const lastPct =
          ((lastCandle.close - lastCandle.open) / lastCandle.open) * 100;
        setChartTitle({
          ...lastCandle,
          percentage: parseFloat(lastPct.toFixed(2)),
        });
      } else {
        console.warn("⚠️ No data available for this symbol:", symbol);
      }
    } catch (error) {
      console.error("❌ Error fetching trade data:", error);
    }
  };

  // Chart fetcher by timeframe
  const fetchChartData = async (tf: "1D" | "1W" | "1M" | "1Y") => {
    try {
      let interval = "minute";
      let start_date = format(subDays(new Date(), 1), "yyyy-MM-dd");
      let end_date = format(new Date(), "yyyy-MM-dd");

      if (tf === "1W") {
        interval = "hourly";
        start_date = format(subWeeks(new Date(), 1), "yyyy-MM-dd");
      } else if (tf === "1M") {
        interval = "hourly";
        start_date = format(subMonths(new Date(), 1), "yyyy-MM-dd");
      } else if (tf === "1Y") {
        interval = "daily";
        start_date = format(subYears(new Date(), 1), "yyyy-MM-dd");
      }

      const res = await axios.get(
        "https://marketdata.tradermade.com/api/v1/timeseries",
        {
          params: { currency: symbol, api_key: API_KEY, start_date, end_date, interval },
        }
      );

      if (Array.isArray(res.data?.quotes)) {
        const formatted = res.data.quotes.map((q: any) => ({
          x: new Date(q.date),
          y: [Number(q.open), Number(q.high), Number(q.low), Number(q.close)],
        }));

        setChartData(formatted);

        if (res.data.quotes.length > 0) {
          const last = res.data.quotes[res.data.quotes.length - 1];
          const percentage = ((last.close - last.open) / last.open) * 100;
          setChartTitle({
            ...last,
            percentage: parseFloat(percentage.toFixed(2)),
          });
        }
      }
    } catch (error) {
      console.error("❌ Error fetching chart data:", error);
    }
  };

  useEffect(() => {
    fetchTradePrice(); // buy/sell price
  }, [symbol]);

  const handleTimeframeClick = (tf: "1D" | "1W" | "1M" | "1Y") => {
    setActiveTimeframe(tf);
    fetchChartData(tf);
  };

  return (
    <div className="text-white p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        {symbol} {activeTimeframe} Market Overview
      </h1>

      {/* 📊 Timeframe Buttons */}
      <div className="flex flex-wrap gap-3">
        {["1D", "1W", "1M", "1Y"].map((tf) => (
          <button
            key={tf}
            onClick={() => handleTimeframeClick(tf as any)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTimeframe === tf
                ? "bg-blue-600 text-white"
                : "bg-[#2b2d36] text-gray-300 hover:bg-[#3a3c45]"
            }`}
          >
            {tf}
          </button>
        ))}
      </div>

      {/* 💰 Buy/Sell Section */}
      {currentBid && (
        <div className="bg-[#1f2128] p-5 rounded-xl grid md:grid-cols-2 gap-6">
          {/* Buy Card */}
          <div className="bg-[#232530] p-5 rounded-xl shadow-md border border-green-600">
            <h2 className="text-lg font-semibold text-green-400 mb-2">BUY</h2>
            <p className="text-gray-300 mb-2">Price: ₹{currentBid.close}</p>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min={1}
                className="w-24 p-2 rounded bg-[#2b2d36] text-white outline-none"
              />
              <button className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Place Buy
              </button>
            </div>
          </div>

          {/* Sell Card */}
          <div className="bg-[#232530] p-5 rounded-xl shadow-md border border-red-600">
            <h2 className="text-lg font-semibold text-red-400 mb-2">SELL</h2>
            <p className="text-gray-300 mb-2">Price: ₹{currentBid.close}</p>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min={1}
                className="w-24 p-2 rounded bg-[#2b2d36] text-white outline-none"
              />
              <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition">
                Place Sell
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🕒 Chart */}
      {chartData.length > 0 ? (
        <div className="bg-[#1f2128] p-4 rounded-xl">
          <Chart
            options={chartOptions}
            series={[{ data: chartData }]}
            type="candlestick"
            height={400}
          />
          <p className="text-center text-sm text-gray-400 mt-2">
            Showing{" "}
            {activeTimeframe === "1D"
              ? "minute"
              : activeTimeframe === "1W"
              ? "hourly"
              : activeTimeframe === "1M"
              ? "daily"
              : "hourly"}{" "}
            data
          </p>
        </div>
      ) : (
        <p className="text-gray-400">Loading chart data...</p>
      )}
    </div>
  );
}
