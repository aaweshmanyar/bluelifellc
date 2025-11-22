import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, Mail, CheckCircle, Shield, Target, Clock, Building2, Award, MessageCircle, ArrowRight, Phone } from "lucide-react";
import faqimg from "../../assets/faqimg.jpg";

const commitmentsData = [
  {
    title: "Is it possible to engage a financial advisor if I don't have a substantial amount of disposable income?",
    content: "Yes, everyone can benefit from financial advising. We help you make confident financial decisions — regardless of your income level.",
  },
  {
    title: "Can you help make my investments more secure?",
    content: "We work with you to balance risk and reward, ensuring your investments support your long-term goals.",
  },
  {
    title: "Could you please review my portfolio?",
    content: "Regular portfolio reviews keep your financial direction aligned. We conduct a full Financial Needs Analysis for your entire portfolio.",
  },
  {
    title: "What kind of kids' education plans do you offer?",
    content: "We estimate future education costs and recommend personalized financial products to match your family's goals.",
  },
  {
    title: "Do you provide assistance with life insurance?",
    content: "Life insurance is essential for long-term family security, asset protection, and estate planning — and we guide you through it all.",
  },
];

export default function BlueLifeFAQMinimalist() {
  const [open, setOpen] = useState(null);
  const contentRefs = useRef({});

  useEffect(() => {
    Object.keys(contentRefs.current).forEach((k) => {
      const el = contentRefs.current[k];
      if (!el) return;
      if (Number(k) === open) {
        el.style.maxHeight = el.scrollHeight + "px";
      } else {
        el.style.maxHeight = "0px";
      }
    });
  }, [open]);

  return (
    <section id="faq" className="py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-5">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#0050A0] to-[#00B0FF] rounded-full"></div>
            <span className="font-medium text-gray-700 text-sm tracking-wide">
              FAQ & SUPPORT
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            <span className="block">Frequently Asked</span>
            <span className="bg-gradient-to-r from-[#0050A0] to-[#00B0FF] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Here’s what people commonly ask before working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - FAQ */}
          <div className="space-y-4">
            {commitmentsData.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex-1">
                      <h3 className={`font-semibold text-gray-900 mb-2 transition-colors text-base ${isOpen ? 'text-[#0050A0]' : 'group-hover:text-[#0050A0]'
                        }`}>
                        {item.title}
                      </h3>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 transform transition-all duration-300 flex-shrink-0 ml-4 ${isOpen
                        ? 'rotate-90 text-[#0050A0]'
                        : 'text-gray-400 group-hover:text-[#0050A0]'
                        }`}
                    />
                  </button>

                  <div
                    ref={(el) => (contentRefs.current[i] = el)}
                    className="overflow-hidden transition-max-height duration-300 ease-in-out"
                    style={{ maxHeight: 0 }}
                  >
                    <div className="pt-4">
                      <div className="w-full h-px bg-gray-200 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                <div className="text-xl font-bold text-[#0050A0]">1.2K+</div>
                <div className="text-xs text-gray-600">Clients</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                <div className="text-xl font-bold text-[#0050A0]">15+</div>
                <div className="text-xs text-gray-600">Years</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                <div className="text-xl font-bold text-[#0050A0]">98%</div>
                <div className="text-xs text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="space-y-8">
            {/* Main Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={faqimg}
                alt="Financial Advisory"
                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0050A0]/10 to-[#00B0FF]/5"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">Expert Financial Guidance</h3>
                  <p className="text-sm text-gray-600">Trusted by families worldwide</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0050A0] to-[#00B0FF] rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
                <p className="text-gray-600 text-sm">
                  Our team is here to help you with personalized financial advice
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:info@bluelife.llc"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#0050A0] hover:text-white group transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Email Support</span>
                  </div>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#00B0FF] hover:text-white group transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Call Now</span>
                  </div>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Trust Badge */}
            {/* <div className="bg-gradient-to-r from-[#0050A0] to-[#00B0FF] rounded-2xl p-6 text-white text-center">
              <Award className="w-8 h-8 mx-auto mb-3" />
              <div className="font-bold text-lg mb-1">Certified Experts</div>
              <div className="text-blue-100 text-sm">ISO 9001 Certified Financial Planners</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}