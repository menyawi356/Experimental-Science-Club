import PartnersSVG from "../Svgs/parteners.svg";

export default function Partners() {
  return (
    <main id="page-partners" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="partners-title">Our Partner</h2>

            <p className="lede" id="partners-lede">
              ScienoAtlas is proud to work alongside institutions that share our
              belief in alternative, hands-on scientific learning.
            </p>
          </div>

          <div className="partner-feature">
            <div className="partner-logo-row">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="70"
                  height="70"
                  rx="16"
                  fill="var(--indigo)"
                />

                <rect
                  x="1"
                  y="1"
                  width="70"
                  height="70"
                  rx="16"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                />

                <text
                  x="36"
                  y="43"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="700"
                  fontSize="20"
                  fill="var(--paper)"
                >
                  AoPS
                </text>
              </svg>

              <div>
                <h3 id="aops-name">AoPS</h3>

                <div className="subtitle" id="aops-full">
                  Art of Problem Solving
                </div>
              </div>
            </div>

            <p className="desc" id="aops-desc">
              Art of Problem Solving (AoPS) builds resources and a community for
              avid math students, sharing our mission of learning through
              challenge, exploration, and problem solving rather than rote
              memorization.
            </p>

            <div>
              <a
                href="https://artofproblemsolving.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                id="aops-visit"
              >
                Visit AoPS
              </a>
            </div>
          </div>

          <p
            style={{
              marginTop: "16px",
              fontSize: "12px",
              color: "var(--ink-faint)",
            }}
          >
            Logo shown is a placeholder mark — replace with the official AoPS
            logo asset if you have usage rights.
          </p>
        </div>
      </div>

      <div className="bg-symbol-stage" data-symbol="partners">
        <div className="symbol-3d-container">{<PartnersSVG />}</div>

        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
