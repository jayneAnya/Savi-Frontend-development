import { Flex, Button, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SaviImg from "../../assets/svg/Savi..svg";

export const Empty = () => {
  const navigate = useNavigate();
  return (
    <Flex h="100vh" w="100vw" justifyContent="center" alignItems="center">
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={SaviImg} alt="Savi" mb="20px" />
        <Heading size="md" mb="20px">Sorry! Page Not found</Heading>
        <Button onClick={() => navigate("/")}>Go to Homepage</Button>
      </header>
    </Flex>
  );
};
