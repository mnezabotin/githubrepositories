import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  plugins: [
    react(),
    federation({
      name: 'main',
      remotes: {
        styles: 'http://localhost:5173/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'styled-components'],
    }),
  ],
})
