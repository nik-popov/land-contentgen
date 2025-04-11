import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';

export const Route = createFileRoute("/_layout/solutions/market-research")({
  component: MarketResearchPage,
});

function MarketResearchPage() {
  const industryData = [
    { industry: "E-Commerce", growth: 28, useCases: "Pricing oversight, rival evaluation, item trends" },
    { industry: "Financial Services", growth: 32, useCases: "Investment perspectives, public sentiment, regulatory tracking" },
    { industry: "Healthcare", growth: 24, useCases: "Care patterns, study compilation, patient feedback" },
    { industry: "Real Estate", growth: 19, useCases: "Property data, value assessments, local insights" },
    { industry: "Travel & Hospitality", growth: 22, useCases: "Reservation trends, rate strategies, guest opinions" },
    { industry: "Manufacturing", growth: 16, useCases: "Supply chain insights, material costs, sector benchmarks" }
  ];

  const researchMethods = [
    { 
      title: "Rival Insights", 
      description: "Observe competitor sites for updates in offerings, pricing tactics, and marketing efforts instantly", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Customer Opinion Analysis", 
      description: "Collect feedback from reviews, social posts, and forums to gauge industry views", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sentiment.png" 
    },
    { 
      title: "Pattern Prediction", 
      description: "Monitor rising terms, product attributes, and sector shifts across vast data sources", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/trending.png" 
    },
    { 
      title: "Worldwide Market Reach", 
      description: "Tap into location-specific details and pricing via our globally spread proxy system", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/global.png" 
    }
  ];

  return (
    <>
      {/* Market Research Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Insight-Led Market Exploration
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Unlock the potential of web data extraction to revolutionize your market research efforts. 
            Our robust proxy network empowers you to gather, assess, and leverage industry data on a grand scale.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="orange.400">Reveal Market Potential</Heading>
              <Text>Spot new trends, overlooked niches, and expansion possibilities ahead of rivals by methodically pulling data from diverse industry channels.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="orange.400">Watch Competitors</Heading>
              <Text>Follow rival activities in product lines, pricing approaches, marketing initiatives, and industry placement with streamlined data retrieval.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="orange.400">Support Strategic Choices</Heading>
              <Text>Ground your business moves in thorough market insights instead of guesses, minimizing uncertainty and boosting trust in your path forward.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Industry Growth Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Sector-Tailored Research Uses
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="gray.50" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="orange.400">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Yearly Research Expansion
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
      
      {/* Research Methodologies Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Cutting-Edge Research Techniques
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our proxy network enables advanced research methods that were once out of reach at scale
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            {researchMethods.map((method, index) => (
              <Flex key={index} p={6} bg="white" borderRadius="md" boxShadow="sm" align="flex-start">
                <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                  {index === 0 && (
                    <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" alt="Rival Insights" />
                  )}
                  {index === 1 && (
                    <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Customer Opinion Analysis" />
                  )}
                  {index === 2 && (
                    <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Pattern Prediction" />
                  )}
                  {index === 3 && (
                    <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Worldwide Market Reach" />
                  )}
                </Box>
                <Box>
                  <Heading as="h3" size="md" mb={2} fontWeight="medium">{method.title}</Heading>
                  <Text color="gray.600">{method.description}</Text>
                </Box>
              </Flex>
            ))}
          </Grid>
        </Box>
      </Box>
      
      {/* Cloud Provider Links */}
      <Box px={16} py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Cloud Technology Allies
          </Heading>
          <Flex justify="center" gap={8} flexWrap="wrap">
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="AWS Logo" boxSize="60px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png" alt="GCP Logo" boxSize="60px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png" alt="Microsoft Azure Logo" boxSize="60px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ibm_cloud.png" alt="IBM Cloud Logo" boxSize="60px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/digital_ocean.png" alt="Digital Ocean Logo" boxSize="60px" />
          </Flex>
        </Box>
      </Box>
    
      {/* Case Study Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} py={15}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Market Exploration Achievements
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="orange.400">E-Commerce Giant Boosts Sales by 32%</Heading>
              <Text mb={4}>
                A top e-commerce firm leveraged our proxy network to study pricing trends across 50+ rival sites. 
                By refining their pricing tactics with these insights, they saw a 32% rise in sales conversions while 
                keeping profit margins strong.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The detailed industry data we accessed via the proxy system gave us unmatched clarity on pricing shifts, 
                enabling instant adjustments that greatly strengthened our market edge."
              </Text>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="orange.400">Finance Firm Spots Investment Potential</Heading>
              <Text mb={4}>
                A financial investment group used our data extraction tools to track innovation trends in growing tech fields. 
                This continuous analysis uncovered an early market trend, leading to an investment that yielded 47% returns in 18 months.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Systematically gathering and evaluating product details from countless firms provided a crucial early signal 
                of market trends that traditional approaches couldn’t uncover."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>

      <Box bg="red.50" px={4} py={16}>
        <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
          Business-Class Research Solutions
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
          Our proxy network syncs effortlessly with top-tier market analysis and intelligence tools
        </Text>
         
        <Flex justify="center" flexWrap="wrap" gap={10} mb={12} align="center">
          <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
            <Image src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Logo.png" alt="Tableau" maxHeight="80px" maxWidth="160px" objectFit="contain" />
          </Box>
          <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png" alt="Power BI" maxHeight="80px" maxWidth="160px" objectFit="contain" />
          </Box>
          <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
            <Image src="https://mediag.com/wp-content/uploads/2021/05/logo_google-data-studio_3.png" alt="Google Data Studio" maxHeight="80px" maxWidth="160px" objectFit="contain" />
          </Box>
          <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Looker.svg/1200px-Looker.svg.png" alt="Looker" maxHeight="80px" maxWidth="160px" objectFit="contain" />
          </Box>
          <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jupyter_notebook.png" alt="Jupyter Notebooks" maxHeight="80px" maxWidth="160px" objectFit="contain" />
          </Box>
        </Flex>
        
        <Box textAlign="center">
          <Button
            size="lg"
            bg="orange.400"
            color="white"
            _hover={{ bg: "orange.500" }}
            mb={4}
            as="a"
            href="/demo-request"
          >
            Explore Research Solution Demo
          </Button>
          <Text fontSize="sm" color="gray.600">
            Discover how our proxy network can elevate your market exploration efforts
          </Text>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default MarketResearchPage;