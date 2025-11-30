import React, { useEffect, useState, useCallback, useRef } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { ChevronLeft, ChevronRight, X, Calendar, Users, MapPin, ExternalLink, Play } from "lucide-react";

const firebaseConfig = {
  apiKey: "AIzaSyBg2p1nPZQ39AU91CDzRWeYtQjBs5HHf-Y",
  authDomain: "ajazgraphic-da740.firebaseapp.com",
  projectId: "ajazgraphic-da740",
  storageBucket: "ajazgraphic-da740.appspot.com",
  messagingSenderId: "600209988666",
  appId: "1:600209988666:web:d806f6d7dfd10fa394a903",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Modern BlueLife Financial Solutions LLC Brand Colors
const brandColors = {
  primary: "#00B0FF",
  primaryColor: "#0050A0",
  primaryHover: "#80D8FF",
  gradient: "linear-gradient(135deg, #0050A0 0%, #00B0FF 100%)",
  lightBg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdfa 100%)",
  cardGradient: "linear-gradient(135deg, #ffffff 0%, #f8fdff 100%)",
  accentBorder: "rgba(0, 176, 255, 0.2)",
  textDark: "#003366",
  textLight: "#666666"
};

export default function EventsGalleryModernVariant() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    index: 0,
    title: "",
  });

  const [visibleIds, setVisibleIds] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const qs = await getDocs(collection(db, "properedgefinance"));
        const events = qs.docs.map((doc) => ({
          id: Number.isNaN(parseInt(doc.id, 10)) ? doc.id : parseInt(doc.id, 10),
          ...doc.data(),
        }));
        events.sort((a, b) => {
          const an = typeof a.id === "number";
          const bn = typeof b.id === "number";
          if (an && bn) return a.id - b.id;
          return String(a.id).localeCompare(String(b.id));
        });
        setEventsData(events);
      } catch (e) {
        console.error(e);
        setErr("Couldn't load the gallery. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // IntersectionObserver for animations
  useEffect(() => {
    if (typeof window === "undefined") return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-event-id");
          if (!id) return;
          if (entry.isIntersecting) {
            setVisibleIds((s) => {
              if (s.has(id)) return s;
              const next = new Set(s);
              next.add(id);
              return next;
            });
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    return () => {
      observerRef.current?.disconnect?.();
    };
  }, []);

  const setCardRef = useCallback((el) => {
    if (!el) return;
    const id = el.getAttribute("data-event-id");
    if (!id) return;
    observerRef.current && observerRef.current.observe(el);
  }, []);

  const openLightbox = useCallback((images, index = 0, title = "") => {
    if (!Array.isArray(images) || images.length === 0) return;
    setLightbox({ open: true, images, index, title });
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((s) => ({ ...s, open: false }));
    document.body.style.overflow = "";
  }, []);

  const prevImage = useCallback(() => {
    setLightbox((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }));
  }, []);

  const nextImage = useCallback(() => {
    setLightbox((s) => ({ ...s, index: (s.index + 1) % s.images.length }));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (!lightbox.open) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox.open, closeLightbox, prevImage, nextImage]);

  function heroImageForEvent(e) {
    if (Array.isArray(e.images) && e.images.length) return e.images[0];
    if (e.thumbnail) return e.thumbnail;
    if (e.image) return e.image;
    return "";
  }

  return (
    <section
      className="min-h-screen py-28"
      style={{ background: brandColors.lightBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border shadow-lg mb-8"
            style={{ borderColor: brandColors.accentBorder }}>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0050A0] to-[#00B0FF]"></div>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#0050A0" }}>
              Gallery & Events
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0050A0] to-[#00B0FF]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:yext-5xl font-black mb-5 tracking-tight" style={{ color: brandColors.textDark }}>
            Gallery  <span style={{
              background: brandColors.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>— Magazine View</span>
          </h2>

          <div className="w-24 h-1.5 mx-auto mb-2 rounded-full" style={{ background: brandColors.gradient }}></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Carefully composed event pages with a large hero image and a right-hand preview strip — fast to scan, pleasant to read.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-3xl p-6 bg-white/60 animate-pulse h-96 shadow-lg" />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && err && (
          <div className="text-center text-gray-600 py-16 text-lg">{err}</div>
        )}

        {/* Events Grid - Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {!loading && !err && eventsData.map((ev) => {
            const images = Array.isArray(ev.images) ? ev.images : [];
            const hero = heroImageForEvent(ev);
            const visible = visibleIds.has(String(ev.id));

            return (
              <article
                key={ev.id}
                data-event-id={String(ev.id)}
                ref={setCardRef}
                className={`bg-white rounded-3xl overflow-hidden border-2 shadow-2xl hover:shadow-3xl transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{
                  background: brandColors.cardGradient,
                  borderColor: brandColors.accentBorder,
                }}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <button
                    onClick={() => openLightbox(images, 0, ev.title || `Event ${ev.id}`)}
                    className="group block w-full h-full text-left"
                  >
                    {hero ? (
                      <img
                        src={hero}
                        alt={ev.title || ""}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center">
                        <Calendar className="w-16 h-16 opacity-30" style={{ color: brandColors.primary }} />
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Image Count Badge */}
                    {images.length > 0 && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-2 rounded-full text-sm font-bold text-white shadow-lg"
                          style={{ background: brandColors.gradient }}>
                          {images.length} photos
                        </span>
                      </div>
                    )}

                    {/* Quick Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-white" />
                        <span className="text-white/90 text-sm font-medium">{ev.date || "Date TBA"}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {ev.title || `Event ${ev.id}`}
                      </h3>
                    </div>
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {ev.subtitle || (ev.description ? String(ev.description).slice(0, 120) + "…" : "Event details coming soon...")}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100">
                      <MapPin className="w-5 h-5" style={{ color: brandColors.primary }} />
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="text-sm font-semibold text-gray-800">{ev.location || "TBA"}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100">
                      <Users className="w-5 h-5" style={{ color: brandColors.primary }} />
                      <div>
                        <p className="text-xs text-gray-500">Attendees</p>
                        <p className="text-sm font-semibold text-gray-800">{ev.attendees || "Multiple"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => openLightbox(images, 0, ev.title)}
                      className="flex-1 py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ background: brandColors.gradient }}
                      disabled={images.length === 0}
                    >
                      <Play className="w-4 h-4" />
                      View Gallery
                    </button>

                    {ev.meetingLink && (
                      <a
                        href={ev.meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
                        style={{ borderColor: brandColors.primary, color: brandColors.primary }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Image Previews */}
                  {images.length > 0 && (
                    <div className="mt-4 flex gap-2">
                      {images.slice(0, 3).map((src, i) => (
                        <button
                          key={i}
                          onClick={() => openLightbox(images, i, ev.title)}
                          className="flex-1 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
                          style={{ borderColor: brandColors.accentBorder }}
                        >
                          <img
                            src={src}
                            alt={`Preview ${i + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                      {images.length > 3 && (
                        <button
                          onClick={() => openLightbox(images, 0, ev.title)}
                          className="flex-1 h-16 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center justify-center font-semibold text-sm"
                          style={{ borderColor: brandColors.accentBorder, color: brandColors.primary }}
                        >
                          +{images.length - 3}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Branding */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border shadow-lg"
            style={{ borderColor: brandColors.accentBorder }}>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#0050A0] to-[#00B0FF] animate-pulse"></div>
            <span className="text-lg font-bold tracking-wider uppercase" style={{ color: brandColors.textDark }}>
              BlueLife Financial Solutions LLC • Premium Events
            </span>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#0050A0] to-[#00B0FF] animate-pulse"></div>
          </div>
        </div> */}
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden bg-white" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="font-bold text-lg text-gray-900">{lightbox.title}</h3>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ background: brandColors.gradient }}>
                  {lightbox.index + 1} / {lightbox.images.length}
                </span>
                <button onClick={closeLightbox} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative bg-gray-900 flex items-center justify-center p-8">
              <img
                src={lightbox.images[lightbox.index]}
                alt={`lightbox ${lightbox.index + 1}`}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" style={{ color: brandColors.primary }} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" style={{ color: brandColors.primary }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}