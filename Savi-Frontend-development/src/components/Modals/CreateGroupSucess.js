import React from "react";
import FacebookIcon from "../../assets/svg/FacebookPurple.svg";
import InstagramIcon from "../../assets/svg/InstagramPurple.svg";
import TelegramIcon from "../../assets/svg/TelegramPurple.svg";
import TwitterIcon from "../../assets/svg/TwitterPurple.svg";
import MessengerIcon from "../../assets/svg/messengericon.svg";
import { ReactComponent as MyIcon } from "../../assets/svg/reset-success-icon.svg";
import { ReactComponent as MyIcon2 } from "../../assets/svg/icons8-cancels.svg";
import {
  Flex,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export const CreateGroupSucess = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="24px">
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
                <Text
                  mb="22px"
                  fontSize="16px"
                  fontWeight="400"
                  letterSpacing="0.15px"
                  lineHeight="140%"
                  color="#101828"
                  textAlign="center"
                >
                  Your new savings group was successfully created. As
                  participants join, you will be notified, and the savings will
                  start as soon as all available slots are filled.
                </Text>
                <Flex flexDir="column">
                  <Text
                    textAlign="center"
                    fontSize="16px"
                    fontWeight="500"
                    mb="16px"
                  >
                    Share on social media:
                  </Text>
                  <Flex>
                    <Image src={FacebookIcon} mr="24px" />
                    <Image src={InstagramIcon} mr="24px" />
                    <Image src={TelegramIcon} mr="24px" />
                    <Image src={TwitterIcon} mr="24px" />
                    <Image src={MessengerIcon} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
