import React, { useMemo, useState } from 'react';
import { useLanguage } from '../../LanguageContext.jsx';
import BackgroundStage from '../BackgroundStage.jsx';
import { PublishingSymbol } from '../Symbols.jsx';

export default function Publishing({ active }) {
  const { t } = useLanguage();
  const p = t.publishing;
  const [tab, setTab] = useState('submit');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const archiveItems = useMemo(() => ([
    { cat: 'paper', ...p.items.paper1, actions: [p.readPaper, p.download] },
    { cat: 'article', ...p.items.article1, actions: [p.readArticle] },
    { cat: 'pdf', ...p.items.pdf1, actions: [p.viewPdf] },
  ]), [p]);

  const filtered = archiveItems.filter((item) => {
    const matchesCat = category === 'all' || item.cat === category;
    const text = `${item.title} ${item.author} ${item.abstract}`.toLowerCase();
    const matchesSearch = text.includes(query.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className={`page-view${active ? ' active' : ''}`}>
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2>{p.title}</h2>
            <p className="lede">{p.lede}</p>
          </div>

          <div className="sub-tabs">
            <button className={`tab-btn${tab === 'submit' ? ' active' : ''}`} onClick={() => setTab('submit')}>✦ {p.submitTab}</button>
            <button className={`tab-btn${tab === 'explore' ? ' active' : ''}`} onClick={() => setTab('explore')}>🔍 {p.exploreTab}</button>
          </div>

          {tab === 'submit' && (
            <div className="pub-subtab-view active">
              <div className="pub-grid">
                {[p.articles, p.pdfs, p.papers].map((item) => (
                  <div className="pub-card" key={item.title}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <a className="btn btn-primary">{item.btn}</a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'explore' && (
            <div className="pub-subtab-view active">
              <div className="archive-search">
                <input
                  type="text"
                  placeholder={p.searchPlaceholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="filter-pills">
                  {Object.entries(p.filters).map(([key, label]) => (
                    <span
                      key={key}
                      className={`pill${category === key ? ' active' : ''}`}
                      onClick={() => setCategory(key)}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="archive-list">
                {filtered.map((item) => (
                  <div className="pub-archive-card" key={item.title}>
                    <div className="pub-meta-top">
                      <span className="opp-cat">{item.cat === 'paper' ? p.filters.paper.replace(/s$/, '') : item.cat === 'article' ? p.filters.article.replace(/s$/, '') : p.filters.pdf}</span>
                      <span className="pub-date">{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <div className="pub-author">{item.author}</div>
                    <p className="pub-abstract">{item.abstract}</p>
                    <div className="tag-row" style={{ marginTop: '12px' }}>
                      {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                    </div>
                    <div className="opp-actions" style={{ marginTop: '14px' }}>
                      {item.actions.map((action, i) => (
                        <a key={action} href="#" className={i === 0 ? 'btn btn-primary' : 'btn btn-ghost'} style={{ padding: '8px 14px', fontSize: '12.5px' }}>{action}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <BackgroundStage symbolKey="publishing">
        <PublishingSymbol />
      </BackgroundStage>
    </main>
  );
}
