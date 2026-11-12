import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  // Project site at https://madukajay.github.io/portfolio/
  base: "/portfolio/",
  plugins: [react(), tailwindcss()],
})
