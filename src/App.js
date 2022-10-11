import "./App.css";
import { Footer } from "./Footer";
import Header from "./Header";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { SkillCardMobile } from "./SkillCardMobile";
import { useEffect, useState } from "react";

const images = [
  {
    img: "/javascript.png",
    title: "JavaScript",
  },
  {
    img: "/react.png",
    title: "ReactJs",
  },
  {
    img: "/firebase.png",
    title: "Firebase",
  },
  {
    img: "/boot.png",
    title: "Bootstrap",
  },
  {
    img: "/git.png",
    title: "Git",
  },
  {
    img: "/css.png",
    title: "CSS3",
  },
  {
    img: "/html.png",
    title: "HTML5",
  },
  {
    img: "/tailwind.png",
    title: "TailwindCss",
  },
];

function App() {
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
    <div className="App">
      <Header />
      <SkillsSection />
      <div
        className={
          animate
            ? "skills-section-mobile mt-4 active"
            : "skills-section-mobile mt-4"
        }
      >
        {images.map((item, index) => {
          return (
            <SkillCardMobile title={item.title} img={item.img} key={index} />
          );
        })}
      </div>
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
