import { useLanguage } from "../global/languageProvider.jsx";
import HomepageSVG from "../Svgs/homapge.svg";

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
            <a
              className="btn btn-primary"
              style={{ padding: "13px 24px" }}
              id="home-explore-btn"
            >
              {home.explore}
            </a>

            <a
              className="btn btn-ghost"
              style={{ padding: "13px 24px" }}
              id="home-learn-btn"
            >
              {home.learn}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-symbol-stage" data-symbol="home">
        <div className="symbol-3d-container">{<HomepageSVG />}</div>
        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
