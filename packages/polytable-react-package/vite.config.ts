import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss(), dts({
    entryRoot: './src',
    outDir: './dist',
    tsconfigPath: path.resolve(__dirname, 'tsconfig.app.json'),
    rollupTypes: true
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    open: true
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'Polytable',
      fileName: 'index',
      formats: ["es"]
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
});
