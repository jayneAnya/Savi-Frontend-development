import {
  Button,
  ButtonGroup,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import WalletImg from "../../assets/svg/account_balance_wallet.svg";
import DepIcon from "../../assets/svg/whiteAdd.svg";
import WithIcon from "../../assets/svg/whiteSend.svg";
import { WithdrawalModal } from "../../components/Modals/WithdrawalModal";
import { DepositModal } from "../../components/Modals/DepositModal";

export const WalletCard = ({ wallet }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDeposit,
    onOpen: onOpenDeposit,
    onClose: onCloseDeposit,
  } = useDisclosure();
  return (
    <Flex
      flexDir="column"
      backgroundColor="#CA4AB7"
      w="292px"
      borderRadius="16px"
      border="1px solid var(--grey-200, #EAECF0)"
      boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.04)"
      padding="16px"
      color="#fff"
    >
      <Flex justifyContent="space-between">
        <Image src={WalletImg} alt="wallet" boxSize="32px" />
        <Text fontSize="12px" fontWeight="500">{`
          ${wallet?.walletId}`}</Text>
      </Flex>
      <Text mt="8px" fontSize="14px" fontWeight="600">
        Wallet
      </Text>
      <Text fontSize="24px" fontWeight="600" mb="8px">
        ₦ {`${wallet?.balance}`}.00
      </Text>
      <Flex>
        <ButtonGroup>
          <Button
            borderRadius="16px"
            bg="rgba(245, 185, 237, 0.60)"
            color="#fff"
            _hover={{
              backgroundColor: "#d374c5",
            }}
            leftIcon={<Image src={DepIcon} alt="Deposit icon" />}
            onClick={() => {
              //  window.open("https://paystack.com/pay/saviwallets")
              window.location.href = "https://paystack.com/pay/saviwallets";
            }}
          >
            Deposit
          </Button>
          <Button
            variant="outline"
            borderRadius="16px"
            color="#fff"
            _hover={{
              backgroundColor: "#d374c5",
            }}
            leftIcon={<Image src={WithIcon} alt="Deposit icon" />}
            onClick={onOpen}
          >
            Withdraw
          </Button>
        </ButtonGroup>
      </Flex>
      <WithdrawalModal isOpen={isOpen} onClose={onClose} />
      <DepositModal isOpen={isOpenDeposit} onClose={onCloseDeposit} />
    </Flex>
  );
};
