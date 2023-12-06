import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
// https://vitejs.dev/config/
export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd())
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    css: {
      preprocessorOptions: {
        // 配置对应的scss变量可全局使用
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
