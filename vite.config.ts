import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { analyzer } from 'vite-bundle-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    analyzer({
      analyzerMode: 'server',
      openAnalyzer: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: 'docs',
        exports: 'named',
        globals: {
          vue: 'Vue',
        }
      }
    }
  }
})
