import React, { useState } from "react";

import logoecofi from "../assets/logo-ecofi.svg";
import logotwstudio from "../assets/logo-tw22studio.svg";
import logoqhare from "../assets/logo-qhare.svg";
import logoexcel from "../assets/logo-excel-01.png";
import logobeer from "../assets/logo-beer.png";

// Une seule source de vérité pour tes projets : ajouter/retirer un projet
// se fait ici, sans toucher au JSX plus bas.
const PROJECTS = [
  {
    id: "loving-beer",
    name: "Loving Beer",
    logo: logobeer,
    stack: ["React.js", "Punk API"],
    description:
      'Site créé de A à Z en consommant l\'API open source "Punk API", pour découvrir et filtrer des bières artisanales.',
    url: "https://elodiej18.github.io/punk-api-frontend/",
  },
  {
    id: "tw22studio",
    name: "Tw22Studio",
    logo: logotwstudio,
    stack: ["HTML", "SCSS", "JavaScript"],
    description:
      "Collaboration avec Tw22Studio : intégration du site en from-scratch d'après une maquette Figma, mise en ligne via Filezilla.",
    url: "https://tw22studio.com/",
  },
  {
    id: "ecofi",
    name: "Ecofi",
    logo: logoecofi,
    stack: ["Drupal", "JavaScript"],
    description:
      "Réalisé avec l'agence 50A : intégration et animations JS sur un CMS Drupal.",
    url: "https://www.ecofi.fr/",
  },
  {
    id: "qhare",
    name: "Qhare CRM",
    logo: logoqhare,
    stack: ["HTML", "CSS"],
    description:
      "Réalisé avec l'agence 50A : création d'une one-page from-scratch, mise en ligne via Filezilla.",
    url: "https://www.crm-qhare.fr/",
  },
  {
    id: "excel-industries",
    name: "Excel Industrie",
    logo: logoexcel,
    stack: ["WordPress"],
    description:
      "Réalisé avec l'agence 50A : intégration de pages statiques et amélioration de l'expérience responsive.",
    url: "https://www.exel-industries.com/?lang=en",
  },
];

const ProjectDetail = ({ project, variant }) => (
  <div
    className={`projets-detail projets-detail--${variant}`}
    aria-live="polite"
  >
    <div className="projets-detail-inner" key={project.id}>
      <div className="projets-detail-logo">
        <img src={project.logo} alt={`Logo ${project.name}`} />
      </div>
      <div className="projets-detail-body">
        <h2 className="projets-detail-title">{project.name}</h2>
        <ul className="projets-detail-stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p className="projets-detail-description">{project.description}</p>
        <a
          href={project.url}
          className="projets-detail-link"
          target="_blank"
          rel="noreferrer"
        >
          Voir le projet
        </a>
      </div>
    </div>
  </div>
);

export const ProjetTest = () => {
  const [selectedId, setSelectedId] = useState(PROJECTS[0].id);
  const activeProject =
    PROJECTS.find((project) => project.id === selectedId) ?? PROJECTS[0];

  return (
    <div className="projets-shell">
      <div className="title-project-home">
        <h1>Projets</h1>
      </div>

      <div className="projets-grid">
        <nav className="projets-index" aria-label="Liste des projets">
          <ul>
            {PROJECTS.map((project) => {
              const isActive = project.id === selectedId;
              return (
                <li key={project.id}>
                  <button
                    type="button"
                    className={`projets-index-item${isActive ? " is-active" : ""}`}
                    aria-expanded={isActive}
                    onClick={() => setSelectedId(project.id)}
                  >
                    {project.name}
                  </button>

                  {/* Détail affiché juste sous l'item actif sur mobile */}
                  {isActive && (
                    <ProjectDetail project={project} variant="mobile" />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Détail affiché dans le panneau fixe à droite sur desktop */}
        <ProjectDetail project={activeProject} variant="desktop" />
      </div>
    </div>
  );
};

export default ProjetTest;
