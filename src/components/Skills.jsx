import React from "react";
import SkillCard from "./SkillCard.jsx";

import skills from "../data/skills";

export default function Skills({ content, refProperty }) {
  return (
    <section className="section-container" ref={refProperty}>
      <h2 className="section-title">{content.title}</h2>
      <div className="about-skills">
        <SkillCard
          title={content.languages}
          skills={skills.filter((s) => s.type === 0)}
        />
      </div>
    </section> 
  );
}
