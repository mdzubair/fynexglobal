"use client";

import { useState } from "react";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-[#0f1115] text-gray-100 font-sans overflow-hidden">
      {/* Header (fixed top) */}
      <TopHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
