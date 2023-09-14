import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
const PROXY_API = `http://127.0.0.1:3000`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    } 
  },
  base: './',
  server:{
    port:8080,
    open:true,
    proxy: {
      '/api': {
        target: PROXY_API,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),

      },
    },
  },

})
