import React from "react";
import "../../assets/scss/review.scss";
import Triangle from "../../assets/svg/triangle.svg";

const Review = ({ reviewerPhoto, name, title, testimony }) => {
  return (
    <section className="render-review">
      <div className="testimony-content">
        <div className="testimonies-card">
          <div className="testimony-body">
            <div className="testimony-mssg-object">
              <p className="testimony-message">"{testimony}"</p>
            </div>
            <img src={Triangle} className="triangle" alt="triangle" />
          </div>
          <div className="reviewer-container">
            <div className="reviewer-photo">
              <img
                src={reviewerPhoto}
                className="App-logo"
                alt="reviewerPhoto"
              />
            </div>
            <div className="reviewer-body">
              <h2 className="reviewer-name">{name}</h2>
              <h3 className="reviewer-title">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
