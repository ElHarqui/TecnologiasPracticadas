import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@components":  path.resolve(__dirname, './src/components'),
      "@pages":       path.resolve(__dirname, './src/pages'),
      "@assets":      path.resolve(__dirname, './src/assets'),
    },
  },
  // Permite que Vite trate archivos .tif/.tiff como assets estáticos
  assetsInclude: ["**/*.tif", "**/*.tiff"],
});
