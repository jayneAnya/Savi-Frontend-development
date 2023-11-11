import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonComp } from "../common";
import { withdrawalSchema } from "../../utils/schemas/withdrawal";
export const WithdrawalModal = ({ isOpen, onClose }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(withdrawalSchema),
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
                Access Your Savings
              </Text>
              <FormControl
                mb="32px"
                id="amount"
                isRequired
                isInvalid={errors?.amount?.message}
              >
                <FormLabel fontSize="16px" fontWeight="600">
                  Amount to Withdraw
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Type the amount"
                  {...register("amount")}
                />
                <FormErrorMessage>{errors?.amount?.message}</FormErrorMessage>
              </FormControl>
              <FormControl
                mb="32px"
                id="walletId"
                isRequired
                isInvalid={errors?.walletId?.message}
              >
                <FormLabel fontSize="16px" fontWeight="600">
                  Wallet ID
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Input your wallet ID"
                  {...register("walletId")}
                />
                <FormErrorMessage>{errors?.walletId?.message}</FormErrorMessage>
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
