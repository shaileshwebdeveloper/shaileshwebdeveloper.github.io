import { useState, useRef } from "react";

import "./scss/main.scss";

import Loader from "./components/Loader";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
// import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";
// Icons
import favicon from "./img/logo.png";
import burgerIcon from "./img/burger.svg";
import closeIcon from "./img/x.svg";

//Data
import dataJSON from "./data/english.js";

function App() {
  // Set page loader
  const [loading, setLoading] = useState(true);

  //set data
  const content = dataJSON;

  // Show or hide the menu and the header
  const [showBurger, setShowBurger] = useState(true);
  const [showHeader, setShowHeader] = useState(window.innerWidth > 1000);

  const showHideMenu = () => {
    setShowBurger(!showBurger);
    setShowHeader(showBurger);
  };

  const closeHeader = () => {
    setShowHeader(window.innerWidth > 1000);
    setShowBurger(window.innerWidth <= 1000);
  };

  // Sections references
  const references = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const goTo = (section) => {
    references[section].current.scrollIntoView({ behavior: "smooth" });
    closeHeader();
  };

  // Update showHeader and showBurger when the page is resized.
  window.onresize = () => {
    setShowHeader(window.innerWidth > 1000);
    setShowBurger(window.innerWidth <= 1000);
  };

  const showLoader = (time) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, time);
  };

  window.onload = () => showLoader(1000);

  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return loading ? (
    <Loader />
  ) : (
    <>
      <Header
        content={content.header}
        showHeader={showHeader}
        closeHeader={closeHeader}
        goTo={goTo}
        showLoader={showLoader}
      />
      <>
        <div className="sections">
          <Home content={content.home} refProperty={references.home} />
          <About content={content.about} refProperty={references.about} />
          <Skills content={content.skills} refProperty={references.skills} />
          {/* <Projects
            content={content.projects}
            refProperty={references.projects}
          /> */}
          <Contact content={content.contact} refProperty={references.contact} />
          <Footer />
        </div>
        <div className="mobile-header">
          <img
            src={favicon}
            alt="Logo"
            className="logo"
            onClick={() => goTo("home")}
          ></img>
          <img
            src={showBurger ? burgerIcon : closeIcon}
            alt="Menu"
            className="burger-close"
            onClick={showHideMenu}
          ></img>
        </div>
      </>
    </>
  );
}

export default App;
