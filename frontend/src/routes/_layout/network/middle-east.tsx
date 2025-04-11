import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/middle-east")({
  component: MiddleEastProxiesPage,
});

function MiddleEastProxiesPage() {
  const regionData = [
    { region: "Gulf Area", countries: 6, cities: 28, useCases: "Industry analysis, regional testing, legal adherence" },
    { region: "Eastern Mediterranean", countries: 5, cities: 22, useCases: "Material compliance, online store enhancement, access validation" },
    { region: "Maghreb", countries: 5, cities: 18, useCases: "App functionality testing, market growth studies, service reach" },
    { region: "Broader Zone", countries: 6, cities: 16, useCases: "New market exploration, localized content serving, cost benchmarking" }
  ];

  const locationFeatures = [
    { 
      title: "Extensive Reach", 
      description: "Utilize home-based proxies spanning all 22 nations of the Middle East and North Africa with targeted local provider options", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Urban-Specific Accuracy", 
      description: "Pinpoint proxies in 84 key Middle Eastern urban centers with detailed district-level targeting", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Provider Customization", 
      description: "Select from specific network providers such as Etisalat, STC, Ooredoo, Zain, Bezeq, and others", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Position Authentication", 
      description: "Each proxy’s location is cross-checked via multiple methods to guarantee precise geographic placement", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Middle East Proxies Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Middle Eastern Proxy Network
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Tap into the widest array of geo-specific proxies across the Middle East. 
            Direct your traffic through any nation, key city, or regional ISP with exceptional precision for industry studies and compliance checks.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Area Reach</Heading>
              <Text>Link via residential, server, and mobile IPs from 22 nations in the Middle East and North Africa. Focus on particular zones, urban hubs, or neighborhoods for exact location targeting.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Material Regulation Testing</Heading>
              <Text>Ensure material meets local laws and cultural norms using genuine regional IPs. Verify geographic barriers, access limits, and tailored regional adjustments.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Regional Interface Validation</Heading>
              <Text>Assess Arabic and other local language setups, right-to-left layouts, date styles, and culturally tuned content using nation-specific proxies across varied markets.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of Middle Eastern Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">100%</StatNumber>
                <StatLabel>Area Market Span</StatLabel>
              </Stat>
              <Text>
                Reach every Middle Eastern locale with our all-encompassing network, covering 
                22 nations from the UAE to Morocco, and Turkey to Oman.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">92%</StatNumber>
                <StatLabel>Regulation Check Precision</StatLabel>
              </Stat>
              <Text>
                Companies note up to 92% improved accuracy in regulation testing with our Middle Eastern proxies 
                compared to virtual setups.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">950K+</StatNumber>
                <StatLabel>Home-Based IPs</StatLabel>
              </Stat>
              <Text>
                Pick from over 950,000 home IP addresses throughout the Middle East and North Africa, 
                delivering true local browsing and lower detection odds.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Region Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Middle Eastern Proxy Reach
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {regionData.map((region, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{region.region}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{region.countries}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Nations</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{region.cities}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Urban Centers</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Typical Uses:</Text> {region.useCases}
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
            Enhanced Middle Eastern Location Tools
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our Middle Eastern proxy system offers exact location targeting with top-tier precision
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Live Position Confirmation" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Live Position Confirmation</Heading>
                <Text color="gray.600">All proxy locations are consistently validated using various independent checks for location reliability</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Legal Compliance Verification" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Legal Compliance Verification</Heading>
                <Text color="gray.600">Assess material alignment with area-specific laws and ensure proper execution of nation-based rules</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Arabic & RTL Compatibility" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Arabic & RTL Compatibility</Heading>
                <Text color="gray.600">Evaluate right-to-left layouts, Arabic text display, and area-specific language adaptations</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Middle Eastern Proxy API" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Middle Eastern Proxy API</Heading>
                <Text color="gray.600">Automate location selection across all Middle Eastern zones with our robust API for geo-specific targeting</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Middle Eastern Proxy System Capabilities
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Location Precision</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Nation Choice</Text> - Tap into proxies from all 22 Middle Eastern and North African nations</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Area Focus</Text> - Pick from distinct zones like Gulf Area, Eastern Mediterranean, Maghreb, and Broader Zone</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Urban Accuracy</Text> - Target key Middle Eastern urban areas with multiple proxy options per site</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Provider Options</Text> - Select proxies from specific Middle Eastern network or mobile providers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Connection Speed Sorting</Text> - Sort proxies by bandwidth to suit varied regional networks</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Management & Connectivity</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Sets</Text> - Build and store tailored Middle Eastern location sets for repeated testing needs</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Proxy API</Text> - Leverage all Middle Eastern location tools via our full-featured API</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Web Browser Sync</Text> - Switch Middle Eastern locations quickly using browser add-ons during tests</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Regulation Tools</Text> - Dedicated features for checking content against regional standards</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Performance Insights</Text> - Monitor proxy efficiency by location with in-depth success stats across the Middle East</Text>
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
            Middle Eastern Proxy Achievements
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Media Giant Secures Regional Compliance</Heading>
              <Text mb={4}>
                A prominent international media firm employed our Middle Eastern proxies to evaluate content access 
                across 8 regional nations. They pinpointed vital compliance gaps with restricted local content, 
                applying effective geo-restrictions to sidestep legal risks.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Using real Middle Eastern IPs showed our filtering wasn’t catching restricted items in several nations. 
                We adjusted our systems to meet each country’s unique standards seamlessly."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Online Retailer Enhances Arabic Interface</Heading>
              <Text mb={4}>
                A top online retailer used our Middle Eastern proxy system to test their Arabic user experience 
                across various nations. They uncovered major display errors and right-to-left layout issues, 
                boosting conversions by 45% after corrections.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Testing with authentic local IPs revealed critical flaws in our Arabic setup that differed by nation 
                and device. Revamping our RTL design led to a swift rise in user interaction across Middle Eastern markets."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Middle East Map Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Middle Eastern Proxy System Scope
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our wide-reaching network ensures full coverage across all Middle Eastern and North African zones
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">Gulf Area</Text>
                <Text>6 Nations</Text>
                <Text>28 Urban Centers</Text>
                <Text>Key Providers Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Eastern Mediterranean</Text>
                <Text>5 Nations</Text>
                <Text>22 Urban Centers</Text>
                <Text>Key Providers Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Maghreb</Text>
                <Text>5 Nations</Text>
                <Text>18 Urban Centers</Text>
                <Text>Key Providers Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Broader Zone</Text>
                <Text>6 Nations</Text>
                <Text>16 Urban Centers</Text>
                <Text>Key Providers Included</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Reach Every Middle Eastern Locale
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start using our Middle Eastern proxy system now to browse 
            the web from any spot across 22 nations in this vibrant and varied region
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
              Book a Demo
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
              Begin Free Trial
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Commented Section: Powered by Familiar Technologies */}
      {/* Left unchanged as it’s not rendered */}
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default MiddleEastProxiesPage;