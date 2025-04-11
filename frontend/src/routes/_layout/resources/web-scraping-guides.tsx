import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/web-scraping-guides")({
  component: WebScrapingGuidesPage,
});

function WebScrapingGuidesPage() {
  const guideCategories = [
    { category: "Beginner Guides", guides: 12, downloads: "50K+", useCases: "Introduction to web scraping, setup tutorials, basic scraping concepts" },
    { category: "Programming Languages", guides: 24, downloads: "85K+", useCases: "Python, JavaScript, Ruby, PHP, Java, and Go scraping implementations" },
    { category: "Site-Specific Guides", guides: 35, downloads: "120K+", useCases: "E-commerce, social media, travel, real estate, and job site scraping" },
    { category: "Advanced Techniques", guides: 18, downloads: "40K+", useCases: "Dynamic content, AJAX, headless browsers, anti-detection methods" },
    { category: "Data Processing", guides: 15, downloads: "35K+", useCases: "Cleaning, parsing, structuring, and storing scraped data effectively" },
    { category: "Legal & Ethical", guides: 8, downloads: "25K+", useCases: "Terms of service compliance, rate limiting, ethical scraping practices" }
  ];

  const popularGuides = [
    { 
      title: "Web Scraping with Python", 
      description: "Comprehensive guide to building reliable scrapers with Python using libraries like BeautifulSoup, Requests, Scrapy, and Selenium", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" 
    },
    { 
      title: "JavaScript Scraping Masterclass", 
      description: "Learn how to scrape dynamic websites using JavaScript with Puppeteer, Cheerio, and other Node.js libraries for efficient data extraction", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" 
    },
    { 
      title: "Avoiding Blocks & Captchas", 
      description: "Advanced techniques for maintaining scraper reliability, managing sessions, rotating proxies, and avoiding detection and blocks", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Large-Scale Data Extraction", 
      description: "Enterprise-level scraping architecture for handling distributed scrapers, parallel processing, and managing millions of data points", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Web Scraping Guides Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Web Scraping Guides & Tutorials
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Comprehensive resources to help you master web scraping techniques,
            from beginner concepts to advanced enterprise-scale implementations.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Beginner Tutorials</Heading>
              <Text>Start your web scraping journey with our beginner-friendly guides. Learn the fundamentals of HTML parsing, making HTTP requests, and extracting structured data from websites.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Programming Recipes</Heading>
              <Text>Ready-to-use code examples and recipes for web scraping in Python, JavaScript, Ruby, and other popular languages. Copy, paste, and adapt for your specific needs.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Advanced Techniques</Heading>
              <Text>Take your scraping skills to the next level with guides on handling JavaScript-heavy sites, bypassing anti-bot measures, and building resilient enterprise-scale scrapers.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Why Our Web Scraping Guides Stand Out
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">100+</StatNumber>
                <StatLabel>Detailed Tutorials</StatLabel>
              </Stat>
              <Text>
                Access our library of over 100 comprehensive tutorials and guides
                covering every aspect of web scraping technology and methodology.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">95%</StatNumber>
                <StatLabel>Implementation Success Rate</StatLabel>
              </Stat>
              <Text>
                Our guides have a 95% success rate for implementation, with
                step-by-step instructions tested across various environments and scenarios.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">350K+</StatNumber>
                <StatLabel>Monthly Downloads</StatLabel>
              </Stat>
              <Text>
                Join over 350,000 developers who download our guides and
                code samples each month to power their data extraction projects.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Guide Categories Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Guide Categories
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {guideCategories.map((category, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{category.category}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{category.guides}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Guides</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{category.downloads}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Downloads</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Includes:</Text> {category.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Popular Guides Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Most Popular Guides
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our most downloaded resources, featuring practical code examples and comprehensive tutorials
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python Guide" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Web Scraping with Python</Heading>
                <Text color="gray.600" mb={3}>Comprehensive guide to building reliable scrapers with Python using libraries like BeautifulSoup, Requests, Scrapy, and Selenium</Text>
                <Button leftIcon={<DownloadIcon />} colorScheme="blue" size="sm" variant="outline">Download Guide</Button>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="JavaScript Guide" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">JavaScript Scraping Masterclass</Heading>
                <Text color="gray.600" mb={3}>Learn how to scrape dynamic websites using JavaScript with Puppeteer, Cheerio, and other Node.js libraries for efficient data extraction</Text>
                <Button leftIcon={<DownloadIcon />} colorScheme="blue" size="sm" variant="outline">Download Guide</Button>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Anti-Detection Guide" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Avoiding Blocks & Captchas</Heading>
                <Text color="gray.600" mb={3}>Advanced techniques for maintaining scraper reliability, managing sessions, rotating proxies, and avoiding detection and blocks</Text>
                <Button leftIcon={<DownloadIcon />} colorScheme="blue" size="sm" variant="outline">Download Guide</Button>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Enterprise Scraping" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Large-Scale Data Extraction</Heading>
                <Text color="gray.600" mb={3}>Enterprise-level scraping architecture for handling distributed scrapers, parallel processing, and managing millions of data points</Text>
                <Button leftIcon={<DownloadIcon />} colorScheme="blue" size="sm" variant="outline">Download Guide</Button>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Guide Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            What's Inside Our Guides
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Educational Content</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Step-by-Step Tutorials</Text> - Clear instructions with screenshots and explanations for every stage</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Production-Ready Code</Text> - Fully tested code examples that you can implement immediately</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multiple Languages</Text> - Examples in Python, JavaScript, Ruby, PHP, and other popular languages</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Deep Explanations</Text> - Understanding of how web scraping works, not just copy-paste solutions</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Best Practices</Text> - Industry standards for efficient, ethical, and reliable data extraction</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Technical Coverage</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Library & Framework Tutorials</Text> - Scrapy, BeautifulSoup, Selenium, Puppeteer, and more</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Anti-Detection Strategies</Text> - Advanced techniques for avoiding blocks and maintaining access</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Proxy Integration</Text> - How to effectively use residential, datacenter, and rotating proxies</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Processing</Text> - Techniques for cleaning, structuring, and storing scraped data</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Legal Guidelines</Text> - Ethical scraping practices and legal considerations for data collection</Text>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Testimonials Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Developer Testimonials
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">From Beginner to Production in Two Weeks</Heading>
              <Text mb={4}>
                "I had zero scraping experience when I started with the Python web scraping guide. 
                The step-by-step approach was exactly what I needed. Within two weeks, I had a production-ready 
                scraper monitoring competitor prices for our e-commerce business, saving us countless hours of manual work."
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                — Michael T., E-commerce Developer
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Solved Our Enterprise Scalability Issues</Heading>
              <Text mb={4}>
                "The large-scale data extraction guide was instrumental in helping us redesign our scraping 
                infrastructure. The distributed architecture patterns they outlined helped us scale from 
                processing thousands to millions of pages daily while maintaining high reliability and low costs."
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                — Sarah K., Lead Data Engineer
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Guide Statistics Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Resource Library Overview
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our comprehensive collection of web scraping resources covers all aspects of modern data extraction
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">Total Guides</Text>
                <Text>115+</Text>
                <Text>Comprehensive</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Code Examples</Text>
                <Text>2,500+</Text>
                <Text>Ready to Use</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Languages</Text>
                <Text>8</Text>
                <Text>Programming</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Libraries</Text>
                <Text>25+</Text>
                <Text>Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Monthly Updates</Text>
                <Text>12-15</Text>
                <Text>New Resources</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">User Base</Text>
                <Text>150K+</Text>
                <Text>Active Developers</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Master Web Scraping Today
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Download our free comprehensive guides and start building
            powerful web scrapers for your data extraction needs
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
              Request Demo
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "red.700" }}
              as="a"
              href="https://cloud.roamingproxy.com/signup"
            >
              Start Free Trial
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Related Resources */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Essential Web Scraping Tools
          </Heading>
          <Flex justify="center" gap={8} flexWrap="wrap">
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Node.js" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Selenium" boxSize="50px" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="Chrome" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/puppeteer.png" alt="Puppeteer" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="RESTful APIs" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png" alt="Postman" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" alt="MongoDB" boxSize="50px" />
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default WebScrapingGuidesPage;