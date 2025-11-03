// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
// import Link from "next/link";
// import {
//   Activity,
//   DollarSign,
//   CreditCard,
//   List,
//   BarChart3,
//   Settings,
//   Users,
//   HelpCircle,
//   LogOut,
//   ChevronRight,
//   LayoutDashboard,
//   Download,
// } from "lucide-react";

// const ACCENT = "#28b247";

// export default function Sidebar({ sidebarOpen }: { sidebarOpen: boolean }) {
//   const [activeMenu, setActiveMenu] = useState("Dashboard");
//   const [showReportsSubmenu, setShowReportsSubmenu] = useState(false);

//   const sidebarLinks = [
//     { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
//     { name: "Withdraw", icon: Download, path: "/withdraw" },
//     { name: "Transactions", icon: Activity, path: "/transactions" },
//     { name: "Funds", icon: DollarSign, path: "/funds" },
//     { name: "Deposit", icon: CreditCard, path: "/deposit" },
//     { name: "Total Trading", icon: BarChart3, path: "/trading" },
//     { name: "Pairs", icon: List, path: "/pairs" },
//     { name: "Users", icon: Users, path: "/users" },
//     { name: "Settings", icon: Settings, path: "/settings" },
//     { name: "Technical Analysis", icon: Settings, path: "/technical-analysis" },
//     { name: "Trading Platform", icon: Settings, path: "/trading-platform" },
//     { name: "All Bonus", icon: Settings, path: "/bonus-all" },
//     { name: "My Bonus", icon: Settings, path: "/bonus" },
//   ];

//   const reportSubmenu = [
//     { name: "Daily Report", path: "/reports/daily" },
//     { name: "Weekly Report", path: "/reports/weekly" },
//     { name: "Monthly Report", path: "/reports/monthly" },
//   ];

//   return (
//     <motion.aside
//       initial={{ width: 250 }}
//       animate={{ width: sidebarOpen ? 250 : 80 }}
//       transition={{ duration: 0.3 }}

//       className="
//         bg-[#181a20] shadow-lg flex flex-col py-4
//         h-screen fixed md:relative
//         top-0 left-0 z-50
//         overflow-y-auto
//         transition-all duration-300
//         scrollbar-thin
//         scrollbar-thumb-[#2a2d35]
//         scrollbar-track-transparent
//         hover:scrollbar-thumb-[#3a3d45]
//         [scrollbar-width:thin]
//         [scrollbar-color:#2a2d35_transparent]
//       "
//     >
//       {/* Header */}
//       <h2
//         className={`text-gray-500 text-xs font-semibold mb-3 px-4 transition-all duration-300 ${
//           sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
//         }`}
//       >
//         MAIN MENU
//       </h2>

//       {/* Sidebar Links */}
//       <ul className="space-y-1 flex-1">
//         {sidebarLinks.map((link, i) => {
//           const Icon = link.icon;
//           const isActive = activeMenu === link.name;

//           return (
//             <li key={i}>
//               <Link
//                 href={link.path}
//                 onClick={() => setActiveMenu(link.name)}
//                 className={`flex items-center gap-3 p-2 rounded-md mx-2 cursor-pointer transition-all ${
//                   isActive
//                     ? "bg-[#1f2a22] text-green-400 font-semibold shadow-inner"
//                     : "text-gray-300 hover:bg-[#20232b]"
//                 }`}
//               >
//                 <Icon size={20} style={{ color: isActive ? ACCENT : "#9ca3af" }} />
//                 {sidebarOpen && <span>{link.name}</span>}
//               </Link>
//             </li>
//           );
//         })}

//         {/* Reports Dropdown */}
//         <li className="mx-2">
//           <div
//             className="flex items-center justify-between p-2 rounded-md hover:bg-[#20232b] cursor-pointer text-gray-300"
//             onClick={() => setShowReportsSubmenu(!showReportsSubmenu)}
//           >
//             <div className="flex items-center gap-3">
//               <BarChart3 size={20} />
//               {sidebarOpen && <span>Reports</span>}
//             </div>
//             {sidebarOpen && (
//               <ChevronRight
//                 size={16}
//                 className={`transition-transform ${
//                   showReportsSubmenu ? "rotate-90" : ""
//                 }`}
//               />
//             )}
//           </div>

//           <AnimatePresence>
//             {showReportsSubmenu && sidebarOpen && (
//               <motion.ul
//                 initial={{ opacity: 0, y: -5 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -5 }}
//                 className="pl-9 mt-1 space-y-1"
//               >
//                 {reportSubmenu.map((item, idx) => (
//                   <li key={idx}>
//                     <Link
//                       href={item.path}
//                       onClick={() => setActiveMenu(item.name)}
//                       className={`block text-sm cursor-pointer py-1 rounded-md px-2 ${
//                         activeMenu === item.name
//                           ? "bg-[#1f2a22] text-green-400 font-medium"
//                           : "text-gray-400 hover:bg-[#20232b]"
//                       }`}
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//               </motion.ul>
//             )}
//           </AnimatePresence>
//         </li>

//         {/* Help Section */}
//         <li>
//           <Link
//             href="/help"
//             className="flex items-center gap-3 p-2 rounded-md mx-2 cursor-pointer hover:bg-[#20232b] text-gray-300"
//           >
//             <HelpCircle size={20} />
//             {sidebarOpen && <span>Help & Support</span>}
//           </Link>
//         </li>
//       </ul>

//       {/* Logout */}
//       <div className="mt-auto mx-2 mb-2">
//         <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-[#20232b] text-red-400">
//           <LogOut size={20} />
//           {sidebarOpen && <span>Logout</span>}
//         </div>
//       </div>
//     </motion.aside>
//   );
// }


"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  DollarSign,
  CreditCard,
  List,
  BarChart3,
  Settings,
  Users,
  HelpCircle,
  LogOut,
  ChevronRight,
  LayoutDashboard,
  Download,
} from "lucide-react";

const ACCENT = "#28b247";

export default function Sidebar({ sidebarOpen }: { sidebarOpen: boolean }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showReportsSubmenu, setShowReportsSubmenu] = useState(false);

  const sidebarLinks = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    
    // { name: "Transactions", icon: Activity, path: "/transactions" },
    // { name: "Funds", icon: DollarSign, path: "/funds" },
    { name: "Wallet", icon: CreditCard, path: "/wallet" },
    { name: "Deposit", icon: CreditCard, path: "/deposit" },
    { name: "Withdraw", icon: Download, path: "/withdraw" },
     { name: "Payments", icon: Settings, path: "/payments" },

    { name: "Technical Analysis", icon: Settings, path: "/technical-analysis" },
    { name: "Trading Platform", icon: Settings, path: "/trading-platform" },
    { name: "All Bonus", icon: Settings, path: "/bonus-all" },
    { name: "My Bonus", icon: Settings, path: "/bonus" },



    // { name: "Total Trading", icon: BarChart3, path: "/trading" },
    { name: "Pairs", icon: List, path: "/pairs" },
    { name: "Users", icon: Users, path: "/users" },
    { name: "Settings", icon: Settings, path: "/settings" },
    
  ];

  const reportSubmenu = [
    { name: "Daily Report", path: "/reports/daily" },
    { name: "Weekly Report", path: "/reports/weekly" },
    { name: "Monthly Report", path: "/reports/monthly" },
  ];

  return (
    <motion.aside
      initial={{ width: 250 }}
      animate={{ width: sidebarOpen ? 250 : 80 }}
      transition={{ duration: 0.3 }}
      className={`
        fixed md:sticky
        top-[56px] left-0 z-40
        h-[calc(100vh-56px)]
        bg-[#181a20] shadow-lg flex flex-col py-4
        overflow-y-auto transition-all duration-300
        custom-scrollbar
      `}
    >
      {/* Header */}
      <h2
        className={`text-gray-500 text-xs font-semibold mb-3 px-4 transition-all duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
        }`}
      >
        MAIN MENU
      </h2>

      {/* Sidebar Links */}
      <ul className="space-y-1 flex-1">
        {sidebarLinks.map((link, i) => {
          const Icon = link.icon;
          const isActive = activeMenu === link.name;

          return (
            <li key={i}>
              <Link
                href={link.path}
                onClick={() => setActiveMenu(link.name)}
                className={`flex items-center gap-3 p-2 rounded-md mx-2 cursor-pointer transition-all ${
                  isActive
                    ? "bg-[#1f2a22] text-green-400 font-semibold shadow-inner"
                    : "text-gray-300 hover:bg-[#20232b]"
                }`}
              >
                <Icon
                  size={20}
                  style={{ color: isActive ? ACCENT : "#9ca3af" }}
                />
                {sidebarOpen && <span>{link.name}</span>}
              </Link>
            </li>
          );
        })}

        {/* Reports Dropdown */}
        <li className="mx-2">
          <div
            className="flex items-center justify-between p-2 rounded-md hover:bg-[#20232b] cursor-pointer text-gray-300"
            onClick={() => setShowReportsSubmenu(!showReportsSubmenu)}
          >
            <div className="flex items-center gap-3">
              <BarChart3 size={20} />
              {sidebarOpen && <span>Reports</span>}
            </div>
            {sidebarOpen && (
              <ChevronRight
                size={16}
                className={`transition-transform ${
                  showReportsSubmenu ? "rotate-90" : ""
                }`}
              />
            )}
          </div>

          <AnimatePresence>
            {showReportsSubmenu && sidebarOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="pl-9 mt-1 space-y-1"
              >
                {reportSubmenu.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.path}
                      onClick={() => setActiveMenu(item.name)}
                      className={`block text-sm cursor-pointer py-1 rounded-md px-2 ${
                        activeMenu === item.name
                          ? "bg-[#1f2a22] text-green-400 font-medium"
                          : "text-gray-400 hover:bg-[#20232b]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>

        {/* Help Section */}
        <li>
          <Link
            href="/help"
            className="flex items-center gap-3 p-2 rounded-md mx-2 cursor-pointer hover:bg-[#20232b] text-gray-300"
          >
            <HelpCircle size={20} />
            {sidebarOpen && <span>Help & Support</span>}
          </Link>
        </li>
      </ul>

      {/* Logout */}
      <div className="mt-auto mx-2 mb-2">
        <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-[#20232b] text-red-400">
          <LogOut size={20} />
          {sidebarOpen && <span>Logout</span>}
        </div>
      </div>

      {/* ✅ Custom Scrollbar CSS */}
      <style jsx global>{`
        /* Sidebar scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #2a2d35;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #3a3d45;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        /* Body scrollbar */
        body {
          scrollbar-width: thin;
          scrollbar-color: #27292cff #0f1115;
        }
        body::-webkit-scrollbar {
          width: 4px;
        }
        body::-webkit-scrollbar-thumb {
          background-color: #0f1115;
          border-radius: 10px;
        }
        body::-webkit-scrollbar-track {
          background: #0f1115;
        }

        @media (max-width: 768px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }
      `}</style>
    </motion.aside>
  );
}
