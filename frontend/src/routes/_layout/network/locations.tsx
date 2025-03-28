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
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Proxy Locations
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Access the world's most comprehensive network of geo-targeted proxies.
            Route your connections through any country, city, or ISP with pinpoint accuracy.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Global Coverage</Heading>
              <Text>Connect through residential, datacenter, and mobile IPs from 195+ countries and 850+ cities worldwide. Target specific regions, cities, or postal codes for precise geo-targeting.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Authentic Local Experience</Heading>
              <Text>Experience websites and apps exactly as local users do with genuine residential IPs that reflect real user attributes, browser fingerprints, and network characteristics.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Customizable Selection</Heading>
              <Text>Choose locations based on specific criteria including country, region, city, ISP, network type, and connection speed. Save custom location profiles for frequent use cases.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Geo-Targeted Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">100%</StatNumber>
                <StatLabel>Global Market Coverage</StatLabel>
              </Stat>
              <Text>
                Access any geographic market with our comprehensive network that covers every country 
                and major city worldwide, enabling truly global reach for your business.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">87%</StatNumber>
                <StatLabel>Testing Accuracy Increase</StatLabel>
              </Stat>
              <Text>
                Organizations report up to 87% more accurate localization testing when using
                our geo-targeted proxies compared to simulated environments or VPNs.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">5M+</StatNumber>
                <StatLabel>Residential IPs</StatLabel>
              </Stat>
              <Text>
                Choose from over 5 million residential IP addresses across the globe, 
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
            Regional Proxy Coverage
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {regionData.map((region, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{region.region}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{region.countries}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Countries</Text>
                  </Flex>
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
            Advanced Location Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our proxy location network provides precise geographic targeting with industry-leading accuracy
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
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Diverse IP Types" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Diverse IP Types</Heading>
                <Text color="gray.600">Access residential, datacenter, and mobile IPs in each location, with the ability to specify connection type for your use case</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Location Persistence" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Location Persistence</Heading>
                <Text color="gray.600">Maintain consistent geo-locations across sessions with sticky IP options that keep you in the same region</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Location API" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Location API</Heading>
                <Text color="gray.600">Programmatically select locations with our comprehensive API for automated geo-targeting across all applications</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Proxy Location Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Geographic Targeting</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Country Selection</Text> - Access proxies from 195+ countries with comprehensive global coverage</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">City Targeting</Text> - Select from 850+ cities worldwide with multiple proxies available in each location</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Postal Code Precision</Text> - Target specific postal codes in major markets for hyper-local testing</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">ISP Selection</Text> - Choose proxies from specific internet service providers or mobile carriers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Region Rotation</Text> - Automatically rotate through proxies within a specific geographic region</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Control & Integration</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Groups</Text> - Create and save custom location groups for frequent testing scenarios</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location API</Text> - Access all location features programmatically through our comprehensive API</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Integration</Text> - Use browser extensions to quickly switch between locations in your testing</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Validation</Text> - Verify the accuracy of proxy locations with our built-in testing tools</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Analytics</Text> - Track proxy performance by location with detailed success metrics</Text>
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
            Geo-Targeting Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Global E-commerce Platform Perfects Localization</Heading>
              <Text mb={4}>
                A leading e-commerce platform used our location-specific proxies to test their website and mobile 
                app across 73 countries. They identified critical localization issues in 18 markets, improving user 
                experience and increasing conversion rates by an average of 26% in those regions.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The ability to access authentic residential IPs in each market gave us unprecedented insight into 
                how our platform actually performs for local users. We uncovered issues that were invisible in our 
                traditional testing environments."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Travel Industry Leader Optimizes Regional Pricing</Heading>
              <Text mb={4}>
                A global travel booking service implemented our geo-targeted proxies to monitor competitive 
                pricing across 42 countries simultaneously. They discovered significant pricing discrepancies 
                based on user location and optimized their own pricing strategy, resulting in 14% revenue growth.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Before using location-specific proxies, we had no idea how much our competitors' pricing varied 
                by region. The insights we gained transformed our entire pricing strategy and significantly 
                improved our market position."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* World Map Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Global Proxy Network
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our extensive network provides coverage across all populated continents with dense concentration in key markets
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">North America</Text>
                <Text>3 Countries</Text>
                <Text>182 Cities</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Europe</Text>
                <Text>38 Countries</Text>
                <Text>215 Cities</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Asia-Pacific</Text>
                <Text>25 Countries</Text>
                <Text>178 Cities</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Latin America</Text>
                <Text>20 Countries</Text>
                <Text>94 Cities</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Middle East & Africa</Text>
                <Text>35 Countries</Text>
                <Text>127 Cities</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Oceania</Text>
                <Text>4 Countries</Text>
                <Text>36 Cities</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Access Any Location Worldwide
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our geo-targeted proxy network today and experience
            the web from any location around the globe
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="blue.600"
              _hover={{ bg: "gray.100" }}
              as="a"
              href="/tools/demo-request"
            >
              View Location Coverage
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
      
      {/* Integration Partners */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Works With Your Favorite Tools
          </Heading>
          <Flex justify="center" gap={8} flexWrap="wrap">
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Selenium" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Node.js" boxSize="50px" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="Chrome" boxSize="50px" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png" alt="Firefox" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="REST API" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png" alt="Postman" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/puppeteer.png" alt="Puppeteer" boxSize="50px" />
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default ProxyLocationsPage;