import "./App.css";
import { Box, Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import { MenuBar } from "./components/MenuBar";
import { DashBoard } from "./components/Dashboard";

function App() {
  return (
    <Box>
      <VStack padding={5} w={"100%"} h={"100%"}>
        <Box
          w="100%"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          backgroundColor={"white"}
        >
          <Flex>
            <MenuBar />
            <Box p="2">
              <Heading size="md">Title</Heading>
            </Box>
          </Flex>
        </Box>
        <Divider />
        <Box w="100%" p={4} backgroundColor={"white"}>
          <DashBoard />
        </Box>
      </VStack>
    </Box>
  );
}

export default App;
