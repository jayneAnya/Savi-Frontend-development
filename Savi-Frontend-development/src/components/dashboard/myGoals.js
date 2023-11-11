import React from "react";
import "../../assets/scss/myGoals.scss";
import { GrTarget } from "react-icons/gr";
import { Flex, Icon, Progress, Text } from "@chakra-ui/react";

export const MyGoals = ({ title, amount, amount2, percent, progress }) => {
  return (
    <div className="myGoals__gamma" j>
      <Flex justifyContent="space-between">
        <Flex>
          <Icon as={GrTarget} boxSize="28px" mt="10px" />
          <Flex flexDir="column" ml="16px">
            <h3 className="myGoals__gammarex">{title}</h3>
            <p className="myGoals__deltarex">
              {amount} <span className="myGoals__delta">/ {amount2}</span>
            </p>
          </Flex>
        </Flex>
        <Text mr="15px">{percent}%</Text>
      </Flex>
      <Progress value={progress} size="xs" mt="10px" />
    </div>
  );
};
