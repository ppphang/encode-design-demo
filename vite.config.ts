import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
      include: [
        'src/**/*.ts', 
        'src/**/*.d.tsx',
        'src/**/*.tsx'
      ],
      tsconfigPath: './tsconfig.app.json'
    })
  ],
  build: {
    target:'modules',
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      formats: ['es','cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        format: 'es',
        esModule: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    
  }
})
