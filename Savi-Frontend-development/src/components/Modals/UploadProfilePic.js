import React from "react";
import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import PicUpload from "../../assets/svg/pic-upload.svg";

export const UploadProfilePic = ({ isOpen, onClose }) => {
  const InputRef = React.useRef(null);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p="32px">
          <Flex
            flexDir="column"
            textAlign="center"
            color="#101828"
          >
            <Text fontSize="16px" fontWeight="600" mb="2px">
              Upload your Image
            </Text>
            <Text fontSize="14px" fontWeight="400" mb="32px">
              PNG, JPG and GIF file are allowed
            </Text>
            <Flex
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              border="1px dashed #E5E7EB"
              width="100%"
              height="214px"
              cursor="pointer"
              onClick={() => {
                InputRef.current.click();
              }}
            >
              <Image
                w="70px"
                h="45px"
                src={PicUpload}
                alt="pic-upload"
                mb="50px"
              />
              <Text fontSize="16px" fontWeight="500" mb="5px">
                Drop your files here or{" "}
                <span style={{ color: "#3b82f6" }}>browse</span>
              </Text>
              <Text fontSize="14px" fontWeight="500" color="#9ca3af">
                Maximum size: 50MB
              </Text>
              <input type="file" style={{ display: "none" }} ref={InputRef} />
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
