import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/https-proxy")({
  component: HttpsProxyService,
});

function HttpsProxyService() {
  const industryData = [
    { industry: "E-commerce", growth: 62, useCases: "Price tracking, stock monitoring, competitor insights, international market analysis" },
    { industry: "Travel", growth: 58, useCases: "Localized pricing data, regional content access, availability checks, restricted data retrieval" },
    { industry: "Market Research", growth: 54, useCases: "Geo-specific data gathering, audience insights, localized trend analysis" },
    { industry: "Ad Verification", growth: 49, useCases: "Global ad placement checks, targeting validation, fraud detection" },
    { industry: "SEO & Marketing", growth: 57, useCases: "Global search ranking analysis, regional keyword studies, localized campaign validation" },
    { industry: "Financial Services", growth: 51, useCases: "Access to restricted financial data, market monitoring, cross-border compliance checks" }
  ];

  const proxyFeatures = [
    { 
      title: "Global IP Coverage", 
      description: "Connect to over 200 countries and 50,000+ cities with precise targeting across residential, datacenter, and mobile IPs", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Session Control", 
      description: "Manage persistent, rotating, or sticky sessions with advanced browser fingerprinting and request concealment", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Live Traffic Insights", 
      description: "Detailed dashboard with success rates, latency tracking, bandwidth usage, and cost-saving recommendations", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Smart Request Handling", 
      description: "AI-driven optimization with automatic retries, parallel connections, and caching for maximum reliability", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    }
  ];

  return (
    <>
      {/* HTTPS Proxy Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Secure HTTPS Proxy Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Seamlessly route HTTPS traffic worldwide with our robust, scalable proxy network. 
            Unlock restricted content, gather global insights, and safeguard your operations with top-tier reliability.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Worldwide HTTPS Access</Heading>
              <Text>Reach sites from over 200 countries and 50,000+ cities with pinpoint location accuracy. Overcome geo-blocks and collect localized data using our vast network of residential, datacenter, and mobile IPs.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Top-Tier Security</Heading>
              <Text>Securely channel HTTPS traffic through our encrypted, SOC 2-compliant systems. Protect your workflows with IP rotation, anonymized requests, and advanced browser fingerprinting for critical tasks.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Optimized Request Delivery</Heading>
              <Text>Boost reliability with AI-driven routing, automated retries, and parallel request processing. Our smart proxy system adapts dynamically to ensure consistent data access at scale.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Why Choose Our HTTPS Proxy Services
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">99.9%</StatNumber>
                <StatLabel>Service Uptime</StatLabel>
              </Stat>
              <Text>
                Our proxy network ensures carrier-grade reliability with 99.9% uptime guarantees and failover routing across global data centers.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">87%</StatNumber>
                <StatLabel>Improved Success Rates</StatLabel>
              </Stat>
              <Text>
                Businesses achieve up to 87% better success rates for tough targets compared to standard proxy solutions, thanks to our advanced infrastructure.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">65%</StatNumber>
                <StatLabel>Cost Savings</StatLabel>
              </Stat>
              <Text>
                Our smart routing and data optimization tools help companies cut proxy-related expenses by an average of 65%.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Tailored Proxy Solutions by Industry
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    ROI Boost
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
            Powerful Proxy Features
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our advanced HTTPS proxy system offers unmatched capabilities for global data retrieval and secure operations
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Live Insights" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Live Insights</Heading>
                <Text color="gray.600">Real-time dashboards with metrics on request success, response times, and data usage across all proxy connections</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Worldwide Network" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Worldwide Network</Heading>
                <Text color="gray.600">Tap into over 50 million residential, datacenter, and mobile IPs across all continents, with city and ISP-level precision</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Smart Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Smart Monitoring</Heading>
                <Text color="gray.600">Active monitoring with customizable alerts, automated checks, and predictive issue detection for uninterrupted service</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Connectivity" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">API Connectivity</Heading>
                <Text color="gray.600">Robust REST API with SDKs for Python, Node.js, Java, and Go, enabling easy integration into your existing systems</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Technical Proxy Capabilities
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Protocol & Setup Features</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">TLS/SSL Compatibility</Text> - Supports TLS 1.3 with customizable certificates and cipher configurations</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Dynamic Rotation</Text> - Flexible IP switching based on time, request volume, or response triggers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Targeting</Text> - Granular targeting by country, city, region, ASN, or ISP with verification</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Header Customization</Text> - Adjustable HTTP headers with fingerprinting and user-agent cycling</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Request Efficiency</Text> - Smart retries, parallel requests, and optimized timeout handling</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Security & Performance</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">SOC 2 Standards</Text> - Robust security with full logging, encryption, and access management</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">DDoS Defense</Text> - Advanced protection with automated traffic filtering and threat detection</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Speed Optimization</Text> - Proprietary tech delivers up to 300% faster responses</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Efficiency</Text> - Smart compression and caching to lower bandwidth costs</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Round-the-Clock Support</Text> - Dedicated enterprise SLAs with 24/7 technical assistance</Text>
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
            Proxy Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">E-commerce Giant Hits 99.8% Success Rate</Heading>
              <Text mb={4}>
                A top global retailer used our HTTPS proxy network to track competitor prices across 42 markets. They achieved a 99.8% success rate, cut bandwidth costs by 72%, and sped up their data pipeline fivefold.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Your proxy solution revolutionized our market intelligence. We now pull pricing data from countless competitors with near-perfect accuracy and lower costs."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Finance Firm Secures Global Data</Heading>
              <Text mb={4}>
                A major financial data provider leveraged our proxy network to access restricted data across 78 countries. Our SOC 2-compliant system met their compliance needs, enabling broader coverage with full regulatory adherence.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Among many proxy providers, yours stood out for meeting our strict security standards while delivering the global reach and reliability we needed for critical data."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners for HTTPS Proxy */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Seamless Technology Integrations
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our HTTPS proxy system integrates effortlessly with leading security tools, web platforms, and development environments
          </Text>
          
          <Flex justify="center" flexWrap="wrap" gap={10} mb={12} align="center">
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/http.png" alt="HTTP Protocol" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nginx.png" alt="NGINX" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png" alt="Docker" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Prometheus" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png" alt="Postman" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
          </Flex>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Web Frameworks</Heading>
              <Text textAlign="left">
                Our proxy service integrates smoothly with frameworks like Express, Django, Spring Boot, and Laravel, enabling secure proxy connections with minimal setup changes.
              </Text>
            </VStack>
            
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Security & Monitoring</Heading>
              <Text textAlign="left">
                Full support for tools like NGINX, Prometheus, Grafana, and Vault, allowing you to monitor performance, detect issues, and maintain compliance with ease.
              </Text>
            </VStack>
            
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">API Development Tools</Heading>
              <Text textAlign="left">
                Streamline API workflows with support for Postman, Swagger, and more, ensuring secure testing and compatibility with your development pipeline.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="teal.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Go Global with HTTPS?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start channeling your HTTPS traffic through our secure, high-performance proxy network. 
            Book a consultation with our experts to craft your tailored solution.
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
              Schedule a Demo
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
              Begin Free Trial
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