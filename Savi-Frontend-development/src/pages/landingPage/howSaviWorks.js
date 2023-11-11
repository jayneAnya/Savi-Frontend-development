import React from "react";
import "../../assets/scss/howSaviWorks.scss";

const HowSaviWorks = ({ number, title, description }) => {
  return (
    <section className="howSaviWorks-content">
      <div className="integer-container">
        <h1 className="integer-holder">{number}</h1>
      </div>
      <div className="body-container">
        <h2 className="body-title">{title}</h2>
        <div className="description-container">
          <h3 className="description-body">{description}</h3>
        </div>
      </div>
    </section>
  );
};

export default HowSaviWorks;
