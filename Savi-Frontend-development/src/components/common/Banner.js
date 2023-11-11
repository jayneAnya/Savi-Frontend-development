import React from "react";
import "../../assets/scss/banner.scss";
import  { KycVerify }  from "../Modals";
import { useDisclosure } from "@chakra-ui/react";

export const Banner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="banner">
      <p className="banner__text">
        Complete account setup.{" "}
        <span className="banner__text--anchor" onClick={onOpen}>
          Click here
        </span>
      </p>
      <KycVerify isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
