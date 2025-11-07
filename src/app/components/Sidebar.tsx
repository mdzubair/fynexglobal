// import {
//   Menu,
//   Crosshair,
//   LineChart,
//   MoveRight,
//   MoveDiagonal,
//   GitBranch,
//   Square,
//   AlignLeft,
//   Type,
//   Eye,
//   Lock,
//   Share2,
//   Settings,
//   List,
//   Clock,
//   BookOpen,
// } from "lucide-react";

// interface IconButtonProps {
//   icon: React.ReactNode;
//   title: string;
//   active?: boolean;
// }

// const IconButton = ({ icon, title, active }: IconButtonProps) => (
//   <button
//     title={title}
//     className={`w-10 h-10 flex items-center justify-center rounded hover:bg-gray-700/40 transition-colors ${
//       active ? "text-blue-500" : "text-gray-400"
//     }`}
//   >
//     {icon}
//   </button>
// );

// export default function Sidebar() {
//   return (
//     <div className="w-12 bg-[#1e1e1e] border-r border-gray-700 flex flex-col items-center py-3 space-y-2">
//       {/* Top Section */}
//       <div className="flex flex-col items-center space-y-2 border-b border-gray-700 pb-2">
//         <IconButton icon={<Menu size={18} />} title="Menu" />
//       </div>

//       {/* Drawing Tools */}
//       <div className="flex flex-col items-center space-y-2 border-b border-gray-700 pb-2">
//         <IconButton icon={<Crosshair size={18} />} title="Crosshair" />
//         <IconButton icon={<LineChart size={18} />} title="Trend Line" />
//         <IconButton icon={<MoveRight size={18} />} title="Ray Line" />
//         <IconButton icon={<MoveDiagonal size={18} />} title="Parallel Channel" />
//         <IconButton icon={<GitBranch size={18} />} title="Path Tool" />
//         <IconButton icon={<Square size={18} />} title="Shapes" />
//         <IconButton icon={<AlignLeft size={18} />} title="Horizontal Line" />
//         <IconButton icon={<Type size={18} />} title="Text Tool" />
//       </div>

//       {/* View / Control Tools */}
//       <div className="flex flex-col items-center space-y-2 border-b border-gray-700 pb-2">
//         <IconButton icon={<Eye size={18} />} title="Visibility" />
//         <IconButton icon={<Lock size={18} />} title="Lock" />
//         <IconButton icon={<Share2 size={18} />} title="Link" />
//       </div>

//       {/* Bottom Tools */}
//       <div className="flex flex-col items-center space-y-2 mt-auto pt-2 border-t border-gray-700">
//         <IconButton icon={<Settings size={18} />} title="Settings" />
//         <IconButton icon={<List size={18} />} title="List / Layers" active />
//         <IconButton icon={<Clock size={18} />} title="Replay" />
//         <IconButton icon={<BookOpen size={18} />} title="Help / Manual" />
//       </div>

//     </div>
//   );
// }


// import {
//   Menu,
//   Crosshair,
//   LineChart,
//   MoveDiagonal,
//   MoveRight,
//   GitBranch,
//   Square,
//   AlignLeft,
//   Type,
//   Eye,
//   Lock,
//   Share2,
//   List,
//   Clock,
//   BookOpen,
// } from "lucide-react";

// interface IconButtonProps {
//   icon: React.ReactNode;
//   title: string;
//   active?: boolean;
// }

// const IconButton = ({ icon, title, active }: IconButtonProps) => (
//   <button
//     title={title}
//     className={`w-10 h-10 flex items-center justify-center rounded hover:bg-gray-700/30 transition-colors ${
//       active ? "text-blue-500" : "text-gray-400"
//     }`}
//   >
//     {icon}
//   </button>
// );

// export default function Sidebar() {
//   return (
//     <aside className="w-12 bg-[#1e1e1e] border-r border-gray-700 flex flex-col items-center py-2 space-y-1">
//       {/* Top Section */}
//       <div className="flex flex-col items-center space-y-1 border-b border-gray-700 pb-2">
//         <IconButton icon={<Menu size={18} />} title="Menu" />
//       </div>

//       {/* Drawing Tools */}
//       <div className="flex flex-col items-center space-y-1 border-b border-gray-700 pb-2">
//         <IconButton icon={<Crosshair size={18} />} title="Crosshair" />
//         <IconButton icon={<LineChart size={18} />} title="Trend Line" />
//         <IconButton icon={<MoveRight size={18} />} title="Parallel Line" />
//         <IconButton icon={<MoveDiagonal size={18} />} title="Path Tool" />
//         <IconButton icon={<GitBranch size={18} />} title="Polyline Tool" />
//         <IconButton icon={<Square size={18} />} title="Shape Tool" />
//         <IconButton icon={<AlignLeft size={18} />} title="Horizontal Line" />
//         <IconButton icon={<Type size={18} />} title="Text Tool" />
//       </div>

//       {/* Control Tools */}
//       <div className="flex flex-col items-center space-y-1 border-b border-gray-700 pb-2">
//         <IconButton icon={<Eye size={18} />} title="Show / Hide" />
//         <IconButton icon={<Lock size={18} />} title="Lock" />
//         <IconButton icon={<Share2 size={18} />} title="Link" />
//       </div>

//       {/* Bottom Tools */}
//       <div className="flex flex-col items-center space-y-1 mt-auto pt-2 border-t border-gray-700">
//         <IconButton icon={<List size={18} />} title="List / Layers" active />
//         <IconButton icon={<Clock size={18} />} title="Replay" />
//         <IconButton icon={<BookOpen size={18} />} title="Help / Manual" />
//       </div>
//     </aside>
//   );
// }



"use client";

interface IconButtonProps {
  title: string;
  active?: boolean;
  children: React.ReactNode;
}

const IconButton = ({ title, active, children }: IconButtonProps) => (
  <button
    title={title}
    className={`w-10 h-10 flex items-center justify-center rounded hover:bg-gray-700/30 transition-colors ${
      active ? "text-blue-500" : "text-gray-400"
    }`}
  >
    {children}
  </button>
);

// Common stroke style
const stroke = "currentColor";
const strokeWidth = 1.7;
const size = 20;

export default function Sidebar() {
  return (
    <aside className="w-12 bg-[#1e1e1e] border-r border-gray-700 flex flex-col items-center py-2 space-y-1">
      {/* Top */}
      <div className="flex flex-col items-center space-y-1 border-b border-gray-700 pb-2">
        <IconButton title="Menu">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </IconButton>
      </div>

      {/* Drawing Tools */}
      <div className="flex flex-col items-center space-y-1 border-b border-gray-700 pb-2">
        {/* Crosshair */}
        <IconButton title="Crosshair">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="2" />
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
          </svg>
        </IconButton>

        {/* Trend Line */}
        <IconButton title="Trend Line">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <line x1="4" y1="18" x2="20" y2="6" />
          </svg>
        </IconButton>

        {/* Parallel Line */}
        <IconButton title="Parallel Line">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <line x1="4" y1="8" x2="20" y2="4" />
            <line x1="4" y1="20" x2="20" y2="16" />
          </svg>
        </IconButton>

        {/* Curve Tool */}
        <IconButton title="Curve Tool">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <path d="M4 18 C8 10, 16 10, 20 6" />
          </svg>
        </IconButton>

        {/* Shape Tool (Square) */}
        <IconButton title="Shape Tool">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <rect x="5" y="5" width="14" height="14" rx="2" />
          </svg>
        </IconButton>

        {/* Horizontal Line */}
        <IconButton title="Horizontal Line">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <line x1="4" y1="12" x2="20" y2="12" />
          </svg>
        </IconButton>

        {/* Text Tool */}
        <IconButton title="Text Tool">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <path d="M4 6h16" />
            <path d="M12 6v12" />
            <path d="M8 18h8" />
          </svg>
        </IconButton>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center space-y-1 border-b border-gray-700 pb-2">
        {/* Eye */}
        <IconButton title="Show / Hide">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </IconButton>

        {/* Lock */}
        <IconButton title="Lock">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </IconButton>

        {/* Link */}
        <IconButton title="Link">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
            <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
          </svg>
        </IconButton>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center space-y-1 mt-auto pt-2 border-t border-gray-700">
        {/* Layers */}
        <IconButton title="Layers" active>
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </IconButton>

        {/* Replay */}
        <IconButton title="Replay">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <polyline points="3 12 9 6 9 9 21 9 21 15 9 15 9 18 3 12" />
          </svg>
        </IconButton>

        {/* Help */}
        <IconButton title="Help">
          <svg width={size} height={size} stroke={stroke} strokeWidth={strokeWidth} fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4" />
            <line x1="12" y1="17" x2="12" y2="17" />
          </svg>
        </IconButton>
      </div>
    </aside>
  );
}
