import React from "react";
import Logo from "../../assets/svg/Savi..svg";
import { ButtonComp } from "../../components/common/Button";
import "../../assets/scss/navbar.scss";
import { useNavigate } from "react-router-dom";



export const NavbarComp = () => {
  const navigate = useNavigate();
  const handleSendInstructions = () => {
    // Perform any necessary actions here

    // Navigate to ResetPassword2
    navigate("/sign-up");
  };

  return (
    <div className="navbar">
        <div className="navbar__container">
          <div className="navbar--logo" href="#home">
            <img
              src={Logo}
              alt="logo"
            />
          </div>
          <ButtonComp label="Get Started" onClick={handleSendInstructions} />
        </div>
      </div>
  );
};
