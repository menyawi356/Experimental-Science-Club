import { NavLink, Outlet } from "react-router-dom";
import useLanguage from "../hooks/useLanguage.js";
export default function AdminDashboard() {
  const { t } = useLanguage();
  const adminText = t.admin;
  const AdminPages = [
    {
      name: adminText.nav.statistics,
      path: "/Admin-dashboard/statistics",
    },
    {
      name: adminText.nav.reviewPublishedPapers,
      path: "/Admin-dashboard/review-published-papers",
    },
    {
      name: adminText.nav.receivedContacts,
      path: "/Admin-dashboard/received-contacts",
    },
  ];
  return (
    <main className="admin-dashboard">
      <nav className="admin-navigation">
        <div className="admin-navigation__header">
          <h2 className="admin-navigation__title">{adminText.title}</h2>
        </div>
        <div className="admin-navigation__links">
          {AdminPages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              className={({ isActive }) =>
                `admin-navigation__link ${
                  isActive ? "admin-navigation__link--active" : ""
                }`
              }
            >
              <span className="admin-navigation__link-text">
                {page.name}
              </span>
            </NavLink>
          ))}
        </div>
      </nav>
      <Outlet />
    </main>
  );
}