import cv from "../img/ShaileshSampat.pdf";

const dataJSON = {
  header: {
    about: "About",
    skills: "Skills",

    projects: "Projects",
    contact: "Contact",
    resume: "Resume",
  },
  home: {
    hi: "Hi, I'm",
    job: "Full Stack Developer",
    button: "Contact me",
  },
  about: {
    title: "About",
    paragraph1: (
      <>
        My name is Shailesh Sampat, I'm a <p>MERN stack student</p> from
        Masai School, Bangalore. I'm a <p>MERN Stack Development enthusiast</p>{" "}
        and I enjoy creating things that live on the internet. My interest in
        web development started last year when I was trying to edit things on
        the web — taught me a lot about HTML & CSS!.
      </>
    ),
    paragraph2:
      "My goal is to cooperate with the creation of tools that contribute to the development of a person, a company, or a nation. That's why I like to learn new technologies, and use them with the mission to improve the world a little bit, one step at a time. \n Fast Forwarding till today, I built numbers of web applications and 4 major projects. Learned a lot about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an opportunity as a full stack web developer.",
    cvTitle: "Download CV",
    cvFile: cv,
  },
  skills: {
    title: "Skills",
    languages: "Languages",
    libraries: "Libraries & Frameworks",
    tools: "Tools & Platforms",
  },
  projects: {
    title: "Projects",
  },
  contact: {
    title: "Contact",
    paragraph:
      "I'm looking for new opportunities to contribute to the industry and grow as a developer. If you have a project you want me to participate in or if you have any questions let me know! I'll do my best to answer you.",
    button: "Say hello",
  },
};

export default dataJSON;
