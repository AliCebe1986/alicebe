import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or whatever framework you're using

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Important for GitHub Pages subdirectory deployment
  // ...any other config options
})
