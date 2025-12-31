import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv';

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: Number(process.env.VITE_SERVER_PORT) || 3000,
    allowedHosts: [
    	process.env.VITE_SERVER_HOST || 'dev.davidjonathanlewis.com',
    ]
  },
  preview: {
    port: Number(process.env.VITE_SERVER_PORT) || 3000,
  },
})
