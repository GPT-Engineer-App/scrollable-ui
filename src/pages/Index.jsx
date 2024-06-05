import { Box, Container, Flex, IconButton, Image, VStack, Text } from "@chakra-ui/react";
import { FaChevronDown, FaColumns } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" height="100vh" p={0}>
      <Flex direction="column" height="100%">
        {/* Navigation Bar */}
        <Flex as="nav" align="center" justify="space-between" padding="1rem" bg="gray.900" color="white">
          <Image src="/logo.png" alt="Logo" boxSize="40px" />
          <Flex>
            <IconButton aria-label="Dropdown" icon={<FaChevronDown />} variant="ghost" color="white" />
            <IconButton aria-label="Columns" icon={<FaColumns />} variant="ghost" color="white" />
          </Flex>
        </Flex>

        {/* Main Content Area */}
        <Flex flex="1" overflow="hidden">
          {/* Left Section */}
          <Box flex="1" bg="gray.800" color="white" p={4}>
            {/* Static content goes here */}
            <VStack spacing={4}>
              <Box bg="gray.700" p={4} borderRadius="md" width="100%">
                Static Content 1
              </Box>
              <Box bg="gray.700" p={4} borderRadius="md" width="100%">
                Static Content 2
              </Box>
            </VStack>
          </Box>

          {/* Right Section */}
          <Box flex="2" bg="gray.700" color="white" p={4} overflowY="auto">
            {/* Scrollable content goes here */}
            <VStack spacing={4}>
              {Array.from({ length: 20 }, (_, i) => (
                <Box key={i} bg="gray.600" p={4} borderRadius="md" width="100%">
                  Scrollable Content {i + 1}
                </Box>
              ))}
            </VStack>
          </Box>
        </Flex>

        {/* Footer */}
        <Flex as="footer" align="center" justify="center" padding="1rem" bg="gray.900" color="white">
          <Text>&copy; 2023 Your Company. All rights reserved.</Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;