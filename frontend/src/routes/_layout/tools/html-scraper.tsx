import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/html-scraper")({
  component: HTMLScraperPage,
});

function HTMLScraperPage() {
  const industryData = [
    { industry: "E-commerce", growth: 46, useCases: "Product information gathering, price tracking, competitor insights" },
    { industry: "Real Estate", growth: 39, useCases: "Property data collection, market pattern analysis, investment prospects" },
    { industry: "Travel & Hospitality", growth: 35, useCases: "Rate comparisons, review tracking, reservation optimization" },
    { industry: "Digital Marketing", growth: 42, useCases: "Content exploration, SEO evaluation, market research" },
    { industry: "Financial Research", growth: 31, useCases: "Financial data compilation, market movements, equity analysis" },
    { industry: "Job Market Analysis", growth: 29, useCases: "Job listings extraction, salary comparisons, skill trend monitoring" }
  ];

  const scraperFeatures = [
    { 
      title: "Headless Browser Integration", 
      description: "Retrieve data from JavaScript-heavy websites and single-page applications using our headless browser support", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" 
    },
    { 
      title: "Sophisticated CSS Selectors", 
      description: "Pinpoint specific elements with accuracy using advanced CSS and XPath selectors for precise data retrieval", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" 
    },
    { 
      title: "API Conversion", 
      description: "Turn any website into a tailored API with customizable JSON outputs to meet your unique requirements", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" 
    },
    { 
      title: "Data Quality Assurance", 
      description: "Guarantee high-quality data with automated type recognition, validation checks, and cleaning processes", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* HTML Scraper Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            HTML Scraper API Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Convert any website into a structured API with our robust HTML scraping platform. 
            Capture essential data, streamline processes, and embed web content into your systems.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Dependable Data Retrieval</Heading>
              <Text>Collect organized data from any site with adaptive selectors that adjust to layout changes. Our smart scraping manages dynamic content, authentication, and request limits.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Developer-Centric APIs</Heading>
              <Text>Seamlessly incorporate web data into your apps with RESTful APIs, webhooks, and tailored endpoints, delivered in JSON, CSV, or XML with thorough guides.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Robust Infrastructure</Heading>
              <Text>Expand your data collection with our high-capacity platform built for consistency, availability, and performance, supporting millions of requests with retries and caching.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Core Advantages of HTML Scraper APIs
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">85%</StatNumber>
                <StatLabel>Time Savings in Development</StatLabel>
              </Stat>
              <Text>
                Businesses leveraging our HTML scraper APIs cut data extraction development time by up to 85% compared to creating and managing custom scraping solutions.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">99.9%</StatNumber>
                <StatLabel>Service Availability</StatLabel>
              </Stat>
              <Text>
                Our high-performance infrastructure guarantees 99.9% uptime for your data needs, featuring automated failover, load distribution, and constant monitoring.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">3x</StatNumber>
                <StatLabel>Quicker Data Adoption</StatLabel>
              </Stat>
              <Text>
                Build data-driven solutions up to three times faster using our pre-built APIs, simplifying complex web scraping into straightforward API integrations.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Tailored Scraping for Key Industries
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="red.600">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Usage Expansion
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
            Powerful Scraping Tools
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our HTML scraper APIs deliver advanced extraction methods to tackle even the most intricate websites
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="Interactive Content Retrieval" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Interactive Content Retrieval</Heading>
                <Text color="gray.600">Capture data from JavaScript-driven sites, single-page apps, and dynamic elements using our headless browser technology</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Flexible Infrastructure" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Flexible Infrastructure</Heading>
                <Text color="gray.600">Process millions of requests with a cloud-based system that dynamically adjusts to your data collection demands</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Custom API Design" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Custom API Design</Heading>
                <Text color="gray.600">Build tailored endpoints to deliver precisely the data your app requires, with options for filtering, pagination, and formatting</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Tracking & Notifications" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Tracking & Notifications</Heading>
                <Text color="gray.600">Stay informed with alerts for data updates, extraction issues, or site changes through our robust monitoring tools</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Features of Our HTML Scraper API Platform
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Data Extraction Tools</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">CSS & XPath Targeting</Text> - Select specific elements accurately with standard or custom queries</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Dynamic Rendering</Text> - Retrieve data from interactive sites using headless browser capabilities</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Login Support</Text> - Access restricted content with cookie management, headers, and authentication flows</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-Page Navigation</Text> - Seamlessly crawl paginated content with tailored navigation rules</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Formatting</Text> - Refine, standardize, and organize extracted data into your desired structure</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Developer Tools</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">REST API Access</Text> - Connect with any tech stack via our standardized REST API with detailed documentation</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Real-Time Webhooks</Text> - Get instant alerts for new data availability or changes in scraping patterns</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">SDK Support</Text> - Accelerate integration with SDKs for Python, Node.js, PHP, Java, and Ruby</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">No-Code Builder</Text> - Design extraction rules using our intuitive visual tool without complex coding</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Detailed Guides</Text> - Start quickly with in-depth tutorials, sample code, and API references</Text>
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
            HTML Scraper Achievements
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">E-commerce Leader Boosts Market Position</Heading>
              <Text mb={4}>
                A top e-commerce platform adopted our HTML scraper APIs to track pricing for over 12,000 products daily. 
                Their automated pricing system drove a 23% rise in conversions and an 18% revenue increase in just one quarter.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The instant data from our HTML scraper APIs revolutionized our pricing approach. We now adapt to market shifts in minutes, securing a clear competitive edge."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Real Estate Startup Scales Coverage</Heading>
              <Text mb={4}>
                A real estate tech company used our HTML scraper APIs to compile listings from over 200 sources, growing their database by 340% and slashing data collection costs by 67% compared to manual methods.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Our HTML scraper APIs enabled us to expand our reach dramatically without adding engineers. We now provide the most extensive property search in our market, all powered by automated data."
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
            Our HTML scraper APIs work effortlessly with your existing tech stack and business applications
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
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Unlock Web Data with APIs?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin using our HTML scraper APIs to tap into structured web data 
            for your apps, analytics, and strategic insights
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="red.600"
              _hover={{ bg: "gray.100" }}
              as="a"
              href="/demo-request"
            >
              Book a Demo
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "gray.200" }}
              as="a"
              href="/contact-sales"
            >
              Reach Sales Team
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default HTMLScraperPage;