import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/ZauuuiD-Portfolio/", // 🔥 EXACT repo name (case-sensitive)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
