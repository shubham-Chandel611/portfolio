import React from "react";
import "./skillCardMobile.css";

export const SkillCardMobile = ({ img, title }) => {
  return (
    <div className="skillCardMobile mt-2 mb-2">
      <img src={img} alt="" />
      <h4>{title}</h4>
    </div>
  );
};
