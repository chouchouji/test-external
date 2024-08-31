import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalGlobals from "rollup-plugin-external-globals";

const isProduction = process.env.NODE_ENV === 'production'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    isProduction && externalGlobals({
      vue: "Vue",
      echarts: 'echarts',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: false,
    rollupOptions: {
      external: ['vue', 'echarts'],
      output: {
        dir: 'docs',
        manualChunks(id) {
          if (id.includes('src/utils')) {
            return 'utils'
          }

          if (id.includes('node_modules/lodash-es')) {
            return 'lodash'
          }
        }
      }
    }
  },
})
