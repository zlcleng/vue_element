import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import externalGlobals from 'rollup-plugin-external-globals'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  rollupOptions:{
    external: ['vue', 'element-plus'],
    plugins: [
        externalGlobals({
            vue: 'Vue',
            'element-plus': 'ElementPlus',
        }),
    ],
  }
})
