import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Алиас для папки src
      "@components": resolve(__dirname, "src/components"), // Алиас для компонентов
      "@utils": resolve(__dirname, "src/utils"), // Алиас для утилит
      "@styles": resolve(__dirname, "src/styles"), // Алиас для стилей
    },
  },
});
