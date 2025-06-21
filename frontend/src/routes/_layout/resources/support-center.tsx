import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, InputGroup, InputLeftElement, Divider, Tag, HStack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, SearchIcon, PhoneIcon, EmailIcon, ChatIcon, QuestionIcon, InfoIcon, TimeIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/support-center")({
  component: SupportCenterPage,
});

function SupportCenterPage() {
  const supportCategories = [
    { category: "Account Concerns", articles: 48, views: "125K+", topics: "Sign-in troubles, password recovery, account protection, payment inquiries, plan adjustments" },
    { category: "Data Harvesting", articles: 65, views: "180K+", topics: "Scraping glitches, data accuracy challenges, format adjustments, extraction methods, parsing errors" },
    { category: "API Connectivity", articles: 72, views: "210K+", topics: "Login failures, request caps, response issues, endpoint handling, webhook setup" },
    { category: "Proxy Operations", articles: 54, views: "155K+", topics: "Connectivity hiccups, IP cycling setup, location precision, proxy validation, session control" },
    { category: "Payments & Billing", articles: 36, views: "95K+", topics: "Plan options, payment types, billing records, refund requests, corporate invoicing" },
    { category: "Tech Challenges", articles: 83, views: "220K+", topics: "Fixing errors, boosting performance, compatibility fixes, setup assistance" }
  ];

  const popularArticles = [
    { 
      title: "Fixing Login Errors", 
      description: "Detailed steps to troubleshoot and resolve frequent login problems with our API and proxy tools", 
      views: "12.5K",
      category: "API Connectivity"
    },
    { 
      title: "Enhancing Data Gathering Speed", 
      description: "Top tips for speeding up and streamlining the collection of large data sets from websites and APIs", 
      views: "10.2K",
      category: "Data Harvesting"
    },
    { 
      title: "Controlling Costs & Limits", 
      description: "Guide to setting notifications, tracking usage, and managing billing to prevent surprise fees", 
      views: "9.7K",
      category: "Payments & Billing"
    },
    { 
      title: "Overcoming IP Restrictions", 
      description: "Thorough walkthrough for detecting and fixing IP blocks when using our proxy services", 
      views: "11.3K",
      category: "Proxy Operations"
    }
  ];

  const faqItems = [
    {
      question: "How can I recover my password?",
      answer: "To recover your password, select 'Forgot Password' on the login screen. Input your email, and we’ll send a reset link. Follow the email’s steps to set a new password. For security, reset links expire after 24 hours."
    },
    {
      question: "Which payment options are available?",
      answer: "We support major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and wire transfers for yearly enterprise plans. Crypto payments can be arranged for annual subscriptions upon request. All transactions are secured via our PCI-compliant system."
    },
    {
      question: "How do I switch to a higher plan?",
      answer: "Upgrade your plan anytime in Account Settings > Subscription. Click 'Modify Plan,' pick your new tier, and the cost difference will adjust based on your current cycle’s remaining days. New features activate instantly upon upgrade."
    },
    {
      question: "Is a refund possible if I’m unhappy?",
      answer: "Yes, we provide a 14-day refund policy for new subscribers. If unsatisfied, reach out to our support within 14 days of purchase for a full refund. Monthly plan refunds process within 3-5 business days."
    },
    {
      question: "What IP cycling choices do proxies offer?",
      answer: "Options include session-based cycling, timed rotations (set intervals), and per-request switches. Adjust these in the dashboard under Proxy Settings > Rotation Preferences. Enterprise clients get custom cycling options."
    }
  ];

  return (
    <>
      {/* Support Center Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Support & Help Center
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8} maxW="800px" mx="auto">
            Discover solutions to your queries with our detailed guides, how-tos, and expert assistance.
          </Text>
          
          {/* <Box maxW="650px" mx="auto" mb={10}>
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input 
                placeholder="Look up assistance articles, how-tos, and FAQs" 
                bg="white" 
                focusBorderColor="red.500"
                borderRadius="md"
                boxShadow="sm"
              />
            </InputGroup>
          </Box> */}
          
          {/* <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Guides</Heading>
              <Text>In-depth manuals, API docs, and tech resources covering all our offerings.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">How-To Resources</Heading>
              <Text>Clear, step-by-step instructions and tips to maximize our platform’s potential.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Expert Help</Heading>
              <Text>Reach our team via live chat, email, or book a session with a tech specialist.</Text>
            </VStack>
          </Flex> */}
        </Box>
      </Box>
      
      {/* Support Options Section */}
      {/* <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            How Can We Assist You Today?
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }} gap={10} mt={10}>
            <VStack align="center" spacing={5} p={8} borderRadius="md" borderWidth="1px" borderColor="gray.200">
              <Box bg="red.50" p={4} borderRadius="full">
                <ChatIcon boxSize={8} color="red.600" />
              </Box>
              <Heading as="h3" size="md">Instant Chat Help</Heading>
              <Text textAlign="center">
                Chat live with our tech support crew for quick answers to your queries.
              </Text>
              <Stat textAlign="center">
                <StatLabel>Typical Response Time</StatLabel>
                <StatNumber color="red.600">2 min</StatNumber>
              </Stat>
              <Button colorScheme="red" variant="solid" width="full">
                Begin Chat
              </Button>
            </VStack>
            
            <VStack align="center" spacing={5} p={8} borderRadius="md" borderWidth="1px" borderColor="gray.200">
              <Box bg="red.50" p={4} borderRadius="full">
                <EmailIcon boxSize={8} color="red.600" />
              </Box>
              <Heading as="h3" size="md">Email Assistance</Heading>
              <Text textAlign="center">
                Send us a detailed inquiry or issue and get a thorough reply from our support staff.
              </Text>
              <Stat textAlign="center">
                <StatLabel>Typical Response Time</StatLabel>
                <StatNumber color="red.600">4 hours</StatNumber>
              </Stat>
              <Button colorScheme="red" variant="solid" width="full">
                Email Us
              </Button>
            </VStack>
            
            <VStack align="center" spacing={5} p={8} borderRadius="md" borderWidth="1px" borderColor="gray.200">
              <Box bg="red.50" p={4} borderRadius="full">
                <PhoneIcon boxSize={8} color="red.600" />
              </Box>
              <Heading as="h3" size="md">Book a Call</Heading>
              <Text textAlign="center">
                Arrange a call with a tech expert for tailored help with tricky problems.
              </Text>
              <Stat textAlign="center">
                <StatLabel>Offered To</StatLabel>
                <StatNumber color="red.600">Premium</StatNumber>
              </Stat>
              <Button colorScheme="red" variant="solid" width="full">
                Schedule Now
              </Button>
            </VStack>
          </Grid>
        </Box>
      </Box> */}
      
      {/* Support Categories Section */}
      {/* <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Help Topics
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {supportCategories.map((category, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{category.category}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{category.articles}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Resources</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{category.views}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Monthly Reads</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Key Issues:</Text> {category.topics}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box> */}
      
      {/* Popular Articles Section */}
      {/* <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Top Support Resources
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Quick fixes for frequent queries and challenges from our most-viewed help resources
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            {popularArticles.map((article, index) => (
              <Flex key={index} p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
                <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                  <QuestionIcon boxSize="30px" color="red.600" />
                </Box>
                <Box>
                  <Flex justify="space-between" align="center" mb={2}>
                    <Heading as="h3" size="md" fontWeight="medium">{article.title}</Heading>
                    <Tag size="sm" colorScheme="red" ml={2}>{article.category}</Tag>
                  </Flex>
                  <Text color="gray.600" mb={3}>{article.description}</Text>
                  <HStack spacing={8}>
                    <Flex align="center">
                      <InfoIcon color="gray.400" mr={2} />
                      <Text fontSize="sm" color="gray.500">{article.views} reads</Text>
                    </Flex>
                    <Button colorScheme="red" size=" CainSm" variant="outline">View Resource</Button>
                  </HStack>
                </Box>
              </Flex>
            ))}
          </Grid>
        </Box>
      </Box> */}
      
      {/* Customer Support Stats */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Support Highlights
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            We’re dedicated to top-notch support, offering swift responses and high satisfaction
          </Text>
          
          <Box bg="red.50" p={8} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              <VStack>
                <Heading as="h3" size="lg" color="red.600">96%</Heading>
                <Text fontWeight="medium">User Happiness</Text>
                <Text fontSize="sm" color="gray.600">From customer reviews</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="red.600">2 min</Heading>
                <Text fontWeight="medium">Chat Reply</Text>
                <Text fontSize="sm" color="gray.600">Average delay</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="red.600">4 hrs</Heading>
                <Text fontWeight="medium">Email Reply</Text>
                <Text fontSize="sm" color="gray.600">Within work hours</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="red.600">24/7</Heading>
                <Text fontWeight="medium">Guides Access</Text>
                <Text fontSize="sm" color="gray.600">Always open</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* FAQ Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Common Queries Answered
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Fast responses to our most-asked support questions
          </Text>
          
          <Box bg="white" borderRadius="md" boxShadow="sm" overflow="hidden">
            <Accordion allowToggle>
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} borderColor="gray.200">
                  <h3>
                    <AccordionButton py={4} px={6} _expanded={{ bg: "red.50", color: "red.600" }}>
                      <Box flex="1" textAlign="left" fontWeight="medium" fontSize="md">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} px={6} bg="gray.50">
                    <Text color="gray.700">{faq.answer}</Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
          
          <Box textAlign="center" mt={8}>
            <Button 
              colorScheme="red" 
              variant="outline" 
              as="a"
              href="/resources/faq"
              size="lg"
            >
              See All FAQs
            </Button>
          </Box>
        </Box>
      </Box>
      
      {/* Support Hours Section */}
      {/* <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            <Box>
              <Heading as="h2" size="xl" mb={6} fontWeight="medium">
                Help Availability & Hours
              </Heading>
              <Text fontSize="lg" mb={8}>
                We offer various help channels with differing schedules to ensure support when you need it.
              </Text>
              
              <List spacing={5}>
                <ListItem display="flex" alignItems="center">
                  <Box as={TimeIcon} color="red.600" mr={4} />
                  <Box>
                    <Text fontWeight="bold">Instant Chat Assistance</Text>
                    <Text color="gray.600">Monday to Friday, 9 AM - 8 PM (EST)</Text>
                  </Box>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <Box as={TimeIcon} color="red.600" mr={4} />
                  <Box>
                    <Text fontWeight="bold">Email Help</Text>
                    <Text color="gray.600">24/7 - Replies may delay outside business hours</Text>
                  </Box>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <Box as={TimeIcon} color="red.600" mr={4} />
                  <Box>
                    <Text fontWeight="bold">Phone Assistance</Text>
                    <Text color="gray.600">Monday to Friday, 10 AM - 6 PM (EST)</Text>
                    <Text color="gray.600">For Premium and Enterprise users</Text>
                  </Box>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <Box as={TimeIcon} color="red.600" mr={4} />
                  <Box>
                    <Text fontWeight="bold">Urgent Help</Text>
                    <Text color="gray.600">24/7 for major issues (Enterprise plans)</Text>
                  </Box>
                </ListItem>
              </List>
            </Box>
            
            <Box bg="red.50" p={8} borderRadius="md">
              <Heading as="h3" size="lg" mb={6} fontWeight="medium">
                Need Help Right Away?
              </Heading>
              <Text mb={6}>
                Our crew is ready to tackle your issues swiftly and effectively.
              </Text>
              
              <VStack spacing={4} align="stretch">
                <Button leftIcon={<EmailIcon />} colorScheme="red" variant="outline" size="lg">
                  Submit Email Inquiry
                </Button>
                <Divider my={2} />
                <Button leftIcon={<PhoneIcon />} colorScheme="red" variant="outline" size="md">
                  +1 ‪(833) 435-3873‬
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box> */}
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Still Searching for Answers?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Our support crew is here to tackle any queries or problems not found in our guides
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
              href="https://buy.stripe.com/4gwg1C2by9Cs2Ry6op"
            >
              Try Free Today
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "red.700" }}
              leftIcon={<InfoIcon />}
            >
              Explore Guides
            </Button> */}
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default SupportCenterPage;