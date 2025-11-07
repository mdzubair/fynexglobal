// "use client";
// import React, {
//   useEffect,
//   useRef,
//   useState,
//   useImperativeHandle,
//   forwardRef,
// } from "react";
// import {
//   createChart,
//   ColorType,
//   IChartApi,
//   ISeriesApi,
//   CandlestickData,
//   LogicalRange,
// } from "lightweight-charts";
// import { fetchCandles } from "../lib/api";

// export interface ChartPanelRef {
//   zoomIn: () => void;
//   zoomOut: () => void;
//   resetZoom: () => void;
// }

// interface ChartProps {
//   selectedSymbol: string | null;
//   interval: string;
//   activeChart?: string;
// }

// const ChartPanel = forwardRef<ChartPanelRef, ChartProps>(
//   ({ selectedSymbol, interval, activeChart }, ref) => {
//     const chartContainerRef = useRef<HTMLDivElement | null>(null);
//     const chartRef = useRef<IChartApi | null>(null);
//     const candleSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
//     const [chartData, setChartData] = useState<CandlestickData[]>([]);

//     // ✅ Fetch data
//     useEffect(() => {
//       const loadCandles = async () => {
//         if (!selectedSymbol) return;
//         try {
//           const data = await fetchCandles(selectedSymbol, interval);
//           setChartData(data);
//         } catch (error) {
//           console.error("Error loading candles:", error);
//         }
//       };
//       loadCandles();
//       console.log(activeChart);
//     }, [selectedSymbol, interval]);

//     // ✅ Create chart
//     useEffect(() => {
//       if (!chartContainerRef.current || chartRef.current) return;

//       const chart = createChart(chartContainerRef.current, {
//         layout: {
//           background: { type: ColorType.Solid, color: "#0e1116" },
//           textColor: "#d1d5db",
//         },
//         grid: {
//           vertLines: { color: "#1f2937" },
//           horzLines: { color: "#1f2937" },
//         },
//         rightPriceScale: {
//           visible: true,
//           borderColor: "#1f2937",
//           scaleMargins: { top: 0.2, bottom: 0.2 },
//         },
//         timeScale: {
//           borderColor: "#1f2937",
//           timeVisible: true,
//           secondsVisible: false,
//         },
//         width: chartContainerRef.current.clientWidth,
//         height: 450,
//       });

//       const candleSeries = chart.addCandlestickSeries({
//         upColor: "#0ECB81",
//         borderUpColor: "#0ECB81",
//         wickUpColor: "#0ECB81",
//         downColor: "#F6465D",
//         borderDownColor: "#F6465D",
//         wickDownColor: "#F6465D",
//       });

//       chartRef.current = chart;
//       candleSeriesRef.current = candleSeries;

//       const resizeObserver = new ResizeObserver(() => {
//         if (chartContainerRef.current && chartRef.current) {
//           chartRef.current.applyOptions({
//             width: chartContainerRef.current.clientWidth,
//             height: chartContainerRef.current.clientHeight,
//           });
//         }
//       });

//       resizeObserver.observe(chartContainerRef.current);

//       return () => {
//         resizeObserver.disconnect();
//         chart.remove();
//         chartRef.current = null;
//         candleSeriesRef.current = null;
//       };
//     }, []);

//     // ✅ Update chart data
//     useEffect(() => {
//       if (chartData.length > 0 && candleSeriesRef.current && chartRef.current) {
//         candleSeriesRef.current.setData(chartData);
//         chartRef.current.timeScale().fitContent();
//       }
//     }, [chartData]);

//     // ✅ Zoom logic
//     const zoom = (zoomIn: boolean) => {
//       const chart = chartRef.current;
//       if (!chart) return;
//       const timeScale = chart.timeScale();
//       const range = timeScale.getVisibleLogicalRange() as LogicalRange | null;
//       if (!range) return;

//       const { from, to } = range;
//       const rangeLength = to - from;
//       const center = from + rangeLength / 2;

//       const factor = zoomIn ? 0.7 : 1.3; // smaller = zoom in, larger = zoom out
//       const newRangeLength = rangeLength * factor;

//       timeScale.setVisibleLogicalRange({
//         from: center - newRangeLength / 2,
//         to: center + newRangeLength / 2,
//       });
//     };

//     // ✅ Expose zoom controls to parent
//     useImperativeHandle(ref, () => ({
//       zoomIn: () => zoom(true),
//       zoomOut: () => zoom(false),
//       resetZoom: () => chartRef.current?.timeScale().fitContent(),
//     }));

//     return (
//       <div className="p-2 bg-[#0e1116] w-full h-[500px] rounded-md border border-gray-800">
//         <div ref={chartContainerRef} className="w-full h-full" />
//       </div>
//     );
//   }
// );

// export default ChartPanel;
"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import {
  createChart,
  ColorType,
  IChartApi,
  ISeriesApi,
  CandlestickData,
  LineData,
  AreaData,
  BarData,
  LogicalRange,
} from "lightweight-charts";
import { fetchCandles } from "../lib/api";

export interface ChartPanelRef {
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}

interface ChartProps {
  selectedSymbol: string | null;
  interval: string;
  activeChart?: string;
}

const ChartPanel = forwardRef<ChartPanelRef, ChartProps>(
  ({ selectedSymbol, interval, activeChart = "candlestick" }, ref) => {
    const chartContainerRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const seriesRef = useRef<ISeriesApi<
      "Candlestick" | "Bar" | "Line" | "Area"
    > | null>(null);
    const [chartData, setChartData] = useState<
      CandlestickData[] | LineData[] | AreaData[] | BarData[]
    >([]);

    // ✅ Fetch data
    useEffect(() => {
      const loadCandles = async () => {
        if (!selectedSymbol) return;
        try {
          const data = await fetchCandles(
            selectedSymbol,
            interval,
            activeChart
          );
          setChartData(data);
        } catch (error) {
          console.error("Error loading candles:", error);
        }
      };
      console.log(activeChart);

      loadCandles();
    }, [selectedSymbol, interval, activeChart]);

    // ✅ Create chart
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
          borderColor: "#1f2937",
          scaleMargins: { top: 0.2, bottom: 0.2 },
        },
        timeScale: {
          borderColor: "#1f2937",
          timeVisible: true,
          secondsVisible: false,
        },
        width: chartContainerRef.current.clientWidth,
        height: 450,
      });

      chartRef.current = chart;

      const resizeObserver = new ResizeObserver(() => {
        if (chartContainerRef.current && chartRef.current) {
          chartRef.current.applyOptions({
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
          });
        }
      });

      resizeObserver.observe(chartContainerRef.current);

      return () => {
        resizeObserver.disconnect();
        chart.remove();
        chartRef.current = null;
        seriesRef.current = null;
      };
    }, []);

    // ✅ Change chart type dynamically
    useEffect(() => {
      if (!chartRef.current) return;

      // Remove old series
      if (seriesRef.current) {
        chartRef.current.removeSeries(seriesRef.current);
      }

      let newSeries:
        | ISeriesApi<"Candlestick">
        | ISeriesApi<"Bar">
        | ISeriesApi<"Line">
        | ISeriesApi<"Area">;

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
      if (chartData.length > 0) newSeries.setData(chartData);

      chartRef.current.timeScale().fitContent();
    }, [activeChart, chartData]);

    // ✅ Zoom logic
    const zoom = (zoomIn: boolean) => {
      const chart = chartRef.current;
      if (!chart) return;
      const timeScale = chart.timeScale();
      const range = timeScale.getVisibleLogicalRange() as LogicalRange | null;
      if (!range) return;

      const { from, to } = range;
      const rangeLength = to - from;
      const center = from + rangeLength / 2;
      const factor = zoomIn ? 0.7 : 1.3;
      const newRangeLength = rangeLength * factor;

      timeScale.setVisibleLogicalRange({
        from: center - newRangeLength / 2,
        to: center + newRangeLength / 2,
      });
    };

    // ✅ Expose zoom to parent
    useImperativeHandle(ref, () => ({
      zoomIn: () => zoom(true),
      zoomOut: () => zoom(false),
      resetZoom: () => chartRef.current?.timeScale().fitContent(),
    }));

    return (
      <div className="p-2 bg-[#0e1116] w-full h-[500px] rounded-md border border-gray-800">
        <div ref={chartContainerRef} className="w-full h-full" />
      </div>
    );
  }
);

export default ChartPanel;
