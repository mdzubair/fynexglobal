"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const news = [
  {
    title: "Top AI Marketing Leader",
    desc: "Why We Show Up: The Value of Logos and Recognition in Fintech",
    date: "October 26, 2025",
  },
  {
    title: "DB Investing Listed on TradeGuide",
    desc: "Proud to Announce DB Investing Listed on TradeGuide",
    date: "October 5, 2025",
  },
  {
    title: "Welcome to the Team",
    desc: "DB Investing Welcomes Elena Kuriapinova at CMO; A Partnership of Growth and Vision",
    date: "September 15, 2025",
  },
];

export default function CompanyNews() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Company <span className="text-green-600">News</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gray-50 rounded-xl p-5 shadow hover:shadow-lg transition"
            >
              <div className="font-semibold mb-1">{item.title}</div>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{item.date}</span>
                <Link
                  href="#"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
