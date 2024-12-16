import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/greenportV2/',  // Add this line - should match your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
