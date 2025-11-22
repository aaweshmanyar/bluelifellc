import React, { useState } from "react";
import {
  Handshake,
  Notebook,
  BookOpenText,
  ChartNoAxesCombined,
  X,
  ChevronRight,
  Calendar,
  Users,
  Target,
  Award,
  CheckCircle
} from "lucide-react";

const cardData = [
  {
    title: "Professional Responsibilities",
    description: [
      "Embrace the system, follow it, and align with your leaders.",
      "Allow your leaders to guide you while you earn and learn simultaneously.",
      "Invite anyone and everyone to sessions and workshops.",
      "Schedule follow-up sessions with your leader to enhance growth.",
    ],
    Icon: Handshake,
  },
  {
    title: "Financial Education Mission",
    description: [
      "“An investment in knowledge pays the best interest.” We help families secure future needs while enjoying life fully.",
    ],
    Icon: Notebook,
  },
  {
    title: "Required Qualifications",
    description: ["Energetic self-starter", "Coachable", "18+ with valid SSN"],
    Icon: BookOpenText,
  },
  {
    title: "Career Development",
    description: [
      "Craft tailored plans across:",
      "Retirement planning",
      "Tax savings",
      "401(k) rollover",
      "College savings",
      "Asset protection",
      "Risk management",
      "Estate planning",
    ],
    Icon: ChartNoAxesCombined,
  },
];

export default function PartnerProgramCorporate() {
  const [selectedCard, setSelectedCard] = useState(null);

  // BlueLife Corporate Colors
  const primaryColor = "#0050A0";
  const secondaryColor = "#00B0FF";
  const accentColor = "#80D8FF";
  const background = "#ffffff";
  const cardBg = "#f8fafc";
  const textDark = "#0f172a";
  const textMuted = "#64748b";
  const borderColor = "#e2e8f0";

  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/gobluelifellc/30min" });
    } else {
      window.open("https://calendly.com/gobluelifellc/30min", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border shadow-sm mb-8"
            style={{
              borderColor: borderColor,
            }}>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: primaryColor }}>
              Professional Partnership
            </span>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight text-gray-900">
            Partner <span style={{ color: primaryColor }}>Program</span>
          </h2>

          <p className="text-md text-gray-700 max-w-2xl mx-auto">
            Build a meaningful career helping families master personal finance.
          </p>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Users, value: "50+", label: "Team Members", color: primaryColor },
            { icon: Target, value: "98%", label: "Success Rate", color: secondaryColor },
            { icon: Award, value: "15+", label: "Years Experience", color: primaryColor },
            { icon: Calendar, value: "Flexible", label: "Schedule", color: secondaryColor }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white border shadow-sm"
              style={{
                borderColor: borderColor,
              }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: stat.color }} />
              <div className="text-2xl font-bold mb-1 text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              onClick={() => setSelectedCard(card)}
              className="group bg-white rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{
                borderColor: borderColor,
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border flex-shrink-0"
                  style={{
                    borderColor: "rgba(0, 80, 160, 0.2)"
                  }}>
                  <card.Icon className="w-6 h-6" style={{ color: primaryColor }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-3 leading-tight text-gray-900">
                    {card.title}
                  </h3>

                  <ul className="space-y-2 mb-4">
                    {card.description.slice(0, 2).map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: primaryColor }} />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: borderColor }}>
                    <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: primaryColor }}>
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <span className="text-xs text-gray-500">{card.description.length} points</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border shadow-lg"
            style={{ borderColor: borderColor }}>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Join BlueLife Today</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start your journey toward a rewarding career in financial services with comprehensive training and expert mentorship.
            </p>
            <button
              onClick={openCalendly}
              className="group/btn w-full max-w-md mx-auto py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
              }}
            >
              <Calendar className="w-5 h-5" />
              Schedule Discovery Call
              <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setSelectedCard(null)}>
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 border shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{
              borderColor: borderColor,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(0, 80, 160, 0.2)"
                  }}>
                  <selectedCard.Icon className="w-6 h-6" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{selectedCard.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCard(null)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-3">
              {selectedCard.description.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border bg-gray-50 transition-all duration-300 hover:bg-white"
                  style={{
                    borderColor: borderColor,
                  }}
                >
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t" style={{ borderColor: borderColor }}>
              <button
                onClick={openCalendly}
                className="flex-1 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                }}
              >
                <Calendar className="w-4 h-4" />
                Book Discovery Call
              </button>
              <button
                onClick={() => setSelectedCard(null)}
                className="flex-1 py-3 rounded-xl font-semibold border transition-all duration-300 hover:bg-gray-50"
                style={{
                  borderColor: primaryColor,
                  color: primaryColor
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}