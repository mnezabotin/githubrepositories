import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

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
      name: 'styles',
      filename: 'remoteEntry.js',
      exposes: {
        './': './src/styles/index.ts',
        './Box': './src/styles/Box.tsx',
        './Button': './src/styles/Button.tsx',
        './Flex': './src/styles/Flex.tsx',
        './Grid': './src/styles/Grid.tsx',
        './Img': './src/styles/Img.tsx',
        './Input': './src/styles/Input.tsx',
        './Span': './src/styles/Span.tsx',
        './LoadingList': './src/LoadingList.tsx',
      },
      shared: ['react', 'react-dom', 'styled-components'],
    }),
  ],
  preview: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
