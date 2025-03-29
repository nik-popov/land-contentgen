import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';

export const Route = createFileRoute("/_layout/solutions/market-research")({
  component: MarketResearchPage,
});

function MarketResearchPage() {
  const industryData = [
    { industry: "E-Commerce", growth: 28, useCases: "Price monitoring, competitor analysis, product trends" },
    { industry: "Financial Services", growth: 32, useCases: "Investment insights, market sentiment, compliance monitoring" },
    { industry: "Healthcare", growth: 24, useCases: "Treatment trends, research aggregation, patient experience data" },
    { industry: "Real Estate", growth: 19, useCases: "Property listings, market valuations, neighborhood analytics" },
    { industry: "Travel & Hospitality", growth: 22, useCases: "Booking patterns, pricing strategies, customer reviews" },
    { industry: "Manufacturing", growth: 16, useCases: "Supply chain intelligence, raw material pricing, industry standards" }
  ];

  const researchMethods = [
    { 
      title: "Competitive Intelligence", 
      description: "Monitor competitor websites for product changes, pricing strategies, and promotional activities in real-time", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Consumer Sentiment Analysis", 
      description: "Gather reviews, social media mentions, and forum discussions to understand market perception", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sentiment.png" 
    },
    { 
      title: "Trend Forecasting", 
      description: "Track emerging keywords, product features, and industry movements across thousands of sources", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/trending.png" 
    },
    { 
      title: "Global Market Access", 
      description: "Access region-specific content and pricing with our geographically distributed proxy network", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/global.png" 
    }
  ];

  return (
    <>
      {/* Market Research Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Data-Driven Market Research
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Harness the power of web scraping to transform your market research capabilities. 
            Our enterprise proxy infrastructure enables you to collect, analyze, and act on market data at scale.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="orange.400">Uncover Market Opportunities</Heading>
              <Text>Identify emerging trends, untapped segments, and growth opportunities before your competitors by systematically collecting data from multiple market sources.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="orange.400">Monitor Competitors</Heading>
              <Text>Track competitor movements across product offerings, pricing strategies, promotional campaigns, and market positioning with automated data collection.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="orange.400">Validate Business Decisions</Heading>
              <Text>Base strategic decisions on comprehensive market data rather than assumptions, reducing risk and increasing confidence in your business direction.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Industry Growth Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Specific Market Research Applications
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="gray.50" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="orange.400">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Annual Research Growth
                  </StatHelpText>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {industry.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Research Methodologies Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Advanced Research Methodologies
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our proxy infrastructure powers sophisticated research approaches previously unavailable at scale
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            {researchMethods.map((method, index) => (
              <Flex key={index} p={6} bg="white" borderRadius="md" boxShadow="sm" align="flex-start">
                <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                  {index === 0 && (
                    <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" alt="Competitive Intelligence" />
                  )}
                  {index === 1 && (
                    <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Consumer Sentiment Analysis" />
                  )}
                  {index === 2 && (
                    <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Trend Forecasting" />
                  )}
                  {index === 3 && (
                    <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Global Market Access" />
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
 <Box px={16} py={16} bg="white" >
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Cloud Infrastructure Partners
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
         <Box py={16}  bg="blue.50" >
        <Box maxW="1200px" mx="auto" px={4} py={15}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Market Research Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="orange.400">E-Commerce Leader Increases Conversion by 32%</Heading>
              <Text mb={4}>
                A leading online retailer used our proxy infrastructure to analyze pricing patterns across 50+ competitor websites. 
                By optimizing their pricing strategy based on this data, they achieved a 32% increase in conversion rates while maintaining 
                healthy profit margins.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The comprehensive market data we gathered through the proxy network gave us unprecedented insight into pricing dynamics, 
                allowing us to make real-time adjustments that significantly improved our competitive position."
              </Text>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="orange.400">Investment Firm Identifies Market Opportunity</Heading>
              <Text mb={4}>
                An investment management company utilized our scraping infrastructure to monitor product development trends across 
                emerging technology sectors. This ongoing research led to early identification of a market shift, resulting in a 
                strategic investment that generated 47% returns within 18 months.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The ability to systematically collect and analyze product information from thousands of companies gave us a valuable 
                early indicator of market direction that would have been impossible to detect through traditional research methods."
              </Text>
            </Box>
          </Grid>
        </Box>
        </Box>
        <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Powered by Advanced Web Technologies
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

        <Box bg="blue.50" px={4} py={16}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Enterprise-Grade Research Tools
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our proxy infrastructure integrates seamlessly with leading market research and business intelligence platforms
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
              Request Research Solution Demo
            </Button>
            <Text fontSize="sm" color="gray.600">
              Learn how our proxy infrastructure can enhance your market research capabilities
            </Text>
          </Box>
        </Box>
              


      {/* Footer */}
      <Footer />
    </>
  );
}

export default MarketResearchPage;