// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/one-ten-protocol/', // For GitHub Pages subpath
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          pyodide: ['pyodide'], // Isolate Pyodide for caching
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  // Allow importing .py files as text (for future WASM/Rust migration)
  esbuild: {
    loader: 'jsx'
  }
});
