import updatePaperState from "../../API/admin/updatePaperState.js";
import getPaperLink from "../../API/paperLink.js";
import useLanguage from "../../hooks/useLanguage.js";
import useChangeModal from "../../hooks/useChangeModal.js";

export default function AdminPublicationCard({
  publication,
  index,
  setPublications,
}) {
  const { t } = useLanguage();
  const { paper, user } = publication;
  const cardText = t.admin.paperReview.card;
  const authors = paper.authors.join(", ");
  const date = paper.date.split("T")[0].replaceAll("-", "/");
  const stateText = cardText.states[paper.state];
  const { setShowedModal } = useChangeModal();

  const handleView = async () => {
    try {
      const response = await getPaperLink(publication.paper._id);
      if (response.ok) {
        window.open(response.url, "_blank");
      } else {
        setShowedModal({
          modal: "error",
          data: {
            errorCode: response.errorCode,
            to: "none",
          },
        });
      }
    } catch (err) {
      setShowedModal({
        modal: "error",
        data: {
          errorCode: err.errorCode,
          to: "none",
        },
      });
    }
  };
  const handleUpdatePaperState = async (state) => {
    try {
      const response = await updatePaperState(paper._id, state);
      if (response.ok) {
        setPublications((prev) => {
          const newPulications = [...prev];
          newPulications[index].paper = response.paper;
          return newPulications;
        });
      } else {
        setShowedModal({
          modal: "error",
          data: {
            errorCode: response.errorCode,
            to: "none",
          },
        });
      }
    } catch (err) {
      setShowedModal({
        modal: "error",
        data: {
          errorCode: err.errorCode,
          to: "none",
        },
      });
    }
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
          onClick={() => {
            handleUpdatePaperState("approved");
          }}
        >
          {cardText.actions.approve}
        </button>

        <button
          type="button"
          className="admin-paper-card__action admin-paper-card__action--reject"
          onClick={() => {
            handleUpdatePaperState("rejected");
          }}
        >
          {cardText.actions.reject}
        </button>
      </div>
    </article>
  );
}
