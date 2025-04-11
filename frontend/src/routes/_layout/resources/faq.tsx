import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, InputGroup, InputLeftElement, Divider, Tag, HStack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, SearchIcon, PhoneIcon, EmailIcon, ChatIcon, QuestionIcon, InfoIcon, TimeIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/faq")({
  component: FAQPage,
});

function FAQPage() {
  const faqCategories = [
    { category: "General Inquiries", articles: 24, views: "85K+", topics: "Platform basics, initial setup, account registration, core functions, technical prerequisites" },
    { category: "Account & Payments", articles: 36, views: "95K+", topics: "Pricing tiers, payment options, billing statements, refund process, corporate billing, profile management" },
    { category: "Platform Capabilities", articles: 42, views: "120K+", topics: "Feature details, usage advice, recommended practices, constraints, feature comparisons" },
    { category: "Technical Assistance", articles: 65, views: "175K+", topics: "Problem-solving, error fixes, performance optimization, compatibility support, integration guidance" },
    { category: "Security & Data Privacy", articles: 28, views: "65K+", topics: "Data safeguarding, security protocols, regulatory adherence, privacy settings, access controls" },
    { category: "External Integrations", articles: 31, views: "80K+", topics: "Third-party connections, API linking, data synchronization, tailored integrations" }
  ];

  const popularQuestions = [
    { 
      question: "How can I reset my password?", 
      answer: "To reset your password, visit the login page and select 'Forgot Password'. Provide your email, and we’ll send a reset link. Follow the email instructions to set a new password. Note that reset links expire after 24 hours for security purposes.", 
      views: "15.3K",
      category: "Account & Payments"
    },
    { 
      question: "Which payment methods are supported?", 
      answer: "We support major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers for yearly enterprise plans. Cryptocurrency options are available for annual subscriptions upon request. Payments are securely handled via our PCI-compliant system.", 
      views: "12.8K",
      category: "Account & Payments"
    },
    { 
      question: "How do I switch to a higher plan?", 
      answer: "Upgrade your plan anytime by navigating to Account Settings > Subscription. Select 'Change Plan', choose your preferred tier, and the cost difference will be adjusted based on your current billing cycle’s remaining time. New plan features activate instantly upon upgrade.", 
      views: "11.5K",
      category: "Account & Payments"
    },
    { 
      question: "Is a refund possible if I’m unhappy?", 
      answer: "Yes, we provide a 14-day money-back guarantee for new users. If you’re dissatisfied, reach out to our support team within 14 days of purchase for a full refund. Monthly plan refunds are processed within 3-5 business days.", 
      views: "10.7K",
      category: "Account & Payments"
    }
  ];

  const faqItems = [
    {
      question: "How do I set up an account?",
      answer: "Setting up an account is straightforward. Click 'Sign Up' on our homepage, input your email, create a strong password, and confirm your email via the link we send. After verification, fill out your profile and begin exploring the platform right away."
    },
    {
      question: "What are the technical requirements?",
      answer: "Our platform operates online and is compatible with modern browsers like Chrome, Firefox, Safari, and Edge. For the best experience, use the latest browser version. Mobile users can download our iOS (13+) or Android (8.0+) apps."
    },
    {
      question: "How do I update my email address?",
      answer: "To update your email, log into your account, go to Account Settings > Profile, and click 'Edit' beside your email. Enter the new email and save it. A verification email will be sent to the new address—click the link to finalize the change."
    },
    {
      question: "Is my information protected?",
      answer: "Absolutely, we prioritize data protection. All information is encrypted in transit and at rest with top-tier protocols. We use SOC 2 compliant data centers, perform regular security reviews, enforce strict access policies, and offer two-factor authentication for extra safety."
    },
    {
      question: "How can I terminate my subscription?",
      answer: "To end your subscription, visit Account Settings > Subscription and select 'Cancel Subscription'. Follow the steps to confirm cancellation. You’ll get a confirmation email, and your account will stay active until the billing period ends, then revert to the free tier."
    },
    {
      question: "Are there enterprise options available?",
      answer: "Yes, we provide tailored enterprise packages with perks like dedicated assistance, bespoke integrations, SSO, enhanced security features, and bulk licensing. Email our sales team at enterprise@example.com to discuss your needs and arrange a custom demo."
    },
    {
      question: "What’s your policy on data retention?",
      answer: "We keep your account and content data as long as your account is active. Inactive accounts have data retained for 12 months before potential deletion. Enterprise clients can request custom retention terms. You can export your data anytime from Account Settings."
    },
    {
      question: "Do you provide onboarding or training?",
      answer: "Yes, we offer various onboarding resources. All users get access to our detailed knowledge base, video guides, and forums. Premium and Enterprise tiers include one-on-one onboarding with our success team, while Enterprise clients also get bespoke training sessions."
    }
  ];

  return (
    <>
      {/* FAQ Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Common Questions Answered
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8} maxW="800px" mx="auto">
            Discover prompt solutions to frequent inquiries about our platform, functionalities, payments, and support.
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {faqCategories.map((category, index) => (
              <Box key={index} p={6} bg="gray.50" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{category.category}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{category.articles}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Entries</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{category.views}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Monthly Readers</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Subjects:</Text> {category.topics}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* FAQ Main Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Top Questions
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Fast responses to the questions we hear most often
          </Text>
          
          <Box bg="white" borderRadius="md" boxShadow="sm" overflow="hidden">
            <Accordion allowToggle>
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} borderColor="gray.300">
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
        </Box>
      </Box>
      
      {/* Need More Help Section */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Still Need Help?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Our support crew is here to help with any queries not addressed in our FAQ
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
              Schedule a Demo
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
              Begin Free Trial
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