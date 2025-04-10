import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/solutions/seo-monitoring")({
  component: SEOMonitoringPage,
});

function SEOMonitoringPage() {
  const seoTools = [
    { tool: "Rank Tracking", metrics: "5,000+", keywords: "Unlimited", useCases: "Position monitoring, SERP analysis, competitor benchmarking" },
    { tool: "Technical SEO Audit", metrics: "250+", keywords: "N/A", useCases: "Site health checks, crawlability issues, performance optimization" },
    { tool: "Content Analysis", metrics: "125+", keywords: "Unlimited", useCases: "Content gaps, semantic relevance, topic optimization" },
    { tool: "Backlink Monitoring", metrics: "75+", keywords: "N/A", useCases: "Link profile analysis, toxic link detection, outreach opportunities" },
    { tool: "Local SEO Tracking", metrics: "180+", keywords: "Unlimited", useCases: "Local rank monitoring, GMB performance, review management" },
    { tool: "SEO Reporting", metrics: "350+", keywords: "All", useCases: "White-labeled reports, automated delivery, customizable dashboards" }
  ];

  const seoFeatures = [
    { 
      title: "Comprehensive Rank Tracking", 
      description: "Monitor unlimited keywords across desktop and mobile with location-specific results for any country, region, or city worldwide", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Actionable Site Audits", 
      description: "Identify and fix critical technical SEO issues with our comprehensive site audit tool that prioritizes the most impactful improvements", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Competitor Intelligence", 
      description: "Track your competitors' rankings, content strategy, and backlink profiles to identify opportunities and threats in your market", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "AI-Powered Insights", 
      description: "Get actionable recommendations and predictive analytics powered by machine learning algorithms that identify trends before they impact your traffic", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* SEO Monitoring Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            SEO Monitoring Platform
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Track, analyze, and improve your search engine visibility with our
            comprehensive SEO monitoring and optimization suite.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Rank Tracking</Heading>
              <Text>Monitor your rankings for unlimited keywords across all major search engines. Track daily position changes with location-specific results for any country, region, or city worldwide.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Technical Audits</Heading>
              <Text>Automatically identify and fix critical technical SEO issues with our comprehensive site audit tool. Crawl your entire website, detect errors, and get prioritized recommendations for improvement.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Competitive Analysis</Heading>
              <Text>Benchmark your performance against competitors with side-by-side comparisons of rankings, content, and backlinks. Identify gaps in your strategy and uncover new opportunities.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Our SEO Platform
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">47%</StatNumber>
                <StatLabel>Average Ranking Improvement</StatLabel>
              </Stat>
              <Text>
                Our customers typically see a 47% improvement in target keyword rankings 
                within 90 days of implementing recommendations from our platform.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">83%</StatNumber>
                <StatLabel>Time Saved on Reporting</StatLabel>
              </Stat>
              <Text>
                SEO professionals using our automated reporting tools save up to 83% of the time 
                previously spent on manual data collection and analysis.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">35%</StatNumber>
                <StatLabel>Organic Traffic Growth</StatLabel>
              </Stat>
              <Text>
                Companies leveraging our platform's insights experience an average 35% increase 
                in organic search traffic within 6 months.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* SEO Tools Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Comprehensive SEO Toolkit
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {seoTools.map((tool, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{tool.tool}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{tool.metrics}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Metrics</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{tool.keywords}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Keywords</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {tool.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* SEO Features Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Advanced SEO Monitoring Features
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our comprehensive SEO platform delivers actionable insights and competitive intelligence to improve your search visibility
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="SERP Features" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">SERP Feature Tracking</Heading>
                <Text color="gray.600">Monitor all rich search results including featured snippets, knowledge panels, local packs, and video results for complete SERP visibility</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Content Optimization" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">AI Content Optimization</Heading>
                <Text color="gray.600">Get AI-powered recommendations for improving your content with semantic analysis and competitor content comparisons</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Backlink Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Comprehensive Backlink Analysis</Heading>
                <Text color="gray.600">Track your complete backlink profile with metrics for authority, relevance, and toxic links that could harm your rankings</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Reporting API" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Advanced Reporting</Heading>
                <Text color="gray.600">Create customizable, white-label reports with automated delivery and API access for integration with your existing tools</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            SEO Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Rank Tracking & SERP Analysis</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Daily Rank Updates</Text> - Track daily position changes for all your target keywords</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Location-Specific Results</Text> - Monitor rankings for any country, region, city, or postal code</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Mobile vs. Desktop</Text> - Compare performance across different devices and identify optimization opportunities</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">SERP Feature Tracking</Text> - Monitor featured snippets, knowledge panels, local packs, and other rich results</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Competitor Benchmarking</Text> - Track how you stack up against competitors for your target keywords</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Technical SEO & Content Analysis</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Comprehensive Site Audits</Text> - Identify and fix technical issues affecting your search visibility</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Content Gap Analysis</Text> - Discover keywords your competitors rank for that you don't</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Page Speed Insights</Text> - Track Core Web Vitals and get recommendations for improving page performance</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Backlink Monitoring</Text> - Track new and lost backlinks with quality metrics and outreach opportunities</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">AI Content Recommendations</Text> - Get topic and semantic optimization suggestions to improve relevance</Text>
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
            SEO Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">E-commerce Site Increases Organic Traffic by 156%</Heading>
              <Text mb={4}>
                A mid-sized e-commerce retailer used our SEO platform to identify critical technical issues 
                and content gaps affecting their product pages. After implementing our recommendations, they 
                saw a 156% increase in organic traffic and a 94% improvement in rankings for high-value 
                commercial keywords within 5 months.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The technical audit tool identified critical issues we had no idea were hurting our rankings. 
                The prioritized recommendations made it easy to tackle the most impactful problems first, and 
                the results exceeded our expectations."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">SaaS Company Dominates Featured Snippets</Heading>
              <Text mb={4}>
                A B2B software provider leveraged our SERP feature tracking and content optimization tools 
                to target featured snippets for high-intent keywords. By optimizing their content based on our 
                AI recommendations, they captured featured snippets for 43% of their target keywords, leading 
                to a 78% increase in organic conversions.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The ability to track and target SERP features changed our entire content strategy. The 
                platform showed us exactly what was working for featured snippets in our industry, and 
                the AI content recommendations made optimization straightforward."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Coverage Statistics Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Comprehensive SEO Monitoring
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our platform provides complete visibility into your search performance across all major search engines and locations
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Search Engines</Text>
                <Text>Google</Text>
                <Text>Bing, Yahoo & 7 more</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Countries</Text>
                <Text>190+</Text>
                <Text>Local Results</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Keywords</Text>
                <Text>Unlimited</Text>
                <Text>No Restrictions</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Technical Checks</Text>
                <Text>250+</Text>
                <Text>Site Audit Points</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Backlink Data</Text>
                <Text>40+ Trillion</Text>
                <Text>Links Indexed</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">SERP Features</Text>
                <Text>25+</Text>
                <Text>Types Tracked</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Transform Your SEO Strategy
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our powerful SEO monitoring platform and 
            elevate your search visibility to new heights
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
      
      
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default SEOMonitoringPage;