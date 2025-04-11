import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const TrackPageViews = () => {
  const location = useLocation();
  const [consentGranted, setConsentGranted] = useState(
    document.cookie.includes("roamingproxy-consent=true")
  );

  useEffect(() => {
    // Poll for consent cookie changes
    const checkConsent = () => {
      const granted = document.cookie.includes("roamingproxy-consent=true");
      setConsentGranted(granted);
    };
    const interval = setInterval(checkConsent, 100); // Check every 100ms
    checkConsent(); // Initial check
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (window.gtag && consentGranted) {
      console.log("TrackPageViews: Sending page view for", location.pathname);
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        send_to: "G-X7X57Z2WXP",
      });
    }
  }, [location.pathname, consentGranted]);

  return null;
};