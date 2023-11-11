import React, { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CorperImg from "../../assets/svg/CorperPic.svg";
import { useGetGroups } from "../../hooks/useGetGroups";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BsThreeDotsVertical } from "react-icons/bs";
import { checkFreq } from "../../utils/common";
import { joinGroup } from "../../api/groups";
import { useMutation } from "@tanstack/react-query";
import { JoinGroupSuccess } from "../../components/Modals/joinGrpSucces";

export const ActiveSavingsCard = () => {
  const { data: groups } = useGetGroups();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groupId, setGroupId] = useState("");
  const toast = useToast();
  const { mutate, isLoading } = useMutation(
    (data, id) => joinGroup(data, groupId),
    {
      onSuccess: (data) => {
        onOpen();
      },
      onError: (error) => {
        toast({
          title: "Fail to join Group.",
          description: error?.response?.data?.displayMessage,
          position: "top-right",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  );

  const formSubmit = (data, id) => {
    mutate(data, id);
  };

  const navigate = useNavigate();
  return (
    <>
      <Flex flexDir="column" pl="39px" pt="24px" flex="1">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          mb="10px"
        >
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/groups"
              fontSize="14px"
              fontWeight="400"
              color="#98A2B3"
            >
              Active Savings Groups
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" fontSize="14px" fontWeight="600">
              Explore Groups
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between" alignItems="center" pr="9%">
          <Text fontSize="32px" pl="24px" fontWeight="700" color="#000">
            Explore Groups
          </Text>
        </Flex>
        {groups?.length > 0 &&
          groups?.map((grp) => (
            <Flex
              key={grp.id}
              maxW="954px"
              w="100%"
              h="358px"
              p="30px"
              mt="13px"
              boxShadow="0px 6px 16px 0px rgba(0, 0, 0, 0.16)"
            >
              <Flex>
                <Image src={CorperImg} alt="Corper" mr="30px" />
                <Flex flexDir="column">
                  <Flex justifyContent="space-between">
                    <Tag
                      w="92px"
                      h="47px"
                      alignItems="center"
                      justifyContent="center"
                      bgColor="#D1E9FF"
                      fontSize="16px"
                      fontWeight="500"
                      borderRadius="1678px"
                      color="#2E90FA"
                    >
                      Waiting
                    </Tag>
                    <AvatarGroup size="md" max={4} ml="211px">
                      <Avatar
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                    <Button
                      bgColor="#B5179E"
                      w="97px"
                      h="51px"
                      color="#fff"
                      ml="24px"
                      fontSize="16px"
                      fontWeight="600"
                      onClick={() => {
                        setGroupId(grp.id);
                        formSubmit({}, grp.id);
                      }}
                    >
                      Join
                    </Button>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<BsThreeDotsVertical />}
                        variant="unstyled"
                        ml="50px"
                      />
                      <MenuList>
                        <MenuItem>Leave Group</MenuItem>
                        <MenuItem>Report Group</MenuItem>
                        <MenuItem>View Details</MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                  <Text my="16px" fontSize="24px" fontWeight="500">
                    {grp.savesName}
                  </Text>
                  <Flex textAlign="Flex-end" mb="16">
                    <Text color="#667085" fontSize="16px" fontWeight="400">
                      {grp.purPoseAndGoal}
                    </Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Flex flexDir="column" pr="5%">
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="#98A2B3"
                        mb="10px"
                      >
                        Saving
                      </Text>
                      <Text>{`₦${grp.contributionAmount.toLocaleString()}`}</Text>
                    </Flex>
                    <Flex flexDir="column" pr="5%">
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="#98A2B3"
                        mb="10px"
                      >
                        Withdrawal
                      </Text>
                      <Text>{`₦${grp.contributionAmount.toLocaleString()}`}</Text>
                    </Flex>
                    <Flex flexDir="column" pr="5%">
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="#98A2B3"
                        mb="10px"
                      >
                        Saving Freq
                      </Text>
                      <Text>{checkFreq(grp.frequencyId)}</Text>
                    </Flex>
                    <Flex flexDir="column" pr="5%">
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="#98A2B3"
                        mb="10px"
                      >
                        Withdrawal Date
                      </Text>
                      <Text>{new Date(grp.runtime).toLocaleDateString()}</Text>
                    </Flex>
                    <Flex flexDir="column">
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="#98A2B3"
                        mb="10px"
                      >
                        Available Slots
                      </Text>
                      <Text>4</Text>
                    </Flex>
                  </Flex>
                  <Text
                    mt="16px"
                    color="#2F80ED"
                    fontSize="16px"
                    fontWeight="400"
                    cursor="pointer"
                    onClick={() => navigate(`/groups/explore/${grp.id}`)}
                  >
                    View Group
                  </Text>
                </Flex>
              </Flex>
              <JoinGroupSuccess
                isOpen={isOpen}
                onClose={onClose}
                groupName={grp.savesName}
              />
            </Flex>
          ))}
      </Flex>
    </>
  );
};
