import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext.jsx';
import BackgroundStage from '../BackgroundStage.jsx';
import { CompetitionsSymbol } from '../Symbols.jsx';
import IdeaSubmissionModal from '../IdeaSubmissionModal.jsx';

export default function Competitions({ active }) {
  const { t } = useLanguage();
  const c = t.competitions;
  const [ideaOpen, setIdeaOpen] = useState(false);

  return (
    <main className={`page-view${active ? ' active' : ''}`}>
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2>{c.title}</h2>
            <p className="lede">{c.lede}</p>
          </div>

          <div className="opp-grid">
            <div className="opp-card">
              <div className="opp-top"><span className="opp-cat">{c.chemx.cat}</span><span className="match">{c.chemx.badge}</span></div>
              <h3>{c.chemx.title}</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', margin: 0 }}>{c.chemx.desc}</p>
              <div className="opp-meta"><span>{c.chemx.meta1}</span><span>{c.chemx.meta2}</span></div>
              <div className="tag-row"><span className="tag">Chemistry</span><span className="tag">STEM October</span></div>
              <div className="opp-actions">
                <a href="https://chemx.octchemistryclub.com/" target="_blank" rel="noreferrer" className="btn btn-primary">{c.visitWebsite}</a>
                <a className="btn btn-ghost">{c.save}</a>
              </div>
            </div>

            <div className="opp-card">
              <div className="opp-top"><span className="opp-cat">{c.pharaohs.cat}</span><span className="match">{c.pharaohs.badge}</span></div>
              <h3>{c.pharaohs.title}</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', margin: 0 }}>{c.pharaohs.desc}</p>
              <div className="opp-meta"><span>{c.pharaohs.meta1}</span><span>{c.pharaohs.meta2}</span></div>
              <div className="tag-row"><span className="tag">Physics</span><span className="tag">Mechanics</span></div>
              <div className="opp-actions">
                <a href="#" className="btn btn-primary">{c.applyNow}</a>
                <a className="btn btn-ghost">{c.save}</a>
              </div>
            </div>

            <div className="opp-card idea-card">
              <div className="opp-top"><span className="opp-cat">{c.ideaCard.cat}</span></div>
              <h3>{c.ideaCard.title}</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', margin: 0 }}>{c.ideaCard.desc}</p>
              <div className="opp-actions">
                <a className="btn btn-primary" onClick={() => setIdeaOpen(true)}>{c.ideaCard.cta}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackgroundStage symbolKey="competitions">
        <CompetitionsSymbol />
      </BackgroundStage>

      {ideaOpen && <IdeaSubmissionModal onClose={() => setIdeaOpen(false)} />}
    </main>
  );
}
