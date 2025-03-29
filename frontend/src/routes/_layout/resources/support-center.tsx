import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, InputGroup, InputLeftElement, Divider, Tag, HStack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, SearchIcon, PhoneIcon, EmailIcon, ChatIcon, QuestionIcon, InfoIcon, TimeIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/support-center")({
  component: SupportCenterPage,
});

function SupportCenterPage() {
  const supportCategories = [
    { category: "Account Issues", articles: 48, views: "125K+", topics: "Login problems, password reset, account security, billing questions, subscription management" },
    { category: "Data Collection", articles: 65, views: "180K+", topics: "Web scraping errors, data quality issues, format conversion, extraction techniques, parsing problems" },
    { category: "API Integration", articles: 72, views: "210K+", topics: "Authentication issues, rate limits, response errors, endpoint usage, webhook configuration" },
    { category: "Proxy Services", articles: 54, views: "155K+", topics: "Connection errors, IP rotation setup, geolocation targeting, proxy authentication, session management" },
    { category: "Billing & Payments", articles: 36, views: "95K+", topics: "Subscription plans, payment methods, invoices, refunds, enterprise billing" },
    { category: "Technical Issues", articles: 83, views: "220K+", topics: "Error troubleshooting, performance optimization, compatibility issues, implementation help" }
  ];

  const popularArticles = [
    { 
      title: "Resolving Authentication Failures", 
      description: "Step-by-step guide to diagnosing and fixing the most common authentication issues with our API and proxy services", 
      views: "12.5K",
      category: "API Integration"
    },
    { 
      title: "Optimizing Data Collection Performance", 
      description: "Best practices for improving speed and efficiency when collecting large volumes of data from websites and APIs", 
      views: "10.2K",
      category: "Data Collection"
    },
    { 
      title: "Managing Billing & Usage Limits", 
      description: "How to set up alerts, monitor usage, and manage your billing settings to avoid unexpected charges", 
      views: "9.7K",
      category: "Billing & Payments"
    },
    { 
      title: "Troubleshooting IP Blocking Issues", 
      description: "Complete guide to identifying and resolving IP blocking when using our proxy services for data collection", 
      views: "11.3K",
      category: "Proxy Services"
    }
  ];

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password. For security reasons, password reset links expire after 24 hours."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers for annual enterprise plans. Cryptocurrency payments are available upon request for annual subscriptions. All payments are processed securely through our PCI-compliant payment system."
    },
    {
      question: "How do I upgrade my subscription plan?",
      answer: "You can upgrade your subscription at any time by going to Account Settings > Subscription. Click on 'Change Plan' and select your desired plan. The price difference will be prorated based on the remaining days in your current billing cycle. Your new plan benefits will be available immediately after upgrading."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 14-day money-back guarantee for new subscriptions. If you're not completely satisfied with our service, contact our support team within 14 days of your initial purchase for a full refund. Refunds for monthly plans are processed within 3-5 business days."
    },
    {
      question: "What are the IP rotation options for proxy services?",
      answer: "We offer several IP rotation options including session-based rotation, time-based rotation (rotating IPs at fixed intervals), and request-based rotation. You can configure these settings in the dashboard under Proxy Settings > Rotation Options. Enterprise users have access to additional custom rotation strategies."
    }
  ];

  return (
    <>
      {/* Support Center Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Support Center
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8} maxW="800px" mx="auto">
            Find answers to your questions with our comprehensive documentation,
            tutorials, and direct support from our team of experts.
          </Text>
          
          <Box maxW="650px" mx="auto" mb={10}>
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input 
                placeholder="Search for help articles, tutorials, and FAQs" 
                bg="white" 
                focusBorderColor="blue.500"
                borderRadius="md"
                boxShadow="sm"
              />
            </InputGroup>
          </Box>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Documentation</Heading>
              <Text>Comprehensive guides, API references, and technical documentation for all our products and services.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Tutorials & Guides</Heading>
              <Text>Step-by-step tutorials and best practices for getting the most out of our platform and services.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Direct Support</Heading>
              <Text>Connect with our support team through live chat, email, or schedule a call with a technical specialist.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Support Options Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            How Can We Help You Today?
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }} gap={10} mt={10}>
            {/* <VStack align="center" spacing={5} p={8} borderRadius="md" borderWidth="1px" borderColor="gray.200">
              <Box bg="blue.50" p={4} borderRadius="full">
                <ChatIcon boxSize={8} color="blue.600" />
              </Box>
              <Heading as="h3" size="md">Live Chat Support</Heading>
              <Text textAlign="center">
                Connect with our technical support team in real-time for immediate assistance with your questions.
              </Text>
              <Stat textAlign="center">
                <StatLabel>Average Response Time</StatLabel>
                <StatNumber color="blue.600">2 min</StatNumber>
              </Stat>
              <Button colorScheme="blue" variant="solid" width="full">
                Start Live Chat
              </Button>
            </VStack>
             */}
            <VStack align="center" spacing={5} p={8} borderRadius="md" borderWidth="1px" borderColor="gray.200">
              <Box bg="blue.50" p={4} borderRadius="full">
                <EmailIcon boxSize={8} color="blue.600" />
              </Box>
              <Heading as="h3" size="md">Email Support</Heading>
              <Text textAlign="center">
                Submit a detailed question or issue and receive a comprehensive response from our support engineers.
              </Text>
              <Stat textAlign="center">
                <StatLabel>Average Response Time</StatLabel>
                <StatNumber color="blue.600">4 hours</StatNumber>
              </Stat>
              <Button colorScheme="blue" variant="solid" width="full">
                Send Email
              </Button>
            </VStack>
            
            <VStack align="center" spacing={5} p={8} borderRadius="md" borderWidth="1px" borderColor="gray.200">
              <Box bg="blue.50" p={4} borderRadius="full">
                <PhoneIcon boxSize={8} color="blue.600" />
              </Box>
              <Heading as="h3" size="md">Schedule a Call</Heading>
              <Text textAlign="center">
                Book a call with one of our technical specialists for personalized assistance with complex issues.
              </Text>
              <Stat textAlign="center">
                <StatLabel>Available For</StatLabel>
                <StatNumber color="blue.600">Premium</StatNumber>
              </Stat>
              <Button colorScheme="blue" variant="solid" width="full">
                Book Appointment
              </Button>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Support Categories Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Support Categories
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {supportCategories.map((category, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{category.category}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{category.articles}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Articles</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{category.views}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Monthly Views</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Topics:</Text> {category.topics}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Popular Articles Section */}
      {/* <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Most Popular Help Articles
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Find solutions to common questions and issues with our most frequently accessed support articles
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            {popularArticles.map((article, index) => (
              <Flex key={index} p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
                <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                  <QuestionIcon boxSize="30px" color="blue.600" />
                </Box>
                <Box>
                  <Flex justify="space-between" align="center" mb={2}>
                    <Heading as="h3" size="md" fontWeight="medium">{article.title}</Heading>
                    <Tag size="sm" colorScheme="blue" ml={2}>{article.category}</Tag>
                  </Flex>
                  <Text color="gray.600" mb={3}>{article.description}</Text>
                  <HStack spacing={8}>
                    <Flex align="center">
                      <InfoIcon color="gray.400" mr={2} />
                      <Text fontSize="sm" color="gray.500">{article.views} views</Text>
                    </Flex>
                    <Button colorScheme="blue" size="sm" variant="outline">Read Article</Button>
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
            Our Support at a Glance
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            We're committed to providing exceptional support with fast response times and high satisfaction rates
          </Text>
          
          <Box bg="blue.50" p={8} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600">96%</Heading>
                <Text fontWeight="medium">Satisfaction Rate</Text>
                <Text fontSize="sm" color="gray.600">Based on customer feedback</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600">2 min</Heading>
                <Text fontWeight="medium">Chat Response</Text>
                <Text fontSize="sm" color="gray.600">Average wait time</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600"> 4 hrs</Heading>
                <Text fontWeight="medium">Email Response</Text>
                <Text fontSize="sm" color="gray.600">During business hours</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600">24/7</Heading>
                <Text fontWeight="medium">Documentation</Text>
                <Text fontSize="sm" color="gray.600">Always available</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      {/* FAQ Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Frequently Asked Questions
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Quick answers to our most common support questions
          </Text>
          
          <Box bg="white" borderRadius="md" boxShadow="sm" overflow="hidden">
            <Accordion allowToggle>
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} borderColor="gray.200">
                  <h3>
                    <AccordionButton py={4} px={6} _expanded={{ bg: "blue.50", color: "blue.600" }}>
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
              colorScheme="blue" 
              variant="outline" 
              as="a"
              href="/resources/faq"
              size="lg"
            >
              View All FAQs
            </Button>
          </Box>
        </Box>
      </Box>
      
      
      {/* Support Hours Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            <Box>
              <Heading as="h2" size="xl" mb={6} fontWeight="medium">
                Support Hours & Availability
              </Heading>
              <Text fontSize="lg" mb={8}>
                We provide multiple support channels with different availability to ensure you can get help when you need it.
              </Text>
              
              <List spacing={5}>
                <ListItem display="flex" alignItems="center">
                  <Box as={TimeIcon} color="blue.600" mr={4} />
                  <Box>
                    <Text fontWeight="bold">Live Chat Support</Text>
                    <Text color="gray.600">Monday to Friday, 9 AM - 8 PM (EST)</Text>
                  </Box>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <Box as={TimeIcon} color="blue.600" mr={4} />
                  <Box>
                    <Text fontWeight="bold">Email Support</Text>
                    <Text color="gray.600">24/7 - Response times vary outside business hours</Text>
                  </Box>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <Box as={TimeIcon} color="blue.600" mr={4} />
                  <Box>
                    <Text fontWeight="bold">Phone Support</Text>
                    <Text color="gray.600">Monday to Friday, 10 AM - 6 PM (EST)</Text>
                    <Text color="gray.600">Premium and Enterprise plans only</Text>
                  </Box>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <Box as={TimeIcon} color="blue.600" mr={4} />
                  <Box>
                    <Text fontWeight="bold">Emergency Support</Text>
                    <Text color="gray.600">24/7 for critical issues (Enterprise plans)</Text>
                  </Box>
                </ListItem>
              </List>
            </Box>
            
            <Box bg="blue.50" p={8} borderRadius="md">
              <Heading as="h3" size="lg" mb={6} fontWeight="medium">
                Need Immediate Assistance?
              </Heading>
              <Text mb={6}>
                Our team is standing by to help you resolve any issues quickly and efficiently.
              </Text>
              
              <VStack spacing={4} align="stretch">
                {/* <Button leftIcon={<ChatIcon />} colorScheme="blue" size="lg">
                  Start Live Chat
                </Button> */}
                <Button leftIcon={<EmailIcon />} colorScheme="blue" variant="outline" size="lg">
                  Send Email Request
                </Button>
                <Divider my={2} />
                <Button leftIcon={<PhoneIcon />} colorScheme="red" variant="outline" size="md">
                +1 (855) 440-2242
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Can't Find What You're Looking For?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Our support team is ready to assist you with any questions or issues
            that aren't covered in our documentation
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
          <Button
              size="lg"
              bg="white"
              color="blue.500"
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
              href="https://dashboard.thedataproxy.com/signup"
            >
              Start Free Trial
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "blue.700" }}
              leftIcon={<InfoIcon />}
            >
              Browse Documentation
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