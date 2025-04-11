import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/north-america")({
  component: NorthAmericaProxiesPage,
});

function NorthAmericaProxiesPage() {
  const regionData = [
    { region: "United States", cities: 112, states: 50, useCases: "Market research, SEO verification, ad targeting" },
    { region: "Canada", cities: 42, states: 13, useCases: "Localization testing, compliance verification, regional content" },
    { region: "Mexico", cities: 28, states: 32, useCases: "Market entry research, competitive analysis, price monitoring" }
  ];

  const locationFeatures = [
    { 
      title: "Comprehensive Coverage", 
      description: "Access to residential proxies across all 50 US states, 13 Canadian provinces/territories, and 32 Mexican states", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "City-Level Precision", 
      description: "Target proxies in 182 major cities across North America with specific postal code targeting capabilities", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "ISP Selection", 
      description: "Choose specific internet service providers or mobile carriers like AT&T, Verizon, Rogers, Telcel, and more", 
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
      {/* North America Proxies Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            North America Proxies
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Access the most comprehensive network of North American geo-targeted proxies.
            Route your connections through any US state, Canadian province, or Mexican region with pinpoint accuracy.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Regional Coverage</Heading>
              <Text>Connect through residential, datacenter, and mobile IPs from the United States, Canada, and Mexico. Target specific states, provinces, cities, or postal codes for precise geo-targeting.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Authentic Local Experience</Heading>
              <Text>Experience websites and apps exactly as North American users do with genuine residential IPs that reflect real user attributes, browser fingerprints, and network characteristics.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Customizable Selection</Heading>
              <Text>Choose locations based on specific criteria including country, state/province, city, ISP, network type, and connection speed. Save custom location profiles for frequent use cases.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of North American Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">100%</StatNumber>
                <StatLabel>Regional Market Coverage</StatLabel>
              </Stat>
              <Text>
                Access every corner of the North American market with our comprehensive network that covers all 
                US states, Canadian provinces/territories, and Mexican regions.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">91%</StatNumber>
                <StatLabel>Testing Accuracy Increase</StatLabel>
              </Stat>
              <Text>
                Organizations report up to 91% more accurate localization testing when using
                our North American proxies compared to simulated environments or VPNs.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">2.3M+</StatNumber>
                <StatLabel>Residential IPs</StatLabel>
              </Stat>
              <Text>
                Choose from over 2.3 million residential IP addresses across North America, 
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
            North American Proxy Coverage
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {regionData.map((region, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{region.region}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{region.states}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">States/Provinces</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{region.cities}</StatNumber>
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
            Advanced North American Location Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our North American proxy network provides precise geographic targeting with industry-leading accuracy
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
                <Text color="gray.600">Access residential, datacenter, and mobile IPs across North America, with the ability to specify connection type for your use case</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Location Persistence" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Location Persistence</Heading>
                <Text color="gray.600">Maintain consistent geo-locations across sessions with sticky IP options that keep you in the same North American region</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Location API" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">North American Location API</Heading>
                <Text color="gray.600">Programmatically select locations with our comprehensive API for automated geo-targeting across all North American regions</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            North American Proxy Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Geographic Targeting</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Country Selection</Text> - Access proxies from the United States, Canada, and Mexico with comprehensive coverage</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">State/Province Targeting</Text> - Select from all 50 US states, 13 Canadian provinces/territories, and 32 Mexican states</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">City Precision</Text> - Target specific cities with multiple proxies available in each location across North America</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">ISP Selection</Text> - Choose proxies from specific North American internet service providers or mobile carriers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Region Rotation</Text> - Automatically rotate through proxies within specific North American regions</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Control & Integration</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Groups</Text> - Create and save custom North American location groups for frequent testing scenarios</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location API</Text> - Access all North American location features programmatically through our comprehensive API</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Integration</Text> - Use browser extensions to quickly switch between North American locations in your testing</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Validation</Text> - Verify the accuracy of North American proxy locations with our built-in testing tools</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Analytics</Text> - Track proxy performance by location with detailed success metrics across North America</Text>
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
            North American Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Retail Chain Optimizes Cross-Border Strategy</Heading>
              <Text mb={4}>
                A major retail chain used our North American proxies to test their website across all US states, 
                Canadian provinces, and Mexican regions. They identified critical pricing and promotional 
                differences, leading to a unified cross-border strategy that increased sales by 32% in border regions.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "By accessing authentic residential IPs across North America, we gained unprecedented insights into 
                how our customers experience our platform in different regions. The ability to test from specific 
                cities and postal codes was invaluable for our border strategy optimization."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Streaming Service Perfects Regional Content</Heading>
              <Text mb={4}>
                A leading streaming platform implemented our North American proxies to monitor content availability 
                and recommendations across different regions. They discovered significant discrepancies in their 
                algorithm performance based on location, resulting in improved recommendations and a 19% increase in viewing time.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The granular location targeting allowed us to test our platform exactly as users in different North American 
                regions experience it. We uncovered regional biases in our recommendation system that were invisible 
                in our standard testing environments."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* North America Map Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            North American Proxy Network
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our extensive network provides coverage across all regions of North America with dense concentration in key markets
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">United States</Text>
                <Text>50 States</Text>
                <Text>112 Cities</Text>
                <Text>All Major ISPs</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Canada</Text>
                <Text>13 Provinces/Territories</Text>
                <Text>42 Cities</Text>
                <Text>All Major ISPs</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Mexico</Text>
                <Text>32 States</Text>
                <Text>28 Cities</Text>
                <Text>All Major ISPs</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Access Any North American Location
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our North American proxy network today and experience
            the web from any location across the United States, Canada, and Mexico
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
      </Box>
       */}
      {/* Footer */}
      <Footer />
    </>
  );
}

export default NorthAmericaProxiesPage;