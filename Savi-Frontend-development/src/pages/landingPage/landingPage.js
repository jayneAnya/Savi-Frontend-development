import React from "react";
import FeaturesSection from "./featuresSection";
import HowItWorksSection from "./howItWorksSection";
import WhySaviSection from "./whyUseSaviSection";
import TestimonialSection from "./testimonialsSection";
// import NewsLetterSection from "./newsletterSection";
import '../../assets/scss/landingPage.scss';
import { NavbarComp } from "../../components/common";
import { HeaderComp } from "../../components";
import { FooterComp } from "../../components/common";


export const LandingPage = () => {
  return (
    <div className="my-comp">
        <NavbarComp />
        <HeaderComp />
        <FeaturesSection />
        <HowItWorksSection />
        <WhySaviSection />
        <TestimonialSection />
        {/* <NewsLetterSection /> */}
        <FooterComp />
    </div>
  );
}

export default LandingPage;