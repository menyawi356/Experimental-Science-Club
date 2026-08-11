import React from 'react';
import { useLanguage } from '../../LanguageContext.jsx';
import BackgroundStage from '../BackgroundStage.jsx';
import { HomeSymbol } from '../Symbols.jsx';

export default function Home({ active, navigate }) {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <main className={`page-view${active ? ' active' : ''}`}>
      <div className="wrap">
        <div className="left-content-zone">
          <div className="eyebrow">{h.eyebrow}</div>
          <h1>{h.titleLine1}<br /><em>{h.titleLine2}</em></h1>
          <p className="lede">{h.lede}</p>
          <div className="hero-btns">
            <a onClick={() => navigate('competitions')} className="btn btn-primary" style={{ padding: '13px 24px' }}>{h.exploreBtn}</a>
            <a onClick={() => navigate('about')} className="btn btn-ghost" style={{ padding: '13px 24px' }}>{h.learnBtn}</a>
          </div>
        </div>
      </div>

      <BackgroundStage symbolKey="home">
        <HomeSymbol />
      </BackgroundStage>
    </main>
  );
}
