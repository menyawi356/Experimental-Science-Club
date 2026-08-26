import { useSearchParams } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage.js";
import { useEffect, useState } from "react";
import AdminPublicationCard from "./adminPaperCard.jsx";
import "../../styles/review.css";
import getPublications from "../../API/admin/getPublications.js";
export default function ExplorePublishedForAdmins() {
  const [publications, setPublications] = useState([]);
  const { t } = useLanguage();
  const [filter, setFilter] = useSearchParams();
  const stateFilter = filter.get("state") || "all";
  const typeFilter = filter.get("type") || "all";
  const [search, setSearch] = useState("");
  useEffect(() => {
    getPublications().then((response) => {
      if (response.ok) {
        setPublications(response.publications);
      }
    });
  });
  const handleChangeStateFilter = (state) => {
    const newParams = new URLSearchParams(filter);
    if (state === "all") {
      newParams.delete("state");
    } else {
      newParams.set("state", state);
    }
    setFilter(newParams);
  };
  const handleChangeTypeFilter = (type) => {
    const newParams = new URLSearchParams(filter);
    if (type === "all") {
      newParams.delete("type");
    } else {
      newParams.set("type", type);
    }
    setFilter(newParams);
  };
  const filteredPublications = publications
    .filter(({ paper }) => {
      if (stateFilter === "all") {
        return true;
      }
      return paper.state === stateFilter;
    })
    .filter(({ paper }) => {
      if (typeFilter === "all") {
        return true;
      }
      return paper.type === typeFilter;
    })
    .filter(({ paper, user }) => {
      const query = search.toLowerCase().trim();
      if (!query) {
        return true;
      }
      return (
        paper.title.toLowerCase().includes(query) ||
        paper.abstract.toLowerCase().includes(query) ||
        paper.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        paper.authors.some((author) => author.toLowerCase().includes(query)) ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    });
  const publishedPapersList = filteredPublications.map((publication) => (
    <AdminPublicationCard publication={publication} />
  ));
  const publishText = t.publishing;
  return (
    <div id="pub-tab-explore" className="pub-subtab-view active">
      <div className="archive-search">
        <input
          type="text"
          id="pubSearch"
          placeholder={publishText.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-pills">
          {/* State Filters */}

          <span
            className={`pill ${stateFilter === "all" ? "active" : ""}`}
            onClick={() => handleChangeStateFilter("all")}
          >
            All
          </span>

          <span
            className={`pill ${stateFilter === "pending" ? "active" : ""}`}
            onClick={() => handleChangeStateFilter("pending")}
          >
            Pending
          </span>

          <span
            className={`pill ${stateFilter === "approved" ? "active" : ""}`}
            onClick={() => handleChangeStateFilter("approved")}
          >
            Approved
          </span>

          <span
            className={`pill ${stateFilter === "rejected" ? "active" : ""}`}
            onClick={() => handleChangeStateFilter("rejected")}
          >
            Rejected
          </span>
        </div>

        <div className="filter-pills">
          {/* Type Filters */}

          <span
            className={`pill ${typeFilter === "all" ? "active" : ""}`}
            onClick={() => handleChangeTypeFilter("all")}
          >
            All Types
          </span>

          <span
            className={`pill ${typeFilter === "paper" ? "active" : ""}`}
            onClick={() => handleChangeTypeFilter("paper")}
          >
            Research Paper
          </span>

          <span
            className={`pill ${typeFilter === "article" ? "active" : ""}`}
            onClick={() => handleChangeTypeFilter("article")}
          >
            Article
          </span>

          <span
            className={`pill ${typeFilter === "pdf" ? "active" : ""}`}
            onClick={() => handleChangeTypeFilter("pdf")}
          >
            PDF
          </span>
        </div>
      </div>

      <div className="archive-list" id="archiveList">
        {publications.length === 0 ? (
          <div className="archive-empty-state">
            <h3>{publishText.emptyTitle}</h3>
            <p>{publishText.emptyMessage}</p>
          </div>
        ) : filteredPublications.length === 0 ? (
          <div className="archive-empty-state">
            <h3>{publishText.noResultsTitle}</h3>
            <p>{publishText.noResultsMessage}</p>
          </div>
        ) : (
          publishedPapersList
        )}
      </div>
    </div>
  );
}
