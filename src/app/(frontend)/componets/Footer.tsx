"use client";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      {/* Green Top Banner */}
      <div className="bg-gradient-to-r from-green-500 to-green-700 text-white py-10 text-center rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to trade?</h2>
        <p className="mt-2 text-sm md:text-base">
          Open an account in less than 5 minutes. Start trading your way.
        </p>
        <button className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
          Trade Now
        </button>
      </div>

      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 border-b border-gray-200">
        {/* Left Section */}
        <div>
          <h3 className="text-green-600 font-semibold text-lg">
            Empowering Traders <br /> Globally since 2018
          </h3>
          <p className="text-sm mt-2">
            DB Investing Group includes the following regulations from
          </p>
          <div className="flex gap-3 mt-3">
            <img src="/images/fsa.png" alt="FSA" className="h-6" />
            <img src="/images/sca.png" alt="SCA" className="h-6" />
            <img src="/images/fintrac.png" alt="FINTRAC" className="h-6" />
          </div>
          <img
            src="/images/greatplace.png"
            alt="Great Place to Work"
            className="h-12 mt-4"
          />
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/logo.png"
            alt="DB Investing"
            className="h-10 mb-3"
          />
          <div className="flex items-center gap-2 text-sm">
            <p>⭐ 4.7 Stars</p>
            <img
              src="/images/trustpilot.png"
              alt="Trustpilot"
              className="h-5"
            />
          </div>
          <p className="text-xs mt-1 text-gray-400">
            Provided by review-widget.net
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold text-gray-900">
            Multiple Awards Winner Broker
          </h3>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 mt-3">
            <img src="/images/award1.png" alt="Award 1" className="h-12" />
            <img src="/images/award2.png" alt="Award 2" className="h-12" />
            <img src="/images/award3.png" alt="Award 3" className="h-12" />
          </div>
          <p className="text-xs text-gray-500 mt-2">+8 more</p>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-sm">
        {/* About */}
        <div>
          <h4 className="font-semibold text-green-600 mb-3">ABOUT</h4>
          <ul className="space-y-2">
            <li>Why DBinvesting</li>
            <li>Company Profile</li>
            <li>About Us</li>
            <li>Our Offices</li>
            <li>Careers</li>
            <li>Awards</li>
            <li>Regulation</li>
          </ul>
        </div>

        {/* Partnerships */}
        <div>
          <h4 className="font-semibold text-green-600 mb-3">PARTNERSHIPS</h4>
          <ul className="space-y-2">
            <li>Introducing Broker</li>
            <li>CPA Affiliates</li>
            <li>PAMM</li>
            <li>Partnership FAQ</li>
          </ul>
        </div>

        {/* Markets */}
        <div>
          <h4 className="font-semibold text-green-600 mb-3">MARKETS</h4>
          <ul className="space-y-2">
            <li>Forex</li>
            <li>Metals</li>
            <li>Indices</li>
            <li>Commodities</li>
            <li>Stocks CFD</li>
            <li>Real Stocks</li>
            <li>ETFs</li>
          </ul>
        </div>

        {/* Accounts */}
        <div>
          <h4 className="font-semibold text-green-600 mb-3">ACCOUNTS</h4>
          <ul className="space-y-2">
            <li>STP</li>
            <li>RAW</li>
            <li>PRO</li>
            <li>Islamic</li>
            <li>Islamic Plus</li>
            <li>Demo</li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h4 className="font-semibold text-green-600 mb-3">EDUCATION</h4>
          <ul className="space-y-2">
            <li>Ebooks</li>
            <li>Webinars</li>
            <li>Platform Tutorials</li>
            <li>Live Streaming</li>
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h4 className="font-semibold text-green-600 mb-3">HELP CENTER</h4>
          <ul className="space-y-2">
            <li>Payment Methods</li>
            <li>FAQs</li>
            <li>Legal Document</li>
            <li>Privacy Policy</li>
            <li>Risk Disclosure</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center py-4 text-xs border-t border-gray-200 text-gray-500">
        © {new Date().getFullYear()} DBinvesting. All rights reserved.
      </div>
    </footer>
  );
}
