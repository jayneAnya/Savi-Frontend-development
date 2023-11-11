import React from "react";
import "../../assets/scss/card.scss";
import { Button, Image, useDisclosure } from "@chakra-ui/react";
import DepoIcon from "../../assets/svg/whiteAdd.svg";
import { AddToWalletModal } from "../Modals/AddToWalletModal";

export const CardComp = ({ icon, text, amount, targets }) => {
  console.log(targets);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="cardDash">
      <img src={icon} alt="people" />
      <div className="cardDash__note">
        <p className="cardDash__text">{text}</p>
        <p className="cardDash__amount">
        ₦{targets?.[0]?.cumulativeAmount || amount}.00
        </p>
      </div>
      {/* <Button
        bg="#B5179E"
        color="#fff"
        borderRadius="16px"
        _hover={{
          backgroundColor: "#d374c5",
        }}
        leftIcon={<Image src={DepoIcon} alt="Deposit icon" />}
        onClick={onOpen}
      >
        Add Money
      </Button> */}
      <AddToWalletModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
