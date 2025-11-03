"use client";

import { useState } from "react";

const allPayments = [
  { id: 1, date: "2025-11-01", user: "John Doe", type: "Deposit", status: "Completed", amount: "$1,200" },
  { id: 2, date: "2025-11-02", user: "Jane Smith", type: "Withdrawal", status: "Pending", amount: "$300" },
  { id: 3, date: "2025-11-03", user: "Amit Kumar", type: "Deposit", status: "Failed", amount: "$800" },
  { id: 4, date: "2025-11-03", user: "Sara Lee", type: "Transfer", status: "Completed", amount: "$500" },
  { id: 5, date: "2025-11-04", user: "Michael Brown", type: "Withdrawal", status: "Completed", amount: "$2,000" },
  { id: 6, date: "2025-11-05", user: "Priya Patel", type: "Transfer", status: "Pending", amount: "$700" },
];

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState("deposits");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [type, setType] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filteredData = allPayments
    .filter((item) =>
      activeTab === "deposits" ? item.type !== "Transfer" : item.type === "Transfer"
    )
    .filter(
      (item) =>
        item.user.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) => (status === "All" ? true : item.status === status))
    .filter((item) => (type === "All" ? true : item.type === type));

  const totalPages = Math.ceil(filteredData.length / perPage);
  const paginated = filteredData.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Payments</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab("deposits")}
          className={`px-6 py-2 rounded-l-lg text-sm font-medium border ${
            activeTab === "deposits"
              ? "bg-green-600 text-white border-green-600"
              : "border-gray-600 text-gray-300 hover:border-green-600 hover:text-green-400"
          }`}
        >
          Deposits & Withdrawals
        </button>
        <button
          onClick={() => setActiveTab("transfers")}
          className={`px-6 py-2 rounded-r-lg text-sm font-medium border ${
            activeTab === "transfers"
              ? "bg-green-600 text-white border-green-600"
              : "border-gray-600 text-gray-300 hover:border-green-600 hover:text-green-400"
          }`}
        >
          Internal Transfers
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
        <input
          type="text"
          placeholder="Search by user or type..."
          className="px-4 py-2 w-full sm:w-1/3 rounded-md bg-[#181a20] border border-gray-700 focus:outline-none focus:border-green-600 text-gray-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 rounded-md bg-[#181a20] border border-gray-700 focus:outline-none focus:border-green-600 text-gray-200"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
        <select
          className="px-4 py-2 rounded-md bg-[#181a20] border border-gray-700 focus:outline-none focus:border-green-600 text-gray-200"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>All</option>
          <option>Deposit</option>
          <option>Withdrawal</option>
          <option>Transfer</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-w-5xl mx-auto border border-gray-800 rounded-xl shadow-lg">
        <table className="min-w-full text-sm text-gray-300">
          <thead className="bg-[#181a20] border-b border-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">User</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length > 0 ? (
              paginated.map((p) => (
                <tr key={p.id} className="border-b border-gray-800 hover:bg-[#1c1f25] transition-colors">
                  <td className="px-4 py-3">{p.date}</td>
                  <td className="px-4 py-3">{p.user}</td>
                  <td className="px-4 py-3">{p.type}</td>
                  <td
                    className={`px-4 py-3 font-medium ${
                      p.status === "Completed"
                        ? "text-green-400"
                        : p.status === "Pending"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {p.status}
                  </td>
                  <td className="px-4 py-3 text-right">{p.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500 text-sm">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 text-sm rounded-md font-medium border transition-all duration-300 ${
              page === i + 1
                ? "bg-green-600 border-green-600 text-white"
                : "border-gray-600 text-gray-300 hover:border-green-600 hover:text-green-400"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
