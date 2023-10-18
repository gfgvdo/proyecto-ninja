import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // vite config
    define: {
      __DATABASE_HOST__: JSON.stringify(env.DATABASE_HOST),
      __DATABASE_USERNAME__: JSON.stringify(env.DATABASE_USERNAME),
      __DATABASE_PASSWORD__: JSON.stringify(env.DATABASE_PASSWORD),
    },

    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          room: resolve(__dirname, 'room/index.html'),
        },
      },
    },
  }
})
