import React, { useEffect, useRef, useState } from "react";
import { verifyPayment } from "../../api/payments";
import { Flex, Text, useToast } from "@chakra-ui/react";

export const PaymentVerification = () => {


  const [isLoading, setIsLoading] = useState(false);
  const checkRan = useRef(false);
  const toast = useToast();

  useEffect(() => {
    if (checkRan.current) {
      return;
    }
    checkRan.current = true;
    const reference = new URLSearchParams(window.location.search).get(
      "reference"
    );
    console.log({ reference });
    setIsLoading(true);
    verifyPayment(reference)
      .then((verification) => {
        if (verification) {
          toast({
            title: "Success",
            description: "Payment verified successfully",
            position: "top-right",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setIsLoading(false);
          window.location.href = "/dashboard";
        }
        setIsLoading(false);
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Unable to verify payment",
          position: "top-right",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setIsLoading(false);
      });
  }, []);

  return (
    <Flex>
      <Text
        fontSize="32px"
        fontWeight="700"
        textAlign="center"
        justifyContent="center"
        color="#000"
        mt="20px"
        ml="24px"
      >
        Please wait while we verify your payment...
      </Text>
    </Flex>
  );
};
