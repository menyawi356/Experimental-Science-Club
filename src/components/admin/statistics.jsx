import "../../styles/statistics.css";
import useLanguage from "../../hooks/useLanguage.js";
import { useEffect, useState } from "react";
import getStatistics from "../../API/admin/getStatistics.js";
import useChangeModal from "../../hooks/useChangeModal.js";
import useLoader from "../../hooks/useLoader.js";
export default function Statistics() {
  const { t } = useLanguage();
  const statisticsText = t.admin.statistics;
  const [data, setData] = useState({
    users: {
      total: 0,
      admins: 0,
      normalUsers: 0,
    },
    papers: {
      pending: 0,
      approved: 0,
      rejected: 0,
    },
    contacts: {
      received: 0,
      resolved: 0,
      waiting: 0,
    },
  });
  const { startLoader, stopLoader } = useLoader();
  const { setShowedModal } = useChangeModal();
  const { users, contacts, papers } = data;
  useEffect(() => {
    startLoader();
    getStatistics()
      .then((response) => {
        console.log(response);
        if (response.ok) {
          setData(response);
        } else {
          setShowedModal({
            modal: "error",
            data: {
              errorCode: response.errorCode,
              to: "none",
            },
          });
        }
      })
      .catch((response) => {
        setShowedModal({
          modal: "error",
          data: {
            errorCode: response.errorCode,
            to: "none",
          },
        });
      })
      .finally(() => {
        stopLoader();
      });
  }, []);
  const totalPapers = papers.pending + papers.approved + papers.rejected;

  const pendingPercentage =
    totalPapers > 0 ? (papers.pending / totalPapers) * 100 : 0;

  const approvedPercentage =
    totalPapers > 0 ? (papers.approved / totalPapers) * 100 : 0;

  const rejectedPercentage =
    totalPapers > 0 ? (papers.rejected / totalPapers) * 100 : 0;
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
                width: `${pendingPercentage}%`,
              }}
            />

            <span
              className="statistics-papers__bar-segment statistics-papers__bar-segment--approved"
              style={{
                width: `${approvedPercentage}%`,
              }}
            />

            <span
              className="statistics-papers__bar-segment statistics-papers__bar-segment--rejected"
              style={{
                width: `${rejectedPercentage}%`,
              }}
            />
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
