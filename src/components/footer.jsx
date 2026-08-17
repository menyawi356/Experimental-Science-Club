import { useLanguage } from "../global/languageProvider";
export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <div className="wrap">
        <div className="foot-bottom">
          <span
            className="logo"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            id="footer-brand"
          >
            {t.brand}
          </span>

          <span id="footer-rights">{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
