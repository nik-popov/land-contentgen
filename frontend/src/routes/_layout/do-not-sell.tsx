import { createFileRoute } from '@tanstack/react-router';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Container,
  Divider,
  Link,
} from "@chakra-ui/react";
import Footer from '../../components/Common/Footer';

export const Route = createFileRoute('/_layout/do-not-sell')({
  component: DoNotSellPage,
});

function DoNotSellPage() {
  const handleOptOut = () => {
    // Update Google Consent Mode to deny targeted advertising cookies
    if (window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        personalization_storage: "denied",
      });
      // Set a cookie to persist the opt-out choice
      document.cookie = "roamingproxy-consent=opted-out; path=/; max-age=12960000"; // 150 days, matching your policy
      alert("You have successfully opted out of targeted advertising cookies.");
    } else {
      alert("Error: Unable to update consent settings. Please try again or contact support.");
    }
  };

  return (
    <Box>
      <Container maxW="1000px" mx="auto" px={4} py={16} color="gray.800">
        <VStack spacing={8} align="start" w="full">
          <Heading as="h1" size="xl" fontWeight="medium">
            Do Not Sell or Share My Personal Information
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Last Updated: March 2025
          </Text>

          {/* Introduction */}
          <Box w="full">
            <Text fontSize="lg" mb={4}>
              At Roaming Proxy, we respect your privacy rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA). 
              This page allows California residents to opt out of the sale or sharing of their personal information, including for targeted advertising purposes.
            </Text>
            <Text fontSize="lg" mb={4}>
              "Selling" or "sharing" under CPRA includes using cookies or similar technologies (e.g., advertising cookies) to share your data with third parties 
              for personalized ads. By opting out here, you can disable these non-essential cookies while still allowing essential cookies needed for our Website to function.
            </Text>
            <Text fontSize="lg">
              For more details on how we use cookies and handle your data, please see our{" "}
              <Link href="/cookie" color="red.500" textDecoration="underline">
                Cookie Policy
              </Link>
              {" "}and{" "}
              <Link href="/privacy" color="red.500" textDecoration="underline">
                Privacy Policy
              </Link>.
            </Text>
          </Box>

          <Divider />

          {/* Opt-Out Instructions */}
          <Box w="full" id="opt-out-instructions">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              How to Opt Out
            </Heading>
            <Text fontSize="md" mb={4}>
              To opt out of targeted advertising cookies, simply click the button below. This will update your consent preferences to disable advertising and personalization cookies, 
              such as those used by Google Ads, Facebook, or LinkedIn for targeted ads.
            </Text>
            <Button
              onClick={handleOptOut}
              bg="red.500"
              color="white"
              _hover={{ bg: "red.600" }}
              borderRadius="md"
              px={6}
              py={3}
              fontWeight="medium"
            >
              Opt Out Now
            </Button>
            <Text fontSize="md" mt={4} mb={4}>
              After opting out:
            </Text>
            <VStack align="start" spacing={2} pl={6}>
              <Text fontSize="md">- Advertising cookies (e.g., <code>_fbp</code>, <code>_lipt</code>) will be disabled.</Text>
              <Text fontSize="md">- You may still see ads, but they won’t be personalized based on your browsing behavior.</Text>
              <Text fontSize="md">- Essential cookies (e.g., for login or security) will remain active to ensure the Website works properly.</Text>
            </VStack>
            <Text fontSize="md" mt={4}>
              You can also manage cookies via our consent banner when you first visit the Website or by adjusting your preferences in your browser settings. 
              See our <Link href="/cookie" color="red.500" textDecoration="underline">Cookie Policy</Link> for details.
            </Text>
          </Box>

          {/* Additional Information */}
          <Box w="full" id="additional-information">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              Additional Information
            </Heading>
            <Text fontSize="md" mb={4}>
              Opting out here applies only to this Website (roamingproxy.com). If you use other devices or browsers, you’ll need to opt out on each one separately.
            </Text>
            <Text fontSize="md" mb={4}>
              If you’ve already accepted cookies via our consent banner, clicking “Opt Out Now” will override that choice for advertising cookies. 
              Your preference will be stored for 150 days, after which you may see the consent banner again.
            </Text>
            <Text fontSize="md">
              For broader opt-out options across multiple websites, visit the{" "}
              <Link href="http://www.aboutads.info/choices/" color="red.500" textDecoration="underline" isExternal>
                Digital Advertising Alliance
              </Link>{" "}
              or{" "}
              <Link href="https://www.networkadvertising.org/choices/" color="red.500" textDecoration="underline" isExternal>
                Network Advertising Initiative
              </Link>.
            </Text>
          </Box>

          {/* Contact Us */}
          <Box w="full" id="contact-us">
            <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
              Contact Us
            </Heading>
            <Text fontSize="md" mb={4}>
              If you have questions about opting out or your privacy rights, contact us at:
            </Text>
            <VStack align="start" spacing={2} pl={4}>
              <Text><strong>Email:</strong> privacy@roamingproxy.com</Text>
              <Text><strong>Address:</strong> 99 Wall St Suite 5660, New York, NY 10005, USA</Text>
              <Text><strong>Phone:</strong> +1 (855) 440-2242</Text>
              <Text><strong>Support Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM EST</Text>
            </VStack>
            <Text fontSize="md" mt={4}>
              For formal privacy requests, use our form at{" "}
              <Link href="https://roamingproxy.com/privacy-request" color="red.500" textDecoration="underline" isExternal>
                roamingproxy.com/privacy-request
              </Link>.
            </Text>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}

export default DoNotSellPage;