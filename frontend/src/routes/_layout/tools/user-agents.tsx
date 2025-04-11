import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/user-agents")({
  component: UserAgentsService,
});

function UserAgentsService() {
  const industryData = [
    { industry: "E-commerce", growth: 72, useCases: "Testing browser compatibility, validating device-specific layouts, checking geo-targeted displays" },
    { industry: "Market Intelligence", growth: 68, useCases: "Analyzing browser signatures, researching platform experiences, testing across channels" },
    { industry: "Digital Marketing", growth: 63, useCases: "Verifying ads on different browsers, testing campaigns by device, ensuring platform alignment" },
    { industry: "Brand Protection", growth: 58, useCases: "Monitoring brand consistency across browsers, validating mobile displays, auditing device experiences" },
    { industry: "Real Estate", growth: 54, useCases: "Confirming listings across platforms, comparing mobile vs. desktop views, validating browser displays" },
    { industry: "Financial Research", growth: 65, useCases: "Testing trading platforms on multiple browsers, ensuring device compliance, verifying data uniformity" }
  ];

  const userAgentFeatures = [
    { 
      title: "Tailored User Agent Creation", 
      description: "Craft authentic user-agent strings for any browser, device, or OS combo, with precise version details", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Fingerprint Coordination", 
      description: "Manage full browser fingerprints with synced user agents and uniform device identifiers", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Browser Usage Insights", 
      description: "Live tracking of user agent performance, detection trends, and browser compatibility stats", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Browser Version Monitoring", 
      description: "Up-to-date catalog of browser versions and user agent trends, including market share data", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    }
  ];

  return (
    <>
      {/* User Agents Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            User Agent Control Services
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Enhance multi-browser and multi-device web data gathering with our cutting-edge user agent 
            control system. Avoid fingerprint detection, emulate any browser setup, and ensure steady 
            device profiles for all web activities.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Smart User Agent Switching</Heading>
              <Text>Cycle through user agents using advanced patterns, ensuring accurate browser versions and OS details. Block fingerprinting with reliable device consistency across interactions.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Robust Browser Emulation</Heading>
              <Text>Top-tier fingerprint emulation with matching JavaScript environments. Our tools deliver uniform user agent strings, navigator properties, and browser behavior traits.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Device Identity Handling</Heading>
              <Text>Set up and maintain stable device identities with consistent fingerprints. Manage screen sizes, plugins, fonts, and WebGL signatures effortlessly.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Why Our User Agent System Stands Out
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">99.8%</StatNumber>
                <StatLabel>Stealth Success</StatLabel>
              </Stat>
              <Text>
                Our smart user agent system ensures top-notch fingerprint uniformity with precise entropy tuning and calibration.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">95%</StatNumber>
                <StatLabel>Fingerprint Evasion</StatLabel>
              </Stat>
              <Text>
                Users see up to 95% less fingerprint detection compared to simple user agent swaps, thanks to our platform.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">76%</StatNumber>
                <StatLabel>Productivity Boost</StatLabel>
              </Stat>
              <Text>
                Our fingerprint and user agent tools improve multi-device data collection efficiency by an average of 76%.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Tailored User Agent Applications
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Data Precision
                  </StatHelpText>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Applications:</Text> {industry.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* User Agent Features Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Cutting-Edge User Agent Tools
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our advanced platform offers unmatched tools for browser emulation and fingerprint control
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Usage Insights" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Usage Insights</Heading>
                <Text color="gray.600">Detailed dashboards showing user agent success, fingerprint stability, and detection stats across your web collection setup</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Version Catalog" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Version Catalog</Heading>
                <Text color="gray.600">Over 50,000 meticulously crafted browser fingerprints for desktops, mobiles, and tablets, updated regularly with market trends</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Fingerprint Tuning" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Fingerprint Tuning</Heading>
                <Text color="gray.600">AI-driven fingerprint emulation with automatic entropy adjustments and consistency checks to enhance stealth</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Access" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">API Access</Heading>
                <Text color="gray.600">REST API with SDKs in Python, Node.js, Java, and Go for easy integration into your existing tools</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            User Agent System Specs
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Browser & Agent Features</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom Agent Building</Text> - Generate device-tailored user agents with accurate versioning</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Fingerprint Syncing</Text> - Match navigator properties to user agents in JavaScript contexts</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Device Mix</Text> - Mimic real-world device distributions based on market data</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Identity Control</Text> - Maintain steady browser identities across sessions</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Performance Tracking</Text> - Monitor agent success and detection rates with detailed stats</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Security & Efficiency</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Stealth Tech</Text> - Normalize canvas, WebGL, and audio fingerprints for evasion</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Auto-Validation</Text> - Ongoing checks against fingerprint detection systems</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Device Matching</Text> - Smart selection of browsers and devices for target sites</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Entropy Tuning</Text> - Adjust fingerprint entropy for lifelike device profiles</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Premium Support</Text> - SLA-backed assistance with dedicated managers and 24/7 oversight</Text>
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
            User Agent Success Tales
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">E-commerce Boosts Browser Testing by 280%</Heading>
              <Text mb={4}>
                A leading online retailer adopted our system to check listings across 42 browser and device setups. Testing speed rose by 280%, fingerprint detection dropped by 94%, and costs fell by 53%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Your platform revolutionized our browser testing. We now cover any device or browser combo efficiently without a huge lab, and detection issues are nearly gone."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Finance Firm Ensures Device Compliance</Heading>
              <Text mb={4}>
                A global finance company used our service to confirm compliance across 67 browser-device pairs. Coverage grew by 430%, with 99.7% evasion success, spotting 1,900+ device-specific issues.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Since using your platform, we’ve expanded compliance testing massively while dodging fingerprint detection. It’s cut device-related compliance problems by 58%."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners for User Agents */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Tool Integrations
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our user agent system blends effortlessly with top development and testing frameworks
          </Text>
          
          <Flex justify="center" flexWrap="wrap" gap={10} mb={12} align="center">
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/cypress.png" alt="Cypress" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/puppeteer.png" alt="Puppeteer" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Selenium" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/playwright.png" alt="Playwright" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/chai.png" alt="Chai" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
          </Flex>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="teal.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Master Browser Stealth?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin gathering reliable web data across all devices and browsers with our top-tier user agent control system. 
            Book a session with our experts to tailor your solution.
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="teal.500"
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
              _hover={{ bg: "teal.600" }}
              as="a"
              href="https://buy.stripe.com/4gwg1C2by9Cs2Ry6op"
            >
              Try Free
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default UserAgentsService;