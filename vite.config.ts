import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    outDir: './docs'
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~fontawesome': path.resolve(__dirname, 'node_modules/fontawesome'),
    }
  },
  plugins: [react()]
})
