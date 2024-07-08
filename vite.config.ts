import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    host: '0.0.0.0', // 监听所有地址，包括局域网和公网地址

    open: true, // 启动时是否打开浏览器
    port: 9090, // 端口号
    fs: {
      allow: [
        'C:/Users/Joon/node_modules',
        'C:/Users/Joon/Desktop/vite-project'
      ]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});



