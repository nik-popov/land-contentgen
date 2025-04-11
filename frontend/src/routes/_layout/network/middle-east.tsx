import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/middle-east")({
  component: MiddleEastProxiesPage,
});

function MiddleEastProxiesPage() {
  const regionData = [
    { region: "Gulf States", countries: 6, cities: 28, useCases: "Market research, localization testing, regulatory compliance" },
    { region: "Levant", countries: 5, cities: 22, useCases: "Content compliance, e-commerce optimization, accessibility verification" },
    { region: "North Africa", countries: 5, cities: 18, useCases: "Mobile app testing, market expansion research, service availability" },
    { region: "Extended Region", countries: 6, cities: 16, useCases: "Emerging market analysis, regional content delivery, price comparison" }
  ];

  const locationFeatures = [
    { 
      title: "Comprehensive Coverage", 
      description: "Access to residential proxies across all 22 Middle Eastern and North African countries with local ISP targeting", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "City-Level Precision", 
      description: "Target proxies in 84 major Middle Eastern cities with specific neighborhood targeting capabilities", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "ISP Selection", 
      description: "Choose specific internet service providers like Etisalat, STC, Ooredoo, Zain, Bezeq, and more", 
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
      {/* Middle East Proxies Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Middle East Proxies
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Access the most comprehensive network of Middle Eastern geo-targeted proxies.
            Route your connections through any country, major city, or local ISP with pinpoint accuracy for market research and content compliance testing.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Regional Coverage</Heading>
              <Text>Connect through residential, datacenter, and mobile IPs from 22 countries across the Middle East and North Africa. Target specific regions, cities, or neighborhoods for precise geo-targeting.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Content Compliance Testing</Heading>
              <Text>Verify content compliance with local regulations and cultural sensitivities using authentic local IPs. Test geo-restrictions, access controls, and region-specific content adaptations.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Localization Validation</Heading>
              <Text>Test Arabic and other regional language implementations, right-to-left interfaces, date formats, and culturally adapted content with country-specific proxies across diverse markets.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Middle Eastern Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">100%</StatNumber>
                <StatLabel>Regional Market Coverage</StatLabel>
              </Stat>
              <Text>
                Access every Middle Eastern market with our comprehensive network that covers 
                22 countries from the UAE to Morocco, and from Turkey to Oman.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">92%</StatNumber>
                <StatLabel>Content Compliance Accuracy</StatLabel>
              </Stat>
              <Text>
                Organizations report up to 92% more accurate content compliance testing when using
                our Middle Eastern proxies compared to simulated environments.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">950K+</StatNumber>
                <StatLabel>Residential IPs</StatLabel>
              </Stat>
              <Text>
                Choose from over 950,000 residential IP addresses across the Middle East and North Africa, 
                ensuring authentic local browsing experiences and reduced detection rates.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Region Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Middle Eastern Proxy Coverage
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
            Advanced Middle Eastern Location Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our Middle Eastern proxy network provides precise geographic targeting with industry-leading accuracy
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
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Regulatory Compliance Testing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Regulatory Compliance Testing</Heading>
                <Text color="gray.600">Test content compliance with regional regulations and ensure proper implementation of country-specific requirements</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Arabic & RTL Support" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Arabic & RTL Support</Heading>
                <Text color="gray.600">Test right-to-left interfaces, Arabic content rendering, and region-specific language implementations</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Middle Eastern Location API" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Middle Eastern Location API</Heading>
                <Text color="gray.600">Programmatically select locations with our comprehensive API for automated geo-targeting across all Middle Eastern regions</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Middle Eastern Proxy Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Geographic Targeting</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Country Selection</Text> - Access proxies from all 22 Middle Eastern and North African countries</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Regional Targeting</Text> - Select from specific regions including Gulf States, Levant, North Africa, and Extended Region</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">City Precision</Text> - Target specific Middle Eastern cities with multiple proxies available in each location</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">ISP Selection</Text> - Choose proxies from specific Middle Eastern internet service providers or mobile carriers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Bandwidth Profile Filtering</Text> - Filter proxies by connection speed to match diverse regional infrastructure</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Control & Integration</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Groups</Text> - Create and save custom Middle Eastern location groups for frequent testing scenarios</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location API</Text> - Access all Middle Eastern location features programmatically through our comprehensive API</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Integration</Text> - Use browser extensions to quickly switch between Middle Eastern locations in your testing</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Compliance Testing</Text> - Specialized tools for testing content compliance with regional regulations</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Analytics</Text> - Track proxy performance by location with detailed success metrics across the Middle East</Text>
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
            Middle Eastern Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Global Media Platform Ensures Content Compliance</Heading>
              <Text mb={4}>
                A major global media company used our Middle Eastern proxies to test content delivery across 
                8 countries in the region. They identified critical compliance issues with locally restricted 
                content and implemented proper geo-filtering, avoiding potential regulatory penalties.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Testing with authentic Middle Eastern IPs revealed that our content filtering systems were not 
                correctly identifying restricted materials in several countries. We were able to implement proper 
                compliance measures that met each country's specific requirements."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">E-commerce Platform Perfects Arabic Experience</Heading>
              <Text mb={4}>
                A leading e-commerce business implemented our Middle Eastern proxy network to test their 
                Arabic-language experience across multiple countries. They discovered significant rendering 
                issues and right-to-left interface problems, leading to a 45% increase in conversion rates 
                after implementing fixes.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The ability to test from authentic local IPs showed us that our Arabic implementation had 
                serious flaws that varied by country and device. We completely reworked our RTL interface 
                and saw immediate improvement in user engagement across all Middle Eastern markets."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Middle East Map Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Middle Eastern Proxy Network Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our extensive network provides comprehensive coverage across all Middle Eastern and North African regions
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Gulf States</Text>
                <Text>6 Countries</Text>
                <Text>28 Cities</Text>
                <Text>Major ISPs Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Levant</Text>
                <Text>5 Countries</Text>
                <Text>22 Cities</Text>
                <Text>Major ISPs Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">North Africa</Text>
                <Text>5 Countries</Text>
                <Text>18 Cities</Text>
                <Text>Major ISPs Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Extended Region</Text>
                <Text>6 Countries</Text>
                <Text>16 Cities</Text>
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
            Access Any Middle Eastern Location
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our Middle Eastern proxy network today and experience
            the web from any location across 22 countries in this diverse and dynamic region
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
              _hover={{ bg: "blue.700" }}
              as="a"
              href="https://cloud.roamingproxy.com/signup"
            >
              Start Free Trial
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Powered by Familiar Technologies
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
      </Box> */}
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default MiddleEastProxiesPage;