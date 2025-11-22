import React from "react";

const services = [
  { title: "Retirement Planning", description: "Plan your retirement so your lifestyle is shaped by choice, not just assets at retirement.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img1.jpg" },
  { title: "Estate Planning", description: "Protect what you've built from probate, litigation, and unfavorable taxation.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img2.jpg" },
  { title: "Kids Education Planning", description: "Choose a smart, disciplined path to fund your children's education.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img3.jpg" },
  { title: "Lifetime Income Planning", description: "No pension? Create one—and secure predictable, lifetime income streams.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img4.jpg" },
  { title: "Life Insurance Planning", description: "Right-sized coverage with living benefits and quotes that fit your budget.", image: "https://s3.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/files/images/240314022303_Life%20Insurance%20at%20Various%20Life%20Stages.jpeg" },
  { title: "Investments Planning", description: "Grow capital the smart way. Know the difference between nominal and real returns.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img6.jpg" },
];

export default function ServiceCardsCorporate() {
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
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0050A0] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B0FF] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border shadow-sm mb-8"
            style={{
              borderColor: borderColor,
            }}>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: primaryColor }}>
              Our Services
            </span>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 tracking-tight text-gray-900">
            Professional <span style={{ color: primaryColor }}>Services</span>
          </h2>

          <p className="text-md text-gray-700 max-w-3xl mx-auto">
            Expert guidance and tailored solutions to help you secure a better financial future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                borderColor: borderColor,
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Service Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                    style={{ backgroundColor: primaryColor }}>
                    Expert
                  </span>
                </div>

                {/* Service Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-sm" style={{ color: primaryColor }}>
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Secure", "Tailored", "Expert"].map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300"
                      style={{
                        borderColor: "rgba(0, 80, 160, 0.3)",
                        color: primaryColor,
                        backgroundColor: "rgba(0, 80, 160, 0.08)"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                        window.Calendly.initPopupWidget({ url: "https://calendly.com/gobluelifellc/30min" });
                      } else {
                        window.open("https://calendly.com/gobluelifellc/30min", "_blank", "noopener,noreferrer");
                      }
                    }}
                    className="px-5 py-2.5 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                    }}
                  >
                    Book Review
                  </button>

                  <button
                    onClick={() => {
                      if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                        window.Calendly.initPopupWidget({ url: "https://calendly.com/gobluelifellc/30min" });
                      }
                    }}
                    className="text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{ color: primaryColor }}
                  >
                    Learn more →
                  </button>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-transparent via-[#0050A0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border shadow-lg"
            style={{ borderColor: borderColor }}>
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-600">
              BlueLife Financial Solutions
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
}