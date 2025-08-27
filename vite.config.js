import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { basePath } from "./src/constants";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basePath,
});
