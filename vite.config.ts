import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function counterPlugin(): Plugin {
  return {
    name: "counter-api",
    configureServer(server) {
      server.middlewares.use("/api/counter", async (_req, res) => {
        try {
          const apiRes = await (globalThis as { fetch: typeof fetch }).fetch("https://api.counterapi.dev/v1/latamrust/visits/up");
          const data = await apiRes.json();
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(data));
        } catch {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: "Counter unavailable" }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), counterPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
  },
  server: {
    headers: {
      'Cache-Control': 'no-cache',
    },
  },
});
