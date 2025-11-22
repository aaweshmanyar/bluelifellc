import React from "react";
import { ArrowRight, Calendar, Target, Users, Shield, CheckCircle } from "lucide-react";

const bluePrimary = "#0050A0";
const secondaryColor = "#00B0FF";
const accentColor = "#80D8FF";
const background = "#ffffff";
const cardBg = "#f8fafc";
const textDark = "#0f172a";
const textMuted = "#64748b";
const borderColor = "#e2e8f0";

const services = [
  {
    title: "Planning For The Future",
    description: (
      <>
        <p className="text-gray-700 leading-relaxed">
          We’ve helped clients prepare for the unknown while staying aligned with their financial goals. Ask us about:
        </p>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {["Financial Planning", "Tax Optimization", "Education Funding", "Estate Planning"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: bluePrimary }} />
              <span className="text-gray-600 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed">
          As an independent firm, we source across providers to tailor solutions that fit your exact needs.
        </p>
      </>
    ),
    image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img7.jpg",
    icon: Target
  },
  {
    title: "Comprehensive End- to - End Approach",
    description: "We start with a deep needs analysis, clarify goals, and review your full portfolio. Then we tailor strategies to your risk tolerance and market realities—expect unbiased recommendations built around you.",
    image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img8.jpg",
    icon: Users
  },
  {
    title: "Committed to Service",
    description: "Great strategies begin with great relationships. Our mission is to exceed expectations—on day one and year ten. Let’s map short- and long-term moves that bring your goals within reach.",
    image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img9.jpg",
    icon: Shield
  },
];

export default function ValuePropositionCorporate() {
  return (
    <section className=" py-4 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0050A0] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B0FF] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border shadow-sm mb-8"
            style={{
              borderColor: borderColor,
            }}>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: bluePrimary }}>
              Our Value Proposition
            </span>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 tracking-tight text-gray-900">
            Why Choose <span style={{ color: bluePrimary }}>BlueLife</span>
          </h1>

          <p className="text-md text-gray-700 max-w-2xl mx-auto">
            Clear guidance. Disciplined strategy. A better future ahead.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                borderColor: borderColor,
              }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Image */}
                <div className="lg:w-2/5 relative overflow-hidden rounded-2xl">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                      style={{ backgroundColor: bluePrimary }}>
                      {index === 0 ? "Comprehensive" : "Expert"}
                    </span>
                  </div>

                  {/* Service Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6" style={{ color: bluePrimary }} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <service.icon className="w-6 h-6" style={{ color: bluePrimary }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {service.description}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3">
                    {["Strategic", "Personalized", "Long-term"].map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors duration-300"
                        style={{
                          borderColor: "rgba(0, 80, 160, 0.3)",
                          color: bluePrimary,
                          backgroundColor: "rgba(0, 80, 160, 0.08)"
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-4 pt-4">
                    <button
                      onClick={() => {
                        if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                          window.Calendly.initPopupWidget({ url: "https://calendly.com/gobluelifellc/30min" });
                        } else {
                          window.open("https://calendly.com/gobluelifellc/30min", "_blank", "noopener,noreferrer");
                        }
                      }}
                      className="group/btn flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${bluePrimary}, ${secondaryColor})`
                      }}
                    >
                      <Calendar className="w-4 h-4" />
                      Consult Our Experts
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => {
                        if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                          window.Calendly.initPopupWidget({ url: "https://calendly.com/gobluelifellc/30min" });
                        }
                      }}
                      className="text-sm font-semibold transition-all duration-300 hover:scale-105"
                      style={{ color: bluePrimary }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-transparent via-[#0050A0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-6"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-white border shadow-lg"
            style={{ borderColor: borderColor }}>
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-600">
              Ready to Transform Your Financial Future?
            </span>
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                  window.Calendly.initPopupWidget({ url: "https://calendly.com/gobluelifellc/30min" });
                } else {
                  window.open("https://calendly.com/gobluelifellc/30min", "_blank", "noopener,noreferrer");
                }
              }}
              className="group/btn flex items-center gap-2 px-6 py-2 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${bluePrimary}, ${secondaryColor})`
              }}
            >
              Start Today
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}