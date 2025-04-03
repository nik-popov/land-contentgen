import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/api-scraper")({
  component: APIScraper,
});

function APIScraper() {
  const industryData = [
    { industry: "E-commerce", growth: 46, useCases: "Product data extraction, price monitoring, competitor analysis" },
    { industry: "Real Estate", growth: 39, useCases: "Property listings, market trend analysis, investment opportunities" },
    { industry: "Travel & Hospitality", growth: 35, useCases: "Price comparisons, review monitoring, booking optimization" },
    { industry: "Digital Marketing", growth: 42, useCases: "Content research, SEO analysis, market intelligence" },
    { industry: "Financial Research", growth: 31, useCases: "Financial data aggregation, market trends, stock analysis" },
    { industry: "Job Market Analysis", growth: 29, useCases: "Job postings, salary benchmarking, skill demand tracking" }
  ];

  const scraperFeatures = [
    { 
      title: "Multi-API Integration", 
      description: "Connect with any API type including REST, GraphQL, SOAP, and proprietary interfaces with our universal adapter", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" 
    },
    { 
      title: "Response Transformation", 
      description: "Normalize responses from different APIs into consistent formats for easier integration with your systems", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png" 
    },
    { 
      title: "Authentication Handling", 
      description: "Manage complex authentication flows including OAuth, API keys, and custom token management securely", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jwt.png" 
    },
    { 
      title: "Rate Limit Management", 
      description: "Optimize API usage with intelligent rate limiting, request queuing and automatic backoff strategies", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* HTML Scraper Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            API Scraper
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Transform any API or website into structured, consistent data with our powerful API scraping infrastructure.
            Extract valuable data, automate workflows, and streamline API integrations for your applications.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Reliable Data Extraction</Heading>
              <Text>Extract structured data from any website with robust selectors that adapt to site changes. Our intelligent scraping handles dynamic content, authentication, and rate limiting.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Developer-Friendly APIs</Heading>
              <Text>Integrate web data into your applications with RESTful APIs, webhooks, and custom endpoints. Receive data in JSON, CSV, or XML formats with comprehensive documentation.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Enterprise-Grade Infrastructure</Heading>
              <Text>Scale your data extraction with our high-performance infrastructure designed for reliability, uptime, and throughput. Handle millions of requests with automatic retries and caching.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of API Scraper
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">85%</StatNumber>
                <StatLabel>Development Time Reduction</StatLabel>
              </Stat>
              <Text>
                Organizations using our HTML scraper APIs report reducing their data extraction development 
                time by up to 85% compared to building and maintaining their own scrapers.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">99.9%</StatNumber>
                <StatLabel>Uptime Reliability</StatLabel>
              </Stat>
              <Text>
                Our enterprise-grade infrastructure ensures 99.9% uptime for your data extraction needs,
                with automatic failover, load balancing, and continuous monitoring.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">3x</StatNumber>
                <StatLabel>Faster Data Integration</StatLabel>
              </Stat>
              <Text>
                Implement data-driven features and applications up to 3 times faster with our ready-to-use
                APIs that transform complex web scraping into simple API calls.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Specific API Solutions
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="purple.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Adoption Growth
                  </StatHelpText>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {industry.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Scraper Features Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Advanced API Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our API scraper provides sophisticated integration techniques that handle even the most complex APIs and websites
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="Dynamic Content Extraction" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Dynamic Content Extraction</Heading>
                <Text color="gray.600">Extract data from JavaScript-rendered sites, single-page applications, and interactive elements with our headless browser integration</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Scalable Infrastructure" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Scalable Infrastructure</Heading>
                <Text color="gray.600">Handle millions of requests with distributed cloud infrastructure that automatically scales based on your extraction needs</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Customization" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">API Customization</Heading>
                <Text color="gray.600">Create custom endpoints that deliver exactly the data your application needs with filtering, pagination, and transformation options</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Monitoring & Alerts" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Monitoring & Alerts</Heading>
                <Text color="gray.600">Receive notifications when data changes, extraction fails, or website structures update with our comprehensive monitoring system</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            API Scraper Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="purple.500">Extraction Capabilities</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">CSS & XPath Selectors</Text> - Target specific elements with precision using standard or custom selectors</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">JavaScript Rendering</Text> - Extract data from dynamic websites using headless browser technology</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Authentication Support</Text> - Access protected content with cookie handling, header management, and login workflows</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Pagination Handling</Text> - Automatically navigate through multi-page content with custom rules</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Transformation</Text> - Clean, normalize, and structure extracted data into your preferred format</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="purple.500">Developer Experience</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">RESTful API</Text> - Integrate with any technology stack using our standard REST API with comprehensive documentation</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Webhook Notifications</Text> - Receive real-time updates when new data is available or extraction patterns change</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">SDKs & Libraries</Text> - Implement faster with official SDKs for Python, Node.js, PHP, Java, and Ruby</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Visual Builder</Text> - Create extraction rules with our no-code visual selector tool without writing complex queries</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Extensive Documentation</Text> - Get started quickly with comprehensive guides, examples, and API references</Text>
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
            API Scraper Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="purple.500">E-commerce Platform Increases Competitive Edge</Heading>
              <Text mb={4}>
                A leading e-commerce marketplace implemented our HTML scraper APIs to monitor competitor pricing 
                across 12,000+ products daily. Their automated repricing system achieved a 23% increase in 
                conversion rates and 18% revenue growth within the first quarter of implementation.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The real-time data from the API Scraper has transformed our pricing strategy. We're now 
                able to respond to market changes within minutes instead of days, giving us a decisive advantage."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="purple.500">Real Estate Tech Startup Expands Market Coverage</Heading>
              <Text mb={4}>
                A real estate technology startup used our HTML scraper APIs to aggregate property listings from 
                200+ sources into their search platform. They increased their property database by 340% and reduced 
                data collection costs by 67% compared to their previous manual processes.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The API Scraper allowed us to scale our coverage exponentially without growing our engineering 
                team. We now offer the most comprehensive property search in our region, all powered by automated data collection."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Integration Partners
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our API Scraper integrates seamlessly with your existing development stack and business tools
          </Text>
          
          <Flex justify="center" flexWrap="wrap" gap={10} mb={12} align="center">
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Node.js" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" alt="PHP" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="REST API" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://i0.wp.com/thatapicompany.com/wp-content/uploads/2024/07/logo-square-zapier.png" alt="Zapier" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
          </Flex>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="purple.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Supercharge Your API Integrations?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our API Scraper today and harness the power of streamlined API connections
            for your applications, analysis, and business intelligence
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="purple.500"
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
              _hover={{ bg: "purple.600" }}
              as="a"
              href="/contact-sales"
            >
             Contact Sales
            </Button>
          </Flex>
        </Box>
      </Box>
      
     
      {/* Footer */}
      <Footer />
    </>
  );
}

export default APIScraper;