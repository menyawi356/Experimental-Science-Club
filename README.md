# ScienoAtlas

A React rebuild of the ScienoAtlas (formerly "Experimental Science Club") website — a nonprofit platform for discovering science through alternative, hands-on learning.

## Features

- Full React app (Vite) with all original pages: Home, About, Competitions, Publishing, Chat Hub, Partners, Contact
- English / Arabic language toggle (with automatic RTL layout switch)
- Light / dark theme toggle
- "Join Club" form, opened from the nav button, on every page
- "Do you have an idea to make it real?" card on the Competitions page that opens a form to submit an event, hackathon, or competition idea
- Partners page featuring AoPS (Art of Problem Solving) — note: the logo shown is a simple typographic placeholder mark; swap in the official AoPS logo image if you have usage rights
- Interactive scientific chat hub, animated 3D SVG symbols, publishing archive with search/filter

## Getting started

```bash
npm install
npm run dev
```

This starts a local dev server (usually at http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is written to the `dist/` folder, which you can deploy to any static host.

## Project structure

```
src/
  App.jsx                 – top-level routing/state
  i18n.js                 – English & Arabic translation strings
  LanguageContext.jsx     – language + RTL provider
  ThemeContext.jsx        – light/dark theme provider
  styles.css              – global styles (ported from the original design)
  components/
    Header.jsx, Footer.jsx
    Modal.jsx, JoinClubModal.jsx, IdeaSubmissionModal.jsx
    Symbols.jsx            – animated SVG symbols per page
    BackgroundStage.jsx    – hover/tap "insight" popup wrapper
    pages/                 – Home, About, Competitions, Publishing, ChatHub, Partners, Contact
```
