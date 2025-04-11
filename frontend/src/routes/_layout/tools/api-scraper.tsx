import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/api-scraper")({
  component: APIScraper,
});

function APIScraper() {
  const industryData = [
    { industry: "E-commerce", growth: 46, useCases: "Product data retrieval, price tracking, competitor insights" },
    { industry: "Real Estate", growth: 39, useCases: "Property data compilation, market movement analysis, investment prospects" },
    { industry: "Travel & Hospitality", growth: 35, useCases: "Rate comparisons, guest feedback monitoring, booking enhancements" },
    { industry: "Digital Marketing", growth: 42, useCases: "Content analysis, SEO evaluation, market trends" },
    { industry: "Financial Research", growth: 31, useCases: "Financial data collection, market patterns, equity research" },
    { industry: "Job Market Analysis", growth: 29, useCases: "Job listing aggregation, salary comparisons, skill demand analysis" }
  ];

  const scraperFeatures = [
    { 
      title: "Versatile API Connectivity", 
      description: "Integrate with diverse API types like REST, GraphQL, SOAP, and custom interfaces using our flexible adapter", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" 
    },
    { 
      title: "Data Format Standardization", 
      description: "Unify responses from varied APIs into consistent structures for seamless system integration", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png" 
    },
    { 
      title: "Secure Authentication Management", 
      description: "Handle intricate authentication processes, including OAuth, API keys, and custom tokens, with robust security", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jwt.png" 
    },
    { 
      title: "Smart Rate Limit Control", 
      description: "Maximize API efficiency with adaptive rate limiting, request prioritization, and automated backoff mechanisms", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* API Scraper Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            API Scraper Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Convert any API or website into organized, uniform data with our advanced API scraping platform. 
            Capture critical information, optimize processes, and enhance API connectivity for your applications.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Consistent Data Collection</Heading>
              <Text>Gather structured data from any site with adaptive selectors that adjust to updates. Our intelligent platform manages dynamic content, authentication, and request throttling.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Developer-Optimized APIs</Heading>
              <Text>Embed web data into your systems with RESTful APIs, webhooks, and tailored endpoints, delivered in JSON, CSV, or XML with detailed guides.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">High-Performance Infrastructure</Heading>
              <Text>Scale your data operations with our robust platform, built for reliability, availability, and efficiency, supporting millions of requests with retries and caching.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Core Advantages of API Scraper
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">85%</StatNumber>
                <StatLabel>Reduced Development Time</StatLabel>
              </Stat>
              <Text>
                Companies using our API scraper report cutting data integration development time by up to 85% compared to creating and managing custom solutions.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">99.9%</StatNumber>
                <StatLabel>Service Uptime</StatLabel>
              </Stat>
              <Text>
                Our advanced infrastructure delivers 99.9% availability for your data needs, with automated failover, load balancing, and real-time monitoring.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">3x</StatNumber>
                <StatLabel>Accelerated Integration</StatLabel>
              </Stat>
              <Text>
                Deploy data-driven features up to three times faster with our pre-built APIs, simplifying complex API scraping into straightforward integrations.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Tailored API Integrations
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="purple.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Usage Growth
                  </StatHelpText>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Typical Applications:</Text> {industry.useCases}
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
            Powerful API Tools
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our API scraper delivers advanced connectivity features to manage even the most intricate APIs and websites
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="Interactive Data Retrieval" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Interactive Data Retrieval</Heading>
                <Text color="gray.600">Capture data from JavaScript-driven sites, single-page apps, and dynamic elements using our headless browser technology</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Flexible Infrastructure" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Flexible Infrastructure</Heading>
                <Text color="gray.600">Process millions of requests with a cloud-based system that dynamically scales to meet your data needs</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Tailored API Endpoints" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Tailored API Endpoints</Heading>
                <Text color="gray.600">Design custom endpoints to deliver precisely the data your app requires, with filtering, pagination, and formatting options</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Real-Time Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Real-Time Monitoring</Heading>
                <Text color="gray.600">Stay informed with alerts for data updates, extraction errors, or site changes through our robust tracking system</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Features of Our API Scraper Platform
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="purple.500">Data Extraction Features</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">CSS & XPath Targeting</Text> - Pinpoint specific elements with accuracy using standard or tailored selectors</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Dynamic Rendering</Text> - Retrieve data from interactive sites with headless browser capabilities</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Secure Access</Text> - Reach protected content with cookie management, headers, and authentication flows</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-Page Navigation</Text> - Seamlessly crawl paginated content with customized rules</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Structuring</Text> - Refine, standardize, and format extracted data to your specifications</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="purple.500">Developer Tools</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">REST API Integration</Text> - Connect with any tech stack via our standardized REST API with detailed guides</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Instant Webhooks</Text> - Receive immediate updates for new data or changes in extraction patterns</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">SDK Support</Text> - Speed up development with SDKs for Python, Node.js, PHP, Java, and Ruby</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">No-Code Interface</Text> - Build extraction rules using our intuitive visual tool without complex coding</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Comprehensive Guides</Text> - Start fast with in-depth tutorials, examples, and API documentation</Text>
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
            API Scraper Achievements
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="purple.500">E-commerce Leader Strengthens Market Position</Heading>
              <Text mb={4}>
                A top e-commerce platform adopted our API scraper to track pricing for over 12,000 products daily, 
                boosting conversions by 23% and revenue by 18% in their first quarter with automated repricing.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The instant insights from our API Scraper have redefined our pricing approach. We now respond to market trends in minutes, securing a clear competitive advantage."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="purple.500">Real Estate Startup Expands Reach</Heading>
              <Text mb={4}>
                A real estate tech company used our API scraper to compile listings from over 200 sources, growing their database by 340% and cutting data collection costs by 67% compared to manual methods.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Our API Scraper enabled us to scale our data coverage dramatically without expanding our team. We now offer the most extensive property search in our market, driven by automated integration."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Supported Integrations
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our API Scraper connects effortlessly with your existing tech stack and business tools
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
            Ready to Optimize Your API Connections?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start leveraging our API Scraper to unlock seamless API integrations 
            for your applications, analytics, and business strategies
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
              Schedule a Demo
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
              Reach Our Sales Team
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