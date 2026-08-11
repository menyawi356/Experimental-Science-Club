import React, { useState } from 'react';
import Modal from './Modal.jsx';
import { useLanguage } from '../LanguageContext.jsx';

export default function IdeaSubmissionModal({ onClose }) {
  const { t } = useLanguage();
  const f = t.ideaForm;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: 'event', title: '', description: '' });

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Modal onClose={onClose}>
      {submitted ? (
        <div className="modal-success">
          <div className="success-icon">✓</div>
          <h3>{f.successTitle}</h3>
          <p>{f.successBody}</p>
          <a className="btn btn-primary" onClick={onClose}>{f.close}</a>
        </div>
      ) : (
        <>
          <h3 className="modal-heading">{f.heading}</h3>
          <p className="modal-sub">{f.subheading}</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder={f.name} required value={form.name} onChange={update('name')} />
            <input type="email" placeholder={f.email} required value={form.email} onChange={update('email')} />
            <span className="form-label">{f.type}</span>
            <select value={form.type} onChange={update('type')}>
              <option value="event">{f.typeEvent}</option>
              <option value="hackathon">{f.typeHackathon}</option>
              <option value="competition">{f.typeCompetition}</option>
            </select>
            <input type="text" placeholder={f.ideaTitle} required value={form.title} onChange={update('title')} />
            <textarea placeholder={f.description} required value={form.description} onChange={update('description')} />
            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>{f.submit}</button>
          </form>
        </>
      )}
    </Modal>
  );
}
