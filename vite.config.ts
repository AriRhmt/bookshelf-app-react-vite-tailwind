// vite.config.ts
// Konfigurasi Vite untuk aplikasi React (dengan TypeScript).
// Ini harus ditempatkan di root direktori proyek Anda: C:/Users/Arirhm/bookshelf-app-react-vite-tailwind-main/bookshelf-app-react-vite-tailwind-main/vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
plugins: [react()], // Menggunakan plugin React
server: {
port: 5173, // Port default untuk server dev
},
});