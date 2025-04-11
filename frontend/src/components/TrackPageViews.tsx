import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const TrackPageViews = () => {
  const location = useLocation();
  const [consentGranted, setConsentGranted] = useState(
    document.cookie.includes("roamingproxy-consent=true")
  );

  useEffect(() => {
    const checkConsent = () => {
      setConsentGranted(document.cookie.includes("roamingproxy-consent=true"));
    };
    // Listen for cookie changes (simplified; consider a more robust solution in production)
    window.addEventListener("storage", checkConsent);
    checkConsent(); // Initial check
    return () => window.removeEventListener("storage", checkConsent);
  }, []);

  useEffect(() => {
    if (window.gtag && consentGranted) {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        send_to: "G-X7X57Z2WXP",
      });
    }
  }, [location.pathname, consentGranted]);

  return null;
};