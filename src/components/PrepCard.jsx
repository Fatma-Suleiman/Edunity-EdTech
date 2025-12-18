import React from "react";
import "./PrepCard.css";

const PrepCard = ({ bgColor,bgImage, title, subtitle, button, image }) => {
  return (
    <div
      className="prep-card"
      style={{  backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center", }}
    >
      <div className="prep-card-content">
        <p className="prep-start">{title}</p>
        <h3 className="prep-text">{subtitle}</h3>
        {button}
      </div>

      <div className="prep-card-image">
        {image}
      </div>
    </div>
  );
};

export default PrepCard;
