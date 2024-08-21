import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { analyzer } from 'vite-bundle-analyzer'
import createExternal from 'vite-plugin-external';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    analyzer({
      analyzerMode: 'server',
      openAnalyzer: false,
    }),
    createExternal({
      externals: {
        vue: 'Vue'
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        dir: 'docs',
      }
    }
  }
})
