import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map 'three/addons' imports to the examples/jsm directory in the three package
      'three/addons': 'three/examples/jsm',
    },
  },
})