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
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Asia-Pacific Proxies
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Access the most comprehensive network of Asia-Pacific geo-targeted proxies.
            Route your connections through any country, major city, or mobile network with pinpoint accuracy for market research and app testing.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Regional Coverage</Heading>
              <Text>Connect through residential, datacenter, and mobile IPs from 25 countries across East Asia, Southeast Asia, South Asia, and Oceania. Target specific regions, cities, or postal codes for precise geo-targeting.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Mobile-First Testing</Heading>
              <Text>Experience websites and apps exactly as Asia-Pacific users do with genuine mobile IPs that reflect real user attributes, device characteristics, and network conditions in the world's most mobile-centric region.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Emerging Market Access</Heading>
              <Text>Test your digital products in the fastest-growing online markets with access to residential IPs across developing Asian economies. Validate performance in various network conditions and on different device types.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Asia-Pacific Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">100%</StatNumber>
                <StatLabel>APAC Market Coverage</StatLabel>
              </Stat>
              <Text>
                Access every key market in the Asia-Pacific region with our comprehensive network that covers 
                25 countries from Japan to Australia, and from India to New Zealand.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">89%</StatNumber>
                <StatLabel>Mobile App Testing Accuracy</StatLabel>
              </Stat>
              <Text>
                Organizations report up to 89% more accurate mobile app testing when using
                our Asia-Pacific proxies compared to simulated environments or emulators.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">1.6M+</StatNumber>
                <StatLabel>Residential & Mobile IPs</StatLabel>
              </Stat>
              <Text>
                Choose from over 1.6 million residential and mobile IP addresses across Asia-Pacific, 
                ensuring authentic local experiences and reduced detection rates.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Region Coverage Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Asia-Pacific Proxy Coverage
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
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
            Advanced Asia-Pacific Location Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our Asia-Pacific proxy network provides precise geographic targeting with industry-leading accuracy
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
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Mobile Network Targeting" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Mobile Network Targeting</Heading>
                <Text color="gray.600">Specifically target mobile carriers in each country for testing apps and websites on specific network conditions</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Language & Script Support" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Language & Script Support</Heading>
                <Text color="gray.600">Test content in local languages and scripts including Chinese, Japanese, Korean, Hindi, Thai, and more</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Asia-Pacific Location API" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Asia-Pacific Location API</Heading>
                <Text color="gray.600">Programmatically select locations with our comprehensive API for automated geo-targeting across all Asia-Pacific regions</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Asia-Pacific Proxy Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Geographic Targeting</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Country Selection</Text> - Access proxies from all 25 Asia-Pacific countries with comprehensive coverage</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Regional Targeting</Text> - Select from specific regions including East Asia, Southeast Asia, South Asia, and Oceania</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">City Precision</Text> - Target specific Asian cities with multiple proxies available in each location</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Mobile Carrier Selection</Text> - Choose proxies from specific mobile carriers for realistic testing in mobile-first markets</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Connection Speed Filtering</Text> - Filter proxies by connection speed to simulate various network conditions</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Control & Integration</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Groups</Text> - Create and save custom Asia-Pacific location groups for frequent testing scenarios</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location API</Text> - Access all Asia-Pacific location features programmatically through our comprehensive API</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Integration</Text> - Use browser extensions to quickly switch between Asian locations in your testing</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Mobile App Testing</Text> - Specialized tools for testing mobile apps in various Asian network environments</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Analytics</Text> - Track proxy performance by location with detailed success metrics across Asia-Pacific</Text>
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
            Asia-Pacific Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Mobile App Developer Expands into Southeast Asia</Heading>
              <Text mb={4}>
                A mobile gaming company used our Asia-Pacific proxies to test their app performance across 
                10 Southeast Asian countries. They identified critical optimization opportunities for low-bandwidth 
                areas and adapted their content delivery system, resulting in a 64% increase in user retention.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Testing with authentic mobile IPs from across Southeast Asia revealed that our app was unusable in many 
                regions due to high data requirements. The country-specific insights helped us implement a progressive 
                loading system that dramatically improved accessibility."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">E-commerce Platform Masters Multi-language Support</Heading>
              <Text mb={4}>
                A global e-commerce platform implemented our Asia-Pacific proxies to test their website across 
                12 different language versions. They discovered significant rendering issues with non-Latin scripts 
                and payment processing errors, leading to a 41% increase in East Asian conversions after fixes.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The ability to test from specific Asian countries allowed us to experience our site exactly 
                as local users do. We uncovered serious problems with Chinese, Japanese and Korean character 
                rendering that were completely invisible when testing from our Western offices."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Asia-Pacific Map Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Asia-Pacific Proxy Network Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our extensive network provides comprehensive coverage across all Asia-Pacific regions with dense concentration in key markets
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">East Asia</Text>
                <Text>6 Countries</Text>
                <Text>62 Cities</Text>
                <Text>Major Carriers Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Southeast Asia</Text>
                <Text>10 Countries</Text>
                <Text>48 Cities</Text>
                <Text>Major Carriers Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">South Asia</Text>
                <Text>7 Countries</Text>
                <Text>45 Cities</Text>
                <Text>Major Carriers Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Oceania & Pacific</Text>
                <Text>4 Countries</Text>
                <Text>23 Cities</Text>
                <Text>Major Carriers Covered</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Access Any Asia-Pacific Location
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our Asia-Pacific proxy network today and experience
            the web from any location across 25 countries in the world's fastest-growing digital market
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
      
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Powered by Advanced Web Technologies
          </Heading>
          <Flex justify="center" gap={8} flexWrap="wrap">
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Selenium" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="AWS" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png" alt="Docker" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Kubernetes" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Redis" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" alt="MongoDB" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="PostgreSQL" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="REST API" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="JavaScript" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" alt="HTML" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" alt="CSS" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Node.js" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" alt="TypeScript" boxSize="50px" />
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default AsiaPacificProxiesPage;