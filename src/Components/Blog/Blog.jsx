import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
  TrendingUp,
  Target,
} from "lucide-react";

// Base API URL – make sure your Node app is running on this host/port
const API_BASE = "https://bluelife.llc/api";

// BlueLife Financial Solutions LLC Professional Colors
const brandColors = {
  lightBg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdfa 100%)",
  primary: "#00B0FF",
  primaryHover: "#80D8FF",
  gradient: "linear-gradient(135deg, #0050A0 0%, #00B0FF 100%)",
  textDark: "#003366",
  textLight: "#666666",
  cardGradient: "linear-gradient(145deg, #ffffff, #f8fdff)",
  accentBorder: "rgba(0, 176, 255, 0.15)",
  accentBg: "rgba(0, 176, 255, 0.05)",
};

export default function BlogModernVariant() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      setErr("");

      try {
        // 1) Get paginated list of blogs
        const res = await fetch(`${API_BASE}/blogs`);
        if (!res.ok) {
          throw new Error(`Failed to load blogs. Status: ${res.status}`);
        }

        const json = await res.json();
        const rows = Array.isArray(json.data) ? json.data : [];

        // 2) Enrich each blog with a usable cover image:
        //    - use cover_image_id if present
        //    - otherwise, if images_count > 0, fetch blog/:id and use first image
        const mapped = await Promise.all(
          rows.map(async (b) => {
            const createdAt = b.created_at || null;

            let coverImageUrl = null;

            if (b.cover_image_id) {
              // use explicit cover
              coverImageUrl = `${API_BASE}/blogs/image/${b.cover_image_id}/blob`;
            } else if (b.images_count > 0) {
              // fallback: fetch blog details and pick first image
              try {
                const detailRes = await fetch(`${API_BASE}/blogs/${b.id}`);
                if (detailRes.ok) {
                  const detailJson = await detailRes.json();
                  const images = Array.isArray(detailJson.images)
                    ? detailJson.images
                    : [];
                  if (images.length > 0) {
                    coverImageUrl = `${API_BASE}/blogs/image/${images[0].id}/blob`;
                  }
                }
              } catch (innerErr) {
                console.error(
                  `Failed to load images for blog ${b.id}:`,
                  innerErr
                );
              }
            }

            return {
              id: b.id,
              title: b.title,
              excerpt: b.excerpt || "",
              // used by the img tag
              image: coverImageUrl,
              // used by formatDate
              createdAt,
              // used for read time
              contentPreview: b.excerpt || "",
              // keep these for future use / detail page
              is_published: !!b.is_published,
              cover_image_id: b.cover_image_id,
              images_count: b.images_count,
              // author not in DB, so keep default in UI
              author: "BlueLife Financial Solutions LLC Team",
            };
          })
        );

        setBlogs(mapped);
      } catch (e) {
        console.error("Error loading blogs:", e);
        setErr(
          `Couldn't load blogs. Check if your API at "${API_BASE}" is running and /blogs is mounted correctly.`
        );
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const formatDate = (value) => {
    if (!value) return "Recent";
    try {
      const date =
        value instanceof Date ? value : new Date(value); // MySQL datetime string
      if (Number.isNaN(date.getTime())) return "Recent";
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Recent";
    }
  };

  const getReadTime = (text) => {
    if (!text) return "2 min";
    const words = String(text).trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min`;
  };

  return (
    <section
      className="min-h-screen py-28"
      style={{ background: brandColors.lightBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <div className="text-center mb-10">
          <h1
            className="text-3xl md:text-4xl lg:5xl font-black mb-2 tracking-tight"
            style={{ color: brandColors.textDark }}
          >
            Blog &{" "}
            <span
              style={{
                background: brandColors.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Insights
            </span>
          </h1>

          <div
            className="w-20 h-1 mx-auto mb-2 rounded-full"
            style={{ background: brandColors.gradient }}
          ></div>

          <p className="text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore curated knowledge across financial topics.
          </p>
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 animate-pulse h-80"
                style={{ borderColor: brandColors.accentBorder }}
              />
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && err && (
          <div className="text-center py-16">
            <div
              className="bg-white rounded-2xl p-8 border-2 max-w-xl mx-auto shadow-lg"
              style={{ borderColor: brandColors.accentBorder }}
            >
              <p
                className="text-lg font-semibold mb-3"
                style={{ color: brandColors.textDark }}
              >
                Something went wrong
              </p>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {err}
              </p>
            </div>
          </div>
        )}

        {/* Blogs grid */}
        {!loading && !err && blogs.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  background: brandColors.cardGradient,
                  borderColor: brandColors.accentBorder,
                }}
                onClick={() => navigate(`/blog/${blog.id}`, { state: { blog } })}
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Section */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-48 md:h-full flex items-center justify-center bg-slate-100">
                        <Calendar
                          className="w-10 h-10 opacity-40"
                          style={{ color: brandColors.primary }}
                        />
                      </div>
                    )}

                    <div className="absolute top-4 left-4">
                      <div
                        className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border shadow-sm"
                        style={{ borderColor: brandColors.accentBorder }}
                      >
                        <span
                          className="text-xs font-semibold"
                          style={{ color: brandColors.primary }}
                        >
                          {formatDate(blog.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-6 flex flex-col">
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold mb-3 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors"
                        style={{ color: brandColors.textDark }}
                      >
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {blog.excerpt && blog.excerpt.trim().length > 0
                          ? blog.excerpt
                          : "Read detailed insights and market perspectives from our team."}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{getReadTime(blog.contentPreview)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            <span>Expert</span>
                          </div>
                        </div>
                      </div>

                      {/* Author and CTA */}
                      <div
                        className="flex items-center justify-between pt-3 border-t"
                        style={{ borderColor: brandColors.accentBorder }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0050A0] to-[#00B0FF] flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p
                              className="text-sm font-semibold"
                              style={{ color: brandColors.textDark }}
                            >
                              {blog.author ||
                                "BlueLife Financial Solutions LLC Team"}
                            </p>
                            <p className="text-xs text-gray-500">
                              Senior Analyst
                            </p>
                          </div>
                        </div>

                        <button
                          className="px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 group-hover:gap-3"
                          style={{ background: brandColors.gradient }}
                        >
                          Read
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !err && blogs.length === 0 && (
          <div className="text-center py-16">
            <div
              className="bg-white rounded-2xl p-12 border-2 max-w-md mx-auto shadow-lg"
              style={{ borderColor: brandColors.accentBorder }}
            >
              <Target
                className="w-16 h-16 mx-auto mb-6 opacity-60"
                style={{ color: brandColors.primary }}
              />
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: brandColors.textDark }}
              >
                Insights in Progress
              </h3>
              <p className="text-gray-600 mb-6">
                Our experts are preparing valuable market analysis.
              </p>
              <button
                className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ background: brandColors.gradient }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}

        {/* Professional CTA */}
        {/* <div className="text-center mt-10">
          <div
            className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-white/80 backdrop-blur-sm border shadow-lg"
            style={{ borderColor: brandColors.accentBorder }}
          >
            <span
              className="text-lg font-bold tracking-wider uppercase"
              style={{ color: brandColors.textDark }}
            >
              BlueLife Financial Solutions LLC Market Intelligence
            </span>
            <button
              className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ background: brandColors.gradient }}
            >
              Subscribe to Reports
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
