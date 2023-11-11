import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from "@chakra-ui/react";

export const TableHistory = () => {
  return (
    <Table w="100%">
      <Thead fontSize="14px">
        <Tr>
          <Th color="#667085" fontWeight="400">Receiver</Th>
          <Th color="#667085" fontWeight="400">Type</Th>
          <Th color="#667085" fontWeight="400">Date</Th>
          <Th color="#667085" fontWeight="400">Amount</Th>
        </Tr>
      </Thead>
      <Tbody fontSize="14px">
        <Tr>
          <Td>Bolade Adegbete</Td>
          <Td>Lagos Corp Group</Td>
          <Td>30 May 2023</Td>
          <Td>₦ 5,000</Td>
        </Tr>
        <Tr>
          <Td>Bolade Adegbete</Td>
          <Td>Lagos Corp Group</Td>
          <Td>30 May 2023</Td>
          <Td>₦ 5,000</Td>
        </Tr>
        <Tr>
          <Td>Bolade Adegbete</Td>
          <Td>Lagos Corp Group</Td>
          <Td>30 May 2023</Td>
          <Td>₦ 5,000</Td>
        </Tr>
        <Tr>
          <Td>Bolade Adegbete</Td>
          <Td>Lagos Corp Group</Td>
          <Td>30 May 2023</Td>
          <Td>₦ 5,000</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
