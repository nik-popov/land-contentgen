import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/locations")({
  component: ProxyLocationsPage,
});

function ProxyLocationsPage() {
  const regionData = [
    { region: "North America", countries: 3, cities: 182, useCases: "Consumer testing, localized content, regional compliance" },
    { region: "Europe", countries: 38, cities: 215, useCases: "GDPR verification, language targeting, market research" },
    { region: "Asia-Pacific", countries: 25, cities: 178, useCases: "App testing, localization, competitive research" },
    { region: "Latin America", countries: 20, cities: 94, useCases: "Price analysis, content targeting, regional SEO" },
    { region: "Middle East & Africa", countries: 35, cities: 127, useCases: "Market entry research, accessibility testing, localization" },
    { region: "Oceania", countries: 4, cities: 36, useCases: "Regional pricing, content availability, compliance testing" }
  ];

  const locationFeatures = [
    { 
      title: "Global Coverage", 
      description: "Access to residential proxies in 195+ countries and 850+ cities with specific ISP targeting capabilities", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Address-Level Precision", 
      description: "Target proxies down to city or postal code level for the most accurate geo-specific testing", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "ISP & Network Selection", 
      description: "Choose specific internet service providers, mobile carriers, or network types for authentic testing", 
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
      {/* Proxy Locations Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Global Proxy Locations
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Tap into the most extensive collection of geo-specific proxies worldwide. 
            Direct your traffic through any nation, urban center, or ISP with exceptional precision.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Worldwide Reach</Heading>
              <Text>Link through residential, datacenter, and mobile IPs across 195+ countries and 850+ cities globally. Focus on specific regions, cities, or postal codes for accurate geo-targeting.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Realistic Local Views</Heading>
              <Text>Interact with websites and applications as local users would, using genuine residential IPs that mimic actual user profiles, browser signatures, and network conditions.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Tailored Location Options</Heading>
              <Text>Pick locations based on criteria like country, region, city, ISP, network type, or speed. Store custom location sets for recurring use scenarios.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of Geo-Specific Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">100%</StatNumber>
                <StatLabel>Worldwide Market Access</StatLabel>
              </Stat>
              <Text>
                Reach any global market with our extensive network, covering every country 
                and key city, providing unmatched scope for your operations.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">87%</StatNumber>
                <StatLabel>Enhanced Testing Precision</StatLabel>
              </Stat>
              <Text>
                Companies note up to 87% improved accuracy in localization testing with our 
                geo-specific proxies compared to virtual setups or VPNs.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">5M+</StatNumber>
                <StatLabel>Residential IPs Available</StatLabel>
              </Stat>
              <Text>
                Select from over 5 million residential IPs worldwide for true local browsing 
                experiences and minimized detection risks.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Region Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Proxy Coverage by Region
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
            Sophisticated Location Tools
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our proxy network offers exact geographic targeting with top-tier precision.
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Real-time Location Verification" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Dynamic Location Validation</Heading>
                <Text color="gray.600">Proxy locations are consistently checked using multiple independent sources to guarantee geographic reliability.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Diverse IP Types" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Varied IP Options</Heading>
                <Text color="gray.600">Utilize residential, datacenter, and mobile IPs per location, with options to choose connection types suited to your needs.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Location Persistence" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Stable Location Continuity</Heading>
                <Text color="gray.600">Keep consistent geo-locations across sessions using sticky IP settings to stay within the same area.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Location API" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Geo-Targeting API</Heading>
                <Text color="gray.600">Automate location choices with our robust API for seamless geo-targeting across your applications.</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Proxy Location System Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Geo-Selection Tools</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Nationwide Options</Text> - Use proxies from 195+ countries with full global reach.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">City-Level Focus</Text> - Pick from 850+ cities worldwide with multiple proxies per location.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Postal Code Accuracy</Text> - Target specific postal codes in key markets for ultra-local testing.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">ISP Customization</Text> - Select proxies from specific ISPs or mobile networks.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Regional Cycling</Text> - Seamlessly cycle through proxies within a chosen geographic area.</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Management & Connectivity</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Profiles</Text> - Build and save tailored location sets for common testing needs.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Geo-API Access</Text> - Leverage all location capabilities through our detailed API.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Tools</Text> - Use extensions to swiftly change locations during testing.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Assurance</Text> - Confirm proxy location accuracy with integrated validation tools.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Performance Tracking</Text> - Monitor proxy effectiveness by location with in-depth metrics.</Text>
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
            Success Stories with Geo-Targeting
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">E-commerce Giant Refines Localization</Heading>
              <Text mb={4}>
                A top e-commerce company employed our geo-specific proxies to evaluate their website and app 
                across 73 nations. They pinpointed vital localization flaws in 18 regions, enhancing user 
                satisfaction and boosting conversions by an average of 26% in those areas.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Authentic residential IPs in each region gave us unmatched visibility into our platform’s 
                local performance, revealing issues we couldn’t see in standard testing setups."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Travel Leader Enhances Pricing Strategy</Heading>
              <Text mb={4}>
                A worldwide travel booking service used our geo-targeted proxies to track competitor pricing 
                across 42 countries at once. They identified notable pricing variations by location, refining 
                their pricing approach and achieving a 14% revenue increase.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Geo-specific proxies showed us how much competitor pricing differed by region—insights that 
                reshaped our pricing model and strengthened our market standing."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* World Map Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Worldwide Proxy Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our broad network spans all inhabited continents, with dense coverage in critical markets.
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">North America</Text>
                <Text>3 Countries</Text>
                <Text>182 Cities</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Europe</Text>
                <Text>38 Countries</Text>
                <Text>215 Cities</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Asia-Pacific</Text>
                <Text>25 Countries</Text>
                <Text>178 Cities</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Latin America</Text>
                <Text>20 Countries</Text>
                <Text>94 Cities</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Middle East & Africa</Text>
                <Text>35 Countries</Text>
                <Text>127 Cities</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Oceania</Text>
                <Text>4 Countries</Text>
                <Text>36 Cities</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Connect Globally with Ease
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin using our geo-targeted proxy network now and navigate 
            the web from any spot across the globe.
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="red.600"
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
              href="https://cloud.roamingproxy.com/signup"
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

export default ProxyLocationsPage;