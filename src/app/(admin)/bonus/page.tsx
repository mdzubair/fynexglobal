"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Bonus {
  id: number;
  type: string;
  amount: number;
  date: string;
  status: string;
}

export default function MyBonusPage() {
  const [bonuses, setBonuses] = useState<Bonus[]>([]);
  const [filtered, setFiltered] = useState<Bonus[]>([]);
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Demo data
    const data: Bonus[] = [
      { id: 1, type: "Referral Bonus", amount: 25, date: "2025-10-01", status: "Approved" },
      { id: 2, type: "Deposit Bonus", amount: 50, date: "2025-09-15", status: "Pending" },
      { id: 3, type: "Trading Bonus", amount: 15, date: "2025-09-05", status: "Approved" },
      { id: 4, type: "Signup Bonus", amount: 10, date: "2025-08-28", status: "Rejected" },
      { id: 5, type: "Referral Bonus", amount: 30, date: "2025-08-10", status: "Approved" },
      { id: 6, type: "Deposit Bonus", amount: 75, date: "2025-07-30", status: "Pending" },
      { id: 7, type: "Trading Bonus", amount: 20, date: "2025-07-20", status: "Approved" },
    ];
    setBonuses(data);
    setFiltered(data);
  }, []);

  // Filter logic
  useEffect(() => {
    let data = bonuses;
    if (typeFilter !== "All") data = data.filter((b) => b.type === typeFilter);
    if (statusFilter !== "All") data = data.filter((b) => b.status === statusFilter);
    setFiltered(data);
    setCurrentPage(1);
  }, [typeFilter, statusFilter, bonuses]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <main
      className="flex-1 overflow-y-auto bg-[#0f1115] text-gray-100 p-4 sm:p-6 md:p-8 scrollbar-thin scrollbar-thumb-[#28b247]/40 scrollbar-track-[#1a1d24] scroll-smooth"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#28b247 #1a1d24",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[#181a20] p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-100">
          🎁 My Bonuses
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="text-sm text-gray-400 block mb-1">Bonus Type</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-[#1f2128] border border-[#2a2d34] rounded-md px-3 py-2 text-sm text-gray-200 outline-none focus:ring-1 focus:ring-[#28b247]"
            >
              <option value="All">All</option>
              <option value="Referral Bonus">Referral Bonus</option>
              <option value="Deposit Bonus">Deposit Bonus</option>
              <option value="Trading Bonus">Trading Bonus</option>
              <option value="Signup Bonus">Signup Bonus</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-[#1f2128] border border-[#2a2d34] rounded-md px-3 py-2 text-sm text-gray-200 outline-none focus:ring-1 focus:ring-[#28b247]"
            >
              <option value="All">All</option>
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-gray-400 border-b border-[#2a2d34]">
              <tr>
                <th className="py-3 px-4 text-left font-medium">Bonus Type</th>
                <th className="py-3 px-4 text-right font-medium">Amount ($)</th>
                <th className="py-3 px-4 text-right font-medium">Date</th>
                <th className="py-3 px-4 text-right font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((bonus) => (
                  <motion.tr
                    key={bonus.id}
                    whileHover={{ scale: 1.01 }}
                    className="border-b border-[#2a2d34] hover:bg-[#1f2128] transition"
                  >
                    <td className="py-2 px-4 font-medium text-gray-200">{bonus.type}</td>
                    <td className="py-2 px-4 text-right">${bonus.amount.toFixed(2)}</td>
                    <td className="py-2 px-4 text-right text-gray-400">{bonus.date}</td>
                    <td
                      className={`py-2 px-4 text-right font-medium ${
                        bonus.status === "Approved"
                          ? "text-green-400"
                          : bonus.status === "Pending"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {bonus.status}
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="py-4 px-4 text-center text-gray-400 italic"
                  >
                    No bonuses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-400">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                currentPage === 1
                  ? "bg-[#2a2d34] text-gray-500 cursor-not-allowed"
                  : "bg-[#1f2128] text-gray-200 hover:bg-[#252830]"
              }`}
            >
              Prev
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                currentPage === totalPages
                  ? "bg-[#2a2d34] text-gray-500 cursor-not-allowed"
                  : "bg-[#1f2128] text-gray-200 hover:bg-[#252830]"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
