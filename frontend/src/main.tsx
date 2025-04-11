import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import { StrictMode } from "react";
import React from "react";
import { OpenAPI } from "./client";
import theme from "./theme";
import "./styles/global.css";
import CookieConsent from "react-cookie-consent";

OpenAPI.BASE = "https://apis.roamingproxy.com";
OpenAPI.TOKEN = async () => localStorage.getItem("access_token") || "";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <CookieConsent
          location="bottom"
          buttonText="Accept All"
          declineButtonText="Decline"
          cookieName="roamingproxy-consent"
          enableDeclineButton
          style={{
            background: theme.colors.gray[800],
            color: theme.colors.white,
            padding: "16px",
            fontSize: "14px",
            zIndex: 9999, // Above other content
          }}
          buttonStyle={{
            background: theme.colors.red[500], // Matches your legal links
            color: theme.colors.white,
            borderRadius: theme.radii.md,
            padding: "8px 16px",
            fontWeight: "medium",
          }}
          declineButtonStyle={{
            background: theme.colors.gray[500],
            color: theme.colors.white,
            borderRadius: theme.radii.md,
            padding: "8px 16px",
            fontWeight: "medium",
          }}
          expires={150} // Matches your policy’s 150-day retention
          onAccept={() => {
            window.gtag("consent", "update", {
              ad_storage: "granted",
              analytics_storage: "granted",
              personalization_storage: "granted",
              functionality_storage: "granted",
              security_storage: "granted",
            });
          }}
          onDecline={() => {
            window.gtag("consent", "update", {
              ad_storage: "denied",
              analytics_storage: "denied",
              personalization_storage: "denied",
              functionality_storage: "denied",
              security_storage: "granted", // Essential per policy
            });
          }}
        >
          We use cookies to enhance your experience, analyze usage, and deliver ads. Learn more in our{" "}
          <Link href="/cookie" color="red.500" textDecoration="underline">
            Cookie Policy
          </Link>
          ,{" "}
          <Link href="/privacy" color="red.500" textDecoration="underline">
            Privacy Policy
          </Link>
          , or{" "}
          <Link href="/terms" color="red.500" textDecoration="underline">
            Terms
          </Link>
          .
        </CookieConsent>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);