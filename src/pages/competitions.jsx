import { useLanguage } from "../global/languageProvider";
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
            {/* ChemX */}
            <div className="opp-card">
              <div className="opp-top">
                <span className="opp-cat" id="chemx-cat">
                  Chemistry Competition
                </span>

                <span className="match" id="chemx-badge">
                  Top Tier
                </span>
              </div>

              <h3 id="chemx-title">ChemX</h3>

              <p
                style={{
                  fontSize: "13.5px",
                  color: "var(--ink-soft)",
                  margin: 0,
                }}
                id="chemx-desc"
              >
                Organized by the STEM October Chemistry Club, ChemX is a premier
                global chemistry competition designed to challenge high school
                students worldwide.
              </p>

              <div className="opp-meta">
                <span id="chemx-meta1">Online & Hybrid</span>
                <span id="chemx-meta2">Global Eligibility</span>
              </div>

              <div className="tag-row">
                <span className="tag">Chemistry</span>
                <span className="tag">STEM October</span>
              </div>

              <div className="opp-actions">
                <a
                  href="https://chemx.octchemistryclub.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  id="chemx-visit"
                >
                  Visit Website
                </a>

                <a className="btn btn-ghost" id="chemx-save">
                  Save
                </a>
              </div>
            </div>

            {/* Pharaohs' Fragments League */}
            <div className="opp-card">
              <div className="opp-top">
                <span className="opp-cat" id="pharaohs-cat">
                  Physics League
                </span>

                <span className="match" id="pharaohs-badge">
                  Featured
                </span>
              </div>

              <h3 id="pharaohs-title">Pharaohs' Fragments League</h3>

              <p
                style={{
                  fontSize: "13.5px",
                  color: "var(--ink-soft)",
                  margin: 0,
                }}
                id="pharaohs-desc"
              >
                An elite, globally recognized physics and interdisciplinary
                science competition inviting students to tackle complex physical
                phenomena.
              </p>

              <div className="opp-meta">
                <span id="pharaohs-meta1">2 Rounds</span>
                <span id="pharaohs-meta2">Multiple Categories</span>
              </div>

              <div className="tag-row">
                <span className="tag">Physics</span>
                <span className="tag">Mechanics</span>
              </div>

              <div className="opp-actions">
                <a href="#" className="btn btn-primary" id="pharaohs-apply">
                  Apply Now
                </a>

                <a className="btn btn-ghost" id="pharaohs-save">
                  Save
                </a>
              </div>
            </div>

            {/* Idea Card */}
            <div className="opp-card idea-card">
              <div className="opp-top">
                <span className="opp-cat" id="idea-cat">
                  Have Something in Mind?
                </span>
              </div>

              <h3 id="idea-title">Do you have an idea to make it real?</h3>

              <p
                style={{
                  fontSize: "13.5px",
                  color: "var(--ink-soft)",
                  margin: 0,
                }}
                id="idea-desc"
              >
                Pitch an event, hackathon, or competition idea to the
                ScienoAtlas team. If it has real potential, we will help you
                build it and bring it to life.
              </p>

              <div className="opp-actions">
                <a className="btn btn-primary" id="idea-cta">
                  Submit Your Idea
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-symbol-stage" data-symbol="competitions">
        <div className="symbol-3d-container">{<CompetitionsSVG />}</div>

        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
