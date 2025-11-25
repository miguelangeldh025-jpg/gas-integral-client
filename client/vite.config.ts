import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal"; // Asumo que este plugin está instalado

// Usa path.resolve para obtener la ruta absoluta
// __dirname hace referencia al directorio actual del archivo (client/)

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // Los plugins de Replit que usan 'await import' deben ser manejados con cuidado.
    // Para Vercel, que es un entorno de producción, los mantendremos.
    // Si la compilación falla con "await import", podríamos tener que eliminarlos.
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          // Manteniendo tu configuración original de plugins asíncronos de Replit
          // A veces fallan en Vercel, pero los dejamos por ahora.
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  
  // ----------------------------------------------------
  // --- CORRECCIÓN DE RUTAS ABSOLUTAS (Monorepo) ---
  // ----------------------------------------------------
  resolve: {
    alias: {
      // @: Ahora apunta a client/src (Ya que vite.config.ts está dentro de client/)
      "@": path.resolve(import.meta.dirname, "src"),
      // @shared: Debe retroceder un nivel (..) para salir de 'client'
      "@shared": path.resolve(import.meta.dirname, "..", "shared"),
      // @assets: Debe retroceder un nivel (..)
      "@assets": path.resolve(import.meta.dirname, "..", "attached_assets"),
    },
  },
  
  // ----------------------------------------------------
  // --- CORRECCIÓN DE DIRECTORIOS ---
  // ----------------------------------------------------
  // Root: Ya no necesita apuntar a 'client', ya que el archivo está allí.
  // path.resolve(import.meta.dirname) apunta a la carpeta actual (client/)
  root: path.resolve(import.meta.dirname), 
  
  // Build: outDir debe apuntar fuera de la carpeta client (si quieres el dist en la raíz del repo)
  // Pero para Vercel, lo mejor es que el build quede en 'client/dist'
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },

  // ----------------------------------------------------
  // --- CONFIGURACIÓN DE SERVER (Para desarrollo) ---
  // ----------------------------------------------------
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});