import React from "react";
import "./projects.css";
function Projects({ imgLink, name, demo, github, info }) {
  return (
    <div className="project mt-2">
      <h3 className="project-title">{name}</h3>
      <img className="project-image" src={imgLink} alt="" />
      <video className="project-video">
        <source src="https://youtu.be/rUWxSEwctFU" type="video/mp4" />
      </video>

      <p className="project-info">{info}</p>
      <div className="link-btn">
        <button className="project-button">
          <a href={demo} target="_blank" className="">
            Demo
          </a>
        </button>
        <button className="project-button github">
          <a href={github} target="_blank">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt=""
            />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Projects;
