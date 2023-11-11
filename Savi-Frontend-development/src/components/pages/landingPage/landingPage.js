import React from "react";
import FeaturesSection from "./featuresSection";
import HowItWorksSection from "./howItWorksSection";
import WhySaviSection from "./whyUseSaviSection";
import TestimonialSection from "./testimonialsSection";
import NewsLetterSection from "./newsletterSection";
import './landingPageStyles/landingPage.scss';

export const LandingPage = () => {
  return (
    <div className="my-component">
      <div className="inner-div">
        <FeaturesSection />
        <HowItWorksSection />
        <WhySaviSection />
        <TestimonialSection />
        <NewsLetterSection />
      </div>
    </div>
  );
};
