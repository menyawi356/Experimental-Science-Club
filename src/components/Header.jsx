import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';
import { useTheme } from '../ThemeContext.jsx';

const NAV_ITEMS = ['home', 'about', 'competitions', 'publishing', 'chat', 'partners', 'contact'];

export default function Header({ page, navigate, onJoinClick }) {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    navigate(id);
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="wrap">
        <button className="logo" onClick={() => go('home')}>
          <span className="mark">S</span>{t.brand}
        </button>

        <div className={`navlinks${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map((id) => (
            <a
              key={id}
              className={`nav-link${page === id ? ' active' : ''}`}
              onClick={() => go(id)}
            >
              {t.nav[id]}
            </a>
          ))}
          <a className="nav-link join-btn-mobile" onClick={() => { onJoinClick(); setMenuOpen(false); }}>{t.nav.join}</a>
        </div>

        <div className="navright">
          <button className="lang-btn" onClick={toggleLang}>
            {lang === 'en' ? 'AR | EN' : 'EN | AR'}
          </button>
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
            )}
          </button>
          <a className="btn btn-primary join-btn-desktop" onClick={onJoinClick}>{t.nav.join}</a>
          <button className="hamburger" aria-label="Toggle navigation menu" onClick={() => setMenuOpen((o) => !o)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
