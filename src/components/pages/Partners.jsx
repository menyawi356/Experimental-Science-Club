import React from 'react';
import { useLanguage } from '../../LanguageContext.jsx';
import BackgroundStage from '../BackgroundStage.jsx';
import { PartnersSymbol } from '../Symbols.jsx';

function AopsLogoMark() {
  // Simple typographic mark standing in for the AoPS logo.
  // Replace this SVG (or swap in an <img>) with the official AoPS logo asset if you have usage rights.
  return (
    <svg className="aops-logo" width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="70" height="70" rx="16" fill="var(--indigo)" />
      <rect x="1" y="1" width="70" height="70" rx="16" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
      <text x="36" y="43" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontWeight="700" fontSize="20" fill="var(--paper)">AoPS</text>
    </svg>
  );
}

export default function Partners({ active }) {
  const { t } = useLanguage();
  const p = t.partners;

  return (
    <main className={`page-view${active ? ' active' : ''}`}>
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2>{p.title}</h2>
            <p className="lede">{p.lede}</p>
          </div>

          <div className="partner-feature">
            <div className="partner-logo-row">
              <AopsLogoMark />
              <div>
                <h3>{p.aopsName}</h3>
                <div className="subtitle">{p.aopsFull}</div>
              </div>
            </div>
            <p className="desc">{p.aopsDesc}</p>
            <div>
              <a href="https://artofproblemsolving.com/" target="_blank" rel="noreferrer" className="btn btn-primary">{p.visitBtn}</a>
            </div>
          </div>
        </div>
      </div>

      <BackgroundStage symbolKey="partners">
        <PartnersSymbol />
      </BackgroundStage>
    </main>
  );
}
