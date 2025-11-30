import React from "react";
import image from "../../assets/ashesh.jpeg";
import { Award, Users, TrendingUp, Shield, Target, Lightbulb } from "lucide-react";

export default function AboutUsModernSplit() {
  // BlueLife Financial Solutions LLC Modern Colors
  const primaryColor = "#0050A0";
  const secondaryColor = "#00B0FF";
  const accentColor = "#80D8FF";
  const background = "#ffffff"; // Changed to white
  const cardDark = "#f8fafc"; // Light card background
  const textLight = "#0f172a"; // Dark text for light background
  const textMuted = "#64748b"; // Muted dark text
  const borderColor = "#e2e8f0"; // Light border

  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'><rect width='100%' height='100%' fill='%23f8fafc'/><g fill='%2300B0FF' opacity='0.08'><circle cx='400' cy='400' r='250'/></g><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='28' fill='%230f172a' opacity='0.2'>Image unavailable</text></svg>`
  )}`;

  const values = [
    { icon: Target, title: "Clarity", description: "Clear financial roadmaps" },
    { icon: Shield, title: "Security", description: "Protected investments" },
    { icon: TrendingUp, title: "Growth", description: "Wealth accumulation" },
    { icon: Users, title: "Partnership", description: "Long-term relationships" }
  ];

  return (
    <section className="mt-10 relative min-h-screen bg-white"> {/* Changed to white */}
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0050A0]/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00B0FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-[#0050A0]">
            <div className="w-2 h-2 bg-[#80D8FF] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white uppercase tracking-wide">
              About Us
            </span>
          </div>

          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"> {/* Changed to dark text */}
            Building Your
            <span className="block bg-gradient-to-r from-[#0050A0] to-[#00B0FF] bg-clip-text text-transparent">
              Financial Legacy
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto"> {/* Changed to dark muted text */}
            Transforming financial complexity into clarity and confidence for families nationwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg"> {/* Changed to white card */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0050A0] to-[#00B0FF] flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Mission</h2> {/* Dark text */}
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg"> {/* Dark text */}
                  At <strong className="text-gray-900">BlueLife Financial Solutions LLC</strong>, we understand that personal finances can be overwhelming—especially when most people never receive formal education on the subject. Our mission is to empower you with the knowledge and tools needed to take control of your financial future.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg"> {/* Dark text */}
Between work, kids, and immigration stress, personal finance can fall to the bottom of the list. We simplify everything — saving, investing, taxes, protection — and help your family build a clear, affordable plan for a stronger future in the U.S.                </p>

                {/* <p className="text-gray-700 leading-relaxed text-lg"> 
                  Through ongoing support, workshops, tools, and one-on-one guidance, we help you build long-term clarity and confidence. Our purpose is simple: demystify personal finance and help your family build a secure future—step by step.
                </p> */}
              </div>
            </div>

            {/* Values Grid - Commented out as in original */}
            {/* <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 text-center group hover:border-[#00B0FF] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0050A0] to-[#00B0FF] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Column - Founder */}
          <div className="space-y-8">
            {/* Founder Card */}
            <div className="bg-gradient-to-br from-[#0050A0] to-[#00B0FF] rounded-3xl p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>

              {/* <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full p-2 bg-white/20 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 bg-white/10">
                    <img
                      src=""
                      alt="Rahul Goswami — Founder"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = placeholder;
                      }}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div> */}

              <div className="space-y-3">
                <div>
                  <h2 className="text-base font-semibold tracking-widest uppercase text-white/80">Founder & CEO</h2>
                  <h3 className="text-3xl font-black mt-1">Rahul Goswami</h3>
                  {/* <p className="text-white/70 text-sm">License Number – 21322826</p> */}
                </div>

                <div className="h-px w-16 mx-auto bg-white/30"></div>

                <div>
                  <p className="text-lg font-semibold">BlueLife Financial Solutions LLC</p>
                  <p className="text-white/70 text-sm">Financial Security & Growth</p>
                </div>
              </div>
            </div>

            {/* Stats Card - Commented out as in original */}
            {/* <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#00B0FF] mb-1">15+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#00B0FF] mb-1">1.2K+</div>
                  <div className="text-xs text-gray-600">Families</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#00B0FF] mb-1">98%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div> */}

            {/* Certification Badge */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center"> {/* Changed to white */}
              <Award className="w-8 h-8 text-[#00B0FF] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Certified Expertise</h4> {/* Dark text */}
              <p className="text-sm text-gray-600">Licensed Financial Professionals</p> {/* Dark muted text */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}