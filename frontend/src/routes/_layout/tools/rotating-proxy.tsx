import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/rotating-proxy")({
  component: RotatingProxyService,
});

function RotatingProxyService() {
  const industryData = [
    { industry: "E-commerce", growth: 68, useCases: "Competitive research, inventory tracking, price comparison, product research at scale" },
    { industry: "Market Intelligence", growth: 64, useCases: "Distributed data gathering, anti-blocking measures, multi-regional market analysis" },
    { industry: "Digital Marketing", growth: 59, useCases: "Ad verification, SERP monitoring, competitor analysis, cross-regional campaign testing" },
    { industry: "Brand Protection", growth: 56, useCases: "Counterfeit detection, unauthorized seller monitoring, brand impersonation detection" },
    { industry: "Real Estate", growth: 52, useCases: "Property listing monitoring, market pricing analysis, rental market intelligence" },
    { industry: "Financial Research", growth: 61, useCases: "Alternative data collection, price monitoring, cross-exchange analysis, regulatory compliance" }
  ];

  const proxyFeatures = [
    { 
      title: "Intelligent IP Rotation", 
      description: "Automatic or customizable IP rotation patterns with session management and smart fail-over capabilities", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Multi-Source IP Pool", 
      description: "Access to residential, datacenter, and mobile IPs from over 195 countries with configurable location targeting", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Performance Analytics", 
      description: "Real-time monitoring of success rates, response times, and bandwidth usage with custom alerting capabilities", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Advanced Request Routing", 
      description: "Request distribution algorithms with machine learning optimization to maximize success rates and minimize detection", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    }
  ];

  return (
    <>
      {/* Rotating Proxy Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Rotating Proxy Services
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Enhance web data collection with our intelligent rotating proxy infrastructure. 
            Prevent IP blocking, distribute requests across multiple sources, and maintain continuous 
            access to web resources with automated IP rotation.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Automated IP Rotation</Heading>
              <Text>Intelligent IP rotation with configurable patterns based on time intervals, request counts, or response characteristics. Prevent blocking and detection with seamless IP switching across residential, datacenter, and mobile sources.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Enterprise-Grade Reliability</Heading>
              <Text>Mission-critical rotating proxy infrastructure built for scale and performance. Our distributed architecture ensures high availability with automatic failover, load balancing, and redundant routing paths across global datacenters.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Advanced Session Management</Heading>
              <Text>Create persistent sessions with sticky IPs or implement dynamic rotation patterns. Our session management capabilities include browser fingerprinting, cookie handling, and sophisticated request fingerprint management.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Our Rotating Proxy Services
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">99.95%</StatNumber>
                <StatLabel>Success Rate</StatLabel>
              </Stat>
              <Text>
                Our intelligent rotating proxy infrastructure delivers industry-leading 
                success rates with automated retry logic and smart IP selection algorithms.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">92%</StatNumber>
                <StatLabel>Reduced Blocking</StatLabel>
              </Stat>
              <Text>
                Organizations using our rotating proxy services experience up to 92% reduction 
                in IP blocking and CAPTCHAs compared to static IP solutions.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">71%</StatNumber>
                <StatLabel>Throughput Increase</StatLabel>
              </Stat>
              <Text>
                Our intelligent request distribution and automated rotation technologies help 
                enterprises increase data collection throughput by an average of 71%.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Specific Rotating Proxy Solutions
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Collection Efficiency
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
      
      {/* Proxy Features Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Advanced Rotating Proxy Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our enterprise-grade rotating proxy infrastructure provides unmatched capabilities for continuous web access and data collection
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Advanced Analytics" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Performance Monitoring</Heading>
                <Text color="gray.600">Comprehensive dashboards tracking rotation patterns, success rates, response times, and bandwidth utilization across your entire proxy infrastructure</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Global Network" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Diverse IP Sources</Heading>
                <Text color="gray.600">Access to over 70 million rotating IP addresses from residential, datacenter, and mobile sources with geo-targeting and carrier-specific selection capabilities</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Advanced Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Rotation Pattern Analysis</Heading>
                <Text color="gray.600">AI-powered rotation pattern optimization with automated learning from successful and unsuccessful requests to continuously improve success rates</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Developer-Friendly API</Heading>
                <Text color="gray.600">RESTful API with SDKs for Python, Node.js, Java, and Go to seamlessly integrate rotating proxy capabilities into your existing applications</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Rotating Proxy Technical Specifications
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Rotation & Management Features</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Configurable Rotation</Text> - Set rotation patterns based on time intervals, request counts, or response triggers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">IP Exclusion Rules</Text> - Create custom rules to exclude specific IP ranges, ASNs, or previously blocked IPs</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Geo-Distribution</Text> - Control geographic distribution of rotating IPs by country, region, or city</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Session Management</Text> - Maintain sticky sessions with persistent IPs or implement custom rotation logic</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Rotation Analytics</Text> - Performance metrics tracking optimal rotation frequencies and patterns</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Enterprise Security & Performance</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Anti-Detection Features</Text> - Advanced browser fingerprinting and request signature randomization</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated Verification</Text> - Continuous IP validation and quality scoring to ensure high-performance connections</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Smart Routing</Text> - Intelligent request distribution with automatic connection optimization</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Usage Optimization</Text> - Bandwidth management and request compression for cost-effective operation</Text>
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
            Rotating Proxy Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Market Intelligence Firm Scales Data Collection 15x</Heading>
              <Text mb={4}>
                A leading market intelligence provider implemented our rotating proxy infrastructure to 
                monitor competitive pricing across 38 countries. Their success rate increased from 65% to 97% 
                while scaling request volume by 15x and reducing infrastructure costs by 47%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Your rotating proxy service completely transformed our data acquisition capabilities. 
                We've eliminated blocking issues that previously plagued our collection process and can now 
                scale our operations significantly while maintaining high success rates."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">E-commerce Brand Protection Team Increases Coverage</Heading>
              <Text mb={4}>
                A global e-commerce company utilized our rotating proxy services to monitor unauthorized 
                sellers and counterfeit listings across 125+ marketplaces. Their coverage expanded by 380% 
                while maintaining a 99.2% success rate and identifying 2,700+ previously undetected 
                brand protection violations.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "After switching to your rotating proxy infrastructure, we've dramatically expanded our 
                brand protection coverage while virtually eliminating the blocking issues we previously 
                encountered. Your solution has directly contributed to a 42% reduction in counterfeit 
                products appearing online."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners */}
     {/* Integration Partners for Rotating Proxy */}
<Box py={16} bg="blue.50">
  <Box maxW="1200px" mx="auto" px={4} textAlign="center">
    <Heading as="h2" size="xl" mb={8} fontWeight="medium">
      Technology Integrations
    </Heading>
    <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
      Our rotating proxy infrastructure integrates seamlessly with all major development frameworks and data collection platforms
    </Text>
    
    <Flex justify="center" flexWrap="wrap" gap={10} mb={12} align="center">
      <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
        <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" maxHeight="80px" maxWidth="160px" objectFit="contain" />
      </Box>
      <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
        <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="REST API" maxHeight="80px" maxWidth="160px" objectFit="contain" />
      </Box>
      <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
        <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="AWS" maxHeight="80px" maxWidth="160px" objectFit="contain" />
      </Box>
      <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
        <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Kubernetes" maxHeight="80px" maxWidth="160px" objectFit="contain" />
      </Box>
      <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
        <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Grafana" maxHeight="80px" maxWidth="160px" objectFit="contain" />
      </Box>
    </Flex>
  </Box>
</Box>
      
      {/* Call to Action */}
      <Box py={16} bg="teal.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Eliminate IP Blocking?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start collecting web data at scale with our intelligent rotating proxy infrastructure.
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
              href="https://cloud.thedataproxy.com/signup"
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

export default RotatingProxyService;