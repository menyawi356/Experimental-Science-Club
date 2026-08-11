import React from 'react';
import { useLanguage } from '../../LanguageContext.jsx';
import BackgroundStage from '../BackgroundStage.jsx';
import { AboutSymbol } from '../Symbols.jsx';

export default function About({ active }) {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <main className={`page-view${active ? ' active' : ''}`}>
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2>{a.title}</h2>
            <p className="lede">{a.lede}</p>
          </div>
          <p style={{ color: 'var(--ink-soft)', fontSize: '16px', lineHeight: 1.7, marginBottom: '30px' }}>
            {a.body}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              [a.point1Title, a.point1Body],
              [a.point2Title, a.point2Body],
              [a.point3Title, a.point3Body],
            ].map(([title, body]) => (
              <div key={title} style={{
                background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius)',
                padding: '18px 20px', boxShadow: 'var(--card-shadow)', backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ margin: '0 0 6px', fontSize: '16px' }}>{title}</h3>
                <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: '13.5px' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BackgroundStage symbolKey="about">
        <AboutSymbol />
      </BackgroundStage>
    </main>
  );
}
