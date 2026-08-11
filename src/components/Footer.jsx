import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <div className="wrap">
        <div className="foot-bottom">
          <span className="logo" style={{ fontSize: '14px', fontWeight: 'bold' }}>{t.brand.toUpperCase()}</span>
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
