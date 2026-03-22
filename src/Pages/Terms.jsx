import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import ContactSection from '../Components/Contactus/Contactus';
import {
  FileText,
  MessageSquare,
  CheckCircle,
  Hash,
  DollarSign,
  XCircle,
  HelpCircle,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const sections = [
  {
    number: '01',
    title: 'SMS Program Description',
    icon: MessageSquare,
    content:
      'BlueLife Financial Solutions LLC operates an SMS messaging program to send event invitations, financial literacy workshop reminders, and appointment follow-ups to consenting subscribers.',
  },
  {
    number: '02',
    title: 'Opt-In',
    icon: CheckCircle,
    content:
      'You opt in to this program by submitting our web form at go.bluelife.llc and checking the SMS consent checkbox. Consent is not a condition of any purchase or service.',
  },
  {
    number: '03',
    title: 'Message Frequency',
    icon: Hash,
    content:
      'Message frequency varies. You may receive up to 4 messages per month depending on scheduled events and appointments.',
  },
  {
    number: '04',
    title: 'Message & Data Rates',
    icon: DollarSign,
    content:
      'Standard message and data rates may apply depending on your mobile carrier and plan.',
  },
  {
    number: '05',
    title: 'Opt-Out Instructions',
    icon: XCircle,
    content:
      'Reply STOP at any time to unsubscribe. You will receive a one-time confirmation and no further messages will be sent.',
  },
  {
    number: '06',
    title: 'Help',
    icon: HelpCircle,
    content:
      'Reply HELP for assistance or contact us at info@bluelife.llc or 860-634-0142.',
  },
];

const Terms = () => {
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
            <FileText className="w-4 h-4" style={{ color: secondaryColor }} />
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: primaryColor }}
            >
              Legal
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#1e293b' }}>
            Terms &{' '}
            <span className="bg-gradient-to-r from-[#0050A0] to-[#00B0FF] bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#475569' }}>
            BlueLife Financial Solutions LLC — Please review our terms regarding SMS communications and services.
          </p>

          <p className="mt-6 text-sm font-medium" style={{ color: '#94a3b8' }}>
            Last Updated: March 2026
          </p>
        </div>
      </section>

      {/* Terms Sections */}
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

          {/* Contact Section */}
          <div
            className="rounded-2xl p-6 md:p-8 backdrop-blur-2xl border transition-all duration-300 hover:shadow-2xl"
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
                <MapPin className="w-6 h-6" style={{ color: secondaryColor }} />
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
                    07
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold" style={{ color: '#1e293b' }}>
                    Contact
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
                  <div className="flex items-center gap-2" style={{ color: '#475569' }}>
                    <Phone className="w-4 h-4 flex-shrink-0" style={{ color: secondaryColor }} />
                    <a
                      href="tel:8606340142"
                      className="text-base hover:underline"
                      style={{ color: secondaryColor }}
                    >
                      860-634-0142
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

export default Terms;
