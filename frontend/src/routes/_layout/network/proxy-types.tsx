import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/proxy-types")({
  component: ProxyTypesPage,
});

function ProxyTypesPage() {
  const proxyTypes = [
    { type: "Residential Proxies", servers: 5000000, locations: 195, useCases: "Data harvesting, social media operations, ad verification, market studies" },
    { type: "Datacenter Proxies", servers: 350000, locations: 130, useCases: "Rapid data retrieval, large-scale tasks, performance evaluation" },
    { type: "Mobile Proxies", servers: 2500000, locations: 170, useCases: "App testing, mobile SEO checks, in-app ad confirmation" },
    { type: "ISP Proxies", servers: 1500000, locations: 120, useCases: "Online price tracking, travel rate aggregation, critical operations" },
    { type: "Static Proxies", servers: 800000, locations: 95, useCases: "Profile management, stable identity tasks, prolonged automation" },
    { type: "Rotating Proxies", servers: 3500000, locations: 175, useCases: "Extensive data gathering, privacy, bypassing restrictions" }
  ];

  const proxyFeatures = [
    { 
      title: "Varied Proxy Options", 
      description: "Tap into a wide array of proxy types such as residential, datacenter, mobile, ISP, static, and rotating proxies", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Rotation Customization", 
      description: "Set rotation schedules from seconds to days or manually initiate rotations tailored to your needs", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Secure Access Methods", 
      description: "Multiple authentication choices including credentials, IP allowlisting, and API key linkage", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Protocol Compatibility", 
      description: "Complete support for HTTP, HTTPS, SOCKS4, and SOCKS5 protocols with extensive customization options", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Proxy Types Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Proxy Options
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            The ideal proxy for every scenario. Select from our extensive lineup of proxy types designed to fulfill specific speed, geographic, and dependability needs.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Residential Proxies</Heading>
              <Text>Browse the internet via authentic residential IPs from real household devices worldwide, ensuring top-tier legitimacy and minimal detection risks.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Datacenter Proxies</Heading>
              <Text>Fast-performing proxies housed in premium datacenters, built for speed and stability. Perfect for large-scale tasks where efficiency is key.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Mobile Proxies</Heading>
              <Text>Navigate through real mobile networks and devices to view the web as mobile users do, ideal for validating mobile apps, sites, and features.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of Our Varied Proxy Network
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">99.8%</StatNumber>
                <StatLabel>Reliability Assurance</StatLabel>
              </Stat>
              <Text>
                Our proxy system is engineered for business-grade dependability with backup infrastructure, seamless failover, and round-the-clock oversight for uninterrupted service.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">95%</StatNumber>
                <StatLabel>Improved Success Rate</StatLabel>
              </Stat>
              <Text>
                Users of our tailored proxy types see up to 95% better outcomes on complex targets compared to standard proxy offerings.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">12M+</StatNumber>
                <StatLabel>Total Proxy Inventory</StatLabel>
              </Stat>
              <Text>
                Utilize over 12 million proxies across all categories, guaranteeing a constant supply of fresh IPs for any project, scale, or region.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Proxy Types Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Wide-Ranging Proxy Options
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
                  <Text as="span" fontWeight="bold">Typical Applications:</Text> {proxy.useCases}
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
            Enhanced Proxy Features
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our cutting-edge proxy technology delivers unparalleled adaptability and precision for all scenarios.
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Session Control" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Persistent Session Management</Heading>
                <Text color="gray.600">Keep the same IP for steady sessions or customize rotation based on time, requests, or data usage.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Targeting Options" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Precise Targeting</Heading>
                <Text color="gray.600">Pick proxies by category, region, ASN, carrier, speed, and other criteria for optimal performance.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Smart Routing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Intelligent Routing</Heading>
                <Text color="gray.600">AI-driven routing chooses the best proxy per request using target data, past performance, and live metrics.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Protocol Support" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Versatile Protocol Support</Heading>
                <Text color="gray.600">Comprehensive compatibility with HTTP, HTTPS, SOCKS4, and SOCKS5, featuring advanced setup options.</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Proxy Types Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Proxy Type Details
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Residential & Mobile Proxies</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Authentic Devices</Text> - Real residential and mobile IPs from genuine devices, not datacenter-based.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Worldwide Reach</Text> - Coverage in 195+ countries and 850+ cities with true local traits.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Provider Selection</Text> - Specify ISPs or mobile carriers for precise testing.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Rotation Flexibility</Text> - Set persistent sessions or auto-rotate at chosen intervals.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Realistic Fingerprinting</Text> - Features genuine browser fingerprints aligned with actual devices.</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Datacenter & Specialty Proxies</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Top Speed</Text> - High-speed connections with a 99.9% uptime promise for vital tasks.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Exclusive Access</Text> - Dedicated proxies with sole usage for peak reliability.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Unlimited Data</Text> - No bandwidth caps on select plans for intensive operations.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Fixed IPs</Text> - Stable, long-term IPs for consistent identity handling.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom Setups</Text> - Tailored proxy configurations for unique platforms and needs.</Text>
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
              <Heading as="h3" size="md" mb={4} color="teal.500">E-commerce Firm Boosts Data Precision</Heading>
              <Text mb={4}>
                A top e-commerce analytics company moved from basic datacenter proxies to our residential proxy system for price tracking. The real residential IPs lifted their data retrieval success from 67% to 98%, vastly enhancing their pricing intelligence accuracy.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Switching to residential proxies revolutionized our data quality instantly. We can now gather precise pricing from sources we couldn’t reach before, giving our clients a clear edge."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Mobile Developer Enhances App Quality</Heading>
              <Text mb={4}>
                A mobile app developer used our mobile proxy network to test their app across 42 carriers in 18 countries. They uncovered network-specific performance flaws missed by emulators, boosting their app store rating from 3.7 to 4.8 stars after fixes.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Testing via real mobile networks exposed issues simulators overlooked. Targeting specific carriers per market transformed our QA and elevated user satisfaction significantly."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Proxy Types Overview Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Proxy Selection Overview
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Pick the best proxy type for any task with our expansive proxy network.
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
            Discover Your Ideal Proxy Solution
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin exploring our diverse proxy network and choose the perfect proxy types for your unique needs.
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
              _hover={{ bg: "teal.700" }}
              as="a"
              href="https://cloud.roamingproxy.com/signup"
            >
              Try for Free
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