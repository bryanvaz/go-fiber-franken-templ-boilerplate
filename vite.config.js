
import { defineConfig } from 'vite'
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  return {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: './node_modules/geist/dist/fonts/geist-sans/*',
            dest: 'assets/fonts/geist-sans/'
          },
          {
            src: './node_modules/geist/dist/fonts/geist-mono/*',
            dest: 'assets/fonts/geist-mono/'
          }
        ]
      }),
    ],
    root: path.resolve(__dirname, './'),
    build: {
      outDir: isProduction
        ? path.resolve(__dirname, 'dist')
        : path.resolve(__dirname, 'tmp/dist'),
      sourcemap: true,
      minify: false,
      rollupOptions: {
        input: {
          app: path.resolve(__dirname, 'src/js/app.js')
        },
        output: {
          entryFileNames: 'assets/[name].js',
          assetFileNames: (assetInfo) => {
            return 'assets/[name][extname]'
          }
        }
      },
      cssCodeSplit: true
    }
  }
})


