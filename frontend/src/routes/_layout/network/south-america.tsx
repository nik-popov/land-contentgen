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
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            South America Proxies
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Access the most comprehensive network of South American geo-targeted proxies.
            Route your connections through any country, major city, or local ISP with pinpoint accuracy for market research and localization testing.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Regional Coverage</Heading>
              <Text>Connect through residential, datacenter, and mobile IPs from all 14 South American countries. Target specific regions, cities, or postal codes for precise geo-targeting across diverse markets.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Authentic Local Experience</Heading>
              <Text>Experience websites and apps exactly as South American users do with genuine residential IPs that reflect real user attributes, browser fingerprints, and regional network characteristics.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Emerging Market Testing</Heading>
              <Text>Validate your digital products in rapidly growing South American economies. Test payment integrations, localized content, and performance across diverse bandwidth conditions.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of South American Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">100%</StatNumber>
                <StatLabel>Market Coverage</StatLabel>
              </Stat>
              <Text>
                Access every South American market with our comprehensive network that covers all 
                14 countries from Brazil to Chile, and from Colombia to Argentina.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">86%</StatNumber>
                <StatLabel>Localization Accuracy</StatLabel>
              </Stat>
              <Text>
                Organizations report up to 86% more accurate localization testing when using
                our South American proxies compared to simulated environments or VPNs.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">1.1M+</StatNumber>
                <StatLabel>Residential IPs</StatLabel>
              </Stat>
              <Text>
                Choose from over 1.1 million residential IP addresses across South America, 
                ensuring authentic local browsing experiences and reduced detection rates.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Region Coverage Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            South American Proxy Coverage
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {regionData.map((region, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{region.region}</StatLabel>
                  {region.states ? (
                    <Flex justify="space-between" align="center">
                      <StatNumber color="blue.600">{region.states}</StatNumber>
                      <Text color="gray.500" fontSize="sm" fontWeight="normal">States</Text>
                    </Flex>
                  ) : (
                    <Flex justify="space-between" align="center">
                      <StatNumber color="blue.600">{region.countries}</StatNumber>
                      <Text color="gray.500" fontSize="sm" fontWeight="normal">Countries</Text>
                    </Flex>
                  )}
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{region.cities}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Cities</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {region.useCases}
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
            Advanced South American Location Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our South American proxy network provides precise geographic targeting with industry-leading accuracy
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Real-time Location Verification" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Real-time Location Verification</Heading>
                <Text color="gray.600">Every proxy location is continuously verified through multiple independent sources to ensure geographic accuracy</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Local Payment Method Testing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Local Payment Method Testing</Heading>
                <Text color="gray.600">Test region-specific payment methods and financial services with authentic local IP addresses</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Portuguese/Spanish Testing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Portuguese/Spanish Testing</Heading>
                <Text color="gray.600">Validate content and applications in Portuguese and regional Spanish variants with country-specific proxies</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="South American Location API" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">South American Location API</Heading>
                <Text color="gray.600">Programmatically select locations with our comprehensive API for automated geo-targeting across all South American regions</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            South American Proxy Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Geographic Targeting</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Country Selection</Text> - Access proxies from all 14 South American countries with comprehensive coverage</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Regional Targeting</Text> - Select from specific regions including Brazil, Andean Region, Southern Cone, and Northern Region</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">City Precision</Text> - Target specific South American cities with multiple proxies available in each location</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">ISP Selection</Text> - Choose proxies from specific South American internet service providers or mobile carriers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Connection Type Filtering</Text> - Filter proxies by connection type (fiber, cable, DSL, mobile) to match market conditions</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Control & Integration</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Groups</Text> - Create and save custom South American location groups for frequent testing scenarios</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location API</Text> - Access all South American location features programmatically through our comprehensive API</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Integration</Text> - Use browser extensions to quickly switch between South American locations in your testing</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Localization Testing</Text> - Specialized tools for testing language variants and regional content adaptations</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Analytics</Text> - Track proxy performance by location with detailed success metrics across South America</Text>
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
            South American Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Retail Chain Optimizes Regional Pricing Strategy</Heading>
              <Text mb={4}>
                A major international retailer used our South American proxies to analyze regional pricing across 
                6 countries. They discovered significant opportunities for price optimization by country and 
                restructured their strategy, resulting in a 34% increase in conversions in the Brazilian market.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The ability to see our competitors' pricing from authentic local IPs revealed dramatic differences 
                in how products were positioned and priced in each market. We were able to adjust our strategy 
                to be much more competitive in each country."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Fintech Startup Perfects Payment Processing</Heading>
              <Text mb={4}>
                A fintech company used our South American proxy network to test their payment platform across 
                multiple countries. They identified critical issues with local payment methods and banking 
                integrations, leading to a 52% reduction in transaction failures after implementing fixes.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Testing from authentic local IPs showed us that our payment system was failing with several major 
                regional banks and popular local payment methods. Without country-specific testing, we would have 
                continued losing transactions without understanding why."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* South America Map Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            South American Proxy Network Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our extensive network provides comprehensive coverage across all South American regions with dense concentration in key markets
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Brazil</Text>
                <Text>26 States</Text>
                <Text>32 Cities</Text>
                <Text>Major ISPs Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Andean Region</Text>
                <Text>5 Countries</Text>
                <Text>28 Cities</Text>
                <Text>Major ISPs Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Southern Cone</Text>
                <Text>4 Countries</Text>
                <Text>22 Cities</Text>
                <Text>Major ISPs Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Northern Region</Text>
                <Text>4 Countries</Text>
                <Text>12 Cities</Text>
                <Text>Major ISPs Covered</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Access Any South American Location
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our South American proxy network today and experience
            the web from any location across 14 countries in this dynamic and diverse market
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
                  <Button
                      size="lg"
                      bg="white"
                      color="blue.500"
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
              _hover={{ bg: "blue.700" }}
              as="a"
              href="https://dashboard.thedataproxy.com/signup"
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