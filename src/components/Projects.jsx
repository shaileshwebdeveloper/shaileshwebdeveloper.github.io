import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import projects from "../data/projects.js";

export default function Projects({ content, refProperty }) {
  return (
    <section className="section-container projects-section" ref={refProperty}>
      <h2 className="section-title">{content.title}</h2>
      <ul className="projects-container">
        {projects.map((p) => (
          <ProjectCard
            name={p.name}
            description={p.descriptionEN}
            tools={p.tools}
            website={p.website}
            github={p.github}
            img={p.img}
          />
        ))}
      </ul>
    </section>
  );
}
