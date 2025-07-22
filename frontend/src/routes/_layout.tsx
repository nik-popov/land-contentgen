import { Flex } from "@chakra-ui/react";
import { Outlet, createFileRoute, Link } from "@tanstack/react-router";
import TopNav from "../components/Common/TopNav";
import CookieConsent from "react-cookie-consent";
import { TrackPageViews } from "../components/TrackPageViews";
import theme from "../theme";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

function Layout() {
  const [consentGiven, setConsentGiven] = useState(
    document.cookie.includes("brightcreditservices-consent=true")
  );
  const [gtagLoaded, setGtagLoaded] = useState(!!window.gtag);

  useEffect(() => {
    if (!window.gtag) {
      const checkGtag = () => {
        if (window.gtag) {
          setGtagLoaded(true);
          clearInterval(interval);
        }
      };
      const interval = setInterval(checkGtag, 100);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const handleConsentChange = () => {
      const granted = document.cookie.includes("brightcreditservices-consent=true");
      if (granted !== consentGiven) {
        setConsentGiven(granted);
      }
    };
    window.addEventListener("storage", handleConsentChange);
    window.addEventListener("consentChange", handleConsentChange);
    handleConsentChange();
    return () => {
      window.removeEventListener("storage", handleConsentChange);
      window.removeEventListener("consentChange", handleConsentChange);
    };
  }, [consentGiven]);

  return (
    <Flex direction="column" minH="100vh" w="100%">
      <TopNav />
      <TrackPageViews consentGiven={consentGiven} />
      <Flex flex="1" direction="column" maxW="1200px" mx="auto" w="100%">
        <Outlet />
      </Flex>
      {!consentGiven && (
        <CookieConsent
          location="bottom"
          buttonText="Accept All"
          declineButtonText="Decline"
          cookieName="brightcreditservices-consent"
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
          onAccept={() => {
            console.log("Accept clicked");
            if (gtagLoaded && window.gtag) {
              window.gtag("consent", "update", {
                ad_user_data: "granted",
                ad_personalization: "granted",
                ad_storage: "granted",
                analytics_storage: "granted",
                functionality_storage: "granted",
                security_storage: "granted",
              });
              console.log("Consent updated, sending page view");
              window.gtag("event", "page_view", {
                page_path: window.location.pathname,
                send_to: "G-X7X57Z2WXP",
              });
            } else {
              console.error("gtag not loaded yet");
            }
            setConsentGiven(true);
            window.dispatchEvent(new Event("consentChange"));
          }}
          onDecline={() => {
            console.log("Cookies declined");
            if (gtagLoaded && window.gtag) {
              window.gtag("consent", "update", {
                ad_user_data: "denied",
                ad_personalization: "denied",
                ad_storage: "denied",
                analytics_storage: "denied",
                functionality_storage: "denied",
                security_storage: "granted",
              });
            }
            setConsentGiven(false);
            window.dispatchEvent(new Event("consentChange"));
          }}
        >
          We use cookies to enhance your experience, analyze usage, and deliver ads. Learn more in our{" "}
          <Link to="/cookie" style={{ color: theme.colors.red[500] || "#EF4444", textDecoration: "underline" }}>
            Cookie Policy
          </Link>
          ,{" "}
          <Link to="/privacy" style={{ color: theme.colors.red[500] || "#EF4444", textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          , or{" "}
          <Link to="/terms" style={{ color: theme.colors.red[500] || "#EF4444", textDecoration: "underline" }}>
            Terms
          </Link>
          .
        </CookieConsent>
      )}
    </Flex>
  );
}