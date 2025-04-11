import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, ArrowForwardIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/solutions/enterprise")({
  component: SolutionsPage,
});

function SolutionsPage() {
  const solutionCategories = [
    {
      title: "AI & Machine Learning",
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tensorflow.png",
      description: "Leverage the power of artificial intelligence to transform your business operations and decision-making processes.",
      solutions: [
        { name: "AI Training Infrastructure", path: "/solutions/training-ai", highlight: true },
        { name: "Predictive Analytics", path: "/solutions/predictive-analytics" },
        { name: "Computer Vision Systems", path: "/solutions/computer-vision" },
        { name: "Natural Language Processing", path: "/solutions/nlp" }
      ]
    },
    {
      title: "Data Infrastructure",
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png",
      description: "Build robust, scalable data foundations that power your organization's analytics and AI initiatives.",
      solutions: [
        { name: "Data Warehousing", path: "/solutions/data-warehousing" },
        { name: "Real-time Data Streaming", path: "/solutions/data-streaming" },
        { name: "Data Lake Solutions", path: "/solutions/data-lakes" },
        { name: "ETL & Data Pipelines", path: "/solutions/etl-pipelines" }
      ]
    },
    {
      title: "Cloud Services",
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png",
      description: "Modernize your infrastructure with cloud-native architectures designed for performance and scalability.",
      solutions: [
        { name: "Cloud Migration", path: "/solutions/cloud-migration" },
        { name: "Kubernetes Orchestration", path: "/solutions/kubernetes" },
        { name: "Serverless Computing", path: "/solutions/serverless" },
        { name: "Multi-Cloud Strategy", path: "/solutions/multi-cloud" }
      ]
    },
    {
      title: "Analytics & Business Intelligence",
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png",
      description: "Transform raw data into actionable insights with advanced analytics and visualization platforms.",
      solutions: [
        { name: "Business Intelligence Dashboards", path: "/solutions/bi-dashboards" },
        { name: "Data Visualization", path: "/solutions/data-visualization" },
        { name: "Self-Service Analytics", path: "/solutions/self-service-analytics" },
        { name: "IoT Analytics", path: "/solutions/iot-analytics" }
      ]
    }
  ];

  const featuredStats = [
    { value: "63%", label: "Average cost reduction", detail: "Our solutions typically reduce operational costs by 63% compared to legacy systems" },
    { value: "3.7x", label: "Performance improvement", detail: "Clients experience 3.7x faster data processing with our optimized infrastructure" },
    { value: "89%", label: "Implementation success rate", detail: "89% of our projects are delivered on time and within budget" },
    { value: "12+", label: "Years of expertise", detail: "Over a decade of enterprise solution delivery across industries" }
  ];

  const industryApplications = [
    { name: "Financial Services", icon: "💰", use: "Fraud detection, algorithmic trading, risk assessment, and regulatory compliance" },
    { name: "Healthcare", icon: "🏥", use: "Patient outcome prediction, medical imaging, clinical decision support, and resource optimization" },
    { name: "Manufacturing", icon: "🏭", use: "Predictive maintenance, quality control, supply chain optimization, and IoT integration" },
    { name: "Retail", icon: "🛒", use: "Customer behavior analysis, inventory management, recommendation engines, and demand forecasting" },
    { name: "Transportation", icon: "🚚", use: "Route optimization, fleet management, logistics planning, and autonomous systems" },
    { name: "Energy", icon: "⚡", use: "Grid optimization, consumption forecasting, predictive maintenance, and renewable integration" }
  ];

  const testimonials = [
    {
      quote: "The data infrastructure solutions implemented by this team transformed our ability to make data-driven decisions. We've seen a 41% increase in operational efficiency since deployment.",
      company: "Global Financial Institution",
      industry: "Banking"
    },
    {
      quote: "Their AI training platform reduced our model development time from months to weeks while improving accuracy by 34%. This has been transformative for our product development cycle.",
      company: "Tech Innovator",
      industry: "SaaS"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Enterprise Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Comprehensive technology solutions designed to solve your most complex business challenges.
            From data infrastructure to advanced AI, we deliver the expertise and technology you need to succeed.
          </Text>
          
          <Flex justify="center" mb={8}>
            <Button
              size="lg"
              colorScheme="purple"
              rightIcon={<ArrowForwardIcon />}
              as="a"
              href="/demo-request"
            >
              Request a Consultation
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Solution Categories Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={16} fontWeight="medium">
            Our Solution Portfolio
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(2, 1fr)" }} gap={10}>
            {solutionCategories.map((category, index) => (
              <Box key={index} p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
                <Flex align="center" mb={6}>
                  <Image src={category.icon} alt={category.title} boxSize="40px" mr={4} />
                  <Heading as="h3" size="lg" fontWeight="medium">
                    {category.title}
                  </Heading>
                </Flex>
                
                <Text mb={6} color="gray.700">
                  {category.description}
                </Text>
                
                <List spacing={3}>
                  {category.solutions.map((solution, sIndex) => (
                    <ListItem key={sIndex} display="flex" alignItems="baseline">
                      <ListIcon as={ArrowForwardIcon} color="purple.500" />
                      <Link 
                        href='/contact-sales'
                        color={solution.highlight ? "purple.500" : "gray.700"}
                        fontWeight={solution.highlight ? "bold" : "normal"}
                        _hover={{ color: "purple.600", textDecoration: "underline" }}
                      >
                        {solution.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            The Impact of Our Solutions
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {featuredStats.map((stat, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm" height="100%">
                <Stat mb={4}>
                  <StatNumber fontSize="4xl" color="purple.500">{stat.value}</StatNumber>
                  <StatLabel fontSize="lg" fontWeight="medium">{stat.label}</StatLabel>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  {stat.detail}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry Applications
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryApplications.map((industry, index) => (
              <Flex key={index} p={6} bg="gray.50" borderRadius="md" boxShadow="sm" height="100%" direction="column">
                <Text fontSize="3xl" mb={3}>
                  {industry.icon}
                </Text>
                <Heading as="h3" size="md" mb={4} fontWeight="medium">
                  {industry.name}
                </Heading>
                <Text fontSize="sm" color="gray.600" flex="1">
                  {industry.use}
                </Text>
                {/* <Link 
                  href={`/industries/${industry.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  color="purple.500" 
                  fontWeight="medium"
                  mt={4}
                  _hover={{ textDecoration: "underline" }}
                >
                  Learn more
                </Link> */}
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Featured Solutions Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Featured Solutions
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <Box p={6} borderWidth="1px" borderColor="blue.100" borderRadius="md" boxShadow="sm">
              <VStack align="flex-start" spacing={4}>
                <Image 
                  src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tensorflow.png" 
                  alt="AI Training" 
                  boxSize="50px" 
                />
                <Heading as="h3" size="md" fontWeight="medium">
                  AI Training Infrastructure
                </Heading>
                <Text color="gray.600">
                  Accelerate your machine learning initiatives with specialized infrastructure designed for high-performance AI training.
                </Text>
                {/* <Link 
                  href="/solutions/training-ai" 
                  color="purple.500" 
                  fontWeight="medium"
                  mt={2}
                  _hover={{ textDecoration: "underline" }}
                >
                  Learn more →
                </Link> */}
              </VStack>
            </Box>
            
            <Box p={6} borderWidth="1px" borderColor="blue.100" borderRadius="md" boxShadow="sm">
              <VStack align="flex-start" spacing={4}>
                <Image 
                  src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" 
                  alt="Data Warehouse" 
                  boxSize="50px" 
                />
                <Heading as="h3" size="md" fontWeight="medium">
                  Enterprise Data Warehousing
                </Heading>
                <Text color="gray.600">
                  Centralize your data assets in a scalable, high-performance warehouse optimized for analytics and business intelligence.
                </Text>
                {/* <Link 
                  href="/solutions/data-warehousing" 
                  color="purple.500" 
                  fontWeight="medium"
                  mt={2}
                  _hover={{ textDecoration: "underline" }}
                >
                  Learn more →
                </Link> */}
              </VStack>
            </Box>
            
            <Box p={6} borderWidth="1px" borderColor="blue.100" borderRadius="md" boxShadow="sm">
              <VStack align="flex-start" spacing={4}>
                <Image 
                  src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
                  alt="Kubernetes" 
                  boxSize="50px" 
                />
                <Heading as="h3" size="md" fontWeight="medium">
                  Kubernetes Orchestration
                </Heading>
                <Text color="gray.600">
                  Deploy and manage containerized applications at scale with our enterprise Kubernetes solutions.
                </Text>
                {/* <Link 
                  href="/solutions/kubernetes" 
                  color="purple.500" 
                  fontWeight="medium"
                  mt={2}
                  _hover={{ textDecoration: "underline" }}
                >
                  Learn more →
                </Link> */}
              </VStack>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Implementation Process */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Our Implementation Process
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
            <VStack p={6} bg="white" borderRadius="md" boxShadow="sm" align="flex-start" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">01</Text>
              <Heading as="h3" size="md" fontWeight="medium">
                Assessment
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Comprehensive analysis of your current infrastructure, processes, and business requirements.
              </Text>
            </VStack>
            
            <VStack p={6} bg="white" borderRadius="md" boxShadow="sm" align="flex-start" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">02</Text>
              <Heading as="h3" size="md" fontWeight="medium">
                Solution Design
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Custom architecture and implementation plan tailored to your specific business needs.
              </Text>
            </VStack>
            
            <VStack p={6} bg="white" borderRadius="md" boxShadow="sm" align="flex-start" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">03</Text>
              <Heading as="h3" size="md" fontWeight="medium">
                Implementation
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Agile deployment methodology with continuous testing and validation throughout the process.
              </Text>
            </VStack>
            
            <VStack p={6} bg="white" borderRadius="md" boxShadow="sm" align="flex-start" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">04</Text>
              <Heading as="h3" size="md" fontWeight="medium">
                Optimization
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Ongoing performance monitoring, maintenance, and continuous improvement of your solution.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="purple.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Transform Your Business?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Speak with our solution architects to discover how our enterprise-grade technology 
            solutions can help you overcome challenges and capitalize on new opportunities.
          </Text>
          
          <Flex direction={{ base: "column", md: "row" }} justify="center" gap={6} align="center" maxW="600px" mx="auto">
            <Button
              size="lg"
              bg="white"
              color="purple.600"
              _hover={{ bg: "gray.100" }}
              width={{ base: "full", md: "auto" }}
              as="a"
              href="/demo-request"
            >
              Request Consultation
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "purple.500" }}
              width={{ base: "full", md: "auto" }}
              as="a"
              href="/contact-sales"
            >
              Contact Sales
            </Button>
          </Flex>
        </Box>
      </Box>
      
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default SolutionsPage;