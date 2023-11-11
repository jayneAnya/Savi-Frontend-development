import React from "react";
import { ButtonComp } from "../common/Button";
import { kycSchema } from "../../utils/schemas/kyc";
import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Grid,
  FormErrorMessage,
  GridItem,
  FormControl,
  Input,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { FormLabel } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIndentityTypes } from "../../hooks/useIndentityTypes";
import { useOccupation } from "../../hooks/useGetOccupation";
import { KYCCompletionPrompt } from "./KycPrompt";
import { useForm } from "react-hook-form";

export const KycVerify = ({ onClose, isOpen }) => {
  const InputRef = React.useRef(null);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(kycSchema),
  });

  const { data: identityTypes } = useIndentityTypes();
  const { data: occupation } = useOccupation();


  const {
    onOpen: onOpenKyc,
    onClose: onCloseKyc,
    isOpen: isOpenKyc,
  } = useDisclosure();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    onClose();
    onOpenKyc();
  };
  
  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="outside"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody py="32px" px="40px">
            <Text
              fontSize="24px"
              fontWeight="700"
              mb="8px"
              color="#000"
              textAlign="center"
            >
              Complete Your KYC Verification
            </Text>
            <Flex w="100%" justifyContent="center">
              <Text textAlign="center" width="74%" mb="32px">
                Please complete the KYC verification process to unlock the full
                features and benefits of{" "}
                <span style={{ color: "#b5179e" }}>Savi.</span>
              </Text>
            </Flex>
            <form>
              <Grid templateColumns="repeat(8, 1fr)">
                <GridItem
                  colSpan="4"
                  pr="12px"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl
                    id="gender"
                    isRequired
                    isInvalid={errors?.gender?.message}
                  >
                    <FormLabel htmlFor="gender">Gender</FormLabel>
                    <Select
                      mt="8px"
                      borderColor="#D0D5DD"
                      _focus={{
                        borderColor: "#D0D5DD",
                        boxShadow: "none",
                      }}
                      {...register("gender")}
                    >
                      <option value="" hidden>
                        Select your Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="Female">Female</option>
                    </Select>
                    <FormErrorMessage>
                      {errors?.gender?.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan="4"
                  pl="12px"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl
                    id="occupation"
                    isRequired
                    isInvalid={errors?.occupation?.message}
                  >
                    <FormLabel htmlFor="occupation" mb="8px">
                      Occupation
                    </FormLabel>
                    <Select
                      mt="8px"
                      borderColor="#D0D5DD"
                      _focus={{
                        borderColor: "#D0D5DD",
                        boxShadow: "none",
                      }}
                      {...register("occupation")}
                    >
                      <option value="" hidden>
                        Select your Occupation
                      </option>
                      {occupation?.map((types) => (
                      <option value={types} key={types}>{types}</option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors?.occupation?.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan="4"
                  my="24px"
                  pr="12px"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl id="dob" isRequired
                  isInvalid={errors?.dob?.message}
                  >
                    <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                    <Input
                      type="date"
                      mt="8px"
                      borderColor="#D0D5DD"
                      _focus={{
                        borderColor: "#D0D5DD",
                        boxShadow: "none",
                      }}
                      placeholder="Pick your D.O.B"
                      {...register("dob")}
                    />
                    <FormErrorMessage>{errors?.dob?.message}</FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem
                  my="24px"
                  colSpan="4"
                  pl="12px"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl id="idType" isRequired
                  isInvalid={errors?.idType?.message}
                  >
                    <FormLabel htmlFor="idType" mb="8px">
                      Identification Type
                    </FormLabel>
                    <Select
                      mt="8px"
                      borderColor="#D0D5DD"
                      _focus={{
                        borderColor: "#D0D5DD",
                        boxShadow: "none",
                      }}
                      {...register("idType")}
                    >
                      <option value="" hidden>
                        Select your Type
                      </option>
                      {identityTypes?.map((type) => (
                      <option value={type} key={type}>{type}</option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors?.idType?.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan="8"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl id="bvn" isRequired
                  isInvalid={errors?.bvn?.message}
                  >
                    <FormLabel htmlFor="bvn">BVN</FormLabel>
                    <Input
                      type="text"
                      mt="8px"
                      borderColor="#D0D5DD"
                      _focus={{
                        borderColor: "#D0D5DD",
                        boxShadow: "none",
                      }}
                      placeholder="Input your BVN"
                      {...register("bvn")}
                    />
                    <FormErrorMessage>
                      {errors?.bvn?.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan="8"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl id="address" mt="24px" isRequired
                  isInvalid={errors?.address?.message}
                  >
                    <FormLabel htmlFor="address">Address</FormLabel>
                    <Input
                      type="text"
                      h="48px"
                      mt="8px"
                      borderColor="#D0D5DD"
                      _focus={{
                        borderColor: "#D0D5DD",
                        boxShadow: "none",
                      }}
                      {...register("address")}
                    />
                    <FormErrorMessage>
                      {errors?.address?.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan="8"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl id="idNum" mt="24px" isRequired
                  isInvalid={errors?.idNum?.message}
                  >
                    <FormLabel htmlFor="idNum">Identification Number</FormLabel>
                    <Input
                      type="text"
                      mt="8px"
                      borderColor="#D0D5DD"
                      _focus={{
                        borderColor: "#D0D5DD",
                        boxShadow: "none",
                      }}
                      placeholder="Input your identification Number"
                      {...register("idNum")}
                    />
                    <FormErrorMessage>
                      {errors?.idNum?.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan="8"
                  my="24px"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl id="documentId">
                    <FormLabel htmlFor="documentId">
                      Upload Identification Document
                    </FormLabel>
                    <Flex
                      h="129px"
                      flexDir="column"
                      border="1px dashed #98a2b3"
                      borderRadius="8px"
                      justifyContent="center"
                      alignItems="center"
                      mt="8px"
                      cursor="pointer"
                      onClick={() => {
                        InputRef.current.click();
                      }}
                    >
                      <Input
                        type="file"
                        display="none"
                        borderColor="#D0D5DD"
                        _focus={{
                          borderColor: "#D0D5DD",
                          boxShadow: "none",
                        }}
                        placeholder="Input your BVN"
                        ref={InputRef}
                      />
                      <Text
                        color="#1f2937"
                        fontSize="16px"
                        fontWeight="500"
                        mb="5px"
                      >
                        Drop your files here or{" "}
                        <span
                          style={{
                            color: "#3b82f6",
                          }}
                        >
                          browse
                        </span>
                      </Text>
                      <Text color="#9ca3af" fontSize="14px">
                        Maximum size: 50MB
                      </Text>
                    </Flex>
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan="8"
                  my="24px"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl id="pof">
                    <FormLabel htmlFor="pof">Upload proof of Address</FormLabel>
                    <Flex
                      h="129px"
                      flexDir="column"
                      border="1px dashed #98a2b3"
                      borderRadius="8px"
                      justifyContent="center"
                      alignItems="center"
                      mt="8px"
                      cursor="pointer"
                      onClick={() => {
                        InputRef.current.click();
                      }}
                    >
                      <Input
                        type="file"
                        display="none"
                        borderColor="#D0D5DD"
                        _focus={{
                          borderColor: "#D0D5DD",
                          boxShadow: "none",
                        }}
                        placeholder="Input your BVN"
                        ref={InputRef}
                      />
                      <Text
                        color="#1f2937"
                        fontSize="16px"
                        fontWeight="500"
                        mb="5px"
                      >
                        Drop your files here or{" "}
                        <span
                          style={{
                            color: "#3b82f6",
                          }}
                        >
                          browse
                        </span>
                      </Text>
                      <Text color="#9ca3af" fontSize="14px">
                        Maximum size: 50MB
                      </Text>
                    </Flex>
                  </FormControl>
                </GridItem>
              </Grid>
              <ButtonComp
                label={
                  <h5 className="btntext" style={{ padding: "12px 16px" }}>
                    Submit
                  </h5>
                }
                width="100%"
                onClick={handleSubmit(onSubmit)}
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <KYCCompletionPrompt isOpen={isOpenKyc} onClose={onCloseKyc} />
    </>
  );
};
