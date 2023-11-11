import React from "react";
import {
  Flex,
  Text,
  Wrap,
  WrapItem,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import DamiImg from "../../assets/svg/DamiPics.svg";
import { CreateGroupSucess } from "../../components/Modals";

export const Trnxs = () => {
  return (
    <Flex flexDir="column" pl="39px" pt="24px" pr="126px">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="32px" fontWeight="700">
          Transactions
        </Text>
        <Text
          fontSize="16px"
          fontWeight="600"
          color="#2F80ED"
          cursor="pointer"
        >
          Clear all
        </Text>
      </Flex>
      <Text fontSize="16px" fontWeight="600" mt="20px" mb="16px">
        Today
      </Text>
      <Flex
        bg="#fff"
        p="10px 30px"
        borderRadius="8px"
        justifyContent="space-between"
        alignItems="center"
        fontSize="16px"
        fontWeight="500"
      >
        <Wrap>
          <WrapItem>
            <Avatar size="lg" name="Oluwadamilola Nwankwo" src={DamiImg} />
          </WrapItem>
        </Wrap>
        <Text textAlign="center">Oluwadamilola Nwankwo</Text>
        <Text>Lagos Corp Members</Text>
        <Text>28/05/2023</Text>
        <Text>10:27:19 AM</Text>
        <Text>₦5,000</Text>
        <Text color="#219653">Recieved</Text>
      </Flex>
    </Flex>
  );
};
