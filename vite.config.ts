import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    base: 'http://localhost:3000',
    root: './src',
  }
})