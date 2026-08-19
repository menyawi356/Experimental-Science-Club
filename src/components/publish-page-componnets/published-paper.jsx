import useLanguage from "../../hooks/useLanguage";

export default function PublicationCard({ p }) {
  const authors = p.authors.join(", ");
  const date = p.date.split("T")[0].replaceAll("-", "/");
  const { t } = useLanguage();
  const cardText = t.PublicationCard;
  return (
    <div className="pub-archive-card">
      <div className="pub-meta-top">
        <span className="opp-cat">{p.cat || "بحث علمي"}</span>

        <span className="pub-date">
          {date || new Date().toLocaleDateString("ar-EG")}
        </span>
      </div>
      <h3>{p.title}</h3>
      <div className="pub-author">{authors} </div>
      <p className="pub-abstract">{p.abstract}</p>
      <div className="tag-row" style={{ marginTop: "12px" }}>
        {p.tags?.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
      <div className="opp-actions" style={{ marginTop: "14px" }}>
        <a
          className="btn btn-ghost"
          style={{
            padding: "8px 14px",
            fontSize: "12.5px",
          }}
        >
          {cardText.read}
        </a>
      </div>
    </div>
  );
}
