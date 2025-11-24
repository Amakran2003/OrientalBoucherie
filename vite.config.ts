import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 1024,
    }),
    // Add bundle analysis in production when using --analyze flag
    ...(process.env.ANALYZE ? [
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    ] : []),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', 'framer-motion', 'react-router-dom', 'react-i18next', 'react-helmet-async'],
  },
  base: '/',
  build: {
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    reportCompressedSize: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'i18n-vendor': ['react-i18next', 'i18next', 'i18next-browser-languagedetector'],
        },
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  server: {
    open: true,
    hmr: {
      overlay: true,
    },
  },
});
