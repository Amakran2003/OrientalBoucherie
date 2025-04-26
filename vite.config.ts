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
    include: ['lucide-react', 'framer-motion', 'react-router-dom', 'react-i18next', 'react'],
  },
  // Always use the GitHub Pages base path in production for consistency
  base: '/OrientalBoucherie/',
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
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'i18n-vendor': ['react-i18next', 'i18next']
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
