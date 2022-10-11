import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div
      className="footer bg-dark"
      style={{ height: "300px" }}
      id="footer-section"
    >
      <div className="container">
        <div className="name pt-3">Shubham chandel</div>
        <div className="text-center text-white fs-3 pt-3">
          Shubham.chandel611@gmail.com
        </div>
        <div className="text-center fs-2 mt-3">
          <a href="https://www.linkedin.com/in/shubham-chandel-4a60ba127/">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
