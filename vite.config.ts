import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project-site subpath derived from the configured origin repository name.
export default defineConfig({
  plugins: [react()],
  base: '/carlos-portafolio/',
})
