import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Components/Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, BookOpen, TrendingUp, Target } from "lucide-react";

/**
 * BLOG — Modern Professional
 * - Clean card layout
 * - Professional business aesthetic
 * - BlueLife Financial Solutions LLC brand consistency
 */
export default function BlogModernVariant() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
    accentBg: "rgba(0, 176, 255, 0.05)"
  };

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "Recent";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getReadTime = (content) => {
    if (!content) return "2 min";
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / 200);
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
          {/* Brand Indicator */}
          {/* <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border shadow-lg mb-8"
            style={{ borderColor: brandColors.accentBorder }}>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0050A0] to-[#00B0FF]"></div>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#0050A0" }}>
              Blogs 
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0050A0] to-[#00B0FF]"></div>
          </div> */}

          <h1 className="text-3xl md:text-4xl lg:5xl font-black mb-2 tracking-tight" style={{ color: brandColors.textDark }}>
            Blog & <span style={{
              background: brandColors.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}> Insights</span>
          </h1>

          <div className="w-20 h-1 mx-auto mb-2 rounded-full" style={{ background: brandColors.gradient }}></div>

          <p className="text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore curated knowledge across financial topics.
          </p>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 animate-pulse h-80"
                style={{ borderColor: brandColors.accentBorder }} />
            ))}
          </div>
        )}

        {!loading && blogs.length > 0 && (
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
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border shadow-sm"
                        style={{ borderColor: brandColors.accentBorder }}>
                        <span className="text-xs font-semibold" style={{ color: brandColors.primary }}>
                          {formatDate(blog.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-6 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors"
                        style={{ color: brandColors.textDark }}>
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {blog.summary || String(blog.content).slice(0, 150) + "..."}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{getReadTime(blog.content)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            <span>Expert</span>
                          </div>
                        </div>
                      </div>

                      {/* Author and CTA */}
                      <div className="flex items-center justify-between pt-3 border-t"
                        style={{ borderColor: brandColors.accentBorder }}>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0050A0] to-[#00B0FF] flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold" style={{ color: brandColors.textDark }}>
                              {blog.author || "BlueLife Financial Solutions LLC Team"}
                            </p>
                            <p className="text-xs text-gray-500">Senior Analyst</p>
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

        {!loading && blogs.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-12 border-2 max-w-md mx-auto shadow-lg"
              style={{ borderColor: brandColors.accentBorder }}>
              <Target className="w-16 h-16 mx-auto mb-6 opacity-60" style={{ color: brandColors.primary }} />
              <h3 className="text-2xl font-bold mb-3" style={{ color: brandColors.textDark }}>Insights in Progress</h3>
              <p className="text-gray-600 mb-6">Our experts are preparing valuable market analysis.</p>
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
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-white/80 backdrop-blur-sm border shadow-lg"
            style={{ borderColor: brandColors.accentBorder }}>
            <span className="text-lg font-bold tracking-wider uppercase" style={{ color: brandColors.textDark }}>
              BlueLife Financial Solutions LLC Market Intelligence
            </span>
            <button
              className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ background: brandColors.gradient }}
            >
              Subscribe to Reports
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}