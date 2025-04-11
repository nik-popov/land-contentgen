import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/solutions/lead-generation")({
  component: LeadGenerationPage,
});

function LeadGenerationPage() {
  const leadGenSolutions = [
    { solution: "Contact Discovery", records: "500M+", accuracy: "98%", useCases: "Sales outreach, targeted marketing, account-based selling, market expansion" },
    { solution: "Email Verification", records: "1B+", accuracy: "99.5%", useCases: "List cleaning, bounce reduction, deliverability improvement, compliance" },
    { solution: "Company Intelligence", records: "85M+", accuracy: "97%", useCases: "Account planning, lead qualification, territory mapping, ICP targeting" },
    { solution: "Technology Tracking", records: "120M+", accuracy: "96%", useCases: "Solution selling, competitive displacement, tech stack analysis" },
    { solution: "Intent Data", records: "75M+", accuracy: "94%", useCases: "Buying signal identification, prioritization, real-time engagement" },
    { solution: "Enrichment API", records: "2B+", accuracy: "98.5%", useCases: "CRM integration, workflow automation, data standardization" }
  ];

  const leadGenFeatures = [
    { 
      title: "Global B2B Database", 
      description: "Access to over 500 million verified business contacts across 190+ countries with comprehensive firmographic and technographic data", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "AI-Powered Enrichment", 
      description: "Machine learning algorithms that continuously improve contact data accuracy, enhance records, and predict missing information", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Real-time Verification", 
      description: "Advanced email, phone, and social verification technology that ensures you always reach the right person with valid contact information", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Seamless Integration", 
      description: "Native integrations with all major CRM, marketing automation, and sales engagement platforms for frictionless workflows", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Lead Generation Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Lead Generation Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Transform your sales and marketing efforts with high-quality,
            verified prospect data and intelligent lead generation solutions.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Contact Discovery</Heading>
              <Text>Find the right decision-makers with access to over 500 million verified business contacts. Identify prospects by job title, company size, industry, technology usage, and dozens of other targeting criteria.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Intent Monitoring</Heading>
              <Text>Identify accounts actively researching solutions like yours through proprietary buying intent signals. Engage prospects at the perfect moment when they're actively in-market for your solutions.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Data Enrichment</Heading>
              <Text>Enhance your existing customer and prospect records with comprehensive firmographic, technographic, and contact data. Fill gaps in your database and ensure information stays current and accurate.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Our Lead Generation Platform
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">3.5x</StatNumber>
                <StatLabel>Pipeline Growth</StatLabel>
              </Stat>
              <Text>
                Our customers typically see a 3.5x increase in qualified pipeline within 90 days 
                by targeting the right prospects with verified contact information.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">42%</StatNumber>
                <StatLabel>Higher Conversion Rates</StatLabel>
              </Stat>
              <Text>
                Organizations leveraging our intent data experience up to 42% higher 
                conversion rates by engaging accounts that are actively in-market.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">68%</StatNumber>
                <StatLabel>Time Saved</StatLabel>
              </Stat>
              <Text>
                Sales teams save up to 68% of their prospecting time by accessing
                verified decision-maker contacts instead of manual research.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Lead Gen Solutions Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Comprehensive Lead Generation
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {leadGenSolutions.map((solution, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{solution.solution}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{solution.records}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Records</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{solution.accuracy}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Accuracy</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {solution.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Lead Gen Features Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Advanced Lead Generation Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our intelligent lead generation platform combines advanced data science with the industry's largest B2B database
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Intent Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Intent Signal Analysis</Heading>
                <Text color="gray.600">Identify accounts actively researching solutions like yours through proprietary algorithms that analyze buying behavior</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Account Intelligence" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Account Intelligence</Heading>
                <Text color="gray.600">Comprehensive company data including firmographics, technographics, funding history, and growth signals</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Contact Verification" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Real-time Verification</Heading>
                <Text color="gray.600">Multi-point validation of email addresses, phone numbers, and job titles before they reach your sales team</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="CRM Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Seamless CRM Integration</Heading>
                <Text color="gray.600">Native connections to Salesforce, HubSpot, Microsoft Dynamics, and other platforms for automated data synchronization</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Lead Generation Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Data Quality & Targeting</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Triple-Verified Contacts</Text> - All contact data is verified through multiple independent sources</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Advanced Search</Text> - Find prospects using 50+ targeting criteria including job title, company size, industry, and technology</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Ideal Customer Profile Matching</Text> - Automatically find prospects that match your best customers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Enrichment</Text> - Enhance your existing CRM data with comprehensive profile information</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Real-time Updates</Text> - Automatic notifications when contacts change jobs or companies</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Sales Intelligence & Integration</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Buying Intent Signals</Text> - Identify accounts actively researching solutions in your category</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Sales Triggers</Text> - Alerts for funding rounds, executive changes, expansions, and other buying signals</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">CRM Synchronization</Text> - Bi-directional integration with your existing CRM system</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">API Access</Text> - Programmatic access to our entire database for custom applications</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Sales Engagement</Text> - Direct integration with popular sales engagement platforms</Text>
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
            Lead Generation Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">SaaS Company Triples Pipeline in 60 Days</Heading>
              <Text mb={4}>
                A mid-market SaaS provider leveraged our contact discovery and intent data to identify 
                and engage accounts actively researching solutions in their category. By focusing their 
                outreach on in-market accounts with verified decision-maker contacts, they tripled their 
                qualified pipeline in just 60 days and increased their average deal size by 27%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The quality of data and intent signals completely transformed our sales development process. 
                We're now having meaningful conversations with the right decision-makers at exactly the right 
                time in their buying journey."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Agency Increases Client Acquisition by 65%</Heading>
              <Text mb={4}>
                A digital marketing agency used our technology tracking and company intelligence tools 
                to identify businesses using competing solutions and approaching contract renewal. By 
                targeting companies at this critical decision point and highlighting specific pain points 
                in their existing solution, they increased their new client acquisition by 65%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The ability to identify companies using competitive solutions and approaching renewal 
                has been a game-changer for our new business team. We're now able to start conversations 
                at exactly the right moment with personalized, relevant messaging."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Database Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Global Database Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our comprehensive B2B database provides unparalleled coverage across industries, regions, and company sizes
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">North America</Text>
                <Text>195M+ Contacts</Text>
                <Text>12M+ Companies</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Europe</Text>
                <Text>175M+ Contacts</Text>
                <Text>18M+ Companies</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Asia-Pacific</Text>
                <Text>120M+ Contacts</Text>
                <Text>25M+ Companies</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Latin America</Text>
                <Text>45M+ Contacts</Text>
                <Text>8M+ Companies</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Middle East & Africa</Text>
                <Text>35M+ Contacts</Text>
                <Text>5M+ Companies</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Total Coverage</Text>
                <Text>570M+ Contacts</Text>
                <Text>68M+ Companies</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Transform Your Lead Generation
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our powerful B2B data platform and 
            connect with your ideal customers at scale
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

export default LeadGenerationPage;