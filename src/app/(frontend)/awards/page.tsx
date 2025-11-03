"use client";

import Image from "next/image";

export default function AwardsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Awards <span className="text-green-600">& Achievements</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
            Recognized globally for excellence, innovation, and trust in the
            financial industry.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="flex items-center bg-gradient-to-r from-green-50 via-emerald-100 to-teal-50 text-gray-800 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-transform hover:scale-105 border border-green-100">
            <div className="w-32 h-32 relative flex-shrink-0">
              <Image
                src="/images/award.png"
                alt="Award 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Best Global Broker 2023
              </h3>
              <p className="mt-3 text-gray-700">
                Awarded by Global Finance for excellence in customer service and
                innovation.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center bg-gradient-to-r from-blue-50 via-cyan-100 to-green-50 text-gray-800 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-transform hover:scale-105 border border-cyan-100">
            <div className="w-32 h-32 relative flex-shrink-0">
              <Image
                src="/images/award-1.png"
                alt="Award 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Fastest Growing Broker 2022
              </h3>
              <p className="mt-3 text-gray-700">
                Recognized by World Trading Awards for rapid expansion and
                global reach.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center bg-gradient-to-r from-purple-50 via-pink-100 to-rose-50 text-gray-800 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-transform hover:scale-105 border border-pink-100">
            <div className="w-32 h-32 relative flex-shrink-0">
              <Image
                src="/images/award-2.png"
                alt="Award 3"
                fill
                className="object-contain"
              />
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Excellence in Innovation
              </h3>
              <p className="mt-3 text-gray-700">
                Honored for introducing AI-driven trading tools and analytics.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center bg-gradient-to-r from-yellow-50 via-amber-100 to-orange-50 text-gray-800 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-transform hover:scale-105 border border-amber-100">
            <div className="w-32 h-32 relative flex-shrink-0">
              <Image
                src="/images/award-3.png"
                alt="Award 4"
                fill
                className="object-contain"
              />
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Trusted Broker of the Year
              </h3>
              <p className="mt-3 text-gray-700">
                Recognized by Traders Union for transparency and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
