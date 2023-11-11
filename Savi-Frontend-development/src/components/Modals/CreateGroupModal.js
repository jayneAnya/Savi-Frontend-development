import React from "react";
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
  Image,
  FormLabel,
  Textarea,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import PicUpload from "../../assets/svg/pic-upload.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createGroupSchema } from "../../utils/schemas/createGroup";
import { useMutation } from "@tanstack/react-query";
import { CreateGroup } from "../../api/groups";
import { CreateGroupSucess } from "./CreateGroupSucess";
import { UploadImgToCloud } from "../../api/uploadImgToCloud";
import { useDropzone } from "react-dropzone";

export const CreateGroupModal = ({ isOpen, onClose }) => {
  const [imgFile, setImgFile] = React.useState(null);

  const {
    isOpen: isOpenCreate,
    onOpen: onOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createGroupSchema),
  });
  const toast = useToast();
  const { mutate, isLoading } = useMutation((data) => CreateGroup(data), {
    onSuccess: (data) => {
      onOpenCreate();
    },
    onError: (error) => {
      console.log(error);
      toast({
        title: "Error",
        description: "Error creating Savings group",
        position: "top-right",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    },
  });

  const { getRootProps, getInputProps, openPicker } = useDropzone({
    accept: {
      "image/*": [".png", ".gif", ".jpeg", ".jpg"],
    },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImgFile(
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
    },
  });

  const onSubmit = async (data) => {
    data.userId = localStorage.getItem("userId");
    data.expectedendDate = new Date(data.expectedendDate).toISOString();
    data.expectedstartDate = new Date(data.expectedstartDate).toISOString();
    data.contributionAmount = parseInt(data.contributionAmount);
    if (imgFile) {
      const data = await UploadImgToCloud({imgFile});
      console.log(data);
    }
    console.log(data);
    // mutate(data);
    // reset();
    // onClose();
  };

  const time = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

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
          <ModalBody p="32px 24px 32px 40px">
            <Flex flexDir="column">
              <Text fontSize="24px" fontWeight="500" mb="24px" color="#000">
                Create New Savings Group
              </Text>
              {imgFile && (
                <Image
                  height="214px"
                  {...getRootProps()}
                  src={imgFile.preview}
                />
              )}
              {!imgFile && (
                <Flex
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="8px"
                  border="1px dashed #E5E7EB"
                  height="214px"
                  cursor="pointer"
                  {...getRootProps()}
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
                    drop a picture that represents the title of your savings
                    group here.
                  </Text>
                  <input
                    // type="file"
                    // style={{ display: "none" }}
                    {...getInputProps()}
                  />
                </Flex>
              )}
              <GridItem
                colSpan="8"
                color="#101828"
                fontSize="16px"
                fontWeight="600"
                mt="24px"
              >
                <FormControl
                  id="savesName"
                  isRequired
                  isDisabled={isLoading}
                  isInvalid={errors?.savesName?.message}
                >
                  <FormLabel htmlFor="savesName">Group name</FormLabel>
                  <Input
                    type="text"
                    borderColor="#D0D5DD"
                    _focus={{
                      borderColor: "#D0D5DD",
                      boxShadow: "none",
                    }}
                    placeholder="Enter the name of the group"
                    {...register("savesName")}
                  />
                  {
                    <FormErrorMessage>
                      {errors?.savesName?.message}
                    </FormErrorMessage>
                  }
                </FormControl>
              </GridItem>
              <GridItem
                colSpan="8"
                color="#101828"
                fontSize="16px"
                fontWeight="600"
                mt="24px"
              >
                <FormControl
                  id="contributionAmount"
                  isRequired
                  isDisabled={isLoading}
                  isInvalid={errors?.contributionAmount?.message}
                >
                  <FormLabel htmlFor="contributionAmount">
                    Contribution amount
                  </FormLabel>
                  <Input
                    type="text"
                    borderColor="#D0D5DD"
                    _focus={{
                      borderColor: "#D0D5DD",
                      boxShadow: "none",
                    }}
                    placeholder="Enter the amount"
                    {...register("contributionAmount")}
                  />
                  {
                    <FormErrorMessage>
                      {errors?.contributionAmount?.message}
                    </FormErrorMessage>
                  }
                </FormControl>
              </GridItem>
              <Grid templateColumns="repeat(8, 1fr)">
                <GridItem
                  colSpan="4"
                  my="24px"
                  pr="12px"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl
                    id="expectedstartDate"
                    isRequired
                    isInvalid={errors?.expectedstartDate?.message}
                    isDisabled={isLoading}
                  >
                    <FormLabel htmlFor="startDate">
                      Expected start date
                    </FormLabel>
                    <Input
                      type="date"
                      borderColor="#D0D5DD"
                      _focus={{
                        borderColor: "#D0D5DD",
                        boxShadow: "none",
                      }}
                      min={new Date().toISOString().split("T")[0]}
                      placeholder="Select your start Date"
                      {...register("expectedstartDate")}
                    />
                    {
                      <FormErrorMessage>
                        {errors?.expectedstartDate?.message}
                      </FormErrorMessage>
                    }
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan="4"
                  my="24px"
                  pl="12px"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl
                    id="expectedendDate"
                    isRequired
                    isInvalid={errors?.expectedendDate?.message}
                    isDisabled={isLoading}
                  >
                    <FormLabel htmlFor="expectedendDate">
                      Expected end date
                    </FormLabel>
                    <Input
                      type="date"
                      borderColor="#D0D5DD"
                      _focus={{
                        borderColor: "#D0D5DD",
                        boxShadow: "none",
                      }}
                      placeholder="Select your end Date"
                      min={new Date().toISOString().split("T")[0]}
                      {...register("expectedendDate")}
                    />
                    {
                      <FormErrorMessage>
                        {errors?.endDate?.message}
                      </FormErrorMessage>
                    }
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan="4"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                  pr="12px"
                >
                  <FormControl
                    id="frequencyId"
                    isRequired
                    isInvalid={errors?.frequencyId?.message}
                    isDisabled={isLoading}
                  >
                    <FormLabel htmlFor="frequencyId" mb="8px">
                      Saving frequency
                    </FormLabel>
                    <Select
                      borderColor="#D0D5DD"
                      _focus={{
                        borderColor: "#D0D5DD",
                        boxShadow: "none",
                      }}
                      {...register("frequencyId")}
                    >
                      <option value="" hidden>
                        Select your Type
                      </option>
                      <option value={0}>Daily</option>
                      <option value={1}>Weekly</option>
                      <option value={2}>Monthly</option>
                    </Select>
                    {
                      <FormErrorMessage>
                        {errors?.frequencyId?.message}
                      </FormErrorMessage>
                    }
                  </FormControl>
                </GridItem>
                <GridItem
                  colSpan="4"
                  pl="12px"
                  color="#101828"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <FormControl id="numOfParticipant">
                    <FormLabel htmlFor="numOfParticipant">
                      Number of participants
                    </FormLabel>
                    <Input
                      type="text"
                      disabled
                      value="5"
                      borderColor="#D0D5DD"
                      _focus={{
                        borderColor: "#D0D5DD",
                        boxShadow: "none",
                      }}
                    />
                  </FormControl>
                </GridItem>
              </Grid>
              <GridItem
                colSpan="8"
                color="#101828"
                fontSize="16px"
                fontWeight="600"
                mt="24px"
              >
                <FormControl
                  id="runtime"
                  isRequired
                  isInvalid={errors?.runtime?.message}
                  isDisabled={isLoading}
                >
                  <FormLabel htmlFor="runtime">Time</FormLabel>
                  {/* <Input
                    type="Time"
                    borderColor="#D0D5DD"
                    _focus={{
                      borderColor: "#D0D5DD",
                      boxShadow: "none",
                    }}
                    placeholder="4:00 PM"
                    {...register("runtime")}
                  /> */}
                  <Select
                    borderColor="#D0D5DD"
                    _focus={{
                      borderColor: "#D0D5DD",
                      boxShadow: "none",
                    }}
                    {...register("runtime")}
                  >
                    <option value="" hidden>
                      Select your Time
                    </option>
                    {time.map((t) => (
                      <option value={t} key={t}>
                        {t}
                      </option>
                    ))}
                  </Select>

                  {
                    <FormErrorMessage>
                      {errors?.runtime?.message}
                    </FormErrorMessage>
                  }
                </FormControl>
              </GridItem>
              <GridItem
                colSpan="8"
                color="#101828"
                fontSize="16px"
                fontWeight="600"
                mt="24px"
              >
                <FormControl
                  id="purPoseAndGoal"
                  isRequired
                  isInvalid={errors?.purPoseAndGoal?.message}
                  isDisabled={isLoading}
                >
                  <FormLabel htmlFor="purPoseAndGoal">
                    Purpose and Goals
                  </FormLabel>
                  <Textarea
                    type="text"
                    borderColor="#D0D5DD"
                    _focus={{
                      borderColor: "#D0D5DD",
                      boxShadow: "none",
                    }}
                    placeholder="Notes to encourage users to join your saving group"
                    {...register("purPoseAndGoal")}
                  />
                  {
                    <FormErrorMessage>
                      {errors?.purPoseAndGoal?.message}
                    </FormErrorMessage>
                  }
                </FormControl>
              </GridItem>
              <GridItem
                colSpan="8"
                color="#101828"
                fontSize="16px"
                fontWeight="600"
                mt="24px"
              >
                <FormControl
                  id="termsAndCondition"
                  isRequired
                  isDisabled={isLoading}
                  isInvalid={errors?.termsAndCondition?.message}
                >
                  <FormLabel htmlFor="termsAndCondition">
                    Terms and Conditions
                  </FormLabel>
                  <Textarea
                    type="text"
                    borderColor="#D0D5DD"
                    _focus={{
                      borderColor: "#D0D5DD",
                      boxShadow: "none",
                    }}
                    placeholder="Enter your groups terms and conditions"
                    {...register("termsAndCondition")}
                  />
                  {
                    <FormErrorMessage>
                      {errors?.termsAndCondition?.message}
                    </FormErrorMessage>
                  }
                </FormControl>
              </GridItem>
              <Button
                bg="#b5179e"
                color="#fff"
                mt="24px"
                w="225px"
                fontSize="14px"
                fontWeight="600"
                borderRadius="100px"
                onClick={handleSubmit(onSubmit)}
                isLoading={isLoading}
              >
                Create New Group
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <CreateGroupSucess isOpen={isOpenCreate} onClose={onCloseCreate} />
    </>
  );
};
