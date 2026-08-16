import PublishingSVG from "../Svgs/publishing.svg";

export default function Publishing() {
  return (
    <main id="page-publishing" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="pub-title">Publishing Hub</h2>

            <p className="lede" id="pub-lede">
              Submit your scientific discoveries or explore peer-reviewed
              research published by our club community.
            </p>
          </div>

          <div className="sub-tabs">
            <button className="tab-btn active" id="tab-btn-submit">
              ✦ <span id="pub-tab-submit-label">Submit Work</span>
            </button>

            <button className="tab-btn" id="tab-btn-explore">
              🔍 <span id="pub-tab-explore-label">Explore Published</span>
            </button>
          </div>

          <div id="pub-tab-submit" className="pub-subtab-view active">
            <div className="pub-grid">
              <div className="pub-card">
                <div>
                  <h3 id="pub-articles-title">Articles</h3>

                  <p id="pub-articles-desc">
                    Short-form scientific observations and theoretical essays.
                  </p>
                </div>

                <a className="btn btn-primary" id="pub-articles-btn">
                  Publish
                </a>
              </div>

              <div className="pub-card">
                <div>
                  <h3 id="pub-pdfs-title">PDFs</h3>

                  <p id="pub-pdfs-desc">
                    Detailed lab notes and technical documentation files.
                  </p>
                </div>

                <a className="btn btn-primary" id="pub-pdfs-btn">
                  Publish
                </a>
              </div>

              <div className="pub-card">
                <div>
                  <h3 id="pub-papers-title">Research Papers</h3>

                  <p id="pub-papers-desc">
                    Full-length peer-reviewed academic manuscripts.
                  </p>
                </div>

                <a className="btn btn-primary" id="pub-papers-btn">
                  Publish
                </a>
              </div>
            </div>
          </div>

          <div id="pub-tab-explore" className="pub-subtab-view">
            <div className="archive-search">
              <input
                type="text"
                id="pubSearch"
                placeholder="Search title, author, or keyword..."
              />

              <div className="filter-pills">
                <span className="pill active" id="filter-all">
                  All
                </span>

                <span className="pill" id="filter-paper">
                  Research Papers
                </span>

                <span className="pill" id="filter-article">
                  Articles
                </span>

                <span className="pill" id="filter-pdf">
                  PDFs
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
