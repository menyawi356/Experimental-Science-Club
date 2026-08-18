import { NavLink } from "react-router-dom";
import useLanguage from "../hooks/useLanguage.js";
import HomepageSVG from "../Svgs/homapge.svg";

import SVG from "../components/sentence-popu-svg.jsx";

export default function Homepage() {
  const { t } = useLanguage();
  const home = t.home;

  return (
    <main id="page-home" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="eyebrow" id="home-eyebrow">
            {home.eyebrow}
          </div>

          <h1>
            <span id="home-title1">{home.title1}</span>
            <br />
            <em id="home-title2">{home.title2}</em>
          </h1>

          <p className="tagline" id="home-tagline">
            {home.tagline}
          </p>

          <p className="lede" id="home-lede">
            {home.lede}
          </p>

          <div className="hero-btns">
            <NavLink
              to="/Competitions"
              className="btn btn-primary "
              style={{ padding: "13px 24px" }}
              id="home-explore-btn"
            >
              {home.explore}
            </NavLink>

            <NavLink
              className="btn btn-ghost"
              style={{ padding: "13px 24px" }}
              id="home-learn-btn"
              to="/About-Us"
            >
              {home.learn}
            </NavLink>
          </div>
        </div>
      </div>

      <SVG page="home">
        <HomepageSVG />
      </SVG>
    </main>
  );
}
