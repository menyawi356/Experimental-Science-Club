import CompetitionsList from "../components/competitionsList";
import SVG from "../components/sentence-popu-svg";
import useLanguage from "../hooks/useLanguage.js";
import CompetitionsSVG from "../Svgs/competitions.svg";
export default function Competitions() {
  const { t } = useLanguage();
  const competitionsText = t.competitions;

  return (
    <main id="page-competitions" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="comp-title">{competitionsText.title}</h2>

            <p className="lede" id="comp-lede">
              {competitionsText.lede}
            </p>
          </div>

          <div className="opp-grid">
            {<CompetitionsList />}
            {/* Idea Card */}
            <div className="opp-card idea-card">
              <div className="opp-top">
                <span className="opp-cat" id="idea-cat">
                  {competitionsText.ideaCat}
                </span>
              </div>

              <h3 id="idea-title">{competitionsText.ideaTitle}</h3>

              <p
                style={{
                  fontSize: "13.5px",
                  color: "var(--ink-soft)",
                  margin: 0,
                }}
                id="idea-desc"
              >
                {competitionsText.ideaDesc}
              </p>

              <div className="opp-actions">
                <a className="btn btn-primary" id="idea-cta">
                  {competitionsText.ideaCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SVG page="competitions">
        <CompetitionsSVG/>
      </SVG>
    </main>
  );
}
