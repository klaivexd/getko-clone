import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   extensions: ['.js', '.jsx', '.json', '.vue', '.ts', '.tsx', '.png'],
  // },
  
  plugins: [react()],
})
