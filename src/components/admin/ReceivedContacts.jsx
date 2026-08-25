import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import "../../styles/contacts.css"
import useLanguage from "../../hooks/useLanguage.js";
import ContactCard from "./ContactCard.jsx";

export default function ReceivedContacts() {
  const { t } = useLanguage();

  const [filter, setFilter] = useSearchParams();
  const [search, setSearch] = useState("");

  const contacts = [
    {
      _id: "contact-001",
      name: "Ahmed Mohamed",
      email: "ahmed.mohamed@example.com",
      subject: "Question about publishing",
      message:
        "I wanted to ask about the requirements and process for publishing a research paper on the platform.",
      status: "waiting",
      createdAt: "2026-08-25T10:30:00.000Z",
      updatedAt: "2026-08-25T10:30:00.000Z",
    },
    {
      _id: "contact-002",
      name: "Mariam Ali",
      email: "mariam.ali@example.com",
      subject: "Issue with my account",
      message:
        "I am having trouble accessing some features of my account and would like some assistance.",
      status: "resolved",
      createdAt: "2026-08-24T15:20:00.000Z",
      updatedAt: "2026-08-25T09:10:00.000Z",
    },
    {
      _id: "contact-003",
      name: "Omar Hassan",
      email: "omar.hassan@example.com",
      subject: "Research paper submission",
      message:
        "I submitted my research paper yesterday and wanted to know whether it has been received successfully.",
      status: "waiting",
      createdAt: "2026-08-23T18:45:00.000Z",
      updatedAt: "2026-08-23T18:45:00.000Z",
    },
    {
      _id: "contact-004",
      name: "Salma Khaled",
      email: "salma.khaled@example.com",
      subject: "General inquiry",
      message:
        "I would like to know more about the scientific community and the available features for students.",
      status: "resolved",
      createdAt: "2026-08-22T12:15:00.000Z",
      updatedAt: "2026-08-23T08:30:00.000Z",
    },
  ];

  const selectedFilter = filter.get("filter") || "all";

  const handleChangeFilter = (value) => {
    setFilter({ filter: value });
  };

  const filteredContacts = contacts
    .filter(
      (contact) =>
        selectedFilter === "all" || contact.status === selectedFilter,
    )
    .filter((contact) => {
      const query = search.toLowerCase().trim();

      if (!query) return true;

      return (
        contact.name.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query) ||
        contact.subject.toLowerCase().includes(query) ||
        contact.message.toLowerCase().includes(query)
      );
    });

  return (
    <section className="admin-contacts">
      {/* ========================================
          Page Header
          ======================================== */}

      <header className="admin-contacts__header">
        <div>
          <span className="admin-contacts__eyebrow">
            {t.admin.contacts.eyebrow}
          </span>

          <h1 className="admin-contacts__title">{t.admin.contacts.title}</h1>
        </div>

        <div className="admin-contacts__summary">
          <span>{t.admin.contacts.total}</span>
          <strong>{contacts.length}</strong>
        </div>
      </header>

      {/* ========================================
          Search & Filters
          ======================================== */}

      <div className="admin-contacts__toolbar">
        <input
          type="text"
          className="admin-contacts__search"
          placeholder={t.admin.contacts.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="admin-contacts__filters">
          <button
            type="button"
            className={
              selectedFilter === "all"
                ? "admin-contacts__filter admin-contacts__filter--active"
                : "admin-contacts__filter"
            }
            onClick={() => handleChangeFilter("all")}
          >
            {t.admin.contacts.filters.all}
          </button>

          <button
            type="button"
            className={
              selectedFilter === "waiting"
                ? "admin-contacts__filter admin-contacts__filter--active"
                : "admin-contacts__filter"
            }
            onClick={() => handleChangeFilter("waiting")}
          >
            {t.admin.contacts.filters.waiting}
          </button>

          <button
            type="button"
            className={
              selectedFilter === "resolved"
                ? "admin-contacts__filter admin-contacts__filter--active"
                : "admin-contacts__filter"
            }
            onClick={() => handleChangeFilter("resolved")}
          >
            {t.admin.contacts.filters.resolved}
          </button>
        </div>
      </div>

      {/* ========================================
          Contacts List
          ======================================== */}

      <div className="admin-contacts__list">
        {filteredContacts.length === 0 ? (
          <div className="admin-contacts__empty">
            <h3>{t.admin.contacts.emptyTitle}</h3>
            <p>{t.admin.contacts.emptyMessage}</p>
          </div>
        ) : (
          filteredContacts.map((contact) => (
            <ContactCard key={contact._id} contact={contact} />
          ))
        )}
      </div>
    </section>
  );
}
