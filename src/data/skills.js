/*
    Type
    0 -> Languages
    1 -> Libraries & Frameworks
    2 -> Tools & Platforms

    Level
    0 -> Basic
    1 -> Intermediate
    2 -> Advanced
*/

import html from "../img/skills/html.png";
import css from "../img/skills/css.png";
import scss from "../img/skills/scss.png";
import js from "../img/skills/js.png";

import react from "../img/skills/react.png";
import git from "../img/skills/git.png";
import ts from "../img/skills/ts.svg";
import Chakra from "../img/skills/Chakra-Ui.png";
import bootstrap from "../img/skills/bootstrap-logo-shadow.png";
import Vs from "../img/skills/Vs.png";
import Jquery from "../img/skills/Jquery.png";
import Redux from "../img/skills/Redux.png";

const skills = [
  { name: "HTML", img: html, type: 0, level: 1 },
  { name: "CSS", img: css, type: 0, level: 1 },
  { name: "SCSS", img: scss, type: 0, level: 0 },
  { name: "JavaScript", img: js, type: 0, level: 1 },
  { name: "TypeScript", img: ts, type: 0, level: 0 },

  { name: "React.js", img: react, type: 0, level: 0 },

  // { name: "Next.js", img: next, type: 0, level: 0 },
  // { name: "Node.js", img: node, type: 0, level: 0 },
  { name: "Git", img: git, type: 0, level: 0 },
  { name: "Jquery", img: Jquery, type: 0, level: 0 },
  { name: "Bootstrap", img: bootstrap, type: 0, level: 0 },
  { name: "Visual Studio", img: Vs, type: 0, level: 0 },
  { name: "Redux", img: Redux, type: 0, level: 0 },
  { name: "Chakra UI", img: Chakra, type: 0, level: 0 },
  // { name: "Cypress", img: cy, type: 0, level: 0 },
];

export default skills;
