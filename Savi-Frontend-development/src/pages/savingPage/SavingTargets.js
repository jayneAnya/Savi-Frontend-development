import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  ButtonGroup,
  Button,
  Image,
  Progress,
  Tag,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import DepoIcon from "../../assets/svg/PurpleAdd.svg";
import WithDIcon from "../../assets/svg/BaliWhiteSend.svg";
import { WithdrawalModal } from "../../components/Modals/WithdrawalModal";
import { DepositModal } from "../../components/Modals/DepositModal";
import { useParams } from "react-router-dom";
import { useTarget } from "../../hooks/useTargets";

export const BalisTrip = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDeposit,
    onOpen: onOpenDeposit,
    onClose: onCloseDeposit,
  } = useDisclosure();

  const { id } = useParams();
  const { data: target, isLoading } = useTarget(id);


  const CalcDaysLeft = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = end.getTime() - start.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
  };
  return (
    <>
      <Flex pl="40px" pt="24px" flexDir="column" maxW="1000px">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/saving"
              fontSize="14px"
              fontWeight="400"
              color="#98A2B3"
            >
              My Goal
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" fontSize="14px" fontWeight="600">
              {target?.target}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between" alignItems="center" mt="24px">
          <Text fontSize="32px" fontWeight="700" color="#101828">
            {target?.target}
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            color="#2f80ed"
            cursor="pointer"
          >
            Add New Goal
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          h="262px"
          p="24px 32px"
          bg="#b5179e"
          borderRadius="16px"
          color="#fff"
          mt="42px"
        >
          <Flex justifyContent="space-between">
            <Flex flexDir="column">
              <Text fontSize="16px" fontWeight="600">
                Amount Saved
              </Text>
              <Text fontSize="48px" fontWeight="700">
                {" "}
                {`₦${target?.cumulativeAmount.toLocaleString()}`}
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Text fontSize="16px" fontWeight="600">
                Total Target
              </Text>
              <Text fontSize="48px" fontWeight="700">
                {`₦${target?.targetAmount.toLocaleString()}`}
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Text fontSize="16px" fontWeight="600">
                Days left
              </Text>
              <Text fontSize="48px" fontWeight="700">
                {CalcDaysLeft(target?.startDate, target?.withdrawalDate)}
                days
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent="center" margin="auto">
            <ButtonGroup>
              <Button
                borderRadius="16px"
                bg="#fff"
                color="#b5179e"
                mr="24px"
                _hover={{
                  backgroundColor: "#d374c5",
                }}
                leftIcon={<Image src={DepoIcon} alt="Deposit icon" />}
                onClick={onOpenDeposit}
              >
                Fund Target
              </Button>
              <Button
                variant="outline"
                borderRadius="16px"
                fontSize="14px"
                fontWeight="600"
                color="#fff"
                _hover={{
                  backgroundColor: "#d374c5",
                }}
                leftIcon={<Image src={WithDIcon} alt="Deposit icon" />}
                onClick={onOpen}
              >
                Withdraw to Wallet
              </Button>
            </ButtonGroup>
          </Flex>
          <WithdrawalModal isOpen={isOpen} onClose={onClose} />
          <DepositModal id={id} isOpen={isOpenDeposit} onClose={onCloseDeposit} />
        </Flex>
      </Flex>
    </>
  );
};
