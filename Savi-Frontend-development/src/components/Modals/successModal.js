import React from "react";
import { ButtonComp } from "../common/Button";
import { ReactComponent as MyIcon } from "../../assets/svg/reset-success-icon.svg";
import { ReactComponent as MyIcon2 } from "../../assets/svg/icons8-cancels.svg";
import "../../assets/scss/resetPassword.scss";
import {
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export const SuccessModal = ({ isOpen, onClose, handleSubmit }) => {
  return (
    <>
      <ButtonComp
        label={<h5 className="btntext">Reset Password</h5>}
        width="100%"
        onClick={handleSubmit}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody h="100%">
            <Flex flexDir="column">
              <Flex w="100%" justifyContent="flex-end" mb="21px">
                <IconButton
                  icon={<MyIcon2 />}
                  onClick={onClose}
                  variant="unstyled"
                  _focus={{
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
              </Flex>
              <Flex justifyContent="center">
                <MyIcon style={{ width: "70px", height: "70px" }} />
              </Flex>
              <Flex flexDir="column"  alignItems="center" mt="22px">
                <Text mb="22px" fontSize="24px" fontWeight="500" color="#000">
                  Password Reset successful!
                </Text>
                <Text mb="34px" w="361px" color="#000"  textAlign="center">
                  Your password has been charged successfully. Use your new
                  password to log in.
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
