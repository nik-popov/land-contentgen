import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const TrackPageViews = () => {
  const location = useLocation();
  const [consentGranted, setConsentGranted] = useState(
    document.cookie.includes("roamingproxy-consent=true")
  );

  useEffect(() => {
    const handleConsentChange = () => {
      setConsentGranted(document.cookie.includes("roamingproxy-consent=true"));
    };
    window.addEventListener("storage", handleConsentChange);
    handleConsentChange();
    return () => window.removeEventListener("storage", handleConsentChange);
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