import React from "react";
import {
  Input,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Select,
} from "@chakra-ui/react";
import { InvoiceTable } from "./InvoiceTable";
export const Items = () => {
  return (
    <SimpleGrid columns={1} spacing={10} autoColumns={1}>
      <Box p="4">
        <SimpleGrid columns={5} spacing={2}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Type</Heading>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Size</Heading>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Name</Heading>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Discsount Type</Heading>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Quantity and Unit</Heading>
            <SimpleGrid columns={2} spacing={2}>
              <Input htmlSize={4} placeholder="Quantity" size="md" />
              <Select placeholder="Unit" required>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
      <Box p="4" bg="gray.100">
        <InvoiceTable />
      </Box>
    </SimpleGrid>
  );
};
