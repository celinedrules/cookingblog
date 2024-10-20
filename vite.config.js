import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests from Vite (localhost:5173) to Express (localhost:3000)
      '/api': 'http://localhost:3000',
    },
  },
});
