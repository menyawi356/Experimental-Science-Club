import "../../styles/statistics.css";

export default function Statistics() {
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
    { name: "General", messages: 1842 },
    { name: "Research", messages: 1264 },
    { name: "Help & Support", messages: 873 },
    { name: "Community", messages: 642 },
    { name: "Announcements", messages: 318 },
  ];

  const contacts = {
    received: 186,
    resolved: 142,
    waiting: 44,
  };

  const totalPapers = papers.pending + papers.approved + papers.rejected;

  return (
    <section className="admin-statistics">
      {/* ========================================
          Users
          ======================================== */}

      <section className="statistics-section statistics-section--users">
        <div className="statistics-section__header">
          <span className="statistics-section__eyebrow">Overview</span>

          <h2 className="statistics-section__title">Users</h2>
        </div>

        <div className="statistics-users">
          <article className="statistics-card statistics-card--total">
            <div className="statistics-card__top">
              <span className="statistics-card__label">Total Users</span>

              <span className="statistics-card__index">01</span>
            </div>

            <strong className="statistics-card__value">
              {users.total.toLocaleString()}
            </strong>

            <span className="statistics-card__caption">
              Registered accounts
            </span>
          </article>

          <div className="statistics-users__breakdown">
            <article className="statistics-card statistics-card--admins">
              <span className="statistics-card__label">Admins</span>

              <strong className="statistics-card__value">{users.admins}</strong>

              <span className="statistics-card__caption">
                Administrative accounts
              </span>
            </article>

            <article className="statistics-card statistics-card--normal-users">
              <span className="statistics-card__label">Normal Users</span>

              <strong className="statistics-card__value">
                {users.normalUsers.toLocaleString()}
              </strong>

              <span className="statistics-card__caption">Regular accounts</span>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================
          Papers
          ======================================== */}

      <section className="statistics-section statistics-section--papers">
        <div className="statistics-section__header">
          <span className="statistics-section__eyebrow">Publications</span>

          <h2 className="statistics-section__title">Papers</h2>
        </div>

        <div className="statistics-papers">
          <div className="statistics-papers__summary">
            <span className="statistics-card__label">Total Papers</span>

            <strong className="statistics-papers__total">{totalPapers}</strong>

            <span className="statistics-card__caption">
              Across all review states
            </span>
          </div>

          <div className="statistics-papers__states">
            <article className="statistics-paper-state statistics-paper-state--pending">
              <span className="statistics-paper-state__dot" />

              <div>
                <span className="statistics-paper-state__label">Pending</span>

                <strong>{papers.pending}</strong>
              </div>
            </article>

            <article className="statistics-paper-state statistics-paper-state--approved">
              <span className="statistics-paper-state__dot" />

              <div>
                <span className="statistics-paper-state__label">Approved</span>

                <strong>{papers.approved}</strong>
              </div>
            </article>

            <article className="statistics-paper-state statistics-paper-state--rejected">
              <span className="statistics-paper-state__dot" />

              <div>
                <span className="statistics-paper-state__label">Rejected</span>

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
          <span className="statistics-section__eyebrow">Activity</span>

          <h2 className="statistics-section__title">Chat Rooms</h2>
        </div>

        <div className="statistics-chat">
          <div className="statistics-chat__intro">
            <span className="statistics-card__label">Total Messages</span>

            <strong className="statistics-chat__total">
              {chatRooms
                .reduce((total, room) => total + room.messages, 0)
                .toLocaleString()}
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
          <span className="statistics-section__eyebrow">Support</span>

          <h2 className="statistics-section__title">Contacts</h2>
        </div>

        <div className="statistics-contacts">
          <div className="statistics-contacts__main">
            <span className="statistics-card__label">Total Received</span>

            <strong className="statistics-contacts__total">
              {contacts.received}
            </strong>

            <span className="statistics-card__caption">
              Contact requests received
            </span>
          </div>

          <div className="statistics-contacts__statuses">
            <article className="statistics-contact-status statistics-contact-status--resolved">
              <div className="statistics-contact-status__indicator" />

              <div className="statistics-contact-status__content">
                <span>Resolved</span>
                <strong>{contacts.resolved}</strong>
              </div>
            </article>

            <article className="statistics-contact-status statistics-contact-status--waiting">
              <div className="statistics-contact-status__indicator" />

              <div className="statistics-contact-status__content">
                <span>Waiting</span>
                <strong>{contacts.waiting}</strong>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}
