"use client";
import { motion } from "framer-motion";
import { Rocket, Lock, Zap, BarChart } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-8 h-8 text-green-500" />,
    title: "Instant Crypto Withdrawals",
    text: "Access your funds instantly with our lightning-fast crypto withdrawal system—no delays, no hassle.",
  },
  {
    icon: <Lock className="w-8 h-8 text-green-500" />,
    title: "Heavily Regulated",
    text: "DB Investing Group is fully licensed and regulated across multiple jurisdictions, ensuring maximum security and compliance.",
  },
  {
    icon: <Zap className="w-8 h-8 text-green-500" />,
    title: "Ultra-Fast Execution (<70ms)",
    text: "Experience seamless trading with execution speeds under 70 milliseconds—because timing is everything.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-green-500" />,
    title: "Leverage Up to 1:2000",
    text: "Boost your trading power with one of the highest leverage levels in the industry.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 bg-white text-center px-6">
      {/* Heading */}
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-4"
      >
        Why Over <span className="text-green-600">500,000 Clients</span> Choose{" "}
        <span className="text-green-600">DB Investing Group</span>
      </motion.h2>

      <p className="text-gray-500 max-w-3xl mx-auto mb-12">
        With a strong track record of success, we deliver exceptional and
        profitable trading experiences through innovative account types,
        lightning-fast execution, advanced trading platforms, and
        industry-leading pricing and liquidity.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gray-50 border border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {f.icon}
              <h3 className="font-semibold text-gray-900 text-lg">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
