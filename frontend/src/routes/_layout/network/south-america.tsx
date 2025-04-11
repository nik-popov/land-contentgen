import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/south-america")({
  component: SouthAmericaProxiesPage,
});

function SouthAmericaProxiesPage() {
  const regionData = [
    { region: "Brazil", cities: 32, states: 26, useCases: "Regional e-commerce testing, localization validation, market research" },
    { region: "Andean Region", countries: 5, cities: 28, useCases: "Price comparison, content accessibility, competitive analysis" },
    { region: "Southern Cone", countries: 4, cities: 22, useCases: "Payment processing testing, media streaming validation, pricing strategies" },
    { region: "Northern Region", countries: 4, cities: 12, useCases: "Emerging market research, mobile usability testing, service availability" }
  ];

  const locationFeatures = [
    { 
      title: "Comprehensive Coverage", 
      description: "Access to residential proxies across all 14 South American countries with major city and provincial targeting", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "City-Level Precision", 
      description: "Target proxies in 94 major South American cities with specific postal code targeting capabilities", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "ISP Selection", 
      description: "Choose specific internet service providers like Claro, Telefônica, Movistar, Entel, and more", 
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
      {/* South America Proxies Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            South American Proxy Network
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Tap into the broadest array of geo-specific proxies in South America. 
            Direct your traffic through any nation, key urban center, or regional ISP with exceptional precision for market analysis and localization efforts.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Broad Regional Reach</Heading>
              <Text>Route connections via residential, datacenter, and mobile IPs spanning all 14 South American nations. Pinpoint specific areas, cities, or postal codes for accurate targeting across varied markets.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">True Local Perspective</Heading>
              <Text>View websites and applications as South American users would, using authentic residential IPs that mirror real user profiles, browser signatures, and local network traits.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Growth Market Validation</Heading>
              <Text>Assess your digital offerings in South America’s fast-evolving economies. Verify payment systems, regional content, and functionality under diverse network conditions.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of South American Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">100%</StatNumber>
                <StatLabel>Regional Reach</StatLabel>
              </Stat>
              <Text>
                Cover every South American market with our extensive network, spanning all 
                14 nations, from Brazil to Chile and Colombia to Argentina.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">86%</StatNumber>
                <StatLabel>Localization Precision</StatLabel>
              </Stat>
              <Text>
                Businesses achieve up to 86% higher accuracy in localization testing with our 
                South American proxies compared to simulated setups or VPNs.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">1.1M+</StatNumber>
                <StatLabel>Residential IPs</StatLabel>
              </Stat>
              <Text>
                Select from over 1.1 million residential IPs across South America for genuine 
                local browsing experiences and lower detection risks.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Region Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Proxy Coverage Across South America
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {regionData.map((region, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{region.region}</StatLabel>
                  {region.states ? (
                    <Flex justify="space-between" align="center">
                      <StatNumber color="red.600">{region.states}</StatNumber>
                      <Text color="gray.500" fontSize="sm" fontWeight="normal">States</Text>
                    </Flex>
                  ) : (
                    <Flex justify="space-between" align="center">
                      <StatNumber color="red.600">{region.countries}</StatNumber>
                      <Text color="gray.500" fontSize="sm" fontWeight="normal">Countries</Text>
                    </Flex>
                  )}
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
            Sophisticated South American Targeting Features
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our South American proxy network delivers exact geographic targeting with top-tier precision.
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Real-time Location Verification" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Dynamic Location Confirmation</Heading>
                <Text color="gray.600">Proxy locations are consistently validated using multiple independent sources to guarantee geographic reliability.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Local Payment Method Testing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Regional Payment Validation</Heading>
                <Text color="gray.600">Verify local payment options and financial services using real regional IP addresses.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Portuguese/Spanish Testing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Language-Specific Testing</Heading>
                <Text color="gray.600">Check content and apps in Portuguese and regional Spanish dialects using country-tailored proxies.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="South American Location API" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">South American Targeting API</Heading>
                <Text color="gray.600">Automate location selection with our robust API for seamless geo-targeting across South America.</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            South American Proxy Platform Capabilities
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Geo-Targeting Options</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Nationwide Access</Text> - Utilize proxies from all 14 South American countries with full coverage.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Region-Specific Selection</Text> - Choose from areas like Brazil, Andean Region, Southern Cone, and Northern Region.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Urban Accuracy</Text> - Focus on specific South American cities with multiple proxy options per location.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">ISP Customization</Text> - Pick proxies from specific South American ISPs or mobile networks.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Network Type Options</Text> - Sort proxies by connection type (fiber, cable, DSL, mobile) to reflect market realities.</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Management & Integration</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom Location Sets</Text> - Define and store tailored South American location groups for repeated testing.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Targeting API</Text> - Leverage all South American location tools programmatically via our detailed API.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Compatibility</Text> - Employ extensions to easily switch South American locations during testing.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Regional Testing Tools</Text> - Advanced features for validating language variations and local content adaptations.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Performance Insights</Text> - Monitor proxy effectiveness by location with precise success metrics across South America.</Text>
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
            Success Stories from South America
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Retailer Enhances Regional Pricing</Heading>
              <Text mb={4}>
                A prominent global retailer leveraged our South American proxies to evaluate pricing trends across 
                six nations. They uncovered key opportunities for price adjustments by region, boosting conversions 
                by 34% in Brazil after refining their approach.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Using real local IPs, we saw stark pricing differences across markets that shaped a more competitive 
                strategy for each country, significantly improving our regional performance."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Fintech Improves Transaction Success</Heading>
              <Text mb={4}>
                A fintech startup utilized our South American proxy network to refine their payment system across 
                multiple nations. By spotting and resolving issues with local payment methods and bank integrations, 
                they cut transaction failures by 52%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Authentic local IPs revealed payment system flaws with major regional banks and methods. 
                Without this targeted testing, we’d have missed critical failures impacting our users."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* South America Map Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            South American Proxy Reach
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our vast network ensures thorough coverage across all South American regions, with strong presence in major markets.
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">Brazil</Text>
                <Text>26 States</Text>
                <Text>32 Cities</Text>
                <Text>Major ISPs Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Andean Region</Text>
                <Text>5 Countries</Text>
                <Text>28 Cities</Text>
                <Text>Major ISPs Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Southern Cone</Text>
                <Text>4 Countries</Text>
                <Text>22 Cities</Text>
                <Text>Major ISPs Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Northern Region</Text>
                <Text>4 Countries</Text>
                <Text>12 Cities</Text>
                <Text>Major ISPs Included</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Explore Any South American Market
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Launch into our South American proxy network today and navigate 
            the web from any point across 14 countries in this vibrant, diverse region.
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

export default SouthAmericaProxiesPage;