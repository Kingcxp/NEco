import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.VITE_IS_GITHUB_PAGES ? '/neco/' : '/',
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
