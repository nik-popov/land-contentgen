import { Flex } from "@chakra-ui/react";
import { Outlet, createFileRoute, Link } from "@tanstack/react-router";
import TopNav from "../components/Common/TopNav";
import CookieConsent from "react-cookie-consent";
import { TrackPageViews } from "../components/TrackPageViews"; // Import the component
import theme from "../theme";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

function Layout() {
  return (
    <Flex direction="column" minH="100vh" w="100%">
      <TopNav />
      <TrackPageViews /> {/* Track all route changes */}
      <Flex flex="1" direction="column" maxW="1200px" mx="auto" w="100%">
        <Outlet /> {/* Child routes render here */}
      </Flex>
      <CookieConsent
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Decline"
        cookieName="roamingproxy-consent"
        enableDeclineButton
        style={{
          background: theme.colors.gray[800] || "#1F2937",
          color: theme.colors.white || "#FFFFFF",
          padding: "16px",
          fontSize: "14px",
          zIndex: 9999,
        }}
        buttonStyle={{
          background: theme.colors.red[500] || "#EF4444",
          color: theme.colors.white || "#FFFFFF",
          borderRadius: theme.radii.md || "4px",
          padding: "8px 16px",
          fontWeight: "medium",
        }}
        declineButtonStyle={{
          background: theme.colors.gray[500] || "#6B7280",
          color: theme.colors.white || "#FFFFFF",
          borderRadius: theme.radii.md || "4px",
          padding: "8px 16px",
          fontWeight: "medium",
        }}
        expires={150}
        debug={true} // Remove in production
        onAccept={() => {
          console.log("Cookies accepted");
          // Update consent for analytics
          window.gtag?.("consent", "update", {
            analytics_storage: "granted",
            ad_storage: "granted",
          });
        }}
        onDecline={() => {
          console.log("Cookies declined");
          // Ensure consent remains denied
          window.gtag?.("consent", "update", {
            analytics_storage: "denied",
            ad_storage: "denied",
          });
        }}
      >
        We use cookies to enhance your experience, analyze usage, and deliver ads. Learn more in our{" "}
        <Link
          to="/cookie"
          style={{ color: theme.colors.red[500] || "#EF4444", textDecoration: "underline" }}
        >
          Cookie Policy
        </Link>
        ,{" "}
        <Link
          to="/privacy"
          style={{ color: theme.colors.red[500] || "#EF4444", textDecoration: "underline" }}
        >
          Privacy Policy
        </Link>
        , or{" "}
        <Link
          to="/terms"
          style={{ color: theme.colors.red[500] || "#EF4444", textDecoration: "underline" }}
        >
          Terms
        </Link>
        .
      </CookieConsent>
    </Flex>
  );
}