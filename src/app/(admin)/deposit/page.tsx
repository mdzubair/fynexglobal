"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { ArrowRight, CreditCard, Wallet, Info, QrCode } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const ACCENT = "#28b247";

export default function DepositPage() {
  const [step, setStep] = useState<Step>(1);
  const [method, setMethod] = useState<string | null>(null);

  const methods = [
    {
      id: "gatewayhub",
      title: "GatewayHub",
      min: 10,
      max: 5000,
      commission: "2%",
      description: "Fast and secure deposit through GatewayHub.",
    },
    {
      id: "usdt",
      title: "USDT (Manual)",
      min: 50,
      max: 10000,
      commission: "0%",
      description: "Deposit manually using your USDT wallet address.",
    },
  ];

  return (
    <div className="w-full bg-[#0f1115] text-gray-100 py-10 px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[1200px] bg-[#181a20] p-8 rounded-2xl shadow-2xl border border-[#222] relative overflow-hidden"
      >
        {/* Animated Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Deposit Funds
          </h1>
          <p className="text-gray-400 text-sm">
            Complete your deposit in just a few easy steps
          </p>
        </div>

        {/* Step Progress */}
        <div className="flex justify-between mb-10 relative">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex-1 flex items-center justify-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all ${
                  step >= num
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-gray-600 text-gray-400"
                }`}
              >
                {num}
              </div>
              {num < 4 && (
                <div
                  className={`flex-1 h-[2px] ${
                    step > num ? "bg-green-500" : "bg-gray-700"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* --- STEP 1: Select Method --- */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-xl font-semibold mb-6 text-center">
                Step 1 — Select Deposit Method
              </h2>

              <div className="flex flex-wrap justify-center gap-6">
                {methods.map((m) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    key={m.id}
                    className="relative"
                  >
                    <button
                      data-tooltip-id={`tooltip-${m.id}`}
                      onClick={() => setMethod(m.id)}
                      className={`px-8 py-5 rounded-xl border-2 transition-all w-72 flex flex-col items-center justify-center gap-3 ${
                        method === m.id
                          ? "border-green-500 bg-green-500/10 shadow-lg shadow-green-500/10"
                          : "border-gray-700 hover:border-green-500 hover:bg-[#1d1f27]"
                      }`}
                    >
                      <CreditCard
                        size={28}
                        className="text-green-400 mb-1"
                      />
                      <span className="text-lg font-medium">{m.title}</span>
                    </button>

                    <Tooltip
                      id={`tooltip-${m.id}`}
                      place="top"
                      className="bg-[#222] text-gray-200 p-3 text-sm rounded-md shadow-lg max-w-xs"
                    >
                      <div>
                        <p>
                          <strong>Min:</strong> ${m.min}
                        </p>
                        <p>
                          <strong>Max:</strong> ${m.max}
                        </p>
                        <p>
                          <strong>Commission:</strong> {m.commission}
                        </p>
                        <p>{m.description}</p>
                      </div>
                    </Tooltip>
                  </motion.div>
                ))}
              </div>

              {method && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 bg-[#1f2128] p-6 rounded-lg border border-gray-700"
                >
                  <h3 className="text-lg font-semibold mb-3 text-green-400">
                    Selected Method Details
                  </h3>
                  {methods
                    .filter((m) => m.id === method)
                    .map((m) => (
                      <div key={m.id} className="text-gray-300 space-y-1">
                        <p>
                          <strong>Title:</strong> {m.title}
                        </p>
                        <p>
                          <strong>Min:</strong> ${m.min}
                        </p>
                        <p>
                          <strong>Max:</strong> ${m.max}
                        </p>
                        <p>
                          <strong>Commission:</strong> {m.commission}
                        </p>
                        <p>
                          <strong>Description:</strong> {m.description}
                        </p>
                      </div>
                    ))}
                  <button
                    onClick={() => setStep(2)}
                    className="mt-6 px-8 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium flex items-center justify-center mx-auto gap-2"
                  >
                    Confirm <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* --- STEP 2: Specify Amount --- */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h2 className="text-xl font-semibold mb-6">
                Step 2 — Specify Deposit Amount
              </h2>

              <div className="flex justify-center gap-6 mb-8 flex-wrap">
                <button className="px-6 py-2 border border-green-500 rounded-md hover:bg-green-600/20 flex items-center gap-2">
                  <Wallet size={18} /> Wallet
                </button>
                <button className="px-6 py-2 border border-green-500 rounded-md hover:bg-green-600/20 flex items-center gap-2">
                  <CreditCard size={18} /> Account
                </button>
              </div>

              <input
                type="number"
                placeholder="Enter Amount"
                className="p-3 rounded-md w-72 bg-[#1f2128] border border-gray-700 mb-4 outline-none focus:border-green-500"
              />
              <br />
              <select className="p-3 rounded-md w-72 bg-[#1f2128] border border-gray-700 text-gray-300 outline-none focus:border-green-500">
                <option>Select Currency</option>
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
              </select>

              <button
                onClick={() => setStep(3)}
                className="mt-8 px-8 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium flex items-center justify-center mx-auto gap-2"
              >
                Continue <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {/* --- STEP 3: Additional Info --- */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h2 className="text-xl font-semibold mb-6">
                Step 3 — Enter Additional Information
              </h2>
              <textarea
                placeholder="Enter any additional info..."
                className="p-3 w-80 h-28 bg-[#1f2128] border border-gray-700 rounded-md text-gray-200 outline-none focus:border-green-500"
              />
              <br />
              <button
                onClick={() => setStep(4)}
                className="mt-8 px-8 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium flex items-center justify-center mx-auto gap-2"
              >
                Continue <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {/* --- STEP 4: QR Payment --- */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h2 className="text-xl font-semibold mb-6">
                Step 4 — Make Payment
              </h2>
              <div className="bg-[#1f2128] inline-block p-8 rounded-lg shadow-md border border-gray-700">
                <QrCode size={60} className="text-green-500 mx-auto mb-4" />
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?data=payment_link&size=150x150"
                  alt="QR Code"
                  className="mx-auto mb-4 rounded-md"
                />
                <p className="text-sm text-gray-400">
                  Scan this QR to complete your payment securely.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
