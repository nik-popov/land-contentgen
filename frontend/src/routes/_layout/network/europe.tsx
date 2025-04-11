import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/europe")({
  component: EuropeProxiesPage,
});

function EuropeProxiesPage() {
  const regionData = [
    { region: "Western Europe", countries: 9, cities: 78, useCases: "GDPR adherence, market studies, regional testing" },
    { region: "Northern Europe", countries: 10, cities: 42, useCases: "Online store enhancement, language testing, price checks" },
    { region: "Southern Europe", countries: 8, cities: 48, useCases: "Travel sector validation, local content serving, SEO confirmation" },
    { region: "Eastern Europe", countries: 11, cities: 47, useCases: "Market growth analysis, cost evaluation, regulatory checks" }
  ];

  const locationFeatures = [
    { 
      title: "Extensive Reach", 
      description: "Utilize residential proxies spanning all 38 European nations, with options for EU and non-EU targeting", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "City-Specific Accuracy", 
      description: "Pinpoint proxies in 215 key European cities, including precise postal code targeting", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Provider Choice", 
      description: "Select from prominent European ISPs such as Deutsche Telekom, Orange, Vodafone, and others", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Geo-Verification", 
      description: "All proxy locations are cross-checked via multiple sources for precise geographic placement", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Europe Proxies Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            European Proxy Network
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Tap into the broadest array of geo-targeted proxies in Europe. Direct your traffic through any EU country, region, or city with exceptional precision for GDPR compliance and localized market insights.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Europe-Wide Access</Heading>
              <Text>Route traffic via residential, datacenter, and mobile IPs across all 38 European nations. Focus on specific regions, cities, or postal codes for accurate geo-targeting throughout the EU and beyond.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">True European Perspective</Heading>
              <Text>View websites and apps as European users do, using authentic residential IPs that mirror real user profiles, browser signatures, and network traits from each country.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">EU Regulation Testing</Heading>
              <Text>Assess GDPR compliance, cookie policies, and regulatory standards with country-specific IPs. Confirm geo-blocks and ensure adherence to European privacy rules.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of European Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">100%</StatNumber>
                <StatLabel>Europe-Wide Reach</StatLabel>
              </Stat>
              <Text>
                Cover every European market with our extensive network spanning all 38 countries, from Iceland to Cyprus and Portugal to Russia.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">94%</StatNumber>
                <StatLabel>GDPR Testing Precision</StatLabel>
              </Stat>
              <Text>
                Companies achieve up to 94% higher accuracy in regulatory testing with our European proxies compared to emulated setups or VPNs.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">1.8M+</StatNumber>
                <StatLabel>Residential IPs</StatLabel>
              </Stat>
              <Text>
                Select from over 1.8 million residential IPs across Europe for genuine local browsing and lower detection risks.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Region Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Proxy Coverage Across Europe
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
                  <Text as="span" fontWeight="bold">Key Uses:</Text> {region.useCases}
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
            Advanced Geo-Targeting in Europe
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our European proxy network offers exact location targeting with top-tier precision.
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Real-time Location Verification" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Live Geo-Validation</Heading>
                <Text color="gray.600">Proxy locations are constantly validated using various independent sources to guarantee geographic fidelity.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="EU/Non-EU Targeting" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">EU vs. Non-EU Focus</Heading>
                <Text color="gray.600">Target EU or non-EU nations specifically for compliance testing and regional market analysis.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Multilingual Testing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Language-Specific Testing</Heading>
                <Text color="gray.600">Validate language-specific content and localization using country-tailored proxies to activate correct language settings.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="European Location API" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Europe Geo-API</Heading>
                <Text color="gray.600">Automate location selection across Europe with our robust API for seamless geo-targeting.</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Features of Our European Proxy Platform
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Geo-Targeting Options</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Nationwide Access</Text> - Reach proxies in all 38 European countries with full coverage.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Region Selection</Text> - Choose from Western, Northern, Southern, and Eastern European zones.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Urban Targeting</Text> - Focus on specific European cities with multiple proxy options per location.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">ISP Options</Text> - Pick proxies from specific European ISPs or mobile networks.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">EU/Non-EU Sorting</Text> - Sort proxies by EU status for compliance validation.</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Management & Connectivity</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Geo-Groups</Text> - Save custom European location sets for recurring test scenarios.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Geo-API</Text> - Leverage all European location features via our detailed API.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Tools</Text> - Use extensions to easily switch European locations during testing.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">GDPR Toolkit</Text> - Dedicated tools for GDPR compliance testing across European regions.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Geo-Performance Insights</Text> - Monitor proxy success rates by location with comprehensive European metrics.</Text>
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
            Success Stories from Europe
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">E-commerce Firm Ensures GDPR Compliance</Heading>
              <Text mb={4}>
                A worldwide e-commerce business used our European proxies to verify GDPR compliance across all EU countries. They spotted critical differences in cookie consent setups and data practices, avoiding fines up to €20 million.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray. W600">
                "Using real European IPs showed our cookie consent systems failing in some nations due to local browser quirks. These insights enabled us to achieve full compliance across Europe."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Travel Platform Refines Language Support</Heading>
              <Text mb={4}>
                A major travel reservation service employed our European proxies to test their site in 22 languages. They identified key localization and currency display issues, boosting European bookings by 27% after corrections.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Testing from specific European nations let us see our site as locals do. We fixed language detection and currency errors that were losing us millions in bookings."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Europe Map Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Coverage of Our European Proxy Network
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our vast network ensures full coverage across Europe with strong presence in major markets.
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">Western Europe</Text>
                <Text>9 Countries</Text>
                <Text>78 Cities</Text>
                <Text>Key ISPs Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Northern Europe</Text>
                <Text>10 Countries</Text>
                <Text>42 Cities</Text>
                <Text>Key ISPs Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Southern Europe</Text>
                <Text>8 Countries</Text>
                <Text>48 Cities</Text>
                <Text>Key ISPs Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Eastern Europe</Text>
                <Text>11 Countries</Text>
                <Text>47 Cities</Text>
                <Text>Key ISPs Included</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Reach Any European Locale
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start using our European proxy network now and navigate the web from any of the 38 European countries.
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
              Try Free Now
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default EuropeProxiesPage;