import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/competitor-analysis")({
  component: CompetitorAnalysisPage,
});

function CompetitorAnalysisPage() {
  const analysisFeatures = [
    { feature: "Content Evaluation", metrics: "250+", frequency: "Daily", useCases: "Marketing tactics, content deficiencies, SEO enhancements, message consistency" },
    { feature: "Product Assessment", metrics: "180+", frequency: "Real-time", useCases: "Functionality review, pricing tactics, market stance, unique value" },
    { feature: "Tech Infrastructure", metrics: "350+", frequency: "Weekly", useCases: "Online systems, supplier choices, tech trends, capacity evaluation" },
    { feature: "Marketing Insights", metrics: "210+", frequency: "Daily", useCases: "Ad investments, campaign approaches, platform results, audience focus" },
    { feature: "SEO Metrics", metrics: "280+", frequency: "Daily", useCases: "Search rankings, visitor analysis, link networks, content planning" },
    { feature: "Market Standing", metrics: "150+", frequency: "Monthly", useCases: "Industry share, public opinion, brand image, rival overview" }
  ];

  const platformFeatures = [
    { 
      title: "In-Depth Rival Profiles", 
      description: "Create thorough overviews of competitors, covering offerings, pricing, market positioning, promotional tactics, and tech usage", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "AI-Driven Insights", 
      description: "Use cutting-edge algorithms to track rival actions continuously and deliver practical recommendations", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Flexible Report Customization", 
      description: "Produce personalized reports highlighting key rival metrics, with options for automated distribution", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Opportunity Spotting", 
      description: "Detect market openings, competitor vulnerabilities, and strategic possibilities for your company automatically", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Competitor Analysis Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Rival Insights Platform
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Unlock valuable knowledge about your industry rivals with 
            detailed tracking and evaluation of their activities.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Industry Awareness</Heading>
              <Text>Keep tabs on rival actions across products, pricing, promotions, content, and technology. Spot real-time shifts and emerging risks or patterns in your sector.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Tactical Insights</Heading>
              <Text>Turn rival data into strategic guidance with AI-driven analysis, pinpointing advantages, flaws, possibilities, and challenges. Craft responses to rival maneuvers.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Standout Opportunities</Heading>
              <Text>Uncover deficiencies in rival offerings and find distinctive strengths to set your products apart. Shape strategies based on proven market demands.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Core Advantages of Rival Insights
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">32%</StatNumber>
                <StatLabel>Quicker Industry Reaction</StatLabel>
              </Stat>
              <Text>
                Companies leveraging our platform react to rival moves and market shifts 
                32% faster than the sector norm.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">24/7</StatNumber>
                <StatLabel>Non-Stop Tracking</StatLabel>
              </Stat>
              <Text>
                Automated monitoring of rival activities ensures you stay ahead of 
                critical developments in your industry.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">40%</StatNumber>
                <StatLabel>Increased Tactical Openings</StatLabel>
              </Stat>
              <Text>
                Our users uncover 40% more tactical possibilities and market gaps 
                compared to conventional analysis tools.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Analysis Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Extensive Insight Domains
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {analysisFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{feature.metrics}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Indicators</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{feature.frequency}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Refresh Rate</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Focus Areas:</Text> {feature.useCases}
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
            Powerful Insight Tools
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our rival insights platform provides deep understanding through advanced tracking and AI-enhanced analysis
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Online Presence Review" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Online Presence Review</Heading>
                <Text color="gray.600">Thorough tracking of rivals’ digital footprint, including websites, social platforms, content approaches, and marketing efforts</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Industry Placement" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Industry Placement Analysis</Heading>
                <Text color="gray.600">Assess rival market placement, communication styles, target groups, and core benefits to spot standout possibilities</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Offering Insights" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Offering Insights</Heading>
                <Text color="gray.600">In-depth review of rival offerings, including capabilities, details, pricing structures, packaging, and user feedback</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Business Strategy" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Business Strategy Insights</Heading>
                <Text color="gray.600">Understanding of rivals’ operational tactics, growth plans, collaborations, acquisitions, and structural shifts</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Rival Insights Platform Capabilities
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Tracking & Data Gathering</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated Rival Monitoring</Text> - Ongoing observation of rival actions and updates</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Broad Channel Reach</Text> - Information pulled from websites, social networks, news outlets, reviews, and job listings</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Shift Detection</Text> - Instant recognition of notable changes in rival approaches</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Tech Usage Insights</Text> - Details on rival tech preferences and digital systems</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Promo Activity Monitoring</Text> - Track rival ads, content, and promotional efforts</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Evaluation & Tactical Guidance</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Rival Comparison</Text> - Direct matchup against key rivals on vital indicators</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">SWOT Breakdown</Text> - AI-assisted spotting of strengths, weaknesses, opportunities, and risks</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Opportunity Gaps</Text> - Identification of unmet demands and rival oversights</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Pattern Recognition</Text> - Spotting new trends and shifts in the rival landscape</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Actionable Advice</Text> - Practical suggestions to counter rival challenges and seize opportunities</Text>
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
            Rival Insights Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">SaaS Firm Uncovers Market Niche</Heading>
              <Text mb={4}>
                A B2B software company utilized our rival insights platform to pinpoint an overlooked 
                need in their industry. By tracking rival products, user reviews, and social discussions, 
                they identified a key feature gap unaddressed by competitors. This led to a new feature 
                that set them apart, boosting new customer sign-ups by 35%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The platform took us beyond simple feature comparisons to reveal true market gaps. 
                The opportunity we found reshaped our product direction and industry standing."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Retailer Predicts Rival Moves</Heading>
              <Text mb={4}>
                A nationwide retailer used our platform’s shift detection to catch early hints of a 
                rival’s growth strategy. By reviewing job openings, leadership transitions, and tech 
                investments, they foresaw a major digital overhaul months ahead of its reveal. This 
                foresight let them speed up their own digital upgrades, reducing customer loss when the rival launched.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The platform’s early alerts were a game-changer. Rather than being surprised by our 
                rival’s digital push, we were ready with upgraded services, gaining a critical edge."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Analysis Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Broad Insight Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our rival insights platform tracks every facet of your industry landscape
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">Online Reach</Text>
                <Text>Websites</Text>
                <Text>Social Channels</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Offerings</Text>
                <Text>Capabilities</Text>
                <Text>Pricing</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Promotion</Text>
                <Text>Campaigns</Text>
                <Text>Messages</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Content</Text>
                <Text>Approach</Text>
                <Text>SEO</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Tech</Text>
                <Text>Systems</Text>
                <Text>Framework</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Tactics</Text>
                <Text>Expansion</Text>
                <Text>Alliances</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Secure Your Industry Advantage
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin tracking your rivals and turn insights into 
            tactical wins for your organization
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
              _hover={{ bg: "red.700" }}
              as="a"
              href="https://cloud.roamingproxy.com/signup"
            >
              Try Free Now
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