import useLanguage from "../../hooks/useLanguage.js";

export default function ContactCard({ contact }) {
  const { t } = useLanguage();

  const cardText = t.admin.contacts.card;

  const date = new Date(contact.createdAt)
    .toLocaleDateString("en-GB")
    .replaceAll("/", "/");

  return (
    <article
      className={`admin-contact-card admin-contact-card--${contact.status}`}
    >
      {/* ========================================
          Header
          ======================================== */}

      <header className="admin-contact-card__header">
        <div className="admin-contact-card__meta">
          <span className="admin-contact-card__label">{cardText.contact}</span>

          <span className="admin-contact-card__date">{date}</span>
        </div>

        <span
          className={`admin-contact-card__status admin-contact-card__status--${contact.status}`}
        >
          {cardText.status[contact.status]}
        </span>
      </header>

      {/* ========================================
          Sender
          ======================================== */}

      <div className="admin-contact-card__sender">
        <strong className="admin-contact-card__name">{contact.name}</strong>

        <a
          href={`mailto:${contact.email}`}
          className="admin-contact-card__email"
        >
          {contact.email}
        </a>
      </div>

      {/* ========================================
          Message
          ======================================== */}

      <div className="admin-contact-card__message">
        <h3 className="admin-contact-card__subject">{contact.subject}</h3>

        <p className="admin-contact-card__content">{contact.message}</p>
      </div>

      {/* ========================================
          Actions
          ======================================== */}

      <footer className="admin-contact-card__actions">
        <button
          type="button"
          className="admin-contact-card__action admin-contact-card__action--view"
        >
          {cardText.actions.view}
        </button>

        {contact.status === "waiting" ? (
          <button
            type="button"
            className="admin-contact-card__action admin-contact-card__action--resolve"
          >
            {cardText.actions.resolve}
          </button>
        ) : (
          <button
            type="button"
            className="admin-contact-card__action admin-contact-card__action--reopen"
          >
            {cardText.actions.reopen}
          </button>
        )}
      </footer>
    </article>
  );
}
