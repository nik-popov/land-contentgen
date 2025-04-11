import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/proxy-dashboard")({
  component: ProxyDashboard,
});

function ProxyDashboard() {
  const industryData = [
    { industry: "E-commerce", growth: 53, useCases: "Price tracking, stock monitoring, market insights" },
    { industry: "Travel", growth: 47, useCases: "Fare analysis, booking trends, localized pricing" },
    { industry: "Market Research", growth: 41, useCases: "Audience insights, competitor analysis, regional trends" },
    { industry: "Ad Verification", growth: 38, useCases: "Brand safety, fraud prevention, campaign tracking" },
    { industry: "SEO & Marketing", growth: 44, useCases: "Search ranking analysis, SERP monitoring, competitor research" },
    { industry: "Financial Services", growth: 35, useCases: "Market trends, price validation, automated trading" }
  ];

  const proxyFeatures = [
    { 
      title: "Worldwide IP Coverage", 
      description: "Connect to over 100 countries with precise city-level targeting across residential, datacenter, and mobile proxies", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Session Control", 
      description: "Set up and maintain consistent sessions with automated rotation and advanced fingerprinting techniques", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Usage Insights", 
      description: "Detailed metrics on request success, bandwidth usage, and cost-saving opportunities", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Smart Routing", 
      description: "Optimized request handling with retries, parallel processing, and intelligent caching", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    }
  ];

  return (
    <>
      {/* Proxy Dashboard Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Proxy Control Center
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Oversee your proxy network through a streamlined, user-friendly platform. 
            Track performance, reduce costs, and scale your data collection with ease.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Unified Proxy Oversight</Heading>
              <Text>Control all proxy types—residential, datacenter, ISP, and mobile—from one platform. Adjust rotation, targeting, and session settings seamlessly.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Live Performance Tracking</Heading>
              <Text>Monitor success rates, latency, and data usage in real time. Spot and resolve issues quickly with detailed analytics and logs.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Cost Efficiency Tools</Heading>
              <Text>Analyze proxy usage across projects and teams. Set limits, optimize traffic, and cut bandwidth expenses with smart routing.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Why Our Proxy Control Center Excels
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">68%</StatNumber>
                <StatLabel>Time Savings</StatLabel>
              </Stat>
              <Text>
                Businesses using our platform cut proxy management time by up to 68% compared to juggling multiple providers or custom solutions.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">42%</StatNumber>
                <StatLabel>Cost Reduction</StatLabel>
              </Stat>
              <Text>
                Our smart routing and optimization tools help users lower proxy network costs by an average of 42%.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">5x</StatNumber>
                <StatLabel>Quicker Fixes</StatLabel>
              </Stat>
              <Text>
                Resolve issues up to five times faster with robust monitoring, detailed logs, and instant alerts for your proxy setup.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Tailored Proxy Solutions by Sector
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Productivity Boost
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
      
      {/* Proxy Features Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Robust Proxy Management Tools
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our platform equips you with powerful tools to oversee even the most intricate proxy networks
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Usage Insights" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Usage Insights</Heading>
                <Text color="gray.600">Monitor proxy activity across teams and projects with in-depth data on requests, bandwidth, and success metrics</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Global Network" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Global Network</Heading>
                <Text color="gray.600">Tap into residential, datacenter, and mobile IPs in over 195 countries with precise city and ISP targeting</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Alerts & Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Alerts & Monitoring</Heading>
                <Text color="gray.600">Configure custom notifications for performance, usage, or errors, integrating with your existing alert systems</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">API Integration</Heading>
                <Text color="gray.600">Automate proxy management with our robust REST API, enabling seamless integration into your workflows</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Control Center Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Proxy Configuration Tools</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Protocol Flexibility</Text> - Manage HTTP, HTTPS, SOCKS4, and SOCKS5 proxies from one platform</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Session Management</Text> - Set session lengths, rotation schedules, or sticky session rules</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Precision</Text> - Choose proxies by country, city, region, or ISP with location validation</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">IP Filtering</Text> - Maintain blocklists to avoid flagged or problematic IPs</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Limits</Text> - Assign usage caps by team, project, or user with automated alerts</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Performance & Security Tools</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Real-Time Metrics</Text> - Track latency, success rates, and bandwidth by proxy in real time</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Failover Support</Text> - Set up backup proxy pools that activate if performance drops</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Access Controls</Text> - Manage credentials securely with role-based permissions</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Proxy Monitoring</Text> - Continuous checks on proxy health with auto-replacement</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Activity Logs</Text> - Detailed records of proxy usage for compliance and auditing</Text>
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
            Success with Proxy Management
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Pricing Platform Boosts Efficiency</Heading>
              <Text mb={4}>
                A top pricing analytics firm adopted our platform to manage over 10,000 proxies. They slashed operational costs by 37% and improved data retrieval success from 82% to 96%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "This platform gave us clear insights into our proxy network’s performance. We can now spot issues instantly, optimize usage, and scale operations effortlessly."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Research Firm Enhances Global Reach</Heading>
              <Text mb={4}>
                A worldwide research company used our platform to orchestrate data collection across 65 markets. They applied location targeting for precise data and cut management overhead by 58% while expanding their scope.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Proxy management used to demand constant effort. With this platform, we’ve automated most tasks and can focus on analyzing data rather than troubleshooting."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="teal.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Streamline Your Proxy Network?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start using our platform to simplify proxy management, enhance performance tracking, and optimize costs
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
              Book a Demo
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
              Reach Sales
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