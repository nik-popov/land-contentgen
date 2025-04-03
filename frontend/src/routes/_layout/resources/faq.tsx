import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, InputGroup, InputLeftElement, Divider, Tag, HStack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, SearchIcon, PhoneIcon, EmailIcon, ChatIcon, QuestionIcon, InfoIcon, TimeIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/faq")({
  component: FAQPage,
});

function FAQPage() {
  const faqCategories = [
    { category: "General Questions", articles: 24, views: "85K+", topics: "Platform overview, getting started, account creation, basic features, system requirements" },
    { category: "Account & Billing", articles: 36, views: "95K+", topics: "Subscription plans, payment methods, invoices, refunds, enterprise billing, account management" },
    { category: "Product Features", articles: 42, views: "120K+", topics: "Feature explanations, usage tips, best practices, limitations, feature comparison" },
    { category: "Technical Support", articles: 65, views: "175K+", topics: "Troubleshooting, error resolution, performance issues, compatibility, integration help" },
    { category: "Security & Privacy", articles: 28, views: "65K+", topics: "Data protection, security measures, compliance, privacy controls, access management" },
    { category: "Integrations", articles: 31, views: "80K+", topics: "Third-party integrations, API connections, data syncing, custom integrations" }
  ];

  const popularQuestions = [
    { 
      question: "How do I reset my password?", 
      answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password. For security reasons, password reset links expire after 24 hours.", 
      views: "15.3K",
      category: "Account & Billing"
    },
    { 
      question: "What payment methods do you accept?", 
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers for annual enterprise plans. Cryptocurrency payments are available upon request for annual subscriptions. All payments are processed securely through our PCI-compliant payment system.", 
      views: "12.8K",
      category: "Account & Billing"
    },
    { 
      question: "How do I upgrade my subscription plan?", 
      answer: "You can upgrade your subscription at any time by going to Account Settings > Subscription. Click on 'Change Plan' and select your desired plan. The price difference will be prorated based on the remaining days in your current billing cycle. Your new plan benefits will be available immediately after upgrading.", 
      views: "11.5K",
      category: "Account & Billing"
    },
    { 
      question: "Can I get a refund if I'm not satisfied?", 
      answer: "Yes, we offer a 14-day money-back guarantee for new subscriptions. If you're not completely satisfied with our service, contact our support team within 14 days of your initial purchase for a full refund. Refunds for monthly plans are processed within 3-5 business days.", 
      views: "10.7K",
      category: "Account & Billing"
    }
  ];

  const faqItems = [
    {
      question: "How do I create an account?",
      answer: "Creating an account is simple. Click the 'Sign Up' button on our homepage, enter your email address, create a secure password, and verify your email address through the confirmation link we'll send you. Once verified, you can complete your profile and start using our platform immediately."
    },
    {
      question: "What are the system requirements?",
      answer: "Our platform is web-based and works on most modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for optimal performance. For mobile access, we offer iOS and Android apps that require iOS 13+ or Android 8.0+ respectively."
    },
    {
      question: "How can I change my email address?",
      answer: "To change your email address, log in to your account and navigate to Account Settings > Profile. Click on 'Edit' next to your email address, enter your new email, and click 'Save Changes'. You'll receive a verification email at your new address. Click the verification link to complete the process."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security very seriously. All data is encrypted both in transit and at rest using industry-standard encryption protocols. We use secure, SOC 2 compliant data centers, conduct regular security audits, and maintain strict access controls. Additionally, we offer two-factor authentication for added account security."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "To cancel your subscription, go to Account Settings > Subscription and click 'Cancel Subscription'. Follow the prompts to complete the cancellation process. You'll receive an email confirming your cancellation. Your account will remain active until the end of your current billing period, after which it will be downgraded to the free plan."
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes, we offer customized enterprise solutions with additional features like dedicated support, custom integrations, single sign-on (SSO), advanced security controls, and volume licensing. Contact our sales team at enterprise@example.com to discuss your specific requirements and request a personalized demo."
    },
    {
      question: "What's your data retention policy?",
      answer: "We retain your account data and content for as long as you maintain an active account. For inactive accounts, data is retained for 12 months, after which it may be permanently deleted. For enterprise customers, we offer custom data retention policies to meet specific compliance requirements. You can export your data at any time from the Account Settings page."
    },
    {
      question: "Do you offer training or onboarding?",
      answer: "Yes, we provide several onboarding options. All plans include access to our comprehensive knowledge base, video tutorials, and community forums. Premium and Enterprise plans include personalized onboarding sessions with our customer success team. Enterprise customers also receive custom training workshops tailored to their specific use cases."
    }
  ];

  return (
    <>
      {/* FAQ Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Frequently Asked Questions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8} maxW="800px" mx="auto">
            Find quick answers to common questions about our platform, features, billing,
            and technical support.
          </Text>
          
          {/* <Box maxW="650px" mx="auto" mb={10}>
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input 
                placeholder="Search for questions and answers" 
                bg="white" 
                focusBorderColor="blue.500"
                borderRadius="md"
                boxShadow="sm"
              />
            </InputGroup>
          </Box> */}
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Getting Started</Heading>
              <Text>Basic information about our platform, account creation, and essential features.</Text>
              {/* <Button colorScheme="blue" variant="link" rightIcon={<InfoIcon />}>Learn more</Button> */}
            </VStack>
            
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Billing & Accounts</Heading>
              <Text>Information about pricing, subscription management, payments, and account settings.</Text>
              {/* <Button colorScheme="blue" variant="link" rightIcon={<InfoIcon />}>Learn more</Button> */}
            </VStack>
            
            <VStack align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Technical Support</Heading>
              <Text>Troubleshooting guides, error resolution, and technical assistance for our platform.</Text>
              {/* <Button colorScheme="blue" variant="link" rightIcon={<InfoIcon />}>Learn more</Button> */}
            </VStack>
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* FAQ Categories Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Browse by Category
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {faqCategories.map((category, index) => (
              <Box key={index} p={6} bg="gray.50" borderRadius="md" boxShadow="sm">
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
                  <Text as="span" fontWeight="bold">Topics covered:</Text> {category.topics}
                </Text>
                {/* <Button mt={4} colorScheme="blue" variant="outline" size="sm">View Articles</Button> */}
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* FAQ Main Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Most Common Questions
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Quick answers to our most frequently asked questions
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
        </Box>
      </Box>
      
      {/* Popular Articles Section */}
      {/* <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Popular Questions
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            The most viewed questions and comprehensive answers from our knowledge base
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            {popularQuestions.map((article, index) => (
              <Flex key={index} p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
                <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                  <QuestionIcon boxSize="30px" color="blue.600" />
                </Box>
                <Box>
                  <Flex justify="space-between" align="center" mb={2}>
                    <Heading as="h3" size="md" fontWeight="medium">{article.question}</Heading>
                    <Tag size="sm" colorScheme="blue" ml={2}>{article.category}</Tag>
                  </Flex>
                  <Text color="gray.600" mb={3} noOfLines={3}>{article.answer}</Text>
                  <HStack spacing={8}>
                    <Flex align="center">
                      <InfoIcon color="gray.400" mr={2} />
                      <Text fontSize="sm" color="gray.500">{article.views} views</Text>
                    </Flex>
                    <Button colorScheme="blue" size="sm" variant="outline">Read More</Button>
                  </HStack>
                </Box>
              </Flex>
            ))}
          </Grid>
        </Box>
      </Box> */}
      
      {/* Need More Help Section */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Didn't Find Your Answer?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Our support team is ready to assist you with any questions that aren't covered in our FAQ
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
          </Flex>
        </Box>
      </Box>

 
  
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default FAQPage;