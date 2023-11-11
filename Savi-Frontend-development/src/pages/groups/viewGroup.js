import React, { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import KopaImg from "../../assets/svg/kopaland.svg";
import { useParams } from "react-router-dom";
import { useViewGrps } from "../../hooks/useGetGroups";
import {
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Img,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { checkFreq } from "../../utils/common";
import { useMutation } from "@tanstack/react-query";
import { JoinGroupSuccess } from "../../components/Modals/joinGrpSucces";
import { joinGroup } from "../../api/groups";

export const ViewGroup = () => {
  const { id } = useParams();
  const { data: group, isLoading } = useViewGrps(id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groupId, setGroupId] = useState("");
  const toast = useToast();
  const { mutate, isLoading: loadingPage } = useMutation(
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
      },
    }
  );

  const formSubmit = (data, id) => {
    mutate(data, id);
  };

  //calculate no of months
  const startDate = new Date(group?.expectedstartDate);
  const endDate = new Date(group?.expectedendDate);
  console.log(startDate, endDate);
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  const monthDiff = months + endDate.getMonth() - startDate.getMonth();

  return (
    <>
      <Flex flexDir="column" pl="37px" pt="24px" pr="10%">
        <Flex justifyContent="space-between">
          <Flex flexDir="column">
            <Text fontSize="32px" fontWeight="700" pb="22px">
              {group?.savesName}
            </Text>
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="#94A3B8" />}
              fontSize="14px"
              fontWeight="600"
              color="#1E293B"
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="/groups">
                  Active Savings Groups
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/groups/explore">
                  Explore Savings Group
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#" color="#64748B">
                  {group?.savesName}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
          <Button
            w="133px"
            h="51px"
            bg="#b5179e"
            color="#fff"
            mt="24px"
            onClick={() => {
              setGroupId(group?.id);
              formSubmit({}, group?.id);
            }}
          >
            Join
          </Button>
        </Flex>
        <Flex w="100%" h="260px" mt="24px">
          <Img src={KopaImg} alt="Kopa" />
        </Flex>
        <Text
          mt="20px"
          fontSize="16px"
          fontWeight="400"
          color="#667085"
          lineHeight="140%"
        >
          {group?.purPoseAndGoal}
        </Text>
        <Flex my="24px" justifyContent="space-between">
          <Flex
            borderRadius="16px"
            bg="#fff"
            border="1px solid var(--grey-300, #D0D5DD)"
            w="422px"
            h="250px"
            px="16px"
            py="8px"
            flexDir="column"
          >
            <Flex justifyContent="space-between" mb="14px">
              <Flex flexDir="column">
                <Text fontSize="14px" color="#98A2B3" fontWeight="400">
                  Contribution Amount
                </Text>
                <Text fontSize="14px" fontWeight="600" color="#101828">
                  {`₦${group?.contributionAmount.toLocaleString()}`}
                </Text>
              </Flex>
              <Flex flexDir="column" mr="19%">
                <Text fontSize="14px" color="#98A2B3" fontWeight="400">
                  Schedule
                </Text>
                <Text fontSize="14px" fontWeight="600" color="#101828">
                  {checkFreq(group?.frequencyId)}
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" mb="14px">
              <Flex flexDir="column">
                <Text fontSize="14px" color="#98A2B3" fontWeight="400">
                  Contribution Timeline
                </Text>
                <Text fontSize="14px" fontWeight="600" color="#101828">
                  5 months
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Text fontSize="14px" color="#98A2B3" fontWeight="400">
                  Estimated Collection
                </Text>
                <Text fontSize="14px" fontWeight="600" color="#101828">
                  ₦ 2,500,000
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" mb="14px">
              <Flex flexDir="column">
                <Text fontSize="14px" color="#98A2B3" fontWeight="400">
                  Start Date
                </Text>
                <Text fontSize="14px" fontWeight="600" color="#101828">
                  May 1, 2021
                </Text>
              </Flex>
              <Flex flexDir="column" mr="8%">
                <Text fontSize="14px" color="#98A2B3" fontWeight="400">
                  End Date
                </Text>
                <Text fontSize="14px" fontWeight="600" color="#101828">
                  October 1, 2021
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" mb="14px">
              <Flex flexDir="column">
                <Text fontSize="14px" color="#98A2B3" fontWeight="400">
                  Available Slots
                </Text>
                <Text fontSize="14px" fontWeight="600" color="#101828">
                  5
                </Text>
              </Flex>
              <Flex flexDir="column" mr="18%">
                <Text fontSize="14px" color="#98A2B3" fontWeight="400">
                  Total Slots
                </Text>
                <Text fontSize="14px" fontWeight="600" color="#101828">
                  5
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column">
            <Text fontSize="15px" fontWeight="500" color="#475569" mb="14px">
              Members
            </Text>
            <TableContainer>
              <Table
                borderRadius="16px"
                border="1px solid var(--gray-200, #E5E7EB)"
              >
                <Thead>
                  <Tr>
                    <Th color="#6B7280" fontSize="12px" fontWeight="500">
                      Slots
                    </Th>
                    <Th color="#6B7280" fontSize="12px" fontWeight="500">
                      Name
                    </Th>
                    <Th color="#6B7280" fontSize="12px" fontWeight="500">
                      Performance
                    </Th>
                  </Tr>
                </Thead>
                <Tbody bgColor="#fff">
                  <Tr>
                    <Td fontSize="14px" fontWeight="500">
                      1
                    </Td>
                    <Td fontSize="14px" fontWeight="500">
                      Oluwatomilola Eze
                    </Td>
                    <Td
                      alignItems="flex-start"
                      fontSize="14px"
                      fontWeight="500"
                      color="#27AE60"
                    >
                      90.23%
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="14px" fontWeight="500">
                      2
                    </Td>
                    <Td fontSize="14px" fontWeight="500">
                      Mohammed Adebayo
                    </Td>
                    <Td
                      alignItems="flex-start"
                      fontSize="14px"
                      fontWeight="500"
                      color="#EB5757"
                    >
                      45.50%
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="14px" fontWeight="500">
                      3
                    </Td>
                    <Td fontSize="14px" fontWeight="500">
                      Oluwadamilare Idowu
                    </Td>
                    <Td
                      alignItems="flex-start"
                      fontSize="14px"
                      fontWeight="500"
                      color="#27AE60"
                    >
                      90.23%
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="14px" fontWeight="500">
                      4
                    </Td>
                    <Td fontSize="14px" fontWeight="500">
                      Salisu Ibrahim
                    </Td>
                    <Td
                      alignItems="flex-start"
                      fontSize="14px"
                      fontWeight="500"
                      color="#2F80ED"
                    >
                      New user
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Flex>
      </Flex>
      <JoinGroupSuccess
                isOpen={isOpen}
                onClose={onClose}
                groupName={group?.savesName}
              />
    </>
  );
};
