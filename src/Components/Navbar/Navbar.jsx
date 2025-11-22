// src/components/BlueLifeNavbarV1.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
import LogoSrc from "../../assets/Logo/new_logo.png";

/*
  Using the uploaded logo file path as the image source.
  Developer note: local uploaded file path:
  /mnt/data/new_logo.png
*/


const navLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Products", path: "/product" },
  { name: "Partnership", path: "/partnership" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Events", path: "/events" },
];

export default function BlueLifeNavbarV1() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`bl-header ${isScrolled ? "scrolled" : ""}`} role="banner">
        <div className="bl-row">
          <Link to="/" className="bl-logo" aria-label="BlueLife LLC home">
            <img src={LogoSrc} alt="BlueLife LLC" />
            {/* <span className="bl-wordmark">BlueLife LLC</span> */}
          </Link>

          {/* Desktop nav */}
          <nav className="bl-nav" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`bl-nav-link ${active ? "active" : ""}`}
                >
                  <span aria-hidden="true">{link.name}</span>

                  {/* underline element */}
                  <span className="bl-nav-underline" aria-hidden="true" />
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="bl-menu-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <AiOutlineMenu size={22} color="var(--wp-text)" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {isOpen && (
        <div role="dialog" aria-modal="true" aria-label="Mobile menu">
          {/* Backdrop */}
          <div
            className="bl-drawer-backdrop"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <aside className="bl-drawer" onKeyDown={(e) => {
            if (e.key === "Escape") setIsOpen(false);
          }}>
            <div className="drawer-top">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img src={LogoSrc} alt="BlueLife LLC" style={{ height: 48 }} />
                {/* <div style={{ fontWeight: 700, color: "var(--wp-text)" }}>BlueLife LLC</div> */}
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="bl-menu-btn"
              >
                <AiOutlineClose size={22} color="var(--wp-text)" />
              </button>
            </div>

            <nav role="navigation" aria-label="Mobile primary" style={{ paddingTop: 8 }}>
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="bl-drawer-link"
                    style={{
                      display: "block",
                      padding: "12px 14px",
                      borderRadius: 12,
                      marginBottom: 6,
                      textDecoration: "none",
                      fontWeight: 700,
                      color: active ? "#fff" : "var(--wp-text)",
                      background: active ? "linear-gradient(90deg,#0077CC,#0066BB)" : "transparent",
                      boxShadow: active ? "0 10px 30px rgba(0,119,204,0.12)" : "none",
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            
          </aside>
        </div>
      )}
    </>
  );
}
