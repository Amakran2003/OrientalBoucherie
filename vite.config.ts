import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { splitVendorChunkPlugin } from 'vite';
import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
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
    include: ['lucide-react', 'framer-motion', 'react-router-dom', 'react-i18next'],
  },
  base: process.env.NODE_ENV === 'production' ? '/OrientalBoucherie/' : '/',
  build: {
    chunkSizeWarningLimit: 1000, // in kilobytes (1000 = 1 MB)
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
        manualChunks: (id) => {
          // React vendor chunk
          if (id.includes('node_modules/react/') || 
              id.includes('node_modules/react-dom/') || 
              id.includes('node_modules/react-router-dom/')) {
            return 'react-vendor';
          }
          
          // UI libraries vendor chunk
          if (id.includes('node_modules/framer-motion/') || 
              id.includes('node_modules/lucide-react/')) {
            return 'ui-vendor';
          }
          
          // i18n vendor chunk
          if (id.includes('node_modules/react-i18next/') || 
              id.includes('node_modules/i18next/')) {
            return 'i18n-vendor';
          }
          
          // Let splitVendorChunkPlugin handle other dependencies
          if (id.includes('node_modules/')) {
            return 'vendor';
          }
        },
        // Improve chunk naming pattern
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
