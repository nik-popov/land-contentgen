import React from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={12}>
      <Box maxW="1200px" mx="auto" px={4}>
        {/* Main Footer Content */}
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr" }} gap={8} mb={8}>
          {/* Company Information */}
          <Box>
            <Heading as="h4" size="md" mb={1} color="white">
              <Link href="https://brightcreditservices.com" _hover={{ textDecoration: "none", color: "red.600" }}>
                Bright Credit
              </Link>
            </Heading>
            <Text color="gray.400" fontSize="sm" mb={2}>
              <Link href="https://cobaltdata.net" _hover={{ textDecoration: "none", color: "blue.400" }}>
                Cobalt Data Network
              </Link>
            </Text>
            <Text color="gray.300" mb={4}>
              Professional credit repair services designed to help you improve your credit score, dispute inaccuracies, 
              and optimize your financial future with personalized strategies and expert guidance.
            </Text>
            <Text color="gray.300" mb={4}>
              <strong>Phone:</strong> <a href="tel:+18334353873‬">+1 ‪(833) 435-3873‬</a>
            </Text>
            <Flex align="center" gap={4} mb={4}>
              <Link href="mailto:info@brightcreditservices.com" color="gray.300" _hover={{ color: "red.600" }}>
                Email: info@brightcreditservices.com
              </Link>
            </Flex>
            <Flex gap={4}>
              <Link href="https://twitter.com/cobaltdata" isExternal aria-label="Twitter">
                <Box as="span" color="gray.300" _hover={{ color: "red.600" }}>Twitter</Box>
              </Link>
              <Link href="https://linkedin.com/company/cobaltdata" isExternal aria-label="LinkedIn">
                <Box as="span" color="gray.300" _hover={{ color: "red.600" }}>LinkedIn</Box>
              </Link>
              <Link href="https://github.com/cobaltdatanet" isExternal aria-label="GitHub">
                <Box as="span" color="gray.300" _hover={{ color: "red.600" }}>GitHub</Box>
              </Link>
            </Flex>
            <Text color="gray.300" mb={4} pt={4}>
              <strong>Address:</strong> 99 Wall St Suite 5660, New York, NY 10005, USA
            </Text>
          </Box>

          {/* Services */}
          <Box>
            <Heading as="h4" size="md" mb={4} color="white">Services</Heading>
            <VStack align="flex-start" spacing={2}>
              <Link href="/services/dispute-management" color="gray.300" _hover={{ color: "red.600" }}>Dispute Management</Link>
              <Link href="/services/credit-monitoring" color="gray.300" _hover={{ color: "red.600" }}>Credit Monitoring</Link>
              <Link href="/services/point-optimization" color="gray.300" _hover={{ color: "red.600" }}>Point Optimization</Link>
              <Link href="/services/debt-validation" color="gray.300" _hover={{ color: "red.600" }}>Debt Validation</Link>
              <Link href="/services/legal-compliance" color="gray.300" _hover={{ color: "red.600" }}>Legal Compliance</Link>
              <Link href="/services/personal-support" color="gray.300" _hover={{ color: "red.600" }}>Personal Support</Link>
              <Link href="/services/credit-analysis" color="gray.300" _hover={{ color: "red.600" }}>Credit Analysis</Link>
              <Link href="/services/financial-planning" color="gray.300" _hover={{ color: "red.600" }}>Financial Planning</Link>
              <Link href="/services/credit-education" color="gray.300" _hover={{ color: "red.600" }}>Credit Education</Link>
              <Link href="/services/score-tracking" color="gray.300" _hover={{ color: "red.600" }}>Score Tracking</Link>
              <Link href="/services/enterprise" color="gray.300" _hover={{ color: "red.600" }}>Enterprise</Link>
            </VStack>
          </Box>

          {/* Resources */}
          <Box>
            <Heading as="h4" size="md" mb={4} color="white">Resources</Heading>
            <VStack align="flex-start" spacing={2}>
              <Link href="/resources/credit-guides" color="gray.300" _hover={{ color: "red.600" }}>Credit Guides</Link>
              <Link href="/resources/blog" color="gray.300" _hover={{ color: "red.600" }}>Articles</Link>
              <Link href="/resources/support" color="gray.300" _hover={{ color: "red.600" }}>Support</Link>
              <Link href="/resources/credit-education" color="gray.300" _hover={{ color: "red.600" }}>Credit Education</Link>
              <Link href="/resources/dispute-templates" color="gray.300" _hover={{ color: "red.600" }}>Dispute Templates</Link>
              <Link href="/resources/faq" color="gray.300" _hover={{ color: "red.600" }}>FAQ</Link>
              <Link href="/resources/support-center" color="gray.300" _hover={{ color: "red.600" }}>Help & Support</Link>
              <Link href="/resources/credit-calculator" color="gray.300" _hover={{ color: "red.600" }}>Credit Calculator</Link>
              <Link href="/resources/financial-tools" color="gray.300" _hover={{ color: "red.600" }}>Financial Tools</Link>
              <Link href="https://apis.brightcreditservices.com/redoc" color="gray.300" _hover={{ color: "red.600" }}>API Reference</Link>
            </VStack>
          </Box>

          {/* Company */}
          <Box>
            <Heading as="h4" size="md" mb={4} color="white">Company</Heading>
            <VStack align="flex-start" spacing={2}>
              <Link href="/pricing" color="gray.300" _hover={{ color: "red.600" }}>Pricing</Link>
              <Link href="/contact-sales" color="gray.300" _hover={{ color: "red.600" }}>Sales</Link>
              <Link href="https://cloud.brightcreditservices.com/login" color="gray.300" _hover={{ color: "red.600" }}>Log In</Link>
              <Link href="https://cloud.brightcreditservices.com/signup" color="gray.300" _hover={{ color: "red.600" }}>Sign Up</Link>
              <Link href="/contact" color="gray.300" _hover={{ color: "red.600" }}>Contact</Link>
              <Link href="https://cobaltdata.net" color="gray.300" _hover={{ color: "red.400" }}>Cobalt Data Network</Link>
            </VStack>
          </Box>
        </Grid>

        {/* Secondary Footer - Popular Credit Repair Use Cases */}
        <Box borderTop="1px solid" borderColor="gray.700" pt={6} mb={6}>
          <Heading as="h4" size="sm" mb={4} color="gray.400">Popular Credit Repair Solutions</Heading>
          <Flex flexWrap="wrap" gap={4}>
            <Link href="/use-cases/home-loan-approval" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Home Loan Approval
            </Link>
            <Link href="/use-cases/auto-financing" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Auto Financing
            </Link>
            <Link href="/use-cases/credit-card-rewards" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Credit Card Rewards
            </Link>
            <Link href="/use-cases/business-funding" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Business Funding
            </Link>
            <Link href="/use-cases/lower-insurance-rates" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Lower Insurance Rates
            </Link>
            <Link href="/use-cases/employment-opportunities" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Employment Opportunities
            </Link>
            <Link href="/use-cases/debt-consolidation" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Debt Consolidation
            </Link>
            <Link href="/use-cases/financial-freedom" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Financial Freedom
            </Link>
          </Flex>
        </Box>

        {/* Third Footer - Credit Repair Benefits */}
        <Box borderTop="1px solid" borderColor="gray.700" pt={6} mb={6}>
          <Heading as="h4" size="sm" mb={4} color="gray.400">Credit Repair Benefits</Heading>
          <Flex flexWrap="wrap" gap={4}>
            <Link href="/benefits/improved-credit-score" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Improved Credit Score
            </Link>
            <Link href="/benefits/lower-interest-rates" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Lower Interest Rates
            </Link>
            <Link href="/benefits/better-loan-terms" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Better Loan Terms
            </Link>
            <Link href="/benefits/increased-approval-odds" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Increased Approval Odds
            </Link>
            <Link href="/benefits/financial-opportunities" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Financial Opportunities
            </Link>
          </Flex>
        </Box>

        {/* Bottom Footer - Copyright and Legal */}
        <Flex justify="space-between" align="center" borderTop="1px solid" borderColor="gray.700" pt={6} flexWrap="wrap" gap={4}>
          <Text color="gray.400" fontSize="sm">
            © 2025 <Link href="https://brightcreditservices.com" color="gray.200" _hover={{ color: "red.400" }}>Bright Credit</Link>,{" "}
            <Link href="https://cobaltdata.net" color="gray.200" _hover={{ color: "blue.400" }}>Cobalt Data Network</Link>. All rights reserved.
          </Text>
          <Flex gap={6}>
            <Link href="/privacy" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>Privacy Policy</Link>
            <Link href="/terms" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>Terms of Service</Link>
            <Link href="/compliance" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>Compliance</Link>
            <Link href="/cookie" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>Cookie Policy</Link>
            <Link href="/do-not-sell" color="gray.400" fontSize="sm" _hover={{ color: "red.600" }}>
              Do Not Sell or Share My Personal Information
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
