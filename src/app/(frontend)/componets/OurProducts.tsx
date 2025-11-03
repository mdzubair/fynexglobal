"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const products = [
  {
    title: "Forex",
    description:
      "Trade major, minor, and exotic currency pairs with deep liquidity and tight spreads.",
    img: "/forex.png",
  },
  {
    title: "Cryptocurrencies",
    description:
      "Trade the most popular crypto assets, including Bitcoin, Ethereum, and more — all with fast execution and low fees.",
    img: "/crypto.webp",
  },
  {
    title: "Commodities",
    description:
      "Trade agricultural products, energy sources, and precious metals with stable and transparent pricing.",
    img: "/commodities.png",
  },
  {
    title: "ETFs",
    description:
      "Diversify your portfolio with Exchange-Traded Funds across various sectors and markets.",
    img: "/etf.webp",
  },
  {
    title: "Metals",
    description:
      "Access trading opportunities in gold, silver, and other metals — safe-haven assets for every investor.",
    img: "/metals.png",
  },
  {
    title: "Stocks",
    description:
      "Trade global company shares with direct access to the world’s leading stock exchanges.",
    img: "/stocks.png",
  },
];

export default function OurProducts() {
  const sliderRef = useRef<Slider | null>(null);
  const [active, setActive] = useState(0);

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    beforeChange: (_: any, next: number) => setActive(next),
  };

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="text-center px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-green-600">Products</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Confidently trade with DB Investing in cutting-edge trading platforms
          offering groundbreaking levels of stability and reliability. Subscribe
          and execute the tightest pricing and liquidity coming from top-tier
          Banks and Prime Brokers.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {products.map((p, i) => (
            <button
              key={i}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={`px-6 py-2 border rounded-md text-sm md:text-base transition ${
                active === i
                  ? "border-green-600 text-green-600 bg-green-50"
                  : "border-gray-300 hover:border-green-600 hover:text-green-600"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative max-w-7xl mx-auto px-4"
        style={{ backgroundImage: "url('/stripe.png')" }}
      >
        <Slider ref={sliderRef} {...settings}>
          {products.map((p, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <h3 className="text-3xl font-bold text-green-600 mb-4">
                  {p.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex justify-center"
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </motion.div>
            </div>
          ))}
        </Slider>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 p-2 rounded-full shadow hover:bg-green-50"
        >
          <ChevronLeft className="text-green-600 w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 p-2 rounded-full shadow hover:bg-green-50"
        >
          <ChevronRight className="text-green-600 w-6 h-6" />
        </button>
      </div>

      {/* Background Wave */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-r from-green-50 to-white blur-2xl opacity-50" />
    </section>
  );
}
