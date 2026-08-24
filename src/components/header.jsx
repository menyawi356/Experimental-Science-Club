import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useLanguage from "../hooks/useLanguage.js";
import useAuth from "../hooks/useAuth.js";
import useChangeModal from "../hooks/useChangeModal.js";
import UserButton from "./user-profiel-btn.jsx";
import Logo from "../Svgs/Logo.svg.jsx";
const Header = () => {
  const { language, changeLanguage, t } = useLanguage();
  const { auth } = useAuth();
  const { isAuth, user } = auth;
  const Pages = [
    { name: t.nav.home, path: "/Home" },
    { name: t.nav.about, path: "/About-Us" },
    { name: t.nav.competitions, path: "/Competitions" },
    { name: t.nav.publishing, path: "/Publishing" },
    { name: t.nav.chat, path: "/Chat-Hub" },
    { name: t.nav.partners, path: "/Partners" },
    { name: t.nav.contact, path: "/Contact-Us" },
    isAuth &&
      user.role === "admin" && { name: t.nav.admin, path: "/Admin-dashboard" },
  ];
  const location = useLocation();
  const { setShowedModal } = useChangeModal();
  const [isOpened, setIsOpned] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const html = useRef(document.querySelector("html"));
  const handlePage = (page) => {
    setShowedModal({ modal: page, data: {} });
  };
  const handleIsOpned = () => {
    setIsOpned((prev) => !prev);
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "ligh";
    html.current.setAttribute("data-theme", theme);
    setIsDark(theme === "dark");
  }, []);
  useEffect(() => {
    html.current.dir = t.dir;
    html.current.lang = language;
  }, [language]);
  const handleChangeTheme = () => {
    const isDark = html.current.getAttribute("data-theme") === "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
    html.current.setAttribute("data-theme", isDark ? "light" : "dark");
  };
  const Links = Pages.map((pageName, i) => {
    return (
      <NavLink
        key={i}
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        to={pageName.path}
        onClick={(e) => {
          if (location.pathname === pageName.path) {
            e.preventDefault();
          }

          setIsOpned(false);
        }}
      >
        {pageName.name}
      </NavLink>
    );
  });
  const handleChangeLanguage = () => {
    if (language === "en") {
      changeLanguage("ar");
    } else {
      changeLanguage("en");
    }
  };
  return (
    <header>
      <nav className="wrap">
        {/* =========================
            LOGO — UNTOUCHED
        ========================= */}
        <NavLink className="logo" to="/Home">
          <Logo />
          <span id="brand-text">{t.brand}</span>
        </NavLink>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}
        <div className="navlinks desktop-nav">{Links}</div>

        {/* =========================
            DESKTOP RIGHT SIDE
        ========================= */}
        <div className="navright desktop-navright">
          <button
            className="lang-btn"
            id="langToggle"
            onClick={handleChangeLanguage}
          >
            AR | EN
          </button>

          <button
            className="theme-btn"
            id="themeToggle"
            aria-label="Toggle dark mode"
            onClick={handleChangeTheme}
          >
            {!isDark ? (
              <svg
                id="iconSun"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg
                id="iconMoon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
            )}
          </button>

          {!auth.isAuth ? (
            <>
              <button
                className="btn btn-ghost"
                title="لوحة التحكم"
                onClick={() => handlePage("sign")}
              >
                {t.nav.sign}
              </button>

              <button
                className="btn btn-primary"
                id="nav-join-desktop"
                onClick={() => handlePage("join")}
              >
                {t.nav.join}
              </button>
            </>
          ) : (
            <UserButton />
          )}

          {/* Hamburger */}
          <button
            className="hamburger"
            id="hamburgerBtn"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpened}
            onClick={handleIsOpned}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpened ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* =========================
            MOBILE MENU
        ========================= */}
        <div className={`mobile-menu ${isOpened ? "open" : ""}`}>
          <div className="mobile-navlinks">{Links}</div>

          <div className="mobile-controls">
            <button className="lang-btn" onClick={handleChangeLanguage}>
              AR | EN
            </button>

            <button
              className="theme-btn"
              aria-label="Toggle dark mode"
              onClick={handleChangeTheme}
            >
              {!isDark ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                </svg>
              )}
            </button>

            {!auth.isAuth ? (
              <div className="mobile-auth">
                <button
                  className="btn btn-ghost"
                  onClick={() => {
                    handlePage("sign");
                    setIsOpned(false);
                  }}
                >
                  {t.nav.sign}
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handlePage("join");
                    setIsOpned(false);
                  }}
                >
                  {t.nav.join}
                </button>
              </div>
            ) : (
              <div className="mobile-user">
                <UserButton />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
