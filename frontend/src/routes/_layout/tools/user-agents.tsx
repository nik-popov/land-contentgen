import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/user-agents")({
  component: UserAgentsService,
});

function UserAgentsService() {
  const industryData = [
    { industry: "E-commerce", growth: 72, useCases: "Browser compatibility testing, device-specific content validation, geo-targeted experience testing" },
    { industry: "Market Intelligence", growth: 68, useCases: "Browser fingerprint analysis, platform-specific user experience research, multi-channel testing" },
    { industry: "Digital Marketing", growth: 63, useCases: "Ad verification across browsers, device-specific campaign testing, platform compatibility validation" },
    { industry: "Brand Protection", growth: 58, useCases: "Cross-browser brand experience monitoring, device-specific content validation, mobile experience auditing" },
    { industry: "Real Estate", growth: 54, useCases: "Cross-platform listing verification, mobile vs desktop experience testing, browser-specific listing validation" },
    { industry: "Financial Research", growth: 65, useCases: "Multi-browser trading platform testing, device-specific compliance validation, cross-platform data consistency" }
  ];

  const userAgentFeatures = [
    { 
      title: "Custom User Agent Generation", 
      description: "Generate realistic user-agent strings for any browser, device, and OS combination with version-specific parameters", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Device Fingerprint Management", 
      description: "Complete browser fingerprint management with user-agent synchronization and consistent device signatures", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Browser Profile Analytics", 
      description: "Real-time monitoring of user agent performance, detection rates, and browser compatibility metrics", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Browser Evolution Tracking", 
      description: "Continually updated database of browser versions and user agent patterns with market share analytics", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    }
  ];

  return (
    <>
      {/* User Agents Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            User Agent Management Services
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Optimize cross-browser and multi-device web data collection with our advanced user agent 
            management platform. Prevent fingerprinting detection, simulate any browser environment, 
            and maintain consistent device profiles across all web interactions.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Intelligent User Agent Rotation</Heading>
              <Text>Automatically rotate user agents based on sophisticated patterns with browser version accuracy and OS-specific details. Prevent browser fingerprinting with consistent device signatures across sessions.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Enterprise-Grade Browser Simulation</Heading>
              <Text>Industry-leading browser fingerprint simulation with JavaScript runtime environment matching. Our technology ensures consistent user agent strings, navigator objects, and browser-specific behavior patterns.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Advanced Device Profile Management</Heading>
              <Text>Create and manage persistent device profiles with consistent browser fingerprints. Our profile management capabilities include screen resolution, plugin details, font fingerprinting, and WebGL rendering signatures.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Our User Agent Management Platform
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">99.8%</StatNumber>
                <StatLabel>Detection Avoidance</StatLabel>
              </Stat>
              <Text>
                Our intelligent user agent management delivers industry-leading browser fingerprint 
                consistency with advanced entropy measurement and calibration.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">95%</StatNumber>
                <StatLabel>Reduced Fingerprinting</StatLabel>
              </Stat>
              <Text>
                Organizations using our user agent management platform experience up to 95% reduction 
                in browser fingerprinting detection compared to basic user agent switching.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">76%</StatNumber>
                <StatLabel>Efficiency Increase</StatLabel>
              </Stat>
              <Text>
                Our comprehensive browser fingerprint management and user agent technologies help 
                enterprises increase multi-platform data collection efficiency by an average of 76%.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Specific User Agent Solutions
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Collection Accuracy
                  </StatHelpText>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Use Cases:</Text> {industry.useCases}
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
            Advanced User Agent Management Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our enterprise-grade user agent platform provides unmatched capabilities for browser simulation and device fingerprint management
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Advanced Analytics" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Browser Profile Analytics</Heading>
                <Text color="gray.600">Comprehensive dashboards tracking user agent effectiveness, browser fingerprint consistency, and detection rates across your entire web data collection infrastructure</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Global Network" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Browser Version Database</Heading>
                <Text color="gray.600">Access to over 50,000 accurately modeled browser fingerprints across desktop, mobile, and tablet devices with regular updates reflecting market distribution</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Advanced Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Browser Fingerprint Analysis</Heading>
                <Text color="gray.600">AI-powered browser fingerprint simulation with automated entropy calibration and fingerprint consistency validation to continuously improve detection avoidance</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Developer-Friendly API</Heading>
                <Text color="gray.600">RESTful API with SDKs for Python, Node.js, Java, and Go to seamlessly integrate sophisticated user agent management into your existing applications</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            User Agent Technical Specifications
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">User Agent & Browser Features</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Dynamic User Agent Generation</Text> - Create device-specific user agent strings with accurate browser version patterns</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Fingerprint Consistency</Text> - Ensure navigator object properties match user agent across JavaScript environments</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Device Distribution</Text> - Configure realistic device distribution patterns according to market share</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Profile Management</Text> - Create persistent browser profiles with consistent fingerprints across sessions</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Browser Analytics</Text> - Performance metrics tracking user agent effectiveness and detection rates</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Enterprise Security & Performance</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Anti-Fingerprinting Technology</Text> - Advanced canvas, WebGL, and audio fingerprint normalization</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated Browser Validation</Text> - Continuous validation against fingerprinting detection algorithms</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Smart Device Selection</Text> - Intelligent browser and device selection based on target website requirements</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Entropy Management</Text> - Browser fingerprint entropy calibration for realistic device signatures</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Enterprise Support</Text> - SLA-backed technical support with dedicated account management and 24/7 monitoring</Text>
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
            User Agent Management Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">E-commerce Platform Improves Cross-Browser Testing by 280%</Heading>
              <Text mb={4}>
                A major e-commerce platform implemented our user agent management system to verify 
                product listings across 42 browser/device combinations. Their testing efficiency increased 
                by 280% while reducing fingerprinting detection by 94% and cutting testing costs by 53%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Your user agent management platform has transformed our cross-browser validation process. 
                We can now efficiently test across virtually any device/browser combination without 
                maintaining a massive device lab, and our detection rates have plummeted."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Financial Services Firm Achieves Device-Specific Compliance</Heading>
              <Text mb={4}>
                A global financial services firm utilized our user agent management services to validate 
                regulatory compliance across 67 browser/device combinations. Their testing coverage expanded 
                by 430% while maintaining a 99.7% fingerprinting avoidance rate and identifying 1,900+ 
                previously undetected device-specific compliance issues.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "After implementing your user agent management platform, we've dramatically expanded our 
                compliance testing while virtually eliminating the browser fingerprinting detection we 
                previously encountered. Your solution has directly contributed to a 58% reduction in 
                device-specific compliance exceptions."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
  {/* Integration Partners for User Agents */}
<Box py={16} bg="blue.50">
  <Box maxW="1200px" mx="auto" px={4} textAlign="center">
    <Heading as="h2" size="xl" mb={8} fontWeight="medium">
      Technology Integrations
    </Heading>
    <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
      Our user agent management platform integrates seamlessly with all major development frameworks and testing environments
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
            Ready to Eliminate Browser Fingerprinting?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start collecting consistent web data across all browsers and devices with our advanced user agent management platform.
            Schedule a consultation with our solution architects to design your custom implementation.
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
              Request Demo
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "teal.600" }}
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

export default UserAgentsService;