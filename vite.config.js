import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'



export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    target: 'es2015',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        posts: path.resolve(__dirname, 'posts.html'),
      }
    }
  }
})