import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/web-scraping-guides")({
  component: WebScrapingGuidesPage,
});

function WebScrapingGuidesPage() {
  const guideCategories = [
    { category: "Starter Manuals", guides: 12, downloads: "50K+", useCases: "Web scraping basics, initial setup, core extraction principles" },
    { category: "Coding Languages", guides: 24, downloads: "85K+", useCases: "Scraping with Python, JavaScript, Ruby, PHP, Java, and Go" },
    { category: "Platform-Specific Tutorials", guides: 35, downloads: "120K+", useCases: "Scraping e-commerce, social platforms, travel sites, real estate, and job boards" },
    { category: "Expert Methods", guides: 18, downloads: "40K+", useCases: "Handling dynamic pages, AJAX calls, browser automation, evasion tactics" },
    { category: "Data Handling", guides: 15, downloads: "35K+", useCases: "Refining, analyzing, organizing, and saving extracted data" },
    { category: "Ethics & Compliance", guides: 8, downloads: "25K+", useCases: "Adhering to terms, managing request rates, responsible scraping" }
  ];

  const popularGuides = [
    { 
      title: "Python Web Extraction", 
      description: "In-depth tutorial on creating dependable scrapers in Python with tools like BeautifulSoup, Requests, Scrapy, and Selenium", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" 
    },
    { 
      title: "JavaScript Extraction Essentials", 
      description: "Master scraping interactive sites with JavaScript using Puppeteer, Cheerio, and Node.js tools for streamlined data collection", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" 
    },
    { 
      title: "Stealth Scraping Strategies", 
      description: "Proven methods to keep scrapers running smoothly, including session control, proxy rotation, and anti-block techniques", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Massive Data Harvesting", 
      description: "Scalable scraping frameworks for managing distributed systems, parallel tasks, and processing vast datasets", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Web Scraping Guides Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Web Extraction Tutorials & Resources
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Detailed materials to guide you through web scraping skills, from foundational knowledge to sophisticated large-scale setups.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Introductory Lessons</Heading>
              <Text>Kick off your scraping adventure with beginner-oriented tutorials covering HTML parsing basics, HTTP requests, and pulling structured data from sites.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Coding Blueprints</Heading>
              <Text>Practical, adaptable code snippets for scraping in Python, JavaScript, Ruby, and beyond—ready to tweak for your projects.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Pro-Level Skills</Heading>
              <Text>Elevate your expertise with lessons on tackling JavaScript-driven pages, dodging anti-scraping barriers, and crafting robust large-scale extractors.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            What Makes Our Extraction Tutorials Unique
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">100+</StatNumber>
                <StatLabel>In-Depth Lessons</StatLabel>
              </Stat>
              <Text>
                Explore over 100 thorough lessons and resources tackling every facet of web extraction techniques and tools.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">95%</StatNumber>
                <StatLabel>Success in Deployment</StatLabel>
              </Stat>
              <Text>
                Our tutorials boast a 95% deployment success rate, with detailed, tested steps for diverse setups and cases.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">350K+</StatNumber>
                <StatLabel>Monthly Accesses</StatLabel>
              </Stat>
              <Text>
                Over 350,000 coders grab our tutorials and snippets monthly to fuel their data harvesting efforts.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Guide Categories Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Tutorial Topics
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {guideCategories.map((category, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{category.category}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{category.guides}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Lessons</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{category.downloads}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Accesses</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Covers:</Text> {category.useCases}
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
            Top Tutorials
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our most sought-after resources, packed with actionable code and thorough instructions
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python Tutorial" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Python Web Extraction</Heading>
                <Text color="gray.600" mb={3}>In-depth tutorial on creating dependable scrapers in Python with tools like BeautifulSoup, Requests, Scrapy, and Selenium</Text>
                <Button leftIcon={<DownloadIcon />} colorScheme="" size="sm" variant="outline">Get Tutorial</Button>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="JavaScript Tutorial" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">JavaScript Extraction Essentials</Heading>
                <Text color="gray.600" mb={3}>Master scraping interactive sites with JavaScript using Puppeteer, Cheerio, and Node.js tools for streamlined data collection</Text>
                <Button leftIcon={<DownloadIcon />} colorScheme="" size="sm" variant="outline">Get Tutorial</Button>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Stealth Tutorial" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Stealth Scraping Strategies</Heading>
                <Text color="gray.600" mb={3}>Proven methods to keep scrapers running smoothly, including session control, proxy rotation, and anti-block techniques</Text>
                <Button leftIcon={<DownloadIcon />} colorScheme="" size="sm" variant="outline">Get Tutorial</Button>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Scale Tutorial" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Massive Data Harvesting</Heading>
                <Text color="gray.600" mb={3}>Scalable scraping frameworks for managing distributed systems, parallel tasks, and processing vast datasets</Text>
                <Button leftIcon={<DownloadIcon />} colorScheme="" size="sm" variant="outline">Get Tutorial</Button>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Guide Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            What Our Tutorials Offer
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Learning Materials</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Detailed Walkthroughs</Text> - Clear, illustrated steps for every process</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Ready-to-Deploy Code</Text> - Pre-tested snippets for instant use</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Varied Languages</Text> - Code samples in Python, JavaScript, Ruby, PHP, and more</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Thorough Insights</Text> - Insight into scraping mechanics beyond just code</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Top Practices</Text> - Proven standards for efficient, ethical extraction</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Tech Coverage</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Toolset Lessons</Text> - Guides on Scrapy, BeautifulSoup, Selenium, Puppeteer, and others</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Stealth Tactics</Text> - Sophisticated ways to bypass restrictions and stay operational</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Proxy Use</Text> - Effective integration of residential, datacenter, and rotating proxies</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Refinement</Text> - Methods for cleaning, structuring, and storing harvested data</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Compliance Tips</Text> - Responsible practices and legal considerations for scraping</Text>
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
            Coder Feedback
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">From Novice to Live in Two Weeks</Heading>
              <Text mb={4}>
                "I started with no scraping knowledge and picked up the Python extraction tutorial. Its clear steps were perfect. In two weeks, I built a live scraper tracking rival prices for our online store, cutting out tons of manual effort."
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                — Alex R., Online Retail Coder
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Fixed Our Scaling Challenges</Heading>
              <Text mb={4}>
                "The massive data harvesting tutorial was key to overhauling our scraping setup. Its distributed system designs let us jump from thousands to millions of pages daily, keeping reliability high and costs low."
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                — Jamie L., Senior Data Specialist
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Guide Statistics Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Tutorial Collection Snapshot
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our extensive set of extraction resources spans all modern data collection needs
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">Total Tutorials</Text>
                <Text>115+</Text>
                <Text>Detailed</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Code Snippets</Text>
                <Text>2,500+</Text>
                <Text>Deployable</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Languages</Text>
                <Text>8</Text>
                <Text>Coding Options</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Tools</Text>
                <Text>25+</Text>
                <Text>Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Monthly Additions</Text>
                <Text>12-15</Text>
                <Text>Fresh Content</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Community</Text>
                <Text>150K+</Text>
                <Text>Active Coders</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Become a Scraping Expert Now
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Access our free, in-depth tutorials to start crafting effective web extractors for your data needs
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
              Schedule Demo
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
              Begin Free Trial
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Related Resources */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Key Extraction Tools
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