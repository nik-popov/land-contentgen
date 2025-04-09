import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/proxy-dashboard")({
  component: ProxyDashboard,
});

function ProxyDashboard() {
  const industryData = [
    { industry: "E-commerce", growth: 53, useCases: "Competitive pricing, inventory monitoring, market analysis" },
    { industry: "Travel", growth: 47, useCases: "Fare comparison, booking data, regional pricing differences" },
    { industry: "Market Research", growth: 41, useCases: "Consumer insights, competitive intelligence, regional data" },
    { industry: "Ad Verification", growth: 38, useCases: "Brand protection, fraud detection, campaign monitoring" },
    { industry: "SEO & Marketing", growth: 44, useCases: "Rank tracking, SERP analysis, competitor monitoring" },
    { industry: "Financial Services", growth: 35, useCases: "Market data, price verification, automated trading" }
  ];

  const proxyFeatures = [
    { 
      title: "Global IP Network", 
      description: "Access to over 100+ countries with city-level targeting capabilities across residential, datacenter, and mobile proxies", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Session Management", 
      description: "Create and maintain persistent sessions with automatic rotation and sophisticated fingerprinting", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Traffic Analytics", 
      description: "Comprehensive usage statistics with request success rates, bandwidth consumption, and cost optimization", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Request Optimization", 
      description: "Intelligent routing with automatic retries, concurrent requests, and caching mechanisms", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    }
  ];

  return (
    <>
      {/* Proxy Dashboard Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Proxy Dashboard
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Manage your entire proxy infrastructure through a single intuitive interface.
            Monitor performance, optimize costs, and scale your web data collection effortlessly.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Centralized Proxy Management</Heading>
              <Text>Manage all your proxy types from a single dashboard - residential, datacenter, ISP, and mobile IPs. Control rotation, location targeting, and session settings from one interface.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Real-time Performance Metrics</Heading>
              <Text>Monitor success rates, response times, and bandwidth usage in real-time. Identify and troubleshoot issues instantly with comprehensive logging and analytics.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Cost Optimization Tools</Heading>
              <Text>Track proxy utilization across teams and projects. Implement usage quotas, optimize traffic patterns, and minimize bandwidth costs with intelligent routing algorithms.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Proxy Dashboard
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">68%</StatNumber>
                <StatLabel>Management Time Reduction</StatLabel>
              </Stat>
              <Text>
                Organizations using our Proxy Dashboard report reducing their proxy management 
                time by up to 68% compared to using multiple providers or in-house solutions.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">42%</StatNumber>
                <StatLabel>Cost Savings</StatLabel>
              </Stat>
              <Text>
                Our intelligent routing and bandwidth optimization features help clients
                reduce their proxy infrastructure costs by an average of 42%.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">5x</StatNumber>
                <StatLabel>Faster Troubleshooting</StatLabel>
              </Stat>
              <Text>
                Identify and resolve issues up to 5 times faster with comprehensive
                monitoring, detailed logs, and real-time alerts for your proxy infrastructure.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Specific Proxy Solutions
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Efficiency Improvement
                  </StatHelpText>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {industry.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Proxy Features Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Advanced Proxy Management Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our Proxy Dashboard provides comprehensive tools to manage even the most complex proxy infrastructures
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Grafana" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Usage Analytics</Heading>
                <Text color="gray.600">Track proxy usage across teams and projects with detailed metrics on requests, bandwidth, and success rates</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Global Proxy Network" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Global Proxy Network</Heading>
                <Text color="gray.600">Access residential, datacenter, and mobile IPs across 195+ countries with city and ISP-level targeting capabilities</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Monitoring & Alerts" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Monitoring & Alerts</Heading>
                <Text color="gray.600">Set up custom alerts for performance thresholds, usage limits, and error rates with integrations to your notification systems</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Access" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">API Access</Heading>
                <Text color="gray.600">Programmatically manage your proxy infrastructure with our comprehensive REST API for automation and integration</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Proxy Dashboard Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Proxy Management Features</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-protocol Support</Text> - HTTP, HTTPS, SOCKS4, and SOCKS5 proxies all managed from a single interface</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Rotation Controls</Text> - Configure session duration, automatic rotation schedules, and sticky session policies</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Geographic Targeting</Text> - Select proxies by country, region, city, or ISP with verification of proxy locations</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">IP Exclusion Lists</Text> - Create and manage IP exclusion lists to avoid detection or blocked proxies</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Bandwidth Controls</Text> - Set usage limits by team, project, or user with automatic notifications</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Performance & Security</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Performance Analytics</Text> - Real-time metrics on latency, success rates, and bandwidth usage by proxy</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automatic Fallback</Text> - Configure backup proxy pools that activate automatically if performance degrades</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Authentication Management</Text> - Secure credential management with role-based access controls</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Proxy Health Checks</Text> - Continuous monitoring of proxy availability with automatic replacement</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Usage Auditing</Text> - Comprehensive logs of all proxy usage for compliance and security review</Text>
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
            Proxy Management Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">E-commerce Price Intelligence Platform Scales Operations</Heading>
              <Text mb={4}>
                A leading price intelligence provider implemented our Proxy Dashboard to manage their growing 
                infrastructure of over 10,000 proxies. They reduced proxy-related operational costs by 37% 
                while improving data collection success rates from 82% to 96%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The Proxy Dashboard gave us unprecedented visibility into our proxy infrastructure performance. 
                We can now instantly identify issues, optimize our proxy usage, and scale our operations more effectively."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Market Research Firm Improves Global Data Collection</Heading>
              <Text mb={4}>
                A global market research company utilized our Proxy Dashboard to coordinate data collection 
                across 65 countries. They implemented geographic targeting to gather region-specific data and 
                reduced their proxy management overhead by 58% while expanding coverage.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Managing proxies used to require multiple team members and constant troubleshooting. With the 
                Proxy Dashboard, we've automated most of our management tasks and can focus on analyzing the data instead."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
    
      
      {/* Call to Action */}
      <Box py={16} bg="teal.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Optimize Your Proxy Infrastructure?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our Proxy Dashboard today and take control of your proxy management,
            performance monitoring, and cost optimization
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
              Request Dashboard Demo
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "teal.600" }}
              as="a"
              href="/contact-sales"
              >
               Contact Sales
            </Button>
          </Flex>
        </Box>
      </Box>
      
    
      {/* Footer */}
      <Footer />
    </>
  );
}

export default ProxyDashboard;