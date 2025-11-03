"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ACCENT = "#28b247";

type RangeOption = "1D" | "1W" | "1M" | "6M" | "1Y";

interface CandleData {
  x: string;
  y: [number, number, number, number];
}

interface Transaction {
  id: number;
  date: string;
  type: string;
  amount: number;
  status: string;
}

export default function TransactionsPage() {
  const [range, setRange] = useState<RangeOption>("1D");
  const [series, setSeries] = useState<any[]>([]);
  const [options, setOptions] = useState<any>({});
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [donutSeries, setDonutSeries] = useState<number[]>([]);
  const [donutOptions, setDonutOptions] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const rangeToDays: Record<RangeOption, number> = {
    "1D": 1,
    "1W": 7,
    "1M": 30,
    "6M": 180,
    "1Y": 365,
  };

  useEffect(() => {
    // generateChart(rangeToDays[range]);
    generateTransactions(rangeToDays[range]);
  }, [range]);

//   const generateChart = (days: number) => {
//     const data: CandleData[] = [];
//     const now = new Date();

//     let price = 1000;

//     for (let i = days; i >= 0; i--) {
//       const d = new Date(now);
//       d.setDate(now.getDate() - i);

//       const open = price + (Math.random() - 0.5) * 20;
//       const close = open + (Math.random() - 0.5) * 20;
//       const high = Math.max(open, close) + Math.random() * 10;
//       const low = Math.min(open, close) - Math.random() * 10;
//       price = close;

//       data.push({
//         x: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
//         y: [open, high, low, close],
//       });
//     }

//     setSeries([{ name: "Price", data }]);

//     setOptions({
//       chart: {
//         type: "candlestick",
//         height: 350,
//         toolbar: { show: false },
//         background: "#1f2128",
//         foreColor: "#aaa",
//       },
//       grid: { borderColor: "#2a2d34" },
//       plotOptions: {
//         candlestick: {
//           colors: {
//             upward: ACCENT,
//             downward: "#ef4444",
//           },
//         },
//       },
//       xaxis: {
//         type: "category",
//         labels: { style: { colors: "#aaa" } },
//       },
//       yaxis: {
//         tooltip: { enabled: true },
//         labels: {
//           style: { colors: "#aaa" },
//           formatter: (val: number) => `$${val.toFixed(2)}`,
//         },
//       },
//       tooltip: { theme: "dark" },
//     });
//   };

  const generateTransactions = (days: number) => {
    const list: Transaction[] = [];
    const now = new Date();
    let deposit = 0;
    let withdrawal = 0;

    for (let i = 0; i < days * 3; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const type = Math.random() > 0.5 ? "Deposit" : "Withdrawal";
      const amount = parseFloat((100 + Math.random() * 900).toFixed(2));

      if (type === "Deposit") deposit += amount;
      else withdrawal += amount;

      list.push({
        id: i + 1,
        date: d.toLocaleDateString(),
        type,
        amount,
        status:
          Math.random() > 0.8
            ? "Failed"
            : Math.random() > 0.5
            ? "Pending"
            : "Completed",
      });
    }

    setTransactions(list);
    setDonutSeries([deposit, withdrawal]);

    setDonutOptions({
      chart: {
        type: "donut",
        background: "#1f2128",
      },
      labels: ["Deposit", "Withdrawal"],
      colors: [ACCENT, "#ef4444"],
      dataLabels: {
        enabled: true,
        style: { colors: ["#fff"] },
      },
      legend: {
        position: "bottom",
        labels: { colors: "#aaa" },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total",
                color: "#fff",
                formatter: () =>
                  `$${(deposit + withdrawal).toFixed(2)}`,
              },
            },
          },
        },
      },
    });
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = transactions.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100 p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#181a20] p-6 rounded-2xl shadow-lg"
      >
        {/* Header + Range Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h1 className="text-2xl font-semibold">Transactions Overview</h1>

          <div className="flex gap-2 flex-wrap">
            {(["1D", "1W", "1M", "6M", "1Y"] as RangeOption[]).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  range === r
                    ? "bg-green-500 text-white"
                    : "bg-[#1f2128] text-gray-400 hover:bg-[#252830]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Candle Chart */}
        {/* <div className="bg-[#1f2128] p-4 rounded-xl mb-8">
          <Chart options={options} series={series} type="candlestick" height={350} />
        </div> */}

        {/* Donut Chart */}
        <div className="bg-[#1f2128] p-4 rounded-xl mb-8 flex justify-center">
          <Chart options={donutOptions} series={donutSeries} type="donut" width={400} />
        </div>

        {/* Table Section */}
        <div className="bg-[#1f2128] p-4 rounded-xl overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-gray-400 border-b border-[#2a2d34]">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-[#2a2d34] hover:bg-[#22252d] transition"
                >
                  <td className="py-2 px-4">{t.id}</td>
                  <td className="py-2 px-4">{t.date}</td>
                  <td className="py-2 px-4">{t.type}</td>
                  <td className="py-2 px-4">${t.amount}</td>
                  <td
                    className={`py-2 px-4 font-medium ${
                      t.status === "Completed"
                        ? "text-green-400"
                        : t.status === "Pending"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {t.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md bg-[#252830] hover:bg-[#2a2d34] disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-gray-400 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md bg-[#252830] hover:bg-[#2a2d34] disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
