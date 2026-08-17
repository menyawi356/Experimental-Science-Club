import { useLanguage } from "../../global/languageProvider.jsx";

export default function SubmitWork() {
  const { t } = useLanguage();
  const publishText = t.publishing;
  return (
    <div id="pub-tab-submit" className="pub-subtab-view active">
      <div className="pub-grid">
        <div className="pub-card">
          <div>
            <h3 id="pub-articles-title">{publishText.articlesTitle}</h3>

            <p id="pub-articles-desc">{publishText.articlesDesc}</p>
          </div>

          <a className="btn btn-primary" id="pub-articles-btn">
            {publishText.publish}
          </a>
        </div>

        <div className="pub-card">
          <div>
            <h3 id="pub-pdfs-title">{publishText.pdfsTitle}</h3>

            <p id="pub-pdfs-desc">{publishText.pdfsDesc}</p>
          </div>

          <a className="btn btn-primary" id="pub-pdfs-btn">
            {publishText.publish}
          </a>
        </div>

        <div className="pub-card">
          <div>
            <h3 id="pub-papers-title">{publishText.papersTitle}</h3>

            <p id="pub-papers-desc">{publishText.papersDesc}</p>
          </div>

          <a className="btn btn-primary" id="pub-papers-btn">
            {publishText.publish}
          </a>
        </div>
      </div>
    </div>
  );
}
