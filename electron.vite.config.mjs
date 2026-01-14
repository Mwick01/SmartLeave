import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

// Custom plugin to copy db.js into out/main/
const copyDbPlugin = () => ({
  name: 'copy-db',
  closeBundle() {
    const src = resolve('src/main/db.js')
    const dest = resolve('out/main/db.js')

    // Ensure destination folder exists
    fs.mkdirSync(resolve('out/main'), { recursive: true })
    fs.copyFileSync(src, dest)
    console.log('✅ Copied db.js to out/main/')
  }
})

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), copyDbPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react(), tailwindcss()]
  }
})
