import React, { useState } from "react";
import "./header.css";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuToggle = () => {
    console.log(openMenu);
    setOpenMenu(!openMenu);
  };
  return (
    <div className="header">
      <div className="header-container container">
        <nav className="navbar container d-flex justify-content-between align-items-center pt-3 position-relative">
          <span className="name">Shubham chandel</span>
          <div className="navbar-list ">
            <span className="navbar-list-item me-2">
              <a href="#project-section">Projects</a>
            </span>
            <span className="navbar-list-item">
              <a href="#footer-section">Contact</a>
            </span>
          </div>

          <div className="mobile-menu" onClick={handleMenuToggle}>
            <span className="fw-bold ">Menu</span>
            <img
              src="/menu.png"
              alt=""
              width={40}
              className={openMenu ? "menu-open" : "mobile-menu-img"}
            />
          </div>

          <div
            className="menu-content-div"
            style={{ display: openMenu ? "flex" : "none" }}
          >
            <a href="#project-section">Projects</a>
            <a href="#footer-section">Contact</a>
          </div>
        </nav>
        <div className="header-intro container">
          <div className="header-intro-text">
            <h1 className="header-quote">
              Beautiful Web Experiences Made Real.
            </h1>
            <span className="header-intro-introduction">
              "I wanted something funny here but I'm an Engineer."
            </span>
          </div>
          <img
            className="hero-image"
            src="/programming-animate(1).svg"
            alt=""
          />
        </div>
      </div>
      <svg
        className="bottom-shape"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,192C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Header;
