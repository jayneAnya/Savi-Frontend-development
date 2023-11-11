import {
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
  useToast,
} from "@chakra-ui/react";
import { amountSchema } from "../../utils/schemas/amount";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useMemo } from "react";
import { ButtonComp } from "../common";
import { usePaystackPayment } from "react-paystack";
// import { verifyPayment } from "../../api/payments";
import { fundTarget } from "../../api/payments";

export const DepositModal = ({ isOpen, onClose, id }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");
  const toast = useToast();

  // const onSuccess = ({ reference, ...rest }) => {
  //   verifyPayment(reference).then((verification) => {
  //     console.log(reference, rest);
  //     if (verification) {
  //       setAmount(0);
  //       onClose();
  //     }
  //     setIsLoading(false);
  //   });
  // };
  // const onClosePaystack = () => {
  //   setIsLoading(false);
  //   setAmount(0);
  //   onClose();
  // };

  // const config = {
  //   reference: new Date().getTime().toString(),
  //   email: "test@gmail.com",
  //   amount: amount * 100,
  //   publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  // };

  // const initializePayment = usePaystackPayment(config);

  const onSubmit = () => {
    setIsLoading(true);
    // initializePayment(onSuccess, onClosePaystack);
    const response = fundTarget(id, amount);
    if (response) {
      setIsLoading(false);
      setAmount(0);
      onClose();
      window.location.reload();
      toast({
        title: "Success",
        description: "Target funded successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const generateError = async (amount) => {
    try {
      await amountSchema.validate({ amount });
      setErrorMessage("");
    } catch (error) {
      console.log(error?.message);
      setErrorMessage(error?.message);
    }
  };

  useEffect(() => {
    generateError(amount);
  }, [amount]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="35px 40px" borderRadius="8px">
          <ModalBody>
            <Flex justifyContent="center" alignItems="center" flexDir="column">
              <Text fontSize="24px" fontWeight="700" mb="32px">
                Add to Your Savings
              </Text>
              <FormControl
                mb="32px"
                id="amount"
                isRequired
                isInvalid={errorMessage}
              >
                <FormLabel fontSize="16px" fontWeight="600" htmlFor="amount">
                  Amount to Deposit
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Type the amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <FormErrorMessage>{errorMessage}</FormErrorMessage>
              </FormControl>
              <ButtonComp
                label={
                  <h5 className="btntext" style={{ padding: "12px 16px" }}>
                    Submit
                  </h5>
                }
                width="100%"
                onClick={onSubmit}
                disabled={!amount || isLoading}
                isLoading={isLoading}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
