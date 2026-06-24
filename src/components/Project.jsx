import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function Project() {
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
        spacing={5}
        textAlign="center"
        maxW="700px"
        bg="gray.50"
        p={10}
        borderRadius="2xl"
        shadow="lg"
      >
        <Heading color="teal.600">
          Education
        </Heading>

        <Box
          w="100%"
          bg="white"
          p={6}
          borderRadius="lg"
          shadow="sm"
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Bachelor of Science in Computer Science
          </Text>

          <Text color="gray.600" mb={3}>
            NFC Institute of Engineering and Technology, Multan
          </Text>

          <Text fontSize="sm" color="gray.500">
            Currently in 6th Semester
          </Text>
        </Box>

        <Box
          w="100%"
          bg="white"
          p={6}
          borderRadius="lg"
          shadow="sm"
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Admire College
          </Text>

          <Text color="gray.600">
            Intermediate Education
          </Text>
        </Box>

        <Box
          w="100%"
          bg="white"
          p={6}
          borderRadius="lg"
          shadow="sm"
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Sultan Foundation Girls High School
          </Text>

          <Text color="gray.600">
            Matriculation
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}