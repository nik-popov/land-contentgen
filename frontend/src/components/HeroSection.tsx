import { Box, Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";
import PropTypes from 'prop-types';

function HeroSection({ title, subtitle, ctas, bgImage }) {
  // Ensure ctas is an array
  const ctaButtons = Array.isArray(ctas) ? ctas : [];

  return (
    <Box
      bgGradient="linear(to-bl, blue.900, blue.400)"
      py={{ base: 10, md: 15 }}
      bgImage={bgImage}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "rgba(0, 0, 0, 0.4)",
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
        position="relative"
        zIndex={2}
      >
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

        <Box
          w={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent={{ base: "center", md: "flex-end" }}
          alignItems="center"
          minH={{ base: "300px", md: "400px" }}
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
        flexWrap="wrap" // Allow buttons to wrap on smaller screens
      >
        {ctaButtons.map((cta, index) => (
          <Button
          key={index}
          as="a"
          href={cta.link}
          color={index === 0 ? "white" : "orange.400"} 
          bg={index === 0 ? "orange.400" : "white"}
          size="lg"
          _hover={{ 
            bg: index === 0 ? "white" : "orange.400", 
            color: index === 0 ? "orange.400" : "white" 
          }}
          px={6}
        >
          {cta.text}
        </Button>
        ))}
      </Flex>
    </Box>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  ctas: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  bgImage: PropTypes.string,
};

HeroSection.defaultProps = {
  ctas: [],
  bgImage: '',
};

export default HeroSection;