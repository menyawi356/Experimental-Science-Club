export default function About() {
  return (
    <main id="page-about" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="about-title">About Us</h2>

            <p className="lede" id="about-lede">
              ScienoAtlas is a nonprofit organization built to discover science
              through alternative, non-traditional ways of learning.
            </p>
          </div>

          <p
            style={{
              color: "var(--ink-soft)",
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "30px",
            }}
            id="about-body"
          >
            We exist to give every curious mind a space to think, question, and
            build — not just a place to memorize facts. ScienoAtlas moves
            learning away from rote memorization and toward experimentation,
            discussion, and real projects with real goals. Everything we do is
            nonprofit and built for the benefit of the whole community:
            students, mentors, and institutions alike. We believe science should
            be experienced, not just stored in a notebook — so we create room
            for ideas to be argued, tested, prototyped, and shared with the
            world.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                padding: "18px 20px",
                boxShadow: "var(--card-shadow)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "16px",
                }}
                id="about-point1-title"
              >
                Alternative learning
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--ink-soft)",
                  fontSize: "13.5px",
                }}
                id="about-point1-body"
              >
                We favor experimentation, dialogue, and projects over rote
                memorization.
              </p>
            </div>

            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                padding: "18px 20px",
                boxShadow: "var(--card-shadow)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "16px",
                }}
                id="about-point2-title"
              >
                Nonprofit, for everyone
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--ink-soft)",
                  fontSize: "13.5px",
                }}
                id="about-point2-body"
              >
                Every resource we build is meant to create benefit for the whole
                community, not a select few.
              </p>
            </div>

            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                padding: "18px 20px",
                boxShadow: "var(--card-shadow)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "16px",
                }}
                id="about-point3-title"
              >
                Space to think
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--ink-soft)",
                  fontSize: "13.5px",
                }}
                id="about-point3-body"
              >
                We give ideas room to be debated, tested, and turned into real
                goals and projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-symbol-stage" data-symbol="about">
        <div className="symbol-3d-container">
          <svg className="symbol-3d-svg" viewBox="0 0 200 200">
            <defs>
              <linearGradient
                id="deltaGrad1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#F5D77F" />
                <stop offset="100%" stopColor="#24345C" />
              </linearGradient>

              <linearGradient id="deltaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8FA3DE" />
                <stop offset="100%" stopColor="#10182B" />
              </linearGradient>

              <radialGradient id="coreGlowAbout" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />

                <stop offset="100%" stopColor="#8FA3DE" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle
              cx="100"
              cy="105"
              r="90"
              fill="none"
              stroke="url(#deltaGrad1)"
              strokeWidth="1"
              strokeDasharray="2,6"
              className="spin-cw-slow"
              opacity="0.5"
            />

            <circle
              cx="100"
              cy="105"
              r="74"
              fill="none"
              stroke="url(#deltaGrad2)"
              strokeWidth="1.5"
              strokeDasharray="12,6"
              className="spin-ccw-slow"
            />

            <circle
              cx="100"
              cy="105"
              r="100"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.75"
              strokeDasharray="1,9"
              className="spin-cw-fast"
              opacity="0.4"
            />

            <ellipse
              cx="100"
              cy="100"
              rx="55"
              ry="45"
              fill="url(#coreGlowAbout)"
              opacity="0.4"
            />

            <g className="float-slow">
              <polygon
                points="100,18 18,168 100,138"
                fill="url(#deltaGrad1)"
                opacity="0.82"
              />

              <polygon
                points="100,18 182,168 100,138"
                fill="url(#deltaGrad2)"
                opacity="0.92"
              />

              <polygon
                points="18,168 182,168 100,138"
                fill="#D4AF37"
                opacity="0.35"
              />

              <line
                x1="100"
                y1="18"
                x2="100"
                y2="138"
                stroke="#FFFFFF"
                strokeWidth="2"
                opacity="0.8"
              />

              <line
                x1="100"
                y1="18"
                x2="18"
                y2="168"
                stroke="#F5D77F"
                strokeWidth="1.5"
                opacity="0.7"
              />

              <line
                x1="100"
                y1="18"
                x2="182"
                y2="168"
                stroke="#8FA3DE"
                strokeWidth="1.5"
                opacity="0.7"
              />

              <circle cx="100" cy="18" r="5" fill="#F5D77F" />

              <circle cx="18" cy="168" r="4.5" fill="#8FA3DE" />

              <circle cx="182" cy="168" r="4.5" fill="#8FA3DE" />

              <circle cx="100" cy="138" r="4" fill="#D4AF37" />

              <circle
                cx="60"
                cy="90"
                r="1.8"
                fill="#FFFFFF"
                className="twinkle-a"
              />

              <circle
                cx="140"
                cy="90"
                r="1.6"
                fill="#F5D77F"
                className="twinkle-b"
              />

              <circle
                cx="100"
                cy="60"
                r="1.5"
                fill="#DCE4FA"
                className="twinkle-c"
              />
            </g>
          </svg>
        </div>

        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
