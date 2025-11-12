import { fetchMergedCurrencyPrice } from "@/app/lib/terminal";
import { RootState } from "@/app/redux/store";
import {
  AreaData,
  BarData,
  CandlestickData,
  ColorType,
  createChart,
  IChartApi,
  ISeriesApi,
  LineData,
} from "lightweight-charts";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function CurrencyChart() {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<
    "Candlestick" | "Bar" | "Line" | "Area"
  > | null>(null);

  const [chartData, setChartData] = useState<
    CandlestickData[] | LineData[] | AreaData[] | BarData[]
  >([]);
  const [chartSymbol, setChartSymbol] = useState("");
  const [activeInterval, setActiveInterval] = useState("H1");
  const [activeChart, setChartType] = useState<
    "candlestick" | "line" | "area" | "bar"
  >("candlestick");

  const { symbol, type, interval } = useSelector(
    (state: RootState) => state.chartData
  );

  useEffect(() => {
    setChartSymbol(localStorage.getItem("chartSymbol") || "");
    setChartType(
      (localStorage.getItem("chartType") as
        | "candlestick"
        | "line"
        | "area"
        | "bar") || "candlestick"
    );
    setActiveInterval(localStorage.getItem("chartInterval") || "H1");
  }, []);

  // ✅ Load saved preferences
  useEffect(() => {
    setChartSymbol(localStorage.getItem("chartSymbol") || symbol || "");
    setChartType(
      (localStorage.getItem("chartType") as
        | "candlestick"
        | "line"
        | "area"
        | "bar") ||
        type ||
        "candlestick"
    );
    setActiveInterval(
      localStorage.getItem("chartInterval") || interval || "H1"
    );
  }, [symbol, type, interval]);

  // ✅ Fetch live chart data
  useEffect(() => {
    if (!chartSymbol) return;

    const loadData = async () => {
      try {
        const data = await fetchMergedCurrencyPrice(
          chartSymbol,
          activeInterval,
          activeChart
        );
        setChartData(data);
      } catch (err) {
        console.error("Chart fetch error:", err);
      }
    };
    loadData();
    const id = setInterval(loadData, 10000);
    return () => clearInterval(id);
  }, [chartSymbol, activeInterval, activeChart]);

  // ✅ Create and resize chart once
  useEffect(() => {
    if (!chartContainerRef.current || chartRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "#0e1116" },
        textColor: "#d1d5db",
      },
      grid: {
        vertLines: { color: "#1f2937" },
        horzLines: { color: "#1f2937" },
      },
      rightPriceScale: {
        visible: true,
        borderColor: "#2a2b2d",
        scaleMargins: { top: 0.15, bottom: 0.15 },
      },
      timeScale: {
        borderColor: "#2a2b2d",
        timeVisible: true,
        secondsVisible: false,
      },
    });

    chartRef.current = chart;

    // Responsive resize
    const observer = new ResizeObserver(() => {
      if (chartContainerRef.current) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight,
        });
      }
    });

    observer.observe(chartContainerRef.current);

    return () => {
      observer.disconnect();
      chart.remove();
      chartRef.current = null;
      seriesRef.current = null;
    };
  }, []);

  // ✅ Update chart series + data cleanly
  useEffect(() => {
    if (!chartRef.current) return;
    if (seriesRef.current) chartRef.current.removeSeries(seriesRef.current);

    let newSeries: ISeriesApi<"Candlestick" | "Bar" | "Line" | "Area">;

    switch (activeChart) {
      case "bar":
        newSeries = chartRef.current.addBarSeries({
          upColor: "#0ECB81",
          downColor: "#F6465D",
        });
        break;
      case "line":
        newSeries = chartRef.current.addLineSeries({
          color: "#4A90E2",
          lineWidth: 2,
        });
        break;
      case "area":
        newSeries = chartRef.current.addAreaSeries({
          topColor: "rgba(14, 203, 129, 0.4)",
          bottomColor: "rgba(14, 203, 129, 0.05)",
          lineColor: "#0ECB81",
        });
        break;
      default:
        newSeries = chartRef.current.addCandlestickSeries({
          upColor: "#0ECB81",
          borderUpColor: "#0ECB81",
          wickUpColor: "#0ECB81",
          downColor: "#F6465D",
          borderDownColor: "#F6465D",
          wickDownColor: "#F6465D",
        });
    }

    seriesRef.current = newSeries;

    if (chartData.length > 0) {
      newSeries.setData(chartData);
      chartRef.current.timeScale().fitContent();
    }
  }, [activeChart, chartData]);

  return (
    <section className="bg-[#141516] shadow-inner rounded flex flex-col lg:flex-[0.65] min-h-0 h-[35vh] lg:h-[65vh] border border-[#2a2b2d] overflow-hidden">
      <div
        ref={chartContainerRef}
        className="flex-1 bg-gradient-to-br from-[#1b1c1e] to-[#0c0c0d] text-gray-400 italic"
      />
    </section>
  );
}
