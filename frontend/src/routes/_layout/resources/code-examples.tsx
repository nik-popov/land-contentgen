import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/code-examples")({
  component: CodeExamplesPage,
});

function CodeExamplesPage() {
  const codeCategories = [
    { category: "Web Scraping", examples: 115, downloads: "280K+", useCases: "Data harvesting, automated extraction, price tracking, content compilation" },
    { category: "API Integration", examples: 85, downloads: "210K+", useCases: "Secure authentication, data fetching, webhook processing, rate management" },
    { category: "Proxy Management", examples: 62, downloads: "175K+", useCases: "IP switching, session persistence, location targeting, proxy validation" },
    { category: "Data Processing", examples: 78, downloads: "190K+", useCases: "Data cleansing, formatting, transformation, structured output" },
    { category: "Automation", examples: 94, downloads: "225K+", useCases: "Task scheduling, system monitoring, alerts, process automation" },
    { category: "Error Handling", examples: 45, downloads: "150K+", useCases: "Exception management, retry logic, fallback strategies, error logging" }
  ];

  const popularExamples = [
    { 
      title: "Online Store Scrapers", 
      description: "Pre-built scripts for gathering product details from leading e-commerce sites, including support for pagination, filters, and dynamic elements", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" 
    },
    { 
      title: "API Access Control", 
      description: "Sample implementations for securing APIs with methods like OAuth 2.0, JWT, API keys, and session-based authentication across multiple languages", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" 
    },
    { 
      title: "Proxy Switching Systems", 
      description: "Scripts for smart proxy rotation with persistent sessions, location-based targeting, and automated error detection", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Data Workflow Design", 
      description: "Complete examples of data pipelines for collecting, processing, transforming, and storing large datasets with monitoring and error handling", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" 
    }
  ];

  return (
    <>
      {/* Code Examples Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Ready-to-Use Code Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Grab, adapt, and deploy our proven code snippets for web scraping, API connections, proxy handling, and data transformation.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Scraping Solutions</Heading>
              <Text>Pre-built scripts for pulling data from e-commerce, social media, real estate, and job platforms, with robust error management.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">API Connectivity</Heading>
              <Text>Full examples for linking with popular APIs, covering authentication, data fetching, pagination, and webhook integration.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Proxy Operations</Heading>
              <Text>Advanced scripts for managing proxies, including IP rotation, session tracking, location targeting, and authentication.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            What Sets Our Code Apart
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">100%</StatNumber>
                <StatLabel>Real-World Tested</StatLabel>
              </Stat>
              <Text>
                All snippets are rigorously validated in live environments and frequently updated to ensure compatibility with platforms.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">7</StatNumber>
                <StatLabel>Languages Supported</StatLabel>
              </Stat>
              <Text>
                Available in Python, JavaScript, PHP, Ruby, Java, Go, and C# to fit seamlessly into your development stack.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">85%</StatNumber>
                <StatLabel>Time Savings</StatLabel>
              </Stat>
              <Text>
                Developers save up to 85% of their time by leveraging our snippets instead of starting from scratch.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Code Categories Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Explore Code Categories
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {codeCategories.map((category, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{category.category}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{category.examples}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Snippets</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{category.downloads}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Downloads</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Applications:</Text> {category.useCases}
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
            Top Code Snippets
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our most popular repositories, packed with ready-to-deploy code and detailed guides
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Online Store Scrapers" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Online Store Scrapers</Heading>
                <Text color="gray.600" mb={3}>Pre-built scripts for gathering product details from leading e-commerce sites, including support for pagination, filters, and dynamic elements</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="API Access Control" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">API Access Control</Heading>
                <Text color="gray.600" mb={3}>Sample implementations for securing APIs with methods like OAuth 2.0, JWT, API keys, and session-based authentication across multiple languages</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Proxy Switching" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Proxy Switching Systems</Heading>
                <Text color="gray.600" mb={3}>Scripts for smart proxy rotation with persistent sessions, location-based targeting, and automated error detection</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" alt="Data Workflows" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Data Workflow Design</Heading>
                <Text color="gray.600" mb={3}>Complete examples of data pipelines for collecting, processing, transforming, and storing large datasets with monitoring and error handling</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Code Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Why Our Code Stands Out
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Quality Benchmarks</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Production-Grade</Text> - Tested extensively in real-world scenarios</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Robust Error Handling</Text> - Comprehensive management of edge cases</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Clear Documentation</Text> - Detailed explanations for all code sections</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Flexible Structure</Text> - Modular components for easy customization</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Frequent Updates</Text> - Maintained to align with platform changes</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Technical Features</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-Language Support</Text> - Available in Python, JavaScript, PHP, Ruby, Java, Go, C#</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Framework Compatibility</Text> - Tailored for Django, Express, Laravel, and more</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Scalability Patterns</Text> - Guides for growing from prototypes to enterprise systems</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Deployment Support</Text> - Includes Docker setups and scripts for various platforms</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Testing Frameworks</Text> - Full test suites to ensure reliability</Text>
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
            Developer Wins
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Cut Development Time by 80%</Heading>
              <Text mb={4}>
                "The online store scraper scripts slashed our build time dramatically. Instead of wrestling with dynamic content and anti-scraping defenses, we tailored the provided code to our needs and had a prototype ready in days, not weeks."
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                — Sarah T., Lead Engineer at DataWorks
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Scaled Effortlessly to Enterprise</Heading>
              <Text mb={4}>
                "We began with the proxy switching script for a small task, but as demand grew, its modular design let us scale seamlessly. The code’s structure allowed us to handle millions of requests daily with minimal tweaks."
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                — Michael P., Developer at GrowthSys
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Code Library Stats Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Code Collection Snapshot
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our extensive library of ready-to-deploy snippets spans all key development needs
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">Total Snippets</Text>
                <Text>475+</Text>
                <Text>Deployable</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Languages</Text>
                <Text>7</Text>
                <Text>Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Frameworks</Text>
                <Text>18+</Text>
                <Text>Supported</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Monthly Downloads</Text>
                <Text>125K+</Text>
                <Text>Snippets</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Updates</Text>
                <Text>Weekly</Text>
                <Text>Refreshes</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Support</Text>
                <Text>Community</Text>
                <Text>+ Premium</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Speed Up Your Projects
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Dive into our full collection of battle-tested code snippets and kickstart your development today
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="red.500"
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
              _hover={{ bg: "red.700" }}
              as="a"
              href="https://buy.stripe.com/4gwg1C2by9Cs2Ry6op"
            >
              Try for Free
            </Button>
          </Flex>
        </Box>
      </Box>
      
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Built with Leading Technologies
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