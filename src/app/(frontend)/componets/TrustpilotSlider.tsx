"use client";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const reviews = [
  {
    name: "Khawla",
    text: "I’m really happy because the communication was very fast and the issue was resolved quickly.",
    date: "18 August",
    rating: 5,
  },
  {
    name: "Thaha pc",
    text: "Very good broker for withdrawals and trading setup.",
    date: "29 July",
    rating: 5,
  },
  {
    name: "Raheel Mughal",
    text: "I’ve had an excellent experience trading on this platform. The interface is intuitive and smooth.",
    date: "6 June",
    rating: 5,
  },
  {
    name: "Nick Skye",
    text: "This good forex broker with helpful support and nice spreads.",
    date: "16 January",
    rating: 4,
  },
];

export default function TrustpilotSlider() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // large screens <1280px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // tablets <768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // ✅ disable center mode to make full width
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480, // mobiles <480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  return (
    <section className="py-14 bg-white text-gray-800 px-4 md:px-10">
      <div className="text-center mb-8">
        <p className="text-xl font-semibold">Great</p>
        <div className="flex justify-center items-center mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < 4 ? "text-green-500" : "text-gray-300"
              } fill-green-500`}
            />
          ))}
        </div>
        <p className="text-sm">
          Based on{" "}
          <span className="underline text-green-600 cursor-pointer">
            335 reviews
          </span>
        </p>
        <div className="flex justify-center mt-1">
          <Image
            src="/Trustpilot_Logo.webp"
            alt="Trustpilot"
            width={100}
            height={20}
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((r, i) => (
            <div key={i} className="px-3">
              <div className="border border-gray-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition">
                <div className="flex gap-1 mb-2">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-green-500 fill-green-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 italic">"{r.text}"</p>
                <div className="text-gray-900 font-semibold">{r.name}</div>
                <p className="text-gray-500 text-xs">{r.date}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-green-50"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={next}
          className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-green-50"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
