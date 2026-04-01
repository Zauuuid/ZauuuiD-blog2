import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: { host: '0.0.0.0' },
  base: "/ZauuuiD-blog2/", // 🔥 EXACT repo name (case-sensitive)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
