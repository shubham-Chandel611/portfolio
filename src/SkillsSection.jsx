import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import "./skillssection.css";

function SkillsSection() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const section = document.querySelector(".skills-section");
    function callback(entries) {
      setAnimate(entries[0].isIntersecting);
      console.log(entries);
    }
    let observer = new IntersectionObserver(callback, {
      threshold: 0.2,
    });
    observer.observe(section);
  }, [animate]);

  return (
    <div className={animate ? "skills-section active" : "skills-section"}>
      <div className="skills-section-intro">
        <h1>
          <i class="fas fa-code"></i> What I do
        </h1>
        <p>
          A Creative front-end developer who aims to turn every design into a
          reality.
        </p>
      </div>
      <div className="skills-icons-images">
        <img className="skills-image" src="/blogging.svg" alt="" />
        <div className="skills-icons">
          <img src="/javascript.png" alt="" />
          <img src="/react.png" alt="" />
          <img src="/html.png" alt="" />
          <img src="/css.png" alt="" />
          <img src="/tailwind.png" alt="" />
          <img src="/boot.png" alt="" />
          <img src="/git.png" alt="" />
          <img src="/firebase.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
