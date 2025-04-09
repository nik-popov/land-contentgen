import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/https-proxy")({
  component: HttpsProxyService,
});

function HttpsProxyService() {
  const industryData = [
    { industry: "E-commerce", growth: 62, useCases: "Price monitoring, inventory tracking, competitor analysis, global market research" },
    { industry: "Travel", growth: 58, useCases: "Regional pricing intelligence, content localization, availability monitoring, geo-restricted data" },
    { industry: "Market Research", growth: 54, useCases: "Location-specific data collection, demographic insights, regional sentiment analysis" },
    { industry: "Ad Verification", growth: 49, useCases: "Global ad placement verification, geo-targeting validation, fraud prevention" },
    { industry: "SEO & Marketing", growth: 57, useCases: "International SERP analysis, localized keyword research, regional campaign testing" },
    { industry: "Financial Services", growth: 51, useCases: "Geo-restricted financial data, market surveillance, cross-border compliance verification" }
  ];

  const proxyFeatures = [
    { 
      title: "Enterprise-Grade Global IP Network", 
      description: "Access to 200+ countries and 50,000+ cities with precise targeting across residential, datacenter, and mobile IP addresses", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Advanced Session Management", 
      description: "Create persistent, rotating, or sticky sessions with sophisticated browser fingerprinting and request obfuscation", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Real-Time Traffic Analytics", 
      description: "Comprehensive metrics dashboard with success rates, latency monitoring, bandwidth tracking, and cost optimization insights", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Intelligent Request Routing", 
      description: "AI-powered request optimization with automatic retries, concurrent connections, and smart caching to maximize success rates", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    }
  ];

  return (
    <>
      {/* HTTPS Proxy Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            HTTPS Proxy Services
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Route HTTPS requests globally with our secure, scalable, enterprise grade proxy infrastructure. 
            Access geo-restricted content, collect market intelligence, and protect your web operations with unparalleled reliability.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Global HTTPS Routing</Heading>
              <Text>Access websites from 200+ countries and 50,000+ cities with precise location targeting. Bypass geo-restrictions and collect region-specific data with our extensive proxy network spanning residential, datacenter, and mobile IPs.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Enterprise-Grade Security</Heading>
              <Text>Route HTTPS traffic through our encrypted, SOC 2 compliant infrastructure. Protect your operations with advanced IP rotation, request anonymization, and browser fingerprinting technologies designed for mission-critical applications.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Intelligent Request Optimization</Heading>
              <Text>Maximize success rates with AI-powered routing algorithms, automatic retries, and concurrent request handling. Our intelligent proxy infrastructure adapts to changing conditions to ensure reliable data collection at scale.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Our HTTPS Proxy Services
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">99.9%</StatNumber>
                <StatLabel>Uptime Reliability</StatLabel>
              </Stat>
              <Text>
                Our enterprise HTTPS proxy infrastructure delivers carrier-grade reliability 
                with guaranteed 99.9% uptime SLAs and redundant routing across multiple global datacenters.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">87%</StatNumber>
                <StatLabel>Higher Success Rates</StatLabel>
              </Stat>
              <Text>
                Organizations using our HTTPS proxy services report up to 87% higher 
                success rates for challenging targets compared to generic proxy solutions.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">65%</StatNumber>
                <StatLabel>Cost Reduction</StatLabel>
              </Stat>
              <Text>
                Our intelligent routing and bandwidth optimization technologies help 
                enterprises reduce proxy infrastructure costs by an average of 65%.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Specific HTTPS Proxy Solutions
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    ROI Improvement
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
            Advanced HTTPS Proxy Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our enterprise-grade HTTPS proxy infrastructure provides unmatched capabilities for global data access and collection
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Advanced Analytics" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Real-Time Analytics</Heading>
                <Text color="gray.600">Comprehensive monitoring dashboards with request success metrics, response time tracking, and bandwidth utilization across all proxy endpoints</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Global Network" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Global Proxy Network</Heading>
                <Text color="gray.600">Access to over 50 million residential, datacenter, and mobile IP addresses across every continent with city and ISP-level targeting capabilities</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Advanced Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Intelligent Monitoring</Heading>
                <Text color="gray.600">Proactive monitoring with custom alert thresholds, automated health checks, and predictive failure detection to ensure maximum uptime</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Enterprise API</Heading>
                <Text color="gray.600">Comprehensive REST API with SDKs for Python, Node.js, Java, and Go to seamlessly integrate our HTTPS proxy services into your existing workflows</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            HTTPS Proxy Technical Specifications
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Protocol & Configuration Features</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">TLS/SSL Support</Text> - Full TLS 1.3 compatibility with support for custom certificates and cipher suite configurations</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Intelligent Rotation</Text> - Configurable IP rotation based on time intervals, request counts, or response patterns</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Geo-Targeting</Text> - Precision targeting by country, region, city, ASN, or ISP with location verification</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Header Management</Text> - Customizable HTTP headers with browser fingerprinting and user-agent rotation</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Request Optimization</Text> - Automatic retry logic, concurrent connections, and intelligent timeout handling</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Enterprise Security & Performance</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">SOC 2 Compliance</Text> - Enterprise-grade security with full audit logging, encryption, and access controls</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">DDoS Protection</Text> - Advanced DDoS mitigation with automatic traffic filtering and attack detection</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Traffic Acceleration</Text> - Proprietary connection optimization with up to 300% faster response times</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Bandwidth Optimization</Text> - Intelligent compression and caching to reduce data transfer costs</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">24/7 Support</Text> - Enterprise SLA with dedicated technical account managers and 24/7 emergency support</Text>
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
            HTTPS Proxy Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Global E-commerce Leader Achieves 99.8% Data Collection Success</Heading>
              <Text mb={4}>
                A Fortune 500 e-commerce company implemented our HTTPS proxy infrastructure to monitor 
                competitive pricing across 42 countries. They achieved a 99.8% success rate while reducing 
                bandwidth costs by 72% and accelerating their data collection pipeline by 5x.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Your HTTPS proxy service transformed our global market intelligence operations. We now collect 
                pricing data from thousands of competitors with near-perfect reliability and significantly lower costs."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Financial Services Firm Secures Cross-Border Data Access</Heading>
              <Text mb={4}>
                A leading financial intelligence provider used our HTTPS proxy infrastructure to securely 
                access geo-restricted financial data across 78 countries. Their compliance team approved 
                our SOC 2 certified infrastructure, enabling them to expand coverage while maintaining 
                regulatory compliance.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "After evaluating several enterprise proxy solutions, yours was the only one that met our 
                stringent security requirements while delivering the global coverage and reliability we needed 
                for mission-critical financial data collection."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Technology Integrations
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our HTTPS proxy infrastructure integrates seamlessly with all major development frameworks and data collection platforms
          </Text>
          
          <Flex justify="center" flexWrap="wrap" gap={10} mb={12} align="center">
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Node.js" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Selenium" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Prometheus" maxHeight="80px" maxWidth="160px" objectFit="contain" />
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
            Ready to Access Global HTTPS Resources?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start routing your HTTPS requests through our secure, high-performance global proxy network.
            Schedule a consultation with our solution architects to design your custom implementation.
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="teal.500"
              _hover={{ bg: "gray.100" }}
              as="a"
              href="/request-demo"
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

export default HttpsProxyService;