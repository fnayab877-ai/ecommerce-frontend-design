import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function About() {
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
          About Me
        </Heading>

        <Text fontSize="lg" color="gray.700">
          I am a passionate Computer Science student and frontend developer
          who enjoys creating modern, responsive, and user-friendly web
          applications. I love learning new technologies, improving my coding
          skills, and building creative digital experiences.
        </Text>

        <Box
          w="100%"
          bg="white"
          p={5}
          borderRadius="lg"
          shadow="sm"
        >
          <Text fontSize="md" mb={2}>
            📞 <b>Phone:</b> +92 3106767714
          </Text>

          <Text fontSize="md">
            📧 <b>Email:</b> fnayab877@gmail.com
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}