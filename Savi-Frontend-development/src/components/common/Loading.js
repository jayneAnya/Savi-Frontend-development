import { Center, Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import * as React from "react";

export const Loading = () => {
    return (
        <Center h="100vh">
            <Heading>
                <Spinner size="xl" />
            </Heading>
        </Center>
    );
    };

