import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "https://marinestrada.github.io/cv-site/dist/",
  base: "/cv-site/"
})
