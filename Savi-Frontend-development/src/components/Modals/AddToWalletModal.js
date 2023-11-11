import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { amountSchema } from "../../utils/schemas/amount";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonComp } from "../common";

export const AddToWalletModal = ({ isOpen, onClose }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(amountSchema),
  });

  const onSubmit = (data) => {
    console.log("data", data);
    reset();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="35px 40px" borderRadius="8px">
          <ModalBody>
            <Flex justifyContent="center" alignItems="center" flexDir="column">
              <Text fontSize="24px" fontWeight="700" mb="32px">
                Access Your wallet
              </Text>
              <FormControl
                id="amount"
                isRequired
                isInvalid={errors?.amount?.message}
              >
                <FormLabel fontSize="16px" fontWeight="600">
                  Amount
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Type the amount"
                  {...register("amount")}
                />
                <FormErrorMessage>{errors?.amount?.message}</FormErrorMessage>
              </FormControl>
              <ButtonComp
                label={
                  <h5 className="btntext" style={{ padding: "12px 16px" }}>
                    Submit
                  </h5>
                }
                width="100%"
                onClick={handleSubmit(onSubmit)}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
