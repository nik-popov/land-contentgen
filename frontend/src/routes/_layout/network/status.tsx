import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon, HStack, Badge, Progress } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, TimeIcon, WarningIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/status")({
  component: NetworkStatusPage,
});

function NetworkStatusPage() {
  const networkMetrics = [
    { metric: "Uptime", value: "99.997%", period: "Last 30 days", trend: "increase", trendValue: "0.015%" },
    { metric: "Average Response Time", value: "84ms", period: "Last 24 hours", trend: "decrease", trendValue: "12ms" },
    { metric: "Success Rate", value: "99.92%", period: "Last 24 hours", trend: "increase", trendValue: "0.08%" },
    { metric: "Active Proxies", value: "5.2M+", period: "Current", trend: "increase", trendValue: "83K" },
    { metric: "Network Load", value: "42%", period: "Current", trend: "decrease", trendValue: "4%" },
    { metric: "Request Throughput", value: "8.4M", period: "Per hour", trend: "increase", trendValue: "12%" },
  ];

  const serviceStatus = [
    { service: "Residential Proxies", status: "Operational", performance: 100, lastIncident: "21 days ago" },
    { service: "Datacenter Proxies", status: "Operational", performance: 100, lastIncident: "43 days ago" },
    { service: "Mobile Proxies", status: "Operational", performance: 98, lastIncident: "2 days ago" },
    { service: "API Endpoints", status: "Operational", performance: 100, lastIncident: "15 days ago" },
    { service: "Dashboard", status: "Operational", performance: 100, lastIncident: "37 days ago" },
    { service: "Authentication System", status: "Operational", performance: 100, lastIncident: "60+ days ago" },
  ];

  const regionStatus = [
    { region: "North America", status: "Operational", performance: 100, activeNodes: "1.2M+" },
    { region: "Europe", status: "Operational", performance: 100, activeNodes: "1.8M+" },
    { region: "Asia-Pacific", status: "Minor Issues", performance: 97, activeNodes: "935K+" },
    { region: "Latin America", status: "Operational", performance: 99, activeNodes: "480K+" },
    { region: "Middle East & Africa", status: "Operational", performance: 99, activeNodes: "520K+" },
    { region: "Oceania", status: "Operational", performance: 100, activeNodes: "240K+" },
  ];

  const recentIncidents = [
    {
      date: "March 25, 2025",
      title: "Asia-Pacific Response Time Degradation",
      status: "Resolved",
      description: "Increased latency affecting Asia-Pacific proxies due to submarine cable maintenance. Alternative routing restored normal performance.",
      resolution: "12:45 UTC"
    },
    {
      date: "March 22, 2025",
      title: "Mobile Proxy Connection Issues",
      status: "Resolved",
      description: "Intermittent connection issues with mobile proxies in certain regions. Issue traced to carrier configuration change.",
      resolution: "16:20 UTC"
    },
    {
      date: "March 10, 2025",
      title: "Dashboard Slow Loading",
      status: "Resolved",
      description: "Dashboard experienced slow loading times due to database optimization process. Performance restored after indexing completion.",
      resolution: "08:30 UTC"
    }
  ];

  return (
    <>
      {/* Network Status Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Network Status
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8} maxW="800px" mx="auto">
            Real-time monitoring of our global proxy infrastructure.
            Track performance, availability, and incident history across all services and regions.
          </Text>
          
          <Flex justify="center" mb={8}>
            <Badge colorScheme="green" fontSize="lg" py={2} px={6} borderRadius="full">
              All Systems Operational
            </Badge>
          </Flex>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="center" bg="white" p={6} borderRadius="md" spacing={4}>
              <Stat textAlign="center">
                <StatNumber color="green.500">99.997%</StatNumber>
                <StatLabel>Network Uptime</StatLabel>
                <StatHelpText>Last 30 days</StatHelpText>
              </Stat>
            </VStack>
            
            <VStack flex="1" minW="280px" align="center" bg="white" p={6} borderRadius="md" spacing={4}>
              <Stat textAlign="center">
                <StatNumber color="green.500">84ms</StatNumber>
                <StatLabel>Average Response Time</StatLabel>
                <StatHelpText>Global average</StatHelpText>
              </Stat>
            </VStack>
            
            <VStack flex="1" minW="280px" align="center" bg="white" p={6} borderRadius="md" spacing={4}>
              <Stat textAlign="center">
                <StatNumber color="green.500">0</StatNumber>
                <StatLabel>Active Incidents</StatLabel>
                <StatHelpText>Updated every minute</StatHelpText>
              </Stat>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Real-time Metrics Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Real-time Network Metrics
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={8} mt={10}>
            {networkMetrics.map((metric, index) => (
              <VStack key={index} align="flex-start" bg="gray.50" p={6} borderRadius="md" spacing={3}>
                <Stat>
                  <StatLabel color="gray.500" fontSize="sm">{metric.metric}</StatLabel>
                  <Flex width="100%" justify="space-between" align="flex-end">
                    <StatNumber color="red.600">{metric.value}</StatNumber>
       
                  </Flex>
                  <StatHelpText fontSize="xs" color="gray.500">{metric.period}</StatHelpText>
                </Stat>
              </VStack>
            ))}
          </Grid>
        </Box>
      </Box>
      
      {/* Service Status Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Service Status
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            {serviceStatus.map((service, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Flex justify="space-between" align="center" mb={3}>
                  <Heading as="h3" size="md" fontWeight="medium">{service.service}</Heading>
                  <Badge colorScheme={service.performance === 100 ? "green" : "yellow"} px={3} py={1} borderRadius="full">
                    {service.status}
                  </Badge>
                </Flex>
         
                <Flex align="center">
                  <Text width="80px" fontSize="sm">Incident:</Text>
                  <Text fontSize="sm" color="gray.600">{service.lastIncident}</Text>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
      
      {/* Regional Status Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Regional Network Status
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Current performance and availability metrics for each geographic region in our global network
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
            {regionStatus.map((region, index) => (
              <Box key={index} p={6} bg="gray.50" borderRadius="md" boxShadow="sm">
                <HStack mb={3}>
                  <Heading as="h3" size="md" fontWeight="medium">{region.region}</Heading>
                  {region.status === "Operational" ? (
                    <CheckCircleIcon color="green.500" />
                  ) : (
                    <WarningIcon color="yellow.500" />
                  )}
                </HStack>
                <Flex align="center">
                  <Text width="100px" fontSize="sm">Active Nodes:</Text>
                  <Text fontSize="sm" fontWeight="medium">{region.activeNodes}</Text>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
      
      {/* Recent Incidents Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Recent Incidents
          </Heading>
          
          <Grid templateColumns={{ base: "1fr" }} gap={8}>
            {recentIncidents.map((incident, index) => (
              <Box key={index} p={8} bg="white" borderRadius="md" boxShadow="sm">
                <Flex justify="space-between" align="center" mb={4} flexWrap="wrap" gap={2}>
                  <HStack>
                    <TimeIcon color="red.600" />
                    <Text fontSize="sm" color="gray.600">{incident.date}</Text>
                  </HStack>
                  <Badge colorScheme="green" px={3} py={1} borderRadius="full">
                    {incident.status}
                  </Badge>
                </Flex>
                <Heading as="h3" size="md" mb={4} fontWeight="medium">{incident.title}</Heading>
                <Text mb={4} color="gray.700">{incident.description}</Text>
                <Flex align="center">
                  <Text fontWeight="medium" fontSize="sm" color="gray.700" mr={2}>Resolved at:</Text>
                  <Text fontSize="sm" color="gray.600">{incident.resolution}</Text>
                </Flex>
              </Box>
            ))}
          </Grid>
          
          {/* <Box textAlign="center" mt={10}>
            <Button
              size="md"
              colorScheme="blue"
              variant="outline"
              as="a"
              href="/network/incident-history"
            >
              View Full Incident History
            </Button>
          </Box> */}
        </Box>
      </Box>
      
      {/* Subscription Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium">
            Stay Informed
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto">
            Subscribe to real-time status updates to receive immediate notifications about 
            service disruptions, maintenance, and resolution of incidents
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
          <Button
              size="lg"
              bg="red.500"
              color="white"
              _hover={{ bg: "gray.300" }}
              as="a"
              href="/demo-request"
            >
              Request Demo
            </Button>
            
            <Button
              size="lg"
              bg="red.500"
              color="white"
              _hover={{ bg: "gray.300" }}
              as="a"
              href="/contact-sales"
            >
              Contact Sales
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Support Resources Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Support Resources
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" boxShadow="sm" spacing={4}>
              <Image src="https://cdn-icons-png.flaticon.com/512/1932/1932655.png" boxSize="50px" mb={2} />
              <Heading as="h3" size="md" fontWeight="medium">Technical Documentation</Heading>
              <Text color="gray.600">Access documentation to understand our infrastructure and troubleshoot.</Text>
              <Link color="red.600" href="https://apis.roamingproxy.com/redoc" fontWeight="medium">
                API Documentation →
              </Link>
            </VStack>
            
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" boxShadow="sm" spacing={4}>
              <Image src="https://cdn-icons-png.flaticon.com/512/1373/1373397.png" boxSize="50px" mb={2} />
              <Heading as="h3" size="md" fontWeight="medium">Proxy Status Page</Heading>
              <Text color="gray.600">
                Check proxy performance and availability in real-time on our dedicated status page.
              </Text>
              <Link color="red.600" href="https://cloud.roamingproxy.com/scraping-tools/search-proxies" fontWeight="medium">
                View Status Page →
              </Link>
            </VStack>
            
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" boxShadow="sm" spacing={4}>
              <Image src="https://cdn-icons-png.flaticon.com/512/4677/4677490.png" boxSize="50px" mb={2} />
              <Heading as="h3" size="md" fontWeight="medium">Contact Support</Heading>
              <Text color="gray.600">Our technical support team is available to help resolve any issues.</Text>
              <Link color="red.600" href="/resources/support-center" fontWeight="medium">
                Contact Support →
              </Link>
            </VStack>
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default NetworkStatusPage;