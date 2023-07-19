import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    https: true,
    origin: 'https://main--visionary-sunshine-8463b2.netlify.app',
    proxy: {
      '/api': {
        target: 'https://goal-setter-7afl.onrender.com',
        changeOrigin: true,
      },
    },
  },
});
