import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/leda/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
