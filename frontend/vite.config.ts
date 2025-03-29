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
      globals: {
        Buffer: true,
        global: true,
      },
    }),
    // Custom plugin to handle robots.txt and sitemap.xml
    {
      name: 'static-seo-files',
      writeBundle() {
        // Define file contents (or read from existing files)
        const robotsTxt = fs.readFileSync('./src/robots.txt', 'utf-8');
        const sitemapXml = fs.readFileSync('./src/sitemap.xml', 'utf-8');
        
        // Write to the build output directory
        fs.writeFileSync('./dist/robots.txt', robotsTxt);
        fs.writeFileSync('./dist/sitemap.xml', sitemapXml);
        
        console.log('✅ Generated robots.txt and sitemap.xml');
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
});