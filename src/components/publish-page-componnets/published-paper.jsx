export default function PublicationCard({ p }) {
  const authors = p.authors.join(", ");
  return (
    <div className="pub-archive-card">
      <div className="pub-meta-top">
        <span className="opp-cat">{p.cat || "بحث علمي"}</span>

        <span className="pub-date">
          {p.date || new Date().toLocaleDateString("ar-EG")}
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
          href="#"
          className="btn btn-ghost"
          style={{
            padding: "8px 14px",
            fontSize: "12.5px",
          }}
        >
          قراءة البحث
        </a>
      </div>
    </div>
  );
}
