import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/code-examples")({
  component: CodeExamplesPage,
});

function CodeExamplesPage() {
  const codeCategories = [
    { category: "Web Scraping", examples: 115, downloads: "280K+", useCases: "Data extraction, automated collection, price monitoring, content aggregation" },
    { category: "API Integration", examples: 85, downloads: "210K+", useCases: "Authentication flows, data retrieval, webhook handling, rate limiting" },
    { category: "Proxy Management", examples: 62, downloads: "175K+", useCases: "IP rotation, session handling, geographic targeting, proxy authentication" },
    { category: "Data Processing", examples: 78, downloads: "190K+", useCases: "Cleaning, normalization, transformation, structured data extraction" },
    { category: "Automation", examples: 94, downloads: "225K+", useCases: "Scheduled tasks, monitoring, notifications, workflow automation" },
    { category: "Error Handling", examples: 45, downloads: "150K+", useCases: "Robust exception handling, retries, fallbacks, logging systems" }
  ];

  const popularExamples = [
    { 
      title: "E-commerce Scrapers", 
      description: "Ready-to-use code for extracting product data from major e-commerce platforms with handling for pagination, filters, and dynamic content", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" 
    },
    { 
      title: "API Authentication", 
      description: "Implementation examples for various API authentication methods including OAuth 2.0, JWT, API keys, and session-based auth across different languages", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" 
    },
    { 
      title: "Proxy Rotation Systems", 
      description: "Code for implementing intelligent proxy rotation with session persistence, geolocation targeting, and automatic failure detection", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Data Pipeline Architecture", 
      description: "Examples of end-to-end data pipelines that collect, process, transform, and store data at scale with error handling and monitoring", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" 
    }
  ];

  return (
    <>
      {/* Code Examples Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Production-Ready Code Examples
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Copy, paste, and customize our battle-tested code snippets for web scraping,
            API integration, proxy management, and data processing.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Web Scraping Code</Heading>
              <Text>Ready-to-use scraping implementations for various websites and platforms. Extract data from e-commerce, social media, real estate, and job sites with robust error handling.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">API & Integration Code</Heading>
              <Text>Complete examples for integrating with popular APIs and services. Includes authentication, data retrieval, pagination handling, and webhook processing code.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Proxy Management Code</Heading>
              <Text>Sophisticated examples for proxy management including IP rotation, session handling, geo-targeting, and proxy authentication across different programming languages.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Why Our Code Examples Are Different
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">100%</StatNumber>
                <StatLabel>Production-Tested</StatLabel>
              </Stat>
              <Text>
                Every code example is battle-tested in production environments
                and regularly updated to maintain compatibility with target platforms.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">7</StatNumber>
                <StatLabel>Programming Languages</StatLabel>
              </Stat>
              <Text>
                Examples available in Python, JavaScript, PHP, Ruby, Java, Go, 
                and C# to seamlessly integrate with your existing tech stack.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">85%</StatNumber>
                <StatLabel>Development Time Saved</StatLabel>
              </Stat>
              <Text>
                Developers report saving up to 85% of development time by 
                starting with our code examples rather than building from scratch.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Code Categories Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Code Example Categories
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {codeCategories.map((category, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{category.category}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{category.examples}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Examples</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{category.downloads}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Downloads</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {category.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Popular Examples Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Most Popular Code Examples
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our most downloaded code repositories, featuring production-ready implementations and comprehensive documentation
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="E-commerce Scrapers" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">E-commerce Scrapers</Heading>
                <Text color="gray.600" mb={3}>Ready-to-use code for extracting product data from major e-commerce platforms with handling for pagination, filters, and dynamic content</Text>
               
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="API Authentication" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">API Authentication</Heading>
                <Text color="gray.600" mb={3}>Implementation examples for various API authentication methods including OAuth 2.0, JWT, API keys, and session-based auth across different languages</Text>
             
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Proxy Rotation" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Proxy Rotation Systems</Heading>
                <Text color="gray.600" mb={3}>Code for implementing intelligent proxy rotation with session persistence, geolocation targeting, and automatic failure detection</Text>
                
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" alt="Data Pipelines" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Data Pipeline Architecture</Heading>
                <Text color="gray.600" mb={3}>Examples of end-to-end data pipelines that collect, process, transform, and store data at scale with error handling and monitoring</Text>
              
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Code Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            What Makes Our Code Examples Exceptional
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Quality Standards</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Production-Ready</Text> - All code is thoroughly tested in real-world production environments</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Comprehensive Error Handling</Text> - Robust exception management for all edge cases</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Well-Documented</Text> - Detailed comments and explanations for every section of code</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Modular Design</Text> - Easily adaptable components that can be customized for your needs</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Regular Updates</Text> - Code is maintained and updated to work with the latest platform changes</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Implementation Features</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multiple Language Versions</Text> - Examples in Python, JavaScript, PHP, Ruby, Java, Go, and C#</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Framework Specific Code</Text> - Implementations for popular frameworks like Django, Express, Laravel</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Scaling Patterns</Text> - Examples of how to scale implementations from prototype to enterprise</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Deployment Configs</Text> - Docker configurations and deployment scripts for various environments</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Test Suites</Text> - Comprehensive test cases to ensure code reliability</Text>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Developer Stories Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Developer Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Reduced Development Time by 80%</Heading>
              <Text mb={4}>
                "The e-commerce scraper examples saved us weeks of development time. Instead of figuring out how to 
                handle dynamic content loading and anti-bot measures, we were able to adapt the existing code 
                to our specific needs. We had a working prototype in 2 days instead of the 2 weeks we had budgeted."
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                — Jason L., Tech Lead at DataMetrics
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Scaled to Enterprise Level Smoothly</Heading>
              <Text mb={4}>
                "We started with the proxy rotation example for a small project, but as our needs grew, the 
                modular design made it easy to scale up. The code was so well structured that we were able to 
                expand from handling hundreds of requests per day to millions with minimal modifications."
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                — Alex R., Senior Developer at ScaleTech
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Code Library Stats Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Code Library Overview
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our comprehensive collection of production-ready code examples covers all major use cases
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Total Examples</Text>
                <Text>475+</Text>
                <Text>Ready to Use</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Languages</Text>
                <Text>7</Text>
                <Text>Supported</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Frameworks</Text>
                <Text>18+</Text>
                <Text>Implementations</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Monthly Downloads</Text>
                <Text>125K+</Text>
                <Text>Code Examples</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Updates</Text>
                <Text>Weekly</Text>
                <Text>Maintenance</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Support</Text>
                <Text>Community</Text>
                <Text>+ Enterprise</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Accelerate Your Development
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Access our complete library of production-ready code examples
            and start building robust solutions immediately
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
          <Button
              size="lg"
              bg="white"
              color="blue.500"
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
              _hover={{ bg: "blue.700" }}
              as="a"
              href="https://cloud.roamingproxy.com/signup"
            >
              Start Free Trial
            </Button>
          </Flex>
        </Box>
      </Box>
      
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Powered by Popular Web Technologies
          </Heading>
          <Flex justify="center" gap={8} flexWrap="wrap">
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Selenium" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="AWS" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png" alt="Docker" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Kubernetes" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Redis" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" alt="MongoDB" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="PostgreSQL" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="REST API" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="JavaScript" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" alt="HTML" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" alt="CSS" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Node.js" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" alt="TypeScript" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rabbitmq.png" alt="RabbitMQ" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png" alt="GraphQL" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png" alt="Git" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Prometheus" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Grafana" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png" alt="Google Cloud Platform" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png" alt="Microsoft Azure" boxSize="50px" />
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default CodeExamplesPage;