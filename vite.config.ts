import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dependencies } from './package.json'
// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  ssr: {
    noExternal: mode === 'production' ? Object.keys(dependencies) : undefined,
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, 'shared'),
    },
  },
}))
