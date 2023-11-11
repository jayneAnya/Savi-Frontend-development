import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Select,
  Text,
  Button,
  FormErrorMessage,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { createTargetSchema } from "../../utils/schemas/createTarget";
import { useMutation } from "@tanstack/react-query";
import { CreateTarget } from "../../api/target";
import { AddTargetSuccess } from "./AddTargetSucess";

export const AddTargets = ({ onClose, isOpen }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createTargetSchema),
  });
const toast = useToast();
  const {
    isOpen: isOpenAdd,
    onOpen: onOpenAdd,
    onClose: onCloseAdd,
  } = useDisclosure();

  const { mutate, isLoading } = useMutation((data) => CreateTarget(data), {
    onSuccess: (data) => {
      console.log(data);
      onOpenAdd();
       window.location.reload();
    },
    onError: (error) => {
      console.log(error);
      toast({
        title: "Error",
        description: "Error creating Savings target",
        position: "top-right",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    },
  });

  const onSubmit = (data) => {
    mutate(data);
    reset();
    onClose();
  };
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="32px 40px">
            <Flex flexDir="column" justifyContent="center" alignItems="center">
              <Text fontSize="24px" fontWeight="700">
                Set a Target
              </Text>
              <Text
                mt="8px"
                textAlign="center"
                fontSize="16px"
                fontWeight="400px"
              >
                Create and track multiple saving goals to achieve your financial
                targets
              </Text>
              <FormControl
                id="target"
                isRequired
                isDisabled={isLoading}
                isInvalid={errors?.target?.message}
                mt="32px"
              >
                <FormLabel htmlFor="target">Target Name</FormLabel>
                <Input
                  type="text"
                  borderColor="#D0D5DD"
                  _focus={{
                    borderColor: "#D0D5DD",
                    boxShadow: "none",
                  }}
                  placeholder="Type here"
                  {...register("target")}
                />
                {<FormErrorMessage>{errors?.target?.message}</FormErrorMessage>}
              </FormControl>
              <FormControl
                id="targetAmount"
                isRequired
                isDisabled={isLoading}
                isInvalid={errors?.targetAmount?.message}
                mt="24px"
              >
                <FormLabel htmlFor="targetAmount">Target Amount</FormLabel>
                <Input
                  type="text"
                  borderColor="#D0D5DD"
                  _focus={{
                    borderColor: "#D0D5DD",
                    boxShadow: "none",
                  }}
                  placeholder="Type here"
                  {...register("targetAmount")}
                />
                {
                  <FormErrorMessage>
                    {errors?.targetAmount?.message}
                  </FormErrorMessage>
                }
              </FormControl>
              <FormControl
                id="amountToSave"
                isRequired
                isDisabled={isLoading}
                isInvalid={errors?.amountToSave?.message}
                mt="24px"
              >
                <FormLabel htmlFor="amountToSave">Amount to Save</FormLabel>
                <Input
                  type="text"
                  borderColor="#D0D5DD"
                  _focus={{
                    borderColor: "#D0D5DD",
                    boxShadow: "none",
                  }}
                  placeholder="Numbers only"
                  {...register("amountToSave")}
                />
                {
                  <FormErrorMessage>
                    {errors?.amountToSave?.message}
                  </FormErrorMessage>
                }
              </FormControl>
              <FormControl
                id="frequency"
                isRequired
                isInvalid={errors?.frequency?.message}
                isDisabled={isLoading}
                mt="24px"
              >
                <FormLabel htmlFor="frequency">Frequency</FormLabel>
                <Select
                  borderColor="#D0D5DD"
                  _focus={{
                    borderColor: "#D0D5DD",
                    boxShadow: "none",
                  }}
                  {...register("frequency")}
                >
                  <option value="" hidden>
                    Pick your frequency
                  </option>
                  <option value={0}>Daily</option>
                  <option value={1}>Weekly</option>
                  <option value={2}>Monthly</option>
                </Select>
                {
                  <FormErrorMessage>
                    {errors?.frequency?.message}
                  </FormErrorMessage>
                }
              </FormControl>
              <FormControl
                id="startDate"
                isRequired
                isDisabled={isLoading}
                isInvalid={errors?.startDate?.message}
                mt="24px"
              >
                <FormLabel htmlFor="startDate">Start Date</FormLabel>
                <Input
                  type="date"
                  borderColor="#D0D5DD"
                  _focus={{
                    borderColor: "#D0D5DD",
                    boxShadow: "none",
                  }}
                  min={new Date().toISOString().split("T")[0]}
                  placeholder="Numbers only"
                  {...register("startDate")}
                />
                {
                  <FormErrorMessage>
                    {errors?.startDate?.message}
                  </FormErrorMessage>
                }
              </FormControl>
              <FormControl
                id="withdrawalDate"
                isRequired
                isDisabled={isLoading}
                isInvalid={errors?.withdrawalDate?.message}
                mt="16px"
              >
                <FormLabel htmlFor="withdrawalDate">Withdrawal Date</FormLabel>
                <Input
                  type="date"
                  borderColor="#D0D5DD"
                  _focus={{
                    borderColor: "#D0D5DD",
                    boxShadow: "none",
                  }}
                  min={new Date().toISOString().split("T")[0]}
                  placeholder="Pick your date"
                  {...register("withdrawalDate")}
                />
                {
                  <FormErrorMessage>
                    {errors?.withdrawalDate?.message}
                  </FormErrorMessage>
                }
              </FormControl>
              <Button
                mt="24px"
                bg="#b5179e"
                w="100%"
                color="#fff"
                isLoading={isLoading}
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <AddTargetSuccess isOpen={isOpenAdd} onClose={onCloseAdd} />
    </>
  );
};
