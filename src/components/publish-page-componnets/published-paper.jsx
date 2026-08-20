import getPaperLink from "../../API/paperLink.js";
import useLanguage from "../../hooks/useLanguage";
import useAuth from "../../hooks/useAuth.js";
import useChangeModal from "../../hooks/useChangeModal.js";
export default function PublicationCard({ p }) {
  const authors = p.authors.join(", ");
  const { auth } = useAuth();
  const { setShowedModal } = useChangeModal();
  const date = p.date.split("T")[0].replaceAll("-", "/");
  const { t } = useLanguage();
  const cardText = t.PublicationCard;
  const handleGetLink = async () => {
    if (auth.isAuth) {
      const response = await getPaperLink(p._id);
      if (response.ok) {
        console.log(response.url);
        window.open(response.url, "_blanck");
      } else {
        const errorCode = response.error;
        setShowedModal({
          modal: "error",
          data: {
            errorCode,
            to: "none",
          },
        });
      }
    } else {
      setShowedModal({ modal: "join", data: {} });
    }
  };
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
          onClick={handleGetLink}
        >
          {cardText.read}
        </a>
      </div>
    </div>
  );
}
