import { Box, Flex, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";

function HeroSection() {
  return (
    <Box
      bgGradient="linear(to-bl, blue.900, blue.400)"
      py={15}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={8}
      >
        {/* Left Column: Text Content */}
        <VStack align="flex-start" p={8} spacing={6} w={{ base: "100%", md: "60%" }}>
          <Heading
            as="h1"
            size="2xl"
            color="white"
            fontWeight="medium"
            pb={2}
          >
            Your Systems Gateway to the Public Web
          </Heading>
          <Text
            fontSize="xl"
            color="white"
            fontWeight="normal"
            pb={1}
          >
            SaaS proxy solutions built for large-scale data processing, extraction, LLM training and more.
          </Text>
        </VStack>
        <Box
  w={{ base: "100%", md: "40%" }}
  display="flex"
  alignItems="center"
  justifyContent={{ base: "flex-start", md: "center" }}
>
  <Image
    src="/assets/images/hero.png"
    alt="Hero Image"
    maxW="400px" // Ensures the image doesn't exceed 400px in width
    w="100%"    // Makes the image responsive within its container
    objectFit="contain" // Keeps the image's aspect ratio intact
  />
</Box>
      <Flex justify="center" gap={4} pt={4} pb={20}>
        <Button
          as="a"
          href="https://dashboard.thedataproxy.com/signup"
          color="white"
          bg="orange.400"
          size="lg"
          _hover={{ bg: "white", color: "orange.400" }}
        >
          Start Your Free Trial
        </Button>
        <Button
          as="a"
          href="https://dashboard.thedataproxy.com/login"
          color="white"
          bg="orange.400"
          size="lg"
          _hover={{ bg: "white", color: "orange.400" }}
        >
          Login
        </Button>
      </Flex>
    </Box>
  );
}

export default HeroSection;