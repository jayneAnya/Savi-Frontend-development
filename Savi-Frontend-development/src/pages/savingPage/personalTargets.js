import { Flex, Img, Text, Progress, Tag } from "@chakra-ui/react";
import React, { useState } from "react";
import BeachPic from "../../assets/svg/beach.svg";
import TravelImg from "../../assets/svg/TravelBadge.svg";
import { useNavigate } from "react-router-dom";
import { AddTargets } from "../../components/Modals";
import { useUserTargets } from "../../hooks/useTargets";
import { Loading } from "../../components/common/Loading";

export const Saving = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleSubmitModal = () => {
    // Add your logic here to handle the form submission
    handleCloseModal();
  };
  const navigate = useNavigate();
  const { data: targets, isLoading } = useUserTargets();
  console.log(targets);
  const calcProgress = (cumulativeAmount, targetAmount) => {
    return (cumulativeAmount / targetAmount) * 100;
  };
  return (
    <>
      {isLoading && <Loading />}
      <Flex flexDir="column" pl="39px" pt="24px" pr="9%" minH="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="32px" fontWeight="700" color="#000">
            My Goals
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            color="#2f80ed"
            cursor="pointer"
            onClick={handleOpenModal}
          >
            Add New Target
          </Text>
        </Flex>
        {targets?.length === 0 && (
          <Flex
            flexDir="column"
            justifyContent="center"
            flex="1"
            alignItems="center"
            p="10px"
          >
            <Text fontSize="16px" fontWeight="500">
              You don't have any active saving target, you can
            </Text>
            <Text
              color="#2F80ED"
              fontSize="16px"
              fontWeight="500"
              onClick={handleOpenModal}
              cursor="pointer"
            >
              create a new target
            </Text>
          </Flex>
        )}
        {targets?.length > 0 &&
          targets?.map((goal) => (
            <Flex
              key={goal.id}
              h="175px"
              backgroundColor="#fff"
              boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.04);"
              mt="24px"
              p="24px"
              flexDir="column"
              cursor="pointer"
              isLoading={isLoading}
              onClick={() => navigate(`/saving/goals/${goal.id}`)}
            >
              <Flex justifyContent="space-between">
                <Flex>
                  <Img
                    src={BeachPic}
                    alt="beach"
                    mr="40px"
                    w="131px"
                    h="99px"
                  />
                  <Flex flexDir="column">
                    {/* <Img src={TravelImg} alt="travel" w="62px" h="28px" /> */}
                    <Tag
                      size="md"
                      key={goal.id}
                      variant="solid"
                      alignItems="center"
                      color="#CCFBF1"
                      bgColor="#14B8A6"
                      borderRadius="999px"
                      w="62px"
                      h="28px"
                    >
                      Target
                    </Tag>

                    <Text mt="10px" fontSize="24px" fontWeight="600">
                      {goal.target}
                    </Text>
                    <Text fontSize="16px" fontWeight="600">
                      {`₦${goal.cumulativeAmount.toLocaleString()}
                      / ₦${goal.targetAmount.toLocaleString()}`}
                    </Text>
                  </Flex>
                </Flex>
                <Text fontSize="24px" fontWeight="500">
                  {calcProgress(goal.cumulativeAmount, goal.targetAmount)}%
                </Text>
              </Flex>
              <Progress
                value={calcProgress(goal.cumulativeAmount, goal.targetAmount)}
                size="xs"
                mt="24px"
                borderRadius="8px"
              />
            </Flex>
          ))}
        <AddTargets
          isOpen={isOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitModal}
        />
      </Flex>
    </>
  );
};
