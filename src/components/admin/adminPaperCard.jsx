import getPaperLink from "../../API/paperLink.js";
import useLanguage from "../../hooks/useLanguage.js";
export default function AdminPublicationCard({ publication }) {
  const { t } = useLanguage();
  const { paper, user } = publication;
  const cardText = t.admin.paperReview.card;
  const authors = paper.authors.join(", ");
  const date = paper.date.split("T")[0].replaceAll("-", "/");
  const stateText = cardText.states[paper.state];
  const handleView = async () => {
    const { url } = await getPaperLink(publication.paper._id);
    window.open(url, "_blank");
  };
  return (
    <article className="admin-paper-card">
      {/* ========================================
          Card Header
          ======================================== */}
      <div className="admin-paper-card__header">
        <div className="admin-paper-card__meta">
          <span className="admin-paper-card__category">{paper.cat}</span>

          <span className="admin-paper-card__date">{date}</span>
        </div>

        <span
          className={`admin-paper-card__state admin-paper-card__state--${paper.state}`}
        >
          {stateText}
        </span>
      </div>

      {/* ========================================
          Paper Information
          ======================================== */}
      <div className="admin-paper-card__body">
        <h3 className="admin-paper-card__title">{paper.title}</h3>

        <div className="admin-paper-card__authors">{authors}</div>

        <p className="admin-paper-card__abstract">{paper.abstract}</p>

        <div className="admin-paper-card__tags">
          {paper.tags?.map((tag, index) => (
            <span className="admin-paper-card__tag" key={`${tag}-${index}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ========================================
          Uploader Information
          ======================================== */}
      <div className="admin-paper-card__uploader">
        <div className="admin-paper-card__uploader-info">
          <span className="admin-paper-card__uploader-label">
            {cardText.uploadedBy}
          </span>

          <strong className="admin-paper-card__uploader-name">
            {user.name}
          </strong>

          <span className="admin-paper-card__uploader-email">{user.email}</span>
        </div>

        <span className="admin-paper-card__uploader-id">
          {cardText.id}: {user.id}
        </span>
      </div>

      {/* ========================================
          Actions
          ======================================== */}
      <div className="admin-paper-card__actions">
        <button
          type="button"
          className="admin-paper-card__action admin-paper-card__action--view"
          onClick={handleView}
        >
          {cardText.actions.view}
        </button>

        <button
          type="button"
          className="admin-paper-card__action admin-paper-card__action--approve"
        >
          {cardText.actions.approve}
        </button>

        <button
          type="button"
          className="admin-paper-card__action admin-paper-card__action--reject"
        >
          {cardText.actions.reject}
        </button>
      </div>
    </article>
  );
}
