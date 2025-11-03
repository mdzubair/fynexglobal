"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const partnerLogos = [
  "/images/jpmorgan.png",
  "/images/equals.png",
  "/images/absa.png",
  "/images/metaquotes.png",
  "/images/sepa.png",
  "/images/skrill.png",
  "/images/swift.png",
  "/images/payretailers.png",
];

const recognizedLogos = [
  "/images/bbc.png",
  "/images/cnn.png",
  "/images/aljazeera.png",
  "/images/cnbc.png",
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-16 px-4">
      {/* Partners Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-2">Our Partners</h2>
        <p className="text-gray-500 mb-8">+10 verified companies</p>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partnerLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center opacity-70 hover:opacity-100 transition">
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Payment Methods */}
      <div className="max-w-7xl mx-auto text-center mt-16">
        <h2 className="text-4xl font-bold text-green-600 mb-8">
          Our Payment Methods
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {partnerLogos.slice(4).map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center opacity-70 hover:opacity-100 transition">
                <img
                  src={logo}
                  alt="Payment Method"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Recognized By */}
      <div className="max-w-7xl mx-auto text-center mt-16">
        <h2 className="text-4xl font-bold text-green-600 mb-8">
          Proudly Recognized By
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {recognizedLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center opacity-70 hover:opacity-100 transition">
                <img
                  src={logo}
                  alt="Recognized By"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
