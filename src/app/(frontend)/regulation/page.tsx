"use client";
import Image from "next/image";

export default function Regulation() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      {/* Header Section with Background Image */}
      <div className="relative text-center pt-20 pb-16 overflow-hidden">
        <Image
          src="/images/world_bg.png"
          alt="world map background"
          fill
          priority
          className="object-cover opacity-70 pointer-events-none"
        />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">
            <span className="text-[#1bb76e]">Regulatory</span>{" "}
            <span className="text-gray-800">Environment</span>
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Regulation of DB Investing
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-20 px-6 space-y-16">
        {/* FSA Section */}
        <div className="flex items-start">
          <div className="w-16 h-12 relative flex-shrink-0">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg"
              alt="Seychelles Flag"
              fill
              className="object-contain"
            />
          </div>
          <div className="ml-5">
            <h3 className="font-bold text-[#1bb76e] text-lg">FSA</h3>
            <p className="text-sm text-gray-700">
              Financial Services Authority (Seychelles)
            </p>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              <strong>DB Investing Limited</strong> is a Security Dealer
              registered, authorized and regulated company by the Financial
              Services Authority (FSA) in Seychelles with license SD053.
            </p>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              The Seychelles Financial Services Authority is the autonomous
              regulatory body responsible for the non-bank financial services in
              Seychelles. Established under the Financial Services Authority
              Act, 2013, the Authority is responsible to license, regulate,
              enforce regulatory and compliance requirements, monitor and
              supervise the conduct of business in the non-bank financial
              services sector in Seychelles. These regulated activities are
              Fiduciary Services, Capital Market & Collective Investment Schemes
              and Insurance.
            </p>
          </div>
        </div>

        {/* SCA Section */}
        <div className="flex items-start">
          <div className="w-16 h-12 relative flex-shrink-0">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg"
              alt="UAE Flag"
              fill
              className="object-contain"
            />
          </div>
          <div className="ml-5">
            <h3 className="font-bold text-[#1bb76e] text-lg">SCA</h3>
            <p className="text-sm text-gray-700">
              Securities & Commodities Authority (UAE)
            </p>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              <strong>DBInvest Financial Services LLC</strong>, registered,
              authorized and regulated company by the Securities & Commodities
              Authority (SCA) in the United Arab Emirates with license
              20200000197, category 5, Arrangement and advice.
            </p>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              The Securities and Commodities Authority has been keen on putting
              the objectives stated in the Federal Law No. (4) of 2000 into
              effect by sparing no effort to strengthen the legislative
              structure through issuing such regulations and instructions that
              ensure the development of the organizational and supervisory
              framework of the joint-stock companies and other companies
              operating in the securities field. Besides, the Authority has
              introduced some controls and criteria that would contribute
              positively to enhancing the investors' trust in the Authority.
            </p>
          </div>
        </div>

        {/* FINTRAC Section */}
        <div className="flex items-start">
          <div className="w-16 h-12 relative flex-shrink-0">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg"
              alt="Canada Flag"
              fill
              className="object-contain"
            />
          </div>
          <div className="ml-5">
            <h3 className="font-bold text-[#1bb76e] text-lg">FINTRAC</h3>
            <p className="text-sm text-gray-700">
              Financial Transactions and Reports Analysis Centre (Canada)
            </p>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              <strong>DB Pay Ltd</strong>, an MSB-registered and authorized
              company by Fintrac in Canada with registration number M22286159
              dated 14/04/2022 and with address in 1717 ROBSON STREET, 1606,
              VANCOUVER, British Columbia, Canada.
            </p>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              The Financial Transactions and Reports Analysis Centre of Canada
              (FINTRAC) is Canada's financial intelligence unit (FIU). FINTRAC
              assists in detecting, preventing and deterring money laundering
              and the financing of terrorist activities while ensuring the
              protection of personal information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
