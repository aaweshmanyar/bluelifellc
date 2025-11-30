import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, Calendar, ShieldCheck, MapPin, Award, TrendingUp, Users, CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSectionGlassmorphism = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // BlueLife Financial Solutions LLC Color Scheme
  const darkBg = "#001833";
  const cardDark = "#002147";
  const primaryColor = "#0050A0";
  const secondaryColor = "#00B0FF";
  const accentColor = "#80D8FF";
  const textLight = "#E0F2FF";
  const textMuted = "#94a3b8";
  const borderColor = "#1e3a5f";

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters).";
    }
    const email = String(formData.email || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!emailOk) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message || formData.message.trim().length < 12) {
      newErrors.message = "Tell us a bit more (at least 12 characters).";
    }
    if (formData.company && formData.company.trim().length > 0) {
      newErrors.company = "Spam detected.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_o49f57q",
        "template_zueof2i",
        templateParams,
        "_NCXgVXdplNNFVAvR"
      )
      .then(
        (response) => {
          toast.success("🎉 Excellent! We'll contact you within 24 hours.");
          setFormData({ name: "", email: "", message: "", company: "" });
          setErrors({});
        },
        (error) => {
          console.error(error);
          toast.error("❌ Could not send your message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="relative overflow-hidden min-h-screen" style={{
      background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e8f4f8 100%)",
    }}>
      <ToastContainer position="top-right" autoClose={3000} theme="light" />

      {/* Animated background elements with glassmorphism */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse backdrop-blur-xl"
          style={{
            background: 'rgba(0, 176, 255, 0.08)',
            border: '1px solid rgba(0, 176, 255, 0.15)'
          }}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 backdrop-blur-xl"
          style={{
            background: 'rgba(0, 80, 160, 0.08)',
            border: '1px solid rgba(0, 80, 160, 0.15)'
          }}></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full animate-bounce backdrop-blur-xl"
          style={{
            background: 'rgba(128, 216, 255, 0.06)',
            border: '1px solid rgba(128, 216, 255, 0.12)',
            boxShadow: '0 8px 32px rgba(0, 176, 255, 0.1)'
          }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full animate-pulse delay-700 backdrop-blur-xl"
          style={{
            background: 'rgba(0, 176, 255, 0.06)',
            border: '1px solid rgba(0, 176, 255, 0.12)',
            boxShadow: '0 8px 32px rgba(0, 176, 255, 0.08)'
          }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 176, 255, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 176, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl mb-8 backdrop-blur-xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              border: `1px solid rgba(0, 176, 255, 0.3)`,
              boxShadow: '0 4px 16px rgba(0, 176, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
            }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: secondaryColor }}></div>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: primaryColor }}>
              BLUELIFE FINANCIAL SOLUTIONS LLC
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#1e293b' }}>
            Start Your{" "}
            <span className="bg-gradient-to-r from-[#0050A0] to-[#00B0FF] bg-clip-text text-transparent">
              Financial Journey
            </span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#475569' }}>
            Connect with our expert advisors for personalized financial solutions that secure your future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Contact Methods */}
          <div className="space-y-6">
            {/* Main Contact Card with Enhanced Glassmorphism */}
            <div className="rounded-3xl p-8 relative overflow-hidden backdrop-blur-2xl border transition-all duration-300 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)',
                borderColor: 'rgba(0, 176, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 176, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.5)'
              }}>

              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0050A0] via-[#00B0FF] to-[#80D8FF] rounded-t-3xl"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-xl border transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    borderColor: `rgba(0, 176, 255, 0.3)`,
                    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                  }}>
                  <Award className="w-8 h-8" style={{ color: secondaryColor }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#1e293b' }}>BlueLife Financial Solutions LLC</h3>
                  <p style={{ color: '#64748b' }}>Financial Security & Growth</p>
                </div>
              </div>

              {/* Contact Info with Glassmorphism */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    borderColor: `rgba(0, 176, 255, 0.2)`,
                    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                  }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm border"
                    style={{ 
                      background: 'rgba(0, 176, 255, 0.15)',
                      borderColor: 'rgba(0, 176, 255, 0.3)'
                    }}>
                    <Phone className="w-5 h-5" style={{ color: secondaryColor }} />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: '#1e293b' }}>916-467-9264</div>
                    <div style={{ color: '#64748b', fontSize: '0.875rem' }}>Mon-Fri: 6pm-9pm | Weekends: By appointment</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    borderColor: `rgba(0, 176, 255, 0.2)`,
                    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                  }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm border"
                    style={{ 
                      background: 'rgba(0, 176, 255, 0.15)',
                      borderColor: 'rgba(0, 176, 255, 0.3)'
                    }}>
                    <Mail className="w-5 h-5" style={{ color: secondaryColor }} />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: '#1e293b' }}>info@bluelife.llc</div>
                    <div style={{ color: '#64748b', fontSize: '0.875rem' }}>24-hour response</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    borderColor: `rgba(0, 176, 255, 0.2)`,
                    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                  }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm border"
                    style={{ 
                      background: 'rgba(0, 176, 255, 0.15)',
                      borderColor: 'rgba(0, 176, 255, 0.3)'
                    }}>
                    <MapPin className="w-5 h-5" style={{ color: secondaryColor }} />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: '#1e293b' }}>Cary, North Carolina (or NC)</div>
                    <div style={{ color: '#64748b', fontSize: '0.875rem' }}>Serving clients nationwide</div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    borderColor: `rgba(0, 176, 255, 0.2)`,
                    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                  }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm border"
                    style={{ 
                      background: 'rgba(0, 176, 255, 0.15)',
                      borderColor: 'rgba(0, 176, 255, 0.3)'
                    }}>
                    <Calendar className="w-5 h-5" style={{ color: secondaryColor }} />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: '#1e293b' }}>Business Hours</div>
                    <div style={{ color: '#64748b', fontSize: '0.875rem' }}>0700-2300 Hrs EST
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons with Glassmorphism */}
              <div className="space-y-4">
                <a
                  href="https://api.whatsapp.com/send?phone=18606340142&text=Hello!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                    color: '#ffffff',
                    boxShadow: '0 8px 24px rgba(0, 176, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  WhatsApp Consultation
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() =>
                    window.Calendly?.initPopupWidget?.({
                      url: "https://calendly.com/gobluelifellc/30min",
                    })
                  }
                  className="group w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold border transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg backdrop-blur-xl"
                  style={{
                    borderColor: secondaryColor,
                    color: secondaryColor,
                    background: 'rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Free Session
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Trust Metrics with Glassmorphism */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Users, value: "1.2K+", label: "Families", color: secondaryColor },
                { icon: TrendingUp, value: "15+", label: "Years Exp", color: secondaryColor },
                { icon: CheckCircle, value: "24h", label: "Response", color: secondaryColor }
              ].map((metric, index) => (
                <div key={index} className="text-center p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    borderColor: `rgba(0, 176, 255, 0.3)`,
                    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                  }}>
                  <metric.icon className="w-8 h-8 mx-auto mb-2" style={{ color: metric.color }} />
                  <div className="text-2xl font-bold" style={{ color: '#1e293b' }}>{metric.value}</div>
                  <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form with Enhanced Glassmorphism */}
          <div className="rounded-3xl p-8 relative overflow-hidden backdrop-blur-2xl border transition-all duration-300 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)',
              borderColor: `rgba(0, 176, 255, 0.3)`,
              boxShadow: '0 8px 32px rgba(0, 176, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.5)'
            }}>

            {/* Form Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-[#0050A0] to-[#00B0FF] rounded-full mx-auto mb-4"></div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#1e293b' }}>
                Personalized Financial Plan
              </h3>
              <p style={{ color: '#64748b' }}>
                Let us create a customized strategy for your financial future
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-3" style={{ color: '#1e293b' }}>
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className={`w-full p-4 rounded-xl outline-none transition-all duration-200 backdrop-blur-xl border ${errors.name
                    ? "border-2 border-red-500 bg-red-50"
                    : "border border-[rgba(0, 176, 255, 0.3)] bg-white/60 focus:border-[#00B0FF] focus:bg-white/80 focus:shadow-lg"
                    }`}
                  style={{ color: '#1e293b' }}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-3" style={{ color: '#1e293b' }}>
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className={`w-full p-4 rounded-xl outline-none transition-all duration-200 backdrop-blur-xl border ${errors.email
                    ? "border-2 border-red-500 bg-red-50"
                    : "border border-[rgba(0, 176, 255, 0.3)] bg-white/60 focus:border-[#00B0FF] focus:bg-white/80 focus:shadow-lg"
                    }`}
                  style={{ color: '#1e293b' }}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3" style={{ color: '#1e293b' }}>
                  Your Financial Goals *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your financial objectives, current situation, and what you'd like to achieve..."
                  rows="5"
                  className={`w-full p-4 rounded-xl outline-none resize-none transition-all duration-200 backdrop-blur-xl border ${errors.message
                    ? "border-2 border-red-500 bg-red-50"
                    : "border border-[rgba(0, 176, 255, 0.3)] bg-white/60 focus:border-[#00B0FF] focus:bg-white/80 focus:shadow-lg"
                    }`}
                  style={{ color: '#1e293b' }}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm ${isSubmitting
                  ? "bg-[#00B0FF]/50 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#0050A0] to-[#00B0FF] hover:shadow-2xl"
                  }`}
                style={{ 
                  color: '#ffffff',
                  boxShadow: isSubmitting ? 'none' : '0 8px 24px rgba(0, 176, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    Creating Your Financial Plan...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    Request Personalized Strategy
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </button>

              {/* Security Assurance with Glassmorphism */}
              <div className="flex items-center gap-3 p-4 rounded-xl backdrop-blur-xl border"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  borderColor: `rgba(0, 176, 255, 0.3)`,
                  boxShadow: '0 4px 16px rgba(0, 176, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }}>
                <ShieldCheck className="w-5 h-5 flex-shrink-0" style={{ color: secondaryColor }} />
                <p className="text-sm" style={{ color: '#64748b' }}>
                  <strong style={{ color: secondaryColor }}>100% Confidential:</strong> Your information is encrypted and protected.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer with Glassmorphism */}
        <div className="mt-16 text-center">
          <div className="mt-12 pt-8 border-t backdrop-blur-xl rounded-2xl p-6"
            style={{ 
              borderColor: 'rgba(0, 176, 255, 0.3)',
              background: 'rgba(255, 255, 255, 0.4)',
              boxShadow: '0 4px 16px rgba(0, 176, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
            }}>
            <div className="text-2xl font-bold mb-2" style={{ color: '#1e293b' }}>BlueLife Financial Solutions LLC</div>
            <p className="mb-4" style={{ color: '#64748b' }}>Financial Security • Investment Growth • Retirement Planning</p>
            <div className="text-sm" style={{ color: '#64748b' }}>
              © {new Date().getFullYear()} BlueLife Financial Solutions LLC. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionGlassmorphism;