import React, { useRef, useState } from "react";
import { LucideEyeOff, RefreshCw } from "lucide-react";
/* -------------------- Icon Wrapper -------------------- */
interface IconWrapperProps {
  title?: string;
  className?: string;
  onClick?: () => void;
  active?: boolean;
  children?: React.ReactNode;
}
const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  title,
  className,
  onClick,
  active,
}) => (
  <button
    onClick={onClick}
    aria-label={title}
    title={title}
    className={`w-8 h-8 flex items-center justify-center rounded-sm 
      ${
        active ? "bg-sky-600 text-white" : "hover:bg-gray-700/40 text-gray-300"
      } 
      ${className || ""}`}
    type="button"
  >
    {children}
  </button>
);

/* -------------------- SVG ICON COMPONENTS -------------------- */

/* Chart Types */
const CandlesIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <rect x="3.6" y="7" width="2.8" height="7.8" rx="0.25" />
    <line x1="5" y1="3" x2="5" y2="7" />
    <line x1="5" y1="14.8" x2="5" y2="20.5" />
    <rect x="10" y="9.2" width="2.8" height="5.6" rx="0.25" />
    <line x1="11.4" y1="6" x2="11.4" y2="9.2" />
    <line x1="11.4" y1="14.8" x2="11.4" y2="18" />
    <rect x="16.4" y="4.5" width="2.8" height="13.3" rx="0.25" />
    <line x1="17.8" y1="2" x2="17.8" y2="4.5" />
    <line x1="17.8" y1="17.8" x2="17.8" y2="22" />
  </svg>
);
const BarsIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <line x1="5" y1="19" x2="5" y2="11" strokeLinecap="round" />
    <line x1="9" y1="19" x2="9" y2="7" strokeLinecap="round" />
    <line x1="13" y1="19" x2="13" y2="14" strokeLinecap="round" />
    <line x1="17" y1="19" x2="17" y2="9" strokeLinecap="round" />
    <line x1="21" y1="19" x2="21" y2="5" strokeLinecap="round" />
  </svg>
);
const LineIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <polyline
      points="3 17 8 12 12 15 18 8 21 10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const AreaIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path
      d="M3 16l5-4 4 3 5-6 4 7v1H3z"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);
const HeikinAshiIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="3" y="6" width="2.6" height="9" rx="0.2" />
    <rect x="8.5" y="8" width="2.6" height="6" rx="0.2" />
    <rect x="14" y="5" width="2.6" height="12" rx="0.2" />
    <rect x="19.5" y="10" width="2.6" height="5" rx="0.2" />
  </svg>
);
const OHLCIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path
      d="M4 6h5M9 6v12M4 18h5M15 7h5M15 7v10M15 17h5"
      strokeLinecap="round"
    />
  </svg>
);

/* Drawing Tools */
const TrendLineIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path
      d="M3 18L9 12L13 16L21 6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="3" cy="18" r="1.1" fill="currentColor" />
    <circle cx="9" cy="12" r="1.1" fill="currentColor" />
    <circle cx="13" cy="16" r="1.1" fill="currentColor" />
    <circle cx="21" cy="6" r="1.1" fill="currentColor" />
  </svg>
);
const BrushIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path
      d="M3 21c4-1 6-3 9-6l7-7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14 7l3-3 4 4-3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const RulerIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M3 21l18-18" strokeLinecap="round" />
    <path d="M8 6h.01M11 9h.01M14 12h.01M17 15h.01" />
  </svg>
);
const FibIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <rect x="3.5" y="5" width="17" height="14" rx="1" />
    <path d="M3.5 10h17M3.5 14h17" strokeLinecap="round" />
  </svg>
);

/* Indicators and Tools */
const IndicatorIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M3 15c3-4 6 2 9 0s6-6 9-2" />
    <path d="M3 19c3-2 6 2 9 0s6-4 9-1" opacity="0.9" />
  </svg>
);
const CompareIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M3 17l6-6 4 4 8-8" />
  </svg>
);
const GridIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <rect x="3" y="3" width="8" height="8" />
    <rect x="13" y="3" width="8" height="8" />
    <rect x="3" y="13" width="8" height="8" />
    <rect x="13" y="13" width="8" height="8" />
  </svg>
);
const CrosshairIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <circle cx="12" cy="12" r="7" />
    <path d="M12 5v-2M12 21v-2M5 12H3M21 12h-2" />
  </svg>
);
const AlertsIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M12 2L5 6v5c0 3.9-1 5 5 7 6-2 5-3.1 5-7V6l-7-4z" />
    <path d="M9 22h6" />
  </svg>
);
const SaveIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
  </svg>
);
const WatchlistIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const CameraIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <circle cx="12" cy="13" r="3" />
    <path d="M7 7l1.5-3h7L17 7" />
  </svg>
);
const FullscreenIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M3 9V3h6M21 15v6h-6M21 3h-6v6M9 21H3v-6" />
  </svg>
);
const ZoomInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <circle cx="11" cy="11" r="6" />
    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
  </svg>
);
const ZoomOutIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <circle cx="11" cy="11" r="6" />
    <path d="M21 21l-4.35-4.35M8 11h6" />
  </svg>
);

/* -------------------- Header -------------------- */

interface HeaderProps {
  handleInterval: (interval: string) => void;
  handleChartType: (chartType: string) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
}
export default function Header({
  handleInterval,
  handleChartType,
  onZoomIn,
  onZoomOut,
  onResetZoom,
}: HeaderProps) {
  const timeframes = ["M1", "M5", "M15", "M30", "H1", "H4", "D1", "W1", "MN"];
  const chartTypes = [
    { id: "bar", icon: <BarsIcon />, title: "Bars" },
    { id: "candlestick", icon: <CandlesIcon />, title: "Candlestick" },
    { id: "area", icon: <AreaIcon />, title: "Area" },
    { id: "line", icon: <LineIcon />, title: "Line" },
  ];

  const [active, setActive] = useState("H1");
  const [activeChart, setChartType] = useState("candlestick");

  return (
    <header className="border-b border-gray-700 p-3 flex items-center justify-between bg-[#0b1220] text-gray-300">
      <div className="flex items-center gap-4">
        {/* Chart Types */}
        <div className="flex items-center gap-1 bg-[#07101a] px-2 py-1 rounded-md border border-gray-800">
          {chartTypes.map((t) => (
            <IconWrapper
              key={t.id}
              title={t.title}
              active={activeChart === t.id}
              onClick={() => {
                setChartType(t.id);
                handleChartType(t.id);
              }}
            >
              {t.icon}
            </IconWrapper>
          ))}
        </div>

        {/* Drawing Tools */}
        {/* <div className="flex items-center gap-1 bg-[#07101a] px-2 py-1 rounded-md border border-gray-800">
          <IconWrapper title="Trend Line">
            <TrendLineIcon />
          </IconWrapper>
          <IconWrapper title="Brush">
            <BrushIcon />
          </IconWrapper>
          <IconWrapper title="Ruler">
            <RulerIcon />
          </IconWrapper>
          <IconWrapper title="Fibonacci">
            <FibIcon />
          </IconWrapper>
          <div className="w-px h-6 bg-gray-700 mx-2" />
          <IconWrapper title="Crosshair">
            <CrosshairIcon />
          </IconWrapper>
          <IconWrapper title="Alerts">
            <AlertsIcon />
          </IconWrapper>
          <IconWrapper title="Watchlist">
            <WatchlistIcon />
          </IconWrapper>
          <IconWrapper title="Save Layout">
            <SaveIcon />
          </IconWrapper>
        </div> */}

        {/* Timeframes */}
        <div className="flex items-center gap-1 bg-[#07101a] px-2 py-1 rounded-md border border-gray-800">
          {timeframes.map((t) => (
            <button
              key={t}
              className={`text-xs font-medium px-2 py-2 rounded ${
                t === active
                  ? "text-sky-400 bg-[#082235]"
                  : "text-gray-400 hover:bg-gray-800/30"
              }`}
              onClick={() => {
                setActive(t);
                handleInterval(t);
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Utilities */}
        <div className="flex items-center gap-1 bg-[#07101a] px-2 py-1 rounded-md border border-gray-800">
          <IconWrapper title="Show trade form">
            <LucideEyeOff />
          </IconWrapper>
          <button className="text-xs px-3 py-1 rounded bg-rose-600 text-white font-semibold">
            New Order
          </button>
          <div className="w-px h-6 bg-gray-700 mx-2" />
          <IconWrapper title="Zoom In" onClick={onZoomIn}>
            <ZoomInIcon />
          </IconWrapper>
          <IconWrapper title="Zoom Out" onClick={onZoomOut}>
            <ZoomOutIcon />
          </IconWrapper>

          <IconWrapper title="Zoom Out" onClick={onResetZoom}>
            <RefreshCw />
          </IconWrapper>

          <div className="w-px h-6 bg-gray-700 mx-2" />
          <IconWrapper title="Indicators">
            <IndicatorIcon />
          </IconWrapper>
          <IconWrapper title="Grid">
            <GridIcon />
          </IconWrapper>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-1 bg-[#07101a] px-2 py-1 rounded-md border border-gray-800">
        <IconWrapper title="Snapshot">
          <CameraIcon />
        </IconWrapper>
        <IconWrapper title="Fullscreen">
          <FullscreenIcon />
        </IconWrapper>
      </div>
    </header>
  );
}
