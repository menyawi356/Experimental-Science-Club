import PartnersSVG from "../Svgs/parteners.svg";
import SVG from "../components/sentence-popu-svg";
import useLanguage from "../hooks/useLanguage.js";
export default function Partners() {
  const { t } = useLanguage();
  const partnersText = t.partners;
  return (
    <main id="page-partners" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="partners-title">{partnersText.title}</h2>

            <p className="lede" id="partners-lede">
              {partnersText.lede}
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
                  {partnersText.name}
                </text>
              </svg>

              <div>
                <h3 id="aops-name">{partnersText.name}</h3>

                <div className="subtitle" id="aops-full">
                  {partnersText.full}
                </div>
              </div>
            </div>

            <p className="desc" id="aops-desc">
              {partnersText.desc}
            </p>

            <div>
              <a
                href="https://artofproblemsolving.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                id="aops-visit"
              >
                {partnersText.visit}
              </a>
            </div>
          </div>

          {/* <p
            style={{
              marginTop: "16px",
              fontSize: "12px",
              color: "var(--ink-faint)",
            }}
          >
            Logo shown is a placeholder mark — replace with the official AoPS
            logo asset if you have usage rights.
          </p> */}
        </div>
      </div>
      <SVG page="partners">
        <PartnersSVG/>
      </SVG>
    </main>
  );
}
