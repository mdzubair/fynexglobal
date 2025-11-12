"use client";
import Split from "react-split";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CurrencyTable from "../components/CurrencyTable";
import ChartPanel, { ChartPanelRef } from "../components/ChartPanel";
import { useRef, useState } from "react";

export default function TradingTerminal() {
  const [symbolForChart, setSymbol] = useState<string | null>(null);
  const chartRef = useRef<ChartPanelRef>(null);
  const [interval, setInterval] = useState("H1");
  const [chartType, setChartType] = useState("candlestick");

  const handleSelectedPair = (symbol: string) => {
    // console.log(symbol);
    setSymbol(symbol);
  };

  return (
    <div className="flex h-screen bg-[#0b0e11] text-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}

        <Header
          handleInterval={(i) => setInterval(i)}
          handleChartType={(type) => setChartType(type)}
          onZoomIn={() => chartRef.current?.zoomIn()}
          onZoomOut={() => chartRef.current?.zoomOut()}
          onResetZoom={() => chartRef.current?.resetZoom()}
        />

        <Split
          className="flex-1 flex flex-col"
          direction="vertical"
          sizes={[85, 15]} // Footer takes 15% height
          minSize={[200, 40]}
          gutterSize={6}
          gutterAlign="center"
          cursor="row-resize"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Split
            className="flex-1 flex"
            direction="horizontal"
            sizes={[70, 30]}
            minSize={[300, 200]}
            gutterSize={6}
            gutterAlign="center"
            cursor="col-resize"
          >
            {/* Chart */}
            <ChartPanel
              ref={chartRef}
              selectedSymbol={symbolForChart}
              interval={interval}
              activeChart={chartType}
            />

            <CurrencyTable handleSelectedPair={handleSelectedPair} />
          </Split>

          <Footer />
        </Split>
      </div>
    </div>
  );
}
