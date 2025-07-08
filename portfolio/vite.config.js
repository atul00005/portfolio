import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ Important line
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
