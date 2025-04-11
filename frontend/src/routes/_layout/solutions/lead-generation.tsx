import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/solutions/lead-generation")({
  component: LeadGenerationPage,
});

function LeadGenerationPage() {
  const leadGenSolutions = [
    { solution: "Prospect Identification", records: "500M+", accuracy: "98%", useCases: "Sales campaigns, precision marketing, account-focused strategies, market growth" },
    { solution: "Email Validation", records: "1B+", accuracy: "99.5%", useCases: "List refinement, bounce prevention, delivery enhancement, regulatory adherence" },
    { solution: "Business Insights", records: "85M+", accuracy: "97%", useCases: "Account strategy, prospect vetting, regional planning, ideal client targeting" },
    { solution: "Tech Profiling", records: "120M+", accuracy: "96%", useCases: "Product pitches, rival replacement, technology audits" },
    { solution: "Buyer Signals", records: "75M+", accuracy: "94%", useCases: "Purchase intent spotting, lead ranking, timely outreach" },
    { solution: "Data Enhancement API", records: "2B+", accuracy: "98.5%", useCases: "CRM syncing, process automation, data uniformity" }
  ];

  const leadGenFeatures = [
    { 
      title: "Worldwide B2B Network", 
      description: "Tap into over 500 million confirmed business profiles spanning 190+ nations, enriched with detailed company and tech insights", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Smart Data Enhancement", 
      description: "AI-driven tools that refine contact accuracy, update profiles, and estimate missing details continuously", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Instant Contact Checks", 
      description: "Cutting-edge validation for emails, phones, and social profiles to ensure you connect with the right people", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Smooth System Integration", 
      description: "Effortless connections with leading CRM, marketing, and sales tools for streamlined operations", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Lead Generation Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Prospect Building Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Elevate your marketing and sales efforts with precise, validated lead data and cutting-edge prospecting tools.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Prospect Finding</Heading>
              <Text>Locate key decision-makers from a pool of over 500 million verified contacts, searchable by role, company scale, sector, tech use, and more.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Purchase Intent Tracking</Heading>
              <Text>Pinpoint companies exploring solutions like yours with unique intent signals, enabling outreach at the ideal buying stage.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Profile Enrichment</Heading>
              <Text>Augment your prospect and client records with rich company, tech, and contact details, keeping your database fresh and reliable.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Why Our Prospecting Platform Excels
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">3.5x</StatNumber>
                <StatLabel>Lead Growth</StatLabel>
              </Stat>
              <Text>
                Clients often see their qualified leads triple within 90 days by targeting verified contacts effectively.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">42%</StatNumber>
                <StatLabel>Better Success Rates</StatLabel>
              </Stat>
              <Text>
                Businesses using our intent insights boost conversions by up to 42% by engaging active buyers.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">68%</StatNumber>
                <StatLabel>Time Efficiency</StatLabel>
              </Stat>
              <Text>
                Sales reps cut prospecting time by up to 68% with ready access to confirmed key contacts.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Lead Gen Solutions Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Full-Scope Prospecting Tools
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {leadGenSolutions.map((solution, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{solution.solution}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{solution.records}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Entries</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{solution.accuracy}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Precision</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Applications:</Text> {solution.useCases}
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
            Powerful Prospecting Features
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our smart prospecting platform fuses advanced analytics with the broadest B2B contact database available
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Buyer Intent" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Buyer Intent Insights</Heading>
                <Text color="gray.600">Spot companies researching your offerings using unique algorithms that track purchase behaviors</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Company Data" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Company Data</Heading>
                <Text color="gray.600">In-depth business profiles with company details, tech usage, funding records, and expansion cues</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Contact Validation" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Contact Validation</Heading>
                <Text color="gray.600">Thorough checks on emails, phones, and titles to ensure accuracy before reaching your team</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Tool Syncing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Tool Syncing</Heading>
                <Text color="gray.600">Direct links to Salesforce, HubSpot, Microsoft Dynamics, and more for seamless data flow</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Prospecting Platform Tools
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Data Integrity & Focus</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-Checked Contacts</Text> - Every contact verified via several independent sources</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Precision Filters</Text> - Search prospects with over 50 criteria like role, firm size, sector, and tech</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Client Match Profiling</Text> - Auto-identify prospects resembling your top clients</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Record Enhancement</Text> - Boost your CRM with comprehensive profile updates</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Live Updates</Text> - Instant alerts for job or company changes among contacts</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Sales Insights & Connectivity</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Purchase Signals</Text> - Detect firms exploring solutions in your field</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Opportunity Alerts</Text> - Notifications for funding, leadership shifts, growth, and more</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">CRM Linking</Text> - Two-way sync with your existing CRM setup</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">API Connectivity</Text> - Full database access for tailored applications</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Outreach Tools</Text> - Integration with top sales engagement platforms</Text>
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
            Prospecting Triumphs
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">SaaS Firm Triples Leads in 60 Days</Heading>
              <Text mb={4}>
                A mid-sized SaaS company used our prospect discovery and buyer signals to target firms researching their solutions. Focusing on verified decision-makers at the right time, they tripled their lead pipeline in 60 days and grew deal sizes by 27%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The data quality and intent insights revolutionized our lead efforts. We’re now engaging the right people at the perfect point in their buying process."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Agency Grows Clients by 65%</Heading>
              <Text mb={4}>
                A digital marketing firm harnessed our tech profiling and business insights to find companies using rival tools nearing renewal. By targeting these firms with tailored pain-point messaging, they boosted new client wins by 65%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Spotting firms with rival tools at renewal time has been a breakthrough for our sales team. We start talks at the ideal moment with spot-on messages."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Database Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Worldwide Contact Reach
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our extensive B2B network offers unmatched scope across sectors, regions, and business scales
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">North America</Text>
                <Text>195M+ Prospects</Text>
                <Text>12M+ Firms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Europe</Text>
                <Text>175M+ Prospects</Text>
                <Text>18M+ Firms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Asia-Pacific</Text>
                <Text>120M+ Prospects</Text>
                <Text>25M+ Firms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Latin America</Text>
                <Text>45M+ Prospects</Text>
                <Text>8M+ Firms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Middle East & Africa</Text>
                <Text>35M+ Prospects</Text>
                <Text>5M+ Firms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Global Total</Text>
                <Text>570M+ Prospects</Text>
                <Text>68M+ Firms</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Elevate Your Prospecting Game
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start leveraging our robust B2B platform to reach your perfect clients efficiently
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

export default LeadGenerationPage;