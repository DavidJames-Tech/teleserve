import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),basicSsl()],
   build: {
       outDir: './docs'
     },
   base: '/',
   root: '.', // Set your project's root directory
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@app': '/src/app',
      '@slices': '/src/slices',
      '@layouts': '/src/layouts'
    }
  }
})
