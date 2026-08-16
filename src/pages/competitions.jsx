export default function Competitions() {
  return (
    <main id="page-competitions" className="page-view">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="comp-title">Competitions & Hackathons</h2>

            <p className="lede" id="comp-lede">
              Discover global challenges to test your skills, build your
              scientific identity, and compete with the brightest minds.
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
        <div className="symbol-3d-container">
          <svg className="symbol-3d-svg" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="intGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5D77F" />
                <stop offset="50%" stopColor="#2E7D6B" />
                <stop offset="100%" stopColor="#142C25" />
              </linearGradient>

              <radialGradient id="coreGlowComp" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />

                <stop offset="100%" stopColor="#2E7D6B" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="url(#intGrad)"
              strokeWidth="1.5"
              strokeDasharray="16,8,4,8"
              className="spin-cw-fast"
            />

            <circle
              cx="100"
              cy="100"
              r="68"
              fill="none"
              stroke="#2E7D6B"
              strokeWidth="1"
              strokeDasharray="2,6"
              opacity="0.6"
            />

            <circle
              cx="100"
              cy="100"
              r="98"
              fill="none"
              stroke="#F5D77F"
              strokeWidth="0.75"
              strokeDasharray="1,10"
              className="spin-ccw-slow"
              opacity="0.5"
            />

            <line
              x1="20"
              y1="100"
              x2="180"
              y2="100"
              stroke="#8FA3DE"
              strokeWidth="1.2"
              strokeDasharray="4,4"
              opacity="0.5"
            />

            <line
              x1="100"
              y1="20"
              x2="100"
              y2="180"
              stroke="#8FA3DE"
              strokeWidth="1.2"
              strokeDasharray="4,4"
              opacity="0.5"
            />

            <ellipse
              cx="105"
              cy="100"
              rx="50"
              ry="60"
              fill="url(#coreGlowComp)"
              opacity="0.35"
            />

            <path
              d="M25,100 Q60,40 100,100 T175,100"
              fill="none"
              stroke="#8FA3DE"
              strokeWidth="2"
              opacity="0.45"
            />

            <path
              d="M25,120 Q60,170 100,120 T175,120"
              fill="none"
              stroke="#F5D77F"
              strokeWidth="1.3"
              opacity="0.35"
              className="float-slow"
            />

            <circle
              cx="60"
              cy="55"
              r="2"
              fill="#8FA3DE"
              className="twinkle-a"
            />

            <circle
              cx="140"
              cy="145"
              r="2"
              fill="#F5D77F"
              className="twinkle-b"
            />

            <circle
              cx="175"
              cy="100"
              r="2.2"
              fill="#FFFFFF"
              className="twinkle-c"
            />

            <g className="pulse-core">
              <path
                d="M126,28 C152,28 142,68 112,100 C82,132 62,162 88,172 C103,177 118,167 122,157"
                fill="none"
                stroke="url(#intGrad)"
                strokeWidth="14"
                strokeLinecap="round"
              />

              <path
                d="M126,28 C152,28 142,68 112,100 C82,132 62,162 88,172"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                opacity="0.8"
              />
            </g>
          </svg>
        </div>

        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
