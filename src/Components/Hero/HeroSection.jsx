// src/components/HeroSection2.jsx
import React, { useEffect } from "react";
import {
  Mail,
  Phone,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Star,
  Target,
} from "lucide-react";
import img from "../../assets/Herosection.png";

function useCalendlyLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.Calendly) return;
    const existing = document.getElementById("calendly-script");
    if (existing) return;
    const s = document.createElement("script");
    s.id = "calendly-script";
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
}

const HeroSection2 = ({ topOffset = 88 }) => {
  useCalendlyLoader();

  const openCalendly = (e) => {
    e?.preventDefault();
    try {
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({
          url: "https://calendly.com/gobluelifellc/30min",
        });
      } else {
        window.open(
          "https://calendly.com/gobluelifellc/30min",
          "_blank",
          "noopener,noreferrer"
        );
      }
    } catch {
      window.open(
        "https://calendly.com/gobluelifellc/30min",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const features = [
    { icon: Target, text: "Goal-oriented planning" },
    { icon: ShieldCheck, text: "Risk management" },
    { icon: TrendingUp, text: "Growth strategies" },
    { icon: Star, text: "Premium service" },
  ];

  // BlueLife LLC Colors
  const primaryBlue = "#00B0FF";
  const darkBlue = "#0050A0";
  const backgroundDark = "#001833";
  const textLight = "#E0F2FF";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e8f4f8 100%)",
        paddingTop: `${topOffset}px`
      }}
    >
      {/* Geometric Background with Glassmorphism */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(0, 176, 255, 0.4) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 176, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Floating Glass Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full backdrop-blur-xl animate-pulse" 
          style={{ 
            background: 'rgba(0, 176, 255, 0.08)',
            border: '1px solid rgba(0, 176, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 176, 255, 0.1)'
          }} />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full backdrop-blur-xl animate-pulse delay-300" 
          style={{ 
            background: 'rgba(0, 80, 160, 0.08)',
            border: '1px solid rgba(0, 80, 160, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 80, 160, 0.1)'
          }} />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full backdrop-blur-xl animate-pulse delay-700" 
          style={{ 
            background: 'rgba(0, 176, 255, 0.06)',
            border: '1px solid rgba(0, 176, 255, 0.12)',
            boxShadow: '0 8px 32px rgba(0, 176, 255, 0.08)'
          }} />
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Left Panel - Content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16">
            <div className="max-w-2xl relative">
              {/* Glassmorphism Container */}
              <div className="absolute -inset-4 rounded-3xl backdrop-blur-2xl opacity-60 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }} />
              
              <div className="relative z-10">
                {/* Badge with Glassmorphism */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-xl border transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: 'rgba(0, 176, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                  }}>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: primaryBlue }} />
                  <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: primaryBlue }}>
                    Trusted Financial Partners
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  <span style={{ color: '#1e293b' }}>Build a</span>
                  <br />
                  <span style={{
                    background: 'linear-gradient(135deg, #0050A0 0%, #00B0FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Stronger Financial Future
                  </span>
                  <b />
                  <span style={{ color: '#1e293b' }}> — Starting Now.</span>
                </h1>

                <p className="text-xl mb-8 leading-relaxed" style={{ color: '#475569' }}>
                  Clear plans. Smart protection. Disciplined growth. We combine education and strategy to help you reach—and keep—your goals with clarity and confidence.
                </p>

                {/* Features Grid with Glassmorphism */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'rgba(255, 255, 255, 0.5)',
                        borderColor: 'rgba(0, 176, 255, 0.2)',
                        boxShadow: '0 4px 16px rgba(0, 176, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                      }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm border"
                        style={{
                          background: 'rgba(0, 176, 255, 0.15)',
                          borderColor: 'rgba(0, 176, 255, 0.3)',
                        }}>
                        <feature.icon className="w-5 h-5" style={{ color: primaryBlue }} />
                      </div>
                      <span className="font-medium" style={{ color: '#1e293b' }}>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <button
                    onClick={openCalendly}
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(135deg, ${primaryBlue} 0%, ${darkBlue} 100%)`,
                      color: '#ffffff',
                      boxShadow: '0 8px 24px rgba(0, 176, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <Calendar className="w-5 h-5" />
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-xl border"
                    style={{
                      background: 'rgba(255, 255, 255, 0.6)',
                      borderColor: 'rgba(0, 176, 255, 0.2)',
                      boxShadow: '0 4px 16px rgba(0, 176, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                    }}>
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-[#0050A0] to-[#00B0FF] flex items-center justify-center text-xs font-bold text-white shadow-lg">
                          {i}K+
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: '#1e293b' }}>Happy Clients</div>
                      <div className="text-sm" style={{ color: '#64748b' }}>Trusted since 2010</div>
                    </div>
                  </div>
                </div>

                {/* Contact Info with Glassmorphism */}
                <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t backdrop-blur-sm rounded-b-2xl p-4 -mx-4 -mb-4"
                  style={{ 
                    borderColor: 'rgba(0, 176, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.4)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                  }}>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm"
                    style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid rgba(0, 176, 255, 0.15)'
                    }}>
                    <Mail className="w-4 h-4" style={{ color: primaryBlue }} />
                    <a href="mailto:info@bluelife.llc" className="text-sm hover:underline transition-all" style={{ color: '#1e293b' }}>
                      info@bluelife.llc
                    </a>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm"
                    style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid rgba(0, 176, 255, 0.15)'
                    }}>
                    <Phone className="w-4 h-4" style={{ color: primaryBlue }} />
                    <a href="tel:+19164679264" className="text-sm font-semibold hover:underline transition-all" style={{ color: '#1e293b' }}>
                      916-467-9264
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Visual */}
          <div className="relative flex items-center justify-center p-8 lg:p-16">
            <div className="relative w-full max-w-2xl">
              {/* Main Image Container with Glassmorphism */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 backdrop-blur-sm border"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 20px 60px rgba(0, 176, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.5)'
                }}>
                <img
                  src={img}
                  alt="Financial planning and growth strategy"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0050A0] via-transparent to-[#00B0FF] opacity-15" />
                {/* Glass overlay */}
                <div className="absolute inset-0 backdrop-blur-[2px] opacity-30" 
                  style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)' }} />
              </div>

              {/* Floating Stats Cards with Enhanced Glassmorphism */}
              <div className="absolute -left-8 top-1/4 backdrop-blur-2xl rounded-2xl p-6 border shadow-2xl transform -rotate-6 transition-all duration-300 hover:scale-105 hover:rotate-[-4deg]"
                style={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  borderColor: 'rgba(0, 176, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 176, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.5)'
                }}>
                <div className="text-2xl font-bold mb-2" style={{ color: darkBlue }}>+12.4%</div>
                <div className="text-sm" style={{ color: '#64748b' }}>Annual Growth</div>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="w-4 h-4" style={{ color: '#00A86B' }} />
                  <span className="text-xs font-semibold" style={{ color: '#00A86B' }}>+2.1% this month</span>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 backdrop-blur-2xl rounded-2xl p-6 border shadow-2xl transform rotate-6 transition-all duration-300 hover:scale-105 hover:rotate-[4deg]"
                style={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  borderColor: 'rgba(0, 176, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 176, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.5)'
                }}>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5" style={{ color: darkBlue }} />
                  <span className="font-semibold text-sm" style={{ color: darkBlue }}>Security Score</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: darkBlue }}>98.7%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;