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
      description: "Harness artificial intelligence to revolutionize your business operations and enhance strategic decision-making.",
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
      description: "Establish strong, scalable data systems to fuel your organization's analytics and AI endeavors.",
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
      description: "Upgrade your infrastructure with cloud-native designs optimized for efficiency and growth.",
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
      description: "Convert raw data into meaningful insights using sophisticated analytics and visualization tools.",
      solutions: [
        { name: "Business Intelligence Dashboards", path: "/solutions/bi-dashboards" },
        { name: "Data Visualization", path: "/solutions/data-visualization" },
        { name: "Self-Service Analytics", path: "/solutions/self-service-analytics" },
        { name: "IoT Analytics", path: "/solutions/iot-analytics" }
      ]
    }
  ];

  const featuredStats = [
    { value: "63%", label: "Average cost reduction", detail: "Our solutions typically cut operational expenses by 63% compared to traditional systems." },
    { value: "3.7x", label: "Performance improvement", detail: "Clients see data processing speeds increase by 3.7 times with our streamlined infrastructure." },
    { value: "89%", label: "Implementation success rate", detail: "89% of our projects meet deadlines and budget expectations." },
    { value: "12+", label: "Years of expertise", detail: "More than a decade delivering enterprise solutions across various sectors." }
  ];

  const industryApplications = [
    { name: "Financial Services", icon: "💰", use: "Fraud prevention, automated trading, risk evaluation, and compliance management" },
    { name: "Healthcare", icon: "🏥", use: "Patient outcome forecasting, diagnostic imaging, clinical support tools, and resource allocation" },
    { name: "Manufacturing", icon: "🏭", use: "Equipment maintenance prediction, quality assurance, supply chain efficiency, and IoT connectivity" },
    { name: "Retail", icon: "🛒", use: "Shopper behavior insights, stock management, personalized recommendations, and sales forecasting" },
    { name: "Transportation", icon: "🚚", use: "Route planning, vehicle fleet oversight, logistics coordination, and autonomous technology" },
    { name: "Energy", icon: "⚡", use: "Power grid enhancement, usage prediction, equipment upkeep, and renewable energy integration" }
  ];

  const testimonials = [
    {
      quote: "The data infrastructure solutions from this team have reshaped our capacity for data-informed decisions, boosting operational efficiency by 41% since rollout.",
      company: "Global Financial Institution",
      industry: "Banking"
    },
    {
      quote: "Their AI training system slashed our model creation timeline from months to weeks, with a 34% accuracy boost, revolutionizing our product development process.",
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
            Enterprise Technology Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Tailored technology offerings crafted to address your toughest business obstacles. 
            From robust data systems to cutting-edge AI, we provide the expertise and tools for your success.
          </Text>
          
          <Flex justify="center" mb={8}>
            <Button
              size="lg"
              colorScheme="purple"
              rightIcon={<ArrowForwardIcon />}
              as="a"
              href="/demo-request"
            >
              Schedule a Consultation
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Solution Categories Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={16} fontWeight="medium">
            Our Technology Offerings
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
            Benefits of Our Solutions
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
            Sector-Specific Applications
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
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Featured Solutions Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Highlighted Solutions
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <Box p={6} borderWidth="1px" borderColor="red.100" borderRadius="md" boxShadow="sm">
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
                  Speed up your machine learning projects with high-performance infrastructure tailored for AI training.
                </Text>
              </VStack>
            </Box>
            
            <Box p={6} borderWidth="1px" borderColor="red.100" borderRadius="md" boxShadow="sm">
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
                  Consolidate your data in a scalable, efficient warehouse built for advanced analytics and insights.
                </Text>
              </VStack>
            </Box>
            
            <Box p={6} borderWidth="1px" borderColor="red.100" borderRadius="md" boxShadow="sm">
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
                  Efficiently deploy and scale containerized applications with our enterprise-grade Kubernetes solutions.
                </Text>
              </VStack>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Implementation Process */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Our Deployment Approach
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
            <VStack p={6} bg="white" borderRadius="md" boxShadow="sm" align="flex-start" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">01</Text>
              <Heading as="h3" size="md" fontWeight="medium">
                Evaluation
              </Heading>
              <Text fontSize="sm" color="gray.600">
                In-depth review of your existing systems, workflows, and organizational needs.
              </Text>
            </VStack>
            
            <VStack p={6} bg="white" borderRadius="md" boxShadow="sm" align="flex-start" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">02</Text>
              <Heading as="h3" size="md" fontWeight="medium">
                Solution Planning
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Bespoke design and rollout strategy aligned with your unique business objectives.
              </Text>
            </VStack>
            
            <VStack p={6} bg="white" borderRadius="md" boxShadow="sm" align="flex-start" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">03</Text>
              <Heading as="h3" size="md" fontWeight="medium">
                Deployment
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Flexible implementation process with ongoing testing and validation at every stage.
              </Text>
            </VStack>
            
            <VStack p={6} bg="white" borderRadius="md" boxShadow="sm" align="flex-start" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">04</Text>
              <Heading as="h3" size="md" fontWeight="medium">
                Refinement
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Continuous performance tracking, upkeep, and enhancements to optimize your solution.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="purple.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Elevate Your Operations?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Consult with our experts to explore how our advanced technology 
            solutions can tackle your challenges and unlock new possibilities.
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
              Schedule a Consultation
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
              Reach Our Sales Team
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