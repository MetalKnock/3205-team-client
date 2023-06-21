import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import browserslistToEsbuild from 'browserslist-to-esbuild';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/styles/_variables.scss";
        @import "./src/styles/_helpers.scss";`,
      },
    },
  },
  build: {
    target: browserslistToEsbuild(),
  },
});
