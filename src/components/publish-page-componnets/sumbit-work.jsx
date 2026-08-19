import useLanguage from "../../hooks/useLanguage.js";
import useOpenJoinModal from "../../hooks/useOpenJoinModal.js";
import useAuth from "../../hooks/useAuth.js";
import useChangeModal from "../../hooks/useChangeModal.js";
import { useSearchParams } from "react-router-dom";
export default function SubmitWork() {
  const openJoinModal = useOpenJoinModal();
  const { auth } = useAuth();
  const { setShowedModal } = useChangeModal();
  const { t } = useLanguage();
  const publishText = t.publishing;
  const [, setPdfType] = useSearchParams();
  const handlePublish = (type) => {
    if (!auth.isAuth) {
      openJoinModal();
      return;
    }
    setPdfType({ type });
    setShowedModal({ modal: "publish", data: {} });
  };
  return (
    <div id="pub-tab-submit" className="pub-subtab-view active">
      <div className="pub-grid">
        <div className="pub-card">
          <div>
            <h3 id="pub-articles-title">{publishText.articlesTitle}</h3>

            <p id="pub-articles-desc">{publishText.articlesDesc}</p>
          </div>

          <a
            className="btn btn-primary"
            id="pub-articles-btn"
            onClick={() => {
              handlePublish("article");
            }}
          >
            {publishText.publish}
          </a>
        </div>

        <div className="pub-card">
          <div>
            <h3 id="pub-pdfs-title">{publishText.pdfsTitle}</h3>

            <p id="pub-pdfs-desc">{publishText.pdfsDesc}</p>
          </div>

          <a
            className="btn btn-primary"
            id="pub-pdfs-btn"
            onClick={() => {
              handlePublish("pdf");
            }}
          >
            {publishText.publish}
          </a>
        </div>

        <div className="pub-card">
          <div>
            <h3 id="pub-papers-title">{publishText.papersTitle}</h3>

            <p id="pub-papers-desc">{publishText.papersDesc}</p>
          </div>

          <a
            className="btn btn-primary"
            id="pub-papers-btn"
            onClick={() => {
              handlePublish("paper");
            }}
          >
            {publishText.publish}
          </a>
        </div>
      </div>
    </div>
  );
}
