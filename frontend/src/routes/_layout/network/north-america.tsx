import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/north-america")({
  component: NorthAmericaProxiesPage,
});

function NorthAmericaProxiesPage() {
  const regionData = [
    { region: "United States", cities: 112, states: 50, useCases: "Consumer insights, SEO auditing, ad localization" },
    { region: "Canada", cities: 42, states: 13, useCases: "Regional testing, regulatory checks, localized content" },
    { region: "Mexico", cities: 28, states: 32, useCases: "Market exploration, competitor tracking, price analysis" }
  ];

  const locationFeatures = [
    { 
      title: "Extensive Reach", 
      description: "Tap into residential proxies spanning all 50 US states, 13 Canadian provinces/territories, and 32 Mexican states", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Pinpoint City Targeting", 
      description: "Zero in on proxies in 182 key North American cities with precise postal code accuracy", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Provider Customization", 
      description: "Select from specific ISPs or mobile networks like AT&T, Verizon, Rogers, Telcel, and others", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Geo-Verification", 
      description: "Proxy locations validated through multiple channels for reliable geographic placement", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* North America Proxies Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            North American Proxy Network
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Leverage the widest array of North American location-specific proxies. Direct your traffic through any US state, Canadian province, or Mexican region with unmatched precision.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Broad Regional Access</Heading>
              <Text>Use residential, datacenter, and mobile IPs across the US, Canada, and Mexico, targeting specific states, provinces, cities, or zip codes with ease.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">True Local Perspective</Heading>
              <Text>View websites and applications as North American users do, using authentic residential IPs that mimic real user profiles, browser traits, and network conditions.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Flexible Location Options</Heading>
              <Text>Pick locations by country, state/province, city, ISP, network type, or speed, and store tailored location setups for recurring tasks.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of North American Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">100%</StatNumber>
                <StatLabel>Market Penetration</StatLabel>
              </Stat>
              <Text>
                Reach every part of North America with our network spanning all US states, Canadian provinces/territories, and Mexican regions.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">91%</StatNumber>
                <StatLabel>Localization Precision Boost</StatLabel>
              </Stat>
              <Text>
                Businesses see up to 91% better accuracy in regional testing with our proxies compared to virtual setups or VPNs.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">2.3M+</StatNumber>
                <StatLabel>Home-Based IPs</StatLabel>
              </Stat>
              <Text>
                Select from over 2.3 million residential IPs across North America for genuine browsing and lower detection risks.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Region Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Proxy Coverage Across North America
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {regionData.map((region, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{region.region}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{region.states}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Regions</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{region.cities}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Urban Areas</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Applications:</Text> {region.useCases}
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
            Precision North American Proxy Features
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our North American proxy system offers exact location targeting with top-notch reliability
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Live Geo-Checks" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Live Geo-Checks</Heading>
                <Text color="gray.600">All proxy locations are actively confirmed through diverse sources for dependable geographic accuracy</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Varied IP Options" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Varied IP Options</Heading>
                <Text color="gray.600">Choose residential, datacenter, or mobile IPs across North America, specifying connection types for your needs</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Stable Locations" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Stable Locations</Heading>
                <Text color="gray.600">Keep consistent North American locations across sessions with fixed IP options</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Control" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">North American API Control</Heading>
                <Text color="gray.600">Automate location selection across North America with our robust API for seamless geo-targeting</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            North American Proxy System Tools
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Location Precision</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Nationwide Access</Text> - Reach proxies in the US, Canada, and Mexico with full coverage</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Regional Focus</Text> - Target all 50 US states, 13 Canadian provinces/territories, and 32 Mexican states</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Urban Accuracy</Text> - Select specific cities with ample proxy options across North America</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Network Choices</Text> - Pick proxies from key North American ISPs or mobile carriers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Area Cycling</Text> - Auto-switch proxies within designated North American zones</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Management & Connectivity</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Sets</Text> - Build and save North American location groups for repeated use</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">API Management</Text> - Control all North American locations via our powerful API</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Tools</Text> - Switch North American locations quickly with browser add-ons</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Assurance</Text> - Confirm North American proxy accuracy with built-in tools</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Performance Tracking</Text> - Monitor proxy success by location with detailed North American metrics</Text>
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
            North American Proxy Wins
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Retailer Boosts Border Sales by 32%</Heading>
              <Text mb={4}>
                A large retail chain tapped our North American proxies to test their site across all US states, Canadian provinces, and Mexican regions. Spotting key pricing and promo gaps, they crafted a cohesive cross-border plan, lifting sales by 32% near borders.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Using real residential IPs across North America gave us deep insights into regional user experiences. Targeting specific cities and zip codes was critical for refining our border strategy."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Streamer Enhances Viewing by 19%</Heading>
              <Text mb={4}>
                A top streaming service used our proxies to check content and recommendations across North American regions. They found major algorithm flaws by location, improving suggestions and boosting watch time by 19%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The fine-tuned location targeting let us see our platform as regional users do. We caught algorithm quirks that standard testing missed, enhancing viewer satisfaction."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* North America Map Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            North American Proxy Reach
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our vast network blankets North America, with heavy coverage in major markets
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">United States</Text>
                <Text>50 States</Text>
                <Text>112 Cities</Text>
                <Text>All Key ISPs</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Canada</Text>
                <Text>13 Provinces/Territories</Text>
                <Text>42 Cities</Text>
                <Text>All Key ISPs</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Mexico</Text>
                <Text>32 States</Text>
                <Text>28 Cities</Text>
                <Text>All Key ISPs</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Reach Every North American Spot
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin using our North American proxy network now to browse the web from any point in the US, Canada, or Mexico
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
              Schedule Demo
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
              Try Free Today
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default NorthAmericaProxiesPage;