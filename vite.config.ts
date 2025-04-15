import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'react-parallax': ['react-parallax'],
          'react-intersection-observer': ['react-intersection-observer'],
        },
      },
    },
  },
  server: {
    watch: {
      usePolling: false,
    },
  },
});