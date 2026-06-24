import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";

export default function Hero() {
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
      <VStack spacing={5} textAlign="center" maxW="700px">
        
        <Image
          src="Nayab.jpg"
          alt="Nayab Fatima"
          borderRadius="full"
          boxSize="170px"
          objectFit="cover"
          border="4px solid #319795"
          shadow="lg"
        />

        <Heading
          size="2xl"
          fontFamily="Times New Roman, serif"
          color="teal.600"
        >
          Nayab Fatima
        </Heading>

        <Text fontSize="xl" fontWeight="semibold">
          Computer Science Student | Frontend Developer
        </Text>

        <Text fontSize="md" color="gray.600">
          5th Semester CS Student passionate about frontend development,
          responsive web applications, and creative problem-solving.
          Skilled in React, HTML, CSS, and JavaScript with a strong interest
          in building clean and user-friendly interfaces.
        </Text>

        <Box
          mt={4}
          px={6}
          py={3}
          borderRadius="lg"
          bg="gray.100"
          shadow="sm"
        >
          <Text fontSize="sm" color="gray.700">
            React • JavaScript • HTML • CSS • Chakra UI
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}