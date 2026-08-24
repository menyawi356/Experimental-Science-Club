import "../../styles/statistics.css";

import useLanguage from "../../hooks/useLanguage.js";

export default function Statistics() {
  const { t } = useLanguage();

  const statisticsText = t.admin.statistics;

  const users = {
    total: 1250,
    admins: 12,
    normalUsers: 1238,
  };

  const papers = {
    pending: 47,
    approved: 326,
    rejected: 28,
  };

  const chatRooms = [
    { name: statisticsText.chat.rooms.general, messages: 1842 },
    { name: statisticsText.chat.rooms.research, messages: 1264 },
    { name: statisticsText.chat.rooms.helpSupport, messages: 873 },
    { name: statisticsText.chat.rooms.community, messages: 642 },
    { name: statisticsText.chat.rooms.announcements, messages: 318 },
  ];

  const contacts = {
    received: 186,
    resolved: 142,
    waiting: 44,
  };

  const totalPapers = papers.pending + papers.approved + papers.rejected;

  const totalMessages = chatRooms.reduce(
    (total, room) => total + room.messages,
    0,
  );

  return (
    <section className="admin-statistics">
      {/* ========================================
          Users
          ======================================== */}

      <section className="statistics-section statistics-section--users">
        <div className="statistics-section__header">
          <span className="statistics-section__eyebrow">
            {statisticsText.users.eyebrow}
          </span>

          <h2 className="statistics-section__title">
            {statisticsText.users.title}
          </h2>
        </div>

        <div className="statistics-users">
          <article className="statistics-card statistics-card--total">
            <div className="statistics-card__top">
              <span className="statistics-card__label">
                {statisticsText.users.total}
              </span>

              <span className="statistics-card__index">01</span>
            </div>

            <strong className="statistics-card__value">
              {users.total.toLocaleString()}
            </strong>

            <span className="statistics-card__caption">
              {statisticsText.users.registeredAccounts}
            </span>
          </article>

          <div className="statistics-users__breakdown">
            <article className="statistics-card statistics-card--admins">
              <span className="statistics-card__label">
                {statisticsText.users.admins}
              </span>

              <strong className="statistics-card__value">{users.admins}</strong>

              <span className="statistics-card__caption">
                {statisticsText.users.administrativeAccounts}
              </span>
            </article>

            <article className="statistics-card statistics-card--normal-users">
              <span className="statistics-card__label">
                {statisticsText.users.normalUsers}
              </span>

              <strong className="statistics-card__value">
                {users.normalUsers.toLocaleString()}
              </strong>

              <span className="statistics-card__caption">
                {statisticsText.users.regularAccounts}
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================
          Papers
          ======================================== */}

      <section className="statistics-section statistics-section--papers">
        <div className="statistics-section__header">
          <span className="statistics-section__eyebrow">
            {statisticsText.papers.eyebrow}
          </span>

          <h2 className="statistics-section__title">
            {statisticsText.papers.title}
          </h2>
        </div>

        <div className="statistics-papers">
          <div className="statistics-papers__summary">
            <span className="statistics-card__label">
              {statisticsText.papers.total}
            </span>

            <strong className="statistics-papers__total">{totalPapers}</strong>

            <span className="statistics-card__caption">
              {statisticsText.papers.allReviewStates}
            </span>
          </div>

          <div className="statistics-papers__states">
            <article className="statistics-paper-state statistics-paper-state--pending">
              <span className="statistics-paper-state__dot" />

              <div>
                <span className="statistics-paper-state__label">
                  {statisticsText.papers.pending}
                </span>

                <strong>{papers.pending}</strong>
              </div>
            </article>

            <article className="statistics-paper-state statistics-paper-state--approved">
              <span className="statistics-paper-state__dot" />

              <div>
                <span className="statistics-paper-state__label">
                  {statisticsText.papers.approved}
                </span>

                <strong>{papers.approved}</strong>
              </div>
            </article>

            <article className="statistics-paper-state statistics-paper-state--rejected">
              <span className="statistics-paper-state__dot" />

              <div>
                <span className="statistics-paper-state__label">
                  {statisticsText.papers.rejected}
                </span>

                <strong>{papers.rejected}</strong>
              </div>
            </article>
          </div>

          <div className="statistics-papers__bar">
            <span
              className="statistics-papers__bar-segment statistics-papers__bar-segment--pending"
              style={{
                width: `${(papers.pending / totalPapers) * 100}%`,
              }}
            />

            <span
              className="statistics-papers__bar-segment statistics-papers__bar-segment--approved"
              style={{
                width: `${(papers.approved / totalPapers) * 100}%`,
              }}
            />

            <span
              className="statistics-papers__bar-segment statistics-papers__bar-segment--rejected"
              style={{
                width: `${(papers.rejected / totalPapers) * 100}%`,
              }}
            />
          </div>
        </div>
      </section>

      {/* ========================================
          Chat
          ======================================== */}

      <section className="statistics-section statistics-section--chat">
        <div className="statistics-section__header">
          <span className="statistics-section__eyebrow">
            {statisticsText.chat.eyebrow}
          </span>

          <h2 className="statistics-section__title">
            {statisticsText.chat.title}
          </h2>
        </div>

        <div className="statistics-chat">
          <div className="statistics-chat__intro">
            <span className="statistics-card__label">
              {statisticsText.chat.totalMessages}
            </span>

            <strong className="statistics-chat__total">
              {totalMessages.toLocaleString()}
            </strong>
          </div>

          <div className="statistics-chat__rooms">
            {chatRooms.map((room, index) => (
              <article className="statistics-chat-room" key={room.name}>
                <span className="statistics-chat-room__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="statistics-chat-room__name">{room.name}</span>

                <strong className="statistics-chat-room__messages">
                  {room.messages.toLocaleString()}
                </strong>

                <span className="statistics-chat-room__arrow">→</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          Contacts
          ======================================== */}

      <section className="statistics-section statistics-section--contacts">
        <div className="statistics-section__header">
          <span className="statistics-section__eyebrow">
            {statisticsText.contacts.eyebrow}
          </span>

          <h2 className="statistics-section__title">
            {statisticsText.contacts.title}
          </h2>
        </div>

        <div className="statistics-contacts">
          <div className="statistics-contacts__main">
            <span className="statistics-card__label">
              {statisticsText.contacts.totalReceived}
            </span>

            <strong className="statistics-contacts__total">
              {contacts.received}
            </strong>

            <span className="statistics-card__caption">
              {statisticsText.contacts.receivedDescription}
            </span>
          </div>

          <div className="statistics-contacts__statuses">
            <article className="statistics-contact-status statistics-contact-status--resolved">
              <div className="statistics-contact-status__indicator" />

              <div className="statistics-contact-status__content">
                <span>{statisticsText.contacts.resolved}</span>
                <strong>{contacts.resolved}</strong>
              </div>
            </article>

            <article className="statistics-contact-status statistics-contact-status--waiting">
              <div className="statistics-contact-status__indicator" />

              <div className="statistics-contact-status__content">
                <span>{statisticsText.contacts.waiting}</span>
                <strong>{contacts.waiting}</strong>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}
