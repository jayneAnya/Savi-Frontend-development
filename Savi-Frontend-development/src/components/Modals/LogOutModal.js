import React from "react";
import CloseBtn from "../../assets/svg/CloseBtn.svg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Img,
  Text,
  Flex,
} from "@chakra-ui/react";
import { StorageKeys } from "../../utils/contants";
import { ButtonComp } from "../common";

export const LogOutModal = ({ isOpen, onClose }) => {
  const handleLogout = () => {
    localStorage.removeItem(StorageKeys.TOKEN);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userId");
    onClose();
    window.location.reload();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="61px 38px">
        <ModalCloseButton  variant="none"/>
        <ModalBody w="384px">
          <Flex justifyContent="center" flexDir="column" alignItems="center">
            <Img
              src={CloseBtn}
              alt="close button"
              alignSelf="center"
              mb="22px"
            />
            <Text fontSize="20px" fontWeight="500" mb="24px">
              Are you sure you want to log out?
            </Text>
            <ButtonComp label={<h5>Log out</h5>} width="100%" onClick={handleLogout} />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
