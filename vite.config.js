// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Necesitas importar 'path' para resolver directorios

// Definimos la lista de archivos HTML
const htmlFiles = [
  "index.html",
  "ejercicio-busqueda.html",
  "ejercicio-contador-clicks.html",
  "ejercicio-contador-palabras.html",
  "ejercicio-cambiar-color-fondo.html",
  "ejercicio-calculadora.html",
  "ejercicio-lista-dinamica.html",
  "ejercicio-generador.html",
  "ejercicio-temporizador.html",
  "ejercicio-tareas-localstorage.html",
];

export default defineConfig({
  // Propiedad 1: Configuración de rutas base
  base: "/react-ejercicios2/",

  // Propiedad 2: Plugins
  plugins: [
    react(),
    // Aquí podrías añadir la configuración 'include' si fuera necesaria,
    // pero vamos a dejarla simple por ahora.
  ],

  // Propiedad 3: Configuración de Múltiples Páginas (MPA)
  build: {
    rollupOptions: {
      input: htmlFiles.reduce((acc, file) => {
        acc[path.basename(file, ".html")] = path.resolve(__dirname, file);
        return acc;
      }, {}),
    },
  },
}); // <-- ¡Un único y correcto cierre de defineConfig!
