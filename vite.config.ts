import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  // Relative base works for both:
  // - https://madukajay.github.io/portfolio/
  // - https://madukajay.is-a.dev (custom domain)
  base: "./",
  plugins: [react(), tailwindcss()],
})
