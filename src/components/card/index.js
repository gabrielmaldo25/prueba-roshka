import React from "react";
import "./index.css";

const Card = ({ title, location, status, image }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img src={image} />
      <h3>Status </h3>
      <p className="card-content">{status}</p>
      <h3>Location</h3>
      <p className="card-content">{location}</p>
    </div>
  );
};

export default Card;
