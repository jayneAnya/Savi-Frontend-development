import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import { TableHistory } from "./tableHist";

export const TransactionTabs = () => {
  return (
    <>
      <Flex justifyContent="space-between" pos="relative">
        <Text pos="absolute" top="8px">
          Transaction history
        </Text>
        <Tabs align="end">
          <TabList color="#667085" fontSize="14px">
            <Tab>Recently</Tab>
            <Tab>Oldest</Tab>
            <Tab>More</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0">
              <TableHistory />
            </TabPanel>
            <TabPanel p="0">
              <TableHistory />
            </TabPanel>
            <TabPanel p="0">
              <TableHistory />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};
