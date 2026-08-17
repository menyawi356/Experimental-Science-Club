import { useLanguage } from "../global/languageProvider.jsx";
import PublishingSVG from "../Svgs/publishing.svg";

export default function Publishing() {
  const { t } = useLanguage();
  const publishText = t.publishing;
  return (
    <main id="page-publishing" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="pub-title">{publishText.title}</h2>

            <p className="lede" id="pub-lede">
              {publishText.lede}
            </p>
          </div>

          <div className="sub-tabs">
            <button className="tab-btn active" id="tab-btn-submit">
              ✦ <span id="pub-tab-submit-label">{publishText.submitTab}</span>
            </button>

            <button className="tab-btn" id="tab-btn-explore">
              🔍{" "}
              <span id="pub-tab-explore-label">{publishText.exploreTab}</span>
            </button>
          </div>

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

          <div id="pub-tab-explore" className="pub-subtab-view">
            <div className="archive-search">
              <input
                type="text"
                id="pubSearch"
                placeholder={publishText.search}
              />

              <div className="filter-pills">
                <span className="pill active" id="filter-all">
                  {publishText.all}
                </span>

                <span className="pill" id="filter-paper">
                  {publishText.paper}
                </span>

                <span className="pill" id="filter-article">
                  {publishText.article}
                </span>

                <span className="pill" id="filter-pdf">
                  {publishText.pdf}
                </span>
              </div>
            </div>

            <div className="archive-list" id="archiveList"></div>
          </div>
        </div>
      </div>

      <div className="bg-symbol-stage" data-symbol="publishing">
        <div className="symbol-3d-container">{<PublishingSVG />}</div>
        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
