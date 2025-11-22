import React from "react";
import logo1 from "../../assets/partnerlogo/logo1.png";
import logo2 from "../../assets/partnerlogo/logo2.png";
import logo3 from "../../assets/partnerlogo/logo3.png";
import logo4 from "../../assets/partnerlogo/logo4.png";
import logo5 from "../../assets/partnerlogo/logo5.png";
import logo6 from "../../assets/partnerlogo/logo6.png";
import logo7 from "../../assets/partnerlogo/logo7.png";
import logo8 from "../../assets/partnerlogo/logo8.png";
import logo9 from "../../assets/partnerlogo/logo9.png";
import logo10 from "../../assets/partnerlogo/logo10.png";
import logo11 from "../../assets/partnerlogo/logo11.png";
import logo12 from "../../assets/partnerlogo/logo12.png";
import logo13 from "../../assets/partnerlogo/logo13.png";
import logo14 from "../../assets/partnerlogo/logo14.png";
import logo15 from "../../assets/partnerlogo/logo15.png";
import logo16 from "../../assets/partnerlogo/logo16.png";
import logo17 from "../../assets/partnerlogo/logo17.png";
import logo18 from "../../assets/partnerlogo/logo18.png";
import logo19 from "../../assets/partnerlogo/logo19.png";
import logo20 from "../../assets/partnerlogo/logo20.png";
import logo21 from "../../assets/partnerlogo/logo21.png";
import logo22 from "../../assets/partnerlogo/logo22.png";
import logo23 from "../../assets/partnerlogo/logo23.png";
import logo24 from "../../assets/partnerlogo/logo24.png";
import logo25 from "../../assets/partnerlogo/logo25.png";
import logo26 from "../../assets/partnerlogo/logo26.png";

const clients = [
  { id: 1, src: logo1, alt: "Prosperity Life Group" },
  { id: 2, src: logo2, alt: "Corebridge Financial" },
  { id: 3, src: logo3, alt: "Athene" },
  { id: 4, src: logo4, alt: "Americo" },
  { id: 5, src: logo5, alt: "Mutual of Omaha" },
  { id: 6, src: logo6, alt: "Fidelity & Guaranty Life" },
  { id: 7, src: logo7, alt: "Annexus" },
  { id: 8, src: logo8, alt: "Nationwide" },
  { id: 9, src: logo9, alt: "North American" },
  { id: 10, src: logo10, alt: "American Amicable" },
  { id: 11, src: logo11, alt: "American Equity Investment" },
  { id: 12, src: logo12, alt: "Netlaw" },
  { id: 13, src: logo13, alt: "ExamFX" },
  { id: 14, src: logo14, alt: "HGI Direct" },
  { id: 15, src: logo15, alt: "Allianz" },
  { id: 16, src: logo16, alt: "F&G Annuities & Life" },
  { id: 17, src: logo17, alt: "Neishloss & Fleming" },
  { id: 18, src: logo18, alt: "Hegemon Group International" },
  { id: 19, src: logo19, alt: "WFS - Wealth Format System" },
  { id: 20, src: logo20, alt: "Agent Pipeline" },
  { id: 21, src: logo21, alt: "Lead Center" },
  { id: 22, src: logo22, alt: "Partner 22" },
  { id: 23, src: logo23, alt: "Lincoln Financial Group (1)" },
  { id: 24, src: logo24, alt: "Lincoln Financial Group (2)" },
  { id: 25, src: logo25, alt: "Lincoln Financial Group (3)" },
  { id: 26, src: logo26, alt: "Lincoln Financial Group (4)" },
];

export default function OurClientsCorporate() {
  // BlueLife Corporate Colors
  const primaryColor = "#0050A0";
  const secondaryColor = "#00B0FF";
  const accentColor = "#80D8FF";
  const background = "#ffffff";
  const cardBg = "#f8fafc";
  const textDark = "#0f172a";
  const textMuted = "#64748b";
  const borderColor = "#e2e8f0";

  return (
    <section className="py-10 lg:py-10 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0050A0] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B0FF] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border shadow-sm mb-5"
            style={{
              borderColor: borderColor,
            }}>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: primaryColor }}>
              Trusted Partnerships
            </span>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight text-gray-900">
            Elite Product Providers & Affiliated Companies
            <span style={{ color: primaryColor }}></span>
          </h2>

          {/* <div className="w-24 h-1.5 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#0050A0] to-[#00B0FF]"></div> */}

          {/* <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Elite Financial Product Providers
          </p> */}
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Trusted partners we collaborate with to deliver tailored financial solutions.
          </p>
        </div>

        {/* Main Grid Container */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border shadow-2xl"
          style={{
            borderColor: borderColor,
            boxShadow: "0 25px 50px -12px rgba(0, 80, 160, 0.15)"
          }}>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group relative flex items-center justify-center w-full aspect-[4/3] p-4 rounded-xl transition-all duration-300 hover:scale-105 focus-within:scale-105 bg-white border"
                tabIndex={0}
                aria-label={client.alt}
                style={{
                  borderColor: borderColor,
                  boxShadow: "0 4px 12px rgba(0, 80, 160, 0.08)"
                }}
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-50 to-white border-2"
                  style={{
                    borderColor: secondaryColor,
                  }}
                ></div>

                {/* Logo Container */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-3">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Tooltip on Hover */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                  <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap">
                    {client.alt}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Accent */}
          <div className="mt-12 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-600">
                BlueLife Financial Solutions
              </p>
              <div className="h-1.5 rounded-full w-48 mx-auto bg-gradient-to-r from-[#0050A0] to-[#00B0FF]">
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          {[
            { number: "26+", label: "Premium Partners", color: primaryColor },
            { number: "15+", label: "Years Experience", color: secondaryColor },
            { number: "1.2K+", label: "Clients Served", color: primaryColor }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white shadow-lg border border-gray-200"
            >
              <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}