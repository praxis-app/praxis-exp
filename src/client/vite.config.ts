import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as dotenv from 'dotenv';

dotenv.config();

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_PORT: number;
      SERVER_PORT: number;
    }
  }
}

// https://vitejs.dev/config
export default defineConfig({
  plugins: [react()],
  root: 'src/client',
  server: {
    port: process.env.CLIENT_PORT,
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.SERVER_PORT}/api`,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: '../../dist/client',
  },
});
