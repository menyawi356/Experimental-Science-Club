import HomepageSVG from "../Svgs/homapge.svg";

export default function Homepage() {
  return (
    <main id="page-home" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="eyebrow" id="home-eyebrow">
            Operating system for scientific talent
          </div>

          <h1>
            <span id="home-title1">Scieno</span>
            <br />
            <em id="home-title2">Atlas</em>
          </h1>

          <p className="tagline" id="home-tagline">
            — your beacon for all sciences
          </p>

          <p className="lede" id="home-lede">
            A map for curious minds. ScienoAtlas empowers students through
            verified research, hands-on projects, and a global scientific
            network — turning academic curiosity into a lasting scientific
            identity.
          </p>

          <div className="hero-btns">
            <a
              className="btn btn-primary"
              style={{ padding: "13px 24px" }}
              id="home-explore-btn"
            >
              Explore Competitions
            </a>

            <a
              className="btn btn-ghost"
              style={{ padding: "13px 24px" }}
              id="home-learn-btn"
            >
              Learn More
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
