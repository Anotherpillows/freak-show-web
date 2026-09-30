import { defineConfig } from "@leadconnector/vite-tanstack-config";

export default defineConfig({
  devServerBridge: { errorCollector: false },
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
});
