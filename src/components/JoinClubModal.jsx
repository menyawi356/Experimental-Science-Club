import React, { useState } from 'react';
import Modal from './Modal.jsx';
import { useLanguage } from '../LanguageContext.jsx';

export default function JoinClubModal({ onClose }) {
  const { t } = useLanguage();
  const f = t.joinForm;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', age: '', field: '', message: '' });

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
            <input type="text" placeholder={f.age} value={form.age} onChange={update('age')} />
            <input type="text" placeholder={f.fieldPlaceholder} value={form.field} onChange={update('field')} />
            <textarea placeholder={f.message} value={form.message} onChange={update('message')} />
            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>{f.submit}</button>
          </form>
        </>
      )}
    </Modal>
  );
}
