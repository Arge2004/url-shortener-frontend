// @ts-check
import { defineConfig } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/api': {
          target: 'http://13.58.106.198',
          changeOrigin: true,
          secure: false,
        }
      }
    }
  },
  site: 'https://Arge2004.github.io',
  base: '/url-shortener-frontend/',

});