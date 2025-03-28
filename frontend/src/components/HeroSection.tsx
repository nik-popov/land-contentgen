import { Box, Flex, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <Box
      bgGradient="linear(to-bl, blue.900, blue.300)"
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
        <VStack align="flex-start" spacing={6} w={{ base: "100%", md: "60%" }}>
          <Heading
            as="h1"
            size="2xl"
            color="white"
            fontWeight="medium"
            borderColor="orange.400"
            pb={2}
          >
            Your Systems Gateway to the Public Web
          </Heading>
          <Text
            fontSize="xl"
            color="white"
            fontWeight="normal"
            borderColor="orange.400"
            pb={1}
          >
            SaaS proxy solutions built for large-scale data processing, extraction, LLM training and more.
          </Text>
        </VStack>

        {/* Right Column: Image */}
        <Box
          w={{ base: "100%", md: "40%" }}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "flex-start", md: "center" }}
        >
         <Image
            src="public/assets/images/hero.png"
            alt="Hero Image"
            maxW="400px"
            objectFit="contain"
          />
        </Box>
      </Flex>
          
              
              <Flex justify="center" gap={4} pt={12}>
              <Button
             
                  color="white"
                  bg="orange.400"
                  size="lg"
                  _hover={{ bg: "white", color: "orange.400" }}
                  onClick={() => navigate({ to: "/signup" })}
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