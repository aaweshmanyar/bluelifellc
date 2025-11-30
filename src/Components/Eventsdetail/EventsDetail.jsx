/** UPDATED: Fully responsive + Previous Events sidebar */
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FiCalendar,
  FiUser,
  FiExternalLink,
  FiVideo,
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiMapPin
} from "react-icons/fi";

export default function EventsDetailGlassVariant({ event = {}, previousEvents = [] }) {
  const demoCurrent = useMemo(
    () => ({
      title: "Retirement Planning Masterclass: Secure Your Financial Future",
      date: "2025-11-18T17:30:00+05:30",
      description:
        "A comprehensive session covering retirement strategies, tax optimization, and wealth preservation.",
      host: "Michael Reynolds - BlueLife Financial Solutions LLC Wealth Management",
      meetingLink: "https://calendly.com/gobluelifellc/30min",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop"
      ],
      location: "BlueLife Financial Solutions LLC Executive Center & Virtual",
      duration: "90 minutes",
      attendees: "45 confirmed",
      expertiseLevel: "Advanced",
      category: "Wealth Management"
    }),
    []
  );

  const demoPrevious = useMemo(
    () => [
      {
        id: 101,
        title: "Investment Strategies for Market Volatility",
        date: "2025-10-22T18:00:00+05:30",
        host: "BlueLife Financial Solutions LLC Investment Team",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
        recordingLink: "https://example.com/recording/investment-strategies"
      },
      {
        id: 102,
        title: "Estate Planning & Wealth Transfer",
        date: "2025-09-10T17:00:00+05:30",
        host: "BlueLife Financial Solutions LLC Legal Advisors",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
        recordingLink: "https://example.com/recording/estate-planning"
      }
    ],
    []
  );

  const model = { ...demoCurrent, ...event };
  const prevList =
    Array.isArray(previousEvents) && previousEvents.length
      ? previousEvents
      : demoPrevious;

  const displayDate = useMemo(() => formatDate(model.date), [model.date]);

  const brand = {
    primary: "#00B0FF",
    gradient: "linear-gradient(135deg, #0050A0 0%, #00B0FF 100%)",
    border: "rgba(0,176,255,0.15)",
    lightBg: "rgba(0,176,255,0.05)",
    textDark: "#003366",
    textLight: "#666"
  };

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [topOffset, setTopOffset] = useState(70);

  const lightboxRef = useRef(null);
  const heroRef = useRef(null);

  const images = model.gallery || [];
  const hasGallery = images.length > 0;

  // Dynamic navbar offset
  useEffect(() => {
    const navbar = document.getElementById("site-navbar");
    if (navbar) {
      const h = navbar.getBoundingClientRect().height;
      setTopOffset(h + 16);
    }
  }, []);

  // Parallax effect
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const pct = Math.min(
        Math.max(
          (window.innerHeight - rect.top) /
            (window.innerHeight + rect.height),
          0
        ),
        1
      );
      el.style.transform = `translateY(${(1 - pct) * 12}px)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => lightboxRef.current?.focus?.(), 0);
  };

  const close = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const next = () => setIdx((p) => (p + 1) % images.length);
  const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);

  return (
    <section
      className="w-full bg-white min-h-screen"
      style={{ paddingTop: topOffset }}
    >
      {/* HERO BANNER */}
      <div
        ref={heroRef}
        className="relative w-full mx-auto rounded-2xl overflow-hidden mb-8"
        style={{
          height: "min(55vh, 480px)"
        }}
      >
        <img
          src={model.thumbnailUrl}
          className="w-full h-full object-cover"
          alt={model.title || "Event banner"}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* FLOATING CARD */}
        <div className="absolute bottom-4 left-4 right-4 md:left-10 md:right-auto md:w-[50%]">
          <article
            className="bg-white/95 backdrop-blur-md border shadow-xl rounded-2xl p-5 md:p-6"
            style={{ borderColor: brand.border }}
          >
            <h1
              className="text-xl md:text-2xl font-bold"
              style={{ color: brand.textDark }}
            >
              {model.title}
            </h1>

            <div className="text-sm text-gray-600 mt-3 space-y-1">
              <div className="flex items-center gap-2">
                <FiCalendar className="text-blue-500" /> {displayDate}
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-blue-500" /> {model.location}
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              {model.meetingLink && (
                <button
                  onClick={() =>
                    window.open(model.meetingLink, "_blank", "noopener,noreferrer")
                  }
                  className="flex items-center gap-2 px-4 py-2 font-bold text-white rounded-xl text-sm"
                  style={{ background: brand.gradient }}
                >
                  <FiVideo /> Join Live
                </button>
              )}

              {hasGallery && (
                <button
                  onClick={() => openAt(0)}
                  className="p-3 rounded-xl border"
                  style={{ borderColor: brand.border, color: brand.primary }}
                  aria-label="View gallery"
                >
                  <FiImage />
                </button>
              )}
            </div>
          </article>
        </div>
      </div>

      {/* LAYOUT GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* MAIN */}
        <div className="lg:col-span-3 space-y-6">
          {/* ABOUT */}
          <div
            className="bg-white border p-6 rounded-2xl shadow-md"
            style={{ borderColor: brand.border }}
          >
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ color: brand.textDark }}
            >
              Event Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {model.description}
            </p>
          </div>

          {/* GALLERY */}
          <div>
            <h3
              className="text-lg font-bold mb-3"
              style={{ color: brand.textDark }}
            >
              Event Gallery
            </h3>

            {hasGallery ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => openAt(i)}
                    className="block aspect-[4/3] rounded-xl overflow-hidden border hover:scale-[1.02] transition"
                    style={{ borderColor: brand.border }}
                    aria-label={`Open image ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Event photo ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No images yet</p>
            )}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          {/* EVENT DETAILS CARD */}
          <div
            className="bg-white border p-5 rounded-2xl shadow-md sticky top-24"
            style={{ borderColor: brand.border }}
          >
            <h4
              className="font-bold text-lg mb-3"
              style={{ color: brand.textDark }}
            >
              Event Details
            </h4>

            <div className="space-y-3 text-sm">
              <Detail icon={<FiCalendar />} label="Date" value={displayDate} />
              <Detail icon={<FiMapPin />} label="Location" value={model.location} />
              <Detail icon={<FiClock />} label="Duration" value={model.duration} />
              <Detail icon={<FiUser />} label="Host" value={model.host} />
            </div>
          </div>

          {/* PREVIOUS EVENTS CARD */}
          {prevList && prevList.length > 0 && (
            <div
              className="bg-white border p-5 rounded-2xl shadow-md"
              style={{ borderColor: brand.border }}
            >
              <h5
                className="font-bold text-base mb-3"
                style={{ color: brand.textDark }}
              >
                Previous Events
              </h5>

              <div className="space-y-3">
                {prevList.slice(0, 3).map((p) => (
                  <button
                    key={p.id || p.title}
                    onClick={() =>
                      p.recordingLink &&
                      window.open(p.recordingLink, "_blank", "noopener,noreferrer")
                    }
                    className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition text-left"
                  >
                    <img
                      src={p.thumbnailUrl}
                      alt={p.title}
                      className="w-12 h-12 rounded-lg object-cover border"
                      style={{ borderColor: brand.border }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate">
                        {p.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatDate(p.date)}
                      </div>
                    </div>
                    <FiExternalLink className="text-gray-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* LIGHTBOX */}
      {open && hasGallery && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50"
          onClick={close}
        >
          <div
            ref={lightboxRef}
            className="relative max-w-4xl w-full outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[idx]}
              className="w-full max-h-[80vh] object-contain rounded-lg"
              alt={`Preview ${idx + 1}`}
            />

            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 bg-black/50 rounded-full"
                  onClick={prev}
                  aria-label="Previous image"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 bg-black/50 rounded-full"
                  onClick={next}
                  aria-label="Next image"
                >
                  <FiChevronRight size={24} />
                </button>
              </>
            )}

            <button
              className="absolute top-4 right-4 text-white p-3 bg-black/60 rounded-full"
              onClick={close}
              aria-label="Close preview"
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const Detail = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <span className="text-blue-500 mt-1">{icon}</span>
    <div>
      <div className="font-semibold text-gray-800 text-sm">{label}</div>
      <div className="text-gray-600 text-sm">{value}</div>
    </div>
  </div>
);

function formatDate(input) {
  try {
    const dt = new Date(input);
    if (Number.isNaN(dt.getTime())) return String(input || "Date TBA");
    return dt.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return String(input || "Date TBA");
  }
}
