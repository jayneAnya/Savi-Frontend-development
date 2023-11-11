import React from "react";
import {
  Avatar,
  AvatarGroup,
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
} from "@chakra-ui/react";
import { checkFreq } from "../../utils/common";
import { CreateGroupModal } from "../../components/Modals/CreateGroupModal";
import { checkStatus } from "../../utils/common";	
import CorperImg from "../../assets/svg/CorperPic.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useGetUserGroups  } from "../../hooks/useGetGroups";

export const NewTarget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { data: groups } =  useGetUserGroups();
  console.log(groups);

  return (
    <>
      <Flex flexDir="column" pl="39px" pt="24px" flex="1">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          pr="9%"
          mb="13px"
        >
          <Text fontSize="32px" fontWeight="700" color="#000">
            Active Savings
          </Text>
          <Text
            fontSize="16px"
            fontWeight="400"
            color="#2f80ed"
            cursor="pointer"
            onClick={() => navigate("/groups/explore")}
          >
            Explore Groups
          </Text>
        </Flex>
        {groups?.length === 0 && (
        <Flex
          flexDir="column"
          justifyContent="center"
          flex="1"
          alignItems="center"
          p="10px"
        >
          <Text fontSize="16px" fontWeight="500">
            You don't have any active saving group, you can
          </Text>
          <Text>
            <span
              style={{
                color: "#2F80ED",
                fontsize: "16px",
                fontweight: "500",
                cursor: "pointer",
              }}
              onClick={onOpen}
            >
              create a new group
            </span>{" "}
            or
            <span
              style={{
                color: "#2F80ED",
                fontsize: "16px",
                fontweight: "500",
                cursor: "pointer",
              }}
            >
              {" "}
              explore groups
            </span>
          </Text>
        </Flex>
      )}
          {groups?.map((grp) => (
            <Flex
              key={grp.id}
              maxW="877px"
              w="100%"
              h="272px"
              p="30px"
              mb="13px"
              boxShadow="0px 6px 16px 0px rgba(0, 0, 0, 0.16)"
            >
              <Flex>
                <Image src={CorperImg} alt="Corper" mr="30px" />
                <Flex flexDir="column">
                  <Flex justifyContent="space-between" alignItems="center">
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
                      {checkStatus(grp.groupStatus)}
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
                  <Flex justifyContent="space-between">
                    <Flex flexDir="column" pr="30px">
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
                    <Flex flexDir="column" pr="30px">
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
                    <Flex flexDir="column" pr="30px">
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
                    <Flex flexDir="column">
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="#98A2B3"
                        mb="10px"
                      >
                        Withdrawal Date
                      </Text>
                      <Text></Text>
                    </Flex>
                  </Flex>
                  <Text
                    mt="16px"
                    color="#2F80ED"
                    fontSize="16px"
                    fontWeight="400"
                    cursor="pointer"
                    onClick={() => navigate(`/groups/${groups.id}`)}
                  >
                    View Group
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
      </Flex>

      <CreateGroupModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
