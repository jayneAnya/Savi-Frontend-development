import React from "react";
import { ButtonComp } from "./common/Button";
import "../assets/scss/header.scss";
import { useNavigate } from "react-router-dom";


export const HeaderComp = () => {
  const navigate = useNavigate();
  
  const handleSendInstructions = () => {
    // Perform any necessary actions here

    // Navigate to ResetPassword2
    navigate("/sign-up");
  };
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container--text">
          <h1 className="header__container--title">
            Achieve Financial Success with{" "}
            <span className="header__container--purple">Savi: </span> The Future
            of <span className="header__container--purple">Smart Savings</span>.
          </h1>
          <p className="header__container--subtitle">
            Experience the convenience of secure group savings and personalized
            savings plans with Savi. Take control of your finances and unlock a
            brighter financial future.
          </p>
            <ButtonComp label="Get Started" width="161px" onClick={handleSendInstructions}/>
        </div>
      </div>
    </div>
  );
};
