import React from "react";
import "./InstructorCard.css";
import Whatsapp from "../assets/icons/whatsapp.svg?react";

const InstructorCard = ({ image, name, role }) => {
  return (
    <div className="instructor-card">
      <div className="instructor-img">
        <img src={image} alt={name} />
      </div>

      <div className="instructor-info">
        <h4>{name}</h4>
        <span>{role}</span>
      </div>

      <div className="instructor-social">
        <Whatsapp/>
      </div>
    </div>
  );
};

export default InstructorCard;
