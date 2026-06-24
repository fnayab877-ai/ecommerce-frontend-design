import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="white"
      color="black"
      px={6}
    >
      <VStack
        spacing={6}
        textAlign="center"
        maxW="600px"
        bg="gray.50"
        p={10}
        borderRadius="2xl"
        shadow="lg"
      >
        <Heading color="teal.600">
          Contact
        </Heading>

        <Text fontSize="lg" color="gray.700">
          Frontend Developer Intern passionate about building
          responsive and modern web applications using React
          and JavaScript.
        </Text>

        <Box
          w="100%"
          bg="white"
          p={5}
          borderRadius="lg"
          shadow="sm"
        >
          <Text fontSize="md" mb={3}>
            💻 <b>Skills:</b> React, HTML, CSS, JavaScript, Chakra UI
          </Text>

          <Text fontSize="md" mb={3}>
            📅 <b>Experience:</b> 2023 – Present
          </Text>

          <Text fontSize="md">
            📍 <b>Location:</b> Multan, Pakistan
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}