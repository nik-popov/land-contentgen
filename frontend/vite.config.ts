import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import fs from 'fs';

export default defineConfig({
    plugins: [
      react(),
      TanStackRouterVite({
        routesDirectory: "./src/routes",
        generatedRouteTree: "./src/routeTree.gen.ts",
      }),
      nodePolyfills({
        globals: { Buffer: true, global: true },
      }),
      // Remove the static-seo-files plugin
    ],
    resolve: {
      alias: { "@": path.resolve(__dirname, "src") },
    },
    optimizeDeps: {
      esbuildOptions: { define: { global: "globalThis" } },
    },
  });