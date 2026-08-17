import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const Pages = [
    { name: "Home", path: "/Home" },
    { name: "About Us", path: "/About-Us" },
    { name: "Competitions", path: "/Competitions" },
    { name: "Publishing", path: "/Publishing" },
    { name: "Chat Hub", path: "/Chat-Hub" },
    { name: "Partners", path: "/Partners" },
    { name: "Contact Us", path: "/Contact-Us" },
  ];
  const [isOpened, setIsOpned] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const html = useRef(document.querySelector("html"));
  const handleIsOpned = () => {
    setIsOpned((prev) => !prev);
  };

  const handleChangeTheme = () => {
    const isDark = html.current.getAttribute("data-theme") === "dark";
    setIsDark(!isDark);
    html.current.setAttribute("data-theme", isDark ? "light" : "dark");
  };
  const Links = Pages.map((pageName, i) => {
    return (
      <NavLink
        key={i}
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        to={pageName.path}
        onClick={() => setIsOpned(false)}
      >
        {pageName.name}
      </NavLink>
    );
  });
  return (
    <header>
      <nav className="wrap">
        <button
          className="logo"
          onClick={() => {
            handleChangePage("Home");
          }}
        >
          <span className="mark">S</span>
          <span id="brand-text">ScienoAtlas</span>
        </button>

        <div className={`navlinks ${isOpened && "open"}`} id="navLinks">
          {Links}
          <a className="nav-link join-btn-mobile" id="nav-join-mobile">
            Join Club
          </a>
        </div>

        <div className="navright">
          <button className="lang-btn" id="langToggle">
            AR | EN
          </button>

          <button className="admin-btn" title="لوحة التحكم">
            🔐 Admin
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

          <a className="btn btn-primary join-btn-desktop" id="nav-join-desktop">
            Join Club
          </a>

          <button
            className="hamburger"
            id="hamburgerBtn"
            aria-label="Toggle navigation menu"
            onClick={handleIsOpned}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
