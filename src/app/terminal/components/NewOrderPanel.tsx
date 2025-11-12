// "use client";
// import React, { useState } from "react";
// import { Clock } from "lucide-react";

// export default function NewOrderModal() {
//   const [open, setOpen] = useState(false);
//   const [orderType, setOrderType] = useState<"buy" | "sell" | null>(null);
//   const [volume, setVolume] = useState(0);
//   const [comment, setComment] = useState("");

//   const handleChange = (value: number) => {
//     setVolume((prev) => Math.max(0, parseFloat((prev + value).toFixed(2))));
//   };

//   const openModal = (type: "buy" | "sell") => {
//     setOrderType(type);
//     setOpen(true);
//   };

//   const closeModal = () => {
//     setOpen(false);
//     setOrderType(null);
//     setVolume(0);
//     setComment("");
//   };

//   return (
//     <div>
//       {/* Open Button */}
//       <button
//         onClick={() => openModal("buy")}
//         className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-rose-600 to-rose-700 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
//       >
//         <Clock size={14} />
//         <span>Order</span>
//       </button>

//       {/* Overlay + Modal */}
//       {open && (
//         <div className="fixed inset-0 flex z-[9999] bg-black/40 backdrop-blur-sm">
//           {/* Side Modal */}
//           <div
//             className={`bg-[#1b1b1d] text-white w-[360px] h-full border-r border-gray-700 shadow-2xl p-5 
//                         transform transition-transform duration-300 ease-in-out`}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center mb-5">
//               <h2 className="text-[15px] font-semibold">
//                 {orderType === "buy" ? "Buy by Market" : "Sell by Market"}
//               </h2>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-400 hover:text-white text-lg transition-colors"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Volume Input */}
//             <div className="mb-5">
//               <label className="text-xs text-gray-400">Volume</label>
//               <div className="flex items-center mt-2 bg-[#2a2a2c] rounded-md overflow-hidden border border-gray-700">
//                 <button
//                   onClick={() => handleChange(-0.01)}
//                   className="px-3 py-2 text-gray-400 hover:bg-[#333]"
//                 >
//                   −
//                 </button>
//                 <input
//                   type="text"
//                   value={volume.toFixed(2)}
//                   readOnly
//                   className="flex-1 text-center bg-transparent py-2 text-sm text-white outline-none"
//                 />
//                 <button
//                   onClick={() => handleChange(0.01)}
//                   className="px-3 py-2 text-gray-400 hover:bg-[#333]"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="text-[11px] text-right text-gray-500 mt-1">
//                 {volume.toFixed(2)} BTC
//               </p>
//             </div>

//             {/* Comment */}
//             <div className="mb-5">
//               <label className="text-xs text-gray-400">Comment</label>
//               <textarea
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 className="w-full mt-2 bg-[#2a2a2c] border border-gray-700 rounded-md p-2 text-sm resize-none focus:ring-1 focus:ring-blue-500 outline-none"
//                 rows={2}
//                 placeholder="Enter comment..."
//               />
//             </div>

//             {/* Live Prices */}
//             <div className="flex justify-between text-[13px] font-semibold mb-5">
//               <div className="px-3 py-2 bg-[#2a2a2c] rounded-md text-red-400 border border-gray-700">
//                 103 485.831
//               </div>
//               <div className="px-3 py-2 bg-[#2a2a2c] rounded-md text-blue-400 border border-gray-700">
//                 103 487.657
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="grid grid-cols-2 gap-2">
//               <button
//                 disabled={orderType !== "sell"}
//                 className={`py-2 rounded-md font-semibold transition-all duration-300 shadow-md ${
//                   orderType === "sell"
//                     ? "bg-gradient-to-r from-red-600 to-red-700 hover:brightness-110"
//                     : "bg-red-900/40 cursor-not-allowed text-gray-500"
//                 }`}
//               >
//                 Sell by Market
//               </button>
//               <button
//                 disabled={orderType !== "buy"}
//                 className={`py-2 rounded-md font-semibold transition-all duration-300 shadow-md ${
//                   orderType === "buy"
//                     ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:brightness-110"
//                     : "bg-blue-900/40 cursor-not-allowed text-gray-500"
//                 }`}
//               >
//                 Buy by Market
//               </button>
//             </div>
//           </div>

//           {/* Click background to close */}
//           <div onClick={closeModal} className="flex-1 cursor-pointer"></div>
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";
// import React, { useState } from "react";
// import { Clock } from "lucide-react";

// export default function NewOrderModal() {
//   const [open, setOpen] = useState(false);
//   const [volume, setVolume] = useState(0.01);
//   const [stopLoss, setStopLoss] = useState("");
//   const [takeProfit, setTakeProfit] = useState("");
//   const [comment, setComment] = useState("");

//   const handleVolumeChange = (value: number) => {
//     setVolume((prev) => Math.max(0, parseFloat((prev + value).toFixed(2))));
//   };

//   return (
//     <div className="relative">
//       {/* Open Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="flex items-center gap-1 text-xs px-3 py-1.5 rounded bg-gradient-to-r from-rose-600 to-rose-700 text-white font-semibold shadow hover:brightness-110 transition-all"
//       >
//         <Clock size={14} />
//         <span>Order</span>
//       </button>

//       {/* Modal */}
//       {open && (
//         <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-start justify-start">
//           <div className="bg-white text-black rounded-md shadow-2xl w-[350px] mt-10 ml-10 border border-gray-300">
//             {/* Header */}
//             <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
//               <h2 className="text-[14px] font-semibold">Market Execution</h2>
//               <button
//                 onClick={() => setOpen(false)}
//                 className="text-gray-500 hover:text-black text-[18px] leading-none"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="p-4 space-y-4">
//               {/* Volume */}
//               <div>
//                 <div className="flex justify-between text-xs text-gray-600 mb-1">
//                   <label>Volume</label>
//                   <span>{volume.toFixed(2)} BTC</span>
//                 </div>
//                 <div className="flex border border-gray-300 rounded-md overflow-hidden">
//                   <button
//                     onClick={() => handleVolumeChange(-0.01)}
//                     className="px-3 py-2 text-gray-600 hover:bg-gray-100"
//                   >
//                     −
//                   </button>
//                   <input
//                     type="text"
//                     readOnly
//                     value={volume.toFixed(2)}
//                     className="flex-1 text-center text-sm py-2 outline-none"
//                   />
//                   <button
//                     onClick={() => handleVolumeChange(0.01)}
//                     className="px-3 py-2 text-gray-600 hover:bg-gray-100"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Stop Loss / Take Profit */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label className="text-xs text-gray-600">Stop Loss</label>
//                   <div className="flex border border-gray-300 rounded-md overflow-hidden mt-1">
//                     <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">−</button>
//                     <input
//                       type="text"
//                       value={stopLoss}
//                       onChange={(e) => setStopLoss(e.target.value)}
//                       className="flex-1 text-center text-sm py-2 outline-none"
//                     />
//                     <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">+</button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-xs text-gray-600">Take Profit</label>
//                   <div className="flex border border-gray-300 rounded-md overflow-hidden mt-1">
//                     <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">−</button>
//                     <input
//                       type="text"
//                       value={takeProfit}
//                       onChange={(e) => setTakeProfit(e.target.value)}
//                       className="flex-1 text-center text-sm py-2 outline-none"
//                     />
//                     <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">+</button>
//                   </div>
//                 </div>
//               </div>

//               {/* Comment */}
//               <div>
//                 <label className="text-xs text-gray-600">Comment</label>
//                 <textarea
//                   rows={2}
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                   placeholder="Enter comment..."
//                   className="w-full border border-gray-300 rounded-md mt-1 p-2 text-sm resize-none outline-none focus:ring-1 focus:ring-blue-400"
//                 />
//               </div>

//               {/* Prices + Action Buttons */}
//               <div className="border-t border-gray-200 pt-3">
//                 <div className="flex justify-between text-[13px] font-semibold mb-2">
//                   <div className="text-blue-600">102 932.428</div>
//                   <div className="text-red-600">102 936.920</div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-2">
//                   <button className="py-2 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow">
//                     Sell by Market
//                   </button>
//                   <button className="py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow">
//                     Buy by Market
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Click outside to close */}
//           <div className="flex-1" onClick={() => setOpen(false)}></div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { Clock, ChevronDown } from "lucide-react";

export default function NewOrderPanel() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [orderType, setOrderType] = useState("Market Execution");
  const [volume, setVolume] = useState(0.01);
  const [stopLoss, setStopLoss] = useState("");
  const [takeProfit, setTakeProfit] = useState("");
  const [comment, setComment] = useState("");

  const handleVolumeChange = (value: number) => {
    setVolume((prev) => Math.max(0, parseFloat((prev + value).toFixed(2))));
  };

  const orderTypes = ["Market Execution", "Pending Order", "Limit Order", "Stop Order"];

  return (
    <div className="relative">
      {/* Open Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 text-xs px-3 py-1.5 rounded bg-[#1e1e1e] from-rose-600 to-rose-700 text-white font-semibold shadow hover:brightness-110 transition-all "
      >
        <Clock size={14} />
        <span>Order</span>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/60 flex items-start justify-start">
          <div className="bg-[#1e1e1e] text-white rounded-md shadow-2xl w-[350px] mt-10 ml-10 border border-gray-700">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700 relative">
              {/* Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-[14px] font-semibold text-white hover:text-blue-400"
                >
                  {orderType}
                  <ChevronDown size={16} className="text-gray-400" />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-[180px] bg-[#2c2c2c] border border-gray-700 rounded-md shadow-lg z-10">
                    {orderTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setOrderType(type);
                          setDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 text-sm hover:bg-[#3a3a3a] ${
                          orderType === type ? "text-blue-400" : "text-gray-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-[18px] leading-none"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-4">
              {/* Volume */}
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <label>Volume</label>
                  <span>{volume.toFixed(2)} BTC</span>
                </div>
                <div className="flex border border-gray-700 rounded-md overflow-hidden">
                  <button
                    onClick={() => handleVolumeChange(-0.01)}
                    className="px-3 py-2 text-gray-300 hover:bg-[#2e2e2e]"
                  >
                    −
                  </button>
                  <input
                    type="text"
                    readOnly
                    value={volume.toFixed(2)}
                    className="flex-1 text-center text-sm py-2 bg-transparent text-white outline-none"
                  />
                  <button
                    onClick={() => handleVolumeChange(0.01)}
                    className="px-3 py-2 text-gray-300 hover:bg-[#2e2e2e]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Stop Loss / Take Profit */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-400">Stop Loss</label>
                  <div className="flex border border-gray-700 rounded-md overflow-hidden mt-1">
                    <button className="px-3 py-2 text-gray-300 hover:bg-[#2e2e2e]">−</button>
                    <input
                      type="text"
                      value={stopLoss}
                      onChange={(e) => setStopLoss(e.target.value)}
                      className="flex-1 text-center text-sm py-2 bg-transparent text-white outline-none"
                    />
                    <button className="px-3 py-2 text-gray-300 hover:bg-[#2e2e2e]">+</button>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400">Take Profit</label>
                  <div className="flex border border-gray-700 rounded-md overflow-hidden mt-1">
                    <button className="px-3 py-2 text-gray-300 hover:bg-[#2e2e2e]">−</button>
                    <input
                      type="text"
                      value={takeProfit}
                      onChange={(e) => setTakeProfit(e.target.value)}
                      className="flex-1 text-center text-sm py-2 bg-transparent text-white outline-none"
                    />
                    <button className="px-3 py-2 text-gray-300 hover:bg-[#2e2e2e]">+</button>
                  </div>
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="text-xs text-gray-400">Comment</label>
                <textarea
                  rows={2}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Enter comment..."
                  className="w-full border border-gray-700 rounded-md mt-1 p-2 text-sm bg-transparent text-white resize-none outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Prices + Action Buttons */}
              <div className="border-t border-gray-700 pt-3">
                <div className="flex justify-between text-[13px] font-semibold mb-2">
                  <div className="text-blue-400">102 932.428</div>
                  <div className="text-rose-400">102 936.920</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2 rounded-md bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold shadow">
                    Sell by Market
                  </button>
                  <button className="py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow">
                    Buy by Market
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setOpen(false)}></div>
        </div>
      )}
    </div>
  );
}
