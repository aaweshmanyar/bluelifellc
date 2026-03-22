import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import ContactSection from '../Components/Contactus/Contactus';
import { ShieldCheck, Mail, MapPin, MessageSquare, UserX, Phone } from 'lucide-react';

const sections = [
  {
    number: '01',
    title: 'Information We Collect',
    icon: UserX,
    content:
      'We collect personal information you provide when filling out our web forms, including your name, phone number, and email address.',
  },
  {
    number: '02',
    title: 'SMS Communications',
    icon: MessageSquare,
    content:
      'By opting in to receive SMS messages, you agree to receive text messages from BlueLife Financial Solutions LLC. These messages may include event reminders, workshop invitations, and appointment follow-ups. Message frequency varies. Message and data rates may apply.',
  },
  {
    number: '03',
    title: 'How to Opt Out',
    icon: Phone,
    content:
      'You may opt out of SMS communications at any time by replying STOP to any message. You may also contact us at info@bluelife.llc to request removal.',
  },
  {
    number: '04',
    title: 'Data Sharing',
    icon: ShieldCheck,
    content:
      'We do not sell, rent, or share your personal information with third parties for their marketing purposes. We will never share your opt-in data with third parties.',
  },
];

const PrivacyPolicy = () => {
  const primaryColor = '#0050A0';
  const secondaryColor = '#00B0FF';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          background:
            'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e8f4f8 100%)',
        }}
      >
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-72 h-72 rounded-full blur-3xl animate-pulse"
            style={{ background: 'rgba(0, 176, 255, 0.08)' }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ background: 'rgba(0, 80, 160, 0.08)' }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl mb-8 backdrop-blur-xl"
            style={{
              background: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(0,176,255,0.3)',
              boxShadow:
                '0 4px 16px rgba(0,176,255,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
            }}
          >
            <ShieldCheck className="w-4 h-4" style={{ color: secondaryColor }} />
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: primaryColor }}
            >
              Legal
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#1e293b' }}>
            Privacy{' '}
            <span className="bg-gradient-to-r from-[#0050A0] to-[#00B0FF] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#475569' }}>
            BlueLife Financial Solutions LLC — Your privacy and data security are our top priority.
          </p>

          <p className="mt-6 text-sm font-medium" style={{ color: '#94a3b8' }}>
            Last Updated: March 2026
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section
        className="relative py-16 md:py-24"
        style={{
          background:
            'linear-gradient(180deg, #f8fafc 0%, #ffffff 40%, #f8fafc 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {sections.map((s) => (
            <div
              key={s.number}
              className="rounded-2xl p-6 md:p-8 backdrop-blur-2xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)',
                borderColor: 'rgba(0,176,255,0.25)',
                boxShadow:
                  '0 8px 32px rgba(0,176,255,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-xl border"
                  style={{
                    background: 'rgba(0,176,255,0.12)',
                    borderColor: 'rgba(0,176,255,0.3)',
                    boxShadow: '0 4px 16px rgba(0,176,255,0.15)',
                  }}
                >
                  <s.icon className="w-6 h-6" style={{ color: secondaryColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                        color: '#fff',
                      }}
                    >
                      {s.number}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold" style={{ color: '#1e293b' }}>
                      {s.title}
                    </h2>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: '#475569' }}>
                    {s.content}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Contact Us Section */}
          <div
            className="rounded-2xl p-6 md:p-8 backdrop-blur-2xl border text-center transition-all duration-300 hover:shadow-2xl"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)',
              borderColor: 'rgba(0,176,255,0.25)',
              boxShadow:
                '0 8px 32px rgba(0,176,255,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
            }}
          >
            <div className="flex items-start gap-5">
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-xl border"
                style={{
                  background: 'rgba(0,176,255,0.12)',
                  borderColor: 'rgba(0,176,255,0.3)',
                  boxShadow: '0 4px 16px rgba(0,176,255,0.15)',
                }}
              >
                <Mail className="w-6 h-6" style={{ color: secondaryColor }} />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                      color: '#fff',
                    }}
                  >
                    05
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold" style={{ color: '#1e293b' }}>
                    Contact Us
                  </h2>
                </div>
                <div className="space-y-2">
                  <p className="text-base md:text-lg font-semibold" style={{ color: '#1e293b' }}>
                    BlueLife Financial Solutions LLC
                  </p>
                  <div className="flex items-center gap-2" style={{ color: '#475569' }}>
                    <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: secondaryColor }} />
                    <span className="text-base">
                      4030 Wake Forest Road, Suite 349, Raleigh, NC 27609
                    </span>
                  </div>
                  <div className="flex items-center gap-2" style={{ color: '#475569' }}>
                    <Mail className="w-4 h-4 flex-shrink-0" style={{ color: secondaryColor }} />
                    <a
                      href="mailto:info@bluelife.llc"
                      className="text-base hover:underline"
                      style={{ color: secondaryColor }}
                    >
                      info@bluelife.llc
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default PrivacyPolicy;
