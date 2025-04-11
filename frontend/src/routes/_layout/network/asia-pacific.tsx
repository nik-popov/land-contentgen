import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/asia-pacific")({
  component: AsiaPacificProxiesPage,
});

function AsiaPacificProxiesPage() {
  const regionData = [
    { region: "East Asia", countries: 6, cities: 62, useCases: "Market research, localization testing, app performance validation" },
    { region: "Southeast Asia", countries: 10, cities: 48, useCases: "E-commerce optimization, mobile app testing, emerging market research" },
    { region: "South Asia", countries: 7, cities: 45, useCases: "Mobile-first design testing, regional content delivery, price comparison" },
    { region: "Oceania & Pacific", countries: 4, cities: 23, useCases: "Content compliance, geo-restriction testing, market analysis" }
  ];

  const locationFeatures = [
    { 
      title: "Comprehensive Coverage", 
      description: "Access to residential proxies across all 25 Asia-Pacific countries with major and emerging market targeting", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "City-Level Precision", 
      description: "Target proxies in 178 major Asian and Pacific cities with specific postal code targeting capabilities", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Mobile Network Selection", 
      description: "Choose specific mobile carriers like NTT DoCoMo, China Mobile, Telstra, Reliance Jio, and more", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Location Verification", 
      description: "Every proxy location is verified through multiple sources to ensure accurate geographic positioning", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Asia-Pacific Proxies Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Asia-Pacific Proxy Network
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Tap into the widest array of geo-specific proxies across the Asia-Pacific region. 
            Channel your traffic through any nation, key city, or mobile carrier with exceptional precision for market insights and application testing.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Broad Regional Access</Heading>
              <Text>Link through residential, datacenter, and mobile IPs spanning 25 countries in East Asia, Southeast Asia, South Asia, and Oceania. Focus on specific zones, urban areas, or postal codes for accurate geo-targeting.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Mobile-Centric Validation</Heading>
              <Text>View websites and apps as Asia-Pacific users do, leveraging authentic mobile IPs that mirror real user traits, device specifics, and network environments in this mobile-dominant region.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Growth Market Insights</Heading>
              <Text>Evaluate your digital offerings in Asia’s rapidly expanding online markets with residential IPs from emerging economies. Test functionality across diverse network speeds and device types.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of Asia-Pacific Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">100%</StatNumber>
                <StatLabel>APAC Region Reach</StatLabel>
              </Stat>
              <Text>
                Cover every significant market in Asia-Pacific with our extensive network, spanning 
                25 nations from Japan to Australia and India to New Zealand.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">89%</StatNumber>
                <StatLabel>Mobile Testing Precision</StatLabel>
              </Stat>
              <Text>
                Businesses achieve up to 89% greater accuracy in mobile app testing using our 
                Asia-Pacific proxies compared to virtual simulations or emulators.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">1.6M+</StatNumber>
                <StatLabel>Residential & Mobile IPs</StatLabel>
              </Stat>
              <Text>
                Select from over 1.6 million residential and mobile IPs across Asia-Pacific for 
                genuine local interactions and lower detection probabilities.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Region Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Proxy Coverage in Asia-Pacific
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {regionData.map((region, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{region.region}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{region.countries}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Countries</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{region.cities}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Cities</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Typical Applications:</Text> {region.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Location Features Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Sophisticated Asia-Pacific Targeting Features
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our Asia-Pacific proxy system offers exact geographic targeting with top-tier precision.
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Real-time Location Verification" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Dynamic Location Validation</Heading>
                <Text color="gray.600">Proxy locations are consistently checked via multiple independent sources to ensure geographic reliability.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Mobile Network Targeting" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Mobile Carrier Focus</Heading>
                <Text color="gray.600">Pinpoint specific mobile carriers in each country to test apps and sites under realistic network scenarios.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Language & Script Support" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Multilingual Capabilities</Heading>
                <Text color="gray.600">Validate content in regional languages and scripts such as Chinese, Japanese, Korean, Hindi, Thai, and beyond.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Asia-Pacific Location API" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Asia-Pacific Geo-API</Heading>
                <Text color="gray.600">Automate location selection with our robust API for seamless geo-targeting across Asia-Pacific regions.</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Asia-Pacific Proxy System Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Geo-Selection Options</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Nationwide Reach</Text> - Utilize proxies from all 25 Asia-Pacific countries with full coverage.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Region-Specific Choices</Text> - Pick from areas like East Asia, Southeast Asia, South Asia, and Oceania.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Urban Accuracy</Text> - Focus on specific Asian cities with multiple proxy options per location.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Carrier Customization</Text> - Select proxies from specific mobile carriers for authentic testing in mobile-heavy markets.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Speed-Based Filtering</Text> - Sort proxies by connection speed to mimic diverse network environments.</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Management & Integration</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom Location Sets</Text> - Define and store tailored Asia-Pacific location profiles for repeated testing.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Geo-API Tools</Text> - Leverage all Asia-Pacific location capabilities programmatically via our detailed API.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Compatibility</Text> - Use extensions to easily switch Asian locations during testing.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Mobile Testing Features</Text> - Advanced tools for validating mobile apps across Asian network conditions.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Performance Metrics</Text> - Monitor proxy effectiveness by location with precise success data across Asia-Pacific.</Text>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Case Studies Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Success Stories in Asia-Pacific
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Mobile Game Developer Boosts Southeast Asia Reach</Heading>
              <Text mb={4}>
                A mobile gaming firm utilized our Asia-Pacific proxies to assess app performance across 
                10 Southeast Asian nations. They uncovered key optimization needs for low-bandwidth zones, 
                enhancing their delivery system and achieving a 64% rise in user retention.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Authentic mobile IPs across Southeast Asia showed our app was inaccessible in many areas due to 
                heavy data demands. Country-specific data led us to a progressive loading solution that vastly 
                improved reach."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">E-commerce Giant Enhances Language Support</Heading>
              <Text mb={4}>
                A global e-commerce company employed our Asia-Pacific proxies to evaluate their site across 
                12 language variants. They identified critical display issues with non-Latin scripts and payment 
                glitches, boosting East Asian conversions by 41% after corrections.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Testing from specific Asian locations let us see our site as local users do, revealing major 
                rendering flaws in Chinese, Japanese, and Korean scripts that went unnoticed from Western hubs."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Asia-Pacific Map Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Asia-Pacific Proxy Reach
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our vast network ensures thorough coverage across all Asia-Pacific zones, with strong presence in major markets.
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">East Asia</Text>
                <Text>6 Countries</Text>
                <Text>62 Cities</Text>
                <Text>Key Carriers Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Southeast Asia</Text>
                <Text>10 Countries</Text>
                <Text>48 Cities</Text>
                <Text>Key Carriers Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">South Asia</Text>
                <Text>7 Countries</Text>
                <Text>45 Cities</Text>
                <Text>Key Carriers Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Oceania & Pacific</Text>
                <Text>4 Countries</Text>
                <Text>23 Cities</Text>
                <Text>Key Carriers Included</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Explore Any Asia-Pacific Market
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin using our Asia-Pacific proxy network now and navigate the web from any point 
            across 25 countries in the world’s most dynamic digital landscape.
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="red.500"
              _hover={{ bg: "gray.100" }}
              as="a"
              href="/demo-request"
            >
              Request Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "red.700" }}
              as="a"
              href="https://buy.stripe.com/4gwg1C2by9Cs2Ry6op"
            >
              Start Free Trial
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default AsiaPacificProxiesPage;