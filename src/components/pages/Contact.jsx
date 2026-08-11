import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext.jsx';
import BackgroundStage from '../BackgroundStage.jsx';
import { ContactSymbol } from '../Symbols.jsx';

export default function Contact({ active }) {
  const { t } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(c.sentAlert);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className={`page-view${active ? ' active' : ''}`}>
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2>{c.title}</h2>
            <p className="lede">{c.lede}</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder={c.name} required value={form.name} onChange={update('name')} />
            <input type="email" placeholder={c.email} required value={form.email} onChange={update('email')} />
            <input type="text" placeholder={c.subject} value={form.subject} onChange={update('subject')} />
            <textarea placeholder={c.message} required value={form.message} onChange={update('message')} />
            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>{c.send}</button>
          </form>
        </div>
      </div>

      <BackgroundStage symbolKey="contact">
        <ContactSymbol />
      </BackgroundStage>
    </main>
  );
}
