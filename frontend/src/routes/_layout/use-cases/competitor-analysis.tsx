import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/competitor-analysis")({
  component: CompetitorAnalysisPage,
});

function CompetitorAnalysisPage() {
  const analysisFeatures = [
    { feature: "Content Analysis", metrics: "250+", frequency: "Daily", useCases: "Marketing strategy, content gaps, SEO optimization, messaging alignment" },
    { feature: "Product Comparison", metrics: "180+", frequency: "Real-time", useCases: "Feature analysis, pricing strategy, positioning, value proposition" },
    { feature: "Technology Stack", metrics: "350+", frequency: "Weekly", useCases: "Digital infrastructure, vendor selection, tech adoption, capability assessment" },
    { feature: "Digital Marketing", metrics: "210+", frequency: "Daily", useCases: "Ad spend, campaign strategy, channel performance, audience targeting" },
    { feature: "SEO Performance", metrics: "280+", frequency: "Daily", useCases: "Keyword rankings, traffic analysis, backlink profiles, content strategy" },
    { feature: "Market Position", metrics: "150+", frequency: "Monthly", useCases: "Market share, sentiment analysis, brand perception, competitive landscape" }
  ];

  const platformFeatures = [
    { 
      title: "Comprehensive Competitor Profiles", 
      description: "Build detailed profiles of your competitors including products, pricing, positioning, marketing strategies, and technology stack", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "AI-Powered Intelligence", 
      description: "Leverage advanced algorithms that continuously monitor competitor activities and provide actionable insights and recommendations", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Customizable Reporting", 
      description: "Generate tailored reports focusing on the competitive metrics that matter most to your business with automated delivery options", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Strategic Opportunity Detection", 
      description: "Automatically identify market gaps, weaknesses in competitor offerings, and strategic opportunities for your business", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Competitor Analysis Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Competitor Analysis Platform
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Gain actionable insights into your competitive landscape with
            comprehensive monitoring and analysis of your key competitors.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Market Intelligence</Heading>
              <Text>Monitor your competitors' activities across products, pricing, marketing, content, and technology. Track changes in real-time and identify emerging trends and threats in your industry.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Strategic Analysis</Heading>
              <Text>Transform competitive data into actionable insights with AI-powered analysis that identifies strengths, weaknesses, opportunities, and threats. Develop strategic responses to competitor moves.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Differentiation Opportunities</Heading>
              <Text>Discover gaps in competitor offerings and identify unique selling propositions that can differentiate your products and services. Build strategy based on verified market needs.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Competitor Analysis
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">32%</StatNumber>
                <StatLabel>Faster Market Response</StatLabel>
              </Stat>
              <Text>
                Organizations using our platform respond to competitive 
                threats and market changes 32% faster than industry average.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">24/7</StatNumber>
                <StatLabel>Continuous Monitoring</StatLabel>
              </Stat>
              <Text>
                Automated tracking of competitor activities ensures you 
                never miss important changes in your competitive landscape.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">40%</StatNumber>
                <StatLabel>More Strategic Opportunities</StatLabel>
              </Stat>
              <Text>
                Our customers identify 40% more strategic opportunities and
                gaps in the market compared to traditional analysis methods.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Analysis Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Comprehensive Analysis Areas
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {analysisFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{feature.metrics}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Metrics</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{feature.frequency}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Updates</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Analysis Focus:</Text> {feature.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Advanced Analysis Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our competitor analysis platform delivers comprehensive insights through sophisticated monitoring and AI-powered analytics
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Digital Footprint" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Digital Footprint Analysis</Heading>
                <Text color="gray.600">Comprehensive monitoring of competitors' online presence including websites, social media, content strategy, and digital marketing</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Market Positioning" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Market Positioning Analysis</Heading>
                <Text color="gray.600">Evaluate competitor positioning, messaging, target audiences, and value propositions to identify differentiation opportunities</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Product Intelligence" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Product Intelligence</Heading>
                <Text color="gray.600">Detailed analysis of competitor products including features, specifications, pricing, packaging, and customer feedback</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Strategy Insights" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Strategic Intelligence</Heading>
                <Text color="gray.600">Insights into competitors' business strategies, expansion plans, partnerships, acquisitions, and organizational changes</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Competitor Analysis Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Monitoring & Data Collection</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated Competitor Tracking</Text> - Continuous monitoring of competitor activities and changes</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-channel Coverage</Text> - Data collection from websites, social media, news, reviews, and job postings</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Change Detection</Text> - Automatic identification of significant changes in competitor strategies</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Technology Stack Analysis</Text> - Insights into competitor technology choices and digital infrastructure</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Marketing Campaign Tracking</Text> - Monitor competitor advertising, content, and promotional strategies</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Analysis & Strategic Insights</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Competitive Benchmarking</Text> - Side-by-side comparison against key competitors on critical metrics</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">SWOT Analysis</Text> - AI-powered identification of strengths, weaknesses, opportunities, and threats</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Gap Identification</Text> - Detection of unmet market needs and competitor blind spots</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Trend Analysis</Text> - Identification of emerging patterns and shifts in competitive landscape</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Strategic Recommendations</Text> - Actionable insights on how to respond to competitive threats and opportunities</Text>
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
            Competitive Analysis Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">SaaS Company Discovers Key Market Opportunity</Heading>
              <Text mb={4}>
                A B2B software provider used our competitor analysis platform to identify an unaddressed 
                pain point in their market. By monitoring competitor products, customer reviews, and 
                social media conversations, they discovered a significant feature gap that competitors 
                weren't addressing. This insight led to a new product feature that became their main 
                differentiator and drove a 35% increase in new customer acquisition.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The platform helped us see beyond basic feature comparison to truly understand the unmet 
                needs in our market. The strategic opportunity we discovered through comprehensive competitive 
                analysis completely changed our product roadmap and market positioning."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Retailer Anticipates Competitor Strategy Shift</Heading>
              <Text mb={4}>
                A national retail chain leveraged our platform's change detection capabilities to identify 
                early signals of a competitor's expansion strategy. By analyzing job postings, leadership 
                changes, and technology investments, they detected plans for a major digital transformation 
                months before it was publicly announced. This advance knowledge allowed them to accelerate 
                their own digital initiatives and minimize customer attrition when the competitor launched.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The early warning system provided by the platform was invaluable. Instead of being caught 
                off-guard by our competitor's new digital experience, we were prepared with our own enhanced 
                offerings. The 3-month head start completely changed the competitive outcome."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Analysis Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Comprehensive Analysis Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our competitor analysis platform monitors all aspects of your competitive landscape
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Digital Presence</Text>
                <Text>Websites</Text>
                <Text>Social Media</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Products</Text>
                <Text>Features</Text>
                <Text>Pricing</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Marketing</Text>
                <Text>Campaigns</Text>
                <Text>Messaging</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Content</Text>
                <Text>Strategy</Text>
                <Text>SEO</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Technology</Text>
                <Text>Stack</Text>
                <Text>Infrastructure</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Strategy</Text>
                <Text>Growth</Text>
                <Text>Partnerships</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Gain Your Competitive Edge
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start monitoring your competitors and transform insights
            into strategic advantages for your business
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="blue.600"
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

export default CompetitorAnalysisPage;