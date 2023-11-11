import React from "react";
import "../../assets/scss/howItWorksSection.scss";
import howItWorksPhoto from "../../assets/images/HowItWorksPhoto.png";
import HowSaviWorks from "./howSaviWorks";

const HowItWorksSection = () => {
  const features = [
    {
      number: "1",
      title: "Sign Up in Seconds",
      description: "Create account with Savi and start saving.",
    },
    {
      number: "2",
      title: "Join or Create Thrift Groups",
      description:
        "Create your account quickly and start your savings journey within moments.",
    },
    {
      number: "3",
      title: "Automated Contributions",
      description:
        "Schedule automatic transfers from your wallet to your savings group for hassle-free saving.",
    },
    {
      number: "4",
      title: "Track and Celebrate",
      description:
        "Monitor your savings growth, view contributions, and celebrate milestones on our user-friendly dashboard.",
    },
  ];
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-content">
        <h3 className="how-it-works-content-heading">How It Works</h3>
        <div className="item-container">
          {features.map((feature) => (
            <HowSaviWorks
              key={feature.number}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <div className="how-it-works-content-image-container">
        <img
          src={howItWorksPhoto}
          alt="HowItWorksPhoto.png"
          className="image"
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
