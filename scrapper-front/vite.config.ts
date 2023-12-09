/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

const define = process.env.NODE_ENV === 'development' ? { global: {} } : undefined;

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      all: true,
      provider: 'istanbul', // or 'c8'
      reporter: ['text', 'text-summary', 'cobertura'],
      exclude: [
        './node_modules/',
        './src/setupTests.ts',
        'src/**/__tests__/*.ts',
      ],
      include: [
        'src/**/*.ts',
        'src/**/*.js',
      ],
    },
  },
  // "process.env": process.env,
  // // By default, Vite doesn't include shims for NodeJS/
  // // necessary for segment analytics lib to work
  // global: {},
  define,
  build: {
    outDir: 'build',
    sourcemap: false,
    rollupOptions: {
      cache: false,
      maxParallelFileOps: 2,
      output: {
        sourcemap: false,
        manualChunks: (id) => {
          if (id.includes('xlsx')) {
            return 'xlsx';
          }
          if (id.includes('moment')) {
            return 'moment';
          }
          if (id.includes('zod')) {
            return 'zod';
          }
          if (id.includes('rc-picker')) {
            return 'rc-picker';
          }
          if (id.includes('imask')) {
            return 'imask';
          }
          if (id.includes('rc-select')) {
            return 'rc-select';
          }
          if (id.includes('mobx')) {
            return 'mobx';
          }
          if (id.includes('apollo')) {
            return 'apollo';
          }

          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    open: 'http://localhost:3000',
    port: 3000,
    hmr: {
      host: 'localhost',
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    react({
      babel: {
        compact: false,
      },
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
  ],
});
