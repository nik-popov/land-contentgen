import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/rotating-proxy")({
  component: RotatingProxyService,
});

function RotatingProxyService() {
  const industryData = [
    { industry: "E-commerce", growth: 68, useCases: "Competitor benchmarking, stock monitoring, pricing analysis, large-scale product insights" },
    { industry: "Market Intelligence", growth: 64, useCases: "Widespread data collection, block prevention, regional market evaluation" },
    { industry: "Digital Marketing", growth: 59, useCases: "Ad validation, search ranking tracking, rival analysis, multi-region campaign testing" },
    { industry: "Brand Protection", growth: 56, useCases: "Fake product identification, unapproved vendor tracking, brand misuse detection" },
    { industry: "Real Estate", growth: 52, useCases: "Listing surveillance, pricing trend analysis, rental market insights" },
    { industry: "Financial Research", growth: 61, useCases: "Non-traditional data gathering, price observation, multi-exchange review, compliance monitoring" }
  ];

  const proxyFeatures = [
    { 
      title: "Smart IP Cycling", 
      description: "Automated or adjustable IP switching with session control and intelligent failover options", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Varied IP Reservoir", 
      description: "Tap into residential, datacenter, and mobile IPs across 195+ countries with precise location selection", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Usage Insights", 
      description: "Live tracking of success metrics, response speeds, and data usage with tailored alert settings", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Optimized Request Handling", 
      description: "Machine learning-driven request allocation to boost success rates and reduce detection risks", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    }
  ];

  return (
    <>
      {/* Rotating Proxy Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Dynamic Proxy Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Boost your web data extraction with our smart rotating proxy system. 
            Avoid IP restrictions, spread requests across diverse sources, and ensure uninterrupted 
            access to online resources with automated IP cycling.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Seamless IP Switching</Heading>
              <Text>Smart IP cycling with customizable schedules based on time, request volume, or response patterns. Prevent restrictions and detection with smooth transitions across residential, datacenter, and mobile IPs.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Business-Class Dependability</Heading>
              <Text>Reliable rotating proxy system designed for scalability and efficiency. Our distributed setup ensures constant uptime with automated recovery, load distribution, and redundant global pathways.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Sophisticated Session Control</Heading>
              <Text>Establish stable sessions with fixed IPs or flexible rotation options. Our tools support browser fingerprinting, cookie management, and advanced request identity handling.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Core Advantages of Our Rotating Proxy Solutions
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">99.95%</StatNumber>
                <StatLabel>Connection Success</StatLabel>
              </Stat>
              <Text>
                Our smart rotating proxy system achieves top-tier success rates with automated retries and optimized IP selection logic.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">92%</StatNumber>
                <StatLabel>Block Reduction</StatLabel>
              </Stat>
              <Text>
                Businesses using our rotating proxies see up to 92% fewer IP blocks and CAPTCHAs compared to fixed IP approaches.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">71%</StatNumber>
                <StatLabel>Data Throughput Boost</StatLabel>
              </Stat>
              <Text>
                Our advanced request management and rotation tech enable companies to enhance data retrieval speed by an average of 71%.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Tailored Rotating Proxy Applications
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Efficiency Gain
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
            Cutting-Edge Proxy Features
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our business-ready rotating proxy system offers exceptional tools for reliable web access and data retrieval
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Real-Time Insights" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Real-Time Insights</Heading>
                <Text color="gray.600">Detailed dashboards showing cycling patterns, success metrics, response times, and data usage across your proxy network</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Worldwide IP Pool" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Worldwide IP Pool</Heading>
                <Text color="gray.600">Leverage over 70 million rotating IPs from residential, datacenter, and mobile sources, with location and carrier targeting options</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Cycle Optimization" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Cycle Optimization</Heading>
                <Text color="gray.600">AI-driven cycling adjustments based on request outcomes, continuously refining performance for higher success rates</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Integration Ease" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Integration Ease</Heading>
                <Text color="gray.600">RESTful API with SDKs for Python, Node.js, Java, and Go, enabling effortless proxy integration into your applications</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Technical Highlights of Rotating Proxies
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Cycling & Control Options</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Customizable Cycling</Text> - Define cycling patterns by time, request count, or response triggers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">IP Filtering</Text> - Set rules to exclude specific IP ranges, ASNs, or previously flagged IPs</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location Targeting</Text> - Manage IP distribution by country, region, or city for precise geo-control</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Session Flexibility</Text> - Use fixed IPs for stable sessions or apply custom cycling logic</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Performance Tracking</Text> - Analyze metrics to optimize cycling frequency and patterns</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Security & Efficiency Features</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Stealth Technology</Text> - Enhanced browser fingerprinting and request randomization for evasion</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">IP Quality Checks</Text> - Ongoing validation and scoring to maintain high-performing connections</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Adaptive Routing</Text> - Smart request allocation with automatic performance tuning</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Resource Efficiency</Text> - Data usage optimization and request compression for cost savings</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Premium Support</Text> - SLA-backed assistance with dedicated account support and round-the-clock monitoring</Text>
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
            Rotating Proxy Achievements
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Market Research Firm Boosts Data Retrieval 15x</Heading>
              <Text mb={4}>
                A top market research company adopted our rotating proxy system to track pricing across 38 countries, 
                raising their success rate from 65% to 97%, scaling requests 15x, and cutting costs by 47%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Your dynamic proxy solution revolutionized our data collection process. We’ve overcome blocking challenges 
                and can now scale operations significantly while keeping success rates high."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">E-commerce Team Enhances Brand Oversight</Heading>
              <Text mb={4}>
                A worldwide e-commerce firm used our rotating proxies to monitor unauthorized sellers and fakes across 125+ 
                marketplaces, expanding coverage by 380%, achieving a 99.2% success rate, and spotting 2,700+ new violations.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Since adopting your rotating proxy system, we’ve vastly improved our brand protection reach and nearly 
                eliminated blocking issues. It’s driven a 42% drop in counterfeit listings online."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Compatible Technologies
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our rotating proxy system integrates smoothly with leading development frameworks and data platforms
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
            Ready to Overcome IP Restrictions?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin large-scale web data collection with our smart rotating proxy system. 
            Book a session with our experts to craft your tailored setup.
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
              _hover={{ bg: "teal.600" }}
              as="a"
              href="https://buy.stripe.com/4gwg1C2by9Cs2Ry6op"
            >
              Try It Free
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