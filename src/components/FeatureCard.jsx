import React from "react";
import "./FeatureCard.css";

function FeatureCard({ icon, title, description, button}) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {icon}
      </div>

      <h3 className="feature-title">{title}</h3>

      <p className="feature-description">
        {description}
      </p>
      
      <div className="feature-btn-area">
        {button}
      </div>
    
    </div>
  );
}

export default FeatureCard;
