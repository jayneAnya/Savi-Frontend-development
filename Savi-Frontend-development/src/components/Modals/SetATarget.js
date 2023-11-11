import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { ButtonComp } from "../common";
import { SuccessPrompt } from "../Modals";

export const SetTarget = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    target: "",
    targetAmount: "",
    frequency: "",
    startDate: "",
    withdrawalDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    // reset();
    closeSuccess();
    openSuccess();
  };

  const { onOpen: openSuccess, onClose: closeSuccess, isOpen: isSuccessOpen } = useDisclosure();

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="outside">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={(e) => handleSubmit(e)}>
            <ModalBody py="32px" px="40px">
              <Text
                fontSize="24px"
                fontWeight="700"
                mb="8px"
                color="#000"
                textAlign="center"
              >
                Set a Target
              </Text>
              <Flex
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <Text
                  textAlign="center"
                  width="100%"
                  mb="32px"
                  fontSize="16px"
                  fontWeight="400"
                >
                  Create and track multiple saving goals to achieve your financial
                </Text>
              </Flex>
              <FormControl>
                <FormLabel style={{ fontWeight: "bold" }}>Target</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your target"
                  name="target"
                  value={formData.target}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel style={{ fontWeight: "bold" }}>Target Amount</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter target amount"
                  name="targetAmount"
                  value={formData.targetAmount}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel style={{ fontWeight: "bold" }}>Frequency</FormLabel>
                <Select
                  mt="8px"
                  borderColor="#D0D5DD"
                  _focus={{
                    borderColor: "#D0D5DD",
                    boxShadow: "none",
                  }}
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleInputChange}
                >
                  <option value="" hidden>
                    Select frequency
                  </option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel style={{ fontWeight: "bold" }}>Amount to Save Per Time</FormLabel>
                <Input
                  type="number"
                  placeholder="E.g 10,000"
                  name="amountToSavePerTime"
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel style={{ fontWeight: "bold" }}>Start Date</FormLabel>
                <Input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel style={{ fontWeight: "bold" }}>Withdrawal Date</FormLabel>
                <Input
                  type="date"
                  name="withdrawalDate"
                  value={formData.withdrawalDate}
                  onChange={handleInputChange}
                />
              </FormControl>
              <ButtonComp 
                label={
                  <h5 className="btntext" style={{ padding: "12px 16px" }}>
                    Submit
                  </h5>
                }
                width="100%"
                onClick={(e) => onSubmit(formData, e)}
              />
            </ModalBody>
          </form>
        </ModalContent>
      </Modal>
      <SuccessPrompt isOpen={isSuccessOpen} onClose={closeSuccess} 
       title="Success!"
       content="You’ve updated your Saving Goals List. Good Luck in achieving your target!"/>
    </>
  );
};
