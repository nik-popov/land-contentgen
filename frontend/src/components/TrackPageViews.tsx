import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

export const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    // Only send page view if analytics_storage is granted
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        send_to: "G-X7X57Z2WXP",
      });
    }
  }, [location.pathname]);

  return null;
};