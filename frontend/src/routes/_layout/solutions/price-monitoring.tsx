import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/solutions/price-monitoring")({
  component: PriceMonitoringPage,
});

function PriceMonitoringPage() {
  const industryData = [
    { industry: "E-Commerce", growth: 34, useCases: "Dynamic pricing, MAP compliance, competitor analysis" },
    { industry: "Retail", growth: 29, useCases: "Price optimization, promotion tracking, inventory planning" },
    { industry: "Travel", growth: 38, useCases: "Fare comparison, seasonal adjustments, booking patterns" },
    { industry: "Electronics", growth: 26, useCases: "Margin protection, new product releases, flash sales detection" },
    { industry: "Grocery", growth: 31, useCases: "Perishable goods pricing, regional variations, sales forecasting" },
    { industry: "Luxury Goods", growth: 23, useCases: "Brand positioning, exclusivity maintenance, grey market tracking" }
  ];

  const pricingStrategies = [
    { 
      title: "Dynamic Pricing", 
      description: "Automatically adjust your prices based on real-time competitor data, market demand, and inventory levels", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Competitive Matching", 
      description: "Set rules to match, beat, or maintain specific margins relative to competitor pricing", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" 
    },
    { 
      title: "MAP Compliance", 
      description: "Monitor distributor networks for minimum advertised price violations that could harm your brand", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    },
    { 
      title: "Price Elasticity Testing", 
      description: "Analyze how demand responds to price changes across different market segments and product categories", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" 
    }
  ];

  return (
    <>
      {/* Price Monitoring Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
             Price Monitoring Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Gain complete market pricing visibility with our scalable web scraping infrastructure.
            Monitor competitors, optimize your pricing strategy, and maximize profitability in real-time.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.500">Comprehensive Market Coverage</Heading>
              <Text>Track pricing across thousands of products and competitors simultaneously with our enterprise-grade proxy network and data extraction capabilities.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.500">Real-time Price Intelligence</Heading>
              <Text>Receive instant alerts on competitor price changes, promotional activities, and market shifts that impact your positioning and profitability.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.500">Actionable Pricing Insights</Heading>
              <Text>Transform raw pricing data into strategic decisions with advanced analytics, customizable dashboards, and automated reporting systems.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Automated Price Monitoring
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.500">23%</StatNumber>
                <StatLabel>Average Profit Increase</StatLabel>
              </Stat>
              <Text>
                Businesses implementing our price monitoring solutions report an average 23% increase in 
                profitability through optimized pricing strategies and reduced reaction time.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.500">87%</StatNumber>
                <StatLabel>Time Savings</StatLabel>
              </Stat>
              <Text>
                Reduce the time spent on manual price checking by up to 87%, allowing your team 
                to focus on strategic pricing decisions rather than data collection.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.500">5x</StatNumber>
                <StatLabel>Faster Response Time</StatLabel>
              </Stat>
              <Text>
                React to market changes up to 5 times faster than manual monitoring methods, 
                capturing opportunities and mitigating risks before competitors can respond.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Specific Price Monitoring Applications
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="red.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Implementation Growth
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
      
      {/* Pricing Strategies Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Advanced Pricing Strategies
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our price monitoring infrastructure enables sophisticated pricing approaches that drive revenue and protect margins
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://marketplace-assets.digitalocean.com/logos/sharklabs-kibana.svg" alt="Real-time Competitor Pricing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Real-time Competitor Pricing</Heading>
                <Text color="gray.600">Monitor competitor price changes in real-time and automatically adjust your pricing to maintain optimal market position</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Smart Margin Protection" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Smart Margin Protection</Heading>
                <Text color="gray.600">Implement intelligent pricing rules that prevent unnecessary discounting while maintaining competitive positioning</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Market Opportunity Alerts" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Market Opportunity Alerts</Heading>
                <Text color="gray.600">Get instant notifications when competitor stock shortages or pricing gaps create opportunities to capture market share</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" alt="Segmented Pricing Optimization" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Segmented Pricing Optimization</Heading>
                <Text color="gray.600">Customize pricing strategies for different market segments, regions, or customer types based on competitive intelligence</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
             Price Monitoring Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.500">Data Collection Capabilities</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">High-volume Extraction</Text> - Monitor millions of price points daily across thousands of sources</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Geo-specific Pricing</Text> - Access regional and location-based pricing through our global proxy network</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Dynamic Elements</Text> - Capture JavaScript-rendered prices and dynamic content on modern websites</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Attribute Tracking</Text> - Monitor not just prices but related attributes like promotions, stock levels, and ratings</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Scheduled Monitoring</Text> - Customize extraction frequency from real-time to scheduled intervals</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.500">Analytics & Integration</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Historical Tracking</Text> - Analyze pricing trends and patterns over time with comprehensive historical data</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Real-time Alerts</Text> - Receive instant notifications for critical price changes and competitive movements</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">API Access</Text> - Integrate pricing data directly into your existing systems via our robust API</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom Dashboards</Text> - Visualize pricing data through customizable dashboards and reporting tools</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated Actions</Text> - Set rule-based price adjustments and actions triggered by competitor movements</Text>
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
            Price Monitoring Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.500">Electronics Retailer Increases Margins by 18%</Heading>
              <Text mb={4}>
                A leading electronics retailer implemented our price monitoring solution to track 50,000+ SKUs across 
                35 competitor websites. By identifying optimal price points and strategic opportunities to avoid 
                unnecessary discounting, they increased profit margins by 18% while maintaining market share.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The granular insights from automated price monitoring allowed us to be surgical in our pricing 
                approach. We discovered we were unnecessarily undercutting competitors on 32% of our product catalog."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.500">Online Travel Agency Optimizes Dynamic Pricing</Heading>
              <Text mb={4}>
                An international online travel agency used our solution to monitor hotel and flight pricing across 
                global markets. By implementing real-time competitive tracking, they optimized their dynamic pricing 
                algorithm, resulting in a 24% increase in booking conversions and a 12% revenue boost.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The ability to track competitor prices across different regions simultaneously gave us unprecedented 
                insight into market dynamics and allowed us to adjust our offerings in real-time based on actual demand."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Integration Partners
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our price monitoring infrastructure integrates seamlessly with your existing business tools
          </Text>
          
          <Flex justify="center" flexWrap="wrap" gap={10} mb={12} align="center">
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png" alt="Shopify" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png" alt="Salesforce" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png" alt="Google Cloud" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Logo.png" alt="Tableau" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
          </Flex>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Optimize Your Pricing Strategy?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Schedule a personalized demo to see how our price monitoring solution can transform your 
            competitive positioning and drive profitability
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
              _hover={{ bg: "red.600" }}
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

export default PriceMonitoringPage;