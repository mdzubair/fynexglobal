"use client";

export default function TopBar() {
  return (
    <div className="bg-[#28A745] text-white text-sm py-2 px-6 flex flex-wrap justify-between items-center">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-semibold">Regulated:</span>
        <span className="flex items-center gap-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg"
            className="w-5 h-5"
            alt="FSA"
          />{" "}
          FSA
        </span>
        <span className="flex items-center gap-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg"
            className="w-5 h-5"
            alt="SCA"
          />{" "}
          SCA
        </span>
        <span className="flex items-center gap-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg"
            className="w-5 h-5"
            alt="FINTRAC"
          />{" "}
          FINTRAC
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs sm:text-sm">
        <a href="#" className="underline hover:text-gray-200">
          Institutional Site
        </a>
        <a href="#" className="hover:text-gray-200">
          📞 +97144268730
        </a>
        <a href="#" className="hover:text-gray-200">
          Support
        </a>
        <select className="bg-transparent border border-white rounded px-1 py-0.5 text-xs">
          <option>English</option>
          <option>Arabic</option>
        </select>
      </div>
    </div>
  );
}
