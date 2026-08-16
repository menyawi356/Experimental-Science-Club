import AboutSVG from "../Svgs/About.svg";

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
        <div className="symbol-3d-container">{<AboutSVG />}</div>

        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
