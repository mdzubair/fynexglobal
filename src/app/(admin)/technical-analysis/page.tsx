"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

interface Article {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  details: string;
  image: string;
  fullText: string;
}

const articles: Article[] = [
  {
    id: 1,
    date: "2025-11-01",
    title: "EUR/USD Strong Momentum",
    subtitle: "Key resistance and support levels to watch.",
    details: "EUR/USD continues to show bullish signals on the 4-hour chart...",
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1200",
    fullText:
      "The EUR/USD pair is moving higher amid weaker USD sentiment. Analysts suggest that as long as the pair stays above the 1.07 level, bullish momentum will likely continue. Traders should monitor the next resistance zone near 1.0850.",
  },
  {
    id: 2,
    date: "2025-10-28",
    title: "Gold Price Consolidation",
    subtitle: "XAU/USD awaits breakout after tight range.",
    details: "Gold consolidates between $1,980 and $2,020 with mixed momentum...",
    image: "https://images.unsplash.com/photo-1623920707591-8fc9bfc3a088?q=80&w=1200",
    fullText:
      "Gold traders remain cautious as the market awaits a breakout. Central bank policy comments may trigger volatility, so traders are advised to watch for confirmation signals on higher timeframes.",
  },
  {
    id: 3,
    date: "2025-10-25",
    title: "Crude Oil Pullback Continues",
    subtitle: "WTI under pressure as supply worries fade.",
    details: "Oil prices fell again after OPEC comments eased supply concerns...",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1200",
    fullText:
      "WTI crude oil remains weak near $81. Further downside possible if prices close below key $80.50 support. Short-term traders watch for inventory report data midweek.",
  },
];

export default function TechnicalAnalysis() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const perPage = 2;

  const totalPages = Math.ceil(articles.length / perPage);
  const paginated = articles.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100 px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-10 text-center text-green-400 tracking-wide">
        Technical Analysis
      </h1>

      {/* Articles */}
      <div className="max-w-5xl mx-auto space-y-8">
        {paginated.map((article) => (
          <div
            key={article.id}
            className="bg-[#181a20] rounded-2xl shadow-md hover:shadow-lg border border-transparent hover:border-green-600/60 transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full object-cover max-h-56 sm:max-h-64 transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Date & Socials */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <p className="text-gray-400 text-sm">{article.date}</p>
                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                  <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
                  <Twitter className="w-5 h-5 cursor-pointer hover:text-sky-400 transition-colors" />
                  <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                {article.title}
              </h2>
              <p className="text-gray-400 text-sm mb-3">{article.subtitle}</p>

              {/* Details */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {article.details}
              </p>

              {/* Expanded Full Text */}
              {expanded === article.id && (
                <p className="text-gray-300 text-sm mt-4 border-t border-gray-700 pt-4 leading-relaxed">
                  {article.fullText}
                </p>
              )}

              {/* Footer - Read More Button */}
              <div className="flex justify-end mt-6 border-t border-gray-700 pt-4">
                <button
                  onClick={() =>
                    setExpanded(expanded === article.id ? null : article.id)
                  }
                  className={`px-5 py-2 text-sm font-medium rounded-md border transition-all duration-300 ${
                    expanded === article.id
                      ? "border-green-600 text-green-400 bg-green-900/30 hover:bg-green-800/50"
                      : "border-gray-600 text-gray-200 hover:border-green-600 hover:text-green-400 hover:bg-green-900/20"
                  }`}
                >
                  {expanded === article.id ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 text-sm rounded-md font-medium border transition-all duration-300 ${
              page === i + 1
                ? "bg-green-600 border-green-600 text-white"
                : "border-gray-600 text-gray-300 hover:border-green-600 hover:text-green-400"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
