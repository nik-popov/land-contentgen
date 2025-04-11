import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/proxy-types")({
  component: ProxyTypesPage,
});

function ProxyTypesPage() {
  const proxyTypes = [
    { type: "Residential Proxies", servers: 5000000, locations: 195, useCases: "Web scraping, social media management, ad verification, market research" },
    { type: "Datacenter Proxies", servers: 350000, locations: 130, useCases: "High-speed data extraction, bulk operations, performance testing" },
    { type: "Mobile Proxies", servers: 2500000, locations: 170, useCases: "Mobile app testing, mobile SEO verification, in-app ad validation" },
    { type: "ISP Proxies", servers: 1500000, locations: 120, useCases: "E-commerce price monitoring, travel fare aggregation, high-value operations" },
    { type: "Static Proxies", servers: 800000, locations: 95, useCases: "Account management, consistent identity operations, long-term automation" },
    { type: "Rotating Proxies", servers: 3500000, locations: 175, useCases: "High-volume data collection, anonymity, avoiding rate limits" }
  ];

  const proxyFeatures = [
    { 
      title: "Diverse Proxy Types", 
      description: "Access to the full spectrum of proxy types including residential, datacenter, mobile, ISP, static, and rotating proxies", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Proxy Rotation Control", 
      description: "Configure rotation intervals from seconds to days or trigger rotations manually based on your specific use case", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Authentication Options", 
      description: "Multiple authentication methods including username/password, IP whitelisting, and API key integration", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Protocol Support", 
      description: "Full support for HTTP, HTTPS, SOCKS4, and SOCKS5 protocols across all proxy types with advanced configuration options", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Proxy Types Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Proxy Types
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            The right proxy for every use case. Choose from our comprehensive range of
            proxy types tailored to meet specific performance, location, and reliability requirements.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Residential Proxies</Heading>
              <Text>Access the web through real residential IP addresses from actual devices in homes around the world, providing the highest level of authenticity and the lowest detection rates.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Datacenter Proxies</Heading>
              <Text>High-performance proxies hosted in enterprise-grade datacenters, optimized for speed and reliability. Ideal for high-volume operations where pure performance matters most.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Mobile Proxies</Heading>
              <Text>Connect through real mobile devices and carriers to experience the web exactly as mobile users do. Perfect for testing mobile apps, websites, and mobile-specific functionality.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Our Diverse Proxy Network
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">99.8%</StatNumber>
                <StatLabel>Uptime Guarantee</StatLabel>
              </Stat>
              <Text>
                Our proxy network is built for enterprise reliability with redundant infrastructure, 
                automatic failover, and 24/7 monitoring ensuring continuous availability.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">95%</StatNumber>
                <StatLabel>Success Rate Improvement</StatLabel>
              </Stat>
              <Text>
                Organizations using our specialized proxy types report up to 95% higher 
                success rates on challenging targets compared to generic proxy solutions.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">12M+</StatNumber>
                <StatLabel>Total Proxy Pool</StatLabel>
              </Stat>
              <Text>
                Access to over 12 million proxies across all types, ensuring you always 
                have fresh IPs available for any task, at any scale, in any location.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Proxy Types Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Comprehensive Proxy Types
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {proxyTypes.map((proxy, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{proxy.type}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="teal.500">{(proxy.servers/1000000).toFixed(1)}M+</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">IPs</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{proxy.locations}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Countries</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {proxy.useCases}
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
            Advanced Proxy Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our advanced proxy technology offers unmatched flexibility and control for any use case
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Session Control" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Sticky Session Control</Heading>
                <Text color="gray.600">Maintain the same IP for consistent sessions or set custom rotation intervals based on time, requests, or bandwidth usage</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Targeting Options" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Granular Targeting</Heading>
                <Text color="gray.600">Select proxies by type, location, ASN, carrier, connection speed, and other parameters for perfectly matched capabilities</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Smart Routing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Smart Routing</Heading>
                <Text color="gray.600">AI-powered routing selects the optimal proxy for each request based on target, history, and real-time performance metrics</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Protocol Support" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Multi-Protocol Support</Heading>
                <Text color="gray.600">Full support for HTTP, HTTPS, SOCKS4 and SOCKS5 with advanced configuration options for specialized requirements</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Proxy Types Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Detailed Proxy Type Specifications
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Residential & Mobile Proxies</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">100% Real Devices</Text> - Genuine residential and mobile IPs from real devices, not datacenter IPs</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Global Coverage</Text> - Access from 195+ countries and 850+ cities with authentic local characteristics</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Carrier Selection</Text> - Choose specific ISPs or mobile carriers for targeted testing</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Flexible Rotation</Text> - Configure sticky sessions or automatic rotation at custom intervals</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Advanced Fingerprinting</Text> - Includes authentic browser fingerprints matching real devices</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Datacenter & Specialized Proxies</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">High Performance</Text> - Ultra-fast connections with 99.9% uptime guarantee for critical operations</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Dedicated Options</Text> - Private, dedicated proxies with exclusive access for maximum reliability</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Unmetered Bandwidth</Text> - Unlimited data transfer on select plans for high-volume operations</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Static Options</Text> - Long-term static IPs available for consistent identity management</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Specialized Configurations</Text> - Custom proxy setups for specific platforms and use cases</Text>
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
            Proxy Types Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">E-commerce Company Increases Data Accuracy</Heading>
              <Text mb={4}>
                A leading e-commerce analytics provider switched from generic datacenter proxies to our 
                residential proxy network for price monitoring. The authenticity of residential IPs increased 
                their data collection success rate from 67% to 98%, dramatically improving the accuracy of 
                their competitive pricing intelligence.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The switch to residential proxies transformed our data quality overnight. We're now able to 
                collect accurate pricing data from previously inaccessible sources, giving our customers a 
                significant competitive advantage."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Mobile App Developer Perfects User Experience</Heading>
              <Text mb={4}>
                A mobile application developer utilized our mobile proxy network to test their app across 
                42 different mobile carriers in 18 countries. They discovered critical performance issues 
                specific to certain networks that weren't visible in simulated environments, improving their 
                app store rating from 3.7 to 4.8 stars after resolving these issues.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Testing through actual mobile carrier networks revealed issues our emulators never caught. 
                The ability to test through specific carriers in each market has fundamentally changed our 
                QA process and dramatically improved our user experience."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Proxy Types Overview Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Comprehensive Proxy Selection
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Choose the perfect proxy type for every use case with our extensive proxy network
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="teal.500">Residential</Text>
                <Text>5M+ IPs</Text>
                <Text>195 Countries</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="teal.500">Datacenter</Text>
                <Text>350K+ IPs</Text>
                <Text>130 Countries</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="teal.500">Mobile</Text>
                <Text>2.5M+ IPs</Text>
                <Text>170 Countries</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="teal.500">ISP</Text>
                <Text>1.5M+ IPs</Text>
                <Text>120 Countries</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="teal.500">Static</Text>
                <Text>800K+ IPs</Text>
                <Text>95 Countries</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="teal.500">Rotating</Text>
                <Text>3.5M+ IPs</Text>
                <Text>175 Countries</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="teal.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Find Your Perfect Proxy Solution
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our comprehensive proxy network and select
            the ideal proxy types for your specific use cases
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
              _hover={{ bg: "teal.700" }}
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

export default ProxyTypesPage;