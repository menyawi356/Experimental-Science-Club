import "../styles/admin.css";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NavLink, Outlet } from "react-router-dom";
import useLanguage from "../hooks/useLanguage.js";
import Logo from "../Svgs/Logo.svg.jsx";
export default function AdminDashboard() {
  const { t, language } = useLanguage();
  const adminText = t.admin;
  const isRTL = language === "ar";
  const [isNavigationOpen, setIsNavigationOpen] = useState(true);
  const AdminPages = [
    {
      name: adminText.nav.statistics,
      path: "/Admin-dashboard/statistics",
    },
    {
      name: adminText.nav.reviewPublishedPapers,
      path: "/Admin-dashboard/review-published-papers",
    },
    // {
    //   name: adminText.nav.receivedContacts,
    //   path: "/Admin-dashboard/received-contacts",
    // },
  ];
  return (
    <main className="admin-dashboard">
      <button
        type="button"
        className="admin-navigation__toggle"
        style={{
          transform: isRTL ? "scaleX(-1)" : "scaleX(1)",
        }}
        onClick={() => setIsNavigationOpen((prev) => !prev)}
      >
        <motion.span
          animate={{
            rotate: isNavigationOpen ? 0 : 180,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          ‹
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isNavigationOpen && (
          <motion.nav
            className="admin-navigation"
            initial={{
              x: isRTL ? "100%" : "-100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: isRTL ? "100%" : "-100%",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <div className="admin-navigation__content">
              <div className="admin-navigation__header logo">
                <Logo />
                <span id="brand-text">{t.brand}</span>
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
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <Outlet />
    </main>
  );
}
