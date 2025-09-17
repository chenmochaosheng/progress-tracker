import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'progress-tracker'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`
})
