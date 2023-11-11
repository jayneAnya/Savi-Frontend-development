import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import KopaImg from "../../assets/svg/kopaland.svg";
import { useNavigate } from "react-router";
import { useViewGrps } from "../../hooks/useGetGroups";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Text,
  WrapItem,
} from "@chakra-ui/react";

export const UserGroup = () => {
  const { id } = useParams();
  const { data: groups, isLoading } = useViewGrps(id);
  const navigate = useNavigate();
  return (
    <Flex py="24px" pl="37px" pr="10%" flexDir="column">
      <Flex justifyContent="space-between">
        <Flex flexDir="column">
          <Text fontSize="32px" fontWeight="700" color="#000">
            Lagos Corp Members
          </Text>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="#94a3b8" />}
            ml="10px"
            mt="22px"
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/groups"
                fontSize="14px"
                fontWeight="600"
                color="#1e293b"
              >
                Active Savings Group
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                href="#"
                fontSize="14px"
                fontWeight="600"
                color="#64748b"
              >
                Lagos Corp Members
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        <Flex alignItems="center">
          <Flex flexDir="column" w="260px" color="#10182b">
            <Text fontSize="16px" fontWeight="500" mb="16px">
              JUNE CONTRIBUTION
            </Text>
            <Text fontSize="16px" fontWeight="300">
              Jun 1, 2023
            </Text>
            <Text fontSize="24px" fontWeight="600">
              ₦50,000
            </Text>
            <Text fontSize="14px" fontWeight="300" mt="8px">
              Your payment will be debited from your
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                Wallet
              </span>{" "}
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                (₦50,000)
              </span>
            </Text>
          </Flex>
          <Flex pl="15px">
            <ButtonGroup borderRadius="8px">
              <Button bg="#b5179e" color="#fff">
                Pay Now
              </Button>
              <Button border="1px solid var(--grey-300, #D0D5DD)">
                DISMISS
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Flex>
      <Flex mt="24px">
        <Image src={KopaImg} w="100%" alt="Kopa" />
      </Flex>
      <Text
        fontSize="16px"
        fontWeight="400"
        color="#667085"
        lineHeight="140%"
        mt="20px"
      >
        Bros/Sis, no dull yourself for dis service year money mata. Join Lagos
        Corp Members Thrift Saving Group sharp-sharp! We go secure your money,
        make am grow well-well, and support each other for dis money journey.
        Learn money sense, plan for your future, and enjoy the benefits of our
        community. No time to waste, come join us now! Contact [07067482633].
        Make we flex our money together!
      </Text>
      <Flex mt="24px" justifyContent="space-between">
        <Flex
          borderRadius="16px"
          bg="#fff"
          border="1px solid var(--grey-300, #D0D5DD)"
          w="422px"
          h="288px"
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
                ₦500,000
              </Text>
            </Flex>
            <Flex flexDir="column" mr="19%">
              <Text fontSize="14px" color="#98A2B3" fontWeight="400">
                Schedule
              </Text>
              <Text fontSize="14px" fontWeight="600" color="#101828">
                Monthly
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
          <Flex>
            <Button
              color="#2F80ED"
              bgColor="transparent"
              pl="0px"
              mb="20px"
              onClick={() => navigate("/groups/membersflow")}
              rightIcon={
                <ChevronRightIcon alignSelf="center" color="#2F80ED" />
              }
              _hover={{ bgColor: "transparent" }}
            >
              View Flow
            </Button>
          </Flex>
        </Flex>
        <Flex flexDir="column">
          <Text fontSize="15px" fontWeight="500" color="#475569" mb="15px">
            Transactions History
          </Text>
          <Flex
            w="414px"
            h="468px"
            bg="#fff"
            borderRadius="8px"
            border="1px solid var(--grey-200, #EAECF0)"
            p="8px 20px 0 16px"
            flexDir="column"
          >
            <Flex justifyContent="space-between" w="100%">
              <Flex>
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
                <Flex flexDir="column" ml="16px" fontSize="14px">
                  <Text fontWeight="600">Monday, 31 July 2023</Text>
                  <Text fontWeight="400" color="#98A2B3">
                    at 2:44 PM
                  </Text>
                </Flex>
              </Flex>
              <Flex mt="10px">
                <Text fontSize="16px" color="#EB5757" fontWeight="500">
                  -₦50,000
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" w="100%" mt="19px">
              <Flex>
                <WrapItem>
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                </WrapItem>
                <Flex flexDir="column" ml="16px" fontSize="14px">
                  <Text fontWeight="600">Monday, 24 July 2023</Text>
                  <Text fontWeight="400" color="#98A2B3">
                    at 2:44 PM
                  </Text>
                </Flex>
              </Flex>
              <Flex mt="10px">
                <Text fontSize="16px" color="#EB5757" fontWeight="500">
                  -₦50,000
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" w="100%" mt="19px">
              <Flex>
                <WrapItem>
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </WrapItem>
                <Flex flexDir="column" ml="16px" fontSize="14px">
                  <Text fontWeight="600">Thursday, 20 July 2023</Text>
                  <Text fontWeight="400" color="#98A2B3">
                    at 2:44 PM
                  </Text>
                </Flex>
              </Flex>
              <Flex mt="10px">
                <Text fontSize="16px" color="#27AE60" fontWeight="500">
                  +₦500,000
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" w="100%" mt="19px">
              <Flex>
                <WrapItem>
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                </WrapItem>
                <Flex flexDir="column" ml="16px" fontSize="14px">
                  <Text fontWeight="600">Wednessday, 28 June 2023</Text>
                  <Text fontWeight="400" color="#98A2B3">
                    at 2:44 PM
                  </Text>
                </Flex>
              </Flex>
              <Flex mt="10px">
                <Text fontSize="16px" color="#EB5757" fontWeight="500">
                  -₦50,000
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" w="100%" mt="19px">
              <Flex>
                <WrapItem>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                </WrapItem>
                <Flex flexDir="column" ml="16px" fontSize="14px">
                  <Text fontWeight="600">Friday, 23 June 2023</Text>
                  <Text fontWeight="400" color="#98A2B3">
                    at 2:44 PM
                  </Text>
                </Flex>
              </Flex>
              <Flex mt="10px">
                <Text fontSize="16px" color="#EB5757" fontWeight="500">
                  -₦50,000
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
