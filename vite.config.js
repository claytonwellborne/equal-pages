import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Change 'equal-pages' to your actual GitHub repository name.
// This must match exactly for GitHub Pages routing to work.
export default defineConfig({
  plugins: [react()],
  base: '/equal-pages/',
})
