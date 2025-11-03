"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

// ---------- TYPES ----------
interface Wallet {
  id: number;
  name: string;
  currency: string;
  balance: number;
}

interface Transaction {
  id: number;
  date: string;
  type: string;
  status: string;
  amount: string;
  wallet: string;
}

// ---------- DUMMY DATA ----------
const walletData: Wallet[] = [
  { id: 1, name: "Main USD Wallet", currency: "USD", balance: 12450.75 },
  { id: 2, name: "Crypto BTC Wallet", currency: "BTC", balance: 0.6542 },
  { id: 3, name: "INR Wallet", currency: "INR", balance: 98500.0 },
];

const transactions: Transaction[] = [
  {
    id: 1,
    date: "2025-11-01",
    type: "Deposit",
    status: "Completed",
    amount: "$500",
    wallet: "Main USD Wallet",
  },
  {
    id: 2,
    date: "2025-11-02",
    type: "Withdrawal",
    status: "Pending",
    amount: "$300",
    wallet: "Main USD Wallet",
  },
  {
    id: 3,
    date: "2025-11-03",
    type: "Transfer",
    status: "Completed",
    amount: "₹15,000",
    wallet: "INR Wallet",
  },
  {
    id: 4,
    date: "2025-11-04",
    type: "Deposit",
    status: "Failed",
    amount: "₿0.02",
    wallet: "Crypto BTC Wallet",
  },
];

// ---------- COMPONENT ----------
export default function WalletsPage() {
  const [wallets, setWallets] = useState<Wallet[]>(walletData);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [newWallet, setNewWallet] = useState<Pick<Wallet, "name" | "currency">>({
    name: "",
    currency: "USD",
  });

  // Filters
  const [activeTab, setActiveTab] = useState<"inout" | "transfers">("inout");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [type, setType] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 3;

  // Add new wallet
  const handleAddWallet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWallet.name.trim()) return;
    const newId = wallets.length + 1;
    const created: Wallet = {
      id: newId,
      name: newWallet.name,
      currency: newWallet.currency,
      balance: 0,
    };
    setWallets([...wallets, created]);
    setNewWallet({ name: "", currency: "USD" });
    setShowAdd(false);
  };

  // Filter transactions for selected wallet
  const filteredTx = transactions
    .filter((t) => (selectedWallet ? t.wallet === selectedWallet.name : true))
    .filter(
      (t) =>
        t.type.toLowerCase().includes(search.toLowerCase()) ||
        t.wallet.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) => (status === "All" ? true : t.status === status))
    .filter((t) => (type === "All" ? true : t.type === type));

  const totalPages = Math.ceil(filteredTx.length / perPage);
  const paginated = filteredTx.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Wallets</h1>

      {/* WALLET LIST */}
      {!selectedWallet && (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {wallets.map((wallet) => (
              <div
                key={wallet.id}
                onClick={() => setSelectedWallet(wallet)}
                className="bg-[#181a20] border border-gray-800 rounded-xl p-5 cursor-pointer hover:border-green-600 hover:shadow-green-500/20 transition-all"
              >
                <h2 className="text-lg font-semibold text-green-400">{wallet.name}</h2>
                <p className="text-sm text-gray-400">Currency: {wallet.currency}</p>
                <p className="text-xl font-bold mt-3">
                  {wallet.currency === "USD"
                    ? `$${wallet.balance}`
                    : wallet.currency === "INR"
                    ? `₹${wallet.balance}`
                    : `₿${wallet.balance}`}
                </p>
              </div>
            ))}

            {/* ADD WALLET CARD */}
            <div
              onClick={() => setShowAdd(true)}
              className="border-2 border-dashed border-gray-700 hover:border-green-500 rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer transition-all"
            >
              <PlusCircle size={32} className="text-green-500 mb-2" />
              <p className="text-gray-400">Add New Wallet</p>
            </div>
          </div>

          {/* ADD WALLET MODAL */}
          {showAdd && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-[#181a20] p-6 rounded-xl w-[90%] sm:w-[400px] border border-gray-700">
                <h2 className="text-xl font-semibold mb-4 text-center text-white">
                  Create New Wallet
                </h2>
                <form onSubmit={handleAddWallet} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Wallet Name"
                    value={newWallet.name}
                    onChange={(e) =>
                      setNewWallet({ ...newWallet, name: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-[#1f2128] rounded-md border border-gray-700 focus:border-green-500 outline-none text-gray-200"
                  />
                  <select
                    value={newWallet.currency}
                    onChange={(e) =>
                      setNewWallet({ ...newWallet, currency: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-[#1f2128] rounded-md border border-gray-700 focus:border-green-500 outline-none text-gray-200"
                  >
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="BTC">BTC</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-green-600 py-2 rounded-md font-semibold hover:bg-green-700 transition-all"
                  >
                    Create Wallet
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAdd(false)}
                    className="w-full border border-gray-700 py-2 rounded-md mt-2 hover:border-green-600 hover:text-green-400 transition-all"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}

      {/* WALLET DETAILS */}
      {selectedWallet && (
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setSelectedWallet(null)}
            className="mb-6 px-4 py-2 text-sm border border-gray-700 rounded-md hover:border-green-500 hover:text-green-400 transition-all"
          >
            ← Back to Wallets
          </button>

          <div className="bg-[#181a20] rounded-xl p-6 mb-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-green-400">
              {selectedWallet.name}
            </h2>
            <p className="text-gray-400 text-sm mb-2">
              Currency: {selectedWallet.currency}
            </p>
            <p className="text-lg font-bold">Balance: {selectedWallet.balance}</p>
          </div>

          {/* TABS */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setActiveTab("inout")}
              className={`px-6 py-2 rounded-l-md border ${
                activeTab === "inout"
                  ? "bg-green-600 border-green-600 text-white"
                  : "border-gray-700 text-gray-300 hover:text-green-400"
              }`}
            >
              In–Out Requests
            </button>
            <button
              onClick={() => setActiveTab("transfers")}
              className={`px-6 py-2 rounded-r-md border ${
                activeTab === "transfers"
                  ? "bg-green-600 border-green-600 text-white"
                  : "border-gray-700 text-gray-300 hover:text-green-400"
              }`}
            >
              Internal Transfers
            </button>
          </div>

          {/* FILTERS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md bg-[#1f2128] border border-gray-700 focus:border-green-500 outline-none text-gray-200 w-full sm:w-1/3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="px-4 py-2 rounded-md bg-[#1f2128] border border-gray-700 focus:border-green-500 outline-none text-gray-200"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>All</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
            <select
              className="px-4 py-2 rounded-md bg-[#1f2128] border border-gray-700 focus:border-green-500 outline-none text-gray-200"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>All</option>
              <option>Deposit</option>
              <option>Withdrawal</option>
              <option>Transfer</option>
            </select>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto border border-gray-800 rounded-xl">
            <table className="min-w-full text-sm text-gray-300">
              <thead className="bg-[#1a1c22] border-b border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length > 0 ? (
                  paginated.map((t) => (
                    <tr
                      key={t.id}
                      className="border-b border-gray-800 hover:bg-[#1f2329] transition-colors"
                    >
                      <td className="px-4 py-3">{t.date}</td>
                      <td className="px-4 py-3">{t.type}</td>
                      <td
                        className={`px-4 py-3 font-medium ${
                          t.status === "Completed"
                            ? "text-green-400"
                            : t.status === "Pending"
                            ? "text-yellow-400"
                            : "text-red-400"
                        }`}
                      >
                        {t.status}
                      </td>
                      <td className="px-4 py-3 text-right">{t.amount}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-6 text-gray-500">
                      No transactions found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 text-sm rounded-md border transition-all ${
                  page === i + 1
                    ? "bg-green-600 border-green-600 text-white"
                    : "border-gray-700 text-gray-300 hover:border-green-600 hover:text-green-400"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
