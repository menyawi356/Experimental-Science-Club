const Header = () => {
  return (
    <header>
      <nav className="wrap">
        <button className="logo">
          <span className="mark">S</span>
          <span id="brand-text">ScienoAtlas</span>
        </button>

        <div className="navlinks" id="navLinks">
          <a className="nav-link active" data-target="home" id="nav-home">
            Home
          </a>

          <a className="nav-link" data-target="about" id="nav-about">
            About Us
          </a>

          <a
            className="nav-link"
            data-target="competitions"
            id="nav-competitions"
          >
            Competitions
          </a>

          <a className="nav-link" data-target="publishing" id="nav-publishing">
            Publishing
          </a>

          <a className="nav-link" data-target="chat" id="nav-chat">
            Chat Hub
          </a>

          <a className="nav-link" data-target="partners" id="nav-partners">
            Partners
          </a>

          <a className="nav-link" data-target="contact" id="nav-contact">
            Contact Us
          </a>

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
          >
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

            <svg
              id="iconMoon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ display: "none" }}
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </svg>
          </button>

          <a className="btn btn-primary join-btn-desktop" id="nav-join-desktop">
            Join Club
          </a>

          <button
            className="hamburger"
            id="hamburgerBtn"
            aria-label="Toggle navigation menu"
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
