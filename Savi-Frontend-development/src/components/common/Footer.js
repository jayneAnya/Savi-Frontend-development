import React from "react";
import "../../assets/scss/footer.scss";
import SaviWhiteLogo from "../../assets/svg/White_Logo.svg";
import Image from "react-bootstrap/Image";
import Twitter from "../../assets/svg/Twitter.svg";
import Instagram from "../../assets/svg/Instagram.svg";
import Youtube from "../../assets/svg/Youtube.svg";

export const FooterComp = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <Image
          src={SaviWhiteLogo}
          alt="logo"
          style={{ width: "71px", height: "45px", marginBottom: "40px" }}
        />
        <p className="footer__container--text">
          For more enquiries:{" "}
          <span style={{ marginLeft: "17px" }}>helpsupport@easylend.com</span>
        </p>
        <div
          className="footer__container--line"
        ></div>
        <div className="footer__container--social">
            <p className="footer__container--copyright">© 2023 EasyLend. All rights reserved</p>
            <div className="footer__container--icons">
                <Image className="footer__container--icon" src={Instagram} alt="Instagram_Logo"></Image>
                <Image className="footer__container--icon" src={Twitter} alt="Twitter_Logo"></Image>
                <Image className="footer__container--icon" src={Youtube} alt="Youtube_Logo"></Image>
            </div>
        </div>
      </div>
    </div>
  );
};
