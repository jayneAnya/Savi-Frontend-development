import React from "react";
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

export const TargetSuccess = ({ isOpen, onClose, handleSubmit }) => {
  return (
    <>
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
              <Flex flexDir="column" alignItems="center" mt="22px">
                <Text mb="22px" fontSize="24px" fontWeight="500" color="#000">
                  Success!
                </Text>
                <Text mb="34px">
                  You've updated your Saving Goals List. Good Luck in achieving
                  your target!
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
