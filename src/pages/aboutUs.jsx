import { useLanguage } from "../global/languageProvider";
import AboutSVG from "../Svgs/About.svg";

export default function About() {
  const { t } = useLanguage();
  const aboutText = t.about;
  return (
    <main id="page-about" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="about-title">{aboutText.title}</h2>

            <p className="lede" id="about-lede">
              {aboutText.lede}
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
            {aboutText.body}
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
                {aboutText.p1t}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--ink-soft)",
                  fontSize: "13.5px",
                }}
                id="about-point1-body"
              >
                {aboutText.p1b}
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
                {aboutText.p2t}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--ink-soft)",
                  fontSize: "13.5px",
                }}
                id="about-point2-body"
              >
                {aboutText.p2b}
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
                {aboutText.p3t}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--ink-soft)",
                  fontSize: "13.5px",
                }}
                id="about-point3-body"
              >
                {aboutText.p3b}
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
