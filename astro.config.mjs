import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true, // Listen on all addresses, including LAN and public addresses
    port: 4321  // Default Astro port
  }
});
