import React from "react";
import "../../assets/scss/addFeature.scss";
import arrowIcon from "../../assets/icons/Arrow.svg";

const AddFeature = ({ icon, title, description, marginRight }) => {
  return (
    <div
      className="feature"
      style={{
        marginRight: marginRight,
      }}
    >
      <img src={icon} className="card-icon" alt={title} />
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
      <div className="learnMore-container">
          <p className="learnMore-textContainer" style={{ margin: "0" }}>
            Learn more
          </p>
        <div style={{ marginLeft: "8px" }}>
          <img src={arrowIcon} alt="arrowIcon" />
        </div>
      </div>
    </div>
  );
};

export default AddFeature;
