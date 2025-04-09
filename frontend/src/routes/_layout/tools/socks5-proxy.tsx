import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/socks5-proxy")({
  component: SOCKS5ProxyService,
});

function SOCKS5ProxyService() {
  const industryData = [
    { industry: "Cybersecurity", growth: 72, useCases: "Secure anonymous connections, penetration testing, vulnerability assessments, network security research" },
    { industry: "Global Business", growth: 68, useCases: "Access to geo-restricted business platforms, international market research, cross-border operations" },
    { industry: "Media & Entertainment", growth: 65, useCases: "Content verification across regions, streaming platform testing, international media access" },
    { industry: "Remote Workforce", growth: 63, useCases: "Secure remote access to corporate networks, protected team collaboration, distributed workplace security" },
    { industry: "Software Development", growth: 59, useCases: "Cross-region application testing, international user experience simulation, global deployment verification" },
    { industry: "Academic Research", growth: 56, useCases: "Access to international research materials, secure data collection, cross-border academic collaboration" }
  ];

  const proxyFeatures = [
    { 
      title: "TCP/UDP Protocol Support", 
      description: "Full implementation of both TCP and UDP protocols over SOCKS5 with optimized routing and performance", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nodejs.png" 
    },
    { 
      title: "Enterprise Authentication", 
      description: "Multi-factor authentication systems including username/password, certificate-based, and GSSAPI integration", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/auth0.png" 
    },
    { 
      title: "Connection Analytics", 
      description: "Comprehensive connection tracking with latency monitoring, bandwidth usage, and security anomaly detection", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Traffic Optimization", 
      description: "Intelligent routing algorithms with bandwidth management and network congestion avoidance techniques", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    }
  ];

  return (
    <>
      {/* SOCKS5 Proxy Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            SOCKS5 Proxy Services
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Enhance network security and global connectivity with our enterprise-grade SOCKS5 proxy infrastructure. 
            Enable secure tunneling, application-level authentication, and flexible protocol support for TCP/UDP traffic 
            across your entire organization.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Secure Protocol Tunneling</Heading>
              <Text>Enterprise-grade SOCKS5 proxy implementation with full protocol tunneling capabilities. Support for both TCP and UDP traffic through secure channels with end-to-end encryption and advanced authentication mechanisms.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Application-Level Security</Heading>
              <Text>Unlike standard HTTP proxies, our SOCKS5 infrastructure operates at the application layer, providing comprehensive support for any application protocol. Enable secure access for email, file transfers, video conferencing, and custom enterprise applications.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Global Network Distribution</Heading>
              <Text>Access our globally distributed SOCKS5 proxy network spanning over 190 countries with enterprise-grade infrastructure. Achieve low-latency connections for international operations with automatic failover and redundant routing paths.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Our SOCKS5 Proxy Services
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">99.8%</StatNumber>
                <StatLabel>Uptime Reliability</StatLabel>
              </Stat>
              <Text>
                Our enterprise SOCKS5 infrastructure delivers industry-leading 
                reliability with redundant global endpoints and automatic failover systems.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">85%</StatNumber>
                <StatLabel>Latency Reduction</StatLabel>
              </Stat>
              <Text>
                Organizations using our optimized SOCKS5 proxy services experience up to 85% reduction 
                in connection latency compared to standard VPN solutions for international connections.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">64%</StatNumber>
                <StatLabel>Cost Efficiency</StatLabel>
              </Stat>
              <Text>
                Our SOCKS5 implementation reduces bandwidth overhead and optimizes 
                routing, helping enterprises reduce international networking costs by an average of 64%.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Specific SOCKS5 Proxy Solutions
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Security Enhancement
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
            Advanced SOCKS5 Proxy Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our enterprise-grade SOCKS5 proxy infrastructure provides unmatched capabilities for secure network tunneling and protocol support
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Advanced Analytics" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Performance Monitoring</Heading>
                <Text color="gray.600">Comprehensive dashboards tracking connection metrics, bandwidth utilization, latency patterns, and security events across your SOCKS5 proxy infrastructure</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Global Network" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Global Endpoint Network</Heading>
                <Text color="gray.600">Access to over 5,000 SOCKS5 proxy endpoints across 190+ countries with strategic global distribution for optimal performance and redundancy</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/auth0.png" alt="Advanced Authentication" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Multi-level Authentication</Heading>
                <Text color="gray.600">Enterprise-grade authentication with support for username/password, GSSAPI, certificate-based, and custom authentication systems with granular access controls</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Developer-Friendly API</Heading>
                <Text color="gray.600">Comprehensive RESTful API with SDKs for Python, Node.js, Java, and Go to seamlessly integrate SOCKS5 proxy capabilities into your existing applications</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            SOCKS5 Proxy Technical Specifications
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Protocol & Connection Features</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">TCP/UDP Support</Text> - Full implementation of both TCP and UDP protocols with optimized connection handling</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">IPv4/IPv6 Support</Text> - Comprehensive support for both IPv4 and IPv6 addressing with dual-stack implementation</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Domain Name Resolution</Text> - Remote and local DNS resolution options with leak protection and custom DNS server configuration</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Connection Pooling</Text> - Efficient connection management with persistent connection support and automatic recycling</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Traffic Optimization</Text> - Advanced traffic management with bandwidth prioritization and QoS support</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Enterprise Security & Management</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Authentication Methods</Text> - Support for No-Auth, Username/Password, GSSAPI, and custom authentication mechanisms</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Traffic Encryption</Text> - TLS/SSL encryption layers with support for custom certificate authorities and cipher suites</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Access Control</Text> - IP-based, user-based, and application-based access control with detailed audit logging</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Traffic Filtering</Text> - Application-level filtering with customizable rule sets and traffic pattern analysis</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Enterprise Support</Text> - SLA-backed technical support with dedicated account management and 24/7 security monitoring</Text>
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
            SOCKS5 Proxy Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Multinational Enterprise Secures Remote Workforce</Heading>
              <Text mb={4}>
                A Fortune 500 technology company implemented our SOCKS5 proxy infrastructure to 
                secure their global workforce across 26 countries. Connection security incidents decreased by 94% 
                while reducing IT support tickets related to remote access by 78% and improving overall connection 
                performance by 47%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Your SOCKS5 proxy service transformed our remote work security posture. 
                We've eliminated numerous security vulnerabilities while providing our teams with 
                faster, more reliable access to our internal systems across all global offices."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Financial Services Firm Enhances Global Operations</Heading>
              <Text mb={4}>
                A leading financial services organization deployed our SOCKS5 infrastructure to 
                secure real-time market data connectivity across 19 international markets. They achieved 
                a 65% reduction in connection latency while meeting regulatory compliance requirements 
                and enhanced their security posture with customized authentication protocols.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "After implementing your SOCKS5 proxy infrastructure, we've seen dramatic improvements 
                in our international market connectivity speed and security. The ability to support both TCP 
                and UDP protocols through a single secure channel has streamlined our global operations significantly."
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
            Our SOCKS5 proxy infrastructure integrates seamlessly with leading security platforms, development frameworks and enterprise systems
          </Text>
          
          <Flex justify="center" flexWrap="wrap" gap={10} mb={12} align="center">
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Node.js" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png" alt="Java" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/go.png" alt="Go" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Kubernetes" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
          </Flex>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="teal.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Enhance Network Security?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start securing your network communications with our enterprise-grade SOCKS5 proxy infrastructure.
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

export default SOCKS5ProxyService;