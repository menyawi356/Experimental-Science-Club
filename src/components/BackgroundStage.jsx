import React, { useRef, useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function BackgroundStage({ symbolKey, children }) {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);

  const sentences = t.symbolKnowledge?.[symbolKey] || [];

  const showNext = () => {
    if (!sentences.length) return;
    setIndex(indexRef.current);
    setVisible(true);
    indexRef.current = (indexRef.current + 1) % sentences.length;
  };

  const hide = () => setVisible(false);

  return (
    <div className="bg-symbol-stage" data-symbol={symbolKey}>
      <div
        className="symbol-3d-container"
        onMouseEnter={showNext}
        onMouseLeave={hide}
        onClick={(e) => { e.stopPropagation(); showNext(); }}
        onTouchStart={(e) => { e.stopPropagation(); showNext(); }}
      >
        {children}
      </div>
      <div className={`sentence-popup${visible ? ' visible' : ''}`} data-counter={sentences.length ? `${index + 1} / ${sentences.length}` : ''}>
        {sentences[index] || ''}
      </div>
    </div>
  );
}
