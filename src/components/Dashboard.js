import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
  Icon,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import {
  MdReceipt,
  MdOutlineInventory,
  MdPeopleAlt,
  MdRemoveRedEye,
  MdAdd,
  MdEMobiledata,
} from "react-icons/md";
import Estimater from "./Estimate";

export const DashBoard = () => {
  const toast = useToast();
  const callToast = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };
  return (
    <>
      <Box p="2">
        <Tag size="lg" colorScheme="teal" borderRadius="full">
          <TagLeftIcon boxSize="20px" as={MdReceipt} />
          <TagLabel>Invoice</TagLabel>
        </Tag>
      </Box>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
      >
        <Estimater />
        <Card onClick={callToast}>
          <CardHeader>
            <Heading size="md">
              <Icon as={MdRemoveRedEye} />
              Display
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          {/* <CardFooter>
          <Button leftIcon={<MdRemoveRedEye size={"20px"} />}> View </Button>
        </CardFooter> */}
        </Card>
      </SimpleGrid>
      <Box p="2">
        <Tag size="lg" colorScheme="teal" borderRadius="full">
          <TagLeftIcon boxSize="20px" as={MdOutlineInventory} />
          <TagLabel>Inventory</TagLabel>
        </Tag>
      </Box>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
      >
        <Card onClick={callToast}>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
        <Card onClick={callToast}>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
        <Card onClick={callToast}>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
      <Box p="2">
        <Tag size="lg" colorScheme="teal" borderRadius="full">
          <TagLeftIcon boxSize="20px" as={MdPeopleAlt} />
          <TagLabel>Customers</TagLabel>
        </Tag>
      </Box>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
      >
        <Card onClick={callToast}>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
};
