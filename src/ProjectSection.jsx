import React, { useEffect, useState } from "react";
import Projects from "./Projects";

function ProjectSection() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const section = document.querySelector(".project-section");
    function callback(entries) {
      setAnimate(entries[0].isIntersecting);
    }
    let observer = new IntersectionObserver(callback, {
      threshold: 0.2,
    });
    observer.observe(section);
  }, [animate]);
  return (
    <div
      className={animate ? "project-section activeproject" : "project-section"}
      id="project-section"
    >
      <h2 className="project-section-heading">Projects</h2>
      <div className="project-section-cards">
        <Projects
          imgLink={"/review.game.cricketstarmanager.com_.png"}
          demo={"https://netflix-react-app-2021.web.app/"}
          name={"Cricket star manager"}
          github={""}
          info={
            "On going ReactJs typescript project. A Cricket game project that allows users to create teams train players, have matches."
          }
        />
        <Projects
          imgLink={"/portfolio.png"}
          demo={"#"}
          name={"Personal Portfolio"}
          github={""}
          info={
            "Personal Portfolio website made with ReactJs, Bootstrap, animations"
          }
        />
        <Projects
          imgLink={"/react-store.png"}
          demo={"https://proximamusic.github.io/react-shop-app"}
          name={"Shopping store"}
          github={"https://github.com/Proximamusic/react-shop-app"}
          info={
            "A small ReactJs online store project for shopping. This projects includes many ReactJS concepts."
          }
        />

        <Projects
          imgLink={"/postmaster.png"}
          demo={"https://proximamusic.github.io/Postmaster-react/"}
          name={"Post Master"}
          github={"https://github.com/Proximamusic/Postmaster-react"}
          info={
            "Postmast is a simple Api project made actually when i was trying my hand at designing. It Uses tailwind Css for styling. "
          }
        />
      </div>
    </div>
  );
}

export default ProjectSection;
