import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/goit-react-hw-01-components-2026/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
