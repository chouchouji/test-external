import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalGlobals from "rollup-plugin-external-globals";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isBuildCommand = command === 'build'

  const plugins = [
    vue()
  ]

  if (isBuildCommand) {
    plugins.push(externalGlobals({
      vue: "Vue",
      echarts: 'echarts',
    }))
  }

  return {
    base: './',
    plugins,
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
            if (id.includes('src/utils/utils-')) {
              return 'utils'
            }

            if (id.includes('node_modules/lodash-es')) {
              return 'lodash'
            }
          }
        }
      }
    },
  }
})
