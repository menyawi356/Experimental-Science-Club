import { NavLink, Outlet } from "react-router-dom";
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
            <NavLink
              to="submit-work"
              className={`tab-btn ${({ isActive }) => {
                if (isActive) {
                  return "active  ";
                }
              }}`}
            >
              ✦ <span id="pub-tab-submit-label">{publishText.submitTab}</span>
            </NavLink>

            <NavLink
              to="explore-published"
              className={`tab-btn ${({ isActive }) => {
                if (isActive) {
                  return "active  ";
                }
              }}`}
            >
              🔍{" "}
              <span id="pub-tab-explore-label">{publishText.exploreTab}</span>
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>

      <div className="bg-symbol-stage" data-symbol="publishing">
        <div className="symbol-3d-container">{<PublishingSVG />}</div>
        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
