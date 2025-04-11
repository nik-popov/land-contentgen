import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/financial-data-collection")({
  component: FinancialDataCollectionPage,
});

function FinancialDataCollectionPage() {
  const dataCollectionFeatures = [
    { feature: "Market Data", sources: "150+", fields: "280+", useCases: "Price analysis, trading signals, volatility metrics, technical indicators" },
    { feature: "Company Financials", sources: "80+", fields: "350+", useCases: "Fundamental analysis, valuation models, industry benchmarking, financial health" },
    { feature: "Economic Indicators", sources: "60+", fields: "180+", useCases: "Macroeconomic research, forecasting, regional analysis, policy impact" },
    { feature: "Alternative Data", sources: "200+", fields: "420+", useCases: "Sentiment analysis, consumer behavior, ESG metrics, supply chain insights" },
    { feature: "Fund Performance", sources: "90+", fields: "210+", useCases: "Performance benchmarking, asset allocation, risk profiles, manager evaluation" },
    { feature: "Regulatory Filings", sources: "45+", fields: "320+", useCases: "Compliance monitoring, disclosure analysis, insider activity, ownership changes" }
  ];

  const platformFeatures = [
    { 
      title: "Comprehensive Financial Coverage", 
      description: "Collect data from global exchanges, regulatory sources, financial statements, and alternative data providers across all asset classes", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Real-time Market Intelligence", 
      description: "Access live market data with millisecond precision for equities, fixed income, commodities, FX, and derivatives worldwide", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Advanced Financial Analytics", 
      description: "Transform raw data into actionable insights with sophisticated financial models, indicators, and proprietary algorithms", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Historical Database Access", 
      description: "Leverage decades of clean, normalized financial data to identify patterns, conduct backtesting, and build predictive models", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Financial Data Collection Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Financial Data Collection
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Gather comprehensive financial intelligence from global markets 
            to power investment strategies, risk analysis, and business decisions.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Market & Securities Data</Heading>
              <Text>Access real-time and historical data for equities, fixed income, derivatives, FX, and commodities from exchanges worldwide. Track prices, volumes, spreads, and order book data with millisecond precision.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Fundamental & Company Data</Heading>
              <Text>Collect comprehensive financial statements, corporate actions, ownership details, and executive information. Extract structured data from earnings reports, presentations, and regulatory filings.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Alternative & ESG Data</Heading>
              <Text>Harness non-traditional data sources including social sentiment, satellite imagery, web traffic, supply chain information, and environmental, social, and governance metrics for unique investment insights.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Financial Data Collection
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">99.99%</StatNumber>
                <StatLabel>Data Accuracy Rate</StatLabel>
              </Stat>
              <Text>
                Our multi-layered validation ensures virtually perfect accuracy
                for all financial data with robust cleaning and normalization.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">24%</StatNumber>
                <StatLabel>Alpha Generation Improvement</StatLabel>
              </Stat>
              <Text>
                Financial firms using our data collection services report up to
                24% improvement in alpha generation for their investment strategies.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">10B+</StatNumber>
                <StatLabel>Daily Data Points</StatLabel>
              </Stat>
              <Text>
                Our platform processes over 10 billion financial data points
                daily across global markets, companies, and economic indicators.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Data Collection Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Comprehensive Financial Data Collection
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {dataCollectionFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{feature.sources}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Sources</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{feature.fields}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Data Fields</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {feature.useCases}
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
            Advanced Financial Data Platform
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our financial data collection platform combines cutting-edge technology with comprehensive global market coverage
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Low-Latency Architecture" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Low-Latency Architecture</Heading>
                <Text color="gray.600">High-performance infrastructure delivering microsecond response times for time-sensitive financial applications</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="NLP Processing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Advanced NLP Processing</Heading>
                <Text color="gray.600">Extract structured data from financial reports, news, transcripts, and filings using sophisticated language models</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Point-in-Time Database" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Point-in-Time Database</Heading>
                <Text color="gray.600">Access historical data as it appeared at any specific moment, eliminating survivorship bias and enabling accurate backtesting</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Enterprise API Infrastructure</Heading>
                <Text color="gray.600">Flexible API options including REST, WebSocket, and bulk data delivery with customizable formats and query capabilities</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Financial Data Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Data Collection & Processing</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-Source Integration</Text> - Collect data from exchanges, regulatory sources, news providers, and alternative data</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Real-time Processing</Text> - Stream financial data with microsecond latency for time-sensitive applications</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Corporate Action Adjustments</Text> - Automatic handling of splits, dividends, mergers, and other events</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Cleansing & Validation</Text> - Multi-layer verification for accuracy and completeness</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Entity Recognition & Mapping</Text> - Comprehensive identifiers and hierarchies for companies, securities, and funds</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Analytics & Delivery</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Financial Calculations</Text> - Pre-computed metrics, ratios, and indicators for immediate use</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom Data Feeds</Text> - Tailored delivery of specific datasets based on your requirements</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">API & SDK Access</Text> - Flexible integration options with comprehensive documentation</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Cloud Data Warehouse</Text> - Direct access to structured financial data in cloud storage</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Backtesting Environment</Text> - Integrated tools for testing strategies against historical data</Text>
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
            Financial Data Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Hedge Fund Improves Strategy Performance by 31%</Heading>
              <Text mb={4}>
                A quantitative hedge fund used our financial data platform to enhance their trading strategies 
                with alternative data integration. By combining traditional market data with consumer sentiment, 
                satellite imagery, and supply chain analysis, they were able to identify market signals earlier 
                than competitors. This comprehensive approach improved their strategy performance by 31% and 
                reduced drawdowns by 18% during volatile market conditions.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The breadth and quality of data transformed our investment process. The ability to seamlessly 
                integrate alternative data with traditional financial information gave us a significant edge in 
                identifying opportunities before they became apparent in the market."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Asset Manager Reduces Research Time by 85%</Heading>
              <Text mb={4}>
                A global asset management firm implemented our NLP-powered financial document analysis to 
                streamline their fundamental research process. The platform automatically extracted key metrics, 
                management sentiment, and forward-looking statements from thousands of earnings calls, SEC 
                filings, and analyst reports. This automation reduced research time by 85% while increasing 
                the breadth of companies covered by their analysts by over 300%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Our analysts now spend their time on high-value interpretation rather than manual data 
                collection. The NLP capabilities are remarkably accurate at extracting nuanced information 
                from financial documents, enabling us to cover far more companies with the same team."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Global Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Global Financial Data Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our financial data collection platform covers all major markets, asset classes, and data types worldwide
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Exchanges</Text>
                <Text>150+</Text>
                <Text>Global Markets</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Securities</Text>
                <Text>500K+</Text>
                <Text>Active Instruments</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Companies</Text>
                <Text>75K+</Text>
                <Text>Public & Private</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Historical Data</Text>
                <Text>50+ Years</Text>
                <Text>Time Series</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Alternative Data</Text>
                <Text>200+</Text>
                <Text>Sources</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Update Frequency</Text>
                <Text>Microsecond</Text>
                <Text>to Daily</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Transform Your Financial Intelligence
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start collecting comprehensive financial data and gain
            valuable market insights for your investment strategies
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

export default FinancialDataCollectionPage;