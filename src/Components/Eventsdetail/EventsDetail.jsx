/** UPDATED: API-powered Events Detail + Previous Events (auto-picks latest event) */
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
} from "react-icons/fi";

const API_BASE = "https://bluelife.llc/api";

export default function EventsDetailGlassVariant({
  event = {},        // optional: can contain { id }, otherwise we'll auto-pick latest active
  previousEvents = [], // currently unused, we pull from API
}) {
  const [model, setModel] = useState(null);
  const [prevList, setPrevList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [topOffset, setTopOffset] = useState(70);

  const lightboxRef = useRef(null);
  const heroRef = useRef(null);

  const eventId = event?.id || null; // may be null, we handle that

  const brand = {
    primary: "#00B0FF",
    gradient: "linear-gradient(135deg, #0050A0 0%, #00B0FF 100%)",
    border: "rgba(0,176,255,0.15)",
    lightBg: "rgba(0,176,255,0.05)",
    textDark: "#003366",
    textLight: "#666",
  };

  // -----------------------------
  // Load current event + previous events from API
  // -----------------------------
  useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      setLoading(true);
      setErr("");

      try {
        let effectiveId = eventId;

        // 1) If no id passed → fetch active events and pick the latest one
        if (!effectiveId) {
          const listRes = await fetch(`${API_BASE}/events`);
          if (!listRes.ok) {
            throw new Error(
              `Failed to load active events list. Status: ${listRes.status}`
            );
          }

          const listJson = await listRes.json();
          const rows = Array.isArray(listJson.data) ? listJson.data : [];

          if (!rows.length) {
            if (!cancelled) {
              setErr("No active events found.");
              setModel(null);
            }
            return;
          }

          // /api/events is ordered by created_at DESC, so first = latest
          effectiveId = rows[0].id;
        }

        // 2) Fetch details of the chosen event + previous events in parallel
        const [eventRes, prevRes] = await Promise.all([
          fetch(`${API_BASE}/events/${effectiveId}`),
          fetch(`${API_BASE}/events/previous`),
        ]);

        if (!eventRes.ok) {
          throw new Error(
            `Failed to load event ${effectiveId}. Status: ${eventRes.status}`
          );
        }

        const eventJson = await eventRes.json();
        const { event: ev, images = [] } = eventJson;

        // Build gallery URLs
        const galleryUrls = Array.isArray(images)
          ? images.map((img) => `${API_BASE}/events/image/${img.id}/blob`)
          : [];

        // Determine hero/thumbnail image
        let thumbnailUrl = null;
        if (ev.cover_image_id) {
          thumbnailUrl = `${API_BASE}/events/image/${ev.cover_image_id}/blob`;
        } else if (galleryUrls.length > 0) {
          thumbnailUrl = galleryUrls[0];
        }

        const mappedEvent = {
          id: ev.id,
          title: ev.title,
          date: ev.event_date,
          event_timezone: ev.event_timezone || "", // ✅ ADD THIS

          description: ev.description || "",
          host: ev.hosted_by || "",
          meetingLink: ev.link || "",
          location: ev.address || "",
          thumbnailUrl,
          gallery: galleryUrls,
          duration: "",       // not in DB – optional
          attendees: "",      // not in DB – optional
          expertiseLevel: "", // not in DB – optional
          category: "",       // not in DB – optional
          status: ev.status,
        };

        // 3) Previous events list
        let mappedPrev = [];
        if (prevRes.ok) {
          const prevJson = await prevRes.json();
          const prevRows = Array.isArray(prevJson.data) ? prevJson.data : [];

          mappedPrev = await Promise.all(
            prevRows.map(async (p) => {
              let thumb = null;

              if (p.cover_image_id) {
                thumb = `${API_BASE}/events/image/${p.cover_image_id}/blob`;
              } else if (p.images_count > 0) {
                // Fallback: try to grab first image of this event
                try {
                  const detailRes = await fetch(`${API_BASE}/events/${p.id}`);
                  if (detailRes.ok) {
                    const dj = await detailRes.json();
                    const imgs = Array.isArray(dj.images) ? dj.images : [];
                    if (imgs.length > 0) {
                      thumb = `${API_BASE}/events/image/${imgs[0].id}/blob`;
                    }
                  }
                } catch (innerErr) {
                  console.error(
                    "Error fetching images for previous event",
                    p.id,
                    innerErr
                  );
                }
              }

              return {
                id: p.id,
                title: p.title,
                date: p.event_date,
                host: p.hosted_by,
                thumbnailUrl: thumb,
                recordingLink: p.link || "", // using link as recording URL
              };
            })
          );
        }

        if (!cancelled) {
          setModel(mappedEvent);
          setPrevList(mappedPrev);
        }
      } catch (e) {
        console.error("Error loading event detail:", e);
        if (!cancelled) {
          setErr(
            `Couldn't load event details. Check if API at "${API_BASE}" is running and /events routes are configured.`
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadData();

    return () => {
      cancelled = true;
    };
  }, [eventId]);

  // Derived values from model
  const current = model || {};
  const images = current.gallery || [];
  const hasGallery = images.length > 0;
  const displayDate = useMemo(() => formatDate(current.date), [current.date]);



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

  // Loading / error states over the main layout
  if (loading && !model && !err) {
    return (
      <section
        className="w-full bg-white min-h-screen flex items-center justify-center"
        style={{ paddingTop: topOffset }}
      >
        <div className="text-gray-500">Loading event…</div>
      </section>
    );
  }

  if (err && !model) {
    return (
      <section
        className="w-full bg-white min-h-screen flex items-center justify-center px-4"
        style={{ paddingTop: topOffset }}
      >
        <div
          className="max-w-lg bg-white border rounded-xl p-6 shadow"
          style={{ borderColor: brand.border }}
        >
          <h2 className="font-bold mb-2" style={{ color: brand.textDark }}>
            Something went wrong
          </h2>
          <p className="text-sm text-gray-600 whitespace-pre-line">{err}</p>
        </div>
      </section>
    );
  }

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
          height: "min(55vh, 480px)",
        }}
      >
        {current.thumbnailUrl ? (
          <img
            src={current.thumbnailUrl}
            className="w-full h-full object-cover"
            alt={current.title || "Event banner"}
          />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center">
            <FiCalendar className="w-10 h-10 text-slate-400" />
          </div>
        )}

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
              {current.title}
            </h1>

            <div className="text-sm text-gray-600 mt-3 space-y-1">
              <div className="flex items-center gap-2">
                <FiCalendar className="text-blue-500" /> {displayDate}
                <span className="text-black/70">
                  {current.event_timezone}
                </span>
              </div>

            </div>

            <div className="mt-4 flex gap-3">
              {current.meetingLink && (
                <button
                  onClick={() =>
                    window.open(
                      current.meetingLink,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 font-bold text-white rounded-xl text-sm"
                  style={{ background: brand.gradient }}
                >
                  <FiVideo /> Register
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
              {current.description || "Details coming soon."}
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
              <Detail
                icon={<FiCalendar />}
                label="Date"
                value={[
                  displayDate,
                  current?.event_timezone
                ].filter(Boolean).join(" ")}
              />



              {/* <Detail
                icon={<FiClock />}
                label="Duration"
                value={current.duration || "—"}
              /> */}
              <Detail
                icon={<FiUser />}
                label="Host"
                value={current.host || "BlueLife Financial Solutions LLC"}
              />
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
                      window.open(
                        p.recordingLink,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition text-left"
                  >
                    {p.thumbnailUrl ? (
                      <img
                        src={p.thumbnailUrl}
                        alt={p.title}
                        className="w-12 h-12 rounded-lg object-cover border"
                        style={{ borderColor: brand.border }}
                      />
                    ) : (
                      <div
                        className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center border"
                        style={{ borderColor: brand.border }}
                      >
                        <FiCalendar className="w-4 h-4 text-slate-400" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate">
                        {p.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatDate(p.date)}
                      </div>
                    </div>
                    {p.recordingLink && (
                      <FiExternalLink className="text-gray-400 shrink-0" />
                    )}
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
      minute: "2-digit",
    });
  } catch {
    return String(input || "Date TBA");
  }
}
