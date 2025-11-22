import React, { useEffect, useRef } from "react";
import { ArrowRight, Calendar, Shield, TrendingUp, Target, Users } from "lucide-react";

export default function ProductCardsGlassmorphism() {
  // BlueLife LLC Color Scheme - Updated for white background
  const primaryColor = "#0050A0";
  const secondaryColor = "#00B0FF";
  const accentColor = "#80D8FF";
  const textLight = "#0f172a"; // Changed to dark text for white background
  const textMuted = "#64748b"; // Changed to muted dark text
  const borderColor = "#e2e8f0"; // Light border for white background

  // Calendly loader
  const calendlyReadyRef = useRef(false);

  const openCalendly = () => {
    const openPopup = () =>
      window.Calendly?.initPopupWidget?.({
        url: "https://calendly.com/gobluelifellc/30min",
      });

    if (calendlyReadyRef.current && window.Calendly) {
      openPopup();
      return;
    }

    let script = document.getElementById("calendly-script");
    if (!script) {
      script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        calendlyReadyRef.current = true;
        openPopup();
      };
      document.body.appendChild(script);
    } else {
      const wait = setInterval(() => {
        if (window.Calendly) {
          clearInterval(wait);
          calendlyReadyRef.current = true;
          openPopup();
        }
      }, 50);
      setTimeout(() => clearInterval(wait), 5000);
    }
  };

  useEffect(() => {
    if (!document.getElementById("calendly-script")) {
      const s = document.createElement("script");
      s.id = "calendly-script";
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      s.onload = () => (calendlyReadyRef.current = true);
      document.body.appendChild(s);
    } else {
      calendlyReadyRef.current = !!window.Calendly;
    }
  }, []);

  const products = [
    {
      title: "Fixed & Indexed Annuities",
      description: "A contract with an insurer that can guarantee principal and interest while offering potential lifelong income withdrawals.",
      image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img4.jpg",
      icon: TrendingUp,
      features: ["Principal Protection", "Lifetime Income", "Growth Potential"]
    },
    {
      title: "Indexed Universal Life",
      description: "Death benefit protection plus portfolio diversification with the potential for tax-advantaged growth.",
      image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img3.jpg",
      icon: Shield,
      features: ["Death Benefit", "Tax Advantages", "Cash Value"]
    },
    {
      title: "Term Life Insurance",
      description: "Straightforward coverage for the years you need it most—protect temporary responsibilities with confidence.",
      image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img2.jpg",
      icon: Target,
      features: ["Affordable", "Flexible", "Temporary Coverage"]
    },
    {
      title: "Traditional IRA / Roth IRA",
      description: "Tax-deferred growth with Traditional IRAs or tax-free qualified withdrawals with Roth IRAs—plan an efficient retirement.",
      image: "https://wesecurefuture.com/wp-content/uploads/2024/12/2148793763.jpg",
      icon: Users,
      features: ["Tax Benefits", "Retirement Focus", "Long-term Growth"]
    },
    {
      title: "Whole Life Insurance",
      description: "Lifetime coverage with guaranteed benefits and cash value that can grow over time.",
      image: "https://wesecurefuture.com/wp-content/uploads/2024/12/2163.jpg",
      icon: Shield,
      features: ["Lifetime Coverage", "Cash Value", "Guaranteed Benefits"]
    },
    {
      title: "Will & Trust Services",
      description: "Establish your Will & Trust plus four other core estate documents to protect wishes and heirs.",
      image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img1.jpg",
      icon: Users,
      features: ["Estate Planning", "Asset Protection", "Legal Security"]
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden min-h-screen bg-white"> {/* Changed to white */}
      {/* Background Elements - Made more subtle for white background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00B0FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0050A0]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border shadow-sm mb-8" // Changed to white card
            style={{
              borderColor: borderColor,
            }}>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: primaryColor }}> {/* Changed to primary color */}
              Product Portfolio
            </span>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight text-gray-900"> {/* Changed to dark text */}
            Financial <span className="bg-gradient-to-r from-[#0050A0] to-[#00B0FF] bg-clip-text text-transparent">Products</span>
          </h2>

          <p className="text-md text-gray-700 max-w-2xl mx-auto"> {/* Changed to dark text */}
            Premium financial solutions designed to secure and grow your wealth.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden border-2 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" // Changed to white card
              style={{
                borderColor: borderColor,
              }}
            >
              <div className="flex flex-col md:flex-row h-full relative z-10">
                {/* Image Section */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <div className="h-48 md:h-full">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border shadow-sm" // Changed to white
                      style={{
                        borderColor: borderColor
                      }}>
                      <product.icon className="w-5 h-5" style={{ color: primaryColor }} /> {/* Changed to primary color */}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3 leading-tight text-gray-900"> {/* Changed to dark text */}
                      {product.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm mb-4"> {/* Changed to dark text */}
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 rounded-lg text-xs font-medium border"
                          style={{
                            borderColor: "rgba(0, 80, 160, 0.3)",
                            color: primaryColor,
                            backgroundColor: "rgba(0, 80, 160, 0.08)"
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Section */}
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: borderColor }}>
                    <button
                      onClick={openCalendly}
                      className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                      }}
                    >
                      Get Details
                      <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="text-right">
                      <span className="text-xs text-gray-500">Quick call • </span> {/* Changed to dark text */}
                      <span className="text-xs font-semibold" style={{ color: primaryColor }}>15m</span> {/* Changed to primary color */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Badge */}
              <button
                onClick={openCalendly}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg transition-all duration-300 hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                }}
                aria-label={`Start ${product.title}`}
              >
                Start
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 border-2 shadow-lg relative overflow-hidden" // Changed to white
            style={{
              borderColor: borderColor,
            }}>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900"> {/* Changed to dark text */}
                Ready to Explore Your Options?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto"> {/* Changed to dark text */}
                Book a complimentary consultation to discuss which financial products align with your goals.
              </p>
              <button
                onClick={openCalendly}
                className="group/btn flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                }}
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}