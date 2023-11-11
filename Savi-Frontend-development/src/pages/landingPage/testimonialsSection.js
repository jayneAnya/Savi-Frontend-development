import React from "react";
import reviewerPhoto from "../../assets/images/Ellipse 4.png";
import Review from "./review";
import "../../assets/scss/testimonialsSection.scss";

const TestimonialSection = () => {
  const reviews = [
    {
      reviewerPhoto: reviewerPhoto,
      name: "Aderemirekun Ayomide",
      title: "Widower Association",
      testimony:
        "Savi has transformed the way I save money. Being part of a thrift group has made it easier to stay motivated and accountable. With Savi, I've achieved my savings goals faster than ever before!",
    },
    {
      reviewerPhoto: reviewerPhoto,
      name: "Aderemirekun Ayomide",
      title: "Widower Association",
      testimony:
        "Savi has transformed the way I save money. Being part of a thrift group has made it easier to stay motivated and accountable. With Savi, I've achieved my savings goals faster than ever before!",
    },
    {
      reviewerPhoto: reviewerPhoto,
      name: "Aderemirekun Ayomide",
      title: "Widower Association",
      testimony:
        "I've finally found a savings platform that understands my needs. Savi's personal savings feature has made it effortless for me to reach my financial milestones. It's empowering to have control over my savings journey",
    },
  ];
  return (
    <section className="testimonial-section">
      <h1 className="testimony-heading">What our users say?</h1>
      <div className="testimony-content">
        {reviews.map((Addreview, index) => (
          <Review
            key={index}
            reviewerPhoto={Addreview.reviewerPhoto}
            name={Addreview.name}
            title={Addreview.title}
            testimony={Addreview.testimony}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
