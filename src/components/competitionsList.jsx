import useLanguage from "../hooks/useLanguage.js";
export default function CompetitionsList() {
  const { language, t } = useLanguage();
  const competitions = [
    {
      name: "Chemx",
      link: "https://chemx.octchemistryclub.com/",
      text: {
        ar: {
          cat: "مسابقة كيمياء",
          badge: "المستوى الأعلى",
          desc: "تنظمها نادي STEM October للكيمياء، وهي مسابقة كيمياء عالمية رائدة مصممة لتحدي طلاب المرحلة الثانوية حول العالم.",
          meta: ["عبر الإنترنت وحضوري", "مؤهّلة عالميًا"],
        },
        en: {
          cat: "Chemistry Competition",
          badge: "Top Tier",
          desc: "Organized by the STEM October Chemistry Club, ChemX is a premier global chemistry competition designed to challenge high school students worldwide.",
          meta: ["Online & Hybrid", "Global Eligibility"],
        },
      },
      tags: ["Chemistry", "STEM October"],
      application: "closed",
    },

    {
      name: "Physics League",
      link: "https://pharaohleague.org/",
      text: {
        ar: {
          cat: "دوري الفيزياء",
          badge: "مميّز",
          desc: "مسابقة فيزياء وعلوم متعددة التخصصات معترف بها عالميًا، تدعو الطلاب لمعالجة ظواهر فيزيائية معقّدة.",
          meta: ["جولتان", "فئات متعددة"],
        },
        en: {
          cat: "Physics League",
          badge: "Featured",
          desc: "An elite, globally recognized physics and interdisciplinary science competition inviting students to tackle complex physical phenomena.",
          meta: ["2 Rounds", "Multiple Categories"],
        },
      },
      tags: ["Physics", "Mechanics"],
      application: "opened",
    },
  ];
  const competitionsList = competitions.map((competition, i) => {
    const text = competition.text[language];

    return (
      <div className="opp-card" key={i}>
        <div className="opp-top">
          <span className="opp-cat">{text.cat}</span>
          <span className="match">{text.badge}</span>
        </div>
        <h3>{competition.name}</h3>
        <p
          style={{
            fontSize: "13.5px",
            color: "var(--ink-soft)",
            margin: 0,
          }}
        >
          {text.desc}
        </p>
        <div className="opp-meta">
          {text.meta.map((m, i) => {
            return <span key={i}>{m}</span>;
          })}
        </div>

        <div className="tag-row">
          {competition.tags.map((tag, i) => {
            return (
              <span className="tag" key={i}>
                {tag}
              </span>
            );
          })}
        </div>

        <div className="opp-actions">
          <a
            href={competition.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            id="chemx-visit"
          >
            {competition.application === "opened"
              ? t.competitions.apply
              : t.competitions.visit}
          </a>

          {/* <a className="btn btn-ghost" id="chemx-save">
            {t.competitions.save}
          </a> */}
        </div>
      </div>
    );
  });
  return <>{competitionsList}</>;
}
