import { useLanguage } from "../../global/languageProvider.jsx";

export default function ExplorePublished() {
  const { t } = useLanguage();
  const publishText = t.publishing;
  return (
    <div id="pub-tab-explore" className="pub-subtab-view active">
      <div className="archive-search">
        <input type="text" id="pubSearch" placeholder={publishText.search} />

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
  );
}
