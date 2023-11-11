import React from "react";
import users from "../../assets/icons/usersIcon.svg";
import moneyIcon from "../../assets/icons/money-withdrawal.svg";
import shieldIcon from "../../assets/icons/shield-alt.svg";
import walletIcon from "../../assets/icons/Wallet.svg";
//import arrowIcon from '../../../assets/icons/Arrow.svg';
import AddFeature from "./addFeatures";
import "../../assets/scss/featuresSection.scss";

const FeaturesSection = () => {
  const cardDetails = [
    {
      icon: users,
      title: "Join Thrift Groups",
      description:
        "Save collectively with rotating lump sum payouts, eliminating risks of traditional methods.",
    },
    {
      icon: moneyIcon,
      title: "Hassle-Free",
      description:
        "Enjoy rotating lump sum payouts, ensuring fair distribution among group members",
    },
    {
      icon: shieldIcon,
      title: "Secure and Convenient",
      description:
        "Enjoy peace of mind with robust security measures and user-friendly wallet management.",
    },
    {
      icon: walletIcon,
      title: "Easy Wallet Management",
      description:
        "Seamlessly manage your funds, add money, and withdraw when you need it.",
    },
  ];
  return (
    <section className="features-section">
      {cardDetails.map((cardDetail) => (
        <AddFeature
          key={cardDetail.title}
          icon={cardDetail.icon}
          title={cardDetail.title}
          description={cardDetail.description}
          marginRight={
            cardDetail.title === "Easy Wallet Management" ? "0px" : "30px"
          }
        />
      ))}
    </section>
  );
};

export default FeaturesSection;
