import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: [], // we’ll update this when the problematic module is known
    },
  },
})
