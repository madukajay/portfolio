import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  // Custom domain https://madukajay.is-a.dev serves from the site root
  base: "/",
  plugins: [react(), tailwindcss()],
})
