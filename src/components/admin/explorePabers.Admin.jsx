import { useSearchParams } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage.js";
import { useState } from "react";
import AdminPublicationCard from "./adminPaperCard.jsx";
import "../../styles/review.css";
export default function ExplorePublishedForAdmins() {
  const publications = [
    {
      paper: {
        _id: "paper-001",
        title: "The Effect of Temperature on Reaction Rates",
        abstract:
          "A study investigating how changes in temperature affect the rate of chemical reactions and the factors controlling reaction speed.",
        authors: ["Ahmed Mohamed", "Mariam Ali"],
        type: "paper",
        cat: "Research Paper",
        tags: ["Chemistry", "Thermodynamics", "Kinetics"],
        state: "pending",
        date: "2026-08-24T10:30:00.000Z",
      },
      user: {
        _id: "user-001",
        name: "Ahmed Mohamed",
        email: "ahmed.mohamed@example.com",
      },
    },

    {
      paper: {
        _id: "paper-002",
        title: "Understanding Black Holes",
        abstract:
          "An introductory article explaining black holes, event horizons, singularities, and the methods scientists use to detect these fascinating cosmic objects.",
        authors: ["Omar Hassan", "Youssef Adel"],
        type: "article",
        cat: "Article",
        tags: ["Astronomy", "Black Holes", "Astrophysics", "Space"],
        state: "approved",
        date: "2026-08-21T14:15:00.000Z",
      },
      user: {
        _id: "user-002",
        name: "Omar Hassan",
        email: "omar.hassan@example.com",
      },
    },

    {
      paper: {
        _id: "paper-003",
        title: "Machine Learning in Scientific Research",
        abstract:
          "Exploring the applications of machine learning techniques in scientific research, data analysis, prediction, and automated scientific discovery.",
        authors: ["Mariam Ali", "Ahmed Khaled", "Salma Hassan"],
        type: "paper",
        cat: "Research Paper",
        tags: ["AI", "Machine Learning", "Research", "Data Science"],
        state: "pending",
        date: "2026-08-19T09:45:00.000Z",
      },
      user: {
        _id: "user-003",
        name: "Mariam Ali",
        email: "mariam.ali@example.com",
      },
    },

    {
      paper: {
        _id: "paper-004",
        title: "Introduction to Quantum Mechanics",
        abstract:
          "A beginner-friendly introduction to the fundamental concepts of quantum mechanics and the behavior of particles at microscopic scales.",
        authors: ["Youssef Adel"],
        type: "pdf",
        cat: "PDF",
        tags: ["Physics", "Quantum Mechanics", "Quantum Physics", "Particles"],
        state: "rejected",
        date: "2026-08-17T18:20:00.000Z",
      },
      user: {
        _id: "user-004",
        name: "Youssef Adel",
        email: "youssef.adel@example.com",
      },
    },

    {
      paper: {
        _id: "paper-005",
        title: "Why Do Stars Shine?",
        abstract:
          "A detailed explanation of nuclear fusion inside stars and how it produces the enormous amounts of energy observed across the universe.",
        authors: ["Salma Khaled", "Nour Ahmed"],
        type: "article",
        cat: "Article",
        tags: ["Astronomy", "Stars", "Nuclear Physics", "Fusion"],
        state: "approved",
        date: "2026-08-12T11:10:00.000Z",
      },
      user: {
        _id: "user-005",
        name: "Salma Khaled",
        email: "salma.khaled@example.com",
      },
    },

    {
      paper: {
        _id: "paper-006",
        title: "Water Pollution and Its Environmental Impact",
        abstract:
          "An investigation into the major causes of water pollution and its effects on aquatic ecosystems and human communities.",
        authors: ["Mahmoud Samir", "Mariam Ali"],
        type: "paper",
        cat: "Research Paper",
        tags: ["Environment", "Biology", "Pollution", "Ecosystems"],
        state: "pending",
        date: "2026-08-09T16:40:00.000Z",
      },
      user: {
        _id: "user-006",
        name: "Mahmoud Samir",
        email: "mahmoud.samir@example.com",
      },
    },

    {
      paper: {
        _id: "paper-007",
        title: "Artificial Intelligence and Modern Education",
        abstract:
          "A study examining how artificial intelligence can transform modern education through personalized learning, automated assessment, and intelligent tutoring systems.",
        authors: ["Nour Ahmed"],
        type: "paper",
        cat: "Research Paper",
        tags: ["AI", "Education", "Technology"],
        state: "rejected",
        date: "2026-08-05T13:25:00.000Z",
      },
      user: {
        _id: "user-007",
        name: "Nour Ahmed",
        email: "nour.ahmed@example.com",
      },
    },

    {
      paper: {
        _id: "paper-008",
        title: "The Physics of Gravitational Waves",
        abstract:
          "An overview of gravitational waves, their theoretical foundation, their detection, and their importance in modern astrophysics.",
        authors: ["Ahmed Khaled", "Omar Hassan", "Mariam Ali"],
        type: "pdf",
        cat: "PDF",
        tags: ["Physics", "Gravity", "Astrophysics", "Waves"],
        state: "pending",
        date: "2026-08-02T20:05:00.000Z",
      },
      user: {
        _id: "user-008",
        name: "Ahmed Khaled",
        email: "ahmed.khaled@example.com",
      },
    },
  ];

  const { t } = useLanguage();

  const [filter, setFilter] = useSearchParams();

  const stateFilter = filter.get("state") || "all";
  const typeFilter = filter.get("type") || "all";

  const [search, setSearch] = useState("");

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
