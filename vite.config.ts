// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      insertTypesEntry: true, // crea la entrada de tipos para package.json
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ImperioHubUI",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "lucide-react",
        "framer-motion",
        "react-router-dom"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "lucide-react": "LucideReact",
          "framer-motion": "FramerMotion",
          "react-router-dom": "ReactRouterDOM",
        },
        // Preserve CSS modules
        assetFileNames: (assetInfo) => {
          if (assetInfo.names && assetInfo.names[0] === 'style.css') return 'index.css';
          return assetInfo.names?.[0] || 'assets/[name]-[hash][extname]';
        },
      },
    },
    sourcemap: true,
    cssCodeSplit: false, // Bundle all CSS into one file
    minify: 'esbuild',
    target: 'es2015',
  },
});
