import React from "react";
import {
  Avatar,
  AvatarBadge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Flow = () => {
  const flowCard = [
    {
      avatar: "https://bit.ly/code-beast",
      title: "First Contribution",
      name: "Oluwasegun Idowu",
      contributing: "₦ 50,000",
      withdrawing: "₦ 0",
      fee: "₦ 0",
      nextCashOut: "May 30",
      recentCashOut: "May 17",
      badgeColor: "#EAB308",
    },
    {
      avatar: "https://bit.ly/prosper-baba",
      title: "Second Contribution",
      name: "Funmilayo adebayo",
      contributing: "₦ 50,000",
      withdrawing: "₦ 0",
      fee: "₦ 0",
      nextCashOut: "May 31",
      recentCashOut: "May 18",
      badgeColor: "#EF4444",
    },
    {
      avatar: "https://bit.ly/ryan-florence",
      title: "Third Contribution",
      name: "Deborah (you)",
      contributing: "₦ 50,000",
      withdrawing: "₦ 500,000",
      fee: "₦ 500",
      nextCashOut: "Today",
      recentCashOut: "May 15",
      badgeColor: "#14B8A6",
    },
    {
      avatar: "https://bit.ly/kent-c-dodds",
      title: "Fourth Contribution",
      name: "Oluwadamilola Eze",
      contributing: "₦ 50,000",
      withdrawing: "₦ 0",
      fee: "₦ 0",
      nextCashOut: "Tommorrow",
      recentCashOut: "May 15",
      badgeColor: "#14B8A6",
    },
    {
      avatar: "https://bit.ly/dan-abramov",
      title: "Fifth Contribution",
      name: "Dan Abrahmov",
      contributing: "₦ 50,000",
      withdrawing: "₦ 0",
      fee: "₦ 0",
      nextCashOut: "May 30",
      recentCashOut: "May 17",
      badgeColor: "#14B8A6"
    },
  ];
  return (
    <>
      <Flex flexDir="column" pl="39px" pt="24px" pb="50px">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/groups"
              fontSize="14px"
              fontWeight="600"
              color="#1E293B"
            >
              Active Saving Group
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              fontSize="14px"
              fontWeight="600"
              color="#1E293B"
            >
              Lagos Corp Members
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              href="#"
              fontSize="14px"
              fontWeight="600"
              color="#64748B"
            >
              View Flow
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Text fontSize="32px" fontWeight="700" color="#000" mt="24px">
          Flow
        </Text>
        {flowCard.map((card) => (
        <Flex
          key={card.title}
          w="887px"
          h="159px"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          borderRadius="8px"
          bg="#fff"
          p="30px"
          mt="24px"
        >
          <Flex>
            <WrapItem mr="20px">
              <Avatar
                name="Christian Nwamba"
                src={card.avatar}
                pos="relative"
              >
                <AvatarBadge
                  boxSize="0.85em"
                  bg={card.badgeColor}
                  pos="absolute"
                  top="0"
                />
              </Avatar>
            </WrapItem>
            <Flex flexDir="column">
              <Text fontSize="24px" fontWeight="500" mb="16px">
                {card.title}
              </Text>
              <Flex gap="20px" w="100%">
                <Flex flexDir="column" fontSize="16px" fontWeight="400">
                  <Text color="#98A2B3" mb="10px">
                    Name
                  </Text>
                  <Text>{card.name}</Text>
                </Flex>
                <Flex flexDir="column">
                  <Text color="#98A2B3" mb="10px">
                    Contributing
                  </Text>
                  <Text>{card.contributing}</Text>
                </Flex>
                <Flex flexDir="column">
                  <Text color="#98A2B3" mb="10px">
                    Withdrawing
                  </Text>
                  <Text>{card.withdrawing}</Text>
                </Flex>
                <Flex flexDir="column">
                  <Text color="#98A2B3" mb="10px">
                    Fee
                  </Text>
                  <Text>{card.fee}</Text>
                </Flex>
                <Flex flexDir="column">
                  <Text color="#98A2B3" mb="10px">
                    Next Cash out
                  </Text>
                  <Text>{card.nextCashOut}</Text>
                </Flex>
                <Flex flexDir="column">
                  <Text color="#98A2B3" mb="10px">
                    Recent Cash out
                  </Text>
                  <Text>{card.recentCashOut}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        ))}
      </Flex>
    </>
  );
};
