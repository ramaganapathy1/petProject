import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdReceipt, MdOutlineInventory, MdPeopleAlt } from "react-icons/md";

export const DashBoard = () => (
  <>
    <Box p="2">
      <Button
        leftIcon={<MdReceipt size={"20px"} />}
        variant="outline"
        color="teal"
        size={"sm"}
      >
        <Heading size="md">Invoice</Heading>
      </Button>
    </Box>

    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
    >
      <Card>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
    <Box p="2">
      <Button
        leftIcon={<MdOutlineInventory size={"20px"} />}
        color="teal"
        variant="outline"
        size={"sm"}
      >
        <Heading size="md">Inventory</Heading>
      </Button>
    </Box>

    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
    >
      <Card>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
    <Box p="2">
      <Button
        leftIcon={<MdPeopleAlt size={"20px"} />}
        color="teal"
        variant="outline"
        size={"sm"}
      >
        <Heading size="md">Customers</Heading>
      </Button>
    </Box>
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
    >
      <Card>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  </>
);
