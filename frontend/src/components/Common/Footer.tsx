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
            <Heading as="h4" size="md" mb={4} color="white">The Data Proxy</Heading>
            <Text color="gray.300" mb={4}>
              Enterprise-grade proxy infrastructure designed specifically for web scraping, data collection, 
              and market intelligence needs with global coverage across 190+ countries.
            </Text>
         
              <Text color="gray.300" mb={4}><strong>Phone:</strong> +1 (855) 440-2242</Text>
            <Flex align="center" gap={4} mb={4}>
              <Link href="mailto:info@thedataproxy.com" color="gray.300" _hover={{ color: "orange.400" }}>
                info@thedataproxy.com
              </Link>
              
            </Flex>
            <Flex gap={4}>
              <Link href="https://twitter.com/cobaltdata" isExternal aria-label="Twitter">
                <Box as="span" color="gray.300" _hover={{ color: "orange.400" }}>Twitter</Box>
              </Link>
              <Link href="https://linkedin.com/company/cobaltdata" isExternal aria-label="LinkedIn">
                <Box as="span" color="gray.300" _hover={{ color: "orange.400" }}>LinkedIn</Box>
              </Link>
              <Link href="https://github.com/cobaltdatanet" isExternal aria-label="GitHub">
                <Box as="span" color="gray.300" _hover={{ color: "orange.400" }}>GitHub</Box>
              </Link>
            </Flex>
            <Text color="gray.300" mb={4} pt={4}><strong>Address:</strong> 99 Wall St Suite 5660, New York, NY 10005, USA</Text>
          </Box>

          {/* Solutions */}
          <Box>
            <Heading as="h4" size="md" mb={4} color="white">Solutions</Heading>
            <VStack align="flex-start" spacing={2}>
              <Link href="/solutions/market-research" color="gray.300" _hover={{ color: "orange.400" }}>Market Research</Link>
              <Link href="/solutions/price-monitoring" color="gray.300" _hover={{ color: "orange.400" }}>Price Monitoring</Link>
              <Link href="/solutions/ai-training-data" color="gray.300" _hover={{ color: "orange.400" }}>AI Training Datasets</Link>
              <Link href="/solutions/content-aggregation" color="gray.300" _hover={{ color: "orange.400" }}>Content Aggregation</Link>
              <Link href="/solutions/lead-generation" color="gray.300" _hover={{ color: "orange.400" }}>Lead Generation</Link>
              <Link href="/solutions/seo-monitoring" color="gray.300" _hover={{ color: "orange.400" }}>SEO Monitoring</Link>
              <Link href="/solutions/enterprise" color="gray.300" _hover={{ color: "orange.400" }}>Enterprise</Link>
            </VStack>
          </Box>

          {/* Resources */}
          <Box>
            <Heading as="h4" size="md" mb={4} color="white">Resources</Heading>
            <VStack align="flex-start" spacing={2}>
              <Link href="/blog" color="gray.300" _hover={{ color: "orange.400" }}>Blog</Link>
              <Link href="/documentation" color="gray.300" _hover={{ color: "orange.400" }}>Documentation</Link>
              <Link href="/case-studies" color="gray.300" _hover={{ color: "orange.400" }}>Case Studies</Link>
              <Link href="/webinars" color="gray.300" _hover={{ color: "orange.400" }}>Webinars</Link>
              <Link href="/faq" color="gray.300" _hover={{ color: "orange.400" }}>FAQ</Link>
              <Link href="/api-reference" color="gray.300" _hover={{ color: "orange.400" }}>API Reference</Link>
            </VStack>
          </Box>

          {/* Company */}
          <Box>
            <Heading as="h4" size="md" mb={4} color="white">Company</Heading>
            <VStack align="flex-start" spacing={2}>
              <Link href="/about" color="gray.300" _hover={{ color: "orange.400" }}>About Us</Link>
              <Link href="/contact" color="gray.300" _hover={{ color: "orange.400" }}>Contact</Link>
              <Link href="/careers" color="gray.300" _hover={{ color: "orange.400" }}>Careers</Link>
              <Link href="/pricing" color="gray.300" _hover={{ color: "orange.400" }}>Pricing</Link>
              <Link href="/partners" color="gray.300" _hover={{ color: "orange.400" }}>Partners</Link>
              <Link href="/legal" color="gray.300" _hover={{ color: "orange.400" }}>Legal</Link>
            </VStack>
          </Box>
        </Grid>

        {/* Secondary Footer - Popular Use Cases with Keywords */}
        <Box borderTop="1px solid" borderColor="gray.700" pt={6} mb={6}>
          <Heading as="h4" size="sm" mb={4} color="gray.400">Popular Web Scraping Use Cases</Heading>
          <Flex flexWrap="wrap" gap={4}>
            <Link href="/use-cases/e-commerce-price-monitoring" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              E-commerce Price Monitoring
            </Link>
            <Link href="/use-cases/product-data-extraction" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              Product Data Extraction
            </Link>
            <Link href="/use-cases/competitor-analysis" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              Competitor Analysis
            </Link>
            <Link href="/use-cases/real-estate-data-scraping" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              Real Estate Data Scraping
            </Link>
            <Link href="/use-cases/travel-fare-aggregation" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              Travel Fare Aggregation
            </Link>
            <Link href="/use-cases/financial-data-collection" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              Financial Data Collection
            </Link>
            <Link href="/use-cases/social-media-monitoring" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              Social Media Monitoring
            </Link>
            <Link href="/use-cases/news-aggregation" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              News Aggregation
            </Link>
          </Flex>
        </Box>

        {/* Third Footer - Regions with Keywords */}
        <Box borderTop="1px solid" borderColor="gray.700" pt={6} mb={6}>
          <Heading as="h4" size="sm" mb={4} color="gray.400">Global Proxy Coverage</Heading>
          <Flex flexWrap="wrap" gap={4}>
            <Link href="/regions/north-america" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              North America Proxies
            </Link>
            <Link href="/regions/europe" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              Europe Proxies
            </Link>
            <Link href="/regions/asia-pacific" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              Asia-Pacific Proxies
            </Link>
            <Link href="/regions/south-america" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              South America Proxies
            </Link>
            <Link href="/regions/africa" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              Africa Proxies
            </Link>
            <Link href="/regions/middle-east" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>
              Middle East Proxies
            </Link>
          </Flex>
        </Box>

        {/* Bottom Footer - Copyright and Legal */}
        <Flex justify="space-between" align="center" borderTop="1px solid" borderColor="gray.700" pt={6} flexWrap="wrap" gap={4}>
          <Text color="gray.400" fontSize="sm">© 2025 The Data Proxy. All rights reserved.</Text>
          <Flex gap={6}>
            <Link href="/privacy" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>Privacy Policy</Link>
            <Link href="/terms" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>Terms of Service</Link>
            <Link href="/compliance" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>Compliance</Link>
            <Link href="/cookie" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>Cookie Policy</Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;