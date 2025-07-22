import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light", // Changed to light mode as the default
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: () => ({
      "html, body": {
        fontFamily: '"Figtree", sans-serif',
        lineHeight: "1.7",
        bg: "blue.50", // Light blue background for a calming, safe feel
        color: "gray.800", // Hardcoded dark text for readability in light mode
      },
    }),
  },
  colors: {
    ui: {
      main: "#3B82F6", // Blue as the primary accent color
      secondary: "#60A5FA", // Light blue for secondary elements
      success: "#38A169", // Green for success states
      danger: "#7C3AED", // Purple for errors/warnings to avoid alarming colors and promote safety
      light: "#FFFFFF", // White for backgrounds
      dark: "#1A202C", // Dark background for dark mode (unchanged)
      darkSlate: "#2D3748", // Darker gray for contrast
      dim: "#A0AEC0", // Muted gray for secondary text (unchanged)
    },
  },
  components: {
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === "dark" ? "gray.100" : "gray.900",
      }),
    },
    Text: {
      baseStyle: (props) => ({
        color: props.colorMode === "dark" ? "gray.200" : "gray.700", // Darker text for light mode readability
      }),
    },
    Code: {
      baseStyle: (props) => ({
        bg: props.colorMode === "dark" ? "gray.700" : "gray.100", // Light background for light mode
        color: props.colorMode === "dark" ? "gray.100" : "gray.800", // Dark text in light mode
        fontSize: "sm",
        p: 3,
        borderRadius: "md",
      }),
    },
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
      },
      variants: {
        primary: {
          backgroundColor: "ui.main", // Blue accent
          color: "ui.light", // White text
          _hover: {
            backgroundColor: "#1D4ED8", // Darker blue on hover
          },
          _disabled: {
            backgroundColor: "ui.main",
            opacity: 0.6,
          },
        },
        danger: {
          backgroundColor: "ui.danger", // Purple
          color: "ui.light", // White text
          _hover: {
            backgroundColor: "#6D28D9", // Darker purple
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Tabs: {
      variants: {
        subtle: {
          tab: {
            color: "ui.dim",
            _selected: {
              color: "ui.main", // Blue for selected tab
              fontWeight: "bold",
              borderBottomColor: "ui.main", // Blue underline
              borderBottomWidth: "2px",
            },
            _hover: {
              color: "ui.secondary", // Light blue on hover
            },
          },
        },
      },
    },
    Toast: {
      baseStyle: {
        container: {
          bg: "white", // Bright white background (unchanged)
          color: "gray.800", // Dark text for better readability
          borderRadius: "md",
          boxShadow: "lg",
          padding: "16px",
          position: "absolute",
          top: "20px",
          transform: "translateX(-50%)", // Adjust for centering
          minWidth: "300px",
          maxWidth: "90%",
        },
      },
      variants: {
        error: {
          container: {
            bg: "purple.100", // Light purple for error to keep it calm
            color: "purple.900",
            border: "1px solid",
            borderColor: "purple.300",
          },
        },
        success: {
          container: {
            bg: "green.100", // Light green for success
            color: "green.900",
            border: "1px solid",
            borderColor: "green.300",
          },
        },
        info: {
          container: {
            bg: "blue.100", // Light blue for info
            color: "blue.900",
            border: "1px solid",
            borderColor: "blue.300",
          },
        },
        warning: {
          container: {
            bg: "yellow.100", // Light yellow for warning
            color: "yellow.900",
            border: "1px solid",
            borderColor: "yellow.300",
          },
        },
      },
    },
  },
});

export default theme;