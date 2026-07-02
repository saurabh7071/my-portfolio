import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { visualizer } from "rollup-plugin-visualizer"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,        // auto-opens the report in your browser after build
      gzipSize: true,
      brotliSize: true,
      filename: "dist/stats.html",
    }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
