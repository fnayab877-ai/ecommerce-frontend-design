import { HStack, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <HStack
      spacing={4}
      p={4}
      justify="center"
      bg="gray.800"
      boxShadow="md"
    >
      <Button
        as={Link}
        to="/"
        colorScheme={location.pathname === "/" ? "teal" : "gray"}
      >
        Hero
      </Button>

      <Button
        as={Link}
        to="/about"
        colorScheme={location.pathname === "/about" ? "teal" : "gray"}
      >
        About
      </Button>

      <Button
        as={Link}
        to="/projects"
        colorScheme={location.pathname === "/projects" ? "teal" : "gray"}
      >
        Projects
      </Button>

      <Button
        as={Link}
        to="/contact"
        colorScheme={location.pathname === "/contact" ? "teal" : "gray"}
      >
        Contact
      </Button>
    </HStack>
  );
}