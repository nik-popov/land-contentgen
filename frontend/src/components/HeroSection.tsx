import { Box, Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";

function HeroSection({ title, subtitle, ctaText, ctaLink, bgImage }) {
  return (
    <Box
      bgGradient="linear(to-bl, blue.900, blue.400)"
      py={{ base: 10, md: 15 }}
      bgImage={bgImage} // Use the provided background image
      bgSize="cover" // Ensure the image covers the section
      bgPosition="center" // Center the background image
      bgRepeat="no-repeat" // Prevent tiling
      position="relative" // For layering content over the image
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "rgba(0, 0, 0, 0.4)", // Optional overlay for readability
        zIndex: 1,
      }}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 6, md: 8 }}
        position="relative" // Ensure content sits above the overlay
        zIndex={2} // Above the overlay
      >
        {/* Left Column: Text Content */}
        <VStack
          align="flex-start"
          spacing={6}
          w={{ base: "100%", md: "50%" }}
          px={{ base: 0, md: 8 }}
        >
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            color="white"
            fontWeight="medium"
            lineHeight="1.2"
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="white"
            fontWeight="normal"
            maxW="600px"
          >
            {subtitle}
          </Text>
        </VStack>

        {/* Right Column: Placeholder for Height */}
        <Box
          w={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent={{ base: "center", md: "flex-end" }}
          alignItems="center"
          minH={{ base: "300px", md: "400px" }} // Maintains the height of the original image
        >
          {/* Image removed, but space preserved */}
        </Box>
      </Flex>

      <Flex
        justify="center"
        gap={4}
        pt={{ base: 6, md: 8 }}
        pb={{ base: 10, md: 20 }}
        position="relative"
        zIndex={2}
      >
        <Button
          as="a"
          href={ctaLink}
          color="white"
          bg="orange.400"
          size="lg"
          _hover={{ bg: "white", color: "orange.400" }}
          px={6}
        >
          {ctaText}
        </Button>
        <Button
          as="a"
          href="https://cloud.thedataproxy.com/login"
          color="white"
          bg="orange.400"
          size="lg"
          _hover={{ bg: "white", color: "orange.400" }}
        >
          Start Your Free Trial
        </Button>
      </Flex>
    </Box>
  );
}

export default HeroSection;

      <Flex justify="center" gap={4} pt={4} pb={20}>
        <Button
          as="a"
          href="https://cloud.thedataproxy.com/signup"
          color="white"
          bg="orange.400"
          size="lg"
          _hover={{ bg: "white", color: "orange.400" }}
        >
          Start Your Free Trial
        </Button>
        <Button
          as="a"
          href="https://cloud.thedataproxy.com/login"
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