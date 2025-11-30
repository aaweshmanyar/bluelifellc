import React from "react";
import {
  ShieldCheck,
  Briefcase,
  Target,
  Lightbulb,
  Users,
  BarChart3,
  ArrowRight,
  Calendar,
  Award,
  Star,
  TrendingUp,
  HeartHandshake,
  Clock,
  CheckCircle,
  Zap
} from "lucide-react";

export default function BlueLifeModernCards() {
  const solutions = [
    {
      category: "Wealth Planning",
      title: "We Help You Plan For Future Needs",
      description: "Enjoy today while preparing for tomorrow. Gain clarity on your finances and build a roadmap toward a secure future.",
      Icon: Target,
      color: "from-blue-600 to-cyan-500",
      features: ["Retirement Planning", "Tax Efficiency", "Legacy Building"]
    },
    {
      category: "Investment Strategy",
      title: "Educate People On Securing Their Future",
      description: "We break down financial concepts into simple, actionable insights so you can make informed wealth decisions.",
      Icon: TrendingUp,
      color: "from-green-600 to-emerald-500",
      features: ["Diversified Portfolios", "Risk Management", "Market Insights"]
    },
    {
      category: "Asset Protection",
      title: "Protect Your Assets & Loved Ones",
      description: "Minimize taxes, reduce risks, and create protections that secure your assets for the next generation.",
      Icon: ShieldCheck,
      color: "from-purple-600 to-indigo-500",
      features: ["Insurance Solutions", "Legal Structures", "Wealth Transfer"]
    },
    {
      category: "Income Optimization",
      title: "Build & Diversify Your Income",
      description: "Explore structured and strategic income streams tailored to your goals and lifestyle aspirations.",
      Icon: Zap,
      color: "from-orange-600 to-red-500",
      features: ["Passive Income", "Business Growth", "Revenue Streams"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Trusted Advisors",
      description: "Decades of experience guiding individuals and families with honesty and precision.",
      Icon: Users
    },
    {
      step: "02",
      title: "Tailored Solutions",
      description: "Every plan is built uniquely around your long-term personal goals.",
      Icon: Target
    },
    {
      step: "03",
      title: "Data-Driven Approach",
      description: "We look at real numbers, real projections, and real-life variables.",
      Icon: CheckCircle
    },
    {
      step: "04",
      title: "Transparent Guidance",
      description: "No hidden agendas—just clear, actionable, and trustworthy advice.",
      Icon: BarChart3
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Geometric Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0050A0]/5 to-[#00B0FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#80D8FF]/10 to-[#00B0FF]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="pt-10 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {/* Logo Badge */}
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-gray-200 mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#0050A0] to-[#00B0FF] rounded-full animate-pulse"></div>
                  <span className="font-bold text-gray-900 text-sm tracking-wider">
                    BlueLife Financial Solutions LLC
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                <span className="block">Empowering You With</span>
                <span className="bg-gradient-to-r from-[#0050A0] via-[#00B0FF] to-[#80D8FF] bg-clip-text text-transparent">
                  Clarity, Confidence,
                </span>
                <span className="block">and a Strong Financial Path Forward.</span>
              </h1>

              <p className="max-w-2xl mx-auto text-md text-gray-600 mb-8 leading-relaxed">
                We simplify your path to financial security through strategic planning, smart protection, and guided wealth-building.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <button className="group bg-gradient-to-r from-[#0050A0] to-[#00B0FF] text-white font-bold px-10 py-4 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <span className="flex items-center gap-3">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group border-2 border-gray-300 text-gray-700 font-bold px-10 py-4 rounded-2xl hover:border-[#0050A0] hover:text-[#0050A0] transition-all duration-300">
                  View Our Services
                </button>
              </div>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-24">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-start flex-col gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <solution.Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-3">
                        {solution.category}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      {/* <div className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-gray-600">
                            <div className="w-2 h-2 bg-[#00B0FF] rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="text-center mb-24">
              <div className="bg-gradient-to-r from-[#0050A0] to-[#00B0FF] rounded-3xl p-5 text-white shadow-2xl">
                <h2 className="text-4xl font-bold mb-6">
                  Let’s Analyze Your Financial Game Plan
                </h2>
                <p className="text-md text-[#E0F2FF] mb-5 max-w-2xl mx-auto">
                  Get a personalized evaluation of your financial strategy — and unlock insights that bring long-term clarity.
                </p>
                <button className="bg-white text-[#0050A0] font-bold px-12 py-4 rounded-2xl hover:bg-[#E0F2FF] hover:scale-105 transition-all duration-300 shadow-2xl">
                  <span className="flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    Book Free Strategy Session
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </div>
            </div>

            {/* Process Section */}
            


          </div>
        </div>
      </div>
    </main>
  );
}