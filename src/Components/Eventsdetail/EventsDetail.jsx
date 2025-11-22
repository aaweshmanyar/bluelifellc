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
  FiMapPin,
  FiShare2,
  FiDownload,
  FiUsers,
  FiAward
} from "react-icons/fi";

export default function EventsDetailGlassVariant({ event = {}, previousEvents = [] }) {
  const demoCurrent = useMemo(
    () => ({
      title: "Retirement Planning Masterclass: Secure Your Financial Future",
      date: "2025-11-18T17:30:00+05:30",
      description:
        "A comprehensive session covering retirement strategies, tax optimization, and wealth preservation. Learn how to build a secure financial future with expert guidance from BlueLife LLC.",
      host: "Michael Reynolds - BlueLife Wealth Management",
      meetingLink: "https://calendly.com/gobluelifellc/30min",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529336953121-a9d1b95a0df1?q=80&w=1400&auto=format&fit=crop",
      ],
      location: "BlueLife Executive Center & Virtual",
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
        host: "BlueLife Investment Team",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
        recordingLink: "https://example.com/recording/investment-strategies",
      },
      {
        id: 102,
        title: "Estate Planning & Wealth Transfer",
        date: "2025-09-10T17:00:00+05:30",
        host: "BlueLife Legal Advisors",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
        recordingLink: "https://example.com/recording/estate-planning",
      },
    ],
    []
  );

  const model = { ...demoCurrent, ...event };
  const prevList = Array.isArray(previousEvents) && previousEvents.length ? previousEvents : demoPrevious;

  const displayDate = useMemo(() => formatDate(model.date), [model.date]);

  // BlueLife LLC Brand Colors - Updated for white background
  const brandColors = {
    primary: "#00B0FF",
    primaryHover: "#80D8FF",
    gradient: "linear-gradient(135deg, #0050A0 0%, #00B0FF 100%)",
    lightBg: "#ffffff",
    cardBg: "#ffffff",
    textDark: "#003366",
    textLight: "#666666",
    accentBorder: "rgba(0, 176, 255, 0.15)",
    accentBg: "rgba(0, 176, 255, 0.05)",
    glass: "rgba(255, 255, 255, 0.8)"
  };

  // State management
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [topOffset, setTopOffset] = useState(null);

  // Refs
  const lightboxRef = useRef(null);
  const heroRef = useRef(null);

  const images = model.gallery || [];
  const hasGallery = images && images.length > 0;

  // Dynamic navbar offset calculation
  useEffect(() => {
    function computeOffset() {
      const defaultMobile = 64;
      const defaultDesktop = 96;

      const byId = document.getElementById("site-navbar");
      const byAttr = document.querySelector("[data-fixed-navbar='true']");
      const navbarEl = byId || byAttr;

      if (navbarEl) {
        const rect = navbarEl.getBoundingClientRect();
        const style = window.getComputedStyle(navbarEl);
        const isAtTop = Math.abs(rect.top) < 4 || style.position === "fixed" || style.position === "sticky";
        if (isAtTop) {
          const height = Math.ceil(rect.height);
          setTopOffset(height + 12);
          return;
        }
      }

      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      setTopOffset(vw < 768 ? defaultMobile : defaultDesktop);
    }

    computeOffset();

    let resizeTimeout = null;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(computeOffset, 80);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const pct = Math.min(
        Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0),
        1
      );
      const translate = (1 - pct) * 8;
      el.style.transform = `translateY(${translate}px)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lightbox functions
  const openAt = (i) => {
    if (!Array.isArray(images) || images.length === 0) return;
    setIdx(i);
    setOpen(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => lightboxRef.current?.focus?.(), 0);
  };

  const next = () => {
    setIdx((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const closeLightbox = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (!open) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, images.length]);

  // Action handlers
  const joinMeeting = () => {
    if (!model.meetingLink) return;
    window.open(model.meetingLink, "_blank", "noopener,noreferrer");
  };

  const shareEvent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: model.title,
          text: model.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Event link copied to clipboard!');
      });
    }
  };

  const downloadMaterials = () => {
    // Simulate download functionality
    alert('Download functionality would be implemented here');
  };

  const safeTop = topOffset ?? 64;

  return (
    <section
      className="w-full mb-8 min-h-screen bg-white"
      style={{
        paddingTop: `${safeTop}px`
      }}
    >
      {/* HERO SECTION */}
      <div
        ref={heroRef}
        className="relative h-64 md:h-[44vw] max-h-[560px] w-full overflow-hidden rounded-2xl mx-4 md:mx-6 transition-transform duration-300"
        aria-hidden="false"
      >
        <img
          src={model.thumbnailUrl}
          alt={model.title || "Event hero"}
          className="w-full h-full object-cover transition-transform duration-700 will-change-transform"
          loading="lazy"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-cyan-900/10" />

        {/* Floating Card */}
        <div className="absolute  left-4 right-4 bottom-4 md:left-12 md:right-auto md:bottom-12 md:w-[48%]">
          <article
            className="rounded-2xl bg-white/95 backdrop-blur-sm px-6 py-5 shadow-2xl border"
            style={{
              borderColor: brandColors.accentBorder
            }}
            aria-label={`Event info for ${model.title}`}
            role="region"
          >
            {/* Event Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#0050A0] to-[#00B0FF] text-white text-xs font-semibold">
                <span>BLUE LIFE EXCLUSIVE</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600 text-xs">
                <FiClock className="w-3 h-3" />
                <span>{model.duration}</span>
              </div>
            </div>

            <h1 className="text-xl md:text-2xl font-black leading-tight mb-3"
              style={{ color: brandColors.textDark }}>
              {model.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-4 h-4" style={{ color: brandColors.primary }} />
                <span>{displayDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiMapPin className="w-4 h-4" style={{ color: brandColors.primary }} />
                <span>{model.location}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {model.host} • {model.attendees}
            </p>

            <div className="flex items-center gap-3">
              {model.meetingLink ? (
                <button
                  onClick={joinMeeting}
                  className="px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
                  style={{ background: brandColors.gradient }}
                >
                  <FiVideo className="w-4 h-4" />
                  Join Live Session
                </button>
              ) : (
                <button
                  className="px-6 py-3 rounded-xl font-bold border transition-all duration-300 hover:shadow-lg"
                  style={{
                    borderColor: brandColors.primary,
                    color: brandColors.primary,
                    background: brandColors.accentBg
                  }}
                >
                  Request Invitation
                </button>
              )}

              {hasGallery && (
                <button
                  onClick={() => openAt(0)}
                  className="p-3 rounded-xl border transition-all duration-300 hover:scale-105 hover:bg-blue-50"
                  style={{
                    borderColor: brandColors.accentBorder,
                    color: brandColors.primary
                  }}
                  aria-label="View gallery"
                >
                  <FiImage className="w-4 h-4" />
                </button>
              )}
            </div>
          </article>
        </div>
      </div>

      {/* CONTENT + GALLERY */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* About Section */}
            <section className="rounded-2xl bg-white border p-6 shadow-lg"
              style={{
                borderColor: brandColors.accentBorder
              }}>
              <header className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: brandColors.gradient }}>
                  <FiDownload className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1" style={{ color: brandColors.textDark }}>Event Overview</h2>
                  <p className="text-gray-600 text-sm">Comprehensive session details and materials</p>
                </div>
              </header>

              <div className="prose max-w-none">
                {looksLikeHtml(model.description) ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: safeHTML(model.description) }}
                    className="text-gray-700 leading-relaxed"
                  />
                ) : (
                  <p className="text-gray-700 leading-relaxed">{model.description}</p>
                )}
              </div>

              {/* Key Takeaways */}
              <div className="mt-6 p-4 rounded-xl border"
                style={{
                  background: brandColors.accentBg,
                  borderColor: brandColors.accentBorder
                }}>
                <h4 className="font-semibold mb-3" style={{ color: brandColors.textDark }}>Key Takeaways</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: brandColors.primary }}></div>
                    Retirement planning strategies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: brandColors.primary }}></div>
                    Tax optimization techniques
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: brandColors.primary }}></div>
                    Wealth preservation methods
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: brandColors.primary }}></div>
                    Investment portfolio optimization
                  </li>
                </ul>
              </div>

              {/* Additional Actions */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={downloadMaterials}
                  className="px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 text-sm font-medium flex items-center gap-2"
                  style={{
                    borderColor: brandColors.accentBorder,
                    color: brandColors.primary
                  }}
                >
                  <FiDownload className="w-4 h-4" />
                  Download Materials
                </button>

                <button
                  onClick={shareEvent}
                  className="px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 text-sm font-medium flex items-center gap-2"
                  style={{
                    borderColor: brandColors.accentBorder,
                    color: brandColors.primary
                  }}
                >
                  <FiShare2 className="w-4 h-4" />
                  Share Event
                </button>
              </div>
            </section>

            {/* Gallery Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: brandColors.textDark }}>Event Gallery</h3>
                  {hasGallery && <p className="text-gray-600 text-sm">{images.length} professional photos</p>}
                </div>
                {hasGallery && (
                  <button
                    onClick={() => openAt(0)}
                    className="px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 text-sm font-semibold"
                    style={{
                      borderColor: brandColors.accentBorder,
                      color: brandColors.primary
                    }}
                  >
                    View All
                  </button>
                )}
              </div>

              {hasGallery ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.slice(0, 6).map((src, i) => (
                    <button
                      key={i}
                      onClick={() => openAt(i)}
                      className="group relative overflow-hidden rounded-xl border transition-all duration-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{ borderColor: brandColors.accentBorder }}
                      aria-label={`Open image ${i + 1} of ${images.length}`}
                    >
                      <div className="aspect-[4/3]">
                        <img
                          src={src}
                          alt={`Event photo ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 px-2 py-1 rounded text-xs font-semibold text-white bg-black/60">
                        #{i + 1}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed p-8 text-center"
                  style={{
                    borderColor: brandColors.accentBorder,
                    color: brandColors.textLight
                  }}>
                  <FiImage className="w-12 h-12 mx-auto mb-3 opacity-40" style={{ color: brandColors.primary }} />
                  <p>Gallery coming soon after the event</p>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Event Details Card */}
            <div className="rounded-2xl bg-white border p-5 shadow-lg sticky top-6"
              style={{
                borderColor: brandColors.accentBorder
              }}>
              <h4 className="font-bold mb-4 text-lg" style={{ color: brandColors.textDark }}>Event Details</h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiCalendar className="w-5 h-5 mt-0.5" style={{ color: brandColors.primary }} />
                  <div>
                    <div className="font-semibold text-sm" style={{ color: brandColors.textDark }}>Date & Time</div>
                    <div className="text-gray-600 text-sm">{displayDate}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 mt-0.5" style={{ color: brandColors.primary }} />
                  <div>
                    <div className="font-semibold text-sm" style={{ color: brandColors.textDark }}>Location</div>
                    <div className="text-gray-600 text-sm">{model.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiClock className="w-5 h-5 mt-0.5" style={{ color: brandColors.primary }} />
                  <div>
                    <div className="font-semibold text-sm" style={{ color: brandColors.textDark }}>Duration</div>
                    <div className="text-gray-600 text-sm">{model.duration}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiUser className="w-5 h-5 mt-0.5" style={{ color: brandColors.primary }} />
                  <div>
                    <div className="font-semibold text-sm" style={{ color: brandColors.textDark }}>Host</div>
                    <div className="text-gray-600 text-sm">{model.host}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiUsers className="w-5 h-5 mt-0.5" style={{ color: brandColors.primary }} />
                  <div>
                    <div className="font-semibold text-sm" style={{ color: brandColors.textDark }}>Attendees</div>
                    <div className="text-gray-600 text-sm">{model.attendees}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiAward className="w-5 h-5 mt-0.5" style={{ color: brandColors.primary }} />
                  <div>
                    <div className="font-semibold text-sm" style={{ color: brandColors.textDark }}>Expertise Level</div>
                    <div className="text-gray-600 text-sm">{model.expertiseLevel}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {model.meetingLink ? (
                  <button
                    onClick={joinMeeting}
                    className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                    style={{ background: brandColors.gradient }}
                  >
                    <FiVideo className="w-4 h-4" />
                    Join Meeting
                  </button>
                ) : (
                  <button
                    className="w-full py-3 rounded-xl font-bold border transition-all duration-300 hover:shadow-lg text-center"
                    style={{
                      borderColor: brandColors.primary,
                      color: brandColors.primary,
                      background: brandColors.accentBg
                    }}
                  >
                    Contact for Details
                  </button>
                )}

                <button
                  onClick={shareEvent}
                  className="w-full py-2 rounded-xl border transition-all duration-300 hover:bg-blue-50 flex items-center justify-center gap-2 text-sm"
                  style={{
                    borderColor: brandColors.accentBorder,
                    color: brandColors.primary
                  }}>
                  <FiShare2 className="w-4 h-4" />
                  Share Event
                </button>
              </div>
            </div>

            {/* Previous Events */}
            <div className="rounded-2xl bg-white border p-4 shadow-lg"
              style={{
                borderColor: brandColors.accentBorder
              }}>
              <h5 className="font-semibold mb-3" style={{ color: brandColors.textDark }}>Previous Events</h5>
              <div className="space-y-3">
                {prevList.slice(0, 3).map((p) => (
                  <button
                    key={p.id || p.title}
                    onClick={() => window.open(p.recordingLink, '_blank')}
                    className="w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 group focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <img
                      src={p.thumbnailUrl}
                      alt={p.title}
                      className="w-12 h-12 object-cover rounded-lg border"
                      style={{ borderColor: brandColors.accentBorder }}
                    />
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium group-hover:text-blue-600 transition-colors line-clamp-2"
                        style={{ color: brandColors.textDark }}>
                        {p.title}
                      </div>
                      <div className="text-xs text-gray-500">{formatDate(p.date)}</div>
                    </div>
                    <FiExternalLink className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* LIGHTBOX */}
      {open && hasGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeLightbox}
        >
          <div
            ref={lightboxRef}
            tabIndex={-1}
            className="relative w-full max-w-6xl outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[idx]}
              alt={`Preview ${idx + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              loading="eager"
            />

            {/* Top Bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border text-white text-sm max-w-md"
                style={{
                  borderColor: brandColors.accentBorder
                }}>
                <div className="truncate">{model.title}</div>
              </div>

              <button
                onClick={closeLightbox}
                className="p-3 rounded-xl bg-black/60 backdrop-blur-md border transition-all duration-300 hover:scale-110 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  borderColor: brandColors.accentBorder
                }}
                aria-label="Close preview"
              >
                <FiX className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-xl bg-black/60 backdrop-blur-md border transition-all duration-300 hover:scale-110 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    borderColor: brandColors.accentBorder
                  }}
                >
                  <FiChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-xl bg-black/60 backdrop-blur-md border transition-all duration-300 hover:scale-110 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    borderColor: brandColors.accentBorder
                  }}
                >
                  <FiChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Footer */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border"
              style={{
                borderColor: brandColors.accentBorder
              }}>
              <span className="text-white text-sm">{idx + 1} / {images.length}</span>
              <button
                onClick={() => window.open(images[idx], "_blank")}
                className="text-blue-300 text-sm underline transition-colors hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                Open original
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* Helper Functions */
function formatDate(input) {
  try {
    const dt = new Date(input);
    if (Number.isNaN(dt.getTime())) return String(input || "Date TBA");
    return dt.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  } catch {
    return String(input || "Date TBA");
  }
}

function looksLikeHtml(s) {
  if (!s || typeof s !== "string") return false;
  return /<\/?[a-z][\s\S]*>/i.test(s);
}

function safeHTML(html) {
  try {
    const allowed = ["B", "I", "STRONG", "EM", "A", "P", "BR", "UL", "OL", "LI", "SPAN", "DIV"];
    const div = document.createElement("div");
    div.innerHTML = html;
    const walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, null);
    const toRemove = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!allowed.includes(node.nodeName)) {
        toRemove.push(node);
      } else if (node.nodeName === "A") {
        node.setAttribute("target", "_blank");
        node.setAttribute("rel", "noopener noreferrer");
        const href = node.getAttribute("href") || "";
        if (!/^https?:\/\//i.test(href)) {
          node.setAttribute("href", "#");
        }
      }
    }

    toRemove.forEach((n) => {
      const parent = n.parentNode;
      while (n.firstChild) {
        parent.insertBefore(n.firstChild, n);
      }
      parent.removeChild(n);
    });

    return div.innerHTML;
  } catch {
    return String(html || "");
  }
}