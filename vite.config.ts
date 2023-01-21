import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: 'esnext',
    assetsDir: 'static'
  },
})
