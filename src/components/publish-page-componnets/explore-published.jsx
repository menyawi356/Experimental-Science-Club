import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../../global/languageProvider.jsx";
import { useEffect, useState } from "react";
import PublicationCard from "./published-paper.jsx";
export default function ExplorePublished() {
  const publications = [
    {
      id: 1,
      type: "paper",
      cat: "Research Paper",
      date: "2026/08/10",
      title: "The Effect of Temperature on Reaction Rates",
      authors: ["Ahmed Mohamed"],
      abstract:
        "A study investigating how changes in temperature affect the rate of chemical reactions and the factors controlling reaction speed.",
      tags: ["Chemistry", "Thermodynamics", "Kinetics"],
      file: "/pdfs/reaction-rates.pdf",
    },

    {
      id: 2,
      type: "article",
      cat: "Article",
      date: "2026/08/07",
      title: "Understanding Black Holes",
      authors: ["Omar Hassan", "Youssef Adel"],
      abstract:
        "An introductory article explaining black holes, event horizons, and how scientists detect these fascinating cosmic objects.",
    },

    {
      id: 3,
      type: "paper",
      cat: "Research Paper",
      date: "2026/08/03",
      title: "Machine Learning in Scientific Research",
      authors: ["Mariam Ali", "Ahmed Khaled", "Salma Hassan"],
      abstract:
        "Exploring the applications of machine learning techniques in scientific research and data analysis.",
      tags: ["AI", "Machine Learning", "Research"],
      file: "/pdfs/ml-science.pdf",
    },

    {
      id: 4,
      type: "pdf",
      cat: "PDF",
      date: "2026/07/28",
      title: "Introduction to Quantum Mechanics",
      authors: ["Youssef Adel"],
      abstract:
        "A beginner-friendly introduction to the fundamental concepts of quantum mechanics and the behavior of particles at microscopic scales.",
      tags: ["Physics", "Quantum Mechanics"],
      file: "/pdfs/quantum-mechanics.pdf",
    },

    {
      id: 5,
      type: "article",
      cat: "Article",
      date: "2026/07/21",
      title: "Why Do Stars Shine?",
      authors: ["Salma Khaled", "Nour Ahmed"],
      abstract:
        "A simple explanation of nuclear fusion inside stars and how it produces the enormous amounts of energy we observe.",
      tags: ["Astronomy", "Stars", "Nuclear Physics"],
    },

    {
      id: 6,
      type: "paper",
      cat: "Research Paper",
      date: "2026/07/15",
      title: "Water Pollution and Its Environmental Impact",
      authors: ["Mahmoud Samir", "Mariam Ali"],
      abstract:
        "An investigation into the major causes of water pollution and its effects on aquatic ecosystems and human communities.",
      tags: ["Environment", "Biology", "Pollution"],
      file: "/pdfs/water-pollution.pdf",
    },
  ];
  const { t } = useLanguage();
  const [filter, setFilter] = useSearchParams();
  const choosedFilter = filter.get("filter") || "all";
  useEffect(() => {
    if (!filter.has("filter")) {
      setFilter({ filter: "all" });
    }
  }, []);
  const handleChangeFilter = (filter) => {
    setFilter({ filter });
  };
  const filteredPublications = publications.filter(
    (p) => p.type === choosedFilter || choosedFilter === "all",
  );
  const publishedPapersList = filteredPublications.map((p) => {
    return <PublicationCard p={p} key={p.id} />;
  });
  const publishText = t.publishing;
  return (
    <div id="pub-tab-explore" className="pub-subtab-view active">
      <div className="archive-search">
        <input type="text" id="pubSearch" placeholder={publishText.search} />

        <div className="filter-pills">
          <span
            className={`pill ${choosedFilter === "all" && "active"}`}
            id="filter-all"
            onClick={() => {
              handleChangeFilter("all");
            }}
          >
            {publishText.all}
          </span>
          <span
            className={`pill ${choosedFilter === "paper" && "active"}`}
            id="filter-paper"
            onClick={() => {
              handleChangeFilter("paper");
            }}
          >
            {publishText.paper}
          </span>

          <span
            className={`pill ${choosedFilter === "article" && "active"}`}
            id="filter-article"
            onClick={() => {
              handleChangeFilter("article");
            }}
          >
            {publishText.article}
          </span>

          <span
            className={`pill ${choosedFilter === "pdf" && "active"}`}
            id="filter-pdf"
            onClick={() => {
              handleChangeFilter("pdf");
            }}
          >
            {publishText.pdf}
          </span>
        </div>
      </div>

      <div className="archive-list" id="archiveList">
        {publishedPapersList}
      </div>
    </div>
  );
}
