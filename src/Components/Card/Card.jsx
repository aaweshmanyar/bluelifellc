import React, { useState } from "react";
import { Calendar, ArrowRight, Shield, Users, TrendingUp, Target, Lightbulb, HeartHandshake, Sparkles, CheckCircle2, Star, Zap, Building2, Award, Clock, Play, Download, ChevronRight, ArrowUpRight } from "lucide-react";

export default function BlueLifeVisualStorytelling() {
  const [activeService, setActiveService] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  const services = [
    {
      title: "Expertise",
      description: "Over ten years of experience. Clear insights, strategic roadmaps, and ongoing reviews that keep your goals on track.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Strategic Planning", "Performance Reviews", "Clear Roadmaps"],
      icon: Award,
      stat: "15+ Years",
      gradient: "from-blue-600 to-cyan-500",
      overlayText: "Expert Guidance"
    },
    {
      title: "Discretion",
      description: "Your privacy matters. We handle sensitive information with full confidentiality and secure data processes.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Advanced Security", "Full Confidentiality", "Data Protection"],
      icon: Shield,
      stat: "100% Secure",
      gradient: "from-purple-600 to-indigo-500",
      overlayText: "Total Privacy"
    },
    {
      title: "Dependability",
      description: "Consistent support, transparent updates, and a results-driven approach to your long-term well-being.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["24/7 Support", "Transparent Updates", "Proven Results"],
      icon: Clock,
      stat: "Always Available",
      gradient: "from-green-600 to-emerald-500",
      overlayText: "Always There"
    },
    {
      title: "Consulting",
      description: "Cut through complexity. Focused strategy sessions that help you clarify goals and close financial gaps.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Strategy Sessions", "Goal Clarification", "Gap Analysis"],
      icon: Target,
      stat: "500+ Clients",
      gradient: "from-orange-600 to-red-500",
      overlayText: "Smart Strategy"
    },
    {
      title: "Sales",
      description: "Curated financial solutions that prioritize suitability, cost-efficiency, and long-term value.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Tailored Products", "Cost Efficiency", "Long-term Value"],
      icon: TrendingUp,
      stat: "₹500Cr+",
      gradient: "from-pink-600 to-rose-500",
      overlayText: "Growth Focused"
    },
    {
      title: "Partnership",
      description: "If our philosophy aligns, we grow together—built on trust, shared standards, and mutual integrity.",
      image: "https://images.unsplash.com/photo-1551836026-d5c8cbf7e65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Collaborative Approach", "Shared Standards", "Mutual Growth"],
      icon: Building2,
      stat: "98% Satisfaction",
      gradient: "from-teal-600 to-cyan-500",
      overlayText: "True Partnership"
    }
  ];

  const successStories = [
    {
      image: "https://images.unsplash.com/photo-1563013541-31487ef7d6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Wealth Growth",
      description: "250% portfolio growth over 5 years"
    },
    {
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Retirement Planning",
      description: "Secure retirement for 1000+ families"
    },
    {
      image: "https://images.unsplash.com/photo-1551836026-d5c8cbf7e65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Business Success",
      description: "Helped 200+ businesses thrive"
    }
  ];

  const openCalendly = () => {
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/gobluelifellc/30min"
      });
    } else {
      window.open("https://calendly.com/gobluelifellc/30min", "_blank");
    }
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0050A0]/10 to-[#00B0FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#80D8FF]/15 to-[#00B0FF]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Hero Section with Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#00B0FF]/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-[#0050A0] to-[#00B0FF] rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-700 text-sm tracking-wide">
                BLUELIFE FINANCIAL PARTNERS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              <span className="block">Visualizing Your</span>
              <span className="bg-gradient-to-r from-[#0050A0] to-[#00B0FF] bg-clip-text text-transparent">
                Financial Success
              </span>
            </h1>

            <p className="text-md text-gray-600 leading-relaxed mb-5 max-w-lg">
              Expertise you can trust — delivered with clarity, transparency, and long-term vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0050A0] to-[#00B0FF] text-white rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 rounded-2xl font-semibold border border-gray-200 hover:border-[#00B0FF] hover:shadow-lg transition-all duration-300">
                <Play className="w-5 h-5 text-[#0050A0]" />
                Watch Story
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Financial Planning"
                className="w-full h-96 object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0050A0]/20 to-transparent"></div>

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { number: "15+", label: "Years" },
                      { number: "10K+", label: "Clients" },
                      { number: "98%", label: "Success" }
                    ].map((stat, index) => (
                      <div key={index}>
                        <div className="text-lg font-bold text-[#0050A0]">{stat.number}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00B0FF] to-[#80D8FF] rounded-2xl rotate-12 opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#0050A0] to-[#00B0FF] rounded-2xl -rotate-12 opacity-20"></div>
          </div>
        </div>

        {/* Services Grid with Enhanced Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 z-10`}></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 ${imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/0050A0/white?text=${service.title}`;
                    handleImageLoad(index);
                  }}
                />

                {/* Loading Skeleton */}
                {!imageLoaded[index] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
                )}

                {/* Overlay Text */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                    <span className="text-white text-sm font-medium tracking-wide">
                      {service.overlayText}
                    </span>
                  </div>
                </div>

                {/* Stat Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                    <span className="text-sm font-bold bg-gradient-to-r from-[#0050A0] to-[#00B0FF] bg-clip-text text-transparent">
                      {service.stat}
                    </span>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-4 h-4 text-[#0050A0]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#0050A0] to-[#00B0FF] rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={openCalendly}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 bg-gradient-to-r from-[#0050A0] to-[#00B0FF] hover:from-[#00B0FF] hover:to-[#80D8FF] hover:shadow-lg group/btn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Explore Service</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        {/* <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success <span className="text-[#0050A0]">Stories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from clients who trusted BlueLife with their financial future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="group text-center">
                <div className="relative rounded-2xl overflow-hidden mb-4 shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0050A0]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-[#0050A0]">View Case Study</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm">{story.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Final CTA with Background Image */}
        {/* <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Start Your Journey"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0050A0]/90 to-[#00B0FF]/80"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h3 className="text-3xl font-bold mb-4">Ready to See Your Success Story?</h3>
              <p className="text-blue-100 mb-6 max-w-md mx-auto">
                Join thousands of satisfied clients who achieved their financial dreams with BlueLife
              </p>
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0050A0] rounded-2xl font-bold hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <Calendar className="w-5 h-5" />
                Start Your Success Story
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div> */}

        {/* Trust Badges */}
        {/* <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 items-center max-w-2xl mx-auto">
            {[
              "Certified Financial Planners",
              "ISO 9001 Certified",
              "15+ Years Experience",
              "10,000+ Success Stories"
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-gradient-to-r from-[#0050A0] to-[#00B0FF] rounded-full"></div>
                {badge}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}