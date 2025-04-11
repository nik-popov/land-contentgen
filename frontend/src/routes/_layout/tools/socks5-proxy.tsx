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
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            SOCKS5 Proxy Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Strengthen your network protection and worldwide connectivity with our robust SOCKS5 proxy services. 
            Facilitate secure data tunneling, advanced authentication at the application level, and versatile support 
            for TCP/UDP traffic throughout your organization.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Protected Protocol Channels</Heading>
              <Text>Our SOCKS5 proxy solution offers comprehensive tunneling capabilities, supporting both TCP and UDP traffic via secure pathways with complete encryption and sophisticated authentication methods.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Application-Layer Protection</Heading>
              <Text>In contrast to typical HTTP proxies, our SOCKS5 system functions at the application level, ensuring secure access for diverse protocols like email, file sharing, video calls, and tailored business applications.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Worldwide Network Coverage</Heading>
              <Text>Tap into our SOCKS5 proxy network, distributed across 190+ countries, designed for enterprise needs. Enjoy low-latency global connections with built-in redundancy and automatic failover.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Core Advantages of Our SOCKS5 Proxy Solutions
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">99.8%</StatNumber>
                <StatLabel>Operational Uptime</StatLabel>
              </Stat>
              <Text>
                Our SOCKS5 infrastructure ensures top-tier reliability with global redundancy and seamless failover mechanisms for uninterrupted service.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">85%</StatNumber>
                <StatLabel>Latency Improvement</StatLabel>
              </Stat>
              <Text>
                Businesses leveraging our SOCKS5 proxies see up to 85% lower connection delays compared to traditional VPNs for global operations.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">64%</StatNumber>
                <StatLabel>Cost Savings</StatLabel>
              </Stat>
              <Text>
                Our SOCKS5 solution minimizes bandwidth waste and optimizes routing, cutting global networking expenses by an average of 64%.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Tailored SOCKS5 Proxy Applications by Industry
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Security Improvement
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
            Sophisticated SOCKS5 Proxy Features
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our enterprise-class SOCKS5 proxy system delivers exceptional capabilities for secure data tunneling and protocol versatility.
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Advanced Analytics" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Performance Insights</Heading>
                <Text color="gray.600">Detailed dashboards monitor connection performance, bandwidth usage, latency trends, and security incidents across your SOCKS5 proxy network.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Global Network" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Worldwide Proxy Nodes</Heading>
                <Text color="gray.600">Connect to over 5,000 SOCKS5 endpoints in 190+ countries, strategically placed for peak performance and reliability.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/auth0.png" alt="Advanced Authentication" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Robust Authentication</Heading>
                <Text color="gray.600">Advanced security with support for username/password, GSSAPI, certificate-based, and tailored authentication systems with precise access controls.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Developer-Centric API</Heading>
                <Text color="gray.600">Robust RESTful API with SDKs for Python, Node.js, Java, and Go, enabling smooth integration of SOCKS5 proxies into your applications.</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            SOCKS5 Proxy Technical Details
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Protocol & Connectivity Options</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">TCP/UDP Compatibility</Text> - Complete support for TCP and UDP protocols with efficient connection management.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">IPv4/IPv6 Compatibility</Text> - Full support for IPv4 and IPv6 addressing with dual-stack functionality.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">DNS Resolution</Text> - Flexible local and remote DNS options with leak prevention and customizable DNS settings.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Connection Management</Text> - Optimized connection pooling with persistent connections and automatic recycling.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Traffic Prioritization</Text> - Advanced bandwidth management with Quality of Service (QoS) features.</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Enterprise Security & Control</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Authentication Options</Text> - Supports No-Auth, Username/Password, GSSAPI, and custom authentication methods.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Encryption</Text> - TLS/SSL encryption with customizable certificate authorities and cipher suites.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Access Management</Text> - Granular control based on IP, user, or application, with detailed audit logs.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Traffic Analysis</Text> - Application-level filtering with customizable rules and pattern monitoring.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Enterprise Assistance</Text> - SLA-backed support with dedicated account managers and 24/7 security oversight.</Text>
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
            Real-World SOCKS5 Proxy Successes
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Global Corporation Protects Distributed Teams</Heading>
              <Text mb={4}>
                A Fortune 500 tech firm adopted our SOCKS5 proxy system to safeguard its workforce across 26 countries. Security incidents dropped by 94%, IT support requests for remote access fell by 78%, and connection speeds improved by 47%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Your SOCKS5 proxy solution revolutionized our remote work security. We've eliminated critical vulnerabilities while ensuring faster, more dependable access to our global systems."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Financial Institution Boosts Global Reach</Heading>
              <Text mb={4}>
                A top financial services provider implemented our SOCKS5 system to secure real-time market data across 19 global markets. They reduced connection latency by 65%, met compliance standards, and strengthened security with tailored authentication.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Your SOCKS5 infrastructure has significantly enhanced our global market connectivity and security. Supporting both TCP and UDP through a unified secure channel has streamlined our operations."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Technology Compatibility
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our SOCKS5 proxy system integrates effortlessly with leading security tools, development environments, and enterprise platforms.
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
            Ready to Secure Your Network?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin protecting your network communications with our advanced SOCKS5 proxy system. 
            Book a consultation with our experts to craft a tailored deployment plan.
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
              href="https://buy.stripe.com/4gwg1C2by9Cs2Ry6op"
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