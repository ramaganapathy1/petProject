import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardHeader,
  Heading,
  Icon,
  Text,
  CardBody,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { MdAdd } from "react-icons/md";
import { Items } from "./Items";

const Estimater = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card onClick={() => onOpen()}>
        <CardHeader>
          <Heading size="md">
            <Icon as={MdAdd} />
            New Estimate
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        {/* <CardFooter>
    <Button leftIcon={<MdAdd size={"20px"} />}>Add New</Button>
  </CardFooter> */}
      </Card>
      <Modal
        onClose={onClose}
        size={"full"}
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Estimate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted variant="soft-rounded">
              <TabList mb="1em">
                <Tab>Item Selection</Tab>
                <Tab>Delivery</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Items />
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Estimater;
